import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-white">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            <span className="text-xs font-medium tracking-wider uppercase">Great Application</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Work Faster With
            <br />
            Powerful Tools
          </h1>

          <p className="mb-8 opacity-80 max-w-md">
            Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.
          </p>

          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-full px-8 py-6">
            Learn More
          </Button>
        </div>

        <div className="relative">
          <div className="relative z-10 transform translate-y-4">
            <Image
              src="/placeholder.svg?height=600&width=300"
              alt="Upland App Screenshot"
              width={300}
              height={600}
              className="mx-auto"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-blue-500 rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-green-500 rounded-full opacity-70 animate-pulse delay-300"></div>
          <div className="absolute bottom-1/3 right-0 w-8 h-8 bg-orange-500 rounded-full opacity-70 animate-pulse delay-700"></div>

          {/* Decorative leaves */}
          <div className="absolute -bottom-10 -left-10 w-20 h-20 text-purple-300 opacity-70">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M21,4c0,0-3-1-9,2c-6,3-9,9-9,9s3-2,6-3c3-1,6-1,6-1s-3,4-6,7c-3,3-6,3-6,3s3,1,9-2c6-3,9-9,9-9s-3,2-6,3c-3,1-6,1-6,1s3-4,6-7C18,4,21,4,21,4z" />
            </svg>
          </div>
          <div className="absolute top-10 -right-10 w-16 h-16 text-purple-300 opacity-70 transform rotate-45">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M21,4c0,0-3-1-9,2c-6,3-9,9-9,9s3-2,6-3c3-1,6-1,6-1s-3,4-6,7c-3,3-6,3-6,3s3,1,9-2c6-3,9-9,9-9s-3,2-6,3c-3,1-6,1-6,1s3-4,6-7C18,4,21,4,21,4z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
