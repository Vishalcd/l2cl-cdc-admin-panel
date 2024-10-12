import { Controller, useForm } from "react-hook-form";
import Multiselect from "multiselect-react-dropdown";
import { useParams } from "react-router-dom";

import { IconCertificate, IconMoneybag, IconReceiptRupee } from "@tabler/icons-react";

import FormRow from "../../ui/FormRow";
import ButtonOutline from "../../ui/ButtonOutline";
import ButtonPrimary from "../../ui/ButtonPrimary";
import Error from "../../ui/Error";
import Row from "../../ui/Row";
import FormLable from "../../ui/FormLable";
import useCreateTransaction from "./useCreateTransaction";
import { formatCurrency } from "../../utils/helper";

function DepositFeeForm({ onCloseModal, courses, remainingFees }) {
  const { studentId } = useParams();
  const form = useForm();

  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  const allCourses = [];
  courses.map((course) => {
    allCourses.push({ _id: course._id, courseName: course.courseName });
  });

  const { isCreating, createTranscations } = useCreateTransaction();

  function onSubmit(data) {
    console.log(data);
    data.courses = data.courses.map((course) => course._id);
    const transactionData = {
      transactionAmount: Number(data.transactionAmount),
      courses: data.courses,
      transactionMethod: data.transactionMethod,
    };

    createTranscations({ id: studentId, transactionData }, { onSuccess: () => onCloseModal?.() });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-[36rem]">
      <FormRow icon={<IconCertificate stroke={2} />} label="Select Courses" htmlFor="courses">
        <div className="w-80">
          <Controller
            control={control}
            name="courses"
            render={({ field: { onChange, value } }) => (
              <Multiselect
                className=" bg-zinc-50 rounded border border-zinc-200"
                options={allCourses}
                displayValue="courseName"
                value={value ? value : []}
                onSelect={(e) => onChange(e)}
                disable={isCreating}
                onRemove={(e) => onChange(e)}
                placeholder="Select Courses"
                {...register("courses", { required: "This field is required!" })}
              />
            )}
          />
          {errors?.courses?.message && <Error>{errors.courses.message}</Error>}
        </div>
      </FormRow>

      <FormRow
        icon={<IconMoneybag stroke={2} />}
        label="Deposit Amount"
        htmlFor="transactionAmount">
        <input
          id="transactionAmount"
          type="number"
          disabled={isCreating}
          placeholder="Enter Deposit Amount"
          className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
          {...register("transactionAmount", {
            required: "This field is required!",
            validate: (value) =>
              (+value > 0 && +value <= remainingFees) ||
              `Enter valid fee Amount. Remaining fee is ${formatCurrency(remainingFees)}`,
          })}
        />
        {errors?.transactionAmount?.message && <Error>{errors.transactionAmount.message}</Error>}
      </FormRow>

      <FormRow
        icon={<IconReceiptRupee stroke={2} />}
        label="Payment Method"
        htmlFor="transactionMethod">
        <div className="w-80 flex gap-4 items-center py-2">
          <Row moreClasses="gap-1">
            <input
              id="cash"
              type="radio"
              name="transactionMethod"
              disabled={isCreating}
              value="cash"
              {...register("transactionMethod", { required: "This field is required!" })}
            />
            <FormLable name="transactionMethod" htmlFor="cash">
              Cash
            </FormLable>
          </Row>
          <Row moreClasses="gap-1">
            <input
              id="online"
              type="radio"
              name="transactionMethod"
              disabled={isCreating}
              value="online"
              {...register("transactionMethod", { required: "This field is required!" })}
            />
            <FormLable name="transactionMethod" htmlFor="online">
              Online
            </FormLable>
          </Row>
        </div>
        {errors?.transactionMethod?.message && <Error>{errors.transactionMethod.message}</Error>}
      </FormRow>

      <div className="flex justify-end gap-4 items-center mt-8">
        <ButtonOutline disabled={isCreating} onClick={onCloseModal}>
          Cancel
        </ButtonOutline>
        <ButtonPrimary disabled={isCreating}>Deposit Fee</ButtonPrimary>
      </div>
    </form>
  );
}

export default DepositFeeForm;
