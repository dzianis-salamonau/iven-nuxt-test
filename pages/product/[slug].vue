<template>
  <div v-if="product">
    <div>
      <div class="text-[#000] grid grid-cols-1 xl:grid-cols-[1fr,440px] gap-5">
        <div>
          <h1 class="mb-10 max-w-[900px]" v-if="product.name">{{ product.name }}</h1>
          <!---->
          <div class="flex flex-wrap text-sm items-center mb-6 lg:mb-12 text-[#7C7C7C] gap-y-2 gap-x-6 lg:gap-[60px]">
            <div class="text-[#00B3D7] flex gap-3 items-center">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4688 25.8125H5.625C5.125 25.8125 4.6875 25.625 4.3125 25.25C3.9375 24.875 3.75 24.4375 3.75 23.9375V5.75C3.75 5.25 3.91146 4.8125 4.23438 4.4375C4.55729 4.0625 4.83333 3.875 5.0625 3.875H11.375C11.5208 3.14583 11.8802 2.54688 12.4531 2.07813C13.026 1.60938 13.6875 1.375 14.4375 1.375C15.1875 1.375 15.849 1.60938 16.4219 2.07813C16.9948 2.54688 17.3542 3.14583 17.5 3.875H23.8125C24.3125 3.875 24.75 4.0625 25.125 4.4375C25.5 4.8125 25.6875 5.25 25.6875 5.75V12.0938H23.8125V5.75H20.5V9.8125H8.9375V5.75H5.625V23.9375H13.4688V25.8125ZM19.375 25.0313L14.375 20.0313L15.7188 18.6875L19.375 22.3438L26.8438 14.875L28.1875 16.2188L19.375 25.0313ZM15 5.625C15.3542 5.625 15.651 5.50521 15.8906 5.26563C16.1302 5.02604 16.25 4.72917 16.25 4.375C16.25 4.02083 16.1302 3.72396 15.8906 3.48438C15.651 3.24479 15.3542 3.125 15 3.125C14.6458 3.125 14.349 3.24479 14.1094 3.48438C13.8698 3.72396 13.75 4.02083 13.75 4.375C13.75 4.72917 13.8698 5.02604 14.1094 5.26563C14.349 5.50521 14.6458 5.625 15 5.625Z" fill="#00B3D7"></path>
              </svg>
              <span>Товар в наличии</span>
            </div>
          </div>
          <div class="tags mb-6 lg:hidden">
            <!---->
            <!---->
            <div class="bg-[#F54D4D] flex-1">В рассрочку</div>
          </div>
          <div class="flex gap-8 flex-wrap">
            <div class="profile-img">
              <!--[-->
              <div class="gap-6 select-none hidden lg:flex">
                <div class="border rounded px-8 py-12">
                  <img src="//img.i-ven.by/big/iven_by-gaming-black-180545_180545_1.jpg" alt="Компьютер IVEN BY Gaming Black 180545 Ryzen 5 3600/16Gb/240Gb/RTX 3050 6Gb/500W" width="600" height="600" class="w-[395px] h-[395px] block cursor-pointer object-contain aspect-square">
                </div>
                <div class="flex flex-col gap-2">
                  <!--[-->
                  <div>
                    <img src="//img.i-ven.by/big/iven_by-gaming-black-180545_180545_1.jpg" alt="Компьютер IVEN BY Gaming Black 180545 Ryzen 5 3600/16Gb/240Gb/RTX 3050 6Gb/500W" loading="lazy" width="600" height="600" class="shadow-md cursor-pointer py-[2px] px-[5px] border rounded object-contain aspect-square w-[68px] h-[68px]">
                  </div>
                  <div>
                    <img src="//img.i-ven.by/big/iven_by-gaming-black-180545_180545_2.jpg" alt="Компьютер IVEN BY Gaming Black 180545 Ryzen 5 3600/16Gb/240Gb/RTX 3050 6Gb/500W" loading="lazy" width="600" height="600" class="cursor-pointer py-[2px] px-[5px] border rounded object-contain aspect-square w-[68px] h-[68px]">
                  </div>
                  <!--]-->
                </div>
              </div>
              <div class="lg:hidden max-w-[calc(100vw-60px)]">
                <div class="carousel select-none">
                  <!--[-->
                  <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <!--[-->
                    <!--]-->
                    <div class="swiper-wrapper" style="transition-duration: 0ms; transition-delay: 0ms; transform: translate3d(0px, 0px, 0px);">
                      <!--[-->
                      <!--]-->
                      <!--[-->
                      <div class="swiper-slide swiper-slide-active slide" style="width: 852px;">
                        <!--[-->
                        <img src="//img.i-ven.by/big/iven_by-gaming-black-180545_180545_1.jpg" width="600" height="600" alt="Компьютер IVEN BY Gaming Black 180545 Ryzen 5 3600/16Gb/240Gb/RTX 3050 6Gb/500W" class="aspect-square object-contain">
                        <!--]-->
                        <!---->
                      </div>
                      <div class="swiper-slide swiper-slide-next slide" style="width: 852px;">
                        <!--[-->
                        <img src="//img.i-ven.by/big/iven_by-gaming-black-180545_180545_2.jpg" width="600" height="600" alt="Компьютер IVEN BY Gaming Black 180545 Ryzen 5 3600/16Gb/240Gb/RTX 3050 6Gb/500W" class="aspect-square object-contain">
                        <!--]-->
                        <!---->
                      </div>
                      <!--]-->
                      <!--[-->
                      <!--]-->
                    </div>
                    <!---->
                    <!---->
                    <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                      <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                      <span class="swiper-pagination-bullet"></span>
                    </div>
                    <!--[-->
                    <!--]-->
                  </div>
                  <!--]-->
                </div>
              </div>
              <!---->
              <!--]-->
            </div>
            <div class="text-sm flex flex-col gap-4 flex-1 min-w-[200px] profile-short">
              <div class="text-[12px] font-semibold mb-4 hidden xl:block">Код товара: 180545</div>
              <!---->
              <div class="table-wrap hidden lg:block" v-if="product.description">
                <div v-html="product.description"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-sm flex flex-col row-span-2">
          <div class="block xl:hidden text-[12px] font-semibold mb-4">Код товара: 180545</div>
          <!--[-->
          <div class="rounded-[5px] px-4 py-5 relative overflow-hidden" style="background:linear-gradient(151.7deg, #00a2c1 0%, #87ebff 99.41%);">
            <div class="absolute inset-0 bg-cover" style="background-image:url(//i-ven.by/img/bg/stripes.svg);"></div>
            <div class="relative">
              <div class="text-white text-[26px] font-extrabold leading-[1.25]"> БЫСТРАЯ ПОКУПКА <br> С КАРТАМИ РАССРОЧКИ! </div>
              <div class="flex gap-2 card-logos mt-4">
                <!--[-->
                <img src="//i-ven.by/img/info/vtb.png" loading="lazy" width="64" height="40" alt="Черепаха">
                <img src="//i-ven.by/img/info/halva-mix.png" loading="lazy" width="64" height="40" alt="Халва">
                <img src="//i-ven.by/img/info/magnit.png" loading="lazy" width="64" height="40" alt="Магнит">
                <!--]-->
              </div>
            </div>
          </div>
          <div class="lg:px-4">
            <div class="my-8">
              <!---->
              <div class="text-[32px] font-semibold" v-if="product.Price">{{ product.Price }}&nbsp;Br</div>
            </div>
            <div class="cards-info">
              <!--[-->
              <!---->
              <p>
                <a class="underline underline-offset-2">При оплате картой рассрочки, от </a>
                <strong>218.81</strong>
                <span class="text-[#444]"> бел. рублей в месяц</span>
              </p>
              <p>
                <a class="underline underline-offset-2">При покупке в кредит, ежемесячный платёж </a>
                <br>
                <strong>1717.80</strong>
                <span class="text-[#444]"> бел. рублей в течение <strong>6</strong> месяцев </span>
              </p>
              <!--]-->
              <!---->
              <!---->
              <!---->
            </div>
          </div>
          <!--]-->
          <div class="price-info flex flex-col flex-1">
            <!--[-->
            <button class="btn mb-4 is-large">
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 12V9.5H4.25V12H0.5ZM4.75 18.9375L3 17.125L5.625 14.5L7.4375 16.25L4.75 18.9375ZM5.625 7L3 4.375L4.75 2.5625L7.4375 5.25L5.625 7ZM20.5 22L14.5625 16.0625L13 20.75L9.25 8.25L21.75 12L17.125 13.625L23 19.5L20.5 22ZM10.5 4.5V0.75H13V4.5H10.5ZM17.875 7L16.0625 5.25L18.75 2.5625L20.5 4.3125L17.875 7Z" fill="white"></path>
              </svg> Купить в один клик </button>
            <!---->
            <!--]-->
            <div class="has-large">
              <button class="btn flex w-full relative is-plain">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                  <path d="M8.96212 27.4688C8.34154 27.4688 7.8125 27.2478 7.375 26.8059C6.9375 26.3639 6.71875 25.8327 6.71875 25.2121C6.71875 24.5915 6.93971 24.0625 7.38163 23.625C7.82356 23.1875 8.35481 22.9688 8.97538 22.9688C9.59596 22.9688 10.125 23.1897 10.5625 23.6316C11 24.0736 11.2188 24.6048 11.2188 25.2254C11.2188 25.846 10.9978 26.375 10.5559 26.8125C10.1139 27.25 9.58269 27.4688 8.96212 27.4688ZM21.4621 27.4688C20.8415 27.4688 20.3125 27.2478 19.875 26.8059C19.4375 26.3639 19.2188 25.8327 19.2188 25.2121C19.2188 24.5915 19.4397 24.0625 19.8816 23.625C20.3236 23.1875 20.8548 22.9688 21.4754 22.9688C22.096 22.9688 22.625 23.1897 23.0625 23.6316C23.5 24.0736 23.7188 24.6048 23.7188 25.2254C23.7188 25.846 23.4978 26.375 23.0559 26.8125C22.6139 27.25 22.0827 27.4688 21.4621 27.4688ZM7.34375 6.84375L10.7812 13.9688H19.7812L23.6875 6.84375H7.34375ZM6.40625 4.96875H24.8148C25.2932 4.96875 25.6572 5.1875 25.9068 5.625C26.1564 6.0625 26.1562 6.5 25.9062 6.9375L21.6875 14.5312C21.4583 14.9271 21.1608 15.2448 20.795 15.4844C20.4292 15.724 20.0288 15.8438 19.5938 15.8438H10.125L8.375 19.0938H23.7188V20.9688H8.65625C7.78125 20.9688 7.15104 20.6771 6.76562 20.0938C6.38021 19.5104 6.38542 18.8542 6.78125 18.125L8.78125 14.4375L4.03125 4.375H1.59375V2.5H5.25L6.40625 4.96875Z" fill="#00B3D7"></path>
                </svg>В корзину </button>
            </div>
            <div class="bg-[#EFEFEF] flex relative rounded mt-4">
              <button class="w-10 flex-1 btn is-transparent leading-[50px]">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8167 15.2208L15.3833 13.4417L17.9208 15.2208L16.9583 12.1292L19.4958 10H16.4042L15.3833 6.96667L14.3333 10H11.2417L13.7792 12.1292L12.8167 15.2208ZM2.11249 19.3333C1.64582 19.3333 1.23749 19.1535 0.887488 18.7938C0.537488 18.434 0.362488 18.0306 0.362488 17.5833V2.41667C0.362488 1.96945 0.537488 1.56598 0.887488 1.20626C1.23749 0.846533 1.64582 0.666672 2.11249 0.666672H10.2792L12.0292 2.41667H21.9458C22.393 2.41667 22.7965 2.59653 23.1562 2.95625C23.516 3.31598 23.6958 3.71945 23.6958 4.16667V17.5833C23.6958 18.0306 23.516 18.434 23.1562 18.7938C22.7965 19.1535 22.393 19.3333 21.9458 19.3333H2.11249ZM2.11249 2.41667V17.5833H21.9458V4.16667H11.3L9.54999 2.41667H2.11249Z" fill="currentColor"></path>
                </svg>Сохранить </button>
              <div class="border absolute top-[5px] bottom-[5px] left-1/2"></div>
              <button class="w-10 flex-1 btn is-transparent leading-[50px]">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.28333 16.9208H7.03333V8.9H5.28333V16.9208ZM10.125 16.9208H11.875V5.07917H10.125V16.9208ZM14.9667 16.9208H16.7167V12.6042H14.9667V16.9208ZM2.25 21.5C1.78333 21.5 1.375 21.325 1.025 20.975C0.675 20.625 0.5 20.2167 0.5 19.75V2.25C0.5 1.78333 0.675 1.375 1.025 1.025C1.375 0.675 1.78333 0.5 2.25 0.5H19.75C20.2167 0.5 20.625 0.675 20.975 1.025C21.325 1.375 21.5 1.78333 21.5 2.25V19.75C21.5 20.2167 21.325 20.625 20.975 20.975C20.625 21.325 20.2167 21.5 19.75 21.5H2.25ZM2.25 19.75H19.75V2.25H2.25V19.75Z" fill="currentColor"></path>
                </svg> Сравнить </button>
            </div>
            <!--[-->
            <button class="btn mt-4 mb-6 xl:mb-10 is-large">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6667 12.8333V9.33333H15.1667V7H18.6667V3.5H21V7H24.5V9.33333H21V12.8333H18.6667ZM23.275 24.5C20.8444 24.5 18.4431 23.9701 16.0708 22.9104C13.6986 21.8507 11.5403 20.3486 9.59583 18.4042C7.65139 16.4597 6.14931 14.3014 5.08958 11.9292C4.02986 9.55694 3.5 7.15556 3.5 4.725C3.5 4.375 3.61667 4.08333 3.85 3.85C4.08333 3.61667 4.375 3.5 4.725 3.5H9.45C9.72222 3.5 9.96528 3.59236 10.1792 3.77708C10.3931 3.96181 10.5194 4.18056 10.5583 4.43333L11.3167 8.51667C11.3556 8.82778 11.3458 9.09028 11.2875 9.30417C11.2292 9.51806 11.1222 9.70278 10.9667 9.85833L8.1375 12.7167C8.52639 13.4361 8.98819 14.1313 9.52292 14.8021C10.0576 15.4729 10.6458 16.1194 11.2875 16.7417C11.8903 17.3444 12.5222 17.9035 13.1833 18.4187C13.8444 18.934 14.5444 19.4056 15.2833 19.8333L18.025 17.0917C18.2 16.9167 18.4285 16.7854 18.7104 16.6979C18.9924 16.6104 19.2694 16.5861 19.5417 16.625L23.5667 17.4417C23.8389 17.5194 24.0625 17.6604 24.2375 17.8646C24.4125 18.0688 24.5 18.2972 24.5 18.55V23.275C24.5 23.625 24.3833 23.9167 24.15 24.15C23.9167 24.3833 23.625 24.5 23.275 24.5ZM7.02917 10.5L8.95417 8.575L8.45833 5.83333H5.8625C5.95972 6.63056 6.09583 7.41806 6.27083 8.19583C6.44583 8.97361 6.69861 9.74167 7.02917 10.5ZM17.4708 20.9417C18.2292 21.2722 19.0021 21.5347 19.7896 21.7292C20.5771 21.9236 21.3694 22.05 22.1667 22.1083V19.5417L19.425 18.9875L17.4708 20.9417Z" fill="white"></path>
              </svg> Заказать обратный звонок </button>
            <!---->
            <!--]-->
            <div class="text lg:px-4">
              <p class="hidden sm:block">Самовывоз только в Минске.</p>
              <p class="hidden sm:block">Стоимость и сроки доставки по РБ уточняйте в отделе продаж.</p>
              <p>Возможность и стоимость доставки по стране в удобный для Вас день уточняйте у специалиста call-центра.</p>
              <p>Товар может отличаться от изображения на сайте. Производитель может менять комплектацию товара без извещения продавца</p>
              <p>Производитель: ООО "Компьютеры Айвен", г.Минск, ул.Репина, 4, 475-2</p>
              <p>Импортер: ООО "Компьютеры Айвен" г. Минск ул. Репина д. 4 пом. 475-2</p>
            </div>
          </div>
        </div>
      </div>
      <!--[-->
      <div class="text-blue cursor-pointer underline underline-offset-4 mt-6">Сообщить об ошибке в описании</div>
      <!---->
      <!--]-->
    </div>
  </div>
  <div v-else>
    <span>Товар не найден</span>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  const { slug } = route.params
  try {
    const response = await $fetch(`/api/product/${slug}`)
    if (response && response.message !== 'Товар не найден') {
      product.value = response
    } else {
      product.value = null
    }
  } catch (error) {
    console.error('Error fetching product:', error)
    product.value = null
  }
})
</script>
