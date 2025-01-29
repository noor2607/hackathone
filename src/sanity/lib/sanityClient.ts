import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'wb7zlzt8', 
  dataset: 'production',    
  useCdn: true,                 
  apiVersion: '2023-10-01',      
});

export default sanityClient;
