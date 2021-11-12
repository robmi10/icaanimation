import { useEffect , useContext} from "react";
import { AccountContext } from "./context";

export default function Receivelayout(){
    const {setLayout} = useContext(AccountContext)
    const fetch_json_data = async() =>{
        const requestOption ={
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }   
        const response = await fetch("http://localhost:5000/api/post/layout/", requestOption);
        const data = await response.json()
        console.log("Response -->", data)
        console.log("layout -->", data["layout"])
        setLayout(data["layout"])
    }

    useEffect(() => {
        fetch_json_data()
    },[])

    return(<div>

    </div>)
}