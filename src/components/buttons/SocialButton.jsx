"use client";
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';

const SocialButton = () => {
    const params = useSearchParams();
    const handleSignIn = async()=>{
        const result = await signIn("google", {
            redirect: "false",
            callbackUrl: params.get("callbackUrl") || "/",
        });
        console.log(result);
        if(result.ok){
            Swal.fire("success", "welcome", "success");
        }else{
           Swal.fire("error", "sorry", "error"); 
        }
    }
    return (
        <div>
          <button
          onClick={handleSignIn}
          type="submit"
          className="w-full btn py-3 rounded-lg font-semibold"
        >
            <span><FcGoogle /> </span>
          Login with Google
        </button>  
        </div>
    );
};

export default SocialButton;