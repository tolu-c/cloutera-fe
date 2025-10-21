"use client";

import { useState } from "react";

import { PlusIcon, MinusIcon } from "@/assets/icons";
import { useGetFaqList } from "@/queries/faqs";

export const FaqsList = () => {
  const { data } = useGetFaqList();

  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const handleToggle = (idx: string) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex w-full flex-col gap-8 lg:mx-auto lg:max-w-3xl">
      {data?.data.map(({ question, answer, _id }) => (
        <div key={_id} className="border-b border-gray-200 pb-4">
          <div className="flex flex-col gap-6">
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => handleToggle(_id)}
              aria-expanded={openIndex === _id}
            >
              <h2 className="text-sm font-semibold text-gray-900 lg:text-lg">
                {question}
              </h2>
              <span className="ml-2">
                {openIndex === _id ? (
                  <MinusIcon className="text-foundation-red-normal size-6" />
                ) : (
                  <PlusIcon className="text-foundation-red-normal size-6" />
                )}
              </span>
            </button>
            {openIndex === _id && (
              <p className="text-sm text-gray-600 lg:text-base">{answer}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
