export default {
  name: "order",
  type: "document",
  fields: [
    {
      name: "customer",
      type: "object",
      fields: [
        { name: "firstName", type: "string" },
        { name: "lastName", type: "string" },
        { name: "email", type: "string" },
        { name: "phone", type: "string" },
        {
          name: "address",
          type: "object",
          fields: [
            { name: "address", type: "string" },
            { name: "City", type: "string" },
            { name: "postalCode", type: "string" },
            { name: "country", type: "string" },
          ],
        },
      ],
    },
    {
      name: "items",
      type: "array",
      of: [
        {
          type: "object",
          name: "cartItem", // Define cartItem inline
          title: "Cart Item",
          fields: [
            { name: "productName", type: "string" },
            { name: "price", type: "number" },
            { name: "quantity", type: "number" },
            { name: "imageUrl", type: "string" },
          ],
        },
      ],
    },
    { name: "totalAmount", type: "number" },
  ],
};
