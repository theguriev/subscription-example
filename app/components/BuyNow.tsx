"use client";
import { Button } from "@/components/ui/button";
import buyNow from "../actions/buyNow";
import { FC } from "react";

const BuyNow: FC<{
  address: string;
  privateKey: string;
  disabled: boolean;
}> = ({ address, privateKey, disabled }) => {
  const handleClick = () => {
    buyNow({ privateKey, address, message: `Buy now - 1 blls for ${address}` });
  };
  return (
    <Button className="w-full" onClick={handleClick} disabled={disabled}>
      Buy now - 1 blls
    </Button>
  );
};

export default BuyNow;
