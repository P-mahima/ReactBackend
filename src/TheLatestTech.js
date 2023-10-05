import './TheLatest.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import HomeFooter from './HomeFooter';



const TheLatestTech = () => {

    const [ContextTech, setContextTech] = useState("")
    useEffect(() => {
        axios("https://nodeprojectserver.onrender.com/user/api")
            .then((response) => setContextTech(response.data))
            .catch((error) => console.log(error))
    })
    console.log(ContextTech)
    return (
        <div>

            <div className="Bollywood-item-Toppost">

                <div>
                    <h1 className="Name-Bollywood-heading" >Technology</h1>
                    {ContextTech && ContextTech.filter((item) => item.Category === 'Technology').map((cat) => {
                        return (
                            <div>
                                <div className="Bollywood-item">
                                    <img className="Bollywood-image" src={cat.image} alt="Loading" />

                                    <div className="Bollywood-heading">
                                        <Link to={`/NextPage/${cat.heading}`} state={cat}>
                                            <h2>{cat.heading}</h2>
                                        </Link>
                                        <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                                    </div>
                                </div>
                                {/* <hr></hr> */}
                            </div>
                        )
                    })}
                    <img className="image-Tech-Bollywood" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHPag2HiNl9AAvtlRF7K8mu6OUyy_f5_ZfPp_-JMKz2BVnwvQ4mZqMjDXzuSSV_kHhnE&usqp=CAU' alt="Loading"></img>
                </div>

                <div>
                    <img className="image-toppost-Bollywood" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhlV9pYvmcFyL0Dd-ohN1cvg1K3CTD8c3gw&usqp=CAU' alt="Loading"></img>
                    <h1 className="Name-Bollywood-heading">Top Post</h1>
                    <div className="Bollywood-TopPost">

                        {ContextTech && ContextTech.filter((item) => item.Category === 'Technology').map((cat) => {
                            return (
                                <div>

                                    <div className="Bollywood-item">
                                        <img className="Bollywood-image-toppost" src={cat.image} alt="Loading" />

                                        <div className="Bollywood-topost-heading">
                                            <Link to={`/NextPage/${cat.heading}`} state={cat}>
                                                <h2>{cat.heading}</h2>
                                            </Link>
                                            <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                                        </div>
                                    </div>
                                    {/* <hr/> */}
                                </div>
                            )
                        })}
                    </div>
                    <br></br>
                    <br></br>
                    <div >
                        <img className='TopPostGifFitness' src='https://www.codingdojo.com/blog/wp-content/uploads/tech-literacy-Copy.gif' alt="Loading" />
                    </div>

                </div>

            </div>
            <br />
            <HomeFooter />
        </div>
    )
}
export default TheLatestTech