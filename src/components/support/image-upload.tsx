"use client";

import { IMAGE_MAX_SIZE, ALLOWED_IMAGE_TYPES } from "@/types/constants";
import { ChangeEvent, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { DeleteIcon, UploadIcon } from "@/assets/icons";
import { z } from "zod/v4";
import { supportFormSchema } from "@/types/schema";

type SupportFormData = z.infer<typeof supportFormSchema>;

type ImageUploadProps = {
  setValue: UseFormSetValue<SupportFormData>;
};

export const ImageUpload = ({ setValue }: ImageUploadProps) => {
  const [imageName, setImageName] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        alert("Please upload only JPG or PNG files");
        return;
      }
      if (file.size > IMAGE_MAX_SIZE) {
        alert("File size must be less than 5MB");
        return;
      }
      setImageName(file.name);
      setValue("image", file, { shouldValidate: true });
    }
  };

  const handleImageRemove = () => {
    setImageName(null);
    setValue("image", null, { shouldValidate: true });
    const fileInput = document.getElementById(
      "support-image-upload",
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
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
  );
};
