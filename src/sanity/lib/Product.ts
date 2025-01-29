export interface Product {
    [x: string]: any; // Allows for additional properties if needed
    productName: string;
    category: string;
    price: number;
    inventory: number;
    colors: string[];
    status: string;
    imageUrl: string;  // Mapping the image URL from Sanity
    description: string;
    slug: {
      current: string; // Slug's current value
    };
  }
  