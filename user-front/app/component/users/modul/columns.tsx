import { Link } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { PG } from '@/app/component/common/enums/PG';
import { IUser } from '../model/user.model';
import { MyTypography } from '../../common/style/cell';


export default function userColumns(): GridColDef[] {

    interface CellType {
        row: IUser;
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
            field: 'username',
            headerName: 'USERNAME',
            renderCell: ({ row }: CellType) =>
                MyTypography(
                    <Link href={`${PG.USER}/detail/${row.id}`}> {row.username} </Link>
                    , "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'password',
            headerName: 'PASSWORD',
            renderCell: ({ row }: CellType) => {
                MyTypography(row.password, "1.5rem")
                return MyTypography('********', "1.5rem")
            }
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'name',
            headerName: 'NAME',
            renderCell: ({ row }: CellType) => MyTypography(row.name, "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'phone',
            headerName: 'PHONE',
            renderCell: ({ row }: CellType) => MyTypography(row.phone, "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'job',
            headerName: 'JOB',
            renderCell: ({ row }: CellType) => MyTypography(row.job, "1.5rem")
        }
    ]
}