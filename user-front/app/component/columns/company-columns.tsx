import { GridColDef } from "@mui/x-data-grid";


export default function CompanyColumns(props: ICompany){
    return [
        <tr key={props.id}>
        <td>{props.company}</td>
        <td>{props.contact}</td>
        <td>{props.country}</td>
    </tr>
    ];
}