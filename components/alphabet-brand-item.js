import Link from 'next/link'
import React from 'react'
import BrandItem from './brand-item'
import BrandData from '@/utils/brands';

export default function AlphabetBrandItem({ alphabets, index }) {

    const alphabet = alphabets[index];
    const brand = BrandData.filter(e => e.image != null && e.name.startsWith(alphabet)).sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div>
            <div className="h-4 grey"></div>
            <div className="flex items-center justify-center brand-alphabet">
                <div className="relative">
                    <span className="title grey-base">{alphabet}</span>
                </div>
            </div>
            
            <div className='brand-row'>
                {brand.map((brand, index) => (
                    <BrandItem
                        brand={brand}
                        key={index}
                    ></BrandItem>
                ))}
            </div>
        </div>
    )
}