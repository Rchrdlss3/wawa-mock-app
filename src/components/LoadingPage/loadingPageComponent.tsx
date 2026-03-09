import BarLoader from 'react-spinners/BarLoader';

export default function LoadingPageComponent() {
    return (
        <div style = {{
            width: '100vw',
            height: '100vh',
            backgroundColor: 'inherit',
            textAlign: 'center',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
        }}>
        <BarLoader />
        </div>
    )
}