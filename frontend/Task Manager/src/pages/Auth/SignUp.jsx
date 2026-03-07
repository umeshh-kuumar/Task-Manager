import React, { useContext, useState } from 'react'
import AuthLayouts from '../../components/layouts/AuthLayouts'
import Input from '../../components/inputs/input'
import { Link, useNavigate } from 'react-router-dom'
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector'
import { validateEmail } from '../../utils/helper'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import { UserContext } from '../../context/userContext'
import uploadImage from '../../utils/uploadImage'

const Signup = () => {

  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminInviteToken, setAdminInviteToken] = useState("");

  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  

  const navigate = useNavigate();


  // Handle SingUp for Submit
  const handleSignup =  async (e) => {
    e.preventDefault();

    let profileImageUrl = '';

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

    // SignUP API Call
    try {
      // Upload image if present
      if (profilePic) {
        const imaUploadRes = await uploadImage(profilePic);
        profileImageUrl = imaUploadRes.imageUrl;
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
        profileImageUrl,
        adminInviteToken,
      });

      const { token, role } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data); // Update user context with the response data

        // Redirect based on user role
        if (role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/user/dashboard");
        }
      }
    } catch (err) {
      if(err.response && err.response.data.message){
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  }
  return <AuthLayouts>
    <div className="lg:w-[100] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-black">Create an Account</h3>
      <p className='text-xs text-slate-700 mt-1.5'>
        Join us today! It takes only a few steps to create your account
      </p>

      <form onSubmit={handleSignup} className="flex flex-col gap-4 mt-6">
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            label="Full Name"
            placeholder="John Doe"
            type="text"
          />
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

          <Input
            value={adminInviteToken}
            onChange={(e) => setAdminInviteToken(e.target.value)}
            label="Admin Invite Token"
            placeholder="6 digit token"
            type="text"
          />
        </div>


          {error && <p className="text-xs text-red-500 pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary ">
            SIGN UP
          </button>

          <p className="text-xs text-slate-700 mt-2">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary underline">
              Login
            </Link>
          </p>

      </form>
    </div>
  </AuthLayouts>
}

export default Signup;