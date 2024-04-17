'use client'


import articleColumns from "@/app/component/articles/modul/columns";
import { fetchAllArticles, findCountArticle } from "@/app/component/articles/service/article.service";
import { getAllArticles, getCountArticle } from "@/app/component/articles/service/article.slice";
import { PG } from "@/app/component/common/enums/PG";
import { MyTypography } from "@/app/component/common/style/cell";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const cards = [
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/mountain-nightview.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/autumn.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/babypinetree.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/beach.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/purpleflowers.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/starrysky.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/lake.jpg",
  ];
  

const AllarticlesPage: NextPage = () => {
    const dispatch = useDispatch()
    const allArticles: [] = useSelector(getAllArticles)
    const countArticle: number = useSelector(getCountArticle)
    const router = useRouter();

    if (allArticles !== undefined) {
        console.log('allArticles is not undefined')
        console.log('length is ' + allArticles.length)
        // for (let i = 0; i < allArticles.length; i++) {
        //     console.log(JSON.stringify(allArticles[i]))
        // }
    } else {
        console.log('allArticles is undefined')
    }


    useEffect(() => {
        dispatch(fetchAllArticles(1))
        dispatch(findCountArticle())
    }, [dispatch])

    return (<>
        {MyTypography('ALL Articles(lenght) ' + allArticles.length, "1.5rem")}
        {MyTypography('ALL Articles(count) ' + countArticle, "1.5rem")}
        <br />

        <div className="flex flex-col items-center justify-center w-full bg-300">
            <div className="flex overflow-x-scroll snap-x snap-mandatory max-w-6xl no-scrollbar">
                {cards.map((data, index) => {
                    return (
                        <section
                            className="flex-shrink-0 w-full snap-center justify-center items-center"
                            key={index}
                        >
                            <img
                                src={data}
                                alt="Images to scroll horizontal"
                                className="w-full h-[500px]"
                            />
                        </section>
                    );
                })}
            </div>
        </div>


        <div className='text-center'>
            <br />
            <button className="btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full 
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-300"
                onClick={() => router.push(`${PG.ARTICLE}/save`)}>
                <span className="relative">글쓰러가기</span>
            </button>
        </div>
        <br />
        <div style={{ height: "100%", width: "100%", fontSize: 30 }}>
            {allArticles && <DataGrid// 🔥 4
                rows={allArticles}
                columns={articleColumns()}
                pageSizeOptions={[5, 10, 20, 200]} // 4-1
                checkboxSelection
            />}
        </div>
    </>)
}

export default AllarticlesPage