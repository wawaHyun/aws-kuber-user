'use client'

import { deleteArticleById, findArticleById, modifyArticleById } from "@/app/component/articles/service/article.service";
import { getFindArticle } from "@/app/component/articles/service/article.slice";
import { MyTypography } from "@/app/component/common/style/cell";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function ArticleDetailPage({ params }: any) {
  const dispatch = useDispatch()
  const findArticle = useSelector(getFindArticle)

  const [inputValue, setInputValue] = useState({ id: params.id, title: '', content: '' });


  const handleInput = (e: any) => {
    const {
      target: { value, name }
    } = e;
    setInputValue(dto => ({ ...dto, [name]: value }));
  };


  const handleModify = () => {
    dispatch(modifyArticleById(inputValue))
  }

  const handleDelete = () => {
    dispatch(deleteArticleById(params.id))
  }

  useEffect(() => {
    dispatch(findArticleById(params.id))
  }, [dispatch])

  return (<>
    {MyTypography('article detail : ' + params.id, "1.5rem")}

    Title :
    {MyTypography(<input type="text" name='title' defaultValue={findArticle.title} onChange={handleInput} />, "1.5rem")}

    Content :
    {MyTypography(<input type="text" name='content' defaultValue={findArticle.content} onChange={handleInput} />, "1.5rem")}

    {MyTypography('등록일 : ' + findArticle.regDate, "1.5rem")}
    {MyTypography('수정일 : ' + findArticle.modDate, "1.5rem")}

    <br />
    {MyTypography(<button type="button" onClick={handleModify} > 수정</button>, "1.5rem")}
    {MyTypography(<button type="button" onClick={handleDelete} > 삭제</button>, "1.5rem")}

  </>)
}