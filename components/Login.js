import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {

  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4 overflow-y-hidden">
        <Image
          src="https://tanishqsinghanand.github.io/Techny-Teams/img/image.jpeg"
          className="object-cover rounded-full"
          height={200}
          width={200}
        />

        <button onClick={authenticate} className="bg-[#1B1B1B] rounded-lg p-5 font-bold animate-pulse">Login to the Metaverse</button>
      </div>

      <div className="w-full h-screen">
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
