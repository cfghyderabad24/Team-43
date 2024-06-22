import braintree from 'braintree'
//payment gateway
var gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: "process.env.BRAINSTREE_MERCHANT_ID",
    publicKey: "process.env.BRAINSTREE_PUBLIC_KEY",
    privateKey: "process.env.BRAINSTREE_PRIVATE_KEY",
  });


  //payment gateway api 
  export const paymentController