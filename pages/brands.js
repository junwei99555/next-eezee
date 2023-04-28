import Layout from '@/components/Layout';
import BrandData from '@/utils/brands';
import React from "react";
import AlphabetBrandItem from '@/components/alphabet-brand-item';

export default function Brands() {

    let brandsFirstLetter = BrandData.filter(e => e.image != null).map(function(brand) {
        return brand.name[0];
    });

    function uniqueWithSort(a) {
        return a.sort().filter(function(item, pos, ary) {
            return !pos || item != ary[pos - 1];
        });
    }

    const sortedAlphabets = uniqueWithSort(brandsFirstLetter);

    return <Layout title='Brands'>
        <div className='eezee-max-width'>
            {BrandData.filter(e => e.image != null).slice(0, sortedAlphabets.length).map((brand, index) => (
                <AlphabetBrandItem
                    alphabets={sortedAlphabets}
                    index={index}
                    key={brand.id}
                ></AlphabetBrandItem>
            ))}
        </div>
    </Layout>
}