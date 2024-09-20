import React from 'react'
import { profileData } from '../../Utils/Constants/ProfileData'
import { useParams } from 'react-router'
import { icons } from '../../Utils/Constants/icons';

const Banner2 = () => {
    const {id} = useParams();
    const singleData = profileData.find((item) => {
        return item.id == id
    })
    if (!singleData) {
        return <div className='text-5xl flex justify-center items-center h-[100vh]'>Profile not found</div>;
    }
    return (
        <div className='flex'>
            <div className='w-1/2 flex justify-center items-center h-[100vh]'>
                <img className='w-[400px] h-[450px]' src={singleData.background} alt="" />
            </div>
            <div className='w-1/2 h-[80vh] mt-14 flex flex-col justify-center'>
                <h1 className='text-4xl'>{singleData.name}</h1>
                <p className='text-[#928f8f] mt-3 font-medium text-lg'>{singleData.profession}</p>
                <p className='font-normal text-base text-[#111827] w-[300px] mt-10 mb-8'>{singleData.description} </p>
                <div className='flex gap-8'>
                    {
                        icons.map((item, index)=> {
                            return (
                                <i key={index} className={item.icon}></i>
                            )
                        })
                    }
                </div>
                <div>
                    <button className='bg-[#3D7793] mt-10 rounded py-2 px-9 text-white'>Buy me a coffee</button>
                </div>
            </div>
        </div>
    )
}

export default Banner2
