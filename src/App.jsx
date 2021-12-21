import { userEffect, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";

const App = () => {
  // Use the connectWallet hook thirdWeb gives us.
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("address: ", address);

  // If user hasn't connected the wallet
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to Picc DAO</h1>
        <button onClick={() => connectWallet("injected")} className="btn=hero">
          Connect your wallet
        </button>
      </div>
    );
  }

  // If use has connected their wallet to our site
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>
  );
};

export default App;
