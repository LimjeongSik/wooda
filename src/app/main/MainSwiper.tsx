import { useContext, useState } from "react";
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
    slidesPerView: 4.5,
    spaceBetween: 18,
    slidesPerGroup: 1,
    pagination: {
        type: "progressbar",
    } as PaginationOptions,
    navigation: true,
    modules: [Pagination, Navigation],
};

export default function MainSwiper() {
    const [isData, setIsData] = useState<ProjectDataProps[]>(project);

    return (
        <ProjectContext.Provider value={{ isData, setIsData }}>
            <Block>
                <MainSwiperTab />
                <Swiper {...options} className="mySwiper">
                    {isData.map((data: ProjectDataProps) => (
                        <SwiperSlide key={data.id}>
                            <DataBlock>
                                <Image src={data.image} alt={data.name} />
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
    padding-left: 140rem;
    padding-bottom: 332rem;
    .mySwiper {
        padding-bottom: 216rem;

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
            top: auto;
            bottom: 0;
            background-color: ${Colors.line};

            .swiper-pagination-progressbar-fill {
                background-color: ${Colors.black};
            }
        }
    }
`;
const DataBlock = styled.div`
    display: flex;
    flex-direction: column;

    img {
        width: 362rem;
        height: 504rem;
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
