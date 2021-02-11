import React, { useRef, useState, useEffect, memo, useMemo } from 'react'
import videojs from 'video.js'
import cn from 'classnames'

interface Props {
  url: string
  posterUrl?: string
  width?: number
  height?: number
  className?: string | string[] | Record<string, any>
  playerClassName?: string | string[] | Record<string, any>
  fullHeightVideo?: boolean
}

/* eslint-disable react/display-name */
export const VideoPlayer: React.FC<Props> = memo((props) => {
  const {
    url,
    posterUrl,
    className = 'player-wrapper',
    playerClassName,
    width = 120,
    height = 120,
    fullHeightVideo = true,
  } = props

  const videoPlayerRef = useRef(null) // Instead of ID
  const playerBoxRef = useRef<any>(null)
  const [currentTime, setCurrentTime] = useState(null)
  const controlBarNode = useRef(null)

  const videoJSOptions = useMemo(
    () => ({
      // autoplay: "muted",
      controls: true,
      userActions: { hotkeys: true },
      playbackRates: [0.5, 1, 1.5, 2],
      preload: 'none',
      // poster: posterUrl,
      width: width,
      height: height,
      poster: posterUrl,
      sources: [
        {
          src: url,
          type: 'video/mp4',
        },
      ],
    }),
    [width, height, posterUrl, url],
  )

  useEffect(() => {
    if (videoPlayerRef) {
      const player: any = videojs(
        videoPlayerRef.current,
        videoJSOptions,
        () => {
          // player.src(videoSrc);
          player.on('ended', () => {
            console.log('ended')
          })
          player.on('timeupdate', () => {
            // setCurrentTime(player.currentTime())
          })
          // console.log('Player Ready')
          controlBarNode.current = playerBoxRef?.current?.getElementsByClassName(
            'vjs-control-bar',
          )[0]
        },
      )
    }
  }, [])

  return (
    <div className={cn([className])} ref={playerBoxRef}>
      <video
        ref={videoPlayerRef}
        className={cn(['video-js ', playerClassName])}
      />
    </div>
  )
})
