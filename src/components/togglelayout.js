import {useContext, useState} from "react";
import {Button} from '@material-ui/core'
import Visualart from "../visualart"
import Visualart2 from "../visualart2"
import Visualart3 from "../visualart3"
import { AccountContext } from './context';

export default function Togglelayout(){
    const [layout1, setLayout1] = useState(true)
    const [layout2, setLayout2] = useState(false)
    const [layout3, setLayout3] = useState(false)
    const {layout, setLayout} = useContext(AccountContext)
    

    const handle_layout =()=>{
        console.log("inside handlelayout")
        if(layout1 === true){
            setLayout1(false)
            setLayout2(true)
            setLayout3(false)
        }
        else if (layout2 === true){
            setLayout1(false)
            setLayout2(false)
            setLayout3(true)
        }
        else if (layout3 === true){
            setLayout1(true)
            setLayout2(false)
            setLayout3(false)
        }
    }

    const handle_color =()=>{
        if(layout === "veckans_kortpris"){
            setLayout("veckans_layout")
        }
        else if (layout === "veckans_layout"){
            setLayout("veckans_kortpris")
        }
       
    }

    const get_layout = () =>{
        if(layout1 === true){
            return(
                <Visualart/>
            )
        }
        else if(layout2 === true){
            return(
                <Visualart2/>
            )
        }
        else if (layout3 === true){
            return(
                <Visualart3/>
            )
        }
        
    }

    return(
    <div>
        <Button color ="primary" variant="outlined" onClick={handle_layout}> Change Layout</Button>
        <Button color ="secondary" variant="outlined" onClick={handle_color}> Change Color</Button>
        {get_layout()}

    </div>)
}