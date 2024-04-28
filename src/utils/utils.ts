// Function to fetch a random video from a YouTube channel
export async function getRandomVideosFromChannel(
  channelId: string,
  apiKey: string,
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
    // Fetch channel's uploads playlist
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`,
    );
    const channelData = await channelResponse.json();
    const uploadsPlaylistId =
      channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // Fetch videos from the uploads playlist
    const playlistItemsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&key=${apiKey}`,
    );
    const playlistItemsData = await playlistItemsResponse.json();

    return Array.from(Array(5)).map(() => getVideo(playlistItemsData));
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Example usage
const channelId = "YOUR_CHANNEL_ID"; // Replace with your channel ID
const apiKey = "YOUR_API_KEY"; // Replace with your API key

getRandomVideosFromChannel(channelId, apiKey)
  .then((video) => {
    if (video) {
      console.log("got videos, ", video);
    } else {
      console.log("Failed to fetch a random video.");
    }
  })
  .catch((error) => console.error("Error:", error));
