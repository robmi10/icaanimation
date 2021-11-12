import { useEffect , useContext, useState} from "react";
import { AccountContext } from "./context";

export default function Getdata(){
    const {layout} = useContext(AccountContext)
    const {data, setData} = useContext(AccountContext)
    const [curr_data, setCurr_data] = useState()

    const check_layout =() =>{
        console.log("inside check layout!!")
    if(layout == "veckans_kortpris"){
   
    }
    else if (layout == "veckans_layout"){

   
    }}

    useEffect(() => {
        check_layout()
        
    }, [layout])

   
        return(
            <div>

            </div>
        )
    
}