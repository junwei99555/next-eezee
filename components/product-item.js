import Link from 'next/link'
import React from 'react'

export default function ProductItem({ product }) {
  return (
      <div className='relative p-1'>
          <span>
            <Link href={`/product/${product.id}`}>
                <div className='product-card'>
                    <div className='product-card-content'>
                        <div className='product-card-image'>
                            <img 
                                src={product.images[0].url}
                                alt={product.title}
                                width='175'
                                height='175'
                                className='block'
                                />
                        </div>
                        <div className='product-card-details'>
                            {product.highPrice == null && (
                                <div className='flex'>
                                    <span className="flex">
                                        <span className="display-emphasized eezee-blue">
                                            {product.currencySymbol}
                                        </span>
                                    </span>
                                    <span className="sub-title-emphasized eezee-blue">
                                        {product.lowPrice.toFixed(2)}
                                    </span>
                                </div>
                            )}
                            {product.highPrice > product.lowPrice && (
                                <div className='flex'>
                                    <span className="flex">
                                        <span className="display-emphasized eezee-blue">
                                            {product.currencySymbol}
                                        </span>
                                    </span>
                                    <span className="sub-title-emphasized eezee-blue">
                                        {product.lowPrice.toFixed(2)} - {product.highPrice.toFixed(2)}
                                    </span>
                                </div>
                            )}

                            <div className='product-card-title'>
                                <span className="product-title grey-base">
                                    {product.title}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
          </span>
      </div>

    
  )
}
