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
import { project } from "@/data/project";
import { ProjectDataProps } from "@/interface/Interface";

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
    return (
        <Block>
            <Swiper {...options} className="mySwiper">
                {project.map((data: ProjectDataProps) => (
                    <SwiperSlide key={data.id}>
                        <DataBlock>
                            <Image
                                src={data.image}
                                width={362}
                                height={504}
                                alt={data.name}
                            />
                            <h2>{data.name}</h2>
                            <p>{data.classification}</p>
                        </DataBlock>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Block>
    );
}

const Block = styled.div`
    padding-left: 140rem;
    padding-bottom: 216rem;
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
