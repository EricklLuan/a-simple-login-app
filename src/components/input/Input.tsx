import "./input.scss"

type InputProps = {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
}

export function Input(props: InputProps) {
  return(
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      className="Input"
    />
  );
}
