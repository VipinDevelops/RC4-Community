"use client"

import React, { useEffect, useState } from 'react';
import TwitchVideos from './components/TwitchVideos';
interface TwitchFetchDataProps {
  accessToken: string;
  clientId: string;
  videoId: number;
  sort: "time" | "trending" | "views";
  first?: number;
}

const TwitchFetchData: React.FC<TwitchFetchDataProps> = ({
  accessToken,
  clientId,
  videoId,
  sort,
  first,
}) => {
  const [idsOnly, setIdsOnly] = useState<string[]>([]);
  console.log(accessToken,clientId,videoId,sort,first)

  useEffect(() => {
    console.log("test1")
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.twitch.tv/helix/videos?id=${videoId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Client-Id": clientId,
            },
          }
        );
        
        console.log(response)
        if (response.ok) {
          const data = await response.json();

          const userID = data.data[0].user_id;

          const userResponse = await fetch(
            `https://api.twitch.tv/helix/videos?user_id=${userID}&sort=${sort}&first=${first}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Client-Id": clientId,
              },
            }
          );
          console.log("test3")

          if (userResponse.ok) {
            const userData = await userResponse.json();
            const idsOnly = userData.data.map((item: any) => item.id); 
            setIdsOnly(idsOnly);
          } else {
            console.error("Failed to fetch user video data");
          }
        } else {
          console.error("Failed to fetch video data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [accessToken, clientId, videoId, sort, first]);

  return (
    <TwitchVideos videos={idsOnly} />
  );  
};

export default TwitchFetchData;
