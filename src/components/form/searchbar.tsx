"use client";

import { TextInput } from "@/components/form";
import { SearchIcon, SettingsIcon } from "@/assets/icons";
import {
  useState,
  useEffect,
  Fragment,
  cloneElement,
  ReactElement,
} from "react";
import { useDeferredValue, useDisclosure } from "@/hooks";
import { cn } from "@/utils/cn";
import { FilterModal } from "@/components/ui";

interface SearchBarProps {
  onSendSearchValue?: (value: string) => void;
  className?: string;
  filterComponent?: ReactElement<{ closeAction: () => void }>;
}

export const Searchbar = ({
  onSendSearchValue,
  className,
  filterComponent,
}: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [openFilter, { open, close }] = useDisclosure(false);
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

  const openFilterMenu = openFilter && !!filterComponent;
  return (
    <Fragment>
      <FilterModal open={openFilterMenu} close={close}>
        {filterComponent &&
          cloneElement(filterComponent, { closeAction: close })}
      </FilterModal>

      <TextInput
        type="search"
        placeholder="Search"
        width={cn("w-full lg:w-120", className)}
        className="bg-black/4"
        icon={<SearchIcon className="text-input-content-medium size-5" />}
        rightSection={
          <button onClick={open} className="cursor-pointer">
            <SettingsIcon className="text-foundation-red-normal size-4" />
          </button>
        }
        onChange={(e) => handleOnChange(e.currentTarget.value)}
      />
    </Fragment>
  );
};
