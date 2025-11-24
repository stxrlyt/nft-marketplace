import React from "react";

export interface NFT {
  id: number;
  name: string;
  creator: string;
  owner: string;
  price: number;
  isFeatured: boolean;
  onSale: boolean;
  image: string;
}

interface NFTCardProps {
  nft: NFT;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => (
  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition duration-300 hover:shadow-indigo-500/50 hover:scale-[1.02] cursor-pointer">
    <img
      src={nft.image}
      alt={nft.name}
      className="w-full h-64 object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://placehold.co/400x400/374151/ffffff?text=NFT+Image';
      }}
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-white truncate">{nft.name}</h3>
      <p className="text-sm text-gray-400">Creator: {nft.creator.substring(0, 10)}...</p>
      {nft.onSale && (
        <div className="mt-3 flex justify-between items-center">
          <span className="text-2xl font-bold text-emerald-400">{nft.price} ETH</span>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-1.5 px-3 rounded-lg">
            Buy Now
          </button>
        </div>
      )}
      {!nft.onSale && (
        <p className="mt-3 text-lg font-bold text-yellow-500">Not Listed</p>
      )}
    </div>
  </div>
);

export default NFTCard;
