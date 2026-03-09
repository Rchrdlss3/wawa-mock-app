import React, { useState } from 'react';
import { cardStyle, iconStyle, subtitleStyle, titleStyle } from '../../styles/deliveryStyles';

interface ActionCardProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  ariaLabel?: string;
}

export default function ActionCardComponent({ title, subtitle, icon, onClick, variant = 'secondary', ariaLabel }:ActionCardProps)  {
  const [hover,setHover] = useState(false);

  const isPrimary = variant === 'primary';
  return (
    <button 
    style = {cardStyle(isPrimary,hover)}
    onClick={onClick}
    aria-label={ariaLabel || title}
    onMouseEnter={() => {setHover(true)}}
    onMouseLeave={() => {setHover(false)}}
    >
    <div style = {iconStyle(isPrimary)}>{icon}</div>
      <span style = {titleStyle()}>{title}</span>
      {subtitle && (
        <span style = {subtitleStyle()}>
          {subtitle}
        </span>
      )}
    </button>
  );
};