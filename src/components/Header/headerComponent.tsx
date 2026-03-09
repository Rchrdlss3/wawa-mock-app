import { useContext, useState } from "react";
import { ExperienceContext } from "../../App";
import { navigationLinks } from "../../utils/constants";
import { NavLink } from "react-router";
import { buttonStyles } from "../../styles/generalStyles";
import { WAWA_THEMES } from "../../types/theme";
import { WawaExperience } from "../../types/experience";
import wawalogo from '../../utils/images/wawalogo.png';


export default function HeaderComponent () {
    const experience = useContext(ExperienceContext);
    const [hover,setHover] = useState(false);
    
    return (
        <header style = {{ 
            width: '100%', backgroundColor: WAWA_THEMES[0].headerBg, justifyContent: 'center', alignContent: 'center', textAlign: 'center', height: '110px'
            }}>
                <img src = {WAWA_THEMES[experience?.experience!].logoImage} width = '60' />
            <h1 style = {{padding: 0, margin: 0, color: experience?.experience == WawaExperience.DELIVERY ? WAWA_THEMES[1].headerBg : WAWA_THEMES[experience?.experience!].headerBg}}>Wawa</h1>
            <div>
                {navigationLinks.map((link) => (
                    <NavLink key = {link.name} to = {link.path}>
                        <button
                        style = {buttonStyles(hover,experience?.experience!)}
                        onClick = {() => {experience?.setExperience(link.experience)}}
                        onMouseEnter={() => {setHover(true)}}
                        onMouseLeave={() => {setHover(false)}}
                        >{link.name}</button>
                    </NavLink>
                ))}
            </div>
        </header>
    )
}