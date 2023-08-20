import Twitchauth from "./AuthTwitch"
import TwitchVideos from "./components/TwitchVideos";
export default async function Home() {
    
    const clientId = process.env.TWITCH_CLIENT_ID as string;
    // console.log(clientId)
    const videoId = 1807574814

    const ids= ['1019997229', '1875752272', '1866399733'] 

    return (
        <>
            <h1 className="text-3xl mb-6 text-center text-white">Twitch Components</h1>
            {/* <auth/> */}

        <Twitchauth  clientId={clientId} videoId={videoId} sort={"views"} first={3}/>
        

         {/* <TwitchVideos videos={ids}/> */}
        </>
    )
}