import { ReactNode } from "react";
import { instrumentSans } from "@/app/fonts";
import Image from "next/image";
import ClouteraLogo from "@/components/ui/logo";

interface AuthLayoutContainerProps {
  children: ReactNode;
}

const AuthLayoutContainer = ({ children }: AuthLayoutContainerProps) => {
  return (
    <div className="grid h-screen w-full grid-cols-1 p-5 lg:grid-cols-2">
      <div className="rounded-30 bg-cloutera-black relative flex h-full w-full flex-col items-start justify-between overflow-hidden p-15">
        {/*<div className="absolute inset-0 top-0 z-10 size-full bg-[url(/images/auth-background-overlay.png)] bg-cover bg-center bg-no-repeat" />*/}

        <ClouteraLogo />

        <div className="flex flex-col items-start gap-8">
          <h1 className="text-[60px] leading-15 font-semibold -tracking-[2px] text-white">
            Take Your Social Media to the Next Level!
          </h1>
          <p className="text-office-brown-100 text-lg/6">
            Cloutera Hub delivers top-quality likes, followers, and comments to
            help you grow fast and look legit. Let your influence speak louder!
          </p>
        </div>

        <div className="rounded-20 bg-office-brown-900 flex w-full flex-col items-start gap-4 p-6">
          <p className="text-office-brown-75 text-base">
            Rayna has transformed the way our team approaches design. The sheer
            range of components and the seamless integration of the design
            system into our workflow have been game-changers. It&apos;s like
            having a toolkit filled with magic that accelerates our projects
            without compromising on quality.
          </p>

          <div className="flex items-center gap-3">
            <Image
              src="/images/avatar.png"
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full border-[1.5px] border-white bg-[#FFE7CC] object-cover object-center"
            />
            <div
              className={`flex flex-col items-start gap-1 ${instrumentSans.className}`}
            >
              <p className="text-sm/1 font-semibold text-white">
                Ariana Grande
              </p>
              <p className="text-office-brown-400 text-xs">
                Visual Designer, Google
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayoutContainer;
