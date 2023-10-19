import store from "@/app/store/store";
import { Carousel } from "antd";
import { useEffect, useState } from "react";
import styles from '../style.module.scss'
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";


export function ListCarousel() {
    const { getFeaturedPrperty } = store.featureProperty;
    const [arr, setArr] = useState<any[] | null>(null);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await getFeaturedPrperty();
                setArr(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        load();
    }, []);

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const next = () => {
        carousel.next();
    };
    const prev = () => {
        carousel.prev();
    };
    let carousel: any;


    return (
        <div>
            <Carousel {...carouselSettings} ref={(node) => (carousel = node)}>
                {arr?.map((property, index) => (
                    <div key={property?.id} className={styles.antdCarousal}>
                        <Link key={property?.id} href={{ pathname: "/routes/properties/propertDetails", query: property }}>
                            <div className={`${styles.aa}`}>
                                <img src={property?.imageSrc} alt="" />
                                <div className={styles.forSale} style={{ background: 'white' }}>
                                    {property?.status}
                                </div>
                                <div className={styles.camera}>
                                    <button><img src="/properties/camera.webp" alt="" />07</button>
                                    <button><img src="/properties/camera.webp" alt="" />07</button>
                                </div>
                            </div>

                            <div>
                                <h3 className="fs-5 mt-2">{property?.title}</h3>
                                <h4 className="text-decoration-underline mt-1">{property?.location}</h4>
                                <div className="d-flex justify-between mt-2 h4">
                                    <div className="fs-6">Price: {property?.price}</div>
                                    <div className="d-flex gap-1 align-items-center">
                                        <AiOutlineHeart />
                                        <AiOutlineHeart />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
