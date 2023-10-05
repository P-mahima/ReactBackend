// import React, { useContext } from "react";
import { useState, useEffect } from 'react';
import './TheLatest.css'
import axios from 'axios';
// import { Store } from "./Data/DataBollywood";
import { Link } from "react-router-dom";
import HomeFooter from "./HomeFooter";



const TheLatestHollywood = () => {
    // const [ContextHollywood] = useContext(Store)
    const [ContextHollywood, setContextHollywood] = useState("")
    useEffect(() => {
        axios("https://nodeprojectserver.onrender.com/user/api")
            .then((response) => setContextHollywood(response.data))
            .catch((error) => console.log(error))
    })
    console.log(ContextHollywood)
    return (
        <div>

            <div className="Bollywood-item-Toppost">

                <div>
                    <h1 className="Name-Bollywood-heading">Hollywood</h1>
                    {ContextHollywood && ContextHollywood.filter((item) => item.Category === 'Hollywood').map((cat) => {
                        return (
                            <div className="Bollywood-item">
                                <img className="Bollywood-image" src={cat.image} alt="Loading" />

                                <div className="Bollywood-heading">
                                    <Link to={`/NextPage/${cat.heading}`} state={cat} >
                                        <h2>{cat.heading}</h2>
                                    </Link>
                                    <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                                </div>
                            </div>
                        )
                    })}
                     <img className="image-food-Bollywood" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHPag2HiNl9AAvtlRF7K8mu6OUyy_f5_ZfPp_-JMKz2BVnwvQ4mZqMjDXzuSSV_kHhnE&usqp=CAU' alt="Loading"></img>
                </div>
                <div>
                    <img className="image-toppost-Bollywood" src='https://newsroompost.com/wp-content/uploads/2021/01/h-1.jpg' alt="Loading"></img>
                    <h1 className="Name-Bollywood-heading">Top Post</h1>
                    <div className="Bollywood-TopPost">

                        {ContextHollywood && ContextHollywood.filter((item) => item.Category === 'Hollywood').map((cat) => {
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
                        <img className='TopPostGifFood' src='https://i.pinimg.com/originals/0a/57/8a/0a578a6a92cda42a65ff8b6f2d0eee6b.gif'  alt="Loading"/>
                    </div>

                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <HomeFooter />
        </div>
    )
}
export default TheLatestHollywood