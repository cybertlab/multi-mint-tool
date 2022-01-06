<!--
 * @Author: your name
 * @Date: 2021-12-23 16:26:54
 * @LastEditTime: 2021-12-31 09:48:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mint-tool/README.md
-->

## Available Scripts

In the project directory, you can run:

## Requirements:

- node.js: v14.18.1+
- react.js

## QuickStart:

```ruby

yarn install

yarn start

```
## config.json:
```
maxMint : 最大mint个数
contractAddress: NFT合约地址
maxPriorityFeePerGas: 矿工小费
maxFeePerGas: 矿工费  拉满
valuePerNft: NFT单个价格
abi: 例 function mint(uint256 number) external payable， 按合约修改
rpcApi: 使用的rpc节点
startTime: 开始时间 格式"20211229T174500", 
privKeys: 私钥数组 （使用新地址 防止被盗）
```
根据合约修改 components -> Body -> index.ts  line52# multi-mint-tool
