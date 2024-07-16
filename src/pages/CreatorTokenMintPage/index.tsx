import { FC } from "react";

import Select from "../../components/Select";
import Placeholder from "./features/Placeholder";
import Separator from "../../components/Separator";
import Button from "../../components/Buttons/BasicButton";

//styles
import * as S from "./styles";
import { useCreatorTokenMintPage } from "./hooks";

const CreatorTokenMintPage: FC = () => {
  const {
    setCount,

    price,
    totalCost,
    isLoading,
    walletAddress,
    mintMasterCreatorToken,
    showSuccessNotification
  } = useCreatorTokenMintPage();
  return (
    <S.CreatorTokenMinPageContainer>
      <h1>Master Creator Token</h1>
      <S.Wrapper>
        <S.TopContainer>
          <S.Left>
            <Placeholder />
          </S.Left>
          <Separator width="72px" />
          <S.Right>
            <S.MintContainer>
              <S.TextContainer>
                <h1>
                  Remaining: <span>10/25</span> | Price: <span>{price} ETH</span>
                </h1>
                <p>
                  Mint this Master Creator Token to unlock exclusive access to our ecosystem,
                  enabling you to create, manage, and sell unique vinyl-backed NFTs with ease.
                </p>
                <Separator height="25px" />
                <p>
                  Please ensure you thoroughly understand the <strong>benefits</strong> and{" "}
                  <strong>responsibilities</strong> associated with the Master Creator Token before
                  proceeding with the minting process.
                </p>
              </S.TextContainer>
              <Separator height="52px" />
              <S.MintSection>
                <Button
                  type="filed"
                  width="132px"
                  height="42px"
                  text={isLoading ? "SUBMITTING" : "MINT NOW"}
                  disabled={isLoading}
                  onClick={mintMasterCreatorToken}
                />
                {showSuccessNotification && (
                  <S.SuccessNotification>
                    <p>Transaction Successful</p>
                  </S.SuccessNotification>
                )}
                <Separator height="32px" />
                <p>
                  Wallet Connected: <span>{walletAddress}</span>
                </p>
                <Separator height="25px" />
                <S.PriceSection>
                  <p>PRICE .5 ETH + gAS</p>
                  <p>MINT IS LIVE UNTIL SOLD OUT</p>
                  <p>
                    PRESALE: <span>SOLDOUT</span>
                  </p>
                </S.PriceSection>
                <Separator height="29px" />
                <S.MintActionContainer>
                  <S.NumberOfMint>
                    <span>Number of NFTs to mint</span>
                  </S.NumberOfMint>
                  <Select setCount={setCount} />
                </S.MintActionContainer>
                <Separator height="34px" />
              </S.MintSection>
              <S.TotalCost>
                <span>Total Cost:</span> {totalCost.toFixed(4)} ETH
              </S.TotalCost>
            </S.MintContainer>
          </S.Right>
        </S.TopContainer>
        <Separator height="135px" />
        <S.BottomContainer>
          <S.Left>
            <S.TextContainer>
              <h1>Exclusive Access</h1>
              <p>
                Exclusive Access This Master Creator Token is your gateway to the exclusive world of
                SoundMint, where music and technology converge to empower artists. By holding this
                token, you gain privileged access to our ecosystem, allowing you to create and
                launch your own unique NFT drops. Each token represents not just membership but a
                key to unlock a suite of tools designed to help you mint, manage, and sell
                vinyl-backed digital collectibles.
              </p>
            </S.TextContainer>
          </S.Left>
          <Separator width="72px" />
          <S.Right>
            <S.TextContainer>
              <h1>Comprehensive Tools</h1>
              <p>
                With the Master Creator Token, you can easily customize NFT drops, set up pre-sales,
                define rarity traits, and distribute revenue. This token offers a turnkey solution
                for funding, producing, and distributing your vinyl records while engaging fans
                innovatively. Join forward-thinking musicians and take control of your music's
                future with the Master Creator Token.
              </p>
            </S.TextContainer>
          </S.Right>
        </S.BottomContainer>
      </S.Wrapper>
    </S.CreatorTokenMinPageContainer>
  );
};

export default CreatorTokenMintPage;
