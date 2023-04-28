import React from 'react'

export default function ThumbnailItem({ imageUrl, index, thumbnailClickHandler }) {

    const imageUrlResized = 'https://api.eezee.sg/image/resize?height=50&width=50&url=' + imageUrl;

    return (
        <div className='relative px-1'>
            <div className='image-thumbnail' onClick={() => thumbnailClickHandler(index)}>
                <span className="relative">
                    <img 
                        src={imageUrlResized}
                        width='50'
                        height='50'
                        className='block' />
                </span>
            </div>
        </div>
    )
}
