import { Controller, useForm } from "react-hook-form";

import {
  IconCertificate,
  IconMail,
  IconMoneybag,
  IconPhone,
  IconPhoneSpark,
  IconUser,
  IconUserHexagon,
} from "@tabler/icons-react";

import useEditStudent from "./useEditStudent";

import FormRow from "../../ui/FormRow";
import ButtonOutline from "../../ui/ButtonOutline";
import ButtonPrimary from "../../ui/ButtonPrimary";
import Error from "../../ui/Error";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import useCourse from "../settings/useCourse";
import Courses from "../../ui/Courses";
import Spinner from "../../ui/Spinner";

function UpdateStudentForm({ onCloseModal, student }) {
  const [currentFee, setCurrentFee] = useState(student.currentFee);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const { isEditing, editStudent } = useEditStudent();
  const { courses, isLoading } = useCourse();

  const form = useForm({
    defaultValues: {
      name: student.name,
      email: student.email,
      phoneNumber: student.phoneNumber,
      fatherName: student.fatherName,
      fatherPhoneNumber: student.fatherPhoneNumber,
      totalFees: student.totalFees,
      courses: student.courses,
    },
  });
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  if (isLoading) return <Spinner moreClasses="mt-0" />;

  // Set User & Remote Course Name to array
  const remainingCourse = courses.filter(
    (coursesCourse) =>
      !student.courses.some((studentCourse) =>
        Object.keys(studentCourse).every((key) => studentCourse[key] === coursesCourse[key])
      )
  );

  function onSubmit(data) {
    console.log(data);
    const studentCurrentCourse = student.courses.map((course) => course._id);
    const newSelectedCourse = selectedCourses.map((course) => course._id);

    data.courses = [...studentCurrentCourse, ...newSelectedCourse];
    data.totalFees = currentFee;
    data.id = student._id;

    editStudent({ id: data.id, data }, { onSuccess: () => onCloseModal?.() });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" min-h-[20rem] flex flex-col  w-[72rem]">
      <div className="flex justify-center items-start gap-8">
        <div>
          <FormRow
            icon={<IconUser width={24} height={24} stroke={2} />}
            label="Student Name"
            htmlFor="name">
            <input
              disabled={isEditing}
              id="name"
              type="text"
              placeholder="Enter Student Name"
              className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
              {...register("name", { required: "This field is required!" })}
            />
            {errors?.name?.message && <Error>{errors.name.message}</Error>}
          </FormRow>

          <FormRow icon={<IconMail stroke={2} />} label="Student Email" htmlFor="email">
            <input
              disabled={isEditing}
              id="email"
              type="email"
              placeholder="Enter Student Email"
              className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
              {...register("email", { required: "This field is required!" })}
            />
            {errors?.email?.message && <Error>{errors.email.message}</Error>}
          </FormRow>

          <FormRow icon={<IconPhone stroke={2} />} label="Student Phone" htmlFor="phoneNumber">
            <input
              disabled={isEditing}
              id="phoneNumber"
              type="text"
              placeholder="Enter Student Phone"
              className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
              {...register("phoneNumber", { required: "This field is required!" })}
            />
            {errors?.phoneNumber?.message && <Error>{errors.phoneNumber.message}</Error>}
          </FormRow>

          <FormRow icon={<IconCertificate stroke={2} />} label="Select Courses" htmlFor="courses">
            <div
              className={`w-80 grid ${
                remainingCourse.length > 0 ? " grid-cols-[1.2fr,2fr]" : " grid-cols-[1fr]"
              } items-center`}>
              <Courses courses={student.courses} />
              {remainingCourse.length > 0 && (
                <Controller
                  control={control}
                  name="courses"
                  render={({ field: { onChange, value } }) => (
                    <Multiselect
                      className=" bg-zinc-50 rounded border border-zinc-200"
                      options={remainingCourse}
                      displayValue="courseName"
                      value={value ? value : []}
                      onSelect={(e) => {
                        onChange(e);
                        setSelectedCourses(e);
                        const total =
                          e.reduce((acc, course) => acc + course.coursePrice, 0) +
                          student.totalFees;
                        setCurrentFee(() => total);
                      }}
                      // disable={isCreating}
                      onRemove={(e) => {
                        onChange(e);
                        setSelectedCourses(e);
                        const total =
                          e.reduce((acc, course) => acc + course.coursePrice, 0) +
                          student.totalFees;
                        setCurrentFee(() => total);
                      }}
                      placeholder="Select Courses"
                      {...register("courses", { required: false })}
                    />
                  )}
                />
              )}
            </div>
          </FormRow>
        </div>

        <div>
          <FormRow
            icon={<IconUserHexagon width={24} height={24} stroke={2} />}
            label="Father Name"
            htmlFor="fatherName">
            <input
              disabled={isEditing}
              id="fatherName"
              type="text"
              placeholder="Enter Father Name"
              className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
              {...register("fatherName", { required: "This field is required!" })}
            />
            {errors?.fatherName?.message && <Error>{errors.fatherName.message}</Error>}
          </FormRow>

          <FormRow
            icon={<IconPhoneSpark stroke={2} />}
            label="Student father Phone"
            htmlFor="fatherPhoneNumber">
            <input
              disabled={isEditing}
              id="fatherPhoneNumber"
              type="text"
              placeholder="Enter Student Father Phone"
              className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
              {...register("fatherPhoneNumber", { required: "This field is required!" })}
            />
            {errors?.fatherPhoneNumber?.message && (
              <Error>{errors.fatherPhoneNumber.message}</Error>
            )}
          </FormRow>

          <FormRow icon={<IconMoneybag stroke={2} />} label="Total Fees" htmlFor="totalFees">
            <input
              id="totalFees"
              type="text"
              value={currentFee}
              onChange={(e) => setCurrentFee(e.target.value)}
              disabled={true}
              placeholder="Enter Total Fees"
              className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
              {...register("totalFees", {
                required: "This field is required!",
                validate: (value) => +value > 0 || `Enter a valid fee Amount.`,
              })}
            />
            {errors?.totalFees?.message && <Error>{errors.totalFees.message}</Error>}
          </FormRow>
        </div>
      </div>

      <div className="flex justify-end gap-4 items-center mt-auto">
        <ButtonOutline onClick={onCloseModal}>Cancel</ButtonOutline>
        <ButtonPrimary>Update Student</ButtonPrimary>
      </div>
    </form>
  );
}

export default UpdateStudentForm;
