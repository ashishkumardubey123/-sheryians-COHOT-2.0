import axios from "axios";

  export const responsnce= async () => {
    const responce = await axios.get("https://fakestoreapi.com/products");
      return responce.data;
  };
