import { Dispatch, SetStateAction } from "react"

export interface PumpSelectorProps {
    selectedPump: number | undefined
    setSelectedPump: Dispatch<SetStateAction<number | undefined>>;
    setPumpSelected: Dispatch<SetStateAction<boolean>>;
}

export default function PumpSelectorComponent(props:PumpSelectorProps) {
    const gasPumps =  Array.from({length: 10},(_,i) => i+ 1);
    return (
                    <div style = {{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                    <h1>Select a Pump</h1>
                    <select 
                    defaultValue={''}
                    value = {props.selectedPump}
                    onChange = {(e) => {
                        props.setSelectedPump(Number(e.target.value))
                        props.setPumpSelected(true)
                        }}>
                        {gasPumps.map((number) => (
                            <option>{number}</option>
                        ))}
                    </select>
                    </div>
    )
}