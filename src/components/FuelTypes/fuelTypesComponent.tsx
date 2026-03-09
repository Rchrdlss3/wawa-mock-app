import { useContext, useState } from "react"
import { ExperienceContext } from "../../App"
import { WAWA_THEMES } from "../../types/theme";

export type FuelType = {
    type: string
    price: string
}

const FUEL_TYPES:FuelType[] = [{type: 'Regular', price: '3.49'}, {type:'Plus', price: '3.69'}, {type:'Premium',price:'3.89'}]

export interface FuelTypesComponentProps {
    onClick: () => void
};

export default function FuelTypesComponent (props:FuelTypesComponentProps) {
    const experience = useContext(ExperienceContext);
    const [selectedFuel,setSelectedFuel] = useState<FuelType>();
    
    return (
        <div style = {{display:'flex'}}>
            {FUEL_TYPES.map((fuel) => (
                <div style = {{
                    display: 'flex', 
                    flexDirection: 'column',
                    width: '150px', 
                    height: '150px',
                    backgroundColor: selectedFuel === fuel ? WAWA_THEMES[experience?.experience!].accent : '', 
                    margin: 10,
                    justifyContent: 'center',
                    textAlign: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    transition: '2s',
                    fontWeight: 800,
                    border: `2px solid ${WAWA_THEMES[experience?.experience!].accent}`
                    }}
                    onClick = {() => {
                        setSelectedFuel(fuel)
                        props.onClick();
                    }}
                    >
                <div>{fuel.type}</div>
                <div>${fuel.price}</div>
                </div>
            ))}
        </div>
    )
}