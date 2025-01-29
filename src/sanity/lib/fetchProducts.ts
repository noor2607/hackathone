import { client } from "./client";
import { Product } from "./Product";


// Fetch products from Sanity CMS
export async function fetchProducts(): Promise<Product[]> {
  const query = `
    *[_type == "product" && defined(slug.current)]{
      productName,
      category,
      price,
      inventory,
      colors,
      status,
      "imageUrl": image.asset->url,
      description,
      slug
    }
  `;

  try {
    const products = await client.fetch<Product[]>(query);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export type { Product };
