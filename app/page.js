"use client"
import React, { useState }  from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const submitHandler =(e)=>{
    e.preventDefault()
    setmaintask([...maintask,{title,desc}]);
    console.log(title)
    console.log(desc)
    settitle("")
    setdesc("")
    console.log(maintask)
  }
  const deletehandler=(i)=>{
    let copytask=[...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }
  let rendertask=<h2>No task available</h2>
  if(maintask.length>0){
    rendertask=maintask.map((t,i)=>{
      return(
        <li className='flex items-center justify-between m-3'>
        <div className='flex justify-between mb-5 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-2xl font-semibold'>{t.desc}</h6>
        </div>
        <button className='bg-red-400 text-white px-4 py-2 rounded font-bold'
        onClick={()=>{
          deletehandler(i)
        }}
        >Delete</button>
        </li>
      );
    })
  }
  
 
  return (
   <>
   <h1 className='bg-black text-white p-5 text-4xl font-bold text-center'>
Sarvesh's ToDOList
   </h1>
   <form onSubmit={submitHandler}>
    <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
    placeholder='Enter your Task'
    value={title}
    onChange={(e)=>{
      settitle(e.target.value)
    }}
    />
     <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
    placeholder='Enter your Task description'
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)
    }}
    />
    <button className='bg-black text-white p-2 rounded text-2xl '>Add task</button>
   </form>
   <div className='p-8 bg-slate-200 '>
    <ul>
      {rendertask}
    </ul>
  </div>
   
   
   
   </>
  )
}

export default page

