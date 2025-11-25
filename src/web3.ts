import { BrowserProvider, Contract } from "ethers";
import {
  MYNFT_ADDRESS,
  MARKETPLACE_ADDRESS,
  MYNFT_ABI,
  MARKETPLACE_ABI,
} from "./contracts";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export async function connectWalletOnChain(): Promise<string> {
  if (!window.ethereum) throw new Error("MetaMask not installed.");

  const provider = new BrowserProvider(window.ethereum);
  const accounts = await provider.send("eth_requestAccounts", []);
  return accounts[0];
}

export async function getContracts() {
  if (!window.ethereum) throw new Error("MetaMask not installed.");

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  return {
    myNft: new Contract(MYNFT_ADDRESS, MYNFT_ABI, signer),
    marketplace: new Contract(MARKETPLACE_ADDRESS, MARKETPLACE_ABI, signer),
    signer,
  };
}

export async function mintNFT(tokenURI: string) {
  const { myNft } = await getContracts();
  const tx = await myNft.mint(tokenURI);
  return await tx.wait();
}
