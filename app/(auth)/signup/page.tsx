"use client"
import { shadowsIntoLight, bangers, monaSans } from "@/app/fonts/fonts";
import { useState } from "react";

export default function Signup() {

    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (!email) {
            alert("Please enter your email");
            return;
        }
        alert("Email subscribed successfully!");
        setEmail(""); // Clear the input after successful subscription
    }
    return (
        <div className="flex flex-col items-center min-h-screen py-8">
            <div className="flex flex-col items-center mb-12">
                <h1 className={`${shadowsIntoLight.className} md:text-5xl text-3xl `}>Welcome to <span className={`${bangers.className} md:text-5xl text-3xl text-emerald-500/80 `}>Devsletter</span></h1>
                <p className={`${monaSans.className} md:text-xl text- text-gray-200 mt-3 `}>Please sign up to continue and Subscribe to our devsletter</p>
            </div>
            <div className="flex items-center justify-center gap-3">
                <div className="flex flex-col items-center justify-center ">
                    <input type="email" placeholder="xyz@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full max-w-md p-2 rounded-md border border-gray-300" />
                </div>
                <button className="bg-emerald-500 text-white px-4 py-2 rounded-md" onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
    )
}