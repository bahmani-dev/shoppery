import Breadcrumb from '@/Components/Breadcrumb';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import MainLayout from '@/Components/Layout/MainLayout';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { LuEye } from 'react-icons/lu';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <MainLayout>
            <Head title="Log in" />

            <Breadcrumb
                items={[
                    {
                        label: 'Account',
                        href: '/account',
                    },
                    {
                        label: 'Login',
                    },
                ]}
                backgroundImage="/images/breadcrumbs.png"
            ></Breadcrumb>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="flex items-center justify-center px-6 py-20">
                <div className="mx-auto w-full max-w-[520px] rounded-xl border border-[#F2F2F2] px-6 py-10 shadow-xl">
                    <h1 className="mb-10 text-center text-xl font-semibold text-[#1A1A1A] sm:text-2xl md:text-3xl">
                        Sign In{' '}
                    </h1>
                    <form onSubmit={submit}>
                        <div>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={data.email}
                                className="mt-1 block w-full rounded-md border border-[#E5E5E5] px-4 py-[14px] text-base font-normal leading-[130%] text-[#1A1A1A] placeholder:text-[#999999]"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <div className="relative mt-4">
                                <TextInput
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    value={data.password}
                                    className="mt-1 block w-full rounded-md border border-[#E5E5E5] px-4 py-[14px] pr-12 text-base font-normal leading-[130%] text-[#1A1A1A] placeholder:text-[#999999]"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    aria-label="Toggle password visibility"
                                    onClick={() => {
                                        setShowPassword((prev) => !prev);
                                    }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                                >
                                    {showPassword ? <FaEyeSlash /> : <LuEye />}
                                </button>
                            </div>
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4 flex justify-between">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData('remember', e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                                    Remember me
                                </span>
                            </label>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                                >
                                    Forgot password?
                                </Link>
                            )}
                        </div>

                        <div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                type="submit"
                                className="my-6 w-full rounded-full bg-[#00B207] px-8 py-3 font-semibold leading-[120%] text-white transition-colors hover:bg-green-700"
                                disabled={processing}
                            >
                                Login
                            </motion.button>
                        </div>
                        <div>
                            <p className="text-center text-sm font-normal leading-[150%] text-[#666666]">
                                Don't have account?{' '}
                                <Link
                                    href={route('register')}
                                    className="text-sm font-medium leading-[150%] text-[#1A1A1A]"
                                >
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}
