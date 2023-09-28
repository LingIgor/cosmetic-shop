import React from "react";
import { BackPhoto, TextBox} from "./HistorySection.styled";



export const HistorySection = () => {
return (<div style={{width:"100%", height:"433px", marginTop:"140px", position: "relative"}}>
<BackPhoto/>
<TextBox>
    <h2>“Мы стремимся сделать уход за кожей доступным
и приятным ритуалом для всех, кто хочет
заботиться о себе и своем теле”  </h2>
    <button style={{width:"163px", height:"41px"}}>Наша історія</button>
</TextBox>




</div>)

}