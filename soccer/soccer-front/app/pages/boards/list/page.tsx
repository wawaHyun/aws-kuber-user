'use client'

import boardColumns from "@/app/component/boards/modul/columns";
import { fetchAllBoards, findcountBoard } from "@/app/component/boards/service/board.service";
import { getAllBoards, getCountBoard } from "@/app/component/boards/service/board.slice";
import { PG } from "@/app/component/common/enums/PG";
import { MyTypography } from "@/app/component/common/style/cell";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import Link from "next/link";
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


const AllboardsPage: NextPage = () => {
  const dispatch = useDispatch()
  const allBoards: [] = useSelector(getAllBoards)
  const countBoards: number = useSelector(getCountBoard)

  if (allBoards !== undefined) {
    console.log('allBoards is not undefined')

    console.log('length is ' + allBoards.length)
    // for (let i = 0; i < allBoards.length; i++) {
    //   console.log(JSON.stringify(allBoards[i]))
    // }
  } else {
    console.log('allBoards is undefined')
  }


  useEffect(() => {
    dispatch(fetchAllBoards(1))
    dispatch(findcountBoard())
  }, [dispatch])

  return (<>
    {MyTypography('ALL Boards (length) : ' + allBoards.length, "1.5rem")}
    {MyTypography('ALL Boards (count) : ' + countBoards, "1.5rem")}

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

    <div style={{ height: "100%", width: "100%" }}>
      {allBoards && <DataGrid// 🔥 4
        rows={allBoards}
        columns={boardColumns()}
        pageSizeOptions={[5, 10, 20, 100]} // 4-1
        checkboxSelection
      />}
    </div>


  </>)
}

export default AllboardsPage