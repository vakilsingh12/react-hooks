import React,{useReducer,useEffect} from 'react'
import axios from 'axios'
function UseReducer() {
  const initialState={
    error:'',
    post:{},
    loading:true
  }
  const reducer = (state,action) => {
    switch(action.type){
      case "FETCH_SUCCESS":
        return  {
          loading:false,
          post:action.payload,
          error:''
        }
        case 'FETCH_ERROR':
          return {
            loading:false,
            post:{},
            error:"Something went wrong"
          }
          default:
            return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState)
  const fetchData = async(params) => {
   try{
    const data=await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    dispatch({type:"FETCH_SUCCESS",payload:data.data})
   }catch(err){
    dispatch({type:"FETCH_ERROR",payload:''})
   }
  }
  useEffect(()=>{
  fetchData()
  },[])
  
  return ( 
    <div>
      <h1>{count.loading?'loading...':count.post.title}</h1>
      <h1>{count.error?count.error:null}</h1>
    </div>
  )
}

export default UseReducer
