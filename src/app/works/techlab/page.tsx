import { Metadata } from "next";
import TechLabClient from "./TechLabClient";

export const metadata: Metadata = {
  title: "TechLab | AI Research & Development",
  description:
    "最先端のAI・機械学習技術で、ビジネスの未来を創造する。エンタープライズ向けAIソリューションを提供。",
};

export default function TechLabPage() {
  return <TechLabClient />;
}
