'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";

interface CustomSession {
  accessToken: string; 
}


  const TwitchAuth = () => {
    const [accessToken, setAccessToken] = useState<string | undefined>();
    const [isCopied, setIsCopied] = useState(false);
    const { data: session } = useSession() as { data: CustomSession | null };
  
    useEffect(() => {
      if (session?.accessToken !== undefined) {
        setAccessToken(session.accessToken);
      }
    }, [session]);
  
    const handleCopyClick = () => {
      navigator.clipboard.writeText(accessToken)
        .then(() => setIsCopied(true))
        .catch(error => console.error('Copy failed:', error));
  
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    };
  
    if (session && accessToken !== undefined) {
      return (
        <div className="flex flex-col items-center mt-10">
          <p className="text-lg mb-6 text-center text-white ">{accessToken}</p>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              isCopied ? 'bg-green-500' : ''
            }`}
            onClick={handleCopyClick}
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded"
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
