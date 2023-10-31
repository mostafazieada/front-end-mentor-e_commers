import { fetching } from "./api-fetch";

const getPhotos = async () => {
    const allPhotos = await fetching()
    return allPhotos
}

export default getPhotos;
// console.log(PHOTOS);