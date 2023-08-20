"use client"

import { signIn ,signOut,useSession} from "next-auth/react"

const Twitchauth = ()=>{

    const { data } = useSession()

    console.log(data)


    if(data){
        return(
            <div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{signOut()}} > Sing Out</button>
                
            </div>
        )
    }

    return (
        <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{signIn()}} > Sing In</button>
        
    </div>
    )

}

export default Twitchauth;