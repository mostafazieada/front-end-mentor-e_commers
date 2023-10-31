import { useState } from "react"
import PHOTOS from "../../../utilities/photos"
import Button from "./navigation-btn"

export default function PopupGallery({ setIsPhotoOpen, photos }) {

    const [currentPhoto, setCurrentPhoto] = useState(0)

    const prev = () => {
        currentPhoto > 0
            ? setCurrentPhoto(prev => prev - 1)
            : null
    }

    const next = () => {
        currentPhoto < photos.length - 1
            ? setCurrentPhoto(prev => prev + 1)
            : null
    }


    return (
        <>
            {/* apparent photo */}
            <div className="relative rounded-3xl">

                {/* close button */}
                <button id="close"
                    onClick={() => setIsPhotoOpen(false)}
                    className="absolute -top-8 right-0 "
                >
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#f7f8fd" fillRule="evenodd" />
                    </svg>

                </button>

                {/* left arrow */}
                <Button id={"left"} position={"top-1/2 -left-5"} size='w-10 h-10' direction='left' onClick={prev} />


                <img src={photos[currentPhoto]} alt="" className="max-w-[450px] w-full rounded-3xl" />


                {/* right arrow */}
                <Button id={"right"} position={"top-1/2 -right-5"} size='w-10 h-10' direction='right' onClick={next} />

            </div>

            {/* all photos */}
            <div className="flex items-center justify-between mt-8 ">

                {
                    photos?.map((photo, index) => {
                        return (
                            <span
                                key={index}
                                className={`w-20 h-20 rounded-xl  border-[#ff7d1a] overflow-hidden
                                ${currentPhoto === index ? 'border-2 bg-white' : ''} hover:opacity-40`}
                            >

                                <img
                                    src={photo} alt="product-photo"
                                    onClick={() => setCurrentPhoto(index)}
                                    className={`${currentPhoto === index ? ' opacity-40' : ''}`}
                                />
                            </span>
                        )
                    })
                }

            </div>

        </>
    )
}