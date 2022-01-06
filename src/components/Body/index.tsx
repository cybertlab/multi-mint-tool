/*
 * @Author: your name
 * @Date: 2021-12-22 19:16:52
 * @LastEditTime: 2021-12-31 09:51:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mint-tool/src/components/Body/index.tsx
 */
import { useState, useEffect,useMemo } from "react";

import Container from "../Reusables/Container";

import * as S from "./styles";
import { ethers } from 'ethers';
import moment from 'moment';
import useCountdown from "../../hooks/useCountdown";
import config from "../../config.json";


export default function Presale() {
  const [startFlag, setStartFlag] = useState(false);
  const [context, setContext] = useState('按键开始执行');
  const [btnContext, setBtnContext] = useState('开始');
  
  const deadline = useMemo(
    () =>
      moment(config.startTime)
        .format('YYYY-MM-DD HH:mm:ss'),
    [],
  );
  const { day, hour, minute, second } = useCountdown({
    deadline,
  });

  useEffect(() => {
    const mint = async () =>{
      if(!startFlag){
        return
      }
      if(!(day == 0 && hour==0 && minute ==0 && second ==0)){
        return
      }
      let txids = [];
      const provider = new ethers.providers.JsonRpcProvider(config.rpcApi);
      const abi = [
          config.abi
      ];
      config.privKeys.forEach(async key => {
        try {
          const wallet = new ethers.Wallet(key);
          const contract = new ethers.Contract(config.contractAddress, abi, wallet.connect(provider))  
          const res = await contract.mintDuckyET(config.maxMint.toString(),[],
          {
            value: ethers.utils.parseEther((config.maxMint * config.valuePerNft).toString()), 
            maxPriorityFeePerGas: ethers.utils.parseUnits(config.maxPriorityFeePerGas, 'gwei'),
            maxFeePerGas: ethers.utils.parseUnits(config.maxFeePerGas, 'gwei'),
          });
          console.log(res)
          txids.push(res.hash);
        } catch (error) {
          console.log(error)
        }
      });
      
      setStartFlag(false);
      setContext('Mint结束,请去etherscan查看');
      setBtnContext('结束');
    }
    mint();
  }, [startFlag, day, hour, minute, second]);

  const start = () =>{
    if(!startFlag){
      setStartFlag(true);
      setContext('进行中');
      setBtnContext('暂停');
    } else {
      setStartFlag(false);
      setContext('未开始');
      setBtnContext('开始');
    }
  }

  return (
    <S.Section>
      <Container width={1366}>
        <S.Inner>
          <S.Text> {context} </S.Text>
          <S.SubTitle>{`${day} days ${hour} hrs ${minute} mins ${second} secs`}</S.SubTitle>
          <S.Cost> 请确保config.json 配置正确 </S.Cost>
          <S.Mint href="#" onClick={()=> start()}>{btnContext}</S.Mint>
        </S.Inner>
      </Container>
    </S.Section>
  );
}
