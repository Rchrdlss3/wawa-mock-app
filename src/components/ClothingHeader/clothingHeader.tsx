import { WawaClothingItems } from "../../types/clothing";
import ClothingCardComponent from "../ClothingCard";

export default function ClothingHeaderComponent () {
    return (
        <div style = {{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <h1>Wear Wawa with Pride</h1>
            <div style = {{display: 'flex',flexDirection: 'row'}}>
            {WawaClothingItems.map((clothing) => (<ClothingCardComponent img= {clothing.image} name = {clothing.name} price={clothing.price}/>))}
            </div>
        </div>
    )
}