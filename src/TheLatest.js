import './TheLatest.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import HomeFooter from "./HomeFooter";

const TheLatest = () => {
   
    const [ContextBollywood,setContextBollywood] = useState("")
    useEffect(()=>{
        axios("https://nodeprojectserver.onrender.com/user/api")
        .then((response) => setContextBollywood(response.data))
        .catch((error) => console.log(error))
    })
    console.log(ContextBollywood)
    return (
        <div>

        <div className="Bollywood-item-Toppost">
       
            <div>
                <h1  className="Name-Bollywood-heading">Bollywood</h1>
                {ContextBollywood && ContextBollywood.filter((item) => item.Category === 'Bollywood').map((cat) => {
                    return (
                        <div className="Bollywood-item">
                            <img className="Bollywood-image" src={cat.image} alt="Loading" />

                            <div className="Bollywood-heading">
                                <Link to={`/NextPage/${cat.heading}`} state={cat}>
                                <h2>{cat.heading}</h2>
                                </Link>
                                <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                            </div>
                        </div>
                    )
                })}
                 <img className="image-Bollywood-Bollywood" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHPag2HiNl9AAvtlRF7K8mu6OUyy_f5_ZfPp_-JMKz2BVnwvQ4mZqMjDXzuSSV_kHhnE&usqp=CAU' alt="Loading"></img>
            </div>





            <div>
                <img className="image-toppost-Bollywood" src='https://www.bizzbuzz.news/h-upload/2022/05/18/1600x960_1533931-ottbollywood.jpg' alt="Loading"></img>
                <h1 className="Name-Bollywood-heading">Top Post</h1>
                <div className="Bollywood-TopPost">
                    

                {ContextBollywood && ContextBollywood.filter((item) => item.Category === 'Bollywood').map((cat) => {
                    return (
                        <div className="Bollywood-item" >
                            <img className="Bollywood-image-toppost" src={cat.image} alt="Loading" />

                            <div className="Bollywood-topost-heading">
                                <Link to={`/NextPage/${cat.heading}`} state={cat}>
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

                <div>
                    <img className='TopPostGif' src='https://media0.giphy.com/media/lS107tvBaGNp5zfaeD/giphy.gif' alt='loading'/>
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
export default TheLatest