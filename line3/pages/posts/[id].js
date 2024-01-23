import React from 'react';
import { google } from 'googleapis';

const Post = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      {content && content.map((value, index) => <p key={index}>{value}</p>)}
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });
  const sheets = google.sheets({ version: 'v4', auth });

  const { id } = query;
  const range = `B2:B`;
  const response = await sheets.spreadsheets.values.batchGet({
    spreadsheetId: process.env.SHEET_ID,
    ranges: [range],
  });

  const values = response.data.valueRanges[0]?.values || [];

  
  const [title, ...content] = values;

  return {
    props: {
      title: title ? title[0] : null,
      content: content.flat(), 
    },
  };
}

export default Post;
