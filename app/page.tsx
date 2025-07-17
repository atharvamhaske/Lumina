import { shadowsIntoLight, bangers } from "./fonts/fonts";

export default function Home() {


  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className={`${shadowsIntoLight.className} text-4xl `}>The Home Page of <span className={`${bangers.className} text-4xl text-cyan-500/80 `}>Lumina</span></h1>
    </div>
  )
}