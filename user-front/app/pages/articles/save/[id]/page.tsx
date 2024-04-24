'use client'

import { AttachFile, FmdGood, ThumbUpAlt } from '@mui/icons-material';
import { MyTypography } from '@/app/component/common/style/cell';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSaveArticle } from '@/app/component/articles/service/article.slice';
import { saveArticle } from '@/app/component/articles/service/article.service';
import { PG } from '@/app/component/common/enums/PG';
import { getAllBoards } from '@/app/component/boards/service/board.slice';
import { fetchAllBoards } from '@/app/component/boards/service/board.service';
import { parseCookies } from 'nookies';
import { jwtDecode } from 'jwt-decode';



export default function ArticleSave({ params }: any) {

  const router = useRouter();

  const dispatch = useDispatch();
  const SaveArticle = useSelector(getSaveArticle);
  const board: [] = useSelector(getAllBoards);

  const [saveArti, setSaveArti] = useState({board:params.id, writer:jwtDecode<any>(parseCookies().accessToken).id} as IArticle)
  // const [saveArti, setSaveArti] = useState({board:params.id} as IArticle)
  // const [saveArti, setSaveArti] = useState({} as IArticle)

  const handleInsert = (e: any) => {
    const {
      target: { value, name }
    } = e;
    setSaveArti(dto => ({ ...dto, [name]: value }));
    // console.log("log " + JSON.stringify(saveArti))
  }

  const handleSubmit = (e: any) => {
    console.log(saveArti)
    dispatch(saveArticle(saveArti))
    // router.push(`${PG.ARTICLE}/list/${saveArti.board}`)
  }

  const handelCancel = (e: any) => {
    console.log(saveArti)
    // router.back()
  }

  useEffect(() => {
    dispatch(fetchAllBoards(1))
  }, [])



  return (

    <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
      <form className="max-w-sm mx-auto">
        <form className="block mb-2 text-gray-900 dark:text-white" name="writer" >{jwtDecode<any>(parseCookies().accessToken).username}님의 Article 작성</form>
        {/* {MyTypography('작성자 : ' + jwtDecode<any>(parseCookies().accessToken).username, '1.5rem')} */}
        {/* <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Board title</label> */}
        <select name="board" onChange={handleInsert} defaultValue={params.id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {board.map((i: IBoard) =>
            <option key={i.id} value={i.id}>{i.title}</option>
          )}
        </select>
      </form>

      <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" placeholder="Title" type="text" name="title" onChange={handleInsert} />
      <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" placeholder="Describe everything about this post here" name="content" onChange={handleInsert}></textarea>
      {/* <!-- icons --> */}
      <div className="icons flex text-gray-500 m-2">
        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <ThumbUpAlt component={ThumbUpAlt}></ThumbUpAlt>
        </svg>
        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <FmdGood component={FmdGood}></FmdGood>
        </svg>
        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <AttachFile component={AttachFile}></AttachFile>
        </svg>
        <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
      </div>

      {/* <!-- buttons --> */}
      <div className="buttons flex">
        <div className="btn  overflow-hidden relative w-30 bg-white text-blue-500 p-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full 
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
          onClick={handelCancel}>Cancel</div>
        <div className="btn  overflow-hidden relative w-30 bg-blue-500 text-white p-3 px-8 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full 
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
          onClick={handleSubmit}> Post </div>
      </div>
    </div>
  )
}