// "use client"
import Twitchauth from "./AuthTwitch"
import TwitchVideos from "./components/TwitchVideos";

import TwitchFetchData from "./function";

import fetch from "./function";

export default async function Home() {
    
    
    const ids= ['1019997229', '1875752272', '1866399733'] 
    
    const clientId = process.env.TWITCH_CLIENT_ID as string;
    const videoId = 1902927436
    const accessToken = "bwi9okma0g3tdutj4yave0315rquic"
    


    return (
        <>
            <h1 className="text-3xl mb-6 text-center text-white">Twitch Components</h1>
                    
        {/* <Twitchauth></Twitchauth> */}
        <TwitchFetchData accessToken={accessToken} clientId={clientId} videoId={videoId} sort={"views"} first={4} ></TwitchFetchData>

        

        </>
    )
}