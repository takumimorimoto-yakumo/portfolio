import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import CTAMid from "@/components/sections/CTAMid";
import Functions from "@/components/sections/Functions";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "SalesFlow | AI搭載CRMで営業効率40%向上",
  description:
    "顧客管理・商談管理・売上予測をAIでサポートする次世代CRM。大手CRMの1/3の価格で14日間無料トライアル実施中。",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SalesFlow",
  url: "https://salesflow.example.com",
  logo: "https://salesflow.example.com/logo.png",
  description: "AI搭載の次世代CRMを提供する企業",
  sameAs: [],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SalesFlow",
  description:
    "顧客管理・商談管理・売上予測をAIでサポートする次世代CRM。直感的な操作で誰でもすぐに使い始められます。",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "2980",
    highPrice: "14980",
    priceCurrency: "JPY",
    offerCount: "3",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1000",
  },
};

export default function SalesFlowPage() {
  return (
    <div className="bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Features />
        <CTAMid />
        <Functions />
        <Results />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
