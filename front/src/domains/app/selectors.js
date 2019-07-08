export const getUserById = (state, id) => state.customers.find(customer => customer.id === id);

