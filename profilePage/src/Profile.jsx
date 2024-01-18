import React from 'react'

export function Profile(){
    return (
        <div className = 'container m-auto p-9 text-center inline-block max-w-lg place-content-center mx-72 rounded-lg border-2 border-black shadow-2xl shadow-black my-5'>
            <div>
                <div className='bg-blue-400 rounded-lg'>
                    <div>
                        <img src='img.png' 
                        className='w-48 h-48 m-auto p-9 rounded-full relative' /> 
                    </div>
                </div>

            <div>
                <h3 className='font-bold text-2xl'>Rita Correia 32</h3>
                <p>London</p>
            </div>

            <div className='flex space-x-8 justify-center m-10 border-2 shadow-lg rounded-lg'>
                <div>
                    <h3 className='font-bold text-2xl'>80K</h3>
                    <p>Followers</p>
                </div>
                <div>
                    <h3 className='font-bold text-2xl'>803K</h3>
                    <p>Likes</p>
                </div>
                <div>
                    <h3 className='font-bold text-2xl'>1.4K</h3>
                    <p>Photos</p>
                </div>
            </div>
        </div>
    </div>
    )
}