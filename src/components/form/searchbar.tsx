"use client";

import { TextInput } from "@/components/form";
import { SearchIcon, SettingsIcon } from "@/assets/icons";
import { useState, useEffect } from "react";
import { useDeferredValue } from "@/hooks";

interface SearchBarProps {
  onSendSearchValue?: (value: string) => void;
}

export const Searchbar = ({ onSendSearchValue }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");
  const deferredSearchValue = useDeferredValue(searchValue, 500);

  // Use useEffect to call onSendSearchValue when deferredSearchValue changes
  useEffect(() => {
    if (onSendSearchValue) {
      onSendSearchValue(deferredSearchValue);
    }
  }, [deferredSearchValue, onSendSearchValue]);

  const handleOnChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <TextInput
      type="search"
      placeholder="Search"
      width="w-120"
      className="bg-black/4"
      icon={<SearchIcon className="text-input-content-medium size-5" />}
      rightSection={
        <button>
          <SettingsIcon className="text-foundation-red-normal size-4" />
        </button>
      }
      onChange={(e) => handleOnChange(e.currentTarget.value)}
    />
  );
};
