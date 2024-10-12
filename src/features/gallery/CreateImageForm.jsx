import { useForm } from "react-hook-form";

import { IconPhotoUp, IconPolaroid } from "@tabler/icons-react";

import ButtonOutline from "../../ui/ButtonOutline";
import ButtonPrimary from "../../ui/ButtonPrimary";
import FormRow from "../../ui/FormRow";
import Error from "../../ui/Error";
import useCreateGallery from "./useCreateGallery";

function CreateImageForm({ onCloseModal }) {
  const { createGallery, isCreating } = useCreateGallery();

  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  function onSubmit(data) {
    data.photo = data.photo[0];

    const formData = new FormData();
    formData.append("galleryType", data.galleryType);
    formData.append("photo", data.photo);

    createGallery(formData, { onSuccess: () => onCloseModal?.() });
  }

  const isWorking = isCreating;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-[36rem]">
      <FormRow icon={<IconPolaroid stroke={2} />} label="Gallery Type" htmlFor="galleryType">
        <div className="w-80 flex gap-4 items-center">
          <select
            id="galleryType"
            name="galleryType"
            disabled={isWorking}
            className="border w-full font-semibold text-zinc-600 text-sm bg-white border-zinc-200 rounded px-4 py-2 cursor-pointer"
            {...register("galleryType", { required: "This field is required!" })}>
            <option value="sliderGallery">Slider Gallery</option>
            <option value="gallery">Simple Gallery</option>
          </select>
        </div>
      </FormRow>

      <FormRow icon={<IconPhotoUp stroke={2} />} label="Upload Image" htmlFor="photo">
        <input
          type="file"
          id="photo"
          name="photo"
          className=" file:cursor-pointer bg-zinc-50 rounded border border-zinc-200 w-80 file:bg-violet-200 file:text-violet-600 file:px-4 file:py-3 file:leading-none file:border-none file:rounded-md file:mr-4 font-medium px-0 py-0 "
          disabled={isWorking}
          accept="image/*"
          {...register("photo", { required: "This field is required!" })}
        />
        {errors?.photo?.message && <Error>{errors.photo.message}</Error>}
      </FormRow>

      <div className="flex justify-end gap-4 items-center mt-8">
        <ButtonOutline disabled={isWorking} onClick={onCloseModal}>
          Cancel
        </ButtonOutline>
        <ButtonPrimary disabled={isCreating}>Add Placement</ButtonPrimary>
      </div>
    </form>
  );
}

export default CreateImageForm;
