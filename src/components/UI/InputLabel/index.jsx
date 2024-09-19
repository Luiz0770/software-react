export default function InputLabel({label, type, id, placeholder}) {
  return (
    <div>
      <label htmlFor="input-label">{label}</label>
      <input
        type={type}
        name="input-label"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
