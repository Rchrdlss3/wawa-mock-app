import { useContext } from "react"
import { ExperienceContext } from "../../App"
import { WAWA_THEMES } from "../../types/theme";

export interface ClothingCardComponentProps {
    img: string
    name: string
    price: number
}

export default function ClothingCardComponent (props:ClothingCardComponentProps) {
    const experience = useContext(ExperienceContext);
    return (
        <div style = {{textAlign: 'center'}}>
            <div style = {{
                width: '300px', 
                height: '300px', 
                borderRadius: '50%', 
                backgroundColor: WAWA_THEMES[experience?.experience!].primaryButton,
                objectFit: 'contain',
                margin: 20
                }}>
            <img src = {props.img} width = {320} />
            </div>
            <p>{props.name}</p>
            ${props.price}
        </div>
    )
}