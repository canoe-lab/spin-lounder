import { WagmiProvider } from "wagmi";

import { ThemeProvider } from "styled-components";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRoutes from "./Routes";
import theme from "./theme/theme";
import { GlobalStyle } from "./theme";
import { projectId } from "./constants";
import { config } from "./contracts/config";
import MainLayout from "./layout/MainLayout/MainLayout";

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  enableOnramp: true
});

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

function App() {
  return (
    <Web3ModalProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </ThemeProvider>
    </Web3ModalProvider>
  );
}

export default App;
