/// <reference types="react-scripts" />
import Caver from 'caver-js';    
declare global{
interface Window {
        klaytn?:any;
        caver?:any;
    }
}

    window.caver = new Caver(window.klaytn)