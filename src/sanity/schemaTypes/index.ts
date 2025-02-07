import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './Products'
import order from './order'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, order],
}
