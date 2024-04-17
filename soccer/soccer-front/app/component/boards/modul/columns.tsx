
import { Typography } from '@mui/material'
import { GridRowId, GridColDef } from '@mui/x-data-grid'
import Link from 'next/link';
import { PG } from '@/app/component/common/enums/PG';
import { MyTypography } from '../../common/style/cell';


export default function boardColumns(): GridColDef[] {

    interface CellType {
        row: IBoard;
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
            field: 'boardName',
            headerName: 'board Name',
            renderCell: ({ row }: CellType) =>
                MyTypography(
                    <Link href={`${PG.BOARD}/detail/${row.id}`}> {row.boardName} </Link>
                    , "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'boardType',
            headerName: 'board Type',
            renderCell: ({ row }: CellType) => MyTypography(row.boardType, "1.5rem")
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