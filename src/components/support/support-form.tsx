"use client";

import { useState } from "react";
import { z } from "zod/v4";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui";
import { TextareaInput, TextInput } from "@/components/form";
import { DeleteIcon, UploadIcon } from "@/assets/icons";

const supportFormSchema = z.object({
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  image: z.any().optional(),
});

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

  const [imageName, setImageName] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageName(file.name);
      setValue("image", file, { shouldValidate: true });
    }
  };

  const handleImageRemove = () => {
    setImageName(null);
    setValue("image", undefined, { shouldValidate: true });
  };

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

      <div className="flex w-full flex-col gap-2">
        <label className="text-white-dark text-sm">Upload Image</label>
        <label
          className="border-grey-700 flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dotted py-8 transition hover:border-blue-500"
          htmlFor="support-image-upload"
        >
          <span className="text-foundation-red-normal flex flex-col items-center justify-center gap-1 text-center text-xs leading-2.5">
            <UploadIcon className="text-foundation-red-normal size-6" />
            Click to upload from your device
          </span>
          <div className="text-grey-800 flex flex-col gap-1 text-center text-[8px] leading-2.5">
            Maximum resolution: 4000×3000px.
            <span>Acceptable formats: JPG, PNG</span>
          </div>
          <input
            id="support-image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        {imageName && (
          <div className="flex w-full flex-col gap-1">
            <h4 className="text-sm leading-4 text-black opacity-50">
              Uploaded Documents
            </h4>
            <div className="bg-foundation-red-white flex items-center justify-between rounded px-3 py-2">
              <span className="text-sm leading-4 text-black">{imageName}</span>
              <button
                type="button"
                aria-label="Delete uploaded image"
                className="ml-2 cursor-pointer text-gray-400 transition hover:text-red-500"
                onClick={handleImageRemove}
              >
                <DeleteIcon className="text-foundation-red-normal size-6" />
              </button>
            </div>
          </div>
        )}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
