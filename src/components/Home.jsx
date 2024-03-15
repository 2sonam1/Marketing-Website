import React from 'react'
import FloatingButton from './FloatingButton'
//lg:w-80 md:w-60 sm:w-40 w-36
function Home() {
    return (
        <>
            <section className="">

                <div className='pt-24 flex flex-wrap justify-evenly items-center'>
                    <div className="flex flex-col justify-center items-center text-blue lg:w-96 md:w-72 sm:w-64 w-60">
                        <div className="font-custom lg:text-2xl md:text-lg sm:text-base flex justify-center items-center ">
                            <div className="">Hobbies</div>
                            <img src="https://s3-alpha-sig.figma.com/img/65b9/a6ba/7233288237fb3ab5287a30c1a40db766?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZiaGqzG9YLW7n95iP5807jtTp3TDmTAV3bdkzsOa5WlxOsMVK~Joba23SXBUJkyHc6JvnFmssxYEE~jaFQvDhyhPG30RdP2p5HcPiP2nK9AwsoTAtdAIJpjmIjY46Wqgeyp3y8i1jTchBQ4uP-o7jhpuwOFFbeaoIsgwr0DSTcdE8CejArpeh-trLsRVLXp9oTFLjDRCcCY4nJEWVRfA76Syp1ztxh-2C1XTwh~mCYnTHIqosNSDMTFlPcQl-PtDjb7q3Cp~BxHIwTyYJ3ORJUPdrW9U4I5kBFEo-8PEsyaKhr74SRppQ1T2zGLODEDKShFFN27XyR7uuLy9bbLdg__" alt="" className="w-8" />
                            <div className="">Happiness</div>
                            <div className="flex justify-center items-center ">
                                <div className="absolute text-white text-xs">@</div>
                                <img src="https://s3-alpha-sig.figma.com/img/65b9/a6ba/7233288237fb3ab5287a30c1a40db766?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZiaGqzG9YLW7n95iP5807jtTp3TDmTAV3bdkzsOa5WlxOsMVK~Joba23SXBUJkyHc6JvnFmssxYEE~jaFQvDhyhPG30RdP2p5HcPiP2nK9AwsoTAtdAIJpjmIjY46Wqgeyp3y8i1jTchBQ4uP-o7jhpuwOFFbeaoIsgwr0DSTcdE8CejArpeh-trLsRVLXp9oTFLjDRCcCY4nJEWVRfA76Syp1ztxh-2C1XTwh~mCYnTHIqosNSDMTFlPcQl-PtDjb7q3Cp~BxHIwTyYJ3ORJUPdrW9U4I5kBFEo-8PEsyaKhr74SRppQ1T2zGLODEDKShFFN27XyR7uuLy9bbLdg__" alt="" className="w-8" />
                            </div>
                            <div className="">Home</div>
                        </div>
                        <div className="lg:text-base md:text-sm sm:text-xs text-xs p-1 lg:p-5 md:p-2 sm:p-0">
                            <div className="font-Nunito flex justify-center items-center">A Nordic startup which brings incredibly interesting hobbies from around the world to people of all ages.</div>

                        </div>
                    </div>
                    <div className="flex justify-center items-center sm:w-2/5 w-96">
                        <img src="1st.png" alt="" className="" />
                    </div>
                </div>
                <FloatingButton className='right-0' />
            </section>

        </>
    )
}
//lg:w-2/5 md:w-2/4 sm:w-2/5 w-2/5
export default Home
