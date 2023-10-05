
import './TheLatest.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import HomeFooter from "./HomeFooter";


const TheLatestFitness = () => {

    const [ContextFitness,setContextFitness] = useState("")
    useEffect(()=>{
        axios("https://nodeprojectserver.onrender.com/user/api")
        .then((response) => setContextFitness(response.data))
        .catch((error) => console.log(error))
    })
    console.log(ContextFitness)
    return (
        <div>
            
        <div className="Bollywood-item-Toppost">

            <div>
                <h1  className="Name-Bollywood-heading">Fitness</h1>
                {ContextFitness && ContextFitness.filter((item) => item.Category === 'Fitness').map((cat) => {
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
                <img className="image-fitness-Bollywood" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHPag2HiNl9AAvtlRF7K8mu6OUyy_f5_ZfPp_-JMKz2BVnwvQ4mZqMjDXzuSSV_kHhnE&usqp=CAU' alt="Loading"></img>
            </div>
            <div>
                
            <img className="image-toppost-Bollywood" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHXx3vUi7dIQBmduWlv0AdqnbRuJRuEZV5yJLx-dOBcKCFB84qu3nlxvhA64uMO72h4A&usqp=CAU' alt="Loading"></img>
                <h1  className="Name-Bollywood-heading">Top Post</h1>
                <div className="Bollywood-TopPost">

                    {ContextFitness && ContextFitness.filter((item) => item.Category === 'Fitness').map((cat) => {
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

                <div >
                    <img className='TopPostGifFitness' src='https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/28_F_WIP02.gif' alt="Loading"/>
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
export default TheLatestFitness