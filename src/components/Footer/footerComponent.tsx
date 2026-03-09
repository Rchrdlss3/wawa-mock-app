import { useContext } from "react"
import { ExperienceContext } from "../../App"
import { WAWA_THEMES } from "../../types/theme";

export default function FooterComponent () {
    const experience = useContext(ExperienceContext);

    return (
        <footer style ={{width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: WAWA_THEMES[experience?.experience!].headerBg}}>
            <p>Built with ❤️ for the Wawa Team | Made by Richard Ulysse, aspiring Frontend Dev for Wawa</p>
        </footer>
    )
}