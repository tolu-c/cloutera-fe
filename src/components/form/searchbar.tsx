import { TextInput } from "@/components/form";
import { SearchIcon, SettingsIcon } from "@/assets/icons";

export const Searchbar = () => {
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
    />
  );
};
