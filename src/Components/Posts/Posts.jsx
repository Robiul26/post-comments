import React from 'react';

const Posts = ({id,title, body}) => {
    return (
        <>
            <div className="sm:w-full shadow-md hover:shadow-xl transition hover:bg-green-100 rounded-md overflow-hidden bg-white dark:bg-gray-700">
                {/* <img className="w-full"  alt="" /> */}
                <div className="p-5">
                    <h2 className="font-bold text-xl mb-2 text-green-500 dark:text-white uppercase">{id}. {title}</h2>  
                    <p>{body}</p>
                </div>
            </div>  
        </>
    );
};

export default Posts;