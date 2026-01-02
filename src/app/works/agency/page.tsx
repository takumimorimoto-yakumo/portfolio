import { Metadata } from "next";
import AgencyClient from "./AgencyClient";

export const metadata: Metadata = {
  title: "Creative Agency | We Create Bold Ideas",
  description:
    "ブランド戦略からデジタルプロダクトまで。大胆なアイデアで、ビジネスを次のステージへ。",
};

export default function AgencyPage() {
  return <AgencyClient />;
}
