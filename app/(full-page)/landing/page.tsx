'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { Divider } from 'primereact/divider';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import { NodeRef } from '@/types';
import { classNames } from 'primereact/utils';
import { Image } from 'primereact/image';
import { Carousel } from 'primereact/carousel';
import { Colors } from 'chart.js';
import type { Demo } from '@/types';
import { PhotoService } from '../../../demo/service/PhotoService';
import { ProductService } from '../../../demo/service/ProductService';
import { Galleria } from 'primereact/galleria';




const LandingPage = () => {
    const [isHidden, setIsHidden] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const menuRef = useRef<HTMLElement | null>(null);
    const [products, setProducts] = useState<Demo.Product[]>([]);
    const [images, setImages] = useState<Demo.Photo[]>([]);

        const toggleMenuItemClick = () => {
        setIsHidden((prevState) => !prevState);
    };

    const galleriaResponsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
    const carouselResponsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    useEffect(() => {
        ProductService.getProductsSmall().then((products) => setProducts(products));

        PhotoService.getImages().then((images) => setImages(images));
    }, []);

    const galleriaItemTemplate = (item: Demo.Photo) => <img src={`/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    const galleriaThumbnailTemplate = (item: Demo.Photo) => <img src={`/${item.thumbnailImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;

    

    const carouselItemTemplate = (product: Demo.Product) => {
        return (
            <div className="border-1 surface-border border-round m-1 text-center py-5">
                <div className="mb-3">
                    <img src={`/demo/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="p-mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <span className={`product-badge status-${product.inventoryStatus?.toLowerCase()}`}>{product.inventoryStatus}</span>
                    <div className="car-buttons mt-5">
                        <Button type="button" className="mr-2" rounded icon="pi pi-search"></Button>
                        <Button type="button" className="mr-2" severity="success" rounded icon="pi pi-star"></Button>
                        <Button type="button" severity="help" rounded icon="pi pi-cog"></Button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="surface-0 flex justify-content-center">
            <div id="home" className="landing-wrapper overflow-hidden"
                style={{
                    background: '-webkit-gradient(linear, left top, left bottom, from(#0067b4), to(#00adef))',
                }}>
            <div
                    id="hero"
                    className="flex flex-center pt-4 px-4 lg:px-8 overflow-hidden"
                    style={{
                        background: 'rgb(217 83 39)',
                    }}
                >
                    <p className='flex flex-center align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer'
                    style={{
                        
                        color: 'rgb(253, 254, 254)',
                    }} >
                        EVERYTHING SHIPS FAST AND FREE
                    </p> 
                </div>
                <div className="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static"
                    >
                    {/* <Image src='/icono-magicsnow.JPG' width="100" height="100" /> */}
                    <Image src={`/demo/images/galleria/icono-magicsnow.JPG`} alt="Image" width="100" 
                        style={{
                            borderRadius: 30,
                        }}  preview />
                    {/* <img src='/demo/images/galleria/galleria10.jpg' width="100" height="100"> */}
                    {/* {<img src={`/layout/images/${layoutConfig.colorScheme === 'light' ? 'logo-dark' : 'logo-white'}.svg`} alt="Sakai Logo" height="50" className="mr-0 lg:mr-2" /> } */}
                    <Link href="/" className="flex align-items-center">
                        {/* <span className="font-medium text-2xl line-height-5 mr-8"
                        style={{
                            color: 'rgb(253, 254, 254)',
                        }}
                        >
                            Magic Snow
                        </span> */}
                    </Link>
                    <StyleClass nodeRef={menuRef as NodeRef} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                        <i ref={menuRef} className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"></i>
                    </StyleClass>
                    <div className={classNames('align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2', { hidden: isHidden })} style={{ top: '100%' }}>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                            <li>
                                <a href="#Tipos de nieve" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Nieve Instantanea en el suelo</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a href="#Instrucciones" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Nieve cayendo</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a href="#Ideas" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Paquetes de fiesta de frozen</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a href="#Galeria" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Todo sobre la nieve</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a href="#Historia" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Fotos de nieve</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a href="#Contacto" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Profesionales</span>
                                    <Ripple />
                                </a>
                            </li>
                            
                            <li>
                                <a className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3" href='https://www.facebook.com/profile.php?id=61568428485599' title='Facebook'>
                                    <i 

                                    className="pi pi-facebook"
                                    style={{
                                        fontSize: '2rem'
                                    }}>             
                                    </i>
                                </a>
                            </li>
                        </ul>
                        {/* <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                            <Button label="Login" text rounded className="border-none font-light line-height-2 text-blue-500"></Button>
                            <Button label="Register" rounded className="border-none ml-5 font-light line-height-2 bg-blue-500 text-white"></Button>
                        </div> */}
                    </div>
                </div>

                <div
                    id="hero"
                    className="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
                    style={{
                        // background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)',
                        background: 'rgba(255, 255, 255)',
                        clipPath: 'ellipse(150% 87% at 93% 13%)'
                    }}
                >
                    <div className="mx-4 md:mx-8 mt-0 md:mt-4">
                        <h1 className="text-6xl font-bold text-gray-900 line-height-2">
                            <span className="McLaren fantasy, google"
                            style={{
                                color: 'rgb(11, 125, 188)',

                                fontSize: '2rem'
                            }}
                            >Somos los Expertos en nieve falsa</span></h1>
                        <p className="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">Gracias a Magic Snow, puedes tener tu propio paraíso invernal cuando quieras, ¡incluso en verano! Nuestra nieve artificial tiene un lugar en muchos eventos diferentes: obras de teatro escolares, sesiones de fotos, fiestas, escaparates, manualidades, decoraciones y mucho más. Los usos de Magic Snow son realmente infinitos.
                        </p>
                        <p className="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">Magic Snow ofrece la mejor nieve instantánea, segura y no tóxica, lo que la hace perfecta para que la disfruten los niños. Nuestra nieve artificial está hecha de un polímero súper absorbente que se expande cuando se mezcla con agua, creando una textura ligera y esponjosa que se ve y se siente como nieve real. Es una alternativa libre de estrés al juego tradicional en la nieve, que permite a los niños divertirse sin el frío y la humedad.</p>
                        <h1 className="text-6xl font-bold text-gray-900 line-height-2">
                            <span className="McLaren fantasy, google"
                            style={{
                                color: 'rgb(11, 125, 188)',

                                fontSize: '2rem'
                            }}
                            >¿Por qué elegirnos?</span></h1>
                            <p className="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">Lo que diferencia a la nieve instantánea Magic Snow de otros productos de nieve artificial es su textura y apariencia realistas. La nieve creada con Magic Snow es suave, fresca al tacto y brinda una experiencia táctil que realmente imita la nieve real. Ya sea que esté caminando sobre un manto de nieve o haciendo un ángel de nieve, Magic Snow le permite sumergirse en la experiencia del país de las maravillas invernal.</p>
                            
                            <iframe width="420" height="315" src="https://fb.watch/wpGuUeVssk/"></iframe>

                            <h1 className="text-6xl font-bold text-gray-900 line-height-2">
                            <span className="McLaren fantasy, google"
                            style={{
                                color: 'rgb(11, 125, 188)',

                                fontSize: '2rem'
                            }}
                            >Múltiples usos</span></h1>
                            <p className="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">Además de sus usos recreativos, la nieve instantánea Magic Snow también se puede utilizar con fines decorativos. Nuestra nieve artificial se puede rociar en exhibiciones navideñas, agregar a adornos para árboles de Navidad o usarse como un toque festivo para decoraciones de fiestas. La apariencia realista de Magic Snow lo convierte en un producto versátil que puede mejorar cualquier entorno con temática invernal.</p>
                            <h1 className="text-6xl font-bold text-gray-900 line-height-2">
                            <span className="McLaren fantasy, google"
                            style={{
                                color: 'rgb(11, 125, 188)',

                                fontSize: '2rem'
                            }}
                            >Experimenta la maravilla de la nieve</span></h1>
                            <p className="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">En general, la nieve instantánea Magic Snow es un producto divertido y emocionante que lleva la alegría de la nieve a cualquier ocasión. Con su facilidad de uso, versatilidad y textura realista, es la manera perfecta de crear magia invernal en cualquier entorno. Entonces, ya sea que esté planeando una aventura en la nieve o desee agregar un toque de maravilla invernal a su próximo evento, Magic Snow es la respuesta. Experimente la alegría de la nieve durante todo el año con Magic Snow: lo último en nieve en un empaque fácil de usar. Disfrute de las maravillas del invierno en cualquier época del año y en cualquier lugar. Desde bodas hasta fiestas de cumpleaños, el cielo es el límite. ¡Ordene nuestra nieve artificial en línea hoy!</p>
                        {/* <Button type="button" label="Get Started" rounded className="text-xl border-none mt-3 bg-blue-500 font-normal line-height-3 px-3 text-white"></Button> */}
                    </div>
                    <div className="flex justify-content-center md:justify-content-end">
                        <img src="demo/images/galleria/imagen-1.jpg" alt="Hero Image" className="w-9 md:w-auto" />
                    </div>
                </div>
               
                <div className="col-12">
                    <div className="card">
                    <h5 className="text-6xl font-bold text-gray-900 line-height-2">
                            <span className="McLaren fantasy, google"
                            style={{
                                color: 'rgb(11, 125, 188)',

                                fontSize: '2rem'
                            }}
                            >Lo Mas Vendido</span></h5>
                        <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={carouselResponsiveOptions} itemTemplate={carouselItemTemplate}></Carousel>
                    </div>
                </div>
                <div className="grid p-fluid">
                    
                    <div className="col-12">
                            <div className="card">
                                <h5>Galleria</h5>
                                <Galleria value={images} responsiveOptions={galleriaResponsiveOptions} numVisible={7} circular style={{ maxWidth: '800px', margin: 'auto' }} item={galleriaItemTemplate} thumbnail={galleriaThumbnailTemplate}></Galleria>
                            </div>
                        </div>
                    </div>

                <div className="py-4 px-4 mx-0 mt-8 lg:mx-8">
                    <div className="grid justify-content-between">
                        <div className="col-12 md:col-2" style={{ marginTop: '-1.5rem' }}>
                            <Link href="/" className="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                            <Image src={`/demo/images/galleria/icono-magicsnow.JPG`} alt="Image" width="500" 
                                style={{
                                    borderRadius: 30,
                                }}  preview />
                                {/* <img src={`/layout/images/${layoutConfig.colorScheme === 'light' ? 'logo-dark' : 'logo-white'}.svg`} alt="footer sections" width="50" height="50" className="mr-2" /> */}
                                {/* <span className="font-medium text-3xl"
                                style={{
                        
                                    color: 'rgb(253, 254, 254)',
                                }}>SNOWONDER</span> */}
                            </Link>
                        </div>

                        <div className="col-12 md:col-10 lg:col-7">
                            <div className='flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer' >
                                
                            </div>
                            <div className="grid text-center md:text-left">
                                <div className="col-12 md:col-3">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3"
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Informacion de la Empresa</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 "
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Opciones de envío</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 "style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Términos y condiciones</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 "
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Política de devoluciones</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 "style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Política de privaciodad</a>
                                    <a className="line-height-3 text-xl block cursor-pointer "
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Blog</a>
                                </div>

                                <div className="col-12 md:col-3 mt-4 md:mt-0">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3"
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Servicio al cliente</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2"
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Ayuda/Preguntas frecuentes</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2"
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Sobre nosotros</a>
                                    <a className="line-height-3 text-xl block cursor-pointer"
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Estado del pedido</a>
                                </div>

                                <div className="col-12 md:col-3 mt-4 md:mt-0">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3 "style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Mi cuenta</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2"style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Iniciar sesíon/Registrar</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2"
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>
                                        Ver carrito
                                        {/* <img src="/demo/images/landing/new-badge.svg" className="ml-2" alt="badge" /> */}
                                    </a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2"
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Mayoristas y afiliados</a>
                                    <a className="line-height-3 text-xl block cursor-pointer "
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}></a>
                                </div>

                                <div id='Legal' className="col-12 md:col-3 mt-4 md:mt-0">
                                    <section>
                                    <h4 className="href:Legal data-toggle=collapse font-medium text-2xl line-height-3 mb-3"
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Contáctenos</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 "
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>telefono</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2"
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>email</a>
                                    <a className="line-height-3 text-xl block cursor-pointer"
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Dirrecion</a>
                                    </section>
                                </div>
                                <div id='Legal' className="col-12 md:col-3 mt-4 md:mt-0">
                                    <section>
                                    <h4 className="href:Legal data-toggle=collapse font-medium text-2xl line-height-3 mb-3"
                                    style={{
                        
                                        color: 'rgb(253, 254, 254)',
                                    }}>Mantente conectado</h4>
                                    <a href='https://www.facebook.com/profile.php?id=61568428485599' title='Facebook'>

                                    <i 

                                    className="pi pi-facebook"
                                    style={{
                                        background: 'rgb(253, 254, 254)',
                                        fontSize: '2rem'
                                    }}>             
                                    </i>
                                    </a>
                                    <a href='https://api.whatsapp.com/send?phone=%2B5215554683837&context=ARCH9xn9xvZafouA7tHAShbg_FgcFtBbfYGYVzMzZTT-FcVjksOtmtpdL6JMAPxvuu0PQ1T3hYCZXoWtCmaQh4-0GpX2cHX7Q3D9m1-NnlSN3SOay9WTpW2Zd3FDSgL3O7-KwafyZCfV02NRU-VJAo7WLg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawHGz-lleHRuA2FlbQIxMAABHYjoIOXuRyC4mVlSGovdQqJvBpFHrHvRM3oIOpBDMrq6cw76zpga298N1g_aem_42IlOwNgnAJhzF50EGZkYg' title='Facebook'>
                                    
                                    <i 

                                    className="pi pi-whatsapp"
                                    style={{
                                        background: 'rgb(253, 254, 254)',
                                        fontSize: '2rem'
                                    }}>             
                                    </i>
                                    </a>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
