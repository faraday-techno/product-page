import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const METADATA = {
  'client-id':
    'AdU0Rc7AWBKnauRr5i_EBvzEkyX376b49jtTP7SzPs_45BF1hSPbWWP-HTJ_ODeLu6Sx6lKTcvE4aebv',
  'plan-id': 'P-63G284000F283323XL6UYVWQ',
};
const ButtonsStyle = {
  layout: 'vertical',
  color: 'blue',
};

export default function PayPal() {
  const createSubscription = (data, actions) => {
    return actions.subscription.create({
      plan_id: METADATA['plan-id'], // Creates the subscription
    });
  };

  const onApprove = (data, actions) => {
    console.log(data); // Optional message given to subscriber
  };

  const onError = (data) => {
    console.log(data);
  };
  return (
    <PayPalScriptProvider
      options={{
        'client-id': METADATA['client-id'],
        vault: true,
        intent: 'subscription',
      }}
    >
      <PayPalButtons
        style={{ ...ButtonsStyle }}
        createSubscription={(data, actions) =>
          createSubscription(data, actions)
        }
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </PayPalScriptProvider>
  );
}
