import { useMoralis } from 'react-moralis'
import Avatar from './Avatar';
import TimeAgo from 'timeago-react'
function Message({message}) {
    const { user } = useMoralis();

    const isUserMessage = message.get("etherAddress") === user.get("ethAddress");
    console.log(isUserMessage);

    return (
      <div className={`flex items-end space-x-2 relative ${isUserMessage && "justify-end"}`}>
          <div className={`relative h-8 w-8 ${isUserMessage&&"order-last ml-2"}`}>
              <Avatar username={message.get("username")} />
          </div>
        <div
          className={`flex space-x-4 p-3 rounded-lg ${
            isUserMessage
              ? "rounded-br-none bg-green-500"
              : "rounded-bl-none bg-blue-500"
          }`}
        >
          <p>{message.get("message")}</p>
        </div>
        <TimeAgo className={`text-[10px] italic text-gray-400 ${isUserMessage && 'order-first pr-1'}`} datetime={message.createdAt}/>
        <p className={`absolute -bottom-5 text-sm ${isUserMessage ?"text-green-400":"text-blue-400"}`}>
            {message.get("username")}
        </p>
      </div>
    );
}

export default Message
