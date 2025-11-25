# Ga Marketplace - web3 NFT Marketplace

A blockchain-based marketplace enabling creators and collectors to mint, list, buy, sell, and trade NFTs in a decentralized manner.

## Team Members

- **Name**: Raditya Maheswara  
  **NIM**: 23/516252/PA/22075  
  **University**: Universitas Gadjah Mada (UGM)  
  **GitHub Link**: https://github.com/mash1rou

- **Name**: Kireina Kalila Putri  
  **NIM**: 22/492235/PA/21095
  **University**: Universitas Gadjah Mada (UGM)  
  **GitHub Link**: https://github.com/stxrlyt

- **Name**: Farhan Adiwidya Pradana  
  **NIM**: 24/536804/PA/22773  
  **University**: Universitas Gadjah Mada (UGM)  
  **GitHub Link**: https://github.com/Farscent

---

## 🚀 Features

### Core Functionality

- **Multi-token Support**: Accept payments in ETH, USDC, and USDT
- **NFT Minting**: Create and mint new NFTs with custom metadata
- **Marketplace Trading**: Buy and sell NFTs with instant transactions
- **Royalty System**: Built-in royalty support for creators
- **Price Management**: Update listing prices for existing NFTs
- **Resale Functionality**: Relist owned NFTs for sale

### User Interface

- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Modern UI**: Beautiful glass-morphism effects and animations
- **Dashboard Layout**: Organized sidebar navigation and clean interface
- **Real-time Updates**: Live data fetching and state management

### Advanced Features

- **Analytics Dashboard**: Comprehensive market insights and statistics
- **Portfolio Management**: Track your NFT collection and listings
- **IPFS Integration**: Decentralized storage via Pinata
- **Wallet Integration**: Seamless connection with popular wallets
- **Search & Filtering**: Advanced filtering and sorting options

## 🛠️ Technology Stack

### Frontend

- **Next.js 13** - React framework with App Router
- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Comprehensive icon library

### Blockchain & Web3

- **Wagmi** - React hooks for Ethereum
- **RainbowKit** - Wallet connection interface
- **Ethers.js** - Ethereum library for blockchain interaction
- **Viem** - TypeScript interface for Ethereum

### Additional Libraries

- **React Hot Toast** - Elegant notifications
- **Recharts** - Data visualization and charts
- **Headless UI** - Accessible UI components

## 📁 Project Structure

```
nft-marketplace-dapp/
├── components/
│   ├── Layout/
│   │   ├── Layout.js          # Main layout wrapper
│   │   ├── Sidebar.js         # Navigation sidebar
│   │   └── Header.js          # Top header with wallet connection
│   ├── NFT/
│   │   └── NFTCard.js         # Reusable NFT display component
│   └── UI/
│       ├── StatsCard.js       # Statistics display component
│       └── LoadingSpinner.js  # Loading indicator
├── lib/
│   ├── contracts/
│   │   ├── config.js          # Contract configuration
│   │   ├── functions.js       # Contract interaction functions
│   │   └── utils.js           # Utility functions
│   ├── ipfs/
│   │   └── pinata.js          # IPFS/Pinata integration
│   └── wagmi.js               # Wagmi configuration
├── pages/
│   ├── index.js               # Marketplace homepage
│   ├── create.js              # NFT creation page
│   ├── my-nfts.js             # User's NFT collection
│   ├── my-listings.js         # User's active listings
│   ├── analytics.js           # Market analytics dashboard
│   └── _app.js                # App configuration
├── styles/
│   └── globals.css            # Global styles and animations
├── .env.local                 # Environment variables
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies and scripts
```

### Prerequisites

- Node.js 16+ installed
- Yarn or npm package manager
- Metamask or compatible Web3 wallet
- Local blockchain (Hardhat/Ganache) or testnet access

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/stxrlyt/nft-marketplace
   cd nft-marketplace
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**

   Copy the `.env.local` file and update with your values:

   ```bash
   # App Configuration
   NEXT_PUBLIC_APP_NAME=NFT Marketplace DApp
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id

   # Smart Contract Configuration
   NEXT_PUBLIC_CONTRACT_ADDRESS=0x5FbDB2315678afecb367f032d93F642f64180aa3
   NEXT_PUBLIC_USDC_ADDRESS=0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
   NEXT_PUBLIC_USDT_ADDRESS=0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0

   # Pinata IPFS Configuration
   NEXT_PUBLIC_PINATA_JWT=your_pinata_jwt_token
   NEXT_PUBLIC_PINATA_GATEWAY_URL=https://gateway.pinata.cloud/ipfs/

   # Network Configuration
   NEXT_PUBLIC_CHAIN_ID=31337
   NEXT_PUBLIC_RPC_URL=http://127.0.0.1:8545
   ```

4. **Add your contract ABI**

   Create `lib/contracts/abi.js` and export your contract ABI:

   ```javascript
   export const NFTMarketplaceABI = [
     // Your contract ABI here
   ];
   ```

5. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open the application**

   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Smart Contract Setup

1. Deploy your NFT Marketplace contract to your chosen network
2. Update the contract address in `.env.local`
3. Ensure USDC and USDT token addresses are correct for your network
4. Add your contract ABI to `lib/contracts/abi.js`

### IPFS Configuration

1. Create a Pinata account at [pinata.cloud](https://pinata.cloud)
2. Generate a JWT token in your Pinata dashboard
3. Add the JWT token to your environment variables

### Wallet Connect Setup

1. Create a project at [WalletConnect Cloud](https://cloud.walletconnect.com)
2. Get your project ID and add it to environment variables

## 📱 Usage

### For Users

1. **Connect Wallet**: Click "Connect Wallet" to link your Web3 wallet
2. **Browse Marketplace**: Explore available NFTs on the homepage
3. **Buy NFTs**: Purchase NFTs using ETH, USDC, or USDT
4. **Create NFTs**: Upload your art and mint new NFTs
5. **Manage Collection**: View and manage your owned NFTs
6. **List for Sale**: Set prices and list your NFTs for sale

### For Developers

1. **Contract Functions**: All contract interactions are in `lib/contracts/functions.js`
2. **Component Library**: Reusable components in `components/` directory
3. **Styling**: Tailwind CSS with custom animations in `styles/globals.css`
4. **State Management**: React hooks and context for state management

### Features

- Add new pages in the `pages/` directory
- Extend contract functions in `lib/contracts/functions.js`
- Create new UI components in `components/`

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Clear cache and dependencies
npm run clear
```



## License

This project is intended for academic use only and is not licensed for commercial use.
