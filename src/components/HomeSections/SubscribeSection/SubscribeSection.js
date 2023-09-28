import React from "react";

import photo1 from "../../../images/Subscribe1.png"
import photo2 from "../../../images/Subscribe2.png"
import photo3 from "../../../images/Subscribe3.png"
import photo4 from "../../../images/Subscribe4.png"
import photo5 from "../../../images/Subscribe5.png"
import photo6 from "../../../images/Subscribe6.png"


export const SubscribeSection = () => {

 
return (<div style={{display:"flex", alignItems:"center", gap:"71px", marginTop:"140px"}}>
<ul style={{display:"flex", width:"700px"}}>
    <li>
        <img src={photo1} alt="cosmetic" style={{width:"233px"}}/>
    </li>
    <li>
    <img src={photo2} alt="cosmetic"  style={{width:"233px"}}/>
    </li>
    <li>
    <img src={photo3} alt="cosmetic"  style={{width:"233px"}}/>
    </li>
    <li>
    <img src={photo4} alt="cosmetic"  style={{width:"233px"}}/>
    </li>
    <li>
    <img src={photo5} alt="cosmetic"  style={{width:"233px"}}/>
    </li>
    <li>
    <img src={photo6} alt="cosmetic"  style={{width:"233px"}}/>
    </li>
</ul>

<div style={{width:"450px"}}>
<h2>Присоединяйтесь к нам</h2>
<p>Подпишитесь на наш аккаунт @marooncare
и узнавайте о новиках и акциях первыми</p>
<button>Подписаться</button>

</div>



</div>)
}