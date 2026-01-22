import React, { useState } from 'react'
import AuthLayouts from '../../components/layouts/AuthLayouts'
import Input from '../../components/inputs/input'

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  }


  return <AuthLayouts>
    <div className="lg:w-[70%] h-3/4  flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
      <p className='text-xs text-slate-700 mt-1.5'>
        Please enter your details to log in
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
          placeholder="Email"
          type="email"
        />

        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Password"
          type="password"
        />
      </form>
    </div>
  </AuthLayouts>

}

export default login;