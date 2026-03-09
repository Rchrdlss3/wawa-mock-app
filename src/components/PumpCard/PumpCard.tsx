import { useContext, useState } from "react";
import { buttonStyles } from "../../styles/generalStyles";
import { WAWA_THEMES } from "../../types/theme";
import { ExperienceContext } from "../../App";
import FuelTypesComponent from "../FuelTypes";
import PumpSelectorComponent from "./PumpSelector";
import FuelSelectorComponent from "./FuelSelector";
import GasPumpComponent from "./GasPump";


export default function PumpCardComponent () {
    const [selectedPump,setSelectedPump] = useState<number>();
    const [pumpSelected,setPumpSelected] = useState(false);
    const [fuelSelected,setFuelSelected] = useState(false);
    const experiecne = useContext(ExperienceContext);


    return (
        <div style = {{
            display: 'flex', 
            flexDirection:'column',
            width: '100%', 
            height: '500px',
            alignItems:'center'
            }}>
            {!pumpSelected &&
            <PumpSelectorComponent selectedPump={selectedPump} setPumpSelected={setPumpSelected} setSelectedPump={setSelectedPump}/>
            }
            {(selectedPump && !fuelSelected) && <FuelSelectorComponent selectedPump={selectedPump} setFuelSelected={setFuelSelected}/>}
            {(selectedPump && fuelSelected) && <GasPumpComponent />}
            <button 
            disabled = {!(pumpSelected && fuelSelected)}
            onClick = {() => {console.log('button')}}
            style = {{...buttonStyles(false,experiecne?.experience!),
            backgroundColor: !(pumpSelected && fuelSelected)? 'Grey' : WAWA_THEMES[experiecne?.experience!].primaryButton }}>Start Fueling</button>
        </div>
    )
}