import { useConnect, useAccount, useDisconnect } from "wagmi";
import { walletConnect } from "wagmi/connectors";

import { projectId } from "../../../../constants";
import Button from "../../../../components/Buttons/BasicButton";
import { shortenWalletAddress } from "../../../../utils/walletAddress";

//styles
import * as S from "../../../styles";

const HeaderButtonContainer = () => {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  const { address, isConnected } = useAccount();

  const handleConnectWallet = () => {
    if (isConnected) {
      disconnect();
      return;
    }
    connect({ connector: walletConnect({ projectId }) });
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
