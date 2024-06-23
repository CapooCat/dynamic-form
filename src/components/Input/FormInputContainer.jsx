export default function FormInputContainer({ children, title }) {
  return (
    <div className="grid gap-1 h-fit text-sm">
      <label>{title}</label>
      {children}
    </div>
  );
}
