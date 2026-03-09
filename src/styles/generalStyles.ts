import { WawaExperience } from "../types/experience"
import { WAWA_THEMES } from "../types/theme"

export const pageStyle:React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh'
}

export const buttonStyles = (hover:boolean,experience:WawaExperience):React.CSSProperties => {
    return {
        border: 'none',
        margin: '5px',
        borderRadius: '5px',
        width: '150px',
        height: '30px',
        backgroundColor: WAWA_THEMES[experience].primaryButton,
        color: WAWA_THEMES[experience].primaryButtonText,
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    }
}