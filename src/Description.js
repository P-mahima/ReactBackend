import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Store } from './Data/DataBollywood'

const Description = () => {
    const store = useContext(Store)
    const idRender = useLocation().state.index

    const RenderData = store[0].filter((item)=> item.id === idRender)
    console.log(RenderData)




  return (
    <div>
        {
            store[0].filter((item)=> {
                if((RenderData[0].Category!=='Bollywood')&&(RenderData[0].Category!=='Technology')&&(RenderData[0].Category!=='Hollywood') && (RenderData[0].Category!=='Fitness')&&(RenderData[0].Category!=='Food'))
                    return item.Category === RenderData[0].Category&&((item.id)%3===0)
                
                else
                
                    return  item.Category === RenderData[0].Category&&((item.id)%5===0)
                
            }).map((item, index ) => {
                return(
                    <div>
                        <Link to={'/NextPage' }> <h1>{item.heading}</h1></Link>
                       
                        <h3>{item.LargeContent.slice(0,150)}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Description