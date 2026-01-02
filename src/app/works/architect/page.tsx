import { Metadata } from "next";
import ArchitectClient from "./ArchitectClient";

export const metadata: Metadata = {
  title: "NOIR Architecture | 空間を、思想する。",
  description:
    "建築とは、空間に思想を刻むこと。NOIR Architectureは、機能美と詩情を融合させた建築を創造します。",
};

export default function ArchitectPage() {
  return <ArchitectClient />;
}
