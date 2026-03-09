import React from 'react';
import { OrderStatus } from '../../types/order'; 

interface HoagieStatusBarProps {
  status: OrderStatus;
}

const HoagieStatusBar: React.FC<HoagieStatusBarProps> = ({ status }) => {
  const steps: OrderStatus[] = ['PENDING', 'PREPARING', 'READY', 'COMPLETED'];
  
  const colors = {
    complete: '#006D43', 
    incomplete: '#D1D5DB', 
    textComplete: '#1F2937',
    textIncomplete: '#9CA3AF' 
  };

  const currentStepIndex = steps.indexOf(status);

  return (
    <div style={{ 
        paddingTop: '20px', 
        paddingBottom: '20px',
        borderTop: '1px solid #F3F4F6', 

        width: '50%',
        margin: 'auto',
        }}>
        <summary style = {{textAlign: 'center', marginBottom: '15px'}}>
        <h4 style={{ color: '#E31837', fontSize: '16px', fontWeight: 'bold', margin: 0, display: 'block',  }}>
          HOAGIE STATUS: ORDER #P9921
        </h4>
      </summary>

      <div style={{ display: 'flex'}}>
        {steps.map((stepName, index) => {
          const isComplete = index < currentStepIndex;
          const isActive = index === currentStepIndex;
          
          return (
            <div key={stepName} style={{ display: 'flex', alignItems: 'center', flex: stepName === 'COMPLETED' ? 0 : 1, position: 'relative' }}>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: `2px solid ${isComplete || isActive ? colors.complete : colors.incomplete}`,
                  backgroundColor: isActive ? colors.complete : '#FFFFFF',
                  color: isComplete ? colors.complete : (isActive ? '#FFFFFF' : colors.incomplete),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  transition: 'all 0.4s ease',
                  zIndex: 2,
                }}
              >
                {isComplete ? '✓' : index + 1}
              </div>
              <span
                style={{
                  position: 'absolute',
                  top: '30px',
                  left: '-7%',
                //   transform: 'translateX(-100%)',
                  fontSize: '11px',
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isComplete || isActive ? colors.textComplete : colors.textIncomplete,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  whiteSpace: 'nowrap',
                  textAlign: 'center'
                }}
              >
                {stepName.replace('_', ' ')}

                {isActive && stepName === 'PREPARING' && (
                  <div style={{ fontSize: '10px', color: '#6B7280', marginTop: '2px' }}>
                    (8 Min Away)
                  </div>
                )}
              </span>

              {index < steps.length - 1 && (
                <div
                  style={{
                    flex: 1,
                    height: '3px',
                    backgroundColor: isComplete ? colors.complete : colors.incomplete,
                    transition: 'background-color 0.4s ease',
                    position: 'absolute',
                    left: '24px', 
                    right: '-24px',
                    zIndex: 1,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HoagieStatusBar;