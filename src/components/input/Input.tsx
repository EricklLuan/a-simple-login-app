import "./input.scss"

type InputProps = {
  type?: string;
  name?: string;
  value?: string;
  onChange?: (event?: any) => void;
  onSubmit?: (event?: any) => void;
  placeholder?: string;
}

export function Input(props: InputProps) {
  return(
    <input
      className="Input"
      name={props.name}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onSubmit={props.onSubmit}
    />
  );
}
