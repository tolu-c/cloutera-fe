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
    <div className="flex flex-col gap-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border-b border-gray-200 pb-4">
          <button
            className="flex w-full items-center justify-between text-left"
            onClick={() => handleToggle(idx)}
            aria-expanded={openIndex === idx}
          >
            <h2 className="text-lg font-semibold">{faq.question}</h2>
            <span className="ml-2">
              {openIndex === idx ? (
                <MinusIcon className="text-foundation-red-normal" />
              ) : (
                <PlusIcon className="text-foundation-red-normal" />
              )}
            </span>
          </button>
          {openIndex === idx && (
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};
