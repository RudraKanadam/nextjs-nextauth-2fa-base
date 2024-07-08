"use client";
import React from "react";
import PricingCard from "../ui/pricingCard";

const Pricing = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Pricing Plans
      </h1>
      <div className="flex flex-wrap justify-center space-x-6">
        <PricingCard
          title="Free"
          price="Free"
          description="Ideal for developers"
          features={[
            "Basic templates",
            "Community support",
            "Access to forums",
            "Limited updates",
            "Basic analytics",
          ]}
          buttonLabel="Get Started"
          onClick={() => alert("Free plan selected")}
        />
        <PricingCard
          title="Pro"
          price="$75"
          description="For eCommerce site or blog template"
          features={[
            "Advanced templates",
            "Priority support",
            "E-commerce integrations",
            "SEO tools",
            "Advanced analytics",
          ]}
          buttonLabel="Buy Now"
          onClick={() =>
            alert("Pro plan for eCommerce site or blog template selected")
          }
        />
        <PricingCard
          title="Pro"
          price="$45"
          description="For portfolio website"
          features={[
            "Professional templates",
            "Priority support",
            "Custom domain",
            "Portfolio-specific tools",
            "Advanced analytics",
          ]}
          buttonLabel="Buy Now"
          onClick={() => alert("Pro plan for portfolio website selected")}
        />
        <PricingCard
          title="All-in-One Bundle"
          price="$199/month"
          description="Includes all templates and customer support"
          features={[
            "All templates included",
            "Premium customer support",
            "All integrations",
            "SEO tools",
            "Complete analytics",
          ]}
          buttonLabel="Subscribe"
          onClick={() => alert("All-in-One Bundle selected")}
        />
      </div>
    </div>
  );
};

export default Pricing;
