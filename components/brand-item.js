import Link from 'next/link'
import React from 'react'

export default function BrandItem({ brand }) {
    return (
        <div className='relative p-1'>
            <span>
                <Link href="#">
                    <div className="brand-card">
                        <div className="flex items-center brand-card-title justify-center">
                            <span>
                                <span className="relative">
                                    <img 
                                        src={brand.image.url}
                                        width='135'
                                        height='60'
                                        className='block' />
                                </span>
                            </span>
                        </div>
                        
                        <div className="brand-details">
                            <span className="sub-title-emphasized grey-base overflow-hidden inline-block">{brand.name}</span>
                            <br />
                            <span className="caption grey-primary">{brand.productCount} Products</span>
                        </div>
                    </div>
                </Link>
            </span>
        </div>
    )
}