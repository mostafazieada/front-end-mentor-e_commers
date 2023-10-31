import { useState } from "react"


export default function Gallery({ setIsPhotoOpen, photos }) {

    const [currentPhoto, setCurrentPhoto] = useState(0)


    return (
        <>
            {/* apparent photo */}
            <div className="rounded-3xl">

                <img src={photos[currentPhoto]} alt="product-photo"
                    onClick={() => setIsPhotoOpen(prev => !prev)}
                    tabIndex={0}//to make img focusable because it not by default
                    className="max-w-[600px] w-full rounded-3xl "
                />

            </div>

            {/* all photos */}
            <div className="flex items-center justify-between mt-8 ">

                {photos.length > 0
                    ?
                    photos.map((photo, index) => {
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
                    :
                    <h1 className='text-center text-[ff7d1a] capitalize '>
                        there are no photos to show
                    </h1>
                }

            </div>

        </>
    )
}