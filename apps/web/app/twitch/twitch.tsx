const TwitchFetch = (
  accessToken: string,
  clientId: string,
  videoId: number,
  sort: any,
  first: number
) => {
  // console.log(sort,first)

  let userID :string;
  const fetchVideoData = async () => {
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

      if (response.ok) {
        const data = await response.json();
        // console.log(data)
        userID = data.data[0].user_id // Log the video data
        
        const Userresponse = await fetch(
          `https://api.twitch.tv/helix/videos?user_id=${userID}&sort=${sort}&first=${first}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Client-Id": clientId,
            },
          }
        )
        if(response.ok){
          const userData = await Userresponse.json()
          const idsOnly = userData.data.map(item => item.id);
          console.log(idsOnly)
          return idsOnly;
        }


      } else {
        console.error("Failed to fetch video data");
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  fetchVideoData(); // Perform the fetch immediately

  // return [];
  // console.log('userid',userID)
};

export default TwitchFetch;


