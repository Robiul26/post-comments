import React from 'react';
import {  useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const [mode, setMode] =  useState(false);  
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    
    const modeHandler = () =>{
        setMode(!mode)
        if(!mode){
            // document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }else{
            // document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }
    return (
        <>
                    <div className='flex flex-col-reverse sm:flex-row items-center justify-around w-full mx-auto fixed bg-gray-50 dark:bg-gray-700 dark:text-white py-5 shadow-md z-10'>
                       <Link to="/"> <h2 className='font-bold text-xl text-green-500 dark:text-white uppercase pt-2'>All Posts are here</h2></Link>
                        <div className="font-medium">
                            <button onClick={modeHandler }>
                                {
                                localStorage.theme === 'dark'? 
                                <span className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg> Light</span>:
                                <span className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg> Dark</span>
                                }
                            </button>
                        </div>
                    </div>
        </>
        
            
        
    );
};

export default Header;