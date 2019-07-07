import axios from "axios";
import apiConfig from "../configs/apiConfigs";

const getUsers = () => {
  try {
    return axios.get(apiConfig.CUSTOMERS).then(resp => resp.data);
  } catch (error) {
    console.log("Error at getUsers api:", error);
    //TO DO error handler
  }
};

const deleteUserById = id => {
  try {
    return axios
      .delete(`${apiConfig.CUSTOMERS}/id`)
      .then(resp => console.log("resp at deleteUserById", resp));
  } catch (error) {
    console.log("Error at deleteUserById api:", error);
    //TO DO error handler
  }
};

export default { getUsers, deleteUserById };
