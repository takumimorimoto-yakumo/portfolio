import { Metadata } from "next";
import PhotographerClient from "./PhotographerClient";

export const metadata: Metadata = {
  title: "Yuki Tanaka | Photographer",
  description:
    "光と影の間に、物語を紡ぐ。東京を拠点に活動するフォトグラファー田中雪のポートフォリオ。",
};

export default function PhotographerPage() {
  return <PhotographerClient />;
}
