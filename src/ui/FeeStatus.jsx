function FeeStatus({ status }) {
  return (
    <span
      className={`font-medium rounded-full ${
        status ? "text-green-600 bg-green-200" : " text-red-600 bg-red-200"
      } py-1 px-3 font-sans leading-none text-sm uppercase`}>
      {status ? "Completed" : "Uncomplete"}
    </span>
  );
}

export default FeeStatus;
