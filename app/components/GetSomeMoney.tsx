"use client";

import { Button } from "@/components/ui/button";
import getSomeMoney from "../actions/getSomeMoney";
import { FC } from "react";

const GetSomeMoney: FC<{ address: string; disabled: boolean }> = ({
  address,
  disabled,
}) => {
  const handleClick = () => {
    getSomeMoney({ to: address, message: `Get some blls for ${address}` });
  };
  return (
    <Button className="w-full" onClick={handleClick} disabled={disabled}>
      Get some blls [+1 blls]
    </Button>
  );
};

export default GetSomeMoney;
