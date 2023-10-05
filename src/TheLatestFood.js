// import React, { useContext } from "react";
import { useState, useEffect } from 'react';
import './TheLatest.css'
import axios from 'axios';
// import { Store } from "./Data/DataBollywood";
import { Link } from "react-router-dom";
import HomeFooter from './HomeFooter';
// import NextPage from "./NextPage";




const TheLatestFood = () => {
    // const [ContextFood] = useContext(Store)
    const [ContextFood,setContextFood] = useState("")
    useEffect(()=>{
        axios("https://nodeprojectserver.onrender.com/user/api")
        .then((response) => setContextFood(response.data))
        .catch((error) => console.log(error))
    })
    console.log(ContextFood)
    return(
<div>
        <div className="Bollywood-item-Toppost">
                     
            <div>
                <h1  className="Name-Bollywood-heading">Food</h1>
                {ContextFood && ContextFood.filter((item)=> item.Category === 'Food').map((cat)=>{
                    return(
                        <div className="Bollywood-item">
                        <img className="Bollywood-image" src={cat.image} alt="Loading" />

                        <div className="Bollywood-heading">
                            <Link  to={`/NextPage/${cat.heading}`} state={cat} >
                        <h2 >{cat.heading}</h2>
                            </Link>
                        <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                        </div>
                        </div>
                    )
                })}
                 <img className="image-food-Bollywood" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHPag2HiNl9AAvtlRF7K8mu6OUyy_f5_ZfPp_-JMKz2BVnwvQ4mZqMjDXzuSSV_kHhnE&usqp=CAU' alt="Loading"></img>
            </div>
            <div>
            <img className="image-toppost-Bollywood" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQiaHuEfKqQ_ZG2uydfL2ty6PhzLnDLt9B78RMGwFLCyJwkQE4lRkvQrOWDHFpYVfd1A&usqp=CAU' alt="Loading"></img>
                <h1  className="Name-Bollywood-heading">Top Post</h1>
                <div className="Bollywood-TopPost">

                {ContextFood && ContextFood.filter((item) => item.Category === 'Food').map((cat) => {
                    return (
                        <div className="Bollywood-item" >
                            <img className="Bollywood-image-toppost" src={cat.image} alt="Loading" />

                            <div className="Bollywood-topost-heading">
                                <Link to={`/NextPage/${cat.heading}`} state={cat} >
                                <h2>{cat.heading}</h2>
                                </Link>
                                <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                            </div>
                        </div>
                    )
                })}
                </div>
                <br></br>
                <br></br>
                <div >
                    <img className='TopPostGifFood' src='https://static01.nyt.com/images/2016/08/11/well/well_nutritionforrunners_gif/well_nutritionforrunners_gif-jumbo-v5.gif' alt="Loading"/>
                </div>
            </div>
        </div>
            <br></br>
        <br></br>
        <br></br>
        <HomeFooter/>

        </div>
    )
}
export default TheLatestFood