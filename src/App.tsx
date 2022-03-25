
import logo from './logo.svg';
import './App.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
// import caver from 'caver-js'
import {Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, userinfo } from './rootReducer';




const App: React.FC<any> = (props:any): JSX.Element => {
  
  
  
  

  const info = useSelector((store : RootState) => store.info);

  const dispatch = useDispatch()
  const { caver,klaytn } = window;
  
  const setAccountInfo = async() => {
    if(klaytn === undefined){
      alert('언디파인드 !!!')
      return;
    }
    const address = klaytn.selectedAddress;
    
    // console.log(changeAddress);
    
    const balance = await caver.klay.getBalance(address);
    const klay = caver.utils.fromPeb(balance, "KLAY");
    console.log(klay);
    
    console.log('1');
    dispatch(userinfo({
      address:address,
      balance:klay
    }))
    if(!address) {
      console.log('없네 ~')
      
    }
  } 


  
  
  const enableLoadAccountInfo = async () => {
    if (klaytn) {
      try {
        await klaytn.enable();
        console.log('카이카스 ㄱㄱ');
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

  useEffect(()=>{
    // console.log(info)
    
  },[info])
  
 
  
  return(
    <>
    <div style={{backgroundColor:'orange'}}>
    <h1>카이카스 연결 가잣</h1>
    {/* {info} */}
    </div>
  
    </>

)
}

export default App;

