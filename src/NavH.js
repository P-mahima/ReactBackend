import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Nav.css'

const NavH = () => {
    const [Nav, setNav] = useState(false)
    return (
        <div className="ham">
            <div>
                <button className='barIcon' onClick={() => setNav(!Nav)}>
                    {Nav ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                </button>
            </div>

            <div className={Nav ? "Nav" : "flex"} onClick={() => setNav(false)} >

                <Link to='/' className="Navitem">Home</Link>
                <Link to='/Bollywood' className="Navitem" >Bollywood</Link>
                <Link to='/Technology' className="Navitem" >Technology</Link>
                <Link to='/Hollywood' className="Navitem" >Hollywood</Link>
                <Link to='/Fitness' className="Navitem" >Fitness</Link>
                <Link to='/Food' className="Navitem" >Food</Link>

            </div>
            <hr className="line"></hr>
        </div>
    )
}
export default NavH