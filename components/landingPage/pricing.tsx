"use client";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { BackgroundGradient } from "../ui/background-gradient";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  backgroundGradient: string;
  tag?: string;
  features: string[];
}

interface NeumorphicTagProps {
  text: string;
}

interface PricingCardProps {
  plan: PricingPlan;
}

const pricingPlans = [
  {
    name: "Starter",
    price: "$19/mo",
    description: "Basic boilerplate with essential features.",
    backgroundGradient:
      "radial-gradient(circle farthest-side at 0% 100%, #00ccb1, transparent), radial-gradient(circle farthest-side at 100% 0%, #7b61ff, transparent), radial-gradient(circle farthest-side at 100% 100%, #ffc414, transparent), radial-gradient(circle farthest-side at 0% 0%, #1ca0fb, #141316)",
    features: [
      "Next.js",
      "Next Auth",
      "Tailwind CSS",
      "Basic SEO",
      "Responsive Design",
      "Email Authentication",
      "Role-Based Access",
      "Basic Analytics",
      "Community Support",
      "Continuous Updates",
    ],
  },
  {
    name: "E-Commerce",
    price: "$49/mo",
    description: "Complete e-commerce solution.",
    backgroundGradient:
      "radial-gradient(circle farthest-side at 0% 100%, #34d399, transparent), radial-gradient(circle farthest-side at 100% 0%, #3b82f6, transparent), radial-gradient(circle farthest-side at 100% 100%, #f97316, transparent), radial-gradient(circle farthest-side at 0% 0%, #f59e0b, #1d4ed8)",
    tag: "Most Popular",
    features: [
      "Next.js",
      "Next Auth",
      "Tailwind CSS",
      "Advanced SEO",
      "Responsive Design",
      "Email & Social Authentication",
      "Role-Based Access",
      "Advanced Analytics",
      "Priority Support",
      "Product Management",
      "Payment Gateway Integration",
      "Cart & Checkout",
    ],
  },
  {
    name: "Blog",
    price: "$29/mo",
    description: "Sophisticated blog platform with extended features.",
    backgroundGradient:
      "radial-gradient(circle farthest-side at 0% 100%, #fbcfe8, transparent), radial-gradient(circle farthest-side at 100% 0%, #f5d0fe, transparent), radial-gradient(circle farthest-side at 100% 100%, #e9d5ff, transparent), radial-gradient(circle farthest-side at 0% 0%, #c4b5fd, #a78bfa)",
    features: [
      "Next.js",
      "Next Auth",
      "Tailwind CSS",
      "Advanced SEO",
      "Responsive Design",
      "Email & Social Authentication",
      "Role-Based Access",
      "Advanced Analytics",
      "Priority Support",
      "Content Management",
      "Comments & Reactions",
      "RSS Feeds",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    description: "High-scale solution with custom features.",
    backgroundGradient:
      "radial-gradient(circle farthest-side at 0% 100%, #d9f99d, transparent), radial-gradient(circle farthest-side at 100% 0%, #bbf7d0, transparent), radial-gradient(circle farthest-side at 100% 100%, #86efac, transparent), radial-gradient(circle farthest-side at 0% 0%, #4ade80, #22c55e)",
    features: [
      "Next.js",
      "Next Auth",
      "Tailwind CSS",
      "Advanced SEO",
      "Responsive Design",
      "Email & Social Authentication",
      "Role-Based Access",
      "Advanced Analytics",
      "Dedicated Support",
      "Custom Integrations",
      "Scalability Solutions",
      "Enterprise Security",
    ],
  },
];

const NeumorphicTag = ({ text }: NeumorphicTagProps) => {
  return (
    <div className="neumorphic-tag">
      {text}
      <style jsx>{`
        .neumorphic-tag {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: #e0e5ec;
          border-radius: 10px;
          box-shadow: 3px 3px 6px #a8b3c1, -3px -3px 6px #ffffff;
          font-size: 0.875rem;
          font-weight: bold;
          color: #333;
          position: absolute;
          top: 35px;
          left: 73%;
          transform: translateX(-50%);
          z-index: 20;
        }
      `}</style>
    </div>
  );
};

function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className="flex flex-col flex-grow h-full relative">
      {plan.tag && <NeumorphicTag text={plan.tag} />}
      <BackgroundGradient
        className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full"
        backgroundGradient={plan.backgroundGradient}
      >
        <div className="rounded-[18px] p-4 bg-white dark:bg-zinc-900 flex flex-col justify-between h-full">
          <div>
            <p className="text-base sm:text-xl text-black dark:text-neutral-200">
              {plan.name}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              {plan.description}
            </p>
            <p className="text-2xl text-black dark:text-white font-bold mb-4">
              {plan.price}
            </p>
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-black dark:text-white"
                >
                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="rounded-lg w-[85%] px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 text-sm font-bold dark:bg-orange-500 dark:hover:bg-orange-600">
              Get Started
            </button>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 py-8">
      <h1 className="text-4xl font-bold text-center">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="flex flex-col h-full w-full">
            <PricingCard plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
}
