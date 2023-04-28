import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import React, { useEffect, useContext } from "react";
import { Store } from '@/utils/Store';
import ProductData from '@/utils/products';
import ThumbnailItem from '@/components/thumbnail-item';

export default function ProductScreen() {
    const {query} = useRouter();
    const {id} = query;
    const product = ProductData.find(e => e.id === id);
    
    if(!product) {
        return <div>Product Not Found</div>;
    }
    
    const imageUrl = 'https://api.eezee.sg/image/resize?height=360&width=720&url=' + product.images[0].url;

    useEffect( function thumbnail() {
        document.getElementById('thumbnails').getElementsByClassName('image-thumbnail')[0].classList.add('active');
        document.getElementById('minusBtn').disabled = true;
    });

    const thumbnailClickHandler = async (index) => {
        Array.from(document.getElementById('thumbnails').getElementsByClassName('image-thumbnail')).forEach(e => {
            e.classList.remove('active');
        });
        document.getElementById('thumbnails').getElementsByClassName('image-thumbnail')[index].classList.add('active');
        document.getElementById('productImg').src = 'https://api.eezee.sg/image/resize?height=360&width=720&url=' + product.images[index].url;
    };

    function minusQty() {
        const currentQty = parseInt(document.getElementById('qtyInput').value, 10);
        console.log(currentQty);
        if(currentQty > 1) {
            document.getElementById('qtyInput').value = parseInt(document.getElementById('qtyInput').value, 10) - 1;
        }
        if(currentQty == 2) {
            document.getElementById('minusBtn').disabled = true;
        }
    }

    function addQty() {
        document.getElementById('qtyInput').value = parseInt(document.getElementById('qtyInput').value, 10) + 1;
        document.getElementById('minusBtn').disabled = false;
    }

    const { state, dispatch } = useContext(Store);
    const addToCartHandler = () => {
        dispatch({ type: 'CART_ADD_ITEM', payload: parseInt(document.getElementById('qtyInput').value, 10)});
        document.getElementById('qtyInput').value = 1;
    }

  return (
    <Layout title={product.title}>
        <div className="h-4 grey"></div>
        <div className='eezee-max-width'>
            <div className='flex -mx2 pt-4'>
                <div className='relative product-individual'>
                    <div className='product-content'>
                        <div className='pb-2'>
                            <div className='pb-1'>
                                <span className="sub-heading grey-base">{product.title}</span>
                            </div>
                            <div className='flex -mx2'>
                                <div className='pr-2 h-9 w-14 self-center'>
                                    <a className='h-9 w-14 flex items-center' href="#">
                                        <img src={product.metadata.brandImage} />
                                    </a>
                                </div>

                                <div className='relative px-2'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="caption grey-primary">Model:</span>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <span className="caption eezee-blue">{product.metadata.model}</span>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="caption grey-primary">Brand:</span>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <span className="caption eezee-blue">{product.metadata.brand}</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className='product-img'>
                            <div className='pb-2 product-img-item'>
                                <span className="relative">
                                    <img 
                                        id='productImg'
                                        src={imageUrl}
                                        width='710'
                                        height='355'
                                        className='block' />
                                </span>
                            </div>

                            <div id='thumbnails' className='product-image-row'>
                                {product.images.map((urls, index) => (
                                    <ThumbnailItem
                                        imageUrl={urls.url}
                                        key={urls.url}
                                        index={index}
                                        thumbnailClickHandler={thumbnailClickHandler}
                                    ></ThumbnailItem>
                                ))}
                                
                            </div>
                        </div>

                        <div className='product-desc'>
                            <div className='pb-4'>
                                <span className="title grey-base">Product Description</span>
                            </div>
                            <span className='product-desc-body'>
                                <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
                            </span>
                        </div>
                    </div>
                </div>

                <div className='relative px-2'>
                    <div className='product-price'>
                        <div className='product-price-ctn'>
                            {product.highPricePretty == null && (
                                <span className="heading eezee-blue">{product.lowPricePretty}</span>
                            )}
                            {product.highPricePretty > product.lowPricePretty && (
                                <span className="heading eezee-blue">{product.lowPricePretty} - {product.highPricePretty}</span>
                            )}
                        </div>

                        <div className='p-6'>
                            <div className='flex -m-2'>
                                <div className='p-2'>
                                    <div className='flex -mx-1 items-center'>
                                        <div className="px-1">
                                            <span className="body-emphasized grey-primary">Quantity:</span>
                                        </div>
                                        <div className='px-1'>
                                            <div className='relative inline-flex'>
                                                <button id='minusBtn' type="button" className="secondary small" onClick={minusQty}>
                                                    <div className="justify-center items-center flex h-full -mx-1 w-5 h-5">
                                                        <div className="relative px-1 w-5 h-3">
                                                            <span>
                                                                <img width="12px" height="12px" className="absolute" src="https://storage.googleapis.com/imgez/icons/minus-icon.svg" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </button>

                                                <div className="w-14 h-8 p-1 qty-input">
                                                    <div className="items-center flex -mx-1 h-full">
                                                        <div className="relative px-1 flex-auto">
                                                            <input id='qtyInput' className='qty-input-num' type="text" defaultValue="1" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <button type="button" className="secondary small" onClick={addQty}>
                                                    <div className="justify-center items-center flex h-full -mx-1 w-5 h-5">
                                                        <div className="relative px-1  w-5 h-3">
                                                            <span>
                                                                <img width="12px" height="12px" className="absolute" src="https://storage.googleapis.com/imgez/icons/plus-icon.svg" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='px-6 pb-4'>
                            <button type="button" className="primary w-full large" onClick={addToCartHandler}>
                                <div className="justify-center items-center flex h-full -mx-1" >
                                    <div className="relative px-1">
                                        <span className="product-desc-body text-white">Add to Cart</span>
                                    </div>
                                </div>
                            </button>

                            <span>
                                <div className="pt-2">
                                    <button type="button" className="secondary w-full large">
                                        <div className="justify-center items-center flex h-full -mx-1">
                                            <div className="relative px-1">
                                                <span className="body eezee-blue">Add To Favourites</span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
