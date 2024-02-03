import React, { useState, useEffect } from 'react';
import { google } from 'googleapis';

const Post = ({ title, content }) => {
  const [valueTotal, setValueTotal] = useState(0);

  useEffect(() => {
    setValueTotal(content.reduce((total, value) => total + parseInt(value, 10) || 0, 0)); //Convert variable "value" from str to int, update variable "valueTotal" when content changes
  }, [content]);

  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"></link>
      <div class="secOne">
          <div class="ValueTotalText">
            <h2>Scarboroughians have lost</h2>
            <h1>{valueTotal} minutes</h1>
            <h2>since the closure of Line 3.</h2>
          </div>
          <img src="/tower.svg"></img>
          <div class="GradTrans">
          </div>
          <div class="secTwo">
            
          </div>
          
        </div>
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
