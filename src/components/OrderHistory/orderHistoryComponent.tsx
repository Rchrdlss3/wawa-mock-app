import { WawaOrderItems } from "../../types/order";
import OrderCardComponent from "../OrderCard";

interface OrderHistoryProps {
    title?: string;
    cardColumn?: boolean
}
export default function OrderHistoryComponent (props:OrderHistoryProps) {
    return (
        <div style = {{display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column'}}>
            {props.title && <h1 style = {{textAlign: 'center'}}>{props.title}</h1>}
            <div style = {{display: 'flex', justifyContent: 'center', flexDirection: props.cardColumn ? 'column': 'row'}}>
            {WawaOrderItems.map((item) => (<OrderCardComponent image= {item.image} title = {item.name} description= {item.description}/>))}
            </div>
        </div>
    )
}