import Carousel from "./photos-sliders/carousel"
import Gallery from "./photos-sliders/gallery"
import PopupGallery from "./photos-sliders/popup-gallery"

import { useState, useContext } from "react"
import { ProductsContext } from "../../context/context"




export default function Product() {

    const [isPhotoOpen, setIsPhotoOpen] = useState(false)


    const {
        data,
        itemAmountToAdd,
        setItemAmountToAdd,
        addToCart,
    } = useContext(ProductsContext)


    const decrease = () => {
        itemAmountToAdd <= 1
            ? setItemAmountToAdd(1)
            : setItemAmountToAdd(prev => prev - 1)
    }
    const increase = () => {
        setItemAmountToAdd(prev => prev + 1)
    }

    return (<>
        {data && data.map(product => {

            const { title, price, company, description, currency, discount, photos } = product
            return (
                <div
                    id="product"
                    key={product.id}
                    className="w-screen px-4 md:px-10 lg:px-12 mx-auto my-10 lg:flex gap-x-10 "
                >

                    {/* mobile screens photos carousel */}
                    < Carousel photos={photos} />

                    {/* large screens photos gallery */}
                    < div className="hidden w-max py-10 md:flex md:flex-col md:m-auto " >
                        <Gallery photos={photos} setIsPhotoOpen={setIsPhotoOpen} />
                    </div>

                    {/*product infos section  */}
                    <div className="flex flex-col justify-center w-full max-w-[650px]">

                        <p className="font-bold my-4 text-[#ff7d1a] uppercase">
                            {company}
                        </p>

                        <h1 className="capitalize text-3xl font-bold">{title}</h1>

                        <p className="py-4 text-[#68707d]">{description}</p>

                        <div className="flex md:block">

                            <h1 className="text-3xl font-bold inline-block">
                                {currency}{price}
                            </h1>

                            {discount &&
                                <>
                                    <span className="bg-[#ffede0] text-[#ff7d1a] font-bold mr-auto ml-4 px-2 py-1 rounded-md">
                                        {discount}%
                                    </span>


                                    <span className="line-through text-[#68707d] text-lg md:block">
                                        {currency}{product.price * product.discount / 100}
                                    </span>

                                </>
                            }
                        </div>

                        <div className="mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-x-4 md:mt-6">

                            <div className="w-full h-16 mt-6 mb-4 px-4 md:m-0 md:p-0 flex justify-between items-center bg-[#ffede0] rounded-lg">

                                {/* decrease items into cart (-) */}
                                <button
                                    className="text-lg w-16 h-full flex justify-center items-center"
                                    onClick={decrease}
                                >
                                    <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                        <defs>
                                            <path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a" />
                                        </defs>
                                        <use fill="#FF7E1B" fillRule="nonzero" href="#a" />
                                    </svg>
                                </button>

                                {/* items number */}
                                <p className="text-lg font-semibold ">
                                    {itemAmountToAdd}
                                </p>

                                {/* increase items into cart (+)  */}
                                <button
                                    className="text-lg w-16 h-full flex justify-center items-center"
                                    onClick={increase}
                                >
                                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><defs>
                                        <path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" />
                                    </defs><use fill="#FF7E1B" fillRule="nonzero" href="#b" />
                                    </svg>
                                </button>

                            </div>

                            <button
                                className="w-full h-16 md:min-w-[60%] flex items-center justify-center rounded-lg bg-[#ff7d1a] disabled:bg-[#b6bcc8] duration-200"
                                onClick={() => addToCart(product, itemAmountToAdd)}
                            >
                                <span>
                                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><
                                        path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fillRule="nonzero" />
                                    </svg>
                                </span>
                                <p className="text-white text-base font-bold mx-4">Add to cart</p>
                            </button>

                        </div>

                    </div>

                    {/* popping up photos gallery */}
                    {
                        isPhotoOpen &&
                        <div className="absolute top-0 left-0 w-screen h-screen grid place-content-center bg-black bg-opacity-80 z-20"
                        >
                            <PopupGallery photos={product.photos} setIsPhotoOpen={setIsPhotoOpen} />
                        </div>
                    }

                </div >
            )
        })
        }

    </>

    )
}
