import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { CustomDialog } from 'react-st-modal';
import DialogContent from '../DialogContent';

const METADATA = {
  'client-id': process.env.GATSBY_PAYPAL_CLIENT_ID,
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
    showModal(data);
  };
  const showModal = async (data) => {
    console.log(data);
    const { subscriptionID } = data;
    let success = !!subscriptionID;
    CustomDialog(
      <DialogContent
        success={success}
        subscriptionID={subscriptionID}
        error={data}
      />,
      {
        showCloseIcon: false,
      }
    );
  };

  const onError = (data) => {
    showModal(data);
  };
  return (
    <>
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
          onError={(data) => onError(data)}
        />
      </PayPalScriptProvider>
    </>
  );
}
/*

      {
  "orderID": "28M33754HS137105F",
  "paymentID": null,
  "billingToken": "BA-5H951758HJ414784M",
  "subscriptionID": "I-1ALHW23ARMJW",
  "facilitatorAccessToken": "A21AAKEJI6IudlGf9uQ7HNXHN4c_ABfuUYF-NJ1-T3vzAKWMyppQVgwwtdXl4l7vU1-k7AVkhyIiy7Yv8S7TjVLv1B3FiRyZQ"
}
*/
