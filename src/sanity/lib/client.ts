import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


export const createOrder = async (orderData: any) => {
  try {
    const response = await client.create({
      _type: 'order',  // Name of the schema in Sanity
      ...orderData,
    });
    return response;
  } catch (error) {
    throw new Error('Error creating order');
  }
};
