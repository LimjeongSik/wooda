"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PaginationOptions } from "swiper/types";
import MainSwiperTab from "./MainSwiperTab";

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

const options = {
    spaceBetween: 18,
    slidesPerGroup: 1,
    pagination: {
        type: "progressbar",
    } as PaginationOptions,
    navigation: true,
    modules: [Pagination, Navigation],
    touchStartPreventDefault: false,
};

export default function MainSwiper() {
    const [isData, setIsData] = useState<ProjectDataProps[]>(project);
    const [length, setLength] = useState<number>(1);

    useEffect(() => {
        isData.length !== 0 ? setLength(4.5) : setLength(1);
    }, [isData.length]);
    return (
        <ProjectContext.Provider value={{ isData, setIsData }}>
            <Block>
                <MainSwiperTab />
                <Swiper
                    {...options}
                    slidesPerView={length}
                    className="mySwiper"
                >
                    {isData.length !== 0 ? (
                        isData.map((data: ProjectDataProps) => (
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
                        ))
                    ) : (
                        <SwiperSlide className="preparing">
                            준비중 입니다.
                        </SwiperSlide>
                    )}
                </Swiper>
            </Block>
        </ProjectContext.Provider>
    );
}

const Block = styled.div`
    padding-bottom: 332rem;
    .mySwiper {
        padding-left: 220rem;
        padding-bottom: 219rem;
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
            bottom: 39rem;
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
            margin-left: 220rem;
            height: 1px;
            top: auto;
            bottom: 3px;
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
