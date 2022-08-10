const config = {
  title: "Complacent Monkey Dapp",
  description: "A practise run dapp",
  contractAddress: "0x52afbd46ECf1444a73C03b9c296E25c558291F1B",
  maxMintAmount: 10,
  presaleMaxMintAmount: 3,
  price: 0.01,
};

const onboardOptions = {
  dappID: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 4, //rinkeby
  walletSelect: {
    wallets: [],
  },
};

export { config };
