import { ModeToggle } from "@/components/ModeToggle";

import { Button } from "@/components/ui/button";

import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24 text-center justify-center">
        Cocktail.js@next Starter
        <div className="flex-col flex text-start mt-10">
          Stack:
          <li>Next js</li>
          <li>Typescript</li>
          <li>Tailwindcss</li>
          <li>ESLint</li>
          <li>App Router</li>
          <li>React-icons</li>
          <li>Shadcn-UI</li>
        </div>
        <ul className="mt-10 flex flex-col items-center">
          <li className="flex-col flex">
            Shadcn-UI /@components/ui
            <Button variant="outline">Button</Button>
          </li>

          <li className="flex-col flex mt-10">
            React-Icons:
            <div className="mx-auto flex items-center gap-2 mt-2">
              <FaGithub />
              <SiVercel />
              <IoLogoJavascript />
            </div>
          </li>

          <li className="flex-col flex mt-10">
            Dark mode:
            <div className="mx-auto mt-2">
              <ModeToggle />
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}
