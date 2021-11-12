import './App.css';
import './Visualart.css'
import './VisualartAnimation.css'
import blabar from './VisualArt_Creative_Developer_Kodtest_v01/VisualArt_Creative_Developer_Kodtest_v01/blabar.png'
import maner from './VisualArt_Creative_Developer_Kodtest_v01/VisualArt_Creative_Developer_Kodtest_v01/maner.png'
import splash from './VisualArt_Creative_Developer_Kodtest_v01/VisualArt_Creative_Developer_Kodtest_v01/splash.svg'
import {useContext, useState} from "react";
import { AccountContext } from './components/context';
import Zoom from '@mui/material/Zoom';
import {visualart_data, visualart_data2} from "./components/jsondata"

function Visualart3() {
    const {layout} = useContext(AccountContext)
    const [open] = useState(true)
    var curr_visual_data = visualart_data;
    if( layout === "veckans_kortpris"){
        curr_visual_data = visualart_data2;
    }
  return (
    <div className="screenlayout">
        
            <Zoom in={open} style={{ transitionDelay: '500ms'}}>
                { layout === "veckans_kortpris" ? <div>
                <img className="manerlayout" style ={{marginTop:-50, width: 420, height: 150}} alt="" src={maner}></img>
                </div> : <div>
                <img style ={{marginTop:-50, width: 420, height: 150}} alt="" src={maner}></img>
                </div>}
            </Zoom>   
            <h1 className="maner" >
                {curr_visual_data["article_prome_info"]} 
            </h1>
        
            <Zoom in={open} style={{ transitionDelay: '3000ms'}}>
                <div style={{zIndex:2, position :"absolute", top: 363, left: 440}}>
                    <div className="splash">
                        <span>  {layout === "veckans_kortpris" ? <img alt="" style ={{width: 200, height:200, filter: "invert(48%) sepia(55%) saturate(506%) hue-rotate(302deg) brightness(164%) contrast(105%)" }} src={splash} ></img>:
                        <img alt="" style ={{ width: 200, height:200, filter: "invert(30%) sepia(84%) saturate(6760%) hue-rotate(353deg) brightness(96%) contrast(131%)"}} src={splash} ></img>}
                        </span>
                    </div>
                    <h1 className="swingh1" style={{zIndex:3}}> {curr_visual_data["promotion_unit"]} </h1>
                    <h3 className="swingh2"> {curr_visual_data["promotion_sub_unit"]} </h3> 
                    <p className="swingh3"> /{curr_visual_data["article_unit_of_measurement"]} </p>
                </div>
            </Zoom>
            
            <Zoom in={open} style={{ transitionDelay: '1000ms'}}>
                <div style ={{zIndex:1, position:"absolute", top: 158, left:435}}>
                    <span><img alt="" style ={{marginTop:-20, width: 210, height: 250}} src={blabar}></img> </span>
                </div>
            </Zoom>

            <div className="block-appear" id="third" style={{position:"absolute", top: 500, left:340, fontSize: 30}}>
                <span className="icatext">{curr_visual_data["article_name"]}</span>
            </div>

            <div className="block-appear" id="third" style={{position:"absolute", left:340, top: 550}}>
                <span className="ICATextWebRegular">{curr_visual_data["article_brand_name"]}. {curr_visual_data["article_origin_country"]}. {curr_visual_data["article_package_info"]}</span>
            </div>
    </div>
  );
}

export default Visualart3;
