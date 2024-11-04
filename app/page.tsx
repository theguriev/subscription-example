import { cookies } from "next/headers";
import GenerateWallet from "./components/GenerateWallet";
import Cards from "./components/Cards";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
  const cookiesStore = cookies();
  const address = cookiesStore.get("address")?.value;
  const privateKey = cookiesStore.get("privateKey")?.value;
  const hasNoWallet = !address || !privateKey;

  return (
    <div className="absolute inset-0 flex flex-col items-center p-6 sm:justify-center">
      <TooltipProvider>
        {hasNoWallet ? (
          <GenerateWallet />
        ) : (
          <>
            {/* @ts-expect-error Async Server Component */}
            <Cards address={address} privateKey={privateKey} />
          </>
        )}
      </TooltipProvider>
    </div>
  );
}
