import HomePage from "@/app/home/page";
import { Provider } from "react-redux";
import { Providers } from "./provider";
import { store } from "@/Redux/Store";



export default function app() {
  return (
    <div>
     
        <HomePage/>
        
    </div>
  );
}

