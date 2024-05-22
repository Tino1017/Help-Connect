import React from "react";
import { Header, PricingCard } from "./Pricing.imports";

export const Pricing: React.FC = () => {
  return (
    <>
      <section className="relative">
        <section className="bg-opacity-80 bg-blur-lg bg-slate-300 backdrop-blur-lg pb-5 pricing-container">
          <Header
            topHeader="PRICING"
            bigHeader="At what cost is to learn in help connect"
            paragraph="help connect gives you affordable and best online courses to increase your skills"
          />
          <section className="flex items-center justify-center flex-wrap gap-7">
            <PricingCard
              subcription="Free"
              price="R XX.XX"
              subscription_color="bg-violet-950"
            >
              <p className="text-xs">pricing information</p>
            </PricingCard>
            <PricingCard
              subcription="Free"
              price="R XX.XX"
              subscription_color="bg-cyan-950"
            >
              <p className="text-xs">pricing information</p>
            </PricingCard>
            <PricingCard
              subcription="Free"
              price="R XX.XX"
              subscription_color="bg-yellow-950"
            >
              <p className="text-xs">pricing information</p>
            </PricingCard>
          </section>
        </section>
        <div className="h-[20rem] w-[20rem] rounded-full bg-purple-900 absolute  left-28 top-28 -z-50"></div>
      </section>
    </>
  );
};
