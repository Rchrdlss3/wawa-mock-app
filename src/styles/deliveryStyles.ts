
export const cardStyle = (isPrimary: boolean,hover:boolean): React.CSSProperties => {
    return {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '160px',
        height: '160px',
        padding: '16px',
        margin: '8px',
        borderRadius: '20px',
        border: `2px solid ${isPrimary ? '#E31837' : '#F3F4F6'}`,
        backgroundColor: isPrimary ? '#E31837' : '#FFFFFF',
        color: isPrimary ? '#FFFFFF' : '#1F2937',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        opacity: !isPrimary && !hover ? '50%' : '100%'
    }
};

export const iconStyle = (isPrimary: boolean): React.CSSProperties => {
    return {
        marginBottom: '12px',
        color: isPrimary ? '#FFFFFF' : '#E31837',
    }

};

export const titleStyle = (): React.CSSProperties => {
    return {
        fontSize: '14px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        lineHeight: '1.2',
    }

};

export const subtitleStyle = (): React.CSSProperties => {
    return {
        fontSize: '11px',
        marginTop: '4px',
        opacity: 0.8,
    }
};