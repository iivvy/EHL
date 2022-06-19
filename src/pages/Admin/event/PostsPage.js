import React, { useState } from 'react'
import Home from '../../Base/Home'
import PostCard from './PostCard'
import axios from 'axios'
import { useEffect } from 'react'

const PostsPage = () => {
  const [postList,setPostList] = useState([])
  useEffect(() => {
    axios.get('')
    .then((data)=>{
      setPostList(data.data)
      console.log(data);
    })
  })
  return (
    <div>
      <Home/>
     
        {postList.map((key,val)=>{
          return(
            <PostCard title={val.title} image={val.image} date={val.date}  />
          )
        })}
        <PostCard title='Concours jfnwnfiwebfqed2021/2022' image='https://www.esi-sba.dz/fr/wp-content/uploads/2022/05/1_800x550.png' date='22 JUILLET 2021'/>
        <PostCard title='Concours jfnwnfiwebfqed2021/2022' image='https://www.esi-sba.dz/fr/wp-content/uploads/2022/05/1_800x550.png' date='22 JUILLET 2021'/>
        <PostCard title='Concours jfnwnfiwebfqed2021/2022' image='https://www.esi-sba.dz/fr/wp-content/uploads/2022/05/1_800x550.png' date='22 JUILLET 2021'/>
        <PostCard title='Concours jfnwnfiwebfqed2021/2022' image='https://www.esi-sba.dz/fr/wp-content/uploads/2022/05/1_800x550.png' date='22 JUILLET 2021'/>
        <PostCard title='Concours jfnwnfiwebfqed2021/2022' image='https://www.esi-sba.dz/fr/wp-content/uploads/2022/05/1_800x550.png' date='22 JUILLET 2021'/>
        

      </div>
   
  )
}

export default PostsPage