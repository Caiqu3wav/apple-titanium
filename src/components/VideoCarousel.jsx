import { useRef } from "react"
import { hightlightsSlides } from "../constants"
import { useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";

export default function VideoCarousel() {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  })

  const [loadedData, setLoadedData] = useState([];)
  const {isEnd, isLastVideo, startPlay, videoId,IsPlaying} = video;

  useEffect(() => {
      if(loadedData.length > 3) {
        if(!IsPlaying) {
          videoRef.current[videoId].pause();
        } else {
          startPlay && videoRef.current[videoId].play();
        }
      }
  }, [startPlay, videoId, IsPlaying, lodadedData])

  useEffect(() => {
      const currentProgress = 0;
      let span = videoSpanRef.current;

      if(span[videoId]){
        let anim = gsap.to(span[videoId], {
          onUpdate: () => {

          },

          onComplete: () => {

          }
        })
      }
  }, [videoId, startPlay])
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => {
            <div key={list.id} id="slider" className="sm:pr-20 pr-10">
                <div className="video-carousel_container">
                    <div className="w-full h-full flex-center rounded-3xl overflow-hidden
                    bg-black">
                        <video id="video"
                        playsInline={true}
                        preload="auto"
                        muted
                        ref={(el) => (videoRef.current[i] = el)}
                        onPlay={() => {
                          setVideo((prevVideo) => ({
                            ...prevVideo, IsPlaying: true
                          }))
                        }}>
                            <source src={list.video} type="video/mp4" />
                        </video>
                    </div>

                    <div className="absolute top-12 left-[5%]
                    z-10">
                        {list.textLists.map((text) => (
                            <p className="mf:text-2xl text-xl" key={text}
                            {...text}></p>
                        ))}
                    </div>
                </div>
            </div>
        })}
      </div>
    </>
  )
}
