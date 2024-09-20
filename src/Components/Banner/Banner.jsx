import React from 'react'
import "./Banner.css"
import { icons } from '../../Utils/Constants/icons'
import { profileData } from '../../Utils/Constants/ProfileData'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
  return (
    <>
    {
        profileData.map((item)=> {
            return (
                <div className='flex justify-center'>
    <div className='flex flex-col w-[400px] boxShadow rounded-3xl mt-8 mb-4'>
        <div className='flex justify-center bgImage w-full h-[205px]'>
            <img className='mt-32 w-[145.79px] h-[145.79px] rounded-full' src={item.profileImage} alt="" />
        </div>
        <div className='flex flex-col items-center justify-center mt-16'>
            <h1 className='text-3xl font-medium mt-4'>{item.name}</h1>
            <p className='text-[#3D7793] mt-3 font-normal text-sm'>{item.profession}</p>
            <p className='font-normal text-center text-sm text-[#111827] w-[376px] mt-4 mb-6'>{item.description} </p>
        </div>
        <div className='flex justify-center gap-8'>
        {
                icons.map((item, index)=> {
                    return (
                        <a href=''><i key={index} className={item.icon}></i></a>
                    )
                })
        }
        </div>
        <div className='flex justify-center mt-5 mb-6'>
            <button onClick={() => navigate(`/card/${item.id}`)} className='bg-[#3D7793] rounded py-2 px-9 text-white'>View Profile</button>
        </div>
      </div>
      </div>

            )
        })
    }
    </>
    )
}

export default Banner
