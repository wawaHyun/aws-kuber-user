'use client'

import { AttachFile, FmdGood, ThumbUpAlt } from '@mui/icons-material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { MyTypography } from '@/app/component/common/style/cell';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSaveArticle } from '@/app/component/articles/service/article.slice';
import { saveArticle } from '@/app/component/articles/service/article.service';
import { PG } from '@/app/component/common/enums/PG';

export default function ArticleSave() {

  const router = useRouter();

  const dispatch = useDispatch();
  const [saveArti, setSaveArti] = useState({} as IArticle)
  const SaveArticle = useSelector(getSaveArticle);


  const handleInsert = (e: any) => {
    const {
      target: { value, name }
    } = e;
    setSaveArti(dto => ({ ...dto, [name]: value }));
  }

  const handleSubmit = () => {
    console.log(saveArti)
    dispatch(saveArticle(saveArti))
    router.push(`${PG.ARTICLE}/list`)
  }

  const handelCancel = (e: any) => {
    router.push(`${PG.ARTICLE}/list`)
  }

  useEffect(() => {
    if (SaveArticle === 'save succes') {
      router.push(`${PG.ARTICLE}/list`)
    }
  }, [SaveArticle])



  return (

    <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
      {MyTypography('Article 작성', "1.5rem")}
      <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" placeholder="Title" type="text" name="title" onChange={handleInsert} />
      <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" placeholder="Describe everything about this post here" name="content" onChange={handleInsert}></textarea>
      {/* <!-- icons --> */}
      <div className="icons flex text-gray-500 m-2">
        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <ThumbUpAltIcon component={ThumbUpAlt}></ThumbUpAltIcon>
        </svg>
        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <FmdGoodIcon component={FmdGood}></FmdGoodIcon>
        </svg>
        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <AttachFileIcon component={AttachFile}></AttachFileIcon>
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