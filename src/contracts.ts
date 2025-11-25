// Addresses of deployed smart contracts on Sepolia
export const MYNFT_ADDRESS = "0xaCd2aA7C06e348d270d52511FA3758F2b2A918e0";
export const MARKETPLACE_ADDRESS = "0x133d350B81E5E7231F1AB2E930E7670D42C7806e";

// Minimal ABIs needed by the frontend
export const MYNFT_ABI = [
  "function mint(string tokenURI) external returns (uint256 tokenId)"
];

export const MARKETPLACE_ABI = [
  "function listNFT(address nftAddress, uint256 tokenId, uint256 price) external",
  "function buy(uint256 listingId) external payable",
  "event Listed(uint256 indexed listingId,address indexed nftAddress,uint256 indexed tokenId,address seller,uint256 price)",
  "event Purchased(uint256 indexed listingId,address indexed buyer)"
];
