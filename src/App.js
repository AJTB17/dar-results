// import React from 'react';
// import logo from './logo.svg';
// import './App.css'
import * as XLSX from 'xlsx/xlsx.mjs';

// const XLSX = require('xlsx')
export default function ExpExcel(){
    const excel = XLSX.readFile(
        'C:\\Users\\Tiapa\\Desktop\\prueba\\datos.xlsx'
    )
    const nombreHoja = excel.SheetNames
    const datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]])
    console.log(datos)

    return <div>{
      <p>{datos}</p>
  }</div>
}

ExpExcel()
