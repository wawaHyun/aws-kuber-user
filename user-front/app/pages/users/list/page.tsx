'use client'
import userColumns from "@/app/component/users/modul/columns";
import { fetchAllUsers, findCountUsers } from "@/app/component/users/service/user.service";
import { getAllUsers, getCountUser } from "@/app/component/users/service/user.slice";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyTypography } from "@/app/component/common/style/cell";

const AllusersPage: NextPage = () => {
    const dispatch = useDispatch()
    const allUsers: [] = useSelector(getAllUsers)
    const countUsers: number = useSelector(getCountUser)

    useEffect(() => {
        dispatch(fetchAllUsers(1))
        dispatch(findCountUsers())
    }, [dispatch])

    return (<>
        {MyTypography('ALL Users (length) : ' + allUsers.length, "1.5rem")}
        {MyTypography('ALL Users (count) : ' + countUsers, "1.5rem")}

        <div style={{ height: "100%", width: "100%" }}>
            {allUsers && <DataGrid// 🔥 4
                rows={allUsers}
                columns={userColumns()}
                pageSizeOptions={[5, 10, 20, 100]} // 4-1
                checkboxSelection
            />}
        </div>

    </>)
}

export default AllusersPage