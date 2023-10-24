interface input {
  type: string,
  placeholder: string,
  name: string,
  id: string,
  contentLabel: string
}

export default function inputs({ type, name, placeholder, id, contentLabel }: input) {
  return (
    <>
      <label htmlFor={id}>{contentLabel}</label>
      <input type={type} name={name} placeholder={placeholder} id={id} className="p-4 bg-gray-200" />
    </>
  )
}
