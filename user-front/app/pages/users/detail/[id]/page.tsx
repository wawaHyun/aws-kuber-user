'use client'

import { MyTypography } from "@/app/component/common/style/cell"
import { IUser } from "@/app/component/users/model/user.model"
import { initialState } from "@/app/component/users/service/user.inti"
import { deleteUserById, findUserById, modifyUserById } from "@/app/component/users/service/user.service"
import { getFindUser } from "@/app/component/users/service/user.slice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function UserDetailPage({ params }: any) {
  const dispatch = useDispatch()
  const findUser = useSelector(getFindUser)


  const [inputValue, setInputValue] = useState({ id: params.id, username: '', password: '', name: '', phone: '', job: '' });


  const handleInput = (e: any) => {
    const {
      target: { value, name }
    } = e;
    setInputValue(dto => ({ ...dto, [name]: value }));
  };

  const handleModify = () => {
    console.log("handleModify : " + JSON.stringify(inputValue));
    dispatch(modifyUserById(inputValue))
  }

  const handleDelete = () => {
    dispatch(deleteUserById(params.id))
  }

  useEffect(() => {
    dispatch(findUserById(params.id))
  }, [dispatch])

  return (<>

    {MyTypography('user detail : ' + params.id, "1.5rem")}
    {findUser.id && <>
      {MyTypography('ID : ' + params.id, "1.5rem")}

      {MyTypography(<input type="text" name='username' defaultValue={findUser.username} onChange={handleInput} />, "1.5rem")}

      {MyTypography(<input type="text" name='password' defaultValue={findUser.password} onChange={handleInput} />, "1.5rem")}

      {MyTypography(<input type="text" name='name' defaultValue={findUser.name} onChange={handleInput} />, "1.5rem")}

      {MyTypography(<input type="text" name='phone' defaultValue={findUser.phone} onChange={handleInput} />, "1.5rem")}

      {MyTypography(<input type="text" name='job' defaultValue={findUser.job} onChange={handleInput} />, "1.5rem")}

      {MyTypography('등록일 : ' + findUser.regDate, "1.5rem")}
      {MyTypography('수정일 : ' + findUser.modDate, "1.5rem")}

      <br />
      {MyTypography(<button type="button" onClick={handleModify} > 수정</button>, "1.5rem")}
      {MyTypography(<button type="button" onClick={handleDelete} > 삭제</button>, "1.5rem")}
    </>
    }
  </>)
}