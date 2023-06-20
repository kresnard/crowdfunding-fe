import React from 'react'

const SignIn = () => {
  return (
    <div className='h-screen bg-[#3B41E3] p-8 shadow shadow-slate-300'>
      <form className="my-10 content-center">
      <h2 className='text-white text-2xl mb-8 font-bold'>Sign In Account</h2>
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-white">Email</label>
            <input type="text"
            className="w-full py-3 mt-1 border border-slate-200 rounded-full px-6 focus:line-clamp-non hover:shadow
            focus:text-white focus:outline-none focus:border-[#8286FF] focus:ring-1 focus:ring-[#8286FF] focus:bg-[#4C52F8]"
            placeholder='masukkan email Anda'
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-white">Password</label>
            <input type="password"
            className="w-full py-3 mt-1 border border-slate-200 rounded-full px-6 focus:line-clamp-non hover:shadow
            focus:text-white focus:outline-none focus:border-[#8286FF] focus:ring-1 focus:ring-[#8286FF] focus:bg-[#4C52F8]"
            placeholder='masukkan password Anda'
            />
          </div>
          <button type='submit' 
            className='w-full py-3 font-bold text-white  bg-[#FF872E] hover:bg-[#FF872E] rounded-full border-[#FF872E] hover:shadow'>
            Sign Up
          </button>
          <p className='text-center text-white mt-5'>Already have account? 
            <a className='text-orange-500' href='https://www.youtube.com/'> Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignIn