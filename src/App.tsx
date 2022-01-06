/*
 * @Author: your name
 * @Date: 2021-12-22 18:54:36
 * @LastEditTime: 2021-12-28 14:55:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts-green-freak-on-mars/src/App.tsx
 */
import Header from "./components/Header";
import Presale from "./components/Body";
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './hooks/useEagerConnect';

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header />
      <Presale />
    </Web3ReactProvider>
  );
}

export default App;
