import { useState } from 'react'
// import PHOTOS from '../../../utilities/photos'
import Button from './navigation-btn'
export default function Carousel({ photos }) {


    const [currentPhoto, setCurrentPhoto] = useState(0)

    const prev = () => {
        currentPhoto > 0 ? setCurrentPhoto(prev => prev - 1) : null
    }
    const next = () => {
        currentPhoto < photos.length - 1 ? setCurrentPhoto(prev => prev + 1) : null
    }


    return (
        <>
            {photos.length > 0
                ? (
                    <div id="carousel" className="md:hidden w-full relative">

                        {/* left arrow */}
                        <Button position='top-1/2 left-4' size='w-8 h-8' direction='left' onClick={prev} />

                        {/* photos container */}
                        <div id="photos-wrapper" className=' flex'>
                            {photos.length > 0
                                ? <img src={photos[currentPhoto]} alt="product-photo" />
                                : <h1 className='text-center text-[ff7d1a] capitalize'>there are no photos to show</h1>
                            }
                        </div>

                        {/* right arrow */}
                        <Button position='top-1/2 right-4' size='w-8 h-8' direction='right' onClick={next} />
                    </div>
                )
                : (<h1>There are no photos to show</h1>)
            }
        </>)
}


