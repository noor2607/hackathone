import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './Products'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
