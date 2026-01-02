import { Metadata } from "next";
import CafeClient from "./CafeClient";

export const metadata: Metadata = {
  title: "Cafe Minimal | 静かな時間を、一杯のコーヒーと",
  description:
    "厳選された豆と、丁寧なハンドドリップ。都会の喧騒を忘れる、特別な空間をご提供します。",
};

export default function CafePage() {
  return <CafeClient />;
}
