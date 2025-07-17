import { shadowsIntoLight, bangers, monaSans } from "@/app/fonts/fonts";

export default function Signup() {
    return (
        <div className="flex flex-col items-center min-h-screen py-8">
            <div className="flex flex-col items-center mb-12">
                <h1 className={`${shadowsIntoLight.className} md:text-5xl text-3xl `}>Welcome to <span className={`${bangers.className} md:text-5xl text-3xl text-emerald-500/80 `}>Lumina</span></h1>
                <p className={`${monaSans.className} md:text-xl text-xs text-gray-200  `}>Please sign up to continue</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2 className={`${shadowsIntoLight.className} md:text-3xl text-2xl `}>Create an account</h2>
                <p className={`${monaSans.className} md:text-lg text-xs text-gray-200  `}>Please fill in the following details to create an account</p>
            </div>
        </div>
    )
}