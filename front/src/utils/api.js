import axios from "axios";
import apiConfig from "../configs/apiConfigs";

const HEADERS = {
  headers: {
    ContentType: 'application/json;charset=UTF-8',
  }
}

const getUsers = () => {
  try {
    return axios.get(apiConfig.CUSTOMERS)
      .then(resp => resp.data)
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log("Error at getUsers api:", error);
    //TO DO error handler
  }
};

const deleteUserById = id => {
  try {
    return axios
      .delete(`${apiConfig.CUSTOMERS}/${id}`)
      .then(resp => {
        return resp;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log("Error at deleteUserById api:", error);
    //TO DO error handler
  }
};

const addCustomer = customer => {
  const { name, address, phone } = customer;
  try {
    return axios.post(
      apiConfig.CUSTOMERS,
      { name, address, phone },
      HEADERS
    )
      .then(resp => {
        return resp
      })
      .catch((error) => {
        console.log(error);
      });
  }
  catch (error) {
    console.log("Error at deleteUserById api:", error);
    //TO DO error handler
  }
}

const editCustomer = customer => {
  const { name, address, phone, id } = customer;
  try {
    return axios.put(`${apiConfig.CUSTOMERS}/${id}`,
      { name, address, phone }, HEADERS
    )
      .then(resp => {
        return resp
      })
  }
  catch (error) {
    console.log("Error at deleteUserById api:", error);
    //TO DO error handler
  }
}

const getAllProducts = () => {
  try {
    return axios.get(apiConfig.PRODUCTS)
      .then(resp => {
        return resp.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log("Error at getAllProducts api:", error);
    //TO DO error handler
  }
}

const addInvoice = invoice => {
  try {
    const { customer_id, discount, total } = invoice;
    return axios.post(apiConfig.INVOICES, { customer_id, discount, total }, HEADERS)
      .then(resp => {
        return resp.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log("Error at addInvoice api:", error);
    //TO DO error handler
  }
}

export default {
  getUsers,
  deleteUserById,
  addCustomer,
  editCustomer,
  getAllProducts,
  addInvoice,
};
