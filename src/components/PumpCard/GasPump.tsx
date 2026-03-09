import { useContext } from "react"
import { ExperienceContext } from "../../App"
import { WAWA_THEMES } from "../../types/theme";

export default function GasPumpComponent() {
    const experience = useContext(ExperienceContext);

    return (
        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Thanks for Fueling with Wawa</h1>
            <h2>You've earned <span style = {{color: WAWA_THEMES[experience?.experience!].accent}}>5 pts</span> per Gallon </h2>
        </div>
    )
}