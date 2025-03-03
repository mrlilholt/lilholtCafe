import React from 'react';

const YouTubePlayer = ({ playlistId }) => {
    return (
        <div className="youtube-player">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                title="YouTube Playlist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubePlayer;