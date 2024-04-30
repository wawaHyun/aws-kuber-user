'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next";
import { IUser } from "@/app/component/users/model/user.model";
import { useDispatch } from "react-redux";
import { joinUser } from "@/app/component/users/service/user.service";
import { PG } from "@/app/component/common/enums/PG";
import { useSelector } from "react-redux";
import { getSingleUser } from "@/app/component/users/service/user.slice";

const Join: NextPage = () => {

  const router = useRouter();

  const dispatch = useDispatch();
  const join = useSelector(getSingleUser);
  const [user, setUser] = useState({} as IUser)


  const handleUsername = (e: any) => {
    const {
      target: { value, name }
    } = e;
    setUser(dto => ({ ...dto, [name]: value }));
  }

  const handleSubmit = () => {
    console.log(user)
    dispatch(joinUser(user))
  }

  useEffect(() => {
    if (join === 'SUCCESS') {
      router.push(`${PG.USER}/login`)
    } 
  }, [join])

  const handleCancel = () => {
    alert('back to the login..');
    router.push(`/`)
  }



  return (<>
    <div className="container">
      <h1>개인 페이지~!!!!!</h1>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />   <br />

      <label htmlFor="memId"><b>ID</b></label><br />
      <input type="text" placeholder="Enter ID" name="username" onChange={handleUsername} required />
      <br /><br />
      <label htmlFor="memPw"><b>Password</b></label><br />
      <input type="password" placeholder="Enter Password" name="password" onChange={handleUsername} required />
      <br /><br />
      <label htmlFor="name"><b>NAME</b></label><br />
      <input type="text" placeholder="Enter name" name="name" onChange={handleUsername} required />
      <br /><br />
      <label htmlFor="phone"><b>phone</b></label><br />
      <input type="text" placeholder="Enter phone" name="phone" onChange={handleUsername} required />
      <br /><br />
      <label htmlFor="job"><b>job</b></label><br />
      <input type="text" placeholder="Enter job" name="job" onChange={handleUsername} />
      <br /><br />


      <label>
        <input type="checkbox" checked={true} name="remember" style={{ marginBottom: '15px' }} /> Remember me
      </label>

      <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>
      <br />
      <div className="clearfix">
        <button type="button" className="cancelbtn" onClick={handleCancel} >Cancel</button>
        <br />
        <button type="submit" className="signupbtn" onClick={handleSubmit}>Sign Up</button><br />
      </div>
    </div>


  </>)
}


export default Join;