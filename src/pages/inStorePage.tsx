import { useContext } from "react";
import ClothingHeaderComponent from "../components/ClothingHeader/clothingHeader";
import MapComponent from "../components/Map/mapComponent";
import OrderHistoryComponent from "../components/OrderHistory";
import HoagieStatusBar from "../components/OrderStatus/orderStatusComponent";
import { pageStyle } from "../styles/generalStyles";
import { WAWA_THEMES } from "../types/theme";
import { ExperienceContext } from "../App";

export default function InStorePage(){
    const experience = useContext(ExperienceContext);

    return (
        <div style = {{...pageStyle, backgroundColor: WAWA_THEMES[experience?.experience!].background}}>
        <HoagieStatusBar status = 'COMPLETED'/>
        <div style = {{display: 'flex', justifyContent: 'center'}}>
        <div style = {{overflowY: 'scroll', height: '700px', float: 'left', left:0}}><OrderHistoryComponent cardColumn = {true} /></div>
        <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', justifyItems: 'center'}}>
            <ClothingHeaderComponent />
            <MapComponent title="Find A Wawa Near You" />
        </div>
    
        </div>
        </div>
    )
}