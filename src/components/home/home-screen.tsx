import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen w-full sticky top-0">
      {/* HER */}
      <div className="relative flex-1">
        <Image
          src="/assets/her.svg"
          alt="Her"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* HIM */}
      <div className="relative flex-1">
        <Image
          src="/assets/him.svg"
          alt="Him"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </section>
  )
}
