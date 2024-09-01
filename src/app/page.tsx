export default function HomePage() {
    return <section className="relative p-0" aria-label="showcasing video optimisation">
        <video
            tabIndex={-1}
            aria-label="background video"
            id="video-player"
            width={1280}
            height={720}
            playsInline={true}
            loop={true}
            muted={true}
            autoPlay={true}
            className="aspect-video h-dvh w-full object-cover"
        >
            <source src="/assets/videos/video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    </section>
}