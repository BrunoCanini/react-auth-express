import { useState, useEffect } from "react"

export default function Posts(){

    const [posts, setPosts] = useState([])

    async function callPosts(){
        const data = await (await fetch("http://localhost:3000/posts")).json()
        setPosts(data)
    }

    useEffect(() => {
        callPosts()
    }, [])

    return (

        <>
            {posts.map((post)=> (
              
                <div className=" w-[600px]  mx-auto rounded-xl mt-5 bg-white shadow-lg">
                    <div className=" h-[400px] rounded-t-xl bg-gray-300 flex items-center justify-center">  
                        <img src={post.image} className="object-cover w-[600px] h-[400px] rounded-t-xl" alt="" />
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <h2 className="text-lg font-bold">{post.title}</h2>
                        <p className="">{post.content}</p>
                        <a href={`posts/${post.slug}`} className="uppercase p-3 bg-yellow-500 w-fit text-white">Leggi di più</a>
                    </div>
                </div>

            ))}
        </>

      )
}