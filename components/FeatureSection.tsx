import Image from "next/image"

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">See What You Will Get With Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Development courses"
            description="Culpa non ut tempor qui nulla laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis do ullamco eiusmod officia magna ad id."
            icon="/placeholder.svg?height=150&width=150"
          />

          <FeatureCard
            title="Money saving services"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            icon="/placeholder.svg?height=150&width=150"
          />

          <FeatureCard
            title="Usability interface"
            description="Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Culpa non ex tempor qui nulla laborum."
            icon="/placeholder.svg?height=150&width=150"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-gray-50 rounded-3xl p-8 text-center">
      <div className="flex justify-center mb-6">
        <Image src={icon || "/placeholder.svg"} alt={title} width={150} height={150} className="w-32 h-32" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
