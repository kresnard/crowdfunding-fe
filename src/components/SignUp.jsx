import React from 'react'

const SignUp = () => {
  return (
    <div className='max-lg bg-[#3B41E3] p-8 shadow shadow-slate-300'>
      <form className="my-10">
      <h2 className='text-white text-2xl mb-8 font-bold'>Sign Up Account</h2>
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-white">Full Name</label>
            <input type="text"
            className="w-full py-3 mt-1 border border-slate-200 rounded-full px-6 focus:line-clamp-non focus:border-slate-500 hover:shadow"
            placeholder='masukkan nama Anda'
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-white">Occupation</label>
            <input type="text"
            className="w-full py-3 mt-1 border border-slate-200 rounded-full px-6 focus:line-clamp-non focus:border-slate-500 hover:shadow"
            placeholder='masukkan pekerjaan Anda'
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-white">Email</label>
            <input type="text"
            className="w-full py-3 mt-1 border border-slate-200 rounded-full px-6 focus:line-clamp-non focus:border-slate-500 hover:shadow"
            placeholder='masukkan nama Anda'
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-white">Password</label>
            <input type="password"
            className="w-full py-3 mt-1 border border-slate-200 rounded-full px-6 focus:line-clamp-non focus:border-slate-500 hover:shadow"
            placeholder='masukkan nama Anda'
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

export default SignUp