
'use client'

import CompanyColumns from "@/app/component/columns/company-columns";
import CompanyRows from "@/app/component/rows/company-rows";
import { NextPage } from "next";

const Companies:NextPage=() =>{



  return (<>
    <h3>Company</h3>

    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {CompanyRows().map(v => CompanyColumns(v))}
      </tbody>
    </table>
  </>
  )
}


export default Companies;