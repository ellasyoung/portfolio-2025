import { useEffect, useRef, useState } from "react";
import {Container, Title, Text, SongInfo, SongCont, AblumCover, IconButton, ProgressContainer, ProgressFilled, ProgressThumb, Row} from "./PlaySongElements";
import albumCover from "../../../assets/images/melodrama-album-cover.png";
import playButton from "../../../assets/icons/play-button.png";
import pauseButton from "../../../assets/icons/pause-button.png";

const YT_VIDEO_ID = "dMK_npDG12Q";

const PlaySong = () => {
    const playerRef = useRef(null);
    const playerElId = useRef(`yt-player-${Math.random().toString(36).slice(2)}`);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isScrubbing, setIsScrubbing] = useState(false);
    const [scrubTime, setScrubTime] = useState(0);
    const isScrubbingRef = useRef(false);
    const seekTimeoutRef = useRef(null);

    useEffect(() => {
        const ensureYTScript = () =>
            new Promise((resolve) => {
                if (window.YT && window.YT.Player) {
                    resolve();
                    return;
                }
                const existing = document.getElementById("youtube-iframe-api");
                if (existing) {
                    const check = () => {
                        if (window.YT && window.YT.Player) resolve();
                        else setTimeout(check, 50);
                    };
                    check();
                    return;
                }
                const tag = document.createElement("script");
                tag.id = "youtube-iframe-api";
                tag.src = "https://www.youtube.com/iframe_api";
                document.body.appendChild(tag);
                window.onYouTubeIframeAPIReady = () => resolve();
            });

        let isMounted = true;
        ensureYTScript().then(() => {
            if (!isMounted) return;
            playerRef.current = new window.YT.Player(playerElId.current, {
                videoId: YT_VIDEO_ID,
                playerVars: {
                    autoplay: 0,
                    rel: 0,
                    modestbranding: 1,
                    controls: 0,
                    origin: window.location.origin,
                },
                events: {
                    onReady: () => {
                        setIsReady(true);
                        try {
                            const d = playerRef.current?.getDuration?.();
                            if (typeof d === "number" && isFinite(d)) setDuration(d);
                        } catch {}
                    },
                    onStateChange: (e) => {
                        const YTState = window.YT?.PlayerState;
                        if (!YTState) return;
                        if (isScrubbingRef.current) return;
                        if (e.data === YTState.PLAYING) setIsPlaying(true);
                        else if (
                            e.data === YTState.PAUSED ||
                            e.data === YTState.ENDED ||
                            e.data === YTState.BUFFERING ||
                            e.data === YTState.CUED
                        )
                            setIsPlaying(false);
                        try {
                            const d = playerRef.current?.getDuration?.();
                            if (typeof d === "number" && isFinite(d)) setDuration(d);
                        } catch {}
                    },
                },
            });
        });

        return () => {
            isMounted = false;
            if (seekTimeoutRef.current) {
                clearTimeout(seekTimeoutRef.current);
            }
            try {
                playerRef.current?.destroy?.();
            } catch {}
        };
    }, []);

    useEffect(() => {
        if (!isReady) return;
        const interval = setInterval(() => {
            if (isScrubbingRef.current) return;
            try {
                const ct = playerRef.current?.getCurrentTime?.();
                if (typeof ct === "number" && isFinite(ct)) setCurrentTime(ct);
                const d = playerRef.current?.getDuration?.();
                if (typeof d === "number" && isFinite(d)) setDuration(d);
            } catch {}
        }, 250);
        return () => clearInterval(interval);
    }, [isReady]);

    const handleProgressClick = (e) => {
        if (!isReady || !playerRef.current || !duration) return;
        
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percentage = clickX / rect.width;
        const newTime = Math.max(0, Math.min(duration, percentage * duration));
        
        try {
            playerRef.current.seekTo(newTime, true);
        } catch {}
    };

    const handleProgressMouseDown = (e) => {
        if (!isReady || !duration) return;
        
        setIsScrubbing(true);
        isScrubbingRef.current = true;
        const container = e.currentTarget;
        const rect = container.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percentage = clickX / rect.width;
        const newTime = Math.max(0, Math.min(duration, percentage * duration));
        setScrubTime(newTime);

        const handleMouseMove = (moveEvent) => {
            const moveRect = container.getBoundingClientRect();
            const moveX = moveEvent.clientX - moveRect.left;
            const movePercentage = Math.max(0, Math.min(1, moveX / moveRect.width));
            const moveTime = movePercentage * duration;
            setScrubTime(moveTime);
        };

        const handleMouseUp = () => {
            if (!playerRef.current) {
                setIsScrubbing(false);
                isScrubbingRef.current = false;
                return;
            }

            if (seekTimeoutRef.current) {
                clearTimeout(seekTimeoutRef.current);
            }

            try {
                playerRef.current.seekTo(scrubTime, true);
                setCurrentTime(scrubTime);
            } catch {}
            
            setIsScrubbing(false);
            isScrubbingRef.current = false;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleToggle = () => {
        if (!isReady || !playerRef.current) return;
        if (isPlaying) playerRef.current.pauseVideo();
        else playerRef.current.playVideo();
    };

    return (
        <Container>
            <AblumCover>
                <img src={albumCover} alt="Album Cover" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px'}} />
            </AblumCover>
            <SongInfo>
                <Text className="currlisten">currently listening to...</Text>
                <SongCont>
                    <Row>
                        <IconButton onClick={handleToggle} aria-label={isPlaying ? "Pause" : "Play"}>
                            <img src={isPlaying ? pauseButton : playButton} alt={isPlaying ? "Pause" : "Play"} style={{height: '25px'}} />
                        </IconButton>
                        <Title>green light</Title>
                        <Text className="italics">by lorde</Text>
                    </Row>
                    <Row>
                        <ProgressContainer
                            onClick={handleProgressClick}
                            onMouseDown={handleProgressMouseDown}
                            aria-label="Seek"
                            role="slider"
                            aria-valuemin={0}
                            aria-valuemax={duration || 0}
                            aria-valuenow={isScrubbing ? scrubTime : Math.min(currentTime, duration || 0)}
                        >
                            <ProgressFilled
                                style={{
                                    width: `${duration > 0 ? ((isScrubbing ? scrubTime : currentTime) / duration) * 100 : 0}%`
                                }}
                            />
                            <ProgressThumb
                                style={{
                                    left: `${duration > 0 ? ((isScrubbing ? scrubTime : currentTime) / duration) * 100 : 0}%`
                                }}
                            />
                        </ProgressContainer>
                    </Row>
                </SongCont>
            </SongInfo>
            <div id={playerElId.current} style={{ display: 'none' }} />
        </Container>
    );
};

export default PlaySong;