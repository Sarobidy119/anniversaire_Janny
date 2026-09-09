import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { config } from "../config";
import "./MusicPlayer.css";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = new URL(config.musicSrc).pathname.split("/").filter(Boolean).pop();
  const youtubeSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1&playlist=${videoId}`
    : undefined;

  const toggle = () => setIsPlaying((playing) => !playing);

  return (
    <div className="music-player">
      <button
        className={`music-button ${isPlaying ? "playing" : ""}`}
        onClick={toggle}
        aria-label={isPlaying ? "Mettre la musique en pause" : "Lancer la musique d'anniversaire"}
      >
        {isPlaying ? <Pause size={20} strokeWidth={2} fill="currentColor" /> : <Play size={20} strokeWidth={2} fill="currentColor" />}
        {isPlaying && (
          <>
            <span className="pulse-ring" />
            <span className="pulse-ring delay" />
          </>
        )}
      </button>
      {isPlaying && youtubeSrc && (
        <iframe
          className="youtube-audio"
          src={youtubeSrc}
          title="Musique d'anniversaire"
          allow="autoplay; encrypted-media"
        />
      )}
    </div>
  );
}
