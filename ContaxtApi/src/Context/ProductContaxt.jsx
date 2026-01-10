import React, { createContext, useEffect, useState } from "react";

import {responsnce } from "../api/ProductApi.jsx";

const Datacontaxt = createContext();


export { Datacontaxt };

function Contaxt(props) {
  const [ProductDeta, setProductDeta] = useState([]);

  const getdata =  async () => {
    const data =  await responsnce();
    setProductDeta(data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <Datacontaxt.Provider value={ProductDeta}>
      <div>
        {props.children}
        {/* <h1>{ProductDeta}</h1> */}
      </div>
    </Datacontaxt.Provider>
  );
}

export default Contaxt;
