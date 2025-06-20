"use client";

import { z } from "zod/v4";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui";
import { TextareaInput, TextInput } from "@/components/form";
import { supportFormSchema } from "@/types/schema";
import { ImageUpload } from "./image-upload";

type SupportFormData = z.infer<typeof supportFormSchema>;

export const SupportForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SupportFormData>({
    resolver: zodResolver(supportFormSchema),
  });

  const onSubmit = (data: SupportFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-start gap-6"
    >
      <TextInput
        label="Subject"
        error={errors.subject?.message}
        placeholder="Enter subject"
        {...register("subject")}
      />

      <TextareaInput
        label="Message"
        error={errors.message?.message}
        placeholder="Describe your issue"
        {...register("message")}
      />

      <ImageUpload setValue={setValue} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
