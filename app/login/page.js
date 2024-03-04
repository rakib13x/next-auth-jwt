import LoginForm from "@/components/LoginForm";
import Register from "../register/page";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="pt-8 pl-8 space-x-8">
        <Link href="/">
          <button className="text-sm uppercase border text-black px-8 py-1.5 rounded-md hover:bg-black hover:text-white transition-all duration-1200 ease-in-out">
            Home
          </button>
        </Link>
        <Link href="/posts">
          <button className="text-sm uppercase border text-black px-8 py-1.5 rounded-md hover:bg-black hover:text-white transition-all duration-1200 ease-in-out">
            Posts
          </button>
        </Link>
      </div>
      <main className="flex h-screen">
        <div className="w-1/3 flex flex-col justify-center items-center">
          <div className="mb-4">
            <LoginForm />
          </div>

          <div className="text-center">
            <p className="mt-2 text-gray-500">Don&apos;t have an account?</p>
            <button className="text-blue-500 underline">
              <Link href="/register">register</Link>
            </button>
          </div>
        </div>

        <div className="w-2/3 bg-[#0f0f16] flex items-center justify-center mt-[-80px]">
          <Image
            className="w-1/4 object-contain"
            src="/login.png"
            width={180}
            height={180}
            alt="banner-image"
          />
        </div>
      </main>
    </>
  );
}
