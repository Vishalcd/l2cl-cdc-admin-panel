import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  IconCalendarEvent,
  IconCode,
  IconFileDownload,
  IconFileUpload,
  IconId,
} from "@tabler/icons-react";

import FormRow from "../../ui/FormRow";
import Error from "../../ui/Error";
import Row from "../../ui/Row";
import FormLable from "../../ui/FormLable";
import ButtonOutline from "../../ui/ButtonOutline";
import ButtonPrimary from "../../ui/ButtonPrimary";
import useCreateCertificate from "./useCreateCertificate";
import useEditCertificate from "./useEditCertificate";

function CreateCertificateForm({ onCloseModal, certificateToEdit = {}, customerToAdd = {} }) {
  const navigate = useNavigate();

  const { _id: editId, ...editValues } = certificateToEdit;
  const isEditSession = Boolean(editId);
  const isNew = Boolean(customerToAdd._id);
  console.log(isNew, customerToAdd);

  const form = useForm({ defaultValues: isEditSession ? editValues : {} });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const { isCreating, createCertificate } = useCreateCertificate();
  const { isEditing, editCertificate } = useEditCertificate();

  function onSubmit(data) {
    const formData = new FormData();
    formData.append("enrollId", data.enrollId);
    isEditSession
      ? typeof data.certificate[0] === "object"
        ? formData.append("certificate", data.certificate[0])
        : null
      : formData.append("certificate", data.certificate[0]);
    formData.append("course", data.course);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);
    formData.append("downloadPermission", data.downloadPermission);

    isEditSession
      ? editCertificate({ id: editId, data: formData }, { onSuccess: () => onCloseModal?.() })
      : createCertificate(formData, {
          onSuccess: () => {
            onCloseModal?.();
            if (isNew) navigate("/certificates");
          },
        });
  }

  const isWorking = isCreating || isEditing;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-[36rem]">
      {!isEditSession && (
        <FormRow
          icon={<IconId width={24} height={24} stroke={2} />}
          label="Enter Student ID"
          htmlFor="enrollId">
          <input
            disabled={isWorking}
            id="enrollId"
            type="text"
            placeholder="Enter Enroll Id"
            defaultValue={isNew ? customerToAdd.enrollId : ""}
            className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
            {...register("enrollId", { required: "This field is required!" })}
          />
          {errors?.enrollId?.message && <Error>{errors.enrollId.message}</Error>}
        </FormRow>
      )}

      <FormRow
        icon={<IconCode width={24} height={24} stroke={2} />}
        label="Enter course Name"
        htmlFor="course">
        <input
          disabled={isWorking}
          id="course"
          type="text"
          placeholder="Enter Course"
          className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
          {...register("course", { required: "This field is required!" })}
        />
        {errors?.course?.message && <Error>{errors.course.message}</Error>}
      </FormRow>

      <FormRow
        icon={<IconCalendarEvent width={24} height={24} stroke={2} />}
        label="Select Start Date"
        htmlFor="startDate">
        <input
          disabled={isWorking}
          id="startDate"
          type="date"
          placeholder="Enter StartDate"
          className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
          {...register("startDate", {
            required: isEditSession ? false : "This field is required!",
          })}
        />
        {errors?.startDate?.message && <Error>{errors.startDate.message}</Error>}
      </FormRow>

      <FormRow
        icon={<IconCalendarEvent width={24} height={24} stroke={2} />}
        label="Select End Date"
        htmlFor="endDate">
        <input
          disabled={isWorking}
          id="endDate"
          type="date"
          placeholder="Enter EndDate"
          className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
          {...register("endDate", {
            required: isEditSession ? false : "This field is required!",
          })}
        />
        {errors?.endDate?.message && <Error>{errors.endDate.message}</Error>}
      </FormRow>

      <FormRow
        icon={<IconFileDownload width={24} height={24} stroke={2} />}
        label="Allow Download"
        htmlFor="downloadPermission">
        <div className="w-80 flex gap-4 items-center py-2">
          <Row moreClasses="gap-1">
            <input
              disabled={isWorking}
              id="true"
              type="radio"
              value="true"
              name="downloadPermission"
              {...register("downloadPermission", { required: "This field is required!" })}
            />
            <FormLable name="downloadPermission" htmlFor="true">
              True
            </FormLable>
          </Row>
          <Row moreClasses="gap-1">
            <input
              disabled={isWorking}
              id="false"
              type="radio"
              value="false"
              name="downloadPermission"
              {...register("downloadPermission", { required: "This field is required!" })}
            />
            <FormLable name="downloadPermission" htmlFor="false">
              False
            </FormLable>
          </Row>
        </div>
        {errors?.downloadPermission?.message && <Error>{errors.downloadPermission.message}</Error>}
      </FormRow>

      <FormRow
        icon={<IconFileUpload stroke={2} />}
        label="Upload Certificate"
        htmlFor="certificate">
        <div className="flex items-center gap-3 w-80">
          <input
            disabled={isWorking}
            id="certificate"
            type="file"
            name="certificate"
            accept="application/pdf,application/vnd.ms-excel"
            className="rounded border border-zinc-200 w-full file:cursor-pointer px-0 py-0 file:bg-violet-200 file:text-violet-600 file:px-4 file:py-3 file:leading-none file:border-none file:rounded-md file:mr-4 font-medium"
            {...register("certificate", {
              required: isEditSession ? false : "This field is required!",
            })}
          />
        </div>
        {errors?.certificate?.message && <Error>{errors.certificate.message}</Error>}
      </FormRow>

      <div className="flex justify-end gap-4 items-center mt-8">
        <ButtonOutline onClick={() => onCloseModal}>Cancel</ButtonOutline>
        <ButtonPrimary>Add Faculty</ButtonPrimary>
      </div>
    </form>
  );
}
export default CreateCertificateForm;
