import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";  // Import the correct type

// Assuming you have an `env.ts` or `.env` file to store these values
import { dataset, projectId } from '../env';

// Initialize the builder
const builder = createImageUrlBuilder({ projectId, dataset });

// Function to generate the image URL
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
