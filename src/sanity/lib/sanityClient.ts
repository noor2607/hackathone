import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'wb7zlzt8', 
  dataset: 'production',    
  useCdn: true,                 
  apiVersion: '2023-10-01', 
 token :"skbplOiZxxzGfCSyMjlF6dmUVaqsKbYcYIGhFKPbGDR9JQwS8R7lmwVelO5Y60KNt4a3FiFM2O4yiWkjggIGvVFcwrfW4vDbbRD5EIa4cLEpfth36pGft7ymX7Vf0KPjilEQipIMvzZJdd7EsLCMeTqyP90JTfi8tZXCWTanukKQFCEToHTV"
     
});

export default sanityClient;

export const createOrderInSanity = async (orderData: any) => {
  try {
    const newOrder = await sanityClient.create({
      _type: "order",
      ...orderData,
    });
    return newOrder;
  } catch (error) {
    console.error("Error creating order:", error);
    return null;
  }
};
