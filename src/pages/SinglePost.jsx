import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function SinglePost(){

    const {slug} = useParams();
    const [post, setPost] = useState({})

    async function callPost(){
        const data = await (await fetch("http://localhost:3000/posts/" + slug)).json()
        setPost(data)
    }

    useEffect(() =>{
        callPost()
    }, [])

    return (

        <div className=" w-[600px]  mx-auto rounded-xl mt-5 bg-white shadow-lg">
            <div className=" h-[400px] rounded-t-xl bg-gray-300 flex items-center justify-center">  
                <img src={post.image} className="object-cover w-[600px] h-[400px] rounded-t-xl" alt="" />
            </div>
            <div className="p-4 flex flex-col gap-4">
                <h2 className="text-lg font-bold">{post.title}</h2>
                <p className="">{post.content}</p>
            </div>
        </div>

      )
}