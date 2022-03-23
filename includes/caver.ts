// import CaverModule from '@/helpers/caverjs.helper';
import Caver from 'caver-js';

declare global {
    interface Window {
        klaytn?: any;
        caver?: any;
    }
}

// const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') !== -1;
// console.log(isSafari);
// if (!isSafari) {
//     const _obj = require('@/helpers/caverjs.helper');
//window.caver = CaverModule;
window.caver = new Caver(window.klaytn);
// }
