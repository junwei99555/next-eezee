import React, { useEffect, useState } from "react";
import Layout from '@/components/Layout';
import ProductItem from '@/components/product-item';
import ProductData from '@/utils/products';

export default function Products() {

    const productCount = ProductData.length;
    const originalProduct = ProductData;

    const [newProductData, setProductData] = useState(ProductData);

    useEffect(function filter(){
        filterRelevance();
    }, []);

    const productComponent = newProductData.map((product) => {
        return <ProductItem
            product={product}
            key={product.id}
        ></ProductItem>
    });

    function filterRelevance() {
        document.getElementById('relevanceFilterSpan').classList.remove('grey-primary');
        document.getElementById('relevanceFilterSpan').classList.add('eezee-blue');
        document.getElementById('relevanceFilterDiv').classList.add('filter-active');

        const filteredList = originalProduct.slice();
        setProductData(filteredList);
    }
    function removeRelevance() {
        document.getElementById('relevanceFilterSpan').classList.remove('eezee-blue');
        document.getElementById('relevanceFilterSpan').classList.add('grey-primary');
        document.getElementById('relevanceFilterDiv').classList.remove('filter-active');
    }
    function filterHighToLow(products) {
        document.getElementById('highLowFilterSpan').classList.remove('grey-primary');
        document.getElementById('highLowFilterSpan').classList.add('eezee-blue');
        document.getElementById('highLowFilterDiv').classList.add('filter-active');

        const newList = products.slice();
        const filteredList = newList.sort(function(a,b){return parseFloat(b.lowPrice) - parseFloat(a.lowPrice)});
        setProductData(filteredList);
    }
    function removeHighToLow() {
        document.getElementById('highLowFilterSpan').classList.remove('eezee-blue');
        document.getElementById('highLowFilterSpan').classList.add('grey-primary');
        document.getElementById('highLowFilterDiv').classList.remove('filter-active');
    }
    function filterLowToHigh(products) {
        document.getElementById('lowHighFilterSpan').classList.remove('grey-primary');
        document.getElementById('lowHighFilterSpan').classList.add('eezee-blue');
        document.getElementById('lowHighFilterDiv').classList.add('filter-active');

        const newList = products.slice();
        const filteredList = newList.sort(function(a,b){return parseFloat(a.lowPrice) - parseFloat(b.lowPrice)});
        setProductData(filteredList);
    }
    function removeLowToHigh() {
        document.getElementById('lowHighFilterSpan').classList.remove('eezee-blue');
        document.getElementById('lowHighFilterSpan').classList.add('grey-primary');
        document.getElementById('lowHighFilterDiv').classList.remove('filter-active');
    }

    function filterProducts(index) {
        const products = ProductData;
        switch(index) {
            case 0: // Relevance
                removeHighToLow();
                removeLowToHigh();
                filterRelevance();
                break;
            case 1: // High to Low
                removeRelevance();
                removeLowToHigh();
                filterHighToLow(products);
                break;
            case 2: // Low to High
                removeRelevance();
                removeHighToLow();
                filterLowToHigh(products);
                break;
        }
    }

    return <Layout title='Products'>
        <div className='eezee-max-width'>
            <div className="h-4 grey"></div>

            <div className="flex -mx-2">
                <div className="relative px-2">
                    <div className="title-results">
                        <div>
                            <span className="title grey-base">Products</span>
                        </div>
                        <div>
                            <span className="body grey-secondary">{productCount} results</span>
                        </div>
                    </div>
                </div>
                <div className="relative px-2 w-full">
                    <div className="mb-2">
                        <span className="caption grey-secondary">Page 1 of about {productCount} results</span>
                    </div>
                    <div className="mb-4">
                        <div className="product-filter-row">
                            <div className="relative">
                                <span>
                                    <button onClick={(e) => filterProducts(0)}>
                                        <div id="relevanceFilterDiv" className="catalog-sorting-option">
                                            <span id="relevanceFilterSpan" className="caption grey-primary">Relevance</span>
                                        </div>
                                    </button>
                                </span>
                            </div>

                            <div className="relative">
                                <span>
                                    <button onClick={(e) => filterProducts(1)}>
                                        <div id="highLowFilterDiv" className="catalog-sorting-option">
                                            <span id="highLowFilterSpan" className="caption grey-primary">Price: High to Low</span>
                                        </div>
                                    </button>
                                </span>
                            </div>

                            <div className="relative">
                                <span>
                                    <button onClick={(e) => filterProducts(2)}>
                                        <div id="lowHighFilterDiv" className="catalog-sorting-option">
                                            <span id="lowHighFilterSpan" className="caption grey-primary">Price: Low to High</span>
                                        </div>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className='brand-row'>
                        {productComponent}
                    </div>
                </div>
            </div>
        </div>
        
    </Layout>
}