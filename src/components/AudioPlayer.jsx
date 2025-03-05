import React, { useRef, useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
//import './main.css';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  // Playlist with 8 track URLs (replace placeholders with your actual URLs)
  const tracks = [
    "https://res.cloudinary.com/dtvecsd0q/video/upload/v1740790841/1_hour_of_aesthetic_calm_lofi_music_chill_4_p5mjqn.mp3",
    "https://res.cloudinary.com/dtvecsd0q/video/upload/v1740790674/1_Hour_Lofi_Cat_Relax_with_my_cat_-_Sleep_Relax_Study_Chill_4_qqgaut.mp3",
    "https://res.cloudinary.com/dtvecsd0q/video/upload/v1739497734/Seoul_City_View_-_chill___lofi_hiphop_beats_to_sleep_relax_study_to___%E1%84%85%E1%85%A9%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5_%E1%84%89%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AF_%E1%84%89%E1%85%B5%E1%84%90%E1%85%B5_%E1%84%8B%E1%85%A3%E1%84%80%E1%85%A7%E1%86%BC_%E1%84%80%E1%85%A1%E1%86%B7%E1%84%89%E1%85%A1%E1%86%BC_%E1%84%82%E1%85%A6%E1%84%8B%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B5%E1%84%90%E1%85%B5_4_eizdpn.mp3",
    "https://res.cloudinary.com/dtvecsd0q/video/upload/v1739497428/comfort_zone._4_mvgogu.mp3",
    "https://res.cloudinary.com/dtvecsd0q/video/upload/v1739498833/Just_wanna_stay_here_forever_lofi_hip_hop_mix_4_waxyif.mp3",
    "https://res.cloudinary.com/dtvecsd0q/video/upload/v1739496827/SNOWING_IN_%EF%BC%AF%EF%BC%B3%EF%BC%A1%EF%BC%AB%EF%BC%A1_Lofi_Hip_Hop_4_dwjuaw.mp3",
    "https://res.cloudinary.com/dtvecsd0q/video/upload/v1739496795/Chill_Work_Music_chill_lo-fi_hip_hop_beats_4_soqp92.mp3",
    "https://res.cloudinary.com/dtvecsd0q/video/upload/v1739496721/Lofi_Beats_Mix_chill_lo-fi_hip_hop_beats_4_jvhske.mp3"
  ];

  // Play / Pause functionality
  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  // Rewind current track by 5 seconds
  const handleRewindTime = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 5);
    }
  };

  // Fast forward current track by 5 seconds
  const handleForwardTime = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = audioRef.current.currentTime + 5;
    }
  };

  // Switch to previous track in the playlist
  const handlePreviousTrack = () => {
    setTrackIndex((prevIndex) => (prevIndex === 0 ? tracks.length - 1 : prevIndex - 1));
    setIsPlaying(false);
  };

  // Switch to next track in the playlist
  const handleNextTrack = () => {
    setTrackIndex((prevIndex) => (prevIndex === tracks.length - 1 ? 0 : prevIndex + 1));
    setIsPlaying(false);
  };

  // When trackIndex changes, load and optionally auto-play the new track
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      // Auto-play the new track if the player was already playing.
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [trackIndex]);

  return (
    <div className="audio-player">
      <audio 
        ref={audioRef} 
        // Use the current track from the playlist.
        src={tracks[trackIndex]} 
        onEnded={handleNextTrack}
      />
      {/* Track switching controls */}
      <IconButton onClick={handlePreviousTrack} aria-label="previous track">
        <SkipPreviousIcon />
      </IconButton>
      {/* Time rewind */}
      <IconButton onClick={handleRewindTime} aria-label="rewind 5 sec">
        <FastRewindIcon />
      </IconButton>
      {/* Play / Pause */}
      <IconButton onClick={handlePlayPause} aria-label="play/pause">
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      {/* Time forward */}
      <IconButton onClick={handleForwardTime} aria-label="forward 5 sec">
        <FastForwardIcon />
      </IconButton>
      <IconButton onClick={handleNextTrack} aria-label="next track">
        <SkipNextIcon />
      </IconButton>
    </div>
  );
};

export default AudioPlayer;