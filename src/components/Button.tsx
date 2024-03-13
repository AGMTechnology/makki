import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Button = () => {
    return ( 
        <div id="button" style={{ display:"flex", flexDirection:"row", alignItems:"center"}}>
            <div style={{fontSize:12,fontWeight:"bold", paddingLeft:10, backgroundColor:"", width:"80%"}}>VELIT DESERUNT</div>
            <div style={{ backgroundColor:"",width:"20%", display:"flex", justifyContent:"flex-end", paddingRight:10}} > <FontAwesomeIcon size="2xs" icon={faArrowRight} /></div>
        </div>
     );
}
 
export default Button;