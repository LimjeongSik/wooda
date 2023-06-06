"use client";

import { useState } from "react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PaginationOptions } from "swiper/types";

import { styled } from "styled-components";
import { Colors } from "@/styles/Colors";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// data
import { ProjectContext } from "@/context/ProjectContext";
import { ProjectDataProps } from "@/interface/Interface";
import { project } from "@/data/project";
import MainSwiperHeader from "./MainSwiperHeader";

const options = {
    slidesPerView: 4.5,
    spaceBetween: 18,
    pagination: {
        type: "progressbar",
    } as PaginationOptions,
    navigation: true,
    modules: [Pagination, Navigation],
    touchStartPreventDefault: false,
};

export default function MainSwiper() {
    const [isData, setIsData] = useState<ProjectDataProps[]>(project);
    return (
        <ProjectContext.Provider value={{ isData, setIsData }}>
            <Block>
                <MainSwiperHeader />
                <Swiper {...options} className="mySwiper">
                    {isData.map((data: ProjectDataProps) => (
                        <SwiperSlide key={data.id}>
                            <DataBlock>
                                <Image
                                    src={data.image}
                                    alt={data.name}
                                    priority
                                />
                                <h2>{data.name}</h2>
                                <p>{data.classification}</p>
                            </DataBlock>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Block>
        </ProjectContext.Provider>
    );
}

const Block = styled.div`
    padding-bottom: 240rem;
    .mySwiper {
        padding-left: 220rem;
        padding-bottom: 144rem;
        padding-right: 20rem;
        .swiper-slide {
            min-height: 570rem;
        }
        .preparing {
            width: 100%;
            height: inherit;
            border-radius: 20rem;
            border: 1px solid ${Colors.line};
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40rem;
            color: ${Colors.gray};
        }
        .swiper-button-prev,
        .swiper-button-next {
            width: 56rem;
            height: 56rem;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            top: auto;
            bottom: 0;
            cursor: none;
            margin-left: 220rem;
        }

        .swiper-button-prev {
            background-image: url("/images/btns/btn_prev.png");
            left: 0;
        }
        .swiper-button-next {
            background-image: url("/images/btns/btn_next.png");
            right: auto;
            left: 76rem;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
            display: none;
        }
        .swiper-pagination-progressbar {
            width: calc(100% - 391rem);
            margin-left: 220rem;
            height: 1px;
            top: auto;
            left: 171rem;
            bottom: 28rem;
            background-color: ${Colors.line};

            .swiper-pagination-progressbar-fill {
                background-color: ${Colors.black};
                height: 3px;
                top: calc(50% - 1.5px);
                transform: translateY(-50%);
            }
        }
        .swiper-pagination-lock {
            display: block;
        }
    }
`;
const DataBlock = styled.div`
    display: flex;
    flex-direction: column;

    img {
        width: 362rem;
        height: 504rem;
        pointer-events: none;
    }

    h2 {
        font-size: 20rem;
        color: ${Colors.black};
        font-weight: 500;
        margin: 16rem 0 8rem;
    }
    p {
        font-size: 15rem;
        color: ${Colors.black};
        font-weight: 300;
    }
`;
