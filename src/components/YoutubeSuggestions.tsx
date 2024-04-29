import React, { useEffect } from "react";
import { getRandomVideosFromChannel } from "../utils/utils";

export default function YoutubeSuggestions() {
  useEffect(() => {
    getRandomVideosFromChannel(
      "UCcBAcvXQJBln18moeDpz4iQ",
      "AIzaSyBeZncS97cRZXfJibo08KY6LLb3gCkgxmw",
    );
  }, []);

  return <></>;
}
