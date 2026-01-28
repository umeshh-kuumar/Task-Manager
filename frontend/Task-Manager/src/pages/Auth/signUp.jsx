import React, { useState } from 'react'
import AuthLayouts from '../../components/layouts/AuthLayouts'
import Input from '../../components/inputs/input'
import { Link } from 'react-router-dom'
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector'

const signup = () => {

  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminInviteToken, setAdminInviteToken] = useState("");

  const [error, setError] = useState(null);

  // Handle SingUp for Submit
  const handleSignup = (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter your full name.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the Password.");
      return;
    } 
    setError("");
  }
  return <AuthLayouts>
    <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-black">Create an Account</h3>
      <p className='text-xs text-slate-700 mt-1.5'>
        Join us today! It takes only a few steps to create your account
      </p>
      
      <form onSubmit={handleSignup} className="flex flex-col gap-4 mt-6">
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
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
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary underline">
            Log In
          </Link>
        </p>

      </form>
    </div>
  </AuthLayouts>
}

export default signup