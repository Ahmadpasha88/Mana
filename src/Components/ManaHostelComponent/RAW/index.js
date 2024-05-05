// import React from 'react'

// const XLSX = require('xlsx');

// const RawData = () => {

// // Load the Excel file
// const workbook = XLSX.readFile('./Project-Management-Sample-Data.xlsx');

// // Get the first sheet
// const sheetName = workbook.SheetNames[0];
// const sheet = workbook.Sheets[sheetName];

// // Convert the sheet data to JSON
// const jsonData = XLSX.utils.sheet_to_json(sheet);

// console.log(jsonData); // JSON data

//   return (
//     <div>
//       raw
//     </div>
//   )
// }

// export default RawData




import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const RawData = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setJsonData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {jsonData && (
        <div>
          <h2>JSON Data:</h2>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RawData;
