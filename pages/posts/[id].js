import React, { useState, useEffect } from 'react';
import { google } from 'googleapis';

const Post = ({ title, content }) => {
  const [valueTotal, setValueTotal] = useState(0);

  useEffect(() => {
    setValueTotal(content.reduce((total, value) => total + parseInt(value, 10) || 0, 0)); //Convert variable "value" from str to int, update variable "valueTotal" when content changes
  }, [content]);

  return (
    <div>
      <h1>Hi!</h1>
      <p>Scarboroughians have lost {valueTotal} minutes since the shutdown of the RT.</p>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });
  const sheets = google.sheets({ version: 'v4', auth }); //Sets up Google Shets API

  const {id} = query;
  const range = `B1:B`; // Get range of spreadsheet
  const response = await sheets.spreadsheets.values.batchGet({ //Send request to API w/ sheet id and range
    spreadsheetId: process.env.SHEET_ID, 
    ranges: [range],
  });

  const values = response.data.valueRanges[0]?.values || []; // Collects those values

  return {
    props: {
      title: values[0] || null,
      content: values.flat(),
    },
  };
}

export default Post;
