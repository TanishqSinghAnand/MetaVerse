import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import { useRef } from "react";
import Message from "./Message";

function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const MINS_DURATION = 300;

  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 100 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );
  console.log(data);
  return (
    <div className="pb-24 lg:m-24">
      <div className="my-5">
        <ByMoralis
          style={{ marginLeft: "auto", marginRight: "auto" }}
          variant="dark"
        />
      </div>

      <div className="space-y-10 p-4 max-h-auto">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()} 🎉</p>
      </div>
    </div>
  );
}

export default Messages;
