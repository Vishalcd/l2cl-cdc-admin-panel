import FormLable from "./FormLable";
import Row from "./Row";

function FormRow({ children, htmlFor, icon, label }) {
  return (
    <Row moreClasses="py-4 px-2 flex flex-cols gap-5">
      <FormLable htmlFor={htmlFor}>
        {icon}
        {label}
      </FormLable>
      <div className="flex flex-col gap-1"> {children}</div>
    </Row>
  );
}

export default FormRow;
