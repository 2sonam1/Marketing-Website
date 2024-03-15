import React, { useState } from 'react'
import { CgLoadbar } from "react-icons/cg";
import './Section3.css'
import ProgressBar from "@ramonak/react-progress-bar";

function Section3() {
    const items = ['https://s3-alpha-sig.figma.com/img/3020/d000/0550698311dd227289865e844934f28f?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGZIstw8Mw22ydlH-yrGvrX8yKxvNpNzr41ORUQm8sxkTB4m783BVFOsO4G6noQItg4Idv6yeDsCukG-z~MXEHFIqC0e9XF4c4NZmx43inGjalcMbOLl0~7cf0Mh0F3x7y48hMsNyksSVF68T2Sr7WxajGuj-1mJWCHA4U8iuZUQrGWGnHklt-e-M8j9svIN95muFk11yI1xF5ASu5GrZA-PyHZWtYh8DfiPKE-j0rSsrndOsd2PpnCRHSVh3GVCJj72DegKV1xa4Ij5uAut0mTHjpbeM-3f8I7fiodUzsjmE0WbOwnPPrjX0PEoHo8BiFmmWrQ1sEndT5gY-RNJ2Q__',
        'https://s3-alpha-sig.figma.com/img/a15f/2ff4/5dbe820655624aed8bbc00c3a2516532?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D7JZ-L8AjE4k0GhRK8jjHatGn51lZf~vGP6bpMQlkNz-7nUYadSa5uf5HAS3MyIPku1q1s7f~9~1iDGcy9IAM1YBPXh7oB8kv-9u5Dkz4Q5tycaYtYwdV8tkGFrVi-d~2DfghKfK7d82SSiSMJKiLI19ciRrXbGL0ltbor5KMT2mn6l3trK53IuKwwz52c4XVwRjHFGQMS0lh6KSyvC6bZW76TJKBchBu5jrE5FA3yGmosbVZ177VuYXkhBwgZh10GGsaJ8c-T2S5CAcRkfPw4EJINHbM~RTt7k~5Ovy4tRy24W7j22wTIHuBARZmu3xu5GVVmeV3bI2GobHMDjtKg__',
        'https://s3-alpha-sig.figma.com/img/deb6/7f58/1a16c92904fd57f7caf12c1799d74ef2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W9dj916num3OViNOGE~CQho9We2s3diZGstoIMZnsloIbNOACec-xVg8GdRMuglz4OaDEjff6cROLEsik7O7Rb-P2nkBV2cRA6Lvle9MIUMqYSUB-Djl2I~UpTWmovzfcEt9LuPkg4qU7xfmOd4bhjqdoGh87NcT72ZDUF0wACWjGy0ug9fsWYdyK6owsCnQSzUTPjalkahzqkIyFyU6Zj~VKQ5Xy7VOJQ798AQXeTtzViXz4j4UxWyWdEtHjuo2QTuRFh3wfsP3wsdI0dOCaTVu3dlx2FuhBxxQ-nJJU4WV04vw3TW8M1vUZNw-EeTYeL5r5g-FsYTC-F2fdT3NIg__',
        'https://s3-alpha-sig.figma.com/img/359d/defc/fbfb1f85ac11112c0107ff0e1ef87491?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QXmzm5bG5LEN0EXVe95zFlJTylEE1pN21cuKN-bQfz-C6rDYkadDj0xayTJJYNPCd18AieNiR67Nm1ohdykcUDzRzY1ZdA-m2HcVV9k2SNjVQdqKzpxEQ1ER-0HziGLPfx4QbinW3G5dJuEjWThEO9QDR9LXlIMfhVTTQ73NCKhdn2ajpulZUVcUvmVLhDHQC3c2n9aZarH7apOUdjgNguOZWmR-oMoPbmem7xaDiT4P2sMt2LseczWUk5NMz~BaecCL~buk7k-mwsJJkrpFP4KyOhiIVrHbteI9eRAppqxpm57VIE6atMLcnVlGpfx1iut718X~7PyuuEoN95MtNQ__',
        'https://s3-alpha-sig.figma.com/img/bde0/7fa4/d9faedcce0afb7daac558d7ddbb32ce4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GIL72R5~u8q4pdzHSV3Ze2PcPatT2y4MT-MTXacSNemWm10p4JI4eShzylEVyC79iIjO3xb-pG1b9Obo~VZfjEG7-HdXUQU85k7k1qjDUM3YUUy01fvZK9J005VjiWn~AD9ARahJARuqNxg2fOR3yg~JUG6slUzT5Q~~cKODrR43Z5yyjbOvUV0db3PAzee3EGfCYD6cclyi56UKURExpSrD9o28Gqw6y7wByT-PrVbdEN1Q7Ek9dhg-Ch~HLJoFtLKuwoBs4YlzkuTvo3reikaKwctJoa-iewKViC3IC9JETuQvdYsWEahy6d-MfUeqqZZsL0jfh-Wf9i3NgIe~Ng__',
        'https://s3-alpha-sig.figma.com/img/2dc3/050e/866de69ff141055217de58126553e80b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GOb-f02L9cm5nklSduRPa4u~RZqdyMzt2oAbeCNCB2xssvUI6ag4a5b7lLJEiqsijHhSzM7W6TTX0crncEl5BWmv4p4DGzmYe1k-eoJKkiSlZ136lKxCvRKCKVgO1g0yp6dWkdjE3NiPSjbIkphDTTe8ngYIcxXhb1Cx7uHEwg-JYOyqFZpS~-E5rwkqmfR0NSkljJOrEmBHM85kg1qNRQrCKqT5oEIJELydHlBhwz64ZRBxTnxH6FXLtYaB0VybVF8pBlDKhJDbDbV~jW1JiSmOV4MfYywq3YM-vYQC53y2VZmoijpYOJQkm4goIQ4F~XpMQkcz7WY61qU~1UtsjA__',
        'https://s3-alpha-sig.figma.com/img/e047/bc8a/b32cade874b01ca5eaa5d096ea6cf527?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YPHH0x0SMEgu3D7CuX2apZYulJGSVXIa6udQ01ml8ZM3wTvQYBdM0hORuBKaCXVp0Fr53fX7ZmnKGst267YGoNPWbwBHH9HvEL5~lvqTdBQ-per27niu6xzmvKXLsB92zJQZO3oNfus6Peg5pKVfl0pE6~skumLrgq60Y1kn8sep7MYdlBJe7mXBvDgZZYhw3yqqE8PW7ubznFsuzJaAbCjnxJ2BItKKFp9T47rdxuSFSjlb0Ius64P-PVHYyZ7gqKBXQvvb7f1zuWYNypOeB6TLl7fNrHcoyW3lFK~s6iqfca3bFby9e0lIS6rRLbOhgNqLWSGihemG1I9CHiJZyQ__',
        'https://s3-alpha-sig.figma.com/img/82bb/d13c/c863ea77d22c1da180ed84f135d5d444?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R5cOraMJ2suaEfg4GUsL~Ds9t-urECLQM2gl~niFRRc0Yxri7zVvDD7UN9o3wazmzxhupViI-hExSElzXXxkV88OnTBmF4uQ8y2loMo0d4QXytJZ-e3XX5-C~GNj6f4xJfGGzG45gml-C6jXje0Nk7P6ic12iLq4HQ1gwcaI-RrJzjMJyz6YWPFxiGPfIMR~Y-pDPIt43ZWl30F5KYwrnc3uNmZHSjxnMrPuSobFe4aHEUbrGQ2fPKyrRrmNuvH9j7vibax2XUQMtwNPeCq68au0dA1c0ZB~zNXXyYKy2CWTyTSzXqmQobj2HRlbAnszQHnl~N3caMMnvs7NTdNa2Q__']

    const names = ['Language', 'Cooking', 'Music', 'Arts & Craft', 'Yoga', 'Academics', 'Back to Roots', 'Funteresting']

    const [hoveredIndex, setHoveredIndex] = useState(null);


    return (
        <div className="flex flex-col">
            <div className="pl-16 font-custom text-blue md:text-4xl text-xl lg:text-4xl sm:text-2xl pb-4">Browse by category</div>
            <div className='flex flex-wrap justify-evenly'>
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center p-12">
                        <button className="buttonTag"><img src={item} alt="" className="w-52 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl " onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)} /></button>
                        <h1 className={`pt-2 ${hoveredIndex === index ? 'text-blue' : ''} font-custom`}>{names[index]}</h1>
                        <p className={`text-lg font-bold ${hoveredIndex === index ? 'text-blue' : 'text-pro'}`}>________  </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section3
