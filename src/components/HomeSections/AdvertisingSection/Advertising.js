import React from "react";
import { BackPhoto } from "./Advertising.styled";



export const AdvertisingSection = () =>{
return (<div style={{position:"relative", width:"100%", height:"400px", marginTop:"165px"}}>

<BackPhoto/>
<div style={{ width:"300px", position:"absolute", top:"50%", left:"60%"}}>
<h2>Встречайте весну
вместе с нами</h2>

<p>Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой</p>
<button style={{width:"163px", height:"41px"}}> Подробнее</button>
</div>
</div>)
}