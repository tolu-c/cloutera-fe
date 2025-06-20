import Image from "next/image";
import { Button } from "../ui";

export const FaqsFooter = () => (
  <div className="flex w-full flex-col items-center gap-8 rounded-2xl bg-gray-50 p-8 lg:mx-auto lg:max-w-6xl">
    <Image
      src="/images/Avatar-group.png"
      alt="Avatar Group"
      className=""
      width={120}
      height={56}
    />
    <div className="flex flex-col items-center gap-2">
      <p className="text-2xl font-medium text-gray-900">
        Still have questions?
      </p>
      <p className="text-center text-lg text-gray-600">
        Can’t find the answer you’re looking for? Please chat to our friendly
        team.
      </p>
    </div>
    <div className="flex justify-center">
      <Button className="px-4.5 py-2.5 shadow-[0_10px_40px_0_rgba(10,13,18,0.08)] shadow-xs">
        Get in touch
      </Button>
    </div>
  </div>
);
