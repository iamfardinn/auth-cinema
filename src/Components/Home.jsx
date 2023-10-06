import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Home = () => {

    const authInfo =useContext(AuthContext)
    console.log(authInfo);
    return (
        <div>
           This is Home for :{authInfo.name}
        </div>
    );
};

export default Home;