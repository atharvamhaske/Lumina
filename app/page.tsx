"use client"
import { shadowsIntoLight, bangers } from "./fonts/fonts";
import { SimpleToggle } from "./components/simple-toggle";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <SimpleToggle />
      <h1 className={`${shadowsIntoLight.className} text-4xl text-foreground`}>
        The Home Page of <span className={`${bangers.className} text-4xl text-primary`}>Devsletter</span>
      </h1>
    </div>
  )
}