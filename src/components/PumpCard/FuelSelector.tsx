import { Dispatch, SetStateAction } from "react";
import FuelTypesComponent from "../FuelTypes";

export interface FuelSelectorComponentProps {
    selectedPump: number | undefined;
    setFuelSelected: Dispatch<SetStateAction<boolean>>
}
export default function FuelSelectorComponent(props:FuelSelectorComponentProps) {
    return (
            <div style = {{display: 'flex', flexDirection: 'column',alignItems: 'center'}}> 
                <h1>Pump #{props.selectedPump} Ready to Go!</h1> 
                <FuelTypesComponent onClick = {() => {props.setFuelSelected(true)}} />
                <h2>Select Your Fuel</h2>
            </div>
    )
}