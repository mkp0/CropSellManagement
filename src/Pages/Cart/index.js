import React,{useState,useEffect} from "react";
import Loader from "../../Components/Loader";

export default function Cart() {
  const [post,setPost]=useState(null)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json=>{
      const {body} = json
      setPost(body)
    })
  },[])
  return (
    <div>
      <h1>Welcome to cart</h1>
      {post ? "" : <Loader/>}
    </div>
  );
}
