"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { CheckCircleIcon } from "@heroicons/react/solid"; // Ensure you have the Heroicons package installed

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonLabel: string;
  onClick: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonLabel,
  onClick,
}) => (
  <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
    <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
      {title}
    </h2>
    <p className="text-xl text-black dark:text-white mb-2">{price}</p>
    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
      {description}
    </p>
    <ul className="mb-6 space-y-2">
      {features.map((feature, index) => (
        <li
          key={index}
          className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center"
        >
          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <button
      className="rounded-full pl-4 pr-1 py-2 text-white flex items-center space-x-2 bg-black dark:bg-zinc-800 mt-4 text-sm font-bold"
      onClick={onClick}
    >
      <span>{buttonLabel}</span>
    </button>
  </BackgroundGradient>
);

export default PricingCard;
