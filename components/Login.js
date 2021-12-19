import Image from "next/image";
import { useMoralis } from "react-moralis";
import configLogin from "./ParticleConfig";
import Particles from "react-tsparticles";

function Login() {
  const { authenticate, isAuthenticating, isLoggingOut } = useMoralis();

  if (isAuthenticating && !isLoggingOut){
    return (
      <div className="bg-[#000000] relative  w-screen h-screen">
        <Particles
          className="fixed w-full z-10 bg-opacity-0"
          id="tsparticles"
          options={configLogin}
        />
        <div className="w-screen absolute h-screen z-50  flex flex-col items-center justify-center">
          <h1 class="visually-hidden z-50 text-xl text-white md:text-xl font-bold font-serif lg:text-2xl">
            Loggin you into the Metaverse{" "}
          </h1>
          <img
            className="z-50 w-50 h-40"
            // src="https://miro.medium.com/max/700/1*e_Loq49BI4WmN7o9ItTADg.gif"
            src="https://i.ibb.co/wzRtgkv/output-onlinegiftools.gif"
            alt="Loading spinner"
            // src="/loading.gif"
          />
        </div>
        <div className="w-full h-screen -z-20">
          <Image
            src="https://wallpaperaccess.com/full/6043682.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    );
  }
  if (isLoggingOut){
    return (
      <div className="bg-[#000000] relative  w-screen h-screen">
        <Particles
          className="fixed w-full z-10 bg-opacity-0"
          id="tsparticles"
          options={configLogin}
        />
        <div className="w-screen absolute h-screen z-50  flex flex-col items-center justify-center">
          <h1 class="visually-hidden z-50 text-xl text-white md:text-xl font-bold font-serif lg:text-2xl">
            Loggin you out of the Metaverse{" "}
          </h1>
          <img
            className="z-50 w-50 h-40"
            // src="https://miro.medium.com/max/700/1*e_Loq49BI4WmN7o9ItTADg.gif"
            src="https://i.ibb.co/wzRtgkv/output-onlinegiftools.gif"
            alt="Loading spinner"
            // src="/loading.gif"
          />
        </div>
        <div className="w-full h-screen -z-20">
          <Image
            src="https://wallpaperaccess.com/full/6043682.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    );
  }
    return (
      <div className="bg-black relative text-white">
        <Particles
          className="fixed w-full z-10 bg-opacity-0"
          id="tsparticles"
          options={configLogin}
        />
        <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4 overflow-y-hidden">
          <Image
            src="https://tanishqsinghanand.github.io/Techny-Teams/img/image.jpeg"
            className="object-cover rounded-full"
            height={200}
            width={200}
          />

          <button
            onClick={authenticate}
            className="bg-[#1B1B1B] rounded-lg p-5 font-bold animate-pulse"
          >
            Login to the Metaverse
          </button>
        </div>

        <div className="w-full h-screen -z-20">
          <Image
            src="https://links.papareact.com/55n"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    );
}

export default Login;
