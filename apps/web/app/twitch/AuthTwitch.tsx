'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import TwitchFetch from "./twitch";
import TwitchVideos from "./components/TwitchVideos";

interface CustomSession {
  accessToken: string; // Define accessToken property
  // Define other session properties here
}
type SortOption = "time" | "trending" | "views";

interface TwitchAuthProps {
  clientId: string;
  videoId: number;
  sort: SortOption;
  first: number;
}

const TwitchAuth = ({ clientId, videoId, sort, first }: TwitchAuthProps) => {
  const [accessToken, setAccessToken] = useState<string | undefined>();
  
  const { data: session } = useSession() as { data: CustomSession | null };
  
  useEffect(() => {
    if (session?.accessToken!=undefined ) {
        
      setAccessToken(session.accessToken);
    }
  }, [session]);

  // console.log("accessTokentype", typeof(accessToken));

  
  if (session && accessToken!=undefined) {
    const reponse = TwitchFetch(accessToken,clientId,videoId,sort,first);
   
    const ids= ['1019997229', '1875752272', '1866399733'] 
    return (
      <div>
        <TwitchVideos videos={ids} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          signIn();
        }}
      >
        Sign In
      </button>
    </div>
  );
};

export default TwitchAuth;
