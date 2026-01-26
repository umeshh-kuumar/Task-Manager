import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayouts from '../../components/layouts/AuthLayouts'
import Input from '../../components/inputs/input'
import { validateEmail } from '../../utils/helper'

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

    // Handle login logic here
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }

    if(!password){
      setError("Please enter the Password.");
      return;
    }

    setError(null);
  }


  return <AuthLayouts>
    <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
      <p className='text-xs text-slate-700 mt-1.5'>
        Please enter your details to log in
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="email"
        />

        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
        />

        {error && <p className="text-xs text-red-500 pb-2.5">{error}</p>}

        <button type="submit" className="btn-primary ">
          Log In
        </button>

        <p className="text-xs text-slate-700 mt-2">
          Don't have an account?
          <Link to="/signup" className="font-medium text-primary underline">
            SignUp
          </Link>
        </p>

      </form>
    </div>
  </AuthLayouts>

}

export default login;