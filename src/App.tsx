
import logo from './logo.svg';
import './App.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import caver from 'caver-js'
import { useDispatch, useSelector } from 'react-redux';

const App: React.FC<any> = (props:any): JSX.Element => {
  // const dispatch = useDispatch()
  const { klaytn } = window;
  
  const setAccountInfo = async() => {
    if(klaytn === undefined){
      alert('언디파인드 !!!')
      return;
    }
    const address = klaytn.selectedAddress;
    if(address) {
      console.log('아이디있다 ~')
    }
  } 

//fsdfs
  
  
  const enableLoadAccountInfo = async () => {
    if (klaytn) {
      try {
        await klaytn.enable();
        console.log('enable loadAccountInfo');
        await setAccountInfo();
        klaytn.on('accountsChanged', () => setAccountInfo());
      } catch (error) {
        console.log('User denied account access', error);
      }
    } else {
      console.log('Non-Kaikas browser detected. You should consider trying Kaikas!');
    }
  };
  
  /**
   * Kaikas 네트워크 변경 이밴트 핸들러
   */
  const enableLoadNetworkInfo = async () => {
    if (klaytn) {
      try {
        await klaytn.enable();
        //console.log('enable setNetworkInfo');
        
        const network = klaytn.networkVersion;
       
        
        
      } catch (error) {
        console.log('User denied account access');
      }
      klaytn.on('networkChanged', () => enableLoadNetworkInfo());
    } else {
      console.log('Non-Kaikas browser detected. You should consider trying Kaikas!');
    }
  };
  
  const disableLoadAccountInfo = async () => {
    if (klaytn) klaytn.on('accountsChanged', () => console.log('disable LoadAccountInfo'));
  };
  const disableLoadNetworkInfo = async () => {
    if (klaytn) klaytn.on('networkChanged', () => console.log('disable LoadNetworkInfo'));
  };
  const openKaikasConn = async() =>{
    if(klaytn) {
      await klaytn.enable();
      
      
      await disableLoadNetworkInfo();
      await disableLoadAccountInfo();
      
      await enableLoadNetworkInfo();
      await enableLoadAccountInfo();
    }
  }
  
  useEffect(()=>{
    openKaikasConn()
    
  },[])
  
  return(
    <>
    <div style={{backgroundColor:'orange'}}>
    <h1>카이카스 연결 가잣</h1>
    </div>
  
    </>

)
}

export default App;

