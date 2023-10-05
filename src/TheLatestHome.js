import React, {useEffect, useState } from "react";
import './TheLatest.css'
import axios from 'axios'
// import video from './Images/video.mp4'
// import images3 from './Images/isro-1569470756.jpg'
import { Link, useParams } from "react-router-dom";
import HomeFooter from "./HomeFooter";



const TheLatestHome = () => {
    // const [ContextBollywood] = useContext(Store)
    //-----------------------------------------------------------------------------
    const [ContextBollywood,setContextBollywood] = useState("")
    useEffect(()=>{
        axios("https://nodeprojectserver.onrender.com/user/api")
        .then((response) => setContextBollywood(response.data))
        .catch((error) => console.log(error))
    })
    //------------------------------------------------------------------------------
    const { id } = useParams();
    console.log(id)
    console.log(ContextBollywood)
    return (
        <div className="HomeLatest">

            <div className="Home-item-Toppost">
                <div className="Home-images">
                    <div>
                        <img className="Home-images1" src='https://d2mk45aasx86xg.cloudfront.net/Top_10_React_Apps_used_by_Internet_Giants_11zon_cff4c9ff8e.webp' alt="loading" />
                    </div>
                    <div className="HomeSideImages">
                        <img className="Home-images2" src='https://th.bing.com/th/id/OIP.mdrW466wMpWcgKzuO2iLmwHaEA?w=317&h=180&c=7&r=0&o=5&pid=1.7' alt="loading" />
                        <img className="Home-images3" src='https://64.media.tumblr.com/0290d19147e3d1fb6d1932d1c46968b7/tumblr_o3oorf0fC51szcsbo_og_500.png' alt="loading" />
                    </div>
                </div>

                <div >

                    <div >
                        <h1 className="Home-Heading">The Latest</h1>
                        <div className="The-Latest-Heading">
                            {ContextBollywood && ContextBollywood.filter((item) => item.Category === 'Home-Latest').map((cat) => {
                                return (
                                    <div className="latest-item">
                                        <img className="Home-image" src={cat.image} alt="Loading" />

                                        <div className="Home-heading">
                                            <Link to={`/NextPage/${cat.heading}`} state={cat}>
                                                <h3 className="HomeHeading">{cat.heading}</h3>
                                            </Link>
                                            <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <h1 className="Home-Heading">Latest-Article</h1>
                    <div className="Home-Right-Latest">
                        <div className="Latest-TopPost">

                            {ContextBollywood && ContextBollywood.filter((item) => item.Category === 'Latest-Article').map((cat) => {
                                return (
                                    <div className="Latest-item" >
                                        <img className="Bollywood-image-article" src={cat.image} alt="Loading" />

                                        <div className="Article-heading">
                                            <Link to={`/NextPage/${cat.heading}`} state={cat}>
                                                <h2 className="nextheadarticle">{cat.heading}</h2>
                                            </Link>
                                            <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                            
                                <img className="Article-image" src='https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif' alt="loading" />
                            
                        </div>
                        <div className="Home-TopPost">
                            <div className="Advertisement-Box">
                                <h1>Advertisement</h1>
                                {/* <iframe className="Advertisement" src='https://youtu.be/u3ybWiEUaUU' alt="loading" /> */}
                                {/* <video  controls>
                                    <source src="movie.mp4" type="video/mp4">
                                
                                          
                                        </video> */}
                                <img className="Advertisement"
                                     src='https://ansarshome.files.wordpress.com/2021/09/d3464a4351fdf340ccb6bb37c281381a.gif' alt="loading" >
                                </img>

                            </div>
                            <div>
                                <h1 className="Home-Heading">TopPost</h1>
                                <div>
                                    {ContextBollywood && ContextBollywood.filter((item) => item.Category === 'Home-Top-Post').map((cat) => {
                                        return (
                                            <div className="Latest-item" >
                                                <img className="Bollywood-Latest-image" src={cat.image} alt="Loading" />

                                                <div className="Article-heading-heading">
                                                    <Link to={`/NextPage/${cat.heading}`} state={cat}>
                                                        <h2>{cat.heading}</h2>
                                                    </Link>
                                                    <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>


                    </div>
                    <div>
                        <h1 className="Home-Heading">Latest Stories</h1>
                        <div className="Home-Latest_stories">
                            {ContextBollywood && ContextBollywood.filter((item) => item.Category === 'Home-Top-Post-Latest').map((cat) => {
                                return (
                                    <div className="Latest-item" >
                                        <img className="Latest-Stories-image" src={cat.image} alt="Loading" />

                                        <div className="Latest-Stories-heading">
                                            <Link to={`/NextPage/${cat.heading}`} state={cat}>
                                                <h2>{cat.heading}</h2>
                                            </Link>
                                            <h4 className="Bollywood-smallcontent">{cat.SmallContent}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            




            <HomeFooter />

        </div>
    )
}
export default TheLatestHome