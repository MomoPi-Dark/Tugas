import Link from "next/link";
import { FaDiscord, FaGithub, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function Login() {
  return (
    <div className="flex justify-center py-52">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-gray-200 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-orange-400">Dev</span> Nacil
            </div>
            <div className="py-10">
              <h2 className={`text-3xl font-bold text-orange-400 mb-2`}>
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-orange-400 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <Link
                  href="/home"
                  className="border-2 border-orange-400 rounded-full p-3 mx-1"
                >
                  <FaDiscord className="text-sm" />
                </Link>
                <Link
                  href="/home"
                  className="border-2 border-orange-400 rounded-full p-3 mx-1"
                >
                  <FaGithub className="text-sm" />
                </Link>
              </div>
              <p className="my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-orange-400 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="m-2" />
                  <input
                    type={"email"}
                    name={"email"}
                    placeholder={"Email / Username"}
                    className="bg-orange-400 outline-none text-sm flex-1"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-400 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="m-2" />
                  <input
                    type={"password"}
                    name={"password"}
                    placeholder={"Password"}
                    className="bg-orange-400 outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex w-64 mb-5 justify-between">
                  <label className="flex items-center text-xs">
                    <input type={"checkbox"} name="remember" className="mr-1" />{" "}
                    Remember
                  </label>
                  <Link href="/login" className="text-xs">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <Link
                href="/home"
                className="border-2 border-orange-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-orange-400"
              >
                Sign in
              </Link>
            </div>
          </div>
          <div
            className={`w-2/5 bg-orange-400 rounded-tr-2xl rounded-br-2xl py-36 px-12`}
          >
            <h2 className="text-3xl font-bold mb-2">Halo Friends!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p>Selamat datang di Dev Nacil</p>
          </div>
        </div>
      </div>
    </div>
  );
}
