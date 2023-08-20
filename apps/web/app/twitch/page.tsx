import Twitchauth from "./auth"

export default async function Home() {
    return (
        <>
            <h1 className="text-3xl mb-6 text-center text-white">Twitch Components</h1>
            {/* <auth/> */}

        <Twitchauth />
        </>
    )
}