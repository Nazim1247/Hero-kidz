
"use client";
import { postUser } from "@/actions/server/auth";
import SocialButton from "@/components/buttons/SocialButton";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";


export default function RegisterForm() {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";
    const router = useRouter();
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    // const image = form.get("image");

    // console.log({
    //   name,
    //   email,
    //   password,
    //   image,
    // });

    // এখানে তোমার register API call করবে

    const result = await postUser({name,email,password});
    
    if(result.acknowledged){
        alert("register success");
        // router.push("/login");
        const result = await signIn("credentials", {
          email: email, password: password, callbackUrl: callbackUrl
        })
    }
  };

  return (
    <div className="max-w-1/4 mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">
        Register
      </h2>

      <form onSubmit={handleRegister} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block mb-2 font-medium">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary"
          />
        </div>

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

        {/* Image */}
        {/* <div>
          <label className="block mb-2 font-medium">
            Profile Image
          </label>

          <input
            type="file"
            name="image"
            accept="image/*"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div> */}

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold"
        >
          Register
        </button>
        <SocialButton></SocialButton>

      </form>
      <div className="text-center mt-6">
  <p className="text-gray-600">
    Already have an account?{" "}
    <Link
      href="/login"
      className="text-primary font-semibold hover:underline"
    >
      Login
    </Link>
  </p>
</div>
    </div>
  );
}
