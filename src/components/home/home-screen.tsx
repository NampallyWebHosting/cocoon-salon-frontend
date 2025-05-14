import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen w-full">
      {/* HER */}
      <div className="relative flex-1">
        <Image
          src="/assets/Her image_homepage.svg"
          alt="Her"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-30 left-1/2 -translate-x-1/2  text-black font-normal text-3xl leading-9">
          HER
        </div>
      </div>

      {/* HIM */}
      <div className="relative flex-1">
        <Image
          src="/assets/Him image_homepage.svg"
          alt="Him"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-30 left-1/2 -translate-x-1/2  text-white font-normal text-3xl leading-9">
          HIM
        </div>
      </div>
    </section>
  )
}
