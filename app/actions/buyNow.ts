"use server";
import { revalidateTag } from "next/cache";
import signTransaction from "./signTransaction";

const buyNow = async ({
  privateKey,
  address,
  message,
}: {
  privateKey: string;
  address: string;
  message: string;
}) => {
  const request = await fetch(`${process.env.BASE_URL}billing/transactions`, {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      from: address,
      to: process.env.BLLS_ADDRESS,
      value: 1,
      symbol: "bls",
      signature: await signTransaction(
        privateKey,
        address,
        process.env.BLLS_ADDRESS,
        1,
        "bls"
      ),
      message,
    }),
    method: "POST",
  });
  const response = await request.json();
  revalidateTag("ballance");
  revalidateTag("inventory");
  return response;
};

export default buyNow;
