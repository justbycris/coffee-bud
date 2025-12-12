import { useState, useEffect } from 'react';

const Fetch = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('')
            .then((res) => {
                return res.json(); 
            })
            .then((data) => {
                console.log(data);
                setPhotos(data);
            })
    }, []);
    return (
        <>
        {photos.map((photo) => (
            <img key={photo.id} src={photo.url} alt={photo.title} width={100}/>
        ))}
        </>
    )
}
export default Fetch;