"use client";

import { SelectInput } from "@/components/form";
import { Button } from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { FundHistoryCategory, TransactionStatus } from "@/types/enums";

interface FundsHistoryFilters {
  category: FundHistoryCategory | "";
  status: TransactionStatus | "";
}

interface FundsHistoryFilterFormProps {
  categoryOptions: { label: string; value: FundHistoryCategory }[];
  statusOptions: { label: string; value: TransactionStatus }[];
  clearFilterAction: () => void;
  applyFilterAction: (filters: FundsHistoryFilters) => void;
  closeAction: () => void;
}

export const FundsHistoryFilterForm = ({
  categoryOptions,
  statusOptions,
  clearFilterAction,
  applyFilterAction,
  closeAction,
}: FundsHistoryFilterFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FundsHistoryFilters>({
    defaultValues: {
      category: "",
      status: "",
    },
  });

  function handleClear() {
    reset();
    clearFilterAction();
    closeAction();
  }

  const onSubmit: SubmitHandler<FundsHistoryFilters> = (data) => {
    applyFilterAction(data);
    closeAction();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-3"
    >
      <SelectInput
        options={categoryOptions}
        label="Category"
        error={errors.category?.message}
        {...register("category")}
      />
      <SelectInput
        options={statusOptions}
        label="Status"
        error={errors.status?.message}
        {...register("status")}
      />
      <div className="grid w-full grid-cols-2 gap-4">
        <Button
          type="button"
          width="full"
          state="outline"
          onClick={handleClear}
        >
          Clear Filter
        </Button>
        <Button width="full" type="submit">
          Apply Filter
        </Button>
      </div>
    </form>
  );
};
