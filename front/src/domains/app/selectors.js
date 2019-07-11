export const getUserById = (state, id) => state.customers.find(customer => customer.id === id);
export const getProductByName = (state, name) => state.products.find(product => product.name === name);

