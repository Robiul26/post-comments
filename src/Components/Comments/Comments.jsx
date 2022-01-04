import React from 'react';

const Comments = ({num,email,body}) => {
    return (
        <>
        
           <div className='flex flex-col  gap-2'>
                <div className='relative flex sm:flex-row flex-col-reverse sm:justify-between border rounded-md p-5 bg-white dark:bg-gray-700 dark:text-white shadow-md'>
                    <div className=' top-12 sm:top-5 absolute rounded-full overflow-hidden'>
                        <img className='w-10 h-10' src={`https://source.unsplash.com/random/200x200?sig=${num}`} alt="" />
                    </div>
                    <div className=' ml-12 sm:w-9/12 flex flex-col justify-between gap-5'>                        
                        <h2 className=' text-blue-600 dark:text-blue-500 font-bold text-md sm:text-xl break-words'>{email} <span className=' font-normal text-black dark:text-white'>{body}</span></h2>                                                  
                        <h2 className='font-medium text-gray-500 dark:text-gray-300'>Remove. Replay. Translate</h2>                        
                    </div>
                    <div className='flex sm:flex-col flex-row justify-between items-end gap-5'>                      
                        <p className='font-medium'>2 days ago</p>
                        <p className='flex gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg></p>
                    </div>
                </div> 
            </div>
        </>
    );
};

export default Comments;