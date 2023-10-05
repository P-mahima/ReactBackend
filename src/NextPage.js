import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './NextPage.css'
import HomeFooter from './HomeFooter';
import like from './Images/like.png'
import share from './Images/share.png'

import axios  from 'axios';


function NextPage() {
  
  const [api,setApi] = useState([''])
  useEffect(()=>{
      axios("https://nodeprojectserver.onrender.com/user/api")
      .then((response) => setApi(response.data))
      .catch((error) => console.log(error))
  },[])
  const Navigate = useNavigate();
  const Location = useLocation().state;

  

  console.log(api)

  const Array = []
  const Random = (min, max) => {
    let ans = parseInt(Math.random() * (max - min) + min)
    return ans
  }
  function Render() {
    if (Location.Category === 'Bollywood') {
      return Random(0, 15)
    }
    else if (Location.Category === 'Technology') {
      return Random(16, 30)
    }
    else if (Location.Category === 'Hollywood') {
      return Random(31, 45)
    }
    else if (Location.Category === 'Fitness') {
      return Random(46, 60)
    }
    else if (Location.Category === 'Food') {
      return Random(60, 75)
    }
    else if (Location.Category === 'Home-Latest') {
      return Random(76, 78)
    }
    else if (Location.Category === 'Latest-Article') {
      return Random(79, 81)
    }
    else if (Location.Category === 'Home-Top-Post') {
      return Random(83, 85)
    }
    else if (Location.Category === 'Home-Top-Post-Latest') {
      return Random(86, 88)
    }
    
    
  }

  for (let i = 0; i < 3; i++) {
    let ans = Render()
    Array.push(ans)
  }
  console.log(Array)

  return (

    <>
      <div className='avtaarflex'>

        <div className='avtaar1'>
          <div>
            <img className='avtaar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-s3l9bVnSFYPuHvEdbuvl3Mwzro7F1fWGfw&usqp=CAU' alt='Loading'></img>
          </div>
          <div className='namedate'>
            <div className='nameN'>Mahima</div>
            <div className='date'>
              <div>June 27 2023</div>
              <div>10 min read</div>
            </div>
          </div>
        </div>

        <div>
        

        </div>


      </div>


      <div className='NextPage'>
        <div className='NextPage-Share'>
          <div className='NextPage-like'>
            <div className='NextPage-like-name'>
              <img src={like} alt="loading" />
              <p>9.2K</p>
            </div>
            <div className='NextPage-like-name'>
              <img src={share} alt="loading" />
              <p>share</p>
            </div>
          </div>
          <div className='NextPage-Flex'>

            <div >
              <img className='NextPageImage' src={Location.image} alt="loading" ></img>
            </div>
            <div className='NextPageHeading'>
              <h1> {Location.heading} </h1>
            </div>
            <div className='NextPage-LargeContent'>
              <p >{Location.LargeContent}</p>
            </div>

            <br></br>
            <br></br>
            <button onClick={() => { Navigate(-1); }} className="BacktoHome">  ⬅️Back  </button>
          </div>
        </div>

        <br></br>
      
      <div>
      <h1 className="Home-Heading" >More from the Siren</h1>
      <div className='NextPage-MainFooter'>

        {

          api.filter((item) => Array.find((j) => j == item.id) == item.id).map((item, index)=>{
            return(
              <div className='NextPage-head' key={index}>
              
                <img  className='NextPage-MainFooter-Image' src={item.image} alt='Loading'/>
                <h1 className='Head-NextPage' >{item.heading}</h1>
                <h3 className='Head-NextPage-Small'>{item.SmallContent}</h3>
            
              </div>
            )
          })

        }
      </div>
      </div>


        <br></br>
        <br></br>











        {/* <Description/> */}
      </div>
        <HomeFooter />


    </>
  )
}

export default NextPage;