import React,{useState,useEffect} from 'react'
import axios from 'axios'
function UseState() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState('');
  const fetchData = async() => {
    try{
    const data=await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    setLoading(false);
    setPost(data.data.title.toLowerCase());
    setError('')
    }catch(err){
      setLoading(false);
      setPost({});
      setError('Something went wrong!');
    }
  }
  useEffect(()=>{
  fetchData();
  },[])
  return (
    <div style={{marginTop:'100px',fontSize:'20px',textAlign:'center'}}>
      {loading?"Loading...":post}
      {error?error:null}
    </div>
  )
}

export default UseState
