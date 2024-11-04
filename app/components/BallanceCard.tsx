import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FC, PropsWithChildren } from "react";
import shortenAddress from "../utils/shortenAddress";

const BallanceCard: FC<
  PropsWithChildren<{ ballance: number; address: string }>
> = ({ children, ballance, address }) => {
  return (
    <Card className="w-[380px] bg-gray-30 shadow-none border-gray-100">
      <CardHeader>
        <CardTitle>Ballance</CardTitle>
        <CardDescription className="text-green-700">
          {ballance} blls
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="flex flex-col">
          <span className="font-semibold">Address</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="text-gray-600 underline">
                {shortenAddress(address)}
              </span>
            </TooltipTrigger>
            <TooltipContent>{address}</TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
      <CardFooter>{children}</CardFooter>
    </Card>
  );
};
export default BallanceCard;
