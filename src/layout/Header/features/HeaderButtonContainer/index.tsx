import { useAccount, useDisconnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

import Button from "../../../../components/Buttons/BasicButton";
import { shortenWalletAddress } from "../../../../utils/walletAddress";

//styles
import * as S from "../../../styles";

const HeaderButtonContainer = () => {
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();

  const { address, isConnected } = useAccount();

  const handleConnectWallet = () => {
    if (isConnected) {
      disconnect();
      return;
    }
    open();
  };
  return (
    <S.HeaderButtonContainer>
      <Button text={isConnected ? "CONNECTED" : "CONNECT"} onClick={handleConnectWallet} />
      {address && (
        <p>
          Wallet Connected: <span>{shortenWalletAddress(address)}</span>
        </p>
      )}
    </S.HeaderButtonContainer>
  );
};

export default HeaderButtonContainer;
