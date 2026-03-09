import { useContext } from "react";
import { cardStyle } from "../../styles/deliveryStyles";
import { buttonStyles } from "../../styles/generalStyles";
import { WawaExperience } from "../../types/experience";
import { ExperienceContext } from "../../App";

interface OrderCardProps {
    image: string,
    title: string,
    description: string;
}
export default function OrderCardComponent (props:OrderCardProps) {
    const experience = useContext(ExperienceContext);

    return (
        <div style = {{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignContent: 'center',
            alignItems: 'center',
            width: '350px',
            height: '410px',
            padding: 0,
            margin: 15,        
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: `2px solid #F3F4F6`,
            }}>
            <h1>{props.title}</h1>
            <img src = {props.image} style = {{width: '100%', height: '200px', objectFit: 'cover', padding: 0, margin:0}}/>
            <p style = {{height: '100px', textAlign: 'center', alignContent: 'center'}}>{props.description}</p>
            <button style = {buttonStyles(false,experience?.experience!)}>Order Now !</button>
        </div>
    )
}