import {
  IconBuildings,
  IconCode,
  IconCoinRupee,
  IconGenderBigender,
  IconPhotoUp,
  IconUser,
} from "@tabler/icons-react";
import { useForm } from "react-hook-form";

import ButtonOutline from "../../ui/ButtonOutline";
import ButtonPrimary from "../../ui/ButtonPrimary";
import FormLable from "../../ui/FormLable";
import Row from "../../ui/Row";
import FormRow from "../../ui/FormRow";
import Error from "../../ui/Error";
import useCreatePlacement from "./useCreatePlacement";
import useEditPlacement from "./useEditPlacement";

function CreatePlacementForm({ onCloseModal, placementToEdit = {} }) {
  const { _id: editId, photo, ...editValues } = placementToEdit;
  const isEditSession = Boolean(editId);

  const form = useForm({ defaultValues: isEditSession ? editValues : {} });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const { createPlacement, isCreating } = useCreatePlacement();
  const { isEditing, editPlacement } = useEditPlacement();

  function onSubmit(data) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("gender", data.gender);
    formData.append("developerRole", data.developerRole);
    formData.append("salary", data.salary);
    formData.append("companyName", data.companyName);
    isEditSession
      ? data.photo.length === 0
        ? null
        : formData.append("photo", data.photo[0])
      : formData.append("photo", data.photo[0]);

    isEditSession
      ? editPlacement({ id: editId, data: formData }, { onSuccess: () => onCloseModal?.() })
      : createPlacement(formData, { onSuccess: () => onCloseModal?.() });
  }

  const isWorking = isCreating || isEditing;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-[36rem]">
      <FormRow
        icon={<IconUser width={24} height={24} stroke={2} />}
        label="Enter Name"
        htmlFor="name">
        <input
          id="name"
          type="text"
          placeholder="Enter Your Name"
          className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
          disabled={isWorking}
          {...register("name", { required: "This field is required!" })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow
        icon={<IconGenderBigender width={24} height={24} stroke={2} />}
        label="Select Gender"
        htmlFor="gender">
        <div className="w-80 flex gap-4 items-center py-2">
          <Row moreClasses="gap-1">
            <input
              id="male"
              type="radio"
              name="gender"
              value="male"
              disabled={isWorking}
              {...register("gender", { required: "This field is required!" })}
            />
            <FormLable name="gender" htmlFor="male">
              Male
            </FormLable>
          </Row>
          <Row moreClasses="gap-1">
            <input
              id="female"
              type="radio"
              name="gender"
              disabled={isWorking}
              value="female"
              {...register("gender", { required: "This field is required!" })}
            />
            <FormLable name="gender" htmlFor="female">
              Female
            </FormLable>
          </Row>
        </div>
        {errors?.gender?.message && <Error>{errors.gender.message}</Error>}
      </FormRow>

      <FormRow
        icon={<IconCode width={24} height={24} stroke={2} />}
        label="Select Role"
        htmlFor="developerRole">
        <div className="w-80 flex gap-4 items-center">
          <select
            id="developerRole"
            name="developerRole"
            disabled={isWorking}
            defaultValue={isEditSession && editValues.developerRole}
            className="border font-semibold text-zinc-600 text-sm bg-white border-zinc-200 rounded px-4 py-2 cursor-pointer">
            <option value="js-dev">JS Developer</option>
            <option value="php-dev">PHP Developer</option>
            <option value="react-dev">React Developer</option>
            <option value="frontend-dev">Frontend Developer</option>
            <option value="backend-dev">Backend Developer</option>
            <option value="laravel-dev">Laravel Developer</option>
            <option value="ui/ux-designer">UI/UX Designer</option>
          </select>
        </div>
        {errors?.developerRole?.message && <Error>{errors.developerRole.message}</Error>}
      </FormRow>

      <FormRow icon={<IconCoinRupee stroke={2} />} label="Enter Salary" htmlFor="salary">
        <div className="w-80 flex items-center gap-2">
          <input
            id="salary"
            name="salary"
            type="text"
            className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
            placeholder="Enter Salary"
            disabled={isWorking}
            {...register("salary", { required: "This field is required!" })}
          />
          <span className=" text-sm font-semibold bg-green-200 text-green-800 px-4 leading-none py-1 rounded-full">
            LPA
          </span>
        </div>
        {errors?.salary?.message && <Error>{errors.salary.message}</Error>}
      </FormRow>

      <FormRow icon={<IconBuildings stroke={2} />} label="Company Name" htmlFor="companyName">
        <input
          id="companyName"
          type="text"
          name="companyName"
          className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
          placeholder="Enter company Name"
          disabled={isWorking}
          {...register("companyName", { required: "This field is required!" })}
        />

        {errors?.companyName?.message && <Error>{errors.companyName.message}</Error>}
      </FormRow>

      <FormRow icon={<IconPhotoUp stroke={2} />} label="Upload Image" htmlFor="photo">
        <div className="flex items-center gap-3 w-80">
          {isEditSession && (
            <div className="overflow-hidden bg-violet-100 border border-zinc-200 w-12 h-18">
              <img
                className=" dark:brightness-90"
                src={`http://localhost:8000/img/placements/${photo}`}
                alt="shining star 1"
              />
            </div>
          )}
          <input
            id="photo"
            type="file"
            name="photo"
            className="rounded border border-zinc-200 w-full file:cursor-pointer px-0 py-0 file:bg-violet-200 file:text-violet-600 file:px-4 file:py-3 file:leading-none file:border-none file:rounded-md file:mr-4 font-medium"
            disabled={isWorking}
            {...register("photo", { required: isEditSession ? false : "This field is required!" })}
          />
        </div>

        {errors?.photo?.message && <Error>{errors.photo.message}</Error>}
      </FormRow>

      <div className="flex justify-end gap-4 items-center mt-8">
        <ButtonOutline disabled={isWorking}>Cancel</ButtonOutline>
        <ButtonPrimary disabled={isWorking}>Add Placement</ButtonPrimary>
      </div>
    </form>
  );
}

export default CreatePlacementForm;
