import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '@/utils/Store';

export default function Layout({ title, children }) {

    const { state, dispatch } = useContext(Store);
    const { cart } = state;
    const [cartItemsCount, setCartItemsCount] = useState(0);
    useEffect(() => {
        setCartItemsCount(cart.cartItems);
    }, [cart.cartItems]);

    return (
        <>
            <Head>
                <title>{title ? title + ' - Eezee Intern' : 'Eezee Intern'}</title>
                <meta name="description" content="Ecommerce Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <div className="bg-grey h-9">
                    <div className='eezee-max-width'>
                        <div className="flex items-center h-full">
                            <div className="relative px-4">
                                <div className="flex -mx-1">
                                    <div className="relative px-1 flex items-center">
                                        <div className="rectangle">
                                            <img className='h-3.5 w-5' src='https://storage.googleapis.com/eezee-storage/flags/SG.png' />
                                        </div>
                                    </div>
                                    <div className="relative px-1">
                                        <span className="header-text grey-primary ">Singapore</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative px-4">
                                <div className="navbar-item-contact-us">
                                    <a href="https://eezee.co/contact-us" target="_blank">
                                        <div className="flex -mx-1">
                                            <div className="relative flex px-1 items-center">
                                                <div className="h-4 w-4">
                                                    <span className="img">
                                                        <span className='relative'>
                                                            <img src="https://storage.googleapis.com/imgez/icons/phone-icon-grey-secondary.svg" />
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="relative px-1">
                                                <span className="header-text grey-primary">+65 6797 9688</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white">
                    <nav className="flex items-center px-4 justify-between eezee-max-width" height="80">
                        <Link href="/">
                            <Image 
                                src="https://storage.googleapis.com/imgez/eezee-logos/logo-on-white-nopadding.svg"
                                alt="Logo"
                                width="150"
                                height="44"
                                className="cursor-pointer"
                                priority
                            />
                        </Link>
                        <div className="flex items-center z-10 relative ">
                            <Link href="#" className="p-2">
                                <Image 
                                    src="https://storage.googleapis.com/imgez/icons/cart-icon.svg"
                                    alt="Cart"
                                    width="32"
                                    height="32"
                                    className="cursor-pointer"
                                    priority
                                />
                                <span className='caption-emphasized grey-primary'>Cart</span>
                                <span className="absolute top-1.5 -right-1.5">
                                    <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-semibold leading-4 bg-blue-500 text-white">
                                        {cartItemsCount}
                                    </div>
                                </span>
                            </Link>
                        </div>
                    </nav>
                </div>

                <div className="bg-white h-12">
                    <div className="flex items-center -mx-6 eezee-max-width">
                        <div className="relative">
                            <span>
                                <a href="/brands">
                                    <span className="header-text eezee-blue">View All Brands</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <main>{children}</main>
        </>
    )
}