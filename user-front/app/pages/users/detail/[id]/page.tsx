'use client'

import { PG } from "@/app/component/common/enums/PG"
import { MyTypography } from "@/app/component/common/style/cell"
import { deleteUserById, findUserById, modifyUserById } from "@/app/component/users/service/user.service"
import { jwtDecode } from "jwt-decode"
import { useRouter } from 'next/navigation';
import { parseCookies } from "nookies"
import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux"


export default function UserDetailPage({ params }: any) {
  const dispatch = useDispatch()
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, } = useForm();
  const userInfo = jwtDecode<any>(parseCookies().accessToken);

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data))
    dispatch(modifyUserById(data))
    // router.push(`${PG.USER}/detail/${data.id}`)
  }

  return (
    <form className="max-w mx-auto" onSubmit={handleSubmit(onSubmit)}>

      <div>
        {MyTypography(jwtDecode<any>(parseCookies().accessToken).username, "2.5rem")}
      </div>
      <div className="md:flex mb-8">
        <div className="md:w-1/3">
          <legend className="uppercase tracking-wide text-sm">Location</legend>
          <p className="text-xs font-light text-red">This entire section is required.</p>
        </div>
        <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Name</label>
            <input className="w-full shadow-inner p-4 border-0" type="text" {...register('name', { required: true })} placeholder="Real Name" />
          </div>
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Password</label>
            <input className="w-full shadow-inner p-4 border-0" type="text" {...register('password', { required: true })} placeholder="Password" />
          </div>
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Re Password</label>
            <input className="w-full shadow-inner p-4 border-0" type="password" placeholder="Re Password" />
          </div>
          <div className="md:flex mb-4">
            <div className="md:flex-1 md:pr-3">
              <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Street Address</label>
              <input className="w-full shadow-inner p-4 border-0" type="text" {...register('address', { required: true })} placeholder="555 Roadrunner Lane" />
            </div>
            {/* <div className="md:flex-1 md:pl-3">
              <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Building/Suite No.</label>
              <input className="w-full shadow-inner p-4 border-0" type="text" name="address_number" placeholder="#3" />
              <span className="text-xs mb-4 font-thin">We lied, this isn't required.</span>
            </div> */}
          </div>
        </div>

      </div>
      <div className="md:flex mb-8">
        <div className="md:w-1/3">
          <legend className="uppercase tracking-wide text-sm">Contact</legend>
        </div>
        <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Phone</label>
            <input className="w-full shadow-inner p-4 border-0" type="text" {...register('phone', { required: true })} placeholder="(555) 555-5555" />
          </div>

          <div className="mb-4">
            <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">job</label>
            <input className="w-full shadow-inner p-4 border-0" type="text" {...register('job', { required: true })} placeholder="OL" />
          </div>
        </div>
      </div>



      {/* 
      <div className="md:flex mb-6">
        <div className="md:w-1/3">
          <legend className="uppercase tracking-wide text-sm">Description</legend>
        </div>
        <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
          <textarea className="w-full shadow-inner p-4 border-0" placeholder="We build fine acmes."></textarea>
        </div>
      </div>
      <div className="md:flex mb-6">
        <div className="btn md:w-1/3 overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full 
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-300">
          <legend className="uppercase tracking-wide text-sm">Cover Image</legend>
        </div>
        <div className="md:flex-1 px-3 text-center">
          <div className="btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full 
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-300">
            <input className="opacity-0 absolute pin-x pin-y"
              type="text" name="cover_image" />
            Add Cover Image
          </div>
        </div>
      </div> */}

      <input type="text" {...register('id', { required: true })} value={userInfo.id} hidden />
      <input type="text" {...register('username', { required: true })} value={userInfo.username} hidden />

      <div className="w-1/2">
        <button className="btn text-center overflow-hidden relative poinster bg-white text-blue-500 p-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full 
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
           onClick={() => router.back()} value="CANCEL" >CANCEL</button>
         
         <button className="btn text-center overflow-hidden relative poinster bg-blue-500 text-white p-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full 
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00">
           <input type="sumit" value="SUBMIT" className="text-center bg-blue-500 text-white"/>
           </button>
        <button className="btn text-center overflow-hidden relative  bg-white text-blue-500 p-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full 
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
        onClick={()=>{
          alert("user를 삭제합니다.")
          console.log("delete article id & username : {}, {}",userInfo.id, userInfo.username)
          dispatch(deleteUserById(userInfo.id))
          location.reload();
        }} value="DELETE" >DELETE</button>
      </div>
    </form>


  )
}