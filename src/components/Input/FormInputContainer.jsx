export default function FormInputContainer({ children, title }) {
  return (
    <div className="grid gap-2 h-fit">
      <label>{title}</label>
      {children}
    </div>
  );
}
