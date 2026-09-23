
"use client";
import SocialButton from "@/components/buttons/SocialButton";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginForm() {
  const params = useSearchParams();
    const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    const result = await signIn("credentials", {
      email: email,
      password: password,
      // redirect: false,
      callbackUrl: params.get("callbackUrl") || "/",
    });
    // console.log(result);
    if(!result.ok){
        Swal.fire("error", "Something went wrong", "error");
    }else{
        Swal.fire("success", "Login success", "success");

        router.push('/');
    }
  };

  return (
    <div className="max-w-1/4 mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">
        Login
      </h2>

      <form onSubmit={handleLogin} className="space-y-4">

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full btn btn-primary py-3 rounded-lg font-semibold"
        >
          Login
        </button>
        <SocialButton></SocialButton>

        {/* Toggle Button */}
<div className="text-center mt-6">
  <p className="text-gray-600">
    Do not have an account?{" "}
    <Link
      href="/register"
      className="text-primary font-semibold hover:underline"
    >
      Register
    </Link>
  </p>
</div>

      </form>
    </div>
  );
}
