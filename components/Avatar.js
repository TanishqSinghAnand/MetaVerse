import { BigHead } from "@bigheads/core";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import { getRandomOptions } from "../utils/randomBigHead";

function Avatar({ username, logOutOnPress }) {
  const { user, logout } = useMoralis();
  return (
    <Image
      src={`https://avatars.dicebear.com/api/personas/${
        username || user.get("username")
      }.svg`}
      layout="fill"
      onClick={() => logOutOnPress && logout()}
      className=" rounded-full bg-black cursor-pointer hover:opacity-80 "
    />
  );
}

export default Avatar;
