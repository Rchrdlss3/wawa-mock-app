import { useState } from 'react';
import { ActionItem, DELIVERY_ACTIONS } from '../../types/actions';
import ActionCardComponent from '../ActionCard';

export default function DeliveryDashboardComponent () {
  const [deliveryActions,setDeliveryActions] = useState<ActionItem[]>(DELIVERY_ACTIONS);
  
  const updateDeliveryActions = (newPrimary:ActionItem):ActionItem[] => {
    const updated = deliveryActions.map((action) => (
    action == newPrimary ? {...action,variant: 'primary'} as ActionItem : {...action,variant: 'secondary'} as ActionItem
    ));
    return updated
  }

  return (
    <div style = {{display: 'flex', justifyContent: 'center', width: '100%'}}>
      {deliveryActions.map((deliveryAction) => {
        return <ActionCardComponent 
        title = {deliveryAction.title} 
        subtitle={deliveryAction.subtitle} 
        icon = {deliveryAction.icon} 
        variant={deliveryAction.variant} 
        onClick = {()=>{setDeliveryActions(updateDeliveryActions(deliveryAction))}}/>
      })}
    </div>
  );
};