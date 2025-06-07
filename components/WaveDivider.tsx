export default function WaveDivider({ position }: { position: "top" | "bottom" }) {
    return (
      <div className={`w-full ${position === "top" ? "-mt-1" : "-mb-1"}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`w-full h-16 md:h-24 ${position === "top" ? "text-white" : "text-purple-700"}`}
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    )
  }
  