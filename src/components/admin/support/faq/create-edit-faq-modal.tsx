"use client";

import { Button, Divider, Modal } from "@/components/ui";
import { EditIcon, ExitIcon, PlusIcon } from "@/assets/icons";
import { FaqResponse } from "@/types/faq.types";
import { z } from "zod/v4";
import { faqSchema } from "@/types/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextareaInput, TextInput } from "@/components/form";
import { useEditFaq, useAddFaq } from "@/mutations/faq";

interface CreateNewFaqModalProps {
  open: boolean;
  closeAction: () => void;
  faq?: FaqResponse;
}

type FormData = z.infer<typeof faqSchema>;

export const CreateEditFaqModal = ({
  open,
  closeAction,
  faq,
}: CreateNewFaqModalProps) => {
  const editFaq = !!faq;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      ...faq,
    },
  });

  const { isPending, mutateAsync: submit } = useAddFaq();
  const { isPending: editPending, mutateAsync: edit } = useEditFaq(
    faq?._id || "",
  );

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (editFaq) {
      await edit(data).then(() => {
        closeAction();
      });
    } else {
      await submit(data).then(() => {
        closeAction();
      });
    }
    reset();
  };

  const faqPending = isPending || editPending;

  return (
    <Modal
      open={open}
      close={closeAction}
      className="px-0 lg:w-[550px] lg:p-0 lg:pt-10"
      hideCloseIcon
    >
      <div className="flex w-full items-start justify-between px-8 pb-6">
        <div className="flex flex-col gap-4">
          <div className="bg-foundation-red-light flex size-12 items-center justify-center rounded-full">
            {editFaq ? (
              <EditIcon className="text-foundation-red-normal size-8" />
            ) : (
              <PlusIcon className="text-foundation-red-normal size-8" />
            )}
          </div>

          <p className="text-light-black text-2xl font-medium">
            {editFaq ? "Update" : "Create New"} FAQ
          </p>
        </div>

        <button onClick={closeAction}>
          <ExitIcon className="size-8 cursor-pointer" />
        </button>
      </div>
      <Divider />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-0"
      >
        <div className="flex w-full flex-col gap-4 px-8 py-4">
          <TextInput
            label="Question"
            placeholder="Enter question"
            {...register("question")}
            error={errors.question?.message}
          />

          <TextareaInput
            label="Respone"
            placeholder="Enter Response"
            {...register("answer")}
            error={errors.answer?.message}
          />
        </div>

        <Divider />

        <div className="flex w-full px-8 py-6">
          <Button type="submit" disabled={faqPending}>
            {editFaq ? "Save Changes & Publish" : "Publish"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
