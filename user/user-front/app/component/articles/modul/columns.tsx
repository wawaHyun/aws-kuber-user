
import { Link } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { MyTypography } from '../../common/style/cell';
import { PG } from '../../common/enums/PG';


export default function articleColumns(): GridColDef[] {

    interface CellType {
        row: IArticle;
    }


    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'No.',
            renderCell: ({ row }: CellType) => MyTypography(row.id, "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'title',
            headerName: 'TITLE',
            renderCell: ({ row }: CellType) =>
                MyTypography(
                    <Link href={`${PG.ARTICLE}/detail/${row.id}`}> {row.title} </Link>
                    , "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'content',
            headerName: 'CONTENT',
            renderCell: ({ row }: CellType) => MyTypography(row.content, "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'modDate',
            headerName: 'mod date',
            renderCell: ({ row }: CellType) => MyTypography(row.modDate, "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'regDate',
            headerName: 'reg date',
            renderCell: ({ row }: CellType) => MyTypography(row.regDate, "1.5rem")
        }

    ]
}