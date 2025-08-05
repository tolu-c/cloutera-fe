import { ChevronIcon } from "@/assets/icons";
import { cn } from "@/utils/cn";

interface PaginationProps {
  current: number;
  pages: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
}

export const Pagination = ({
  current,
  pages,
  limit,
  hasNext,
  hasPrev,
  onPageChange,
  onLimitChange,
}: PaginationProps) => {
  const limitOptions = [10, 25, 50, 100];

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, current - delta);
      i <= Math.min(pages - 1, current + delta);
      i++
    ) {
      range.push(i);
    }

    if (current - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (current + delta < pages - 1) {
      rangeWithDots.push("...", pages);
    } else {
      rangeWithDots.push(pages);
    }

    return rangeWithDots;
  };

  const visiblePages = pages > 1 ? getVisiblePages() : [1];

  return (
    <div className="flex h-10 w-full justify-between gap-4">
      <div className="flex items-center gap-4 text-sm">
        <span className="text-foundation-red-normal/70 text-sm font-light">
          Items per page:
        </span>
        <select
          value={limit}
          onChange={(e) => onLimitChange(Number(e.target.value))}
          className="bg-foundation-red-white text-foundation-red-normal rounded-xs border-none px-3 py-2 text-sm focus:outline-none"
        >
          {limitOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-1 justify-center gap-0.5">
        {visiblePages.map((page, index) => (
          <div key={index}>
            {page === "..." ? (
              <span className="text-foundation-red-normal flex size-10 items-center justify-center rounded-lg text-sm font-medium">
                ...
              </span>
            ) : (
              <button
                onClick={() => onPageChange(page as number)}
                className={cn(
                  "text-foundation-red-normal hover:bg-foundation-red-white flex size-10 cursor-pointer items-center justify-center rounded-lg text-sm/5 font-medium",
                  { "bg-foundation-red-white": page === current },
                )}
              >
                {page}
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button
          disabled={!hasPrev}
          onClick={() => onPageChange(current - 1)}
          className="text-foundation-red-normal flex h-10 cursor-pointer items-center gap-2 rounded-lg py-2.5 disabled:opacity-40 disabled:shadow-xs"
        >
          <ChevronIcon className="size-4 rotate-180 text-current" />
          Previous
        </button>
        <button
          disabled={!hasNext}
          onClick={() => onPageChange(current + 1)}
          className="text-foundation-red-normal flex h-10 cursor-pointer items-center gap-2 rounded-lg py-2.5 disabled:opacity-40 disabled:shadow-xs"
        >
          Next
          <ChevronIcon className="text-foundation-red-normal size-4" />
        </button>
      </div>
    </div>
  );
};
