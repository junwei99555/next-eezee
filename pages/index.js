import Layout from '@/components/Layout';
import ProductItem from '@/components/product-item';
import ProductData from '@/utils/products';
import BrandData from '@/utils/brands';
import { Carousel } from 'flowbite';
import BrandItem from '@/components/brand-item';
import React, { useEffect } from "react";

export default function Home() {

  useEffect( function carousel() {
    const items = [
      {
        position: 0,
        el: document.getElementById('carousel-item-1')
      },
      {
        position: 1,
        el: document.getElementById('carousel-item-2')
      },
      {
        position: 2,
        el: document.getElementById('carousel-item-3')
      },
      {
        position: 3,
        el: document.getElementById('carousel-item-4')
      },
    ];
  
    const options = {
      defaultPosition: 1,
      interval: 5000,
  
      indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: [
          {
            position: 0,
            el: document.getElementById('carousel-indicator-1')
          },
          {
            position: 1,
            el: document.getElementById('carousel-indicator-2')
          },
          {
            position: 2,
            el: document.getElementById('carousel-indicator-3')
          },
          {
            position: 3,
            el: document.getElementById('carousel-indicator-4')
          },
        ]
      }
    };
  
    const carousel = new Carousel(items, options);
    const $prevButton = document.getElementById('data-carousel-prev');
    const $nextButton = document.getElementById('data-carousel-next');
  
    $prevButton.addEventListener('click', () => {
      carousel.prev();
    });
  
    $nextButton.addEventListener('click', () => {
      carousel.next();
    });
  }, []);

  return <Layout title='Homepage'>
    <div className="h-4 grey"></div>
    {/* Carousel */}
    <div className='eezee-max-width'>
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
          <div className="relative overflow-hidden rounded-lg carousel-height">
              <div id="carousel-item-1" className="hidden duration-300 ease-in-out" data-carousel-item>
                  <img src="https://api.eezee.sg/image/resize?height=470&width=1200&url=https://storage.googleapis.com/eezee-banner-images/ehJT~ganp7Q9RqK42Ra3uQ.jpg&resizeStrategy=cover" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>

              <div id="carousel-item-2" className="hidden duration-300 ease-in-out" data-carousel-item>
                  <img src="https://api.eezee.sg/image/resize?height=470&width=1200&url=https://storage.googleapis.com/eezee-banner-images/166tHx_8oRm1~HzSdizyI_.jpg&resizeStrategy=cover" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
              
              <div id="carousel-item-3" className="hidden duration-300 ease-in-out" data-carousel-item>
                  <img src="https://api.eezee.sg/image/resize?height=470&width=1200&url=https://storage.googleapis.com/eezee-banner-images/nqCi8nQ6MtxwrVoK1t59CQ.jpg&resizeStrategy=cover" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
              
              <div id="carousel-item-4" className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://api.eezee.sg/image/resize?height=470&width=1200&url=https://storage.googleapis.com/eezee-banner-images/gsDQfucBoWzql2OPfv6~30.jpg&resizeStrategy=cover" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
          </div>
          
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button id="carousel-indicator-1" type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button id="carousel-indicator-2" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button id="carousel-indicator-3" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button id="carousel-indicator-4" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          </div>
          
          <button id="data-carousel-prev" type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full p-2 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                  <span className="sr-only">Previous</span>
              </span>
          </button>

          <button id="data-carousel-next" type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full p-2 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  <span className="sr-only">Next</span>
              </span>
          </button>
      </div>
    </div>
    <div className="h-4 grey"></div>

    {/* Brands */}
    <div className='eezee-max-width'>
      <div className='pb-3'>
        <div className="flex items-center space-between">
          <div className='relative'>
            <div className='pb-1'>
              <span className="title grey-base">Featured Brands</span>
            </div>
            <div>
              <span className="product-title grey-primary">Browse the full catalog of brands today</span>
            </div>
          </div>

          <div className='relative'>
            <a href="/brands">
              <div className="-mx-0.5 flex items-center">
                <div className="px-0.5 relative">
                  <span className="eezee-blue">View More </span>
                </div>
                <div className="px-0.5 relative h-3 w-3">
                  <span>
                    <img alt="Image" height="12.25" width="12.25" src="https://storage.googleapis.com/imgez/icons/caret-icon-right-blue.svg" className='absolute' />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className='brand-row'>
          {BrandData.filter(e => e.image != null && e.featured).map((brand) => (
            <BrandItem
              brand={brand}
              key={brand.id}
            ></BrandItem>
          ))}
        </div>
      </div>
    </div>
    <div className="h-4 grey"></div>

    {/* Products */}
    <div className='eezee-max-width'>
    <div className='pb-3'>
        <div className="flex items-center space-between">
          <div className='relative'>
            <div className='pb-1'>
              <span className="title grey-base">Our Products</span>
            </div>
            <div>
              <span className="product-title grey-primary">Trusted by the best companies in Asia</span>
            </div>
          </div>

          <div className='relative'>
            <a href="/products">
              <div className="-mx-0.5 flex items-center">
                <div className="px-0.5 relative">
                  <span className="eezee-blue">View More </span>
                </div>
                <div className="px-0.5 relative h-3 w-3">
                  <span>
                    <img alt="Image" height="12.25" width="12.25" src="https://storage.googleapis.com/imgez/icons/caret-icon-right-blue.svg" className='absolute' />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className='brand-row'>
          {ProductData.slice(0, 12).map((product) => (
            <ProductItem
              product={product}
              key={product.id}
            ></ProductItem>
          ))}
        </div>
      </div>
    </div>
  </Layout>
}
