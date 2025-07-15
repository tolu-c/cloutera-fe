import { Button } from "@/components/ui";

export const ErrorDisplay = ({
  message,
  retry,
}: {
  message: string;
  retry: VoidFunction;
}) => {
  return (
    <div>
      There was an error! <Button onClick={retry}>Try again</Button>
      <pre style={{ whiteSpace: "normal" }}>{message}</pre>
    </div>
  );
};
