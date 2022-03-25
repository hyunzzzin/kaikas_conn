/// <reference types="react-scripts" />
import Caver from 'caver-js';    
declare global{
interface Window {
        klaytn?:any;
        caver?:any;
    }
}

    window.caver = new Caver("http://15.165.41.156:8551")