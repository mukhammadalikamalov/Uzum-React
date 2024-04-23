import React from "react";
import { Box, Container, Button } from "@mui/material";
import Layout from "./components/layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function App() {
    return (
        <>
            <Layout>
                <Container maxWidth="lg">
                    <Box
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        gap={{ xs: 0, md: 4 }}
                        padding={2}
                        width={"98%"}
                        paddingTop={8} // Reduced padding-top value
                        marginLeft={{ md: "-2%" }}
                    >
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            autoplay={{ delay: 3000 }}
                            loop
                        >
                            <SwiperSlide>
                                <img
                                    src="https://images.uzum.uz/cmrkr2125ku8ad8j53g0/main_page_banner.jpg"
                                    alt=""
                                    style={{ width: "100%", height: "85%", objectFit: "cover" }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://images.uzum.uz/cn2a28jifoubkc6r3ohg/main_page_banner.jpg"
                                    alt=""
                                    style={{ width: "100%", height: "85%", objectFit: "cover" }}
                                />
                            </SwiperSlide>
                            {/* Add the new image here */}
                            <SwiperSlide>
                                <img
                                    src="https://images.uzum.uz/cmrksebifoubkc6ppdcg/main_page_banner.jpg"
                                    alt=""
                                    style={{ width: "100%", height: "85%", objectFit: "cover" }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://images.uzum.uz/cmroc23ifoubkc6pqkng/main_page_banner.jpg"
                                    alt=""
                                    style={{ width: "100%", height: "85%", objectFit: "cover" }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://images.uzum.uz/cmt4oihs99ouqbfsmscg/main_page_banner.jpg"
                                    alt=""
                                    style={{ width: "100%", height: "85%", objectFit: "cover" }}
                                />
                            </SwiperSlide>
                        </Swiper>
                    </Box>
                    <Box fontSize={"19px"} padding={0} marginBottom={"20px"}>
                        <h1>Рекомендуем</h1>
                    </Box>

                    <Box
                        display="flex"
                        flexWrap="wrap"
                        gap={3} // Adjust the gap value as needed
                    >
                        {generateCards()}
                    </Box>
                    <Box display="flex" justifyContent="center" marginTop={3} marginBottom={3}>
                        <Button
                            variant="contained"
                            color="inherit"
                            sx={{
                                backgroundColor: '#ccc',
                                color: '#000',
                                width: '50%',
                                height: '58px',
                                cursor: 'pointer',
                                borderRadius: '10px'
                            }}
                            onClick={() => ("Yana ko'rsatish")}
                        >
                            Yana ko'rsatish
                        </Button>
                    </Box>
                </Container>
            </Layout>
        </>
    );
}

const generateCards = () => {
    const images = [
        "https://images.uzum.uz/cm1c281uf2i84h4padeg/original.jpg",
        "https://images.uzum.uz/cebl5r0v1htd23aj1u5g/original.jpg",
        "https://images.uzum.uz/cee752avtie1lhbf2ti0/original.jpg",
        "https://images.uzum.uz/ce36s18v1htd23aii240/original.jpg",
        "https://images.uzum.uz/ckjbb6cjvf2sulnvad3g/original.jpg",
        "https://images.uzum.uz/chrev1rltlh4bk4kll2g/original.jpg",
        "https://images.uzum.uz/cc88ggeha8816arta5l0/original.jpg",
        "https://images.uzum.uz/ce4pavqvtie1lhbehr4g/original.jpg",
        "https://images.uzum.uz/cjpj29sjvf2hdh3edkvg/original.jpg",
        "https://images.uzum.uz/ck2m7t3k9fq74920jj10/original.jpg",
        "https://images.uzum.uz/ccu4pqrb3ho5lmuptc4g/original.jpg",
        "https://images.uzum.uz/cfiefv125kualhm86v7g/original.jpg",
        "https://images.uzum.uz/clqopkl6sfhsc0uo0n90/original.jpg",
        "https://images.uzum.uz/cli6fdtennt1kt4dv79g/original.jpg",
        "https://images.uzum.uz/cg8opifg49devoaam8pg/original.jpg",
        "https://images.uzum.uz/cdcbg2r5a95unf139220/original.jpg",
        "https://images.uzum.uz/chod91d6sfhndlbmvp1g/original.jpg",
        "https://images.uzum.uz/ce9j210v1htd23aiuang/original.jpg",
        "https://images.uzum.uz/cfnkvdnhgiopn8lchib0/original.jpg",
        "https://images.uzum.uz/ce7lao2vtie1lhbem7vg/original.jpg"
    ];
    const titles = [
        "Фитнес-браслет Xiaomi Smart Mi Band 8 Global version: Русская",
        "Смарт телевизор TCL 43 P635, 4K Led HDR 10 + Google TV",
        "Водонепроницаемая машина Амфибия,+ браслетом",
        "Антивибрационные напольные под стиральную машину",
        "Кондиционер TCL TAC - 12CHSD/YA 11 I Invertor, с тэном",
        "Формы для выпечки торта, 3 шт",
        "Пенка для умывания лица Images, 60 мл",
        "Телевизор WellStars Smart TV Full HD",
        "Сумка-шоппер женская, вельветовая",
        "Беспроводные наушники Cat Ear Bluetooth, детские",
        "Набор женских сережек, серьги с бабочками и кольцами, 5 пар",
        "Патчи с экстрактом черного жемчуга для глаз, 60 штук",
        "Шпроты в масле За Родину из балтийской кильки, 160 г",
        "Исламские мужские часы Al Harameen HA-6506",
        "Казан для плова Kukmara Granit Ultra ",
        "Кастрюля Kukmara Granit Uitra Blue",
        "Консилер для лица, тональный корректор, 3.5 г",
        "Пудра для лица 5 в 1, кушон тональный крем для лица",
        "Детская смесь NAN 2, 800 г",
        "Профессиональная машинка для стрижки волос V-175"
    ];

    const descriptions = [
        "Global version: Русский язык",
        "Bluetooth 5.1 - есть. Google Ассистент",
        "Время использования: около 45 минут",
        "холодильника морозильного шкафа",
        "Фреон R32. Низкий уровень шума (до 19дБ)",
        "Формы имет разъемную конструкцию",
        "Преимущества: минимальный расход",
        "Страна производства: 32",
        "Красочные цвета и уникальный дизайн",
        "Слот для карты памяти Micro SD",
        "5 пар на любой случай жизни",
        "Увлажняют и питают кожу",
        "Консервы рыбные",
        "Автоматическое направление киблы",
        "Казан для плова 7л не стеклянной крышкой",
        "Усиленная антипригарная система;",
        "Глицерин смягчает эпидермис.",
        "Маскирует несовершенства кожи",
        "Объём: 800г",
        "Тип питания - Аккумулятор"
    ];
    const fakePrices = [
        "900 000 сум",
        "5 625 000 сум",
        "70 000 сум",
        "70 000 сум",
        "6 915 000 сум",
        "59 000 сум",
        "2 290 000 сум",
        "180 000 сум",
        "50 000 сум",
        "70 000 сум",
        "450 000 сум",
        "398 000 сум",
        "297 000 сум",
        "100 000 сум",
        "132 000 сум",
        "219 000 сум",
        "450 000 сум"
    ];

    const prices = [
        "539 000 сум",
        "3 428 000 сум",
        "27 000 сум",
        "27 000 сум",
        "4 776 000 сум",
        "22 000 сум",
        "1 697 000 сум",
        "59 000 сум",
        "18 000 сум",
        "20 000 сум",
        "345 000 сум",
        "348 000 сум",
        "237 000 сум",
        "12 000 сум",
        "36 000 сум",
        "183 000 сум",
        "239 000 сум",
    ];

    const cards = [];
    for (let i = 0; i < 20; i++) {
        cards.push(
            <Box key={i} display="block" bgcolor={"#fff"} width={{ xs: "100%", sm: "calc(20% - 16px)", md: "calc(20% - 32px)" }} marginBottom={3} borderRadius={3}>
                <div style={{ position: "relative" }}>
                    <img
                        src={images[i % images.length]} // Use images from the array based on index
                        width={"100%"}
                        height={"auto"}
                        alt=""
                        style={{ borderRadius: "9px" }}
                    />
                    <LikeButton />
                </div>
                <div style={{ padding: "10px" }}>
                    {/* Title */}
                    <h3>{titles[i % titles.length]}</h3>
                    {/* Description */}
                    <p style={{ fontSize: "13px", color: "GrayText" }}>{descriptions[i % descriptions.length]}</p>
                    {/* Prices */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "10px" }}>
                        <h3 style={{ color: "grey", textDecoration: "line-through", fontSize: "13px" }}>{fakePrices[i % fakePrices.length]}</h3>
                    </div>
                    <h3 style={{ fontSize: "17px" }}>{prices[i % prices.length]}</h3>
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", }}>
                    <button
                        data-v-1a3a46a8=""
                        data-v-40da8b10=""
                        title="Добавить Кондиционер TCL TAC - 12CHSD/YA 11 I Invertor, с тэном в корзину"
                        data-test-id="button__add-to-cart"
                        className="ui-component ui-button add-to-cart tertiary-outlined small fill"
                        style={{ animation: "roll 2s infinite" }} // Add rolling animation
                    >
                        <div data-v-1a3a46a8="" className="slot default">
                            <svg
                                data-v-40da8b10=""
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="ui-icon add-cart-icon"
                            >
                                <path
                                    d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                                    fill="black"
                                ></path>
                                <path
                                    d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                                    fill="black"
                                ></path>
                            </svg>
                        </div>{" "}
                        {/* Empty space is added here to avoid text selection */}
                    </button>
                </div>
            </Box>
        );
    }
    return cards;
};

// LikeButton component
const LikeButton = () => (
    <div
        style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            zIndex: "999"
        }}
    >
        <button style={{ backgroundColor: "transparent", border: "none", outline: "none", cursor: "pointer" }}>
            {/* Add the heart icon here */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#7000FF" />
            </svg>
        </button>

    </div>
);

export default App;
