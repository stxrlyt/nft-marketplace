import React, { useState, useMemo } from 'react';
import {
  Heart,
  LayoutDashboard,
  GalleryVertical,
  Briefcase,
  PlusCircle,
  Wallet,
  LogOut,
  Users,
  Grid,
} from 'lucide-react';

import NFTCard from "./components/NFTCard";

// --- MOCK DATA ---
const mockNFTs = [
  { id: 1, name: 'The Genesis', creator: '0x123...456', owner: '0x789...012', price: 1.5, isFeatured: true, onSale: true, image: 'https://placehold.co/400x400/10b981/ffffff?text=GENESIS' },
  { id: 2, name: 'Cyberpunk City', creator: '0x789...012', owner: '0xABC...DEF', price: 0.8, isFeatured: true, onSale: false, image: 'https://placehold.co/400x400/f59e0b/000000?text=CYBERPUNK' },
  { id: 3, name: 'Pixel Samurai', creator: '0x123...456', owner: '0x123...456', price: 0.4, isFeatured: false, onSale: true, image: 'https://placehold.co/400x400/ef4444/ffffff?text=SAMURAI' },
  { id: 4, name: 'Astro Dog', creator: '0x789...012', owner: '0x789...012', price: 2.1, isFeatured: false, onSale: true, image: 'https://placehold.co/400x400/3b82f6/ffffff?text=ASTRO' },
  { id: 5, name: 'Quantum Leap', creator: '0x123...456', owner: '0xABC...DEF', price: 0.25, isFeatured: true, onSale: false, image: 'https://placehold.co/400x400/8b5cf6/ffffff?text=QUANTUM' },
];

const mockTransactions = [
  { id: 'tx1', nftName: 'The Genesis', amount: 1.5, buyer: '0x789...', date: '2024-10-25' },
  { id: 'tx2', nftName: 'Pixel Samurai', amount: 0.4, buyer: '0xDEF...', date: '2024-10-24' },
  { id: 'tx3', nftName: 'Cyberpunk City', amount: 0.8, buyer: '0x123...', date: '2024-10-24' },
];

// Mock connected user address for demonstration purposes
const MOCK_USER_ADDRESS = '0x1234...4567';

// --- COMPONENTS ---

/**
 * Connect Wallet Button Component (Simulating Wagmi Hooks)
 * In a real Wagmi app, this would use useAccount, useConnect, and useDisconnect.
 */
const ConnectWalletButton = ({ isConnected, address, onConnect, onDisconnect }) => {
  const shortAddress = address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : '';

  if (isConnected) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm font-mono text-emerald-400 p-2 bg-gray-800 rounded-lg shadow-inner">
          {shortAddress}
        </span>
        <button
          onClick={onDisconnect}
          className="flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl transition duration-200 shadow-lg"
        >
          <LogOut size={16} className="mr-2" />
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={onConnect}
      className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl transition duration-200 shadow-lg transform hover:scale-[1.02]"
    >
      <Wallet size={16} className="mr-2" />
      Connect Wallet
    </button>
  );
};

// --- PAGE VIEWS ---

const IndexPage = () => {
  const featuredNFTs = mockNFTs.filter(nft => nft.isFeatured);

  return (
    <div className=" space-y-12">

      {/* Recent Transactions */}
      <section>
        <h2 className="text-3xl font-extrabold text-white mb-6 flex items-center">
          <Briefcase className="mr-3 text-indigo-400" /> Recent Transactions
        </h2>
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">NFT</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount (ETH)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Buyer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {mockTransactions.map(tx => (
                <tr key={tx.id} className="hover:bg-gray-700 transition duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{tx.nftName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-400 font-semibold">{tx.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-mono">{tx.buyer}...</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Featured NFTs */}
      <section>
        <h2 className="text-3xl font-extrabold text-white mb-6 flex items-center">
          <Heart className="mr-3 text-red-500" /> Featured NFTs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredNFTs.map(nft => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </section>
    </div>
  );
};

const AllNFTsPage = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-extrabold text-white flex items-center">
      <GalleryVertical className="mr-3 text-fuchsia-400" /> All Marketplace NFTs
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {mockNFTs.map(nft => (
        <NFTCard key={nft.id} nft={nft} />
      ))}
    </div>
  </div>
);

const DashboardPage = ({ isConnected, address }) => {
  if (!isConnected) {
    return <NotConnectedMessage />;
  }

  // Mock analytics data
  const totalNFTsOwned = mockNFTs.filter(n => n.owner === address).length;
  const totalNFTsCreated = mockNFTs.filter(n => n.creator === address).length;
  const totalVolume = totalNFTsOwned * 0.95 + totalNFTsCreated * 1.25; // Mock calculation

  const stats = [
    { name: 'Total Owned NFTs', value: totalNFTsOwned, icon: <Grid size={24} className="text-indigo-400" /> },
    { name: 'Total Created', value: totalNFTsCreated, icon: <Users size={24} className="text-teal-400" /> },
    { name: 'Estimated Net Worth (ETH)', value: totalVolume.toFixed(2), icon: <Wallet size={24} className="text-yellow-400" /> },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-extrabold text-white flex items-center">
        <LayoutDashboard className="mr-3 text-cyan-400" /> Personal Dashboard
      </h2>
      <p className="text-lg text-gray-400">Welcome, your address: <span className="font-mono text-cyan-400">{address}</span></p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700">
            <div className="flex items-center space-x-4">
              {stat.icon}
              <div>
                <p className="text-sm font-medium text-gray-400">{stat.name}</p>
                <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CreateMintNFTPage = ({ isConnected }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  if (!isConnected) {
    return <NotConnectedMessage />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !description || !file) {
      setMessage('Please fill all fields and select a file.');
      return;
    }
    // Mock Minting Logic
    setMessage(`Successfully prepared NFT "${name}" for minting! Awaiting transaction confirmation... (Mocked)`);
    // Reset form
    setName('');
    setPrice('');
    setDescription('');
    setFile(null);
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-extrabold text-white flex items-center">
        <PlusCircle className="mr-3 text-yellow-400" /> Create & Mint New NFT
      </h2>
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">NFT Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white p-3 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., The Legendary Degen"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-300">Price (ETH) - Optional Listing</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="0.01"
              step="0.01"
              className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white p-3 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="0.5"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white p-3 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Describe your masterpiece..."
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-300">Upload Image/Media</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="mt-1 block w-full text-sm text-gray-400
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0
                         file:text-sm file:font-semibold
                         file:bg-indigo-600 file:text-white
                         hover:file:bg-indigo-700"
              accept="image/*"
              required
            />
          </div>

          {message && (
            <div className="p-3 text-sm rounded-lg bg-green-900/50 text-green-400">
              {message}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-gray-900 font-bold py-3 rounded-xl transition duration-200 shadow-lg transform hover:scale-[1.01]"
          >
            Mint NFT & List (if price set)
          </button>
        </form>
      </div>
    </div>
  );
};

const OwnedNFTsPage = ({ isConnected, address }) => {
  if (!isConnected) {
    return <NotConnectedMessage />;
  }
  const ownedNFTs = mockNFTs.filter(n => n.owner === address);

  return (
    <div className="w-full space-y-8">
      <h2 className="text-3xl font-extrabold text-white flex items-center">
        <Briefcase className="mr-3 text-green-400" /> Your Owned NFTs ({ownedNFTs.length})
      </h2>
      <p className="text-gray-400">NFTs currently held in your wallet.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {ownedNFTs.length > 0 ? (
          ownedNFTs.map(nft => <NFTCard key={nft.id} nft={nft} />)
        ) : (
          <p className="text-gray-500 col-span-full">You don't own any NFTs yet. Time to explore!</p>
        )}
      </div>
    </div>
  );
};

const CreatedOnSalePage = ({ isConnected, address }) => {
  if (!isConnected) {
    return <NotConnectedMessage />;
  }
  const createdOnSaleNFTs = mockNFTs.filter(n => n.creator === address && n.onSale);

  return (
    <div className="w-full space-y-8">
      <h2 className="text-3xl font-extrabold text-white flex items-center">
        <Users className="mr-3 text-pink-400" /> Created & On Sale ({createdOnSaleNFTs.length})
      </h2>
      <p className="text-gray-400">NFTs you have minted and currently listed for sale on the marketplace.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {createdOnSaleNFTs.length > 0 ? (
          createdOnSaleNFTs.map(nft => <NFTCard key={nft.id} nft={nft} />)
        ) : (
          <p className="text-gray-500 col-span-full">No created NFTs are currently listed for sale.</p>
        )}
      </div>
    </div>
  );
};

const NotConnectedMessage = () => (
  <div className="text-center p-12 bg-gray-800 rounded-xl shadow-xl border border-red-500/30">
    <Wallet size={48} className="text-red-500 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-white">Wallet Not Connected</h3>
    <p className="text-gray-400 mt-2">Please connect your wallet to access this personalized content.</p>
  </div>
);

// --- MAIN APP COMPONENT ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('index');
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState(null);

  // Simulation of Wagmi connection/disconnection
  const connectWallet = () => {
    // In a real app, use Wagmi's useConnect and metamask/walletconnect logic here
    console.log('Simulating Wallet Connection...');
    setTimeout(() => {
      setIsConnected(true);
      setAddress(MOCK_USER_ADDRESS);
      console.log('Wallet Connected!');
    }, 500);
  };

  const disconnectWallet = () => {
    // In a real app, use Wagmi's useDisconnect here
    console.log('Simulating Wallet Disconnection...');
    setTimeout(() => {
      setIsConnected(false);
      setAddress(null);
      console.log('Wallet Disconnected!');
    }, 300);
  };

  const navItems = useMemo(() => [
    { id: 'index', name: 'Home', icon: <Heart size={20} />, requiresAuth: false },
    { id: 'all-nfts', name: 'All NFTs', icon: <GalleryVertical size={20} />, requiresAuth: false },
    { id: 'dashboard', name: 'Dashboard', icon: <LayoutDashboard size={20} />, requiresAuth: true },
    { id: 'owned-nfts', name: 'Owned NFTs', icon: <Briefcase size={20} />, requiresAuth: true },
    { id: 'created-on-sale', name: 'On Sale (Created)', icon: <Users size={20} />, requiresAuth: true },
    { id: 'create-mint', name: 'Create & Mint', icon: <PlusCircle size={20} />, requiresAuth: true },
  ], []);


  const renderPage = () => {
    // Check if the page requires connection and the user is not connected
    const requiredAuth = navItems.find(item => item.id === currentPage)?.requiresAuth;

    if (requiredAuth && !isConnected) {
      return <NotConnectedMessage />;
    }

    switch (currentPage) {
      case 'index':
        return <IndexPage />;
      case 'all-nfts':
        return <AllNFTsPage />;
      case 'dashboard':
        return <DashboardPage isConnected={isConnected} address={address} />;
      case 'create-mint':
        return <CreateMintNFTPage isConnected={isConnected} />;
      case 'owned-nfts':
        return <OwnedNFTsPage isConnected={isConnected} address={address} />;
      case 'created-on-sale':
        return <CreatedOnSalePage isConnected={isConnected} address={address} />;
      default:
        return <IndexPage />;
    }
  };

  const Navigation = () => (
    <nav className="p-4 flex flex-col space-y-2">
      {navItems.map((item) => {
        // Hide authenticated pages if not connected, but keep Create & Mint visible to prompt connection
        if (item.requiresAuth && !isConnected && item.id !== 'create-mint') return null;

        const isActive = currentPage === item.id;
        const baseClasses = "flex items-center space-x-3 p-3 rounded-xl transition duration-200 font-semibold";
        const activeClasses = "bg-indigo-600 text-white shadow-lg";
        const inactiveClasses = "text-gray-300 hover:bg-gray-700";

        return (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        );
      })}
    </nav>
  );

  return (
      <body className="min-h-screen bg-gray-900 text-white font-sans">
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap'); body { font-family: 'Inter', sans-serif; }`}</style>

        {/* Header */}
        <header className="w-full sticky top-0 z-10 bg-gray-900 border-b border-gray-800 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              GaMarketplace
            </h1>
            <ConnectWalletButton
              isConnected={isConnected}
              address={address}
              onConnect={connectWallet}
              onDisconnect={disconnectWallet}
            />
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="bg-gray-800 p-4 rounded-2xl shadow-2xl h-fit sticky top-[90px]">
            <Navigation />
          </aside>

          {/* Main Content */}
          <main className="w-full p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
            {renderPage()}
          </main>
        </div>
      </body>
  );
};

export default App;