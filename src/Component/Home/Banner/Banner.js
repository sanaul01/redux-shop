import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark" className='mt-5'>
                <Carousel.Item>
                    <img
                    className="d-block h-30 w-30 "
                    style={{marginLeft: 400, height: 400}}
                    src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/8/3/832_1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block h-30 w-30 "
                    style={{marginLeft: 400, height: 400}}
                    src="https://4.imimg.com/data4/DU/RF/MY-517220/casual-menswear-500x500.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block h-30 w-30 "
                    style={{marginLeft: 400, height: 400}}
                    src="https://5.imimg.com/data5/AG/TB/MY-10139824/15-500x500.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;