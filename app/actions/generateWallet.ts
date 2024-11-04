"use server";
import { Wallet } from "ethers";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const generateWallet = async () => {
  const wallet = Wallet.createRandom();
  cookies().set("privateKey", wallet.privateKey, { path: "/" });
  cookies().set("address", wallet.address, { path: "/" });
  redirect("/");
};

export default generateWallet;
