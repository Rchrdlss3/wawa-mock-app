import MapComponent from "../components/Map/mapComponent";
import PumpCardComponent from "../components/PumpCard/PumpCard";
import { pageStyle } from "../styles/generalStyles";

export default function AtPumpPage() {
    return(
        <div style = {pageStyle}>
            <div style = {{width: '50%', margin: 'auto'}}><MapComponent mapZoom={17}/></div>
            <PumpCardComponent />
        </div>
    )
}