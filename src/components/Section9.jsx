import React from 'react'

function Section9() {
    const cateogry = ['https://s3-alpha-sig.figma.com/img/420c/e1f1/8aa0e9f01ba98ed0d63ddbc3c1862d1d?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZHedVvMK8b2vktR2X8Dkhfq6xwHMTVGrjGIyzmM4QUB5Xt08ScxHcSpoS1FXvTSWMvghBlK9bR0ltWLmahBff~ZLy4dqSucSX2lSanzw3rWchLfPDjty9ug3P5Yh5jUDbsT-hfw3LFQwfvGwRb~P8Dm44bjOBi-h8RVvwIwSLI8JkGmzvkincpMJX2F5Mak5xBMIT1Qs0eAeewEYZK9Ujp9CwTPoJ0rTqshIpqgAgGWawFaL~jtQ2f~Lfxo~HWMWp0nd8M5g32n-FlOh0aE6IyeP7D-d8eO3gx1erUrWc935mwU3p54pOTLh3k-i2iUJqU924U4J1Bo1FDDXk-JKTA__',
        'https://s3-alpha-sig.figma.com/img/f4b4/88a3/d82383952e937f64ec1a4f7cc6b2ae44?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pp-FcqWAe8vnnd3auLQJ9R9Zr-EdsRGuBXhh9mDk605epHj0zC0aTpgiNessW-RGK10Cm0MZS5K9LtZyh2BAxxGmFxgioGpOyFdXCapirNrdWTkqYAKS-GcyHI2Sa~3VkGZbumHhZ0cDbO~9KARhjR8AGWUjJfMCp7bQ2EjmXTGV0h2Yt42ySBt9S6YqiRkj2uqY2eGB4g9BToTuqYgmI0QIXe1biY9OYTo7Z31wyv~cCwMM~pTw0lrQlSurxGSRkIaEyDh7ENG6LELo9F0iX4SIxLyphVslaicoPrTkZKw1sXpIqDw~HlZrJCCoYZvE4g8zdxm3k7mVjECqkMWRjQ__',
        'https://s3-alpha-sig.figma.com/img/fbc4/68e5/3573b00914975119c8faceffee9aca81?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OFQXqMzjnhB3FXDig1ncxbCq6yIkK~7rlOiNgQuAg5VWEGLezX1IUWZKCUMydDbg5INHbmQxKlZLIBLf~sSB2UrPIbktJh1wre2ahHiuxc63SqXjfVxq~noRx0srIEHfDNn2P2oFh-5YrQnudJ-4MPxwxEgutv8gYItdY-AArvKRTHLihhiHQmZvWvx9Pj8kAc~SsJYpzWPL17Z3uOKr7WSsx4uAKWddlQ232eXMch~W~aMgkg3zs4fWnqJJu2bOwiUNdFhqbpoiBfR4GdayMqq8Hh8F1k2~DHS6LttbLdQ-eWlA8HhbChBEY2MiGLriy-m1iU6r23vUJ07BPNpyDg__']
    return (

        <div className='flex flex-col'>
            <div className="pl-16 font-custom text-blue md:text-4xl text-xl lg:text-4xl sm:text-2xl pb-4">
                Our blogs
            </div>
            <div className="flex flex-wrap justify-evenly">
                {
                    cateogry.map((item, index) => (
                        <div className="flex flex-col p-4 border m-4 border-superLightBlue rounded-md w-72">
                            <img src={item} alt="" className="" />
                            <h1 className="font-custom">Blog name - Lorem ipsum dolor sit amet, et varius et consectetur</h1>
                            <p className="">Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Section9
