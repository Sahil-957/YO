import { useState } from 'react';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const [formData, setFormData] = useState({
    fullname: '', 
    email: '',
    password: '',
  });   

  const {SignUp , isSigningUp} = useAuthStore();
  
  const validateForm = () => {
    // Add validation logic here
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='min-h-screen grid lg: grid-cols-2'>
      {/* Left side */}
      <div className='flex flex-col justify-center items-center p-6 sm :p-12'>
        <div className='w-full max-w-md space-y-8'></div>
      </div>

    </div>
  )
}

export default SignUpPage