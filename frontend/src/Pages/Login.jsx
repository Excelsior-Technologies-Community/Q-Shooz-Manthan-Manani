import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import Input from '../Components/Input'
import { login as authLogin } from "../store/authSlice"
import authService from '../services/auth'
import Button from '../Components/Button'

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const loginHandler = async (data) => {
        setError("");
        setLoading(true);
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.response?.data?.message || "Failed to login. Please check your credentials.")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50/40 flex items-center justify-center px-4 py-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Soft gradient blobs */}
                <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-[#AE3F4F]/[0.06] rounded-full blur-[100px]" />
                <div className="absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-[#AE3F4F]/[0.04] rounded-full blur-[80px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-[120px]" />

                {/* Subtle dot pattern */}
                <div className="absolute inset-0 opacity-[0.4]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #e5e7eb 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                    }}
                />
            </div>

            {/* Login Card */}
            <div className="relative w-full max-w-md">
                {/* Card soft shadow */}
                <div className="absolute -inset-3 bg-gradient-to-r from-[#AE3F4F]/5 via-transparent to-[#AE3F4F]/5 rounded-[28px] blur-2xl" />

                <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl p-8 md:p-10 shadow-xl shadow-gray-200/40">
                    {/* Logo / Brand */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#AE3F4F] to-[#8a2a38] rounded-2xl mb-5 shadow-lg shadow-[#AE3F4F]/25 rotate-3 hover:rotate-0 transition-transform duration-500">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                            Welcome Back
                        </h1>
                        <p className="text-gray-400 mt-2 text-sm">
                            Sign in to your Shooz account
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-3.5 bg-red-50 border border-red-200/60 rounded-xl flex items-center gap-3">
                            <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            <p className="text-red-600 text-sm">{error}</p>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit(loginHandler)}>
                        <div className="space-y-5">
                            <Input
                                label="Email"
                                placeholder="Enter your email address"
                                type="email"
                                icon={
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                }
                                {...register("email", {
                                    required: true,
                                    validate: {
                                        matchPatern: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Email address must be valid"
                                    }
                                })}
                            />

                            <Input
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                                icon={
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                }
                                {...register("password", {
                                    required: true,
                                    validate: {
                                        matchPatern: (value) => value.length >= 6 || "Password must be at least 6 characters long"
                                    }
                                })}
                            />

                            <Button
                                type="submit"
                                className="w-full group"
                                loading={loading}
                            >
                                Sign In
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-8">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200" />
                        <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">or</span>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200" />
                    </div>

                    {/* Register Link */}
                    <p className="text-center text-sm text-gray-400">
                        Don&apos;t have an account?{' '}
                        <Link
                            to="/register"
                            className="text-[#AE3F4F] hover:text-[#8a2a38] font-semibold transition-colors duration-300 relative group"
                        >
                            Create Account
                            <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#AE3F4F] group-hover:w-full transition-all duration-300" />
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login