import { cn } from "@/utils/cn";
import { CheckCircleIcon } from "@/assets/icons";

interface UsernameAvailabilityProps {
  username: string;
}

export const UsernameAvailability = ({
  username,
}: UsernameAvailabilityProps) => {
  // TODO: ~> check if username if available
  const isUsernameAvailable = !!username;

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-xl py-1.5 pr-3 pl-2 text-xs font-medium",
        {
          "bg-success-50 text-success-base": isUsernameAvailable,
          "bg-error/7 text-error": !isUsernameAvailable,
        },
      )}
    >
      <CheckCircleIcon
        className={cn("size-4", {
          "text-success-base": isUsernameAvailable,
          "text-error": !isUsernameAvailable,
        })}
      />
      {isUsernameAvailable
        ? "This username is available"
        : "This username is not available"}
    </div>
  );
};
