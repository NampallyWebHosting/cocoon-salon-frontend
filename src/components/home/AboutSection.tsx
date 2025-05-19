'use client'

export const SalonLayout = () => {
    return (
        <section className="bg-neutral-100 py-10">
            <div className=" grid grid-cols-[320px_1fr] gap-10 p-10">
                {/* Left Side - Tall Image */}
                <div className="rounded-2xl bg-yellow-300 w-[320px] h-[568px]"></div>

                {/* Right Side Layout */}
                <div className="relative grid grid-cols-2 grid-rows-2 gap-6">
                    {/* Top-Left (Hair flip) */}
                    <div className="rounded-2xl bg-red-300 w-[315px] h-[280px] ml-[220px]"></div>

                    {/* Top-Right (Salon interior) */}
                    <div className="rounded-2xl bg-green-300 w-[437px] h-[199px] mt-[285px] ml-6"></div>

                    {/* Bottom (Guy with hand on head) */}
                    <div className="col-span-2 flex justify-center -ml-30 -mt-4">
                        <div className="rounded-2xl bg-blue-300 w-[204px] h-[280px]"></div>
                    </div>

                    {/* Text Block */}
                    <div className="absolute top-[350px] text-left z-20 font-bold text-[20px] leading-[28px] font-openSans">
                        <p>
                            Cocoon Salon is a vibrant hair studio where skilled <br />
                            stylists craft personalized looks. With a cozy atmosphere <br />
                            and modern decor, it’s the ideal spot for trendy cuts and <br />
                            stunning color transformations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
