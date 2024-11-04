import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { FC, PropsWithChildren } from "react";

const features = [
  "Unlimited users",
  "Unlimited projects",
  "Unlimited storage",
  "24/7 dedicated support",
  "API access",
  "Advanced analytics",
  "Custom integrations",
];

const EnterPriseCard: FC<PropsWithChildren<{ purchased: boolean }>> = ({
  purchased,
  children,
}) => {
  return (
    <Card className="w-[380px]">
      {purchased ? (
        <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-3xl font-bold">
              Congratulations!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <span className="text-2xl">🚀</span>
            <p className="text-xl font-semibold">
              You've successfully purchased our Enterprise Solution!
            </p>
            <ul className="space-y-2">
              {features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : (
        <>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>1 blls</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <ul className="space-y-2">
              {features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>{children}</CardFooter>
        </>
      )}
    </Card>
  );
};

export default EnterPriseCard;
