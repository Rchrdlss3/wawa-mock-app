import DeliveryDashboardComponent from "../components/WawaDelivery";
import HoagieStatusBar from "../components/OrderStatus/orderStatusComponent";
import OrderHistoryComponent from "../components/OrderHistory";
import { pageStyle } from "../styles/generalStyles";

export default function DeliveryPage () {

    return (
        <div style = {pageStyle}>
        <DeliveryDashboardComponent />
        <HoagieStatusBar status= 'PREPARING'/>
        <OrderHistoryComponent title= "Reorder Favorites"/>
        </div>
    )
}