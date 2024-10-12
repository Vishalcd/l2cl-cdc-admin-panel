function CertificateStatus({ status }) {
  return (
    <span
      className={`${
        status
          ? "text-green-600 bg-green-200 dark:text-green-200 dark:bg-green-900"
          : "text-red-600 bg-red-200 dark:text-red-200 dark:bg-red-900"
      } 	font-medium min-w-28 px-3 py1.5 w-max rounded-full text-center text-sm`}>
      {status ? "Allowed" : "Not-Allowed"}
    </span>
  );
}

export default CertificateStatus;
