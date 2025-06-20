"use client";

import { useState } from "react";
import { faqs } from "./faqsData";
import { PlusIcon, MinusIcon } from "@/assets/icons";

export const FaqsList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex w-full flex-col gap-8 lg:mx-auto lg:max-w-3xl">
      {faqs.map((faq, idx) => (
        <div key={faq.id} className="border-b border-gray-200 pb-4">
          <div className="flex flex-col gap-6">
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <h2 className="text-sm font-semibold text-gray-900 lg:text-lg">
                {faq.question}
              </h2>
              <span className="ml-2">
                {openIndex === idx ? (
                  <MinusIcon className="text-foundation-red-normal size-6" />
                ) : (
                  <PlusIcon className="text-foundation-red-normal size-6" />
                )}
              </span>
            </button>
            {openIndex === idx && (
              <p className="text-sm text-gray-600 lg:text-base">{faq.answer}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
