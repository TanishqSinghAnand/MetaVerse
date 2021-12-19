import {ByMoralis, useMoralis, useMoralisQuery} from 'react-moralis';
import SendMessage from './SendMessage';
import {useRef} from 'react';

function Messages() {
    const {user} = useMoralis();
    const endOfMessageRef = useRef(null);

    return (
      <div className="pb-56">
        <div className="my-5">
          <ByMoralis
            style={{ marginLeft: "auto", marginRight: "auto" }}
            variant="dark"
          />
        </div>

        <div>{/* All messages */}</div>
        <div className="flex justify-center">
          <SendMessage endOfMessagesRef={endOfMessageRef} />
        </div>
        <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
          <p>You're up to date {user.getUsername()} 🎉</p>
        </div>
      </div>
    );
}

export default Messages
