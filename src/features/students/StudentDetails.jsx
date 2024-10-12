import {
  IconCertificate,
  IconCoinRupee,
  IconEdit,
  IconExternalLink,
  IconMail,
  IconMoneybag,
  IconPhone,
  IconPhoneSpark,
  IconRosetteDiscountCheck,
  IconTransactionRupee,
  IconUser,
  IconUserHexagon,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

import StudentDetailBox from "./StudentDetailBox";
import ButtonPrimary from "../../ui/ButtonPrimary";
import Modal from "../../ui/Modal";
import UpdateStudentForm from "./UpdateStudentForm";
import DepositFeeForm from "./DepositFeeForm";
import Row from "../../ui/Row";
import ButtonBack from "../../ui/ButtonBack";
import Heading from "../../ui/Heading";
import StudentStatus from "../../ui/StudentStatus";
import JoinUs from "../../ui/JoinUs";
import useStudentDetails from "./useStudent";
import Spinner from "../../ui/Spinner";
import { formatCurrency, formatMobileNumber } from "../../utils/helper";
import Courses from "../../ui/Courses";
import TransactionsTable from "./TransactionsTable";
import FeeStatus from "../../ui/FeeStatus";
import Empty from "../../ui/Empty";

function StudentDetails() {
  const { isLoading, studentDetails } = useStudentDetails();

  if (isLoading) return <Spinner />;

  if (!studentDetails) return <Empty resource="Student detail" />;

  const { data: student } = studentDetails;

  return (
    <>
      <Row>
        <div className=" flex items-center gap-4">
          <ButtonBack to="/students">Back</ButtonBack>
          <Heading moreClasses="text-xl">
            #{student.enrollId}
            <StudentStatus status={student.active} />
          </Heading>
        </div>

        <JoinUs date={student.createdAt} />
      </Row>
      <div className=" min-h-52 mt-6 shadow-sm dark:bg-stone-800 bg-zinc-50  rounded-lg overflow-hidden grid grid-cols-[200px,1fr] p-4">
        <div className=" relative flex items-center justify-center flex-col border-r dark:border-[rgba(255,255,255,0.05)] border-[rgba(1,1,1,0.05)]">
          <div className="w-20 h-20 overflow-hidden mb-4  ">
            <img
              src={`/img/${student.photo}`}
              className="border-2 p-[2px] dark:border-violet-950 border-violet-200 w-min  rounded-full"
              alt="user imge"
            />
          </div>
          <h3 className=" text-xl font-semibold ">{student.name.split(" ").at(0)}</h3>
          <Modal>
            <Modal.Open opens="student-form">
              <button className="text-base mt-1 font-semibold text-violet-600 flex items-center gap-1">
                <IconEdit width={18} height={18} /> Update Student
              </button>
            </Modal.Open>
            <Modal.Window names="student-form">
              <UpdateStudentForm student={student} />
            </Modal.Window>
          </Modal>
        </div>

        <div className="grid  grid-rows-2 px-4">
          <div className=" dark:border-[rgba(255,255,255,0.05)] border-[rgba(1,1,1,0.05)] [&:not(:last-child)]:border-b py-2 grid grid-cols-4 pb-4">
            <StudentDetailBox icon={<IconUser width={20} height={20} />} heading="Full Name">
              {student.name}
            </StudentDetailBox>

            <StudentDetailBox icon={<IconMail width={20} height={20} />} heading="Email">
              <Link
                className=" text-blue-400 text-sm flex items-center gap-1 font-semibold  leading-tight"
                to={`mailto:${student.email}`}>
                Send Mail
                <IconExternalLink width={20} height={20} />
              </Link>
            </StudentDetailBox>

            <StudentDetailBox icon={<IconPhone width={20} height={20} />} heading="Mobile Number">
              {formatMobileNumber(student.phoneNumber)}
            </StudentDetailBox>

            <StudentDetailBox icon={<IconCertificate width={20} height={20} />} heading="Courses">
              <Courses courses={student.courses} />
            </StudentDetailBox>
          </div>

          <div className=" border-[rgba(1,1,1,0.05)] [&:not(:last-child)]:border-b py-2 grid grid-cols-4 pt-4">
            <StudentDetailBox
              icon={<IconUserHexagon width={20} height={20} />}
              heading="Father Name">
              {student.fatherName}
            </StudentDetailBox>

            <StudentDetailBox
              icon={<IconPhoneSpark width={20} height={20} />}
              heading="Father Number">
              {formatMobileNumber(student.fatherPhoneNumber)}
            </StudentDetailBox>

            <StudentDetailBox icon={<IconMoneybag width={20} height={20} />} heading="Total Fees">
              <div className="flex items-center gap-[2px] text-green-600">
                {formatCurrency(student.totalFees)}
              </div>
            </StudentDetailBox>

            <StudentDetailBox
              icon={<IconRosetteDiscountCheck width={20} height={20} />}
              heading="Fees Status">
              <FeeStatus status={student.feesComplete} />
            </StudentDetailBox>
          </div>
        </div>
      </div>
      <TransactionsTable student={student} />
      {!student.feesComplete && (
        <div className="flex items-center justify-start mt-4">
          <Modal>
            <Modal.Open opens="fee-form">
              <ButtonPrimary>
                <IconCoinRupee stroke={2} /> Depsoit Fees
              </ButtonPrimary>
            </Modal.Open>
            <Modal.Window names="fee-form">
              <DepositFeeForm remainingFees={student.remainingFees} courses={student.courses} />
            </Modal.Window>
          </Modal>
        </div>
      )}
    </>
  );
}

export default StudentDetails;
<IconTransactionRupee />;
