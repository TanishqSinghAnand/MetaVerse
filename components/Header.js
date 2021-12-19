import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
  const { user } = useMoralis();

  return (
    // <div className="text-[#0D8B6A]">
    <div className="sticky lg:p-5 top-0  z-50  shadow-sm text-[#000080] ">
      <div className="grid border-b-2 border-[#000090] bg-[#0C7E6F] grid-cols-5 md:grid-cols-6 items-end md:items-center">
        <div className="relative h-20 w-20 mx-auto hidden md:inline-grid ">
          <Image
            src="https://tanishqsinghanand.github.io/Techny-Teams/img/image.jpeg"
            className="rounded-full object-cover "
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="col-span-4 text-left md:text-center">
          <div className="h-48 w-48 relative md:mx-auto border-[#000080] border-8 rounded-full">
            {/* Avatar */}
            <Avatar logOutOnPress />
          </div>

          {/* Welcome Message */}
          <h1 className="tex-3xl mb-5  ">
            Welcome to the ultimate <b>METAVERSE</b>
          </h1>

          {/* Username */}
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          {/* Change Username component */}
          <ChangeUserName className="p-2" />
        </div>
      </div>
    </div>
  );
}

export default Header;
