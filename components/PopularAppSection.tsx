import Image from "next/image"

export default function PopularAppSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="bg-purple-50 rounded-full p-8 w-full aspect-square flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Popular App Illustration"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              The Most Popular
              <br />
              Application 2021
            </h2>

            <p className="mb-8 text-gray-600">
              Culpa non ex tempor qui nulla laborum.
              <br />
              Laboris culpa ea incididunt dolore ipsum.
            </p>

            <div className="space-y-6">
              <BenefitItem text="Est mollit aliqua quis ad sint nulla Lorem commodo reprehenderit." />
              <BenefitItem text="Tempor consectetur aliqua ante veniam excepturi ex do esse adipisicing id." />
              <BenefitItem text="Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id." />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1">
        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
        </div>
      </div>
      <p className="ml-4 text-gray-600">{text}</p>
    </div>
  )
}
