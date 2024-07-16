import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { formatEther } from "viem";
import { readContract, writeContract, waitForTransactionReceipt } from "wagmi/actions";

import * as abis from "../../contracts";
import { config } from "../../contracts/config";
import { ADDRESS_CONTRACT, TOKEN_ID } from "../../constants";
import { shortenWalletAddress } from "../../utils/walletAddress";

export const useCreatorTokenMintPage = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenPrice, setTokenPrice] = useState<bigint>(BigInt(0));
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const { address, isConnected } = useAccount();
  const walletAddress = isConnected ? shortenWalletAddress(address) : "";

  function floatToBigInt(floatNum: number, precision: number) {
    const scaleFactor = 10 ** precision;
    const scaledNum = floatNum * scaleFactor;
    return BigInt(scaledNum);
  }

  const mintMasterCreatorToken = async () => {
    try {
      if (tokenPrice) {
        setIsLoading(true);

        const value = floatToBigInt(totalCost, 4) * tokenPrice;
        const hash = await writeContract(config, {
          abi: abis.SpinLouderAbi,
          address: ADDRESS_CONTRACT,
          functionName: "buy",
          args: [1, count],
          value: value
        });
        const transactionReceipt = await waitForTransactionReceipt(config, { hash });
        const transactionWasSuccessful = transactionReceipt.status === "success";

        if (transactionWasSuccessful) {
          setShowSuccessNotification(true);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          console.error("Transaction failed", transactionReceipt);
        }
      }
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  useEffect(() => {
    if (showSuccessNotification) {
      const timer = setTimeout(() => {
        setShowSuccessNotification(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessNotification]);

  useEffect(() => {
    const fetchTokenPrice = async () => {
      const tokenPrice: bigint = (await readContract(config, {
        abi: abis.SpinLouderAbi,
        address: ADDRESS_CONTRACT,
        functionName: "getPrice",
        args: [TOKEN_ID]
      })) as bigint;
      setTokenPrice(tokenPrice);
    };
    setTotalCost(Number(formatEther(tokenPrice)) * count);
    setPrice(Number(formatEther(tokenPrice)));
    fetchTokenPrice();
  }, [count, tokenPrice]);

  return {
    setCount,

    price,
    totalCost,
    isLoading,
    walletAddress,
    mintMasterCreatorToken,
    showSuccessNotification
  };
};
