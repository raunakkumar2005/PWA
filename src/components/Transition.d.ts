import React from 'react';
interface OrderTrackingProps {
    isBookingAccepted: boolean;
    isWeighbridgeData: boolean;
    isDeposit: boolean;
    isGrading: boolean;
    isWithdrawal: boolean;
    isCompleted: boolean;
}
declare const OrderTracking: React.FC<OrderTrackingProps>;
export default OrderTracking;
