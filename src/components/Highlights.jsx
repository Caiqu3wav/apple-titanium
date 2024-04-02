import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"

export default function Highlights() {
    useGSAP(() => {
        gsap.to("#title", { opacity: 1, y: 0 })
        gsap.to('.link', {opacity: 1, y: 0, duration: 1,
        stagger: 0.25})
    }, [])
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full commom-padding
    bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end
         justify-between"></div>
        <h1 id="title" className="section-heading">Get highlights.</h1>

        <div className="flex flex-wrap items-end gap-5">
            <p className="link">
                Watch the film
                <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
                Watch the event
                <img src={rightImg} alt="right" className="ml-2" />
            </p>
        </div>
      </div>
<VideoCarousel />
    </section>
  )
}
