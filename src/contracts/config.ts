import { sepolia } from "wagmi/chains";
import { createConfig, http } from "wagmi";
import { walletConnect } from "@wagmi/connectors";

import { projectId } from "../constants";

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    walletConnect({
      projectId
    })
  ],
  transports: {
    // [mainnet.id]: http(),
    [sepolia.id]: http()
  }
});
