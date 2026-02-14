import { Datacontaxt } from "../Context/ProductContaxt";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-between text-xl p-4 gap-4 bg-gray-900 text-white">
      <h1>Navbar</h1>
      <ul className="flex p-4 gap-20">
        <Link to={"/"}>HOME</Link>
        <Link to={"/Product"}>Product</Link>
        
      </ul>
    </div>
  );
}

export default Nav;
