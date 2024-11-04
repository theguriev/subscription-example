"use client";

import { Button } from "@/components/ui/button";
import generateWallet from "../actions/generateWallet";

const GenerateWallet = () => {
  const handleClick = async () => {
    await generateWallet();
  };
  return <Button onClick={handleClick}>Generate wallet</Button>;
};

export default GenerateWallet;
