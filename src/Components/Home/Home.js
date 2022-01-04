import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Posts from "../Posts/Posts";


const Home = () => {  
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    getUsers();
  },[])

   const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    await setPosts(data)
  }

 
    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white w-full container mx-auto  sm:px-20 px-4 pt-16">            
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
         
          </div>
          {/* Hero section */}
            <div className="flex gap-8 flex-wrap justify-between mt-14 pb-16">

          {posts.map((post, index) => <Link to={{ pathname:`${post.id}/details` }} key={index}><Posts 
          id={post.id} 
          title={post.title} 
          body={post.body}
          /></Link>)}             
                
             
            </div>
        </div>
    );
};

export default Home;