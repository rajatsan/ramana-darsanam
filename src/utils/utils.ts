// Function to fetch a random video from a YouTube channel
export async function getRandomVideosFromChannel(
  channelId: string,
  apiKey: string,
  uploadsPlaylistId: string = "UUcBAcvXQJBln18moeDpz4iQ", // Playlist id for all uploads playlist
  count: number = 3,
) {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const getVideo = (playlistItemsData: any) => {
    // Randomly select a video from the playlist
    const randomIndex = Math.floor(
      Math.random() * playlistItemsData.items.length,
    );
    const randomVideo = playlistItemsData.items[randomIndex];

    // Extract video details
    const videoId = randomVideo.snippet.resourceId.videoId;
    const videoTitle = randomVideo.snippet.title;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    return { videoId, videoTitle, videoUrl };
  };

  try {
    // Fetch videos from the uploads playlist
    const playlistItemsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&key=${apiKey}`,
    );
    const playlistItemsData = await playlistItemsResponse.json();
    console.log("got data", playlistItemsData);

    return Array.from(Array(5)).map(() => getVideo(playlistItemsData));
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
