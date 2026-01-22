import React from 'react'

const input = ({ value, onChange, label, placeholder, type }) => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col">
      <label className="text-xs font-medium text-slate-700">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e)}
        type={type=="password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded mt-2"
      />
    </div>
  )
}

export default input