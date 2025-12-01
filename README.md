# Ga Marketplace - web3 NFT Marketplace

A blockchain-based marketplace enabling creators and collectors to mint, list, buy, sell, and trade NFTs in a decentralized manner.

## 👥 Team Members

- **Name**: Raditya Maheswara  
  **NIM**: 23/516252/PA/22075  
  **University**: Universitas Gadjah Mada (UGM)  
  **GitHub**: https://github.com/mash1rou

- **Name**: Kireina Kalila Putri  
  **NIM**: 22/492235/PA/21095  
  **University**: Universitas Gadjah Mada (UGM)  
  **GitHub**: https://github.com/stxrlyt

- **Name**: Farhan Adiwidya Pradana  
  **NIM**: 24/536804/PA/22773  
  **University**: Universitas Gadjah Mada (UGM)  
  **GitHub**: https://github.com/Farscent

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
- **Modern UI**: Glassmorphism, gradients, and smooth animations  
- **Dashboard Layout**: Organized sidebar navigation and clean interface  
- **Real-time Updates**: Live data fetching and state management  

### Advanced Features

- **Analytics Dashboard**: Market insights and statistics  
- **Portfolio Management**: Track your NFT collection and listings  
- **IPFS Integration**: Decentralized storage via Pinata  
- **Wallet Integration**: RainbowKit + Wagmi wallet connection  
- **Search & Filtering**: Advanced filtering and sorting options  

---

## 🛠️ Technology Stack

### Frontend

- **Next.js 13** – React framework with App Router  
- **React 18** – Modern React with hooks  
- **Tailwind CSS** – Utility-first CSS framework  
- **Framer Motion** – Animations and transitions  
- **React Icons** – Icon library  

### Blockchain & Web3

- **Hardhat** – Smart contract development and local node  
- **Wagmi** – React hooks for Ethereum  
- **RainbowKit** – Wallet connection UI  
- **Ethers.js** – Blockchain interaction library  
- **Viem** – Type-safe Ethereum interface  

### Additional Libraries

- **React Hot Toast** – Notifications  
- **Recharts** – Charts & analytics  
- **Headless UI** – Accessible UI components  

---

## 📁 Project Structure

```bash
nft-marketplace/
├── components/
│   ├── Layout/
│   │   ├── Layout.js          # Main layout wrapper
│   │   ├── Sidebar.js         # Sidebar navigation
│   │   └── Header.js          # Top header with wallet connect
│   ├── NFT/
│   │   └── NFTCard.js         # Reusable NFT card component
│   └── UI/
│       ├── StatsCard.js       # Stats display component
│       └── LoadingSpinner.js  # Loading indicator
├── lib/
│   ├── contracts/
│   │   ├── config.js          # Contract config (addresses, ABIs)
│   │   ├── functions.js       # Contract interaction helpers
│   │   └── utils.js           # Utility helpers
│   ├── ipfs/
│   │   └── pinata.js          # IPFS/Pinata integration
│   └── wagmi.js               # Wagmi + RainbowKit config
├── pages/
│   ├── index.js               # Marketplace homepage
│   ├── create.js              # Create / mint NFT page
│   ├── my-nfts.js             # User’s NFT collection
│   ├── my-listings.js         # User’s active listings
│   ├── analytics.js           # Analytics dashboard
│   └── _app.js                # App wrapper
├── styles/
│   └── globals.css            # Global styles
├── web3/
│   ├── contracts/             # Solidity contracts
│   ├── scripts/               # Hardhat scripts (deploy, etc.)
│   ├── deployments/           # Deployed addresses & ABIs
│   └── hardhat.config.js
├── .env.local                 # Environment variables (not committed)
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## ✅ Prerequisites

- **Node.js 20** (recommended) – use `nvm` if possible  
- **npm** package manager  
- **MetaMask** (or compatible wallet) installed in the browser  
- **Pinata** account for IPFS uploads  
- Git + a terminal (PowerShell, CMD, Git Bash, etc.)

---

## ⚙️ Installation & Run Steps

> 💡 **Tips for terminal paths (Windows PowerShell / CMD)**  
> - When your prompt looks like:  
>   `PS C:\path\to\nft-marketplace>` → you are in the **project root**  
> - When your prompt looks like:  
>   `PS C:\path\to\nft-marketplace\web3>` → you are inside the **web3 folder**  
>
> The commands below depend on *where* you are, so always check the path before the `>`.

---

### 1. Clone the repository

```bash
git clone https://github.com/stxrlyt/nft-marketplace
cd nft-marketplace
```

Now your prompt should look like:

```text
PS C:\path\to\nft-marketplace>
```

This is the **Next.js frontend root**.

---

### 2. Configure environment variables (root: `\nft-marketplace`)

In the project root, create `.env.local`:

```env
# App Configuration
NEXT_PUBLIC_APP_NAME=NFT Marketplace DApp
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id

# Smart Contract Configuration (these will match your local deploy)
NEXT_PUBLIC_CONTRACT_ADDRESS=0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
NEXT_PUBLIC_USDC_ADDRESS=0x5FbDB2315678afecb367f032d93F642f64180aa3
NEXT_PUBLIC_USDT_ADDRESS=0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

# Pinata IPFS Configuration
NEXT_PUBLIC_PINATA_JWT=your_pinata_jwt_token
NEXT_PUBLIC_PINATA_GATEWAY_URL=https://gateway.pinata.cloud/ipfs/

# Network Configuration (Hardhat localhost)
NEXT_PUBLIC_CHAIN_ID=31337
NEXT_PUBLIC_RPC_URL=http://127.0.0.1:8545
```

> Replace `your_wallet_connect_project_id` and `your_pinata_jwt_token` with real values.

---

### 3. (Optional) Add your contract ABI to the frontend

If you want an explicit ABI file in the frontend, create:

```bash
lib/contracts/abi.js
```

in `\nft-marketplace` and export your ABI:

```js
// lib/contracts/abi.js
export const NFTMarketplaceABI = [
  // ... ABI here ...
];
```

If you use the provided Hardhat setup, ABIs are also generated into `web3/deployments/abis.json` and used via `lib/contracts/config.js`.

---

### 4. Run Hardhat node & deploy contracts (in `web3/`)

All Solidity + Hardhat logic lives in the **web3** folder.

From the **project root**:

```bash
cd web3
```

Now your prompt should be:

```text
PS C:\path\to\nft-marketplace\web3>
```

#### 4.1 Install web3 dependencies (first time only)

```bash
nvm use 20        # if you are using nvm
npm install
```

#### 4.2 Start the local Hardhat node

In **Terminal 1**, inside `web3`:

```bash
npm run node
```

Keep this running. It starts Hardhat at:

```text
http://127.0.0.1:8545
```

#### 4.3 Compile & deploy contracts

Open **Terminal 2** and again go to `web3`:

```bash
cd C:\path\to\nft-marketplace\web3
nvm use 20
npm run compile    # hardhat compile
npm run deploy     # hardhat run scripts/deploy.js --network localhost
```

This will:

- Compile all contracts  
- Deploy:
  - `NFTMarketplace`
  - `Mock USDC`
  - `Mock USDT`
- Fund several test accounts with mock USDC/USDT  
- Save deployment info to:

  - `web3/deployments/localhost.json`  
  - `web3/deployments/addresses.json`  
  - `web3/deployments/abis.json`

The output will show something like:

- NFT Marketplace: `0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0`
- Mock USDC:       `0x5FbDB2315678afecb367f032d93F642f64180aa3`
- Mock USDT:       `0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512`

Make sure your `.env.local` values for:

- `NEXT_PUBLIC_CONTRACT_ADDRESS`  
- `NEXT_PUBLIC_USDC_ADDRESS`  
- `NEXT_PUBLIC_USDT_ADDRESS`  

match these deployment addresses. Update them if necessary.

---

### 5. Install frontend dependencies & start Next.js (root: `\nft-marketplace`)

After deployment is done, go back to the **project root**:

From `web3`:

```bash
cd ..
```

Your prompt should be:

```text
PS C:\path\to\nft-marketplace>
```

#### 5.1 Install frontend dependencies (first time only)

```bash
npm install
```

#### 5.2 Start the dev server

```bash
npm run dev
```

The app will run at:

```text
http://localhost:3000
```

At this point you should have:

- **Terminal 1** → `PS ...\nft-marketplace\web3>` running `npm run node`  
- **Terminal 2** → `PS ...\nft-marketplace>` running `npm run dev`  

---

### 6. Next runs (after everything is set up once)

If you have already:

- installed dependencies,  
- configured `.env.local`, and  
- compiled + deployed the contracts,

then next time you only need to:

1. **Terminal 1** (Hardhat node):

   ```bash
   cd C:\path\to\nft-marketplace\web3
   npm run node
   ```

2. **Terminal 2** (frontend):

   ```bash
   cd C:\path\to\nft-marketplace
   npm run dev
   ```

You only re-run `npm run compile` / `npm run deploy` if:

- you restart the Hardhat node (fresh chain), or  
- you change your contracts and want a new deployment.

---

### 7. Open the app & connect wallet

Open [http://localhost:3000](http://localhost:3000) in your browser.

1. In MetaMask:
   - Add a **Custom Network**:
     - RPC URL: `http://127.0.0.1:8545`
     - Chain ID: `31337`
     - Currency: `ETH`
   - Import one of the Hardhat accounts using its private key (e.g. **Account #0** as admin).
2. In the app:
   - Click **Connect Wallet** (RainbowKit)
   - Choose **MetaMask**
   - Select the imported Hardhat account

You can now:

- Mint NFTs (Create page)  
- View them in **My NFTs**  
- List and buy NFTs on the marketplace  
- Use the admin panel if connected as the owner (`Account #0`)

---

## 🔧 Configuration Details

### Smart Contracts

- Contracts are in `web3/contracts/`
- Deployment script is `web3/scripts/deploy.js`
- Deployment artifacts (addresses + ABIs) are in `web3/deployments/`

To change contract behavior:

1. Edit Solidity files in `web3/contracts/`
2. Re-run:

   ```bash
   cd web3
   npm run compile
   npm run deploy
   ```

3. Update `.env.local` if the addresses change.

---

### IPFS (Pinata) Setup

1. Create an account at [Pinata](https://pinata.cloud)  
2. Go to **API Keys → New Key → JWT**  
3. Give it permissions for `pinFileToIPFS` and `pinJSONToIPFS`  
4. Copy the **JWT token** (the long `eyJ...` string)  
5. Put it into `.env.local`:

   ```env
   NEXT_PUBLIC_PINATA_JWT=eyJhbGciOi...
   NEXT_PUBLIC_PINATA_GATEWAY_URL=https://gateway.pinata.cloud/ipfs/
   ```

> **Never** commit your `.env.local` file to GitHub.

---

### WalletConnect Setup (optional)

1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com)  
2. Create a project → copy the **Project ID**  
3. Set:

   ```env
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
   ```

---

## 📱 Usage

### For Normal Users

1. **Connect Wallet** via the header button  
2. **Browse NFTs** on the home page  
3. **Buy NFTs** with ETH, USDC, or USDT  
4. **Create NFTs** on `/create`:
   - Upload image
   - Set prices & royalties
   - Mint and list  
5. **Manage Collection** on `/my-nfts`  
6. **Manage Listings** on `/my-listings`  

### For Admin (Owner)

If you connect as the **contract owner** (deployer, usually Hardhat Account #0), the `/admin` page will unlock additional controls such as:

- Pause/unpause marketplace  
- Change platform fee  
- Emergency withdraw, etc.

---

## 🧪 Testing & Build

```bash
# Lint the project
npm run lint

# Build for production
npm run build

# Start production build
npm start
```

---

## 🎓 Context

This project was developed for the course **Pengantar Blockchain** at  
**Universitas Gadjah Mada (UGM)**, supervised by  
**Drs. Bambang Nurcahyo Prastowo, M.Sc.**

---

## 📜 License

This project is intended for **academic use only** and is **not licensed for commercial use**.
