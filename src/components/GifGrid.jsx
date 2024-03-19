import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';




export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    /* getGifs(category); */
    

    return (
        <>
            <h3 style={{
                textAlign: 'center',
            }}>{ category }</h3>

            { isLoading && <p style={{
                textAlign: 'center',
            }}>Loading...</p> }

            <div className='card-grid' style={{
                marginTop: '3rem',
            }}>
                {
                    images.map((image) => (
                        <GifGridItem key={image.id} {...image} />
                    ))
                }
            </div>

        </>
    )
}

