
// < !DOCTYPE html >
//     <html lang="en" data-bs-theme="light">

//         <head>
//             <!--required meta tags-->
//             <meta charset="utf-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1">
//                     <meta name="csrf-token" content="Qxy9gkV0AmBqWP6KvZaYw9ga3fieRWvs3hqC7PY5">


//                         <!--meta-->
//                         <meta name="robots" content="index, follow">
//                             <meta name="description" content="">
//                                 <meta name="keywords" content="">

//                                     <!--favicon icon-->
//                                     <link rel="icon" href="https://grostore.themetags.com/public/uploads/media/yqqPV512Gk5DMpvCj2UllKrCl52bam3yD6QvfiPP.png" type="image/png" sizes="16x16">

//                                         <!--title-->
//                                         <title>
//                                             Customer Dashboard : Grostore Online Store
//                                         </title>


//                                         <!-- Schema.org markup for Google+ -->
//                                         <meta itemprop="name" content="" />
//                                         <meta itemprop="description" content="" />
//                                         <meta itemprop="image" content="https://grostore.themetags.com/frontend/default/assets/img/no-data-found.png" />

//                                         <!-- Twitter Card data -->
//                                         <meta name="twitter:card" content="product" />
//                                         <meta name="twitter:site" content="@publisher_handle" />
//                                         <meta name="twitter:title" content="" />
//                                         <meta name="twitter:description" content="" />
//                                         <meta name="twitter:creator"
//                                             content="@author_handle" />
//                                         <meta name="twitter:image" content="https://grostore.themetags.com/frontend/default/assets/img/no-data-found.png" />

//                                         <!-- Open Graph data -->
//                                         <meta property="og:title" content="" />
//                                         <meta property="og:type" content="website" />
//                                         <meta property="og:url" content="https://grostore.themetags.com" />
//                                         <meta property="og:image" content="https://grostore.themetags.com/frontend/default/assets/img/no-data-found.png" />
//                                         <meta property="og:description" content="" />
//                                         <meta property="og:site_name" content="Grostore Online Store" />
//                                         <meta property="fb:app_id" content="">

//                                             <!-- head-scripts -->
//                                             <script>
//                                                 'use strict'

//                                                 var TT = TT || { };
//                                                 TT.localize = {
//                                                     buyNow: 'Buy Now',
//                                                 addToCart: 'Add to Cart',
//                                                 outOfStock: 'Out of Stock',
//                                                 addingToCart: 'Adding..',
//                                                 optionsAlert: 'Please choose all the available options',
//                                                 applyCoupon: 'Apply Coupon',
//                                                 pleaseWait: 'Please Wait',
//     }

//     TT.ProductSliders = () => {
//                                                     let quickViewProductSlider = new Swiper(".quickview-product-slider", {
//                                                     slidesPerView: 1,
//                                                 centeredSlides: true,
//                                                 speed: 700,
//                                                 loop: true,
//                                                 loopedSlides: 6,
//         });
//                                                 let productThumbnailSlider = new Swiper(".product-thumbnail-slider", {
//                                                     slidesPerView: 4,
//                                                 speed: 700,
//                                                 loop: true,
//                                                 spaceBetween: 20,
//                                                 slideToClickedSlide: true,
//                                                 loopedSlides: 6,
//                                                 centeredSlides: true,
//                                                 breakpoints: {
//                                                     0: {
//                                                     slidesPerView: 2,
//                 },
//                                                 380: {
//                                                     slidesPerView: 3,
//                 },
//                                                 576: {
//                                                     slidesPerView: 4,
//                 },
//             },
//         });
//         if (quickViewProductSlider && quickViewProductSlider.length > 0) {
//                                                     quickViewProductSlider.forEach(function (item, index) {
//                                                         item.controller.control = productThumbnailSlider[index];
//                                                         productThumbnailSlider[index].controller.control = item;
//                                                     });
//         } else {
//                                                     quickViewProductSlider.controller.control = productThumbnailSlider;
//                                                 productThumbnailSlider.controller.control = quickViewProductSlider;
//         }
//     }
//                                             </script>
//                                             <!-- head-scripts -->

//                                             <!--build:css-->
//                                             <!-- 3rd party -->
//                                             <link rel="stylesheet" href="https://grostore.themetags.com/public/frontend/common/css/toastr.css?v=v3.0.0">
//                                                 <!-- 3rd party -->
//                                                 <link rel="stylesheet" href="https://grostore.themetags.com/public/frontend/default/assets/css/main.css?v=v3.0.0">

//                                                     <link rel="stylesheet" href="https://grostore.themetags.com/public/frontend/common/css/select2.css?v=v3.0.0">
//                                                         <link rel="stylesheet" href="https://grostore.themetags.com/public/frontend/common/css/custom.css?v=v3.0.0">
//                                                             <link rel="stylesheet" href="https://grostore.themetags.com/public/frontend/common/css/summernote-lite.min.css?v=v3.0.0">
//                                                                 <link rel="stylesheet" href="https://grostore.themetags.com/public/frontend/common/css/summernote-custom.css?v=v3.0.0">

//                                                                     <style>
//                                                                         @media (min-width: 1200px) {
//         .choose - us - section::after {
//                                                                             background - image: url(https://grostore.themetags.com/frontend/default/assets/img/no-data-found.png);
//         }

//                                                                         .on-sale-banner {
//                                                                             background - image: url(https://grostore.themetags.com/frontend/default/assets/img/no-data-found.png);
//         }
//                                                                     </style>
//                                                                     <!-- endbuild -->

//                                                                     <!-- PWA  -->
//                                                                     <meta name="theme-color" content="#6eb356" />
//                                                                     <link rel="apple-touch-icon" href="https://grostore.themetags.com/public//pwa.png?v=v3.0.0" />
//                                                                     <link rel="manifest" href="https://grostore.themetags.com/public//manifest.json?v=v3.0.0" />

//                                                                     <!-- recaptcha -->
//                                                                     <!-- recaptcha -->

//                                                                 </head>

//                                                                 <body>


//                                                                     <!--preloader start-->
//                                                                     <div id="preloader">
//                                                                         <img src="https://grostore.themetags.com/public/frontend/default/assets/img/preloader.gif?v=v3.0.0" alt="preloader" class="img-fluid">
//                                                                     </div>
//                                                                     <!--preloader end-->

//                                                                     <!--main content wrapper start-->
//                                                                     <div class="main-wrapper">
//                                                                         <!--header section start-->
//                                                                         <header class="gheader position-relative z-2 header-sticky">
//                                                                             <div class="ghead-topbar bg-primary d-none d-lg-block">
//                                                                                 <div class="container">
//                                                                                     <div class="row align-items-center">
//                                                                                         <div class="col-xxl-4 col-xl-3">
//                                                                                             <div class="topbar-info d-none d-xl-block">
//                                                                                                 <p class="text-white fs-sm fw-medium mb-0">Welcome to our Organic store</p>
//                                                                                             </div>

//                                                                                         </div>
//                                                                                         <div class="col-xxl-8 col-xl-9">

//                                                                                             <ul
//                                                                                                 class="d-flex align-items-center justify-content-center justify-content-xl-end topbar-info-right">
//                                                                                                 <li class="nav-item">
//                                                                                                     <a href="mailto:groshop@support.com" class="text-light">
//                                                                                                         <span class="me-1">
//                                                                                                             <svg width="16" height="14" viewBox="0 0 20 14" fill="none"
//                                                                                                                 xmlns="http://www.w3.org/2000/svg">
//                                                                                                                 <path
//                                                                                                                     d="M18.2422 0H1.75781C0.790547 0 0 0.783572 0 1.75V12.25C0 13.2168 0.791055 14 1.75781 14H18.2422C19.2095 14 20 13.2164 20 12.25V1.75C20 0.783339 19.2091 0 18.2422 0ZM17.9723 1.16667C17.4039 1.73433 10.7283 8.40194 10.4541 8.67588C10.225 8.90462 9.77512 8.90478 9.54594 8.67588L2.02773 1.16667H17.9723ZM1.17188 12.0355V1.96447L6.21348 7L1.17188 12.0355ZM2.02773 12.8333L7.04078 7.82631L8.71598 9.49951C9.40246 10.1852 10.5978 10.1849 11.2841 9.49951L12.9593 7.82635L17.9723 12.8333H2.02773ZM18.8281 12.0355L13.7865 7L18.8281 1.96447V12.0355Z"
//                                                                                                                     fill="white" />
//                                                                                                             </svg>
//                                                                                                         </span>
//                                                                                                         groshop@support.com
//                                                                                                     </a>
//                                                                                                 </li>
//                                                                                                 <li class="nav-item dropdown tt-language-dropdown">
//                                                                                                     <span class="me-1">
//                                                                                                         <svg width="12" height="17" viewBox="0 0 12 17" fill="none"
//                                                                                                             xmlns="http://www.w3.org/2000/svg">
//                                                                                                             <path
//                                                                                                                 d="M6.00011 8.16427C7.44543 8.16427 8.62131 6.98781 8.62131 5.54175C8.62131 4.09569 7.44543 2.91925 6.00011 2.91925C4.55478 2.91925 3.37891 4.09569 3.37891 5.54175C3.37891 6.98781 4.55478 8.16427 6.00011 8.16427ZM6.00011 3.85662C6.92883 3.85662 7.68441 4.61259 7.68441 5.54175C7.68441 6.47093 6.92886 7.2269 6.00011 7.2269C5.07136 7.2269 4.31581 6.47093 4.31581 5.54175C4.31581 4.61259 5.07139 3.85662 6.00011 3.85662Z"
//                                                                                                                 fill="white" stroke="white" stroke-width="0.3" />
//                                                                                                             <path
//                                                                                                                 d="M3.14593 10.2541C3.85594 11.2159 3.57069 10.8418 5.61579 13.7635C5.80167 14.0301 6.19695 14.0314 6.38389 13.7639C8.43824 10.8284 8.15557 11.2002 8.85403 10.254C9.56155 9.29555 10.2932 8.30443 10.6941 7.14299C11.2744 5.46171 11.0236 3.79818 9.9879 2.45881C9.98787 2.45881 9.98787 2.45878 9.98784 2.45878C9.03913 1.23225 7.54834 0.5 5.99998 0.5C4.45163 0.5 2.96083 1.23225 2.01209 2.45884C0.976407 3.79821 0.725568 5.46177 1.30588 7.14305C1.70675 8.30446 2.43841 9.29558 3.14593 10.2541ZM2.75305 3.03246C3.52562 2.03369 4.73944 1.43737 5.99998 1.43737C7.26052 1.43737 8.47434 2.03369 9.24691 3.03246L9.24684 3.03243C10.0828 4.11343 10.2822 5.46462 9.80852 6.83705C9.4544 7.86293 8.76606 8.79539 8.10039 9.69717C7.5821 10.3993 7.73721 10.1845 5.99998 12.6763C4.26456 10.187 4.41771 10.399 3.89957 9.69717C3.2339 8.79539 2.54556 7.86289 2.19144 6.83705C1.71775 5.46459 1.91718 4.11343 2.75305 3.03246Z"
//                                                                                                                 fill="white" stroke="white" stroke-width="0.3" />
//                                                                                                             <path
//                                                                                                                 d="M3.53116 12.2865C3.393 12.0677 3.10369 12.0023 2.88495 12.1405L1.55299 12.9823C1.26243 13.1659 1.26214 13.591 1.55299 13.7748L5.75031 16.4276C5.90312 16.5242 6.09787 16.5241 6.25065 16.4276L10.448 13.7748C10.7386 13.5912 10.7388 13.1661 10.448 12.9823L9.116 12.1405C8.8972 12.0023 8.60792 12.0677 8.46979 12.2865C8.3316 12.5053 8.39693 12.7948 8.61567 12.933L9.32065 13.3786L6.00046 15.4769L2.6803 13.3786L3.38529 12.933C3.60402 12.7948 3.66933 12.5053 3.53116 12.2865Z"
//                                                                                                                 fill="white" stroke="white" stroke-width="0.3" />
//                                                                                                         </svg>
//                                                                                                     </span>

//                                                                                                     <a href="#" class="dropdown-toggle text-capitalize text-light"
//                                                                                                         data-bs-toggle="dropdown" aria-haspopup="true"
//                                                                                                         aria-expanded="false">Default Location</a>

//                                                                                                     <ul class="dropdown-menu dropdown-menu-end">
//                                                                                                         <li>
//                                                                                                             <a class="dropdown-item fs-xs text-capitalize" href="javascript:void(0);"
//                                                                                                                 onclick="changeLocation(this)" data-location="1">
//                                                                                                                 Default Location
//                                                                                                             </a>
//                                                                                                         </li>
//                                                                                                         <li>
//                                                                                                             <a class="dropdown-item fs-xs text-capitalize" href="javascript:void(0);"
//                                                                                                                 onclick="changeLocation(this)" data-location="3">
//                                                                                                                 Location Two
//                                                                                                             </a>
//                                                                                                         </li>
//                                                                                                     </ul>
//                                                                                                 </li>



//                                                                                                 <li class="nav-item dropdown tt-language-dropdown">
//                                                                                                     <a href="#" class="dropdown-toggle text-light" data-bs-toggle="dropdown"
//                                                                                                         aria-haspopup="true" aria-expanded="true">
//                                                                                                         <img src="https://grostore.themetags.com/public/backend/assets/img/flags/en.png?v=v3.0.0"
//                                                                                                             alt="country" class="img-fluid me-1"> English
//                                                                                                     </a>
//                                                                                                     <ul class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">

//                                                                                                         <li>
//                                                                                                             <a class="dropdown-item" href="javascript:void(0);"
//                                                                                                                 onclick="changeLocaleLanguage(this)" data-flag="en">
//                                                                                                                 <img src="https://grostore.themetags.com/public/backend/assets/img/flags/en.png?v=v3.0.0"
//                                                                                                                     alt="country" class="img-fluid me-1">
//                                                                                                                     English
//                                                                                                             </a>
//                                                                                                         </li>
//                                                                                                         <li>
//                                                                                                             <a class="dropdown-item" href="javascript:void(0);"
//                                                                                                                 onclick="changeLocaleLanguage(this)" data-flag="ar-sa">
//                                                                                                                 <img src="https://grostore.themetags.com/public/backend/assets/img/flags/sa.png?v=v3.0.0"
//                                                                                                                     alt="country" class="img-fluid me-1">
//                                                                                                                     Arabic
//                                                                                                             </a>
//                                                                                                         </li>
//                                                                                                         <li>
//                                                                                                             <a class="dropdown-item" href="javascript:void(0);"
//                                                                                                                 onclick="changeLocaleLanguage(this)" data-flag="fr">
//                                                                                                                 <img src="https://grostore.themetags.com/public/backend/assets/img/flags/fr.png?v=v3.0.0"
//                                                                                                                     alt="country" class="img-fluid me-1">
//                                                                                                                     Français
//                                                                                                             </a>
//                                                                                                         </li>
//                                                                                                         <li>
//                                                                                                             <a class="dropdown-item" href="javascript:void(0);"
//                                                                                                                 onclick="changeLocaleLanguage(this)" data-flag="fr/FR">
//                                                                                                                 <img src="https://grostore.themetags.com/public/backend/assets/img/flags/ad.png?v=v3.0.0"
//                                                                                                                     alt="country" class="img-fluid me-1">
//                                                                                                                     French
//                                                                                                             </a>
//                                                                                                         </li>
//                                                                                                         <li>
//                                                                                                             <a class="dropdown-item" href="javascript:void(0);"
//                                                                                                                 onclick="changeLocaleLanguage(this)" data-flag="es">
//                                                                                                                 <img src="https://grostore.themetags.com/public/backend/assets/img/flags/es.png?v=v3.0.0"
//                                                                                                                     alt="country" class="img-fluid me-1">
//                                                                                                                     es
//                                                                                                             </a>
//                                                                                                         </li>
//                                                                                                         <li>
//                                                                                                             <a class="dropdown-item" href="javascript:void(0);"
//                                                                                                                 onclick="changeLocaleLanguage(this)" data-flag="pt-BR">
//                                                                                                                 <img src="https://grostore.themetags.com/public/backend/assets/img/flags/br.png?v=v3.0.0"
//                                                                                                                     alt="country" class="img-fluid me-1">
//                                                                                                                     Portugues
//                                                                                                             </a>
//                                                                                                         </li>
//                                                                                                     </ul>
//                                                                                                 </li>


//                                                                                                 <li class="nav-item dropdown tt-curency-dropdown">
//                                                                                                     <a href="#" class="dropdown-toggle text-uppercase text-light"
//                                                                                                         data-bs-toggle="dropdown" aria-haspopup="true"
//                                                                                                         aria-expanded="false">₹
//                                                                                                         INR</a>
//                                                                                                     <ul class="dropdown-menu dropdown-menu-end">
//                                                                                                         <li>
//                                                                                                             <a class="dropdown-item fs-xs text-uppercase" href="javascript:void(0);"
//                                                                                                                 onclick="changeLocaleCurrency(this)" data-currency="usd">
//                                                                                                                 $ usd
//                                                                                                             </a>
//                                                                                                         </li>
//                                                                                                         <li>
//                                                                                                             <a class="dropdown-item fs-xs text-uppercase" href="javascript:void(0);"
//                                                                                                                 onclick="changeLocaleCurrency(this)" data-currency="INR">
//                                                                                                                 ₹ INR
//                                                                                                             </a>
//                                                                                                         </li>
//                                                                                                         <li>
//                                                                                                             <a class="dropdown-item fs-xs text-uppercase" href="javascript:void(0);"
//                                                                                                                 onclick="changeLocaleCurrency(this)" data-currency="NGN">
//                                                                                                                 ₦ NGN
//                                                                                                             </a>
//                                                                                                         </li>
//                                                                                                     </ul>
//                                                                                                 </li>

//                                                                                                 <li class="nav-item">
//                                                                                                     <a href="javascript:void(0)" class="btn btn-link p-0 tt-theme-toggle fw-normal text-light">
//                                                                                                         <div class="tt-theme-light" data-bs-toggle="tooltip" data-bs-placement="left"
//                                                                                                             data-bs-title="Dark">Dark <i class="fas fa-moon fs-lg ms-1"></i>
//                                                                                                         </div>
//                                                                                                         <div class="tt-theme-dark" data-bs-toggle="tooltip" data-bs-placement="left"
//                                                                                                             data-bs-title="Light">Light <i class="fas fa-sun fs-lg ms-1"></i>
//                                                                                                         </div>
//                                                                                                     </a>
//                                                                                                 </li>
//                                                                                             </ul>
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div class="container">
//                                                                                 <div class="gshop-navbar bg-white rounded ps-lg-5 position-relative">
//                                                                                     <div class="row align-items-center">
//                                                                                         <div class="col-xxl-2 col-xl-3 col-md-3 col-5">
//                                                                                             <a href="https://grostore.themetags.com" class="logo"><img
//                                                                                                 src="https://grostore.themetags.com/public/uploads/media/0vDgRJLm6biMs5zCaVAze5RFwEwcTF4kSuHsZ9OT.png" alt="logo" class="img-fluid"></a>
//                                                                                         </div>
//                                                                                         <div class="col-xxl-10 col-xl-9 col-md-9 col-7">
//                                                                                             <div class="gshop-navbar-right d-flex align-items-center justify-content-end position-relative">

//                                                                                                 <div class="category-dropdown position-relative d-none d-md-inline-block">
//                                                                                                     <a href="javascript:void(0)"
//                                                                                                         class="category-dropdown-btn fw-bold d-none d-sm-inline-block">Categories<span
//                                                                                                             class="ms-1"><i class="fa-solid fa-angle-down"></i></span></a>

//                                                                                                     <div class="category-dropdown-box scrollbar">
//                                                                                                         <ul class="category-dropdown-menu">
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=2"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/aGeVazxlUQXFJR0WMObSRo14aOCKOE4jONbOtTfv.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Milk</span>
//                                                                                                                 </a>
//                                                                                                             </li>
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=3"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/cfhS63jnRBfMaGaUINykX9oTR4Vypy1APuirIImN.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Meat &amp; Fish</span>
//                                                                                                                 </a>
//                                                                                                             </li>
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=4"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/e9YeF8L34DkRI8cnCfKQP3QBd2SosU4xFuqA0d8a.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Bakery &amp; Biscuits</span>
//                                                                                                                 </a>
//                                                                                                             </li>
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=5"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/4rGt17EnNiVKsstcQJfZr70bDGXxkk3PcxK99oND.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Beauty &amp; Health</span>
//                                                                                                                 </a>
//                                                                                                             </li>
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=6"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/QZA5S8YHIm08QrrgdN74SfZrZBbhVloTvLaAyAue.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Cleaning</span>
//                                                                                                                 </a>
//                                                                                                             </li>
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=7"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/WReJ6ANlzBRlgvM2zj8UfoDlmf2SPlCx9x3rRgzd.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Breakfast</span>
//                                                                                                                 </a>
//                                                                                                             </li>
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=8"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/WQJjaqXZXNnUHaubvRhHh5c3m4knHkCSwHWCIPWd.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Baby Care</span>
//                                                                                                                 </a>
//                                                                                                             </li>
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=9"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/Fi49LWa1xxWipSnJzfW3PeoTPIELpNK7nibeMMCh.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Pet Care</span>
//                                                                                                                 </a>
//                                                                                                             </li>
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=10"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/5oephm2sfLrK3ISeqQThhR9rA5FKcCsDnRsOezBZ.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Jam &amp; Jelly</span>
//                                                                                                                 </a>
//                                                                                                             </li>
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=11"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/6Okf9CYyDN9I7KJd8zHTzm04OutW8JqT4MSfB3Pt.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Honey</span>
//                                                                                                                 </a>
//                                                                                                             </li>
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=12"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/wUmBSdLhhuyiPqNrzJJbxdtFemrBtwS2lDcfecbf.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Cold Drinks</span>
//                                                                                                                 </a>
//                                                                                                             </li>
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=13"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/B1w5t5CWLo5OtLqvM332UQfsWzIarG9qiyEVUNb0.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Fresh Organic</span>
//                                                                                                                 </a>
//                                                                                                             </li>
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=14"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/TMmhA1bTP1CTsrU3FpNspex6S3WNdqKy2xZR9aM8.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Fresh Fruits</span>
//                                                                                                                 </a>
//                                                                                                             </li>
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=15"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/OfNXzapZlaGqPdd3IcLP4D4bp8BkwDEjlRGhGbfh.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Coffee Drinks</span>
//                                                                                                                 </a>
//                                                                                                             </li>
//                                                                                                             <li>
//                                                                                                                 <a href="https://grostore.themetags.com/products?&category_id=16"
//                                                                                                                     class="d-flex align-items-center">
//                                                                                                                     <div class="me-2 avatar-icon">
//                                                                                                                         <img src="https://grostore.themetags.com/public/uploads/media/uJMJUEimGnHGQ1OFXuBZtDzAutNRicBjLOCMewlK.png"
//                                                                                                                             alt="" class="rounded-circle h-100 w-100">
//                                                                                                                     </div>
//                                                                                                                     <span>Vegetables</span>
//                                                                                                                 </a>
//                                                                                                             </li>

//                                                                                                         </ul>
//                                                                                                     </div>
//                                                                                                 </div>


//                                                                                                 <nav class="gshop-navmenu ms-3 d-none d-xl-block">
//                                                                                                     <ul class="d-flex align-itmes-center justify-content-end">

//                                                                                                         <li><a href="https://grostore.themetags.com">Home</a></li>
//                                                                                                         <li><a href="https://grostore.themetags.com/products">Products</a></li>
//                                                                                                         <li><a href="https://grostore.themetags.com/campaigns">Campaigns</a>
//                                                                                                         </li>
//                                                                                                         <li><a href="https://grostore.themetags.com/coupons">Coupons</a>
//                                                                                                         </li>

//                                                                                                         <li class="has-submenu">
//                                                                                                             <a href="javascript:void(0);">Pages<span
//                                                                                                                 class="ms-1 fs-xs float-end"><i
//                                                                                                                     class="fa-solid fa-angle-down"></i></span></a>
//                                                                                                             <ul>

//                                                                                                                 <li><a href="https://grostore.themetags.com/blogs">Blogs</a></li>
//                                                                                                                 <li><a
//                                                                                                                     href="https://grostore.themetags.com/pages/about-us">About Us</a>
//                                                                                                                 </li>
//                                                                                                                 <li><a
//                                                                                                                     href="https://grostore.themetags.com/pages/contact-us">Contact Us</a>
//                                                                                                                 </li>

//                                                                                                                 <li>
//                                                                                                                     <a href="https://grostore.themetags.com/pages/terms-conditions"
//                                                                                                                         class="d-flex align-items-center">
//                                                                                                                         <span>Terms &amp; Conditions</span>
//                                                                                                                     </a>
//                                                                                                                 </li>
//                                                                                                             </ul>
//                                                                                                         </li>
//                                                                                                     </ul>
//                                                                                                 </nav>
//                                                                                                 <div
//                                                                                                     class="gshop-header-icons d-none d-md-inline-flex align-items-center justify-content-end ms-3">
//                                                                                                     <div class="gshop-header-search dropdown">
//                                                                                                         <button type="button" class="header-icon" data-bs-toggle="dropdown">
//                                                                                                             <svg width="18" height="23" viewBox="0 0 22 23" fill="none"
//                                                                                                                 xmlns="http://www.w3.org/2000/svg">
//                                                                                                                 <path
//                                                                                                                     d="M9.68859 0.5C4.34645 0.5 0 4.84646 0 10.1886C0 15.5311 4.34645 19.8772 9.68859 19.8772C15.031 19.8772 19.3772 15.5311 19.3772 10.1886C19.3772 4.84646 15.031 0.5 9.68859 0.5ZM9.68859 18.0886C5.33261 18.0886 1.78866 14.5447 1.78866 10.1887C1.78866 5.83266 5.33261 2.28867 9.68859 2.28867C14.0446 2.28867 17.5885 5.83262 17.5885 10.1886C17.5885 14.5446 14.0446 18.0886 9.68859 18.0886Z"
//                                                                                                                     fill="#5D6374" />
//                                                                                                                 <path
//                                                                                                                     d="M21.7406 20.9824L16.6436 15.8853C16.2962 15.538 15.7338 15.538 15.3865 15.8853C15.0391 16.2323 15.0391 16.7954 15.3865 17.1424L20.4835 22.2395C20.6571 22.4131 20.8845 22.5 21.1121 22.5C21.3393 22.5 21.5669 22.4131 21.7406 22.2395C22.0879 21.8925 22.0879 21.3294 21.7406 20.9824Z"
//                                                                                                                     fill="#5D6374" />
//                                                                                                             </svg>
//                                                                                                         </button>
//                                                                                                         <div class="dropdown-menu dropdown-menu-end border-0">
//                                                                                                             <form class="search-form d-flex align-items-center"
//                                                                                                                 action="https://grostore.themetags.com/products">
//                                                                                                                 <input type="text" placeholder="Search products"
//                                                                                                                     class="w-100" name="search"
//                                                                                                                 >
//                                                                                                                     <button type="submit" class="submit-icon-btn-secondary"><i
//                                                                                                                         class="fa-solid fa-magnifying-glass"></i></button>
//                                                                                                             </form>
//                                                                                                         </div>
//                                                                                                     </div>
//                                                                                                     <div class="gshop-header-user position-relative">
//                                                                                                         <button type="button" class="header-icon">
//                                                                                                             <svg width="18" height="25" viewBox="0 0 22 25" fill="none"
//                                                                                                                 xmlns="http://www.w3.org/2000/svg">
//                                                                                                                 <path
//                                                                                                                     d="M11.092 11.9546C12.6656 11.9546 14.0281 11.3902 15.1416 10.2766C16.2547 9.16322 16.8193 7.80093 16.8193 6.2271C16.8193 4.65382 16.2549 3.29134 15.1414 2.1776C14.0279 1.0644 12.6654 0.5 11.092 0.5C9.51825 0.5 8.156 1.0644 7.04266 2.17778C5.92931 3.29116 5.36475 4.65363 5.36475 6.2271C5.36475 7.80093 5.92931 9.1634 7.04266 10.2768C8.15636 11.39 9.51879 11.9546 11.092 11.9546ZM8.0281 3.16308C8.88239 2.30877 9.88453 1.89349 11.092 1.89349C12.2993 1.89349 13.3017 2.30877 14.1561 3.16308C15.0104 4.01757 15.4259 5.01992 15.4259 6.2271C15.4259 7.43464 15.0104 8.43681 14.1561 9.2913C13.3017 10.1458 12.2993 10.5611 11.092 10.5611C9.88489 10.5611 8.88275 10.1456 8.0281 9.2913C7.17364 8.43699 6.7582 7.43464 6.7582 6.2271C6.7582 5.01992 7.17364 4.01757 8.0281 3.16308Z"
//                                                                                                                     fill="#5D6374" stroke="#5D6374" stroke-width="0.2" />
//                                                                                                                 <path
//                                                                                                                     d="M21.1339 18.893C21.1012 18.4201 21.0352 17.9043 20.9379 17.3596C20.8397 16.8108 20.7133 16.292 20.562 15.8178C20.4055 15.3277 20.1931 14.8438 19.9301 14.38C19.6575 13.8986 19.3371 13.4794 18.9776 13.1345C18.6016 12.7736 18.1414 12.4835 17.6091 12.2719C17.0787 12.0614 16.4909 11.9547 15.8621 11.9547C15.6152 11.9547 15.3763 12.0564 14.9151 12.3576C14.6313 12.5433 14.2993 12.7581 13.9287 12.9956C13.6118 13.1982 13.1825 13.3879 12.6523 13.5598C12.135 13.7277 11.6098 13.8129 11.0912 13.8129C10.5729 13.8129 10.0477 13.7277 9.53001 13.5598C9.00034 13.3881 8.57088 13.1984 8.25455 12.9958C7.88747 12.7605 7.55527 12.5457 7.26718 12.3574C6.80634 12.0562 6.56753 11.9545 6.32059 11.9545C5.69163 11.9545 5.10401 12.0614 4.57378 12.2721C4.04189 12.4833 3.58143 12.7734 3.20512 13.1347C2.84561 13.4798 2.52522 13.8988 2.25281 14.38C1.99019 14.8438 1.77758 15.3276 1.62108 15.818C1.46993 16.2922 1.34351 16.8108 1.24533 17.3596C1.14788 17.9035 1.082 18.4195 1.04933 18.8935C1.01722 19.3569 1.00098 19.8393 1.00098 20.3266C1.00098 21.5934 1.40238 22.6189 2.19394 23.3752C2.97572 24.1216 4.00996 24.5 5.26808 24.5H16.9157C18.1735 24.5 19.2077 24.1216 19.9897 23.3752C20.7814 22.6194 21.1828 21.5935 21.1828 20.3264C21.1826 19.8374 21.1662 19.3551 21.1339 18.893ZM19.0123 22.3449C18.4957 22.8381 17.8099 23.0779 16.9155 23.0779H5.26808C4.37354 23.0779 3.68773 22.8381 3.17135 22.3451C2.66474 21.8613 2.41854 21.2008 2.41854 20.3266C2.41854 19.8718 2.43349 19.4229 2.46339 18.9918C2.49255 18.569 2.55216 18.1044 2.64056 17.6108C2.72786 17.1233 2.83896 16.6658 2.9711 16.2516C3.09789 15.8545 3.27082 15.4612 3.48527 15.0824C3.68995 14.7214 3.92544 14.4116 4.18529 14.1621C4.42835 13.9286 4.73471 13.7375 5.0957 13.5942C5.42956 13.4616 5.80476 13.3891 6.21208 13.3781C6.26172 13.4046 6.35012 13.4552 6.49334 13.5488C6.78475 13.7394 7.12064 13.9567 7.49197 14.1946C7.91054 14.4624 8.44981 14.7042 9.09409 14.9128C9.75277 15.1265 10.4245 15.235 11.0913 15.235C11.7581 15.235 12.4301 15.1265 13.0884 14.913C13.7333 14.704 14.2723 14.4624 14.6915 14.1943C15.0715 13.9506 15.3979 13.7395 15.6894 13.5488C15.8326 13.4553 15.921 13.4046 15.9706 13.3781C16.3781 13.3891 16.7533 13.4616 17.0874 13.5942C17.4482 13.7375 17.7545 13.9288 17.9976 14.1621C18.2574 14.4114 18.4929 14.7212 18.6976 15.0826C18.9122 15.4612 19.0854 15.8547 19.212 16.2515C19.3443 16.6662 19.4556 17.1235 19.5427 17.6106C19.6309 18.1052 19.6907 18.5699 19.7199 18.992V18.9924C19.7499 19.4218 19.7651 19.8705 19.7653 20.3266C19.7651 21.201 19.5189 21.8613 19.0123 22.3449Z"
//                                                                                                                     fill="#5D6374" stroke="#5D6374" stroke-width="0.2" />
//                                                                                                             </svg>
//                                                                                                         </button>
//                                                                                                         <div class="user-menu-wrapper">
//                                                                                                             <ul class="user-m   enu">
//                                                                                                                 <li><a href="https://grostore.themetags.com/customer-dashboard"><span class="me-2"><i
//                                                                                                                     class="fa-solid fa-user"></i></span>My Account</a>
//                                                                                                                 </li>
//                                                                                                                 <li><a href="https://grostore.themetags.com/customer-order-history"><span
//                                                                                                                     class="me-2"><i
//                                                                                                                         class="fa-solid fa-tags"></i></span>My Orders</a>
//                                                                                                                 </li>
//                                                                                                                 <li><a href="https://grostore.themetags.com/wishlist"><span class="me-2"><i
//                                                                                                                     class="fa-solid fa-heart"></i></span>My Wishlist</a>
//                                                                                                                 </li>

//                                                                                                                 <li><a href="https://grostore.themetags.com/logout"><span class="me-2"><i
//                                                                                                                     class="fa-solid fa-arrow-right-from-bracket"></i></span>Sign out
//                                                                                                                 </a></li>




//                                                                                                             </ul>
//                                                                                                         </div>
//                                                                                                     </div>
//                                                                                                     <div class="gshop-header-cart position-relative">


//                                                                                                         <button type="button" class="header-icon">
//                                                                                                             <svg width="18" height="25" viewBox="0 0 22 25" fill="none"
//                                                                                                                 xmlns="http://www.w3.org/2000/svg">
//                                                                                                                 <path
//                                                                                                                     d="M21.1704 23.9559L19.6264 7.01422C19.5843 6.55156 19.1908 6.19718 18.7194 6.19718H15.5355V4.78227C15.5355 2.14533 13.3583 0 10.6823 0C8.00628 0 5.82937 2.14533 5.82937 4.78227V6.19718H2.6433C2.17192 6.19718 1.77839 6.55156 1.73625 7.01422L0.186259 24.0225C0.163431 24.2735 0.248671 24.5223 0.421216 24.7082C0.593761 24.8941 0.837705 25 1.0933 25H20.2695C20.2702 25 20.2712 25 20.2719 25C20.775 25 21.1826 24.5982 21.1826 24.1027C21.1825 24.0528 21.1784 24.0036 21.1704 23.9559ZM7.65075 4.78227C7.65075 3.1349 9.01071 1.79465 10.6824 1.79465C12.3542 1.79465 13.7142 3.1349 13.7142 4.78227V6.19718H7.65075V4.78227ZM2.08948 23.2055L3.47591 7.99183H5.82937V9.59649C5.82937 10.0921 6.237 10.4938 6.74006 10.4938C7.24313 10.4938 7.65075 10.0921 7.65075 9.59649V7.99183H13.7142V9.59649C13.7142 10.0921 14.1219 10.4938 14.6249 10.4938C15.128 10.4938 15.5356 10.0921 15.5356 9.59649V7.99183H17.8869L19.2733 23.2055H2.08948Z"
//                                                                                                                     fill="#5D6374" />
//                                                                                                             </svg>
//                                                                                                             <span
//                                                                                                                 class="cart-counter badge bg-primary rounded-circle p-0 ">1</span>
//                                                                                                         </button>
//                                                                                                         <div class="cart-box-wrapper">
//                                                                                                             <div class="apt_cart_box theme-scrollbar">
//                                                                                                                 <ul class="at_scrollbar scrollbar cart-navbar-wrapper">
//                                                                                                                     <!--cart listing-->
//                                                                                                                     <li class="d-flex align-items-center pb-3 ">
//                                                                                                                         <div class="thumb-wrapper">
//                                                                                                                             <a href="https://grostore.themetags.com/products/black-grapes-sw7mk"><img
//                                                                                                                                 src="https://grostore.themetags.com/public/uploads/media/bbw2d73kLAmFHxl0EJDdNR5EzxH5uc7lxKLxpC9W.png" alt="products"
//                                                                                                                                 class="img-fluid rounded-circle"></a>
//                                                                                                                         </div>
//                                                                                                                         <div class="items-content ms-3">
//                                                                                                                             <a href="https://grostore.themetags.com/products/black-grapes-sw7mk">
//                                                                                                                                 <h6 class="mb-0">Black Grapes</h6>
//                                                                                                                             </a>


//                                                                                                                             <div class="products_meta mt-1 d-flex align-items-center">
//                                                                                                                                 <div>
//                                                                                                                                     <span
//                                                                                                                                         class="price text-primary fw-semibold">₹1,920.00</span>
//                                                                                                                                     <span class="count fs-semibold">x 1</span>
//                                                                                                                                 </div>
//                                                                                                                                 <button class="remove_cart_btn ms-2" onclick="handleCartItem('delete', 293)"><i
//                                                                                                                                     class="fa-solid fa-trash-can"></i></button>
//                                                                                                                             </div>
//                                                                                                                         </div>
//                                                                                                                     </li>
//                                                                                                                     <!--cart listing-->

//                                                                                                                 </ul>
//                                                                                                                 <div class="d-flex align-items-center justify-content-between mt-3">
//                                                                                                                     <h6 class="mb-0">Subtotal:</h6>
//                                                                                                                     <span
//                                                                                                                         class="fw-semibold text-secondary sub-total-price">₹1,920.00</span>
//                                                                                                                 </div>
//                                                                                                                 <div class="row align-items-center justify-content-between">
//                                                                                                                     <div class="col-6">
//                                                                                                                         <a href="https://grostore.themetags.com/carts"
//                                                                                                                             class="btn btn-secondary btn-md mt-4 w-100"><span
//                                                                                                                                 class="me-2"><i
//                                                                                                                                     class="fa-solid fa-shopping-bag"></i></span>View Cart</a>
//                                                                                                                     </div>
//                                                                                                                     <div class="col-6">
//                                                                                                                         <a href="https://grostore.themetags.com/checkout"
//                                                                                                                             class="btn btn-primary btn-md mt-4 w-100"><span class="me-2"><i
//                                                                                                                                 class="fa-solid fa-credit-card"></i></span>Checkout</a>
//                                                                                                                     </div>


//                                                                                                                 </div>
//                                                                                                             </div>
//                                                                                                         </div>
//                                                                                                     </div>
//                                                                                                 </div>
//                                                                                                 <div
//                                                                                                     class="gshop-header-contact align-items-center ms-7 position-relative d-none d-lg-flex d-xl-none d-xxl-flex">
//                                                                                                     <a href="tel:+88225467820"
//                                                                                                         class="d-flex align-items-center">
//                                                                                                         <span
//                                                                                                             class="icon d-inline-flex rounded-circle justify-content-center align-items-center bg-secondary-light">
//                                                                                                             <svg width="20" height="24" viewBox="0 0 23 24" fill="none"
//                                                                                                                 xmlns="http://www.w3.org/2000/svg">
//                                                                                                                 <path
//                                                                                                                     d="M1.98193 3.44444C1.98193 2.09441 2.97352 1 4.19672 1H7.82812C8.30477 1 8.72795 1.33664 8.87867 1.83572L10.5373 7.3277C10.7116 7.90472 10.475 8.53538 9.98206 8.8074L7.48236 10.1868C8.70297 13.1748 10.884 15.5821 13.5913 16.9292L14.8411 14.1703C15.0876 13.6263 15.659 13.3651 16.1818 13.5575L21.1577 15.3881C21.61 15.5545 21.915 16.0215 21.915 16.5476V20.5556C21.915 21.9056 20.9234 23 19.7002 23H18.5928C9.41887 23 1.98193 14.7919 1.98193 4.66667V3.44444Z"
//                                                                                                                     stroke="#FF7C08" stroke-width="2" stroke-linecap="round"
//                                                                                                                     stroke-linejoin="round" />
//                                                                                                             </svg>
//                                                                                                         </span>
//                                                                                                         <div class="ms-3">
//                                                                                                             <span class="text-muted fs-xs">Phone &amp; Telephone</span>
//                                                                                                             <h6 class="mb-0 mt-1 fs-sm">+88225467820</h6>
//                                                                                                         </div>
//                                                                                                     </a>
//                                                                                                 </div>
//                                                                                                 <button class="gshop-offcanvas-btn offcanvas-toggle ms-3">
//                                                                                                     <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
//                                                                                                         xmlns="http://www.w3.org/2000/svg">
//                                                                                                         <path
//                                                                                                             d="M3.5892 0C1.66061 0 0.0917969 1.56893 0.0917969 3.4974C0.0917969 5.42588 1.65997 6.9947 3.5892 6.9947C5.51844 6.9947 7.08661 5.42588 7.08661 3.4974C7.08661 1.56893 5.51768 0 3.5892 0Z"
//                                                                                                             fill="white" />
//                                                                                                         <path
//                                                                                                             d="M14.909 0C12.9805 0 11.4116 1.56893 11.4116 3.4974C11.4116 5.42588 12.9805 6.9947 14.909 6.9947C16.8376 6.9947 18.4068 5.42588 18.4068 3.4974C18.4068 1.56893 16.8383 0 14.909 0Z"
//                                                                                                             fill="white" />
//                                                                                                         <path
//                                                                                                             d="M26.411 6.99481C28.3391 6.99481 29.9084 5.42599 29.9084 3.49751C29.9084 1.56903 28.3404 0 26.411 0C24.4815 0 22.9136 1.56893 22.9136 3.4974C22.9136 5.42588 24.4827 6.99481 26.411 6.99481Z"
//                                                                                                             fill="white" />
//                                                                                                         <path
//                                                                                                             d="M3.49805 18.2016C5.42653 18.2016 6.99578 16.6331 6.99578 14.7043C6.99578 12.7754 5.42653 11.2066 3.49805 11.2066C1.56958 11.2066 0 12.7755 0 14.7043C0 16.6331 1.56958 18.2016 3.49805 18.2016Z"
//                                                                                                             fill="white" />
//                                                                                                         <path
//                                                                                                             d="M14.8172 18.2016C16.7454 18.2016 18.3146 16.6331 18.3146 14.7043C18.3146 12.7754 16.7467 11.2066 14.8172 11.2066C12.8881 11.2066 11.3198 12.7754 11.3198 14.7043C11.3198 16.6331 12.8888 18.2016 14.8172 18.2016Z"
//                                                                                                             fill="white" />
//                                                                                                         <path
//                                                                                                             d="M26.3205 18.2016C28.2494 18.2016 29.8179 16.6331 29.8179 14.7043C29.8179 12.7754 28.2494 11.2066 26.3205 11.2066C24.3916 11.2066 22.8218 12.7754 22.8218 14.7043C22.8218 16.6331 24.391 18.2016 26.3205 18.2016Z"
//                                                                                                             fill="white" />
//                                                                                                         <path
//                                                                                                             d="M3.57813 22.3786C1.64965 22.3786 0.0800781 23.9471 0.0800781 25.876C0.0800781 27.8041 1.64965 29.3733 3.57813 29.3733C5.50661 29.3733 7.07543 27.8049 7.07543 25.876C7.07543 23.9471 5.50661 22.3786 3.57813 22.3786Z"
//                                                                                                             fill="white" />
//                                                                                                         <path
//                                                                                                             d="M14.898 22.3786C12.9694 22.3786 11.3999 23.9471 11.3999 25.876C11.3999 27.8041 12.9688 29.3733 14.898 29.3733C16.8261 29.3733 18.3953 27.8049 18.3953 25.876C18.3953 23.9471 16.8261 22.3786 14.898 22.3786Z"
//                                                                                                             fill="white" />
//                                                                                                         <path
//                                                                                                             d="M26.4002 22.3786C24.4721 22.3786 22.9028 23.9471 22.9028 25.876C22.9028 27.8041 24.4721 29.3733 26.4002 29.3733C28.3291 29.3733 29.8976 27.8049 29.8976 25.876C29.8976 23.9471 28.3284 22.3786 26.4002 22.3786Z"
//                                                                                                             fill="white" />
//                                                                                                     </svg>
//                                                                                                 </button>
//                                                                                             </div>
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </header>
//                                                                         <!--header section end-->

//                                                                         <!--breadcrumb section start-->
//                                                                         <!--breadcrumb section end-->

//                                                                         <!--offcanvas menu start-->
//                                                                         <div class="offcanvas_menu position-fixed">
//                                                                             <div class="tt-short-info d-none d-md-none d-lg-none d-xl-block">
//                                                                                 <button class="offcanvas-close"><i class="fa-solid fa-xmark"></i></button>
//                                                                                 <a href="https://grostore.themetags.com" class="logo-wrapper d-inline-block mb-5"><img
//                                                                                     src="https://grostore.themetags.com/public/uploads/media/0vDgRJLm6biMs5zCaVAze5RFwEwcTF4kSuHsZ9OT.png" alt="logo"></a>
//                                                                                 <div class="offcanvas-content">
//                                                                                     <h4 class="mb-4">About Us</h4>
//                                                                                     <p>Explain to you how all this mistaken denouncing pleasure and praising pain was born and we will give you a complete account of the system, and expound the actual teachings.

//                                                                                         Mistaken denouncing pleasure and praising pain was born and we will give you complete account of the system expound.</p>
//                                                                                     <a href="https://grostore.themetags.com/pages/about-us" class="btn btn-primary mt-4">About Us</a>
//                                                                                 </div>
//                                                                             </div>

//                                                                             <div class="mobile-menu d-md-block d-lg-block d-xl-none mb-4">
//                                                                                 <button class="offcanvas-close"><i class="fa-solid fa-xmark"></i></button>

//                                                                                 <nav class="mobile-menu-wrapperoffcanvas-contact">
//                                                                                     <ul>

//                                                                                         <li>
//                                                                                             <a href="https://grostore.themetags.com">Home</a>
//                                                                                         </li>
//                                                                                         <li>
//                                                                                             <a href="https://grostore.themetags.com/products">Products</a>
//                                                                                         </li>
//                                                                                         <li>
//                                                                                             <a href="https://grostore.themetags.com/campaigns">Campaigns</a>
//                                                                                         </li>
//                                                                                         <li>
//                                                                                             <a href="https://grostore.themetags.com/coupons">Coupons</a>
//                                                                                         </li>





//                                                                                         <li class="has-submenu">
//                                                                                             <a href="javascript:void(0)">Pages<span class="ms-1 fs-xs float-end"><i
//                                                                                                 class="fa-solid fa-angle-right"></i></span></a>
//                                                                                             <ul>

//                                                                                                 <li><a href="https://grostore.themetags.com/blogs">Blogs</a></li>
//                                                                                                 <li><a href="https://grostore.themetags.com/pages/about-us">About Us</a></li>
//                                                                                                 <li><a href="https://grostore.themetags.com/pages/contact-us">Contact Us</a></li>
//                                                                                                 <li><a
//                                                                                                     href="https://grostore.themetags.com/pages/terms-conditions">Terms &amp; Conditions</a>
//                                                                                                 </li>
//                                                                                             </ul>
//                                                                                         </li>


//                                                                                         <li class="has-submenu">
//                                                                                             <a href="javascript:void(0)">English<span class="ms-1 fs-xs float-end"><i
//                                                                                                 class="fa-solid fa-angle-right"></i></span></a>
//                                                                                             <ul>
//                                                                                                 <li>
//                                                                                                     <a href="javascript:void(0);" onclick="changeLocaleLanguage(this)"
//                                                                                                         data-flag="en">
//                                                                                                         English
//                                                                                                     </a>
//                                                                                                 </li>
//                                                                                                 <li>
//                                                                                                     <a href="javascript:void(0);" onclick="changeLocaleLanguage(this)"
//                                                                                                         data-flag="ar-sa">
//                                                                                                         Arabic
//                                                                                                     </a>
//                                                                                                 </li>
//                                                                                                 <li>
//                                                                                                     <a href="javascript:void(0);" onclick="changeLocaleLanguage(this)"
//                                                                                                         data-flag="fr">
//                                                                                                         Français
//                                                                                                     </a>
//                                                                                                 </li>
//                                                                                                 <li>
//                                                                                                     <a href="javascript:void(0);" onclick="changeLocaleLanguage(this)"
//                                                                                                         data-flag="fr/FR">
//                                                                                                         French
//                                                                                                     </a>
//                                                                                                 </li>
//                                                                                                 <li>
//                                                                                                     <a href="javascript:void(0);" onclick="changeLocaleLanguage(this)"
//                                                                                                         data-flag="es">
//                                                                                                         es
//                                                                                                     </a>
//                                                                                                 </li>
//                                                                                                 <li>
//                                                                                                     <a href="javascript:void(0);" onclick="changeLocaleLanguage(this)"
//                                                                                                         data-flag="pt-BR">
//                                                                                                         Portugues
//                                                                                                     </a>
//                                                                                                 </li>

//                                                                                             </ul>
//                                                                                         </li>




//                                                                                         <li class="has-submenu">
//                                                                                             <a href="javascript:void(0)" class="text-uppercase">₹
//                                                                                                 INR<span class="ms-1 fs-xs float-end"><i
//                                                                                                     class="fa-solid fa-angle-right"></i></span></a>
//                                                                                             <ul>
//                                                                                                 <li>
//                                                                                                     <a class="text-uppercase" href="javascript:void(0);"
//                                                                                                         onclick="changeLocaleCurrency(this)" data-currency="usd">
//                                                                                                         $ usd
//                                                                                                     </a>
//                                                                                                 </li>
//                                                                                                 <li>
//                                                                                                     <a class="text-uppercase" href="javascript:void(0);"
//                                                                                                         onclick="changeLocaleCurrency(this)" data-currency="INR">
//                                                                                                         ₹ INR
//                                                                                                     </a>
//                                                                                                 </li>
//                                                                                                 <li>
//                                                                                                     <a class="text-uppercase" href="javascript:void(0);"
//                                                                                                         onclick="changeLocaleCurrency(this)" data-currency="NGN">
//                                                                                                         ₦ NGN
//                                                                                                     </a>
//                                                                                                 </li>

//                                                                                             </ul>
//                                                                                         </li>

//                                                                                         <li>
//                                                                                             <a href="https://grostore.themetags.com/logout">Sign out</a>
//                                                                                         </li>
//                                                                                     </ul>
//                                                                                 </nav>

//                                                                             </div>

//                                                                             <div class="offcanvas-contact mt-4">
//                                                                                 <h5 class="mb-4 mt-5">Contact Info</h5>
//                                                                                 <address>
//                                                                                     Washington, New York, USA - 254230 <br>
//                                                                                         <a href="tel:+88225467820">+88225467820</a> <br>
//                                                                                             <a href="mailto:groshop@support.com">groshop@support.com</a>
//                                                                                         </address>
//                                                                                     </div>
//                                                                                     <div class="offcanvas-contact social-contact mt-4">
//                                                                                         <a href="https://www.facebook.com/" target="_blank" class="social-btn"><i
//                                                                                             class="fab fa-facebook-f"></i></a>
//                                                                                         <a href="https://twitter.com/" target="_blank" class="social-btn"><i
//                                                                                             class="fab fa-twitter"></i></a>
//                                                                                         <a href="https://www.linkedin.com/" target="_blank" class="social-btn"><i
//                                                                                             class="fab fa-linkedin"></i></a>
//                                                                                         <a href="https://www.youtube.com/" target="_blank" class="social-btn"><i
//                                                                                             class="fab fa-youtube"></i></a>
//                                                                                     </div>
//                                                                             </div>
//                                                                             <!--offcanvas menu end-->

//                                                                             <section class="my-account pt-6 pb-120">
//                                                                                 <div class="container">

//                                                                                     <div class="account-info d-flex align-items-center gap-6 p-4 p-sm-6 bg-white rounded mb-4 flex-wrap flex-lg-nowrap">
//                                                                                         <div class="profile-pic bg-shade rounded">
//                                                                                             <img src="https://grostore.themetags.com/public/uploads/media/INDtffUJXB3VqDxlyFgAS6h199TZNniBQNPW0mIc.jpg" alt="avatar" class="img-fluid rounded-2">
//                                                                                         </div>
//                                                                                         <div class="profile-inf-right">
//                                                                                             <h4 class="">Blessan Jacobs</h4>
//                                                                                             <div class="info-meta d-flex align-items-center gap-2 gap-md-4 fs-xs flex-wrap">
//                                                                                                 <span><i class="fa-solid fa-envelope me-2"></i>customer@themetags.com</span>
//                                                                                                 <span><i class="fa-solid fa-phone me-2"></i>5555555555</span>
//                                                                                             </div>
//                                                                                             <div class="profile-achievements d-flex align-items-center flex-wrap mt-6">
//                                                                                                 <div class="achievement-box d-flex align-items-center gap-3">
//                                                                                                     <span
//                                                                                                         class="icon d-inline-flex align-items-center justify-content-center flex-shrink-0 bg-color-1 rounded-3">
//                                                                                                         <svg width="26" height="32" viewBox="0 0 26 32" fill="none"
//                                                                                                             xmlns="http://www.w3.org/2000/svg">
//                                                                                                             <path
//                                                                                                                 d="M25.3573 26.3886L23.9282 8.38138C23.8392 7.22125 22.8581 6.31244 21.6946 6.31244H18.8719V6.18556C18.8719 2.77481 16.0971 0 12.6863 0C9.27556 0 6.50074 2.77481 6.50074 6.18556V6.31244H3.67812C2.51456 6.31244 1.53337 7.22119 1.44462 8.37894L0.0151202 26.3911C-0.0955048 27.8333 0.404808 29.2691 1.38768 30.3302C2.37056 31.3913 3.76387 32 5.21031 32H20.1622C21.6086 32 23.002 31.3914 23.9849 30.3302C24.9678 29.269 25.4681 27.8333 25.3573 26.3886ZM8.37512 6.18556C8.37512 3.80838 10.3092 1.87437 12.6863 1.87437C15.0634 1.87437 16.9975 3.80844 16.9975 6.18556V6.31244H8.37512V6.18556ZM22.6097 29.0566C21.9711 29.7459 21.102 30.1256 20.1622 30.1256H5.21037C4.27062 30.1256 3.40149 29.7459 2.76287 29.0566C2.12431 28.3671 1.81218 27.4714 1.88393 26.5369L3.31331 8.52469C3.32781 8.33519 3.48806 8.18681 3.67812 8.18681H6.50074V10.4952C6.50074 11.0128 6.92037 11.4324 7.43793 11.4324C7.95549 11.4324 8.37512 11.0128 8.37512 10.4952V8.18681H16.9975V10.4952C16.9975 11.0128 17.4171 11.4324 17.9347 11.4324C18.4522 11.4324 18.8719 11.0128 18.8719 10.4952V8.18681H21.6946C21.8846 8.18681 22.0448 8.33525 22.0596 8.52719L23.4886 26.5344C23.5605 27.4714 23.2483 28.3671 22.6097 29.0566Z"
//                                                                                                                 fill="#21B169"></path>
//                                                                                                             <path
//                                                                                                                 d="M16.9143 15.8929C16.5484 15.5269 15.955 15.5269 15.5891 15.8929L11.4043 20.0777L9.79519 18.4685C9.42925 18.1025 8.83581 18.1025 8.46981 18.4685C8.10381 18.8345 8.10381 19.4279 8.46981 19.7939L10.7416 22.0657C10.9246 22.2487 11.1645 22.3403 11.4043 22.3403C11.644 22.3403 11.8839 22.2488 12.0669 22.0657L16.9142 17.2183C17.2803 16.8523 17.2803 16.2589 16.9143 15.8929Z"
//                                                                                                                 fill="#21B169"></path>
//                                                                                                         </svg>
//                                                                                                     </span>
//                                                                                                     <div>
//                                                                                                         <h4 class="mb-1">
//                                                                                                             7</h4>
//                                                                                                         <span>Total Delivered</span>
//                                                                                                     </div>
//                                                                                                 </div>

//                                                                                                 <div class="achievement-box d-flex align-items-center gap-3">
//                                                                                                     <span
//                                                                                                         class="icon bg-color-3 d-inline-flex align-items-center justify-content-center flex-shrink-0 bg-color-1 rounded-3">
//                                                                                                         <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
//                                                                                                             xmlns="http://www.w3.org/2000/svg">
//                                                                                                             <g clip-path="url(#clip0_1339_6368)">
//                                                                                                                 <path
//                                                                                                                     d="M6.56331 20.0779C4.353 20.0779 2.55469 21.8759 2.55469 24.0865C2.55469 26.2971 4.35306 28.0951 6.56331 28.0951C8.77356 28.0951 10.5719 26.2968 10.5719 24.0865C10.5719 21.8763 8.77356 20.0779 6.56331 20.0779ZM6.56331 26.0221C5.49619 26.0221 4.62813 25.154 4.62813 24.0869C4.62813 23.0198 5.49619 22.1513 6.56331 22.1513C7.63044 22.1513 8.4985 23.0198 8.4985 24.0869C8.4985 25.154 7.63044 26.0221 6.56331 26.0221Z"
//                                                                                                                     fill="#10B2F5"></path>
//                                                                                                                 <path
//                                                                                                                     d="M24.4696 20.0779C22.2589 20.0779 20.4609 21.8759 20.4609 24.0865C20.4609 26.2971 22.2593 28.0951 24.4696 28.0951C26.6799 28.0951 28.4782 26.2968 28.4782 24.0865C28.4783 21.8763 26.6802 20.0779 24.4696 20.0779ZM24.4696 26.0221C23.4024 26.0221 22.5344 25.154 22.5344 24.0869C22.5344 23.0198 23.4024 22.1513 24.4696 22.1513C25.5367 22.1513 26.4051 23.0198 26.4051 24.0869C26.4051 25.154 25.5367 26.0221 24.4696 26.0221Z"
//                                                                                                                     fill="#10B2F5"></path>
//                                                                                                                 <path
//                                                                                                                     d="M3.9395 9.05396C3.55144 9.05396 3.19581 9.27064 3.01787 9.61583L0.115062 15.2487C0.039375 15.3955 0 15.5583 0 15.7235V24.0864C0 24.659 0.464125 25.1231 1.03669 25.1231H3.55938V23.0496H2.07344V15.9751L4.57156 11.1274H12.4751V9.05396H3.9395V9.05396Z"
//                                                                                                                     fill="#10B2F5"></path>
//                                                                                                                 <path d="M21.4592 23.0498H9.64062V25.1232H21.4592V23.0498Z" fill="#10B2F5"></path>
//                                                                                                                 <path
//                                                                                                                     d="M30.9662 3.90503H12.4781C11.9055 3.90503 11.4414 4.36915 11.4414 4.94172V24.0864H13.5148V5.97847H29.9295V23.0497H27.4414V25.1232H30.9662C31.5388 25.1232 32.0029 24.659 32.0029 24.0865V4.94178C32.0029 4.36915 31.5388 3.90503 30.9662 3.90503Z"
//                                                                                                                     fill="#10B2F5"></path>
//                                                                                                                 <path d="M12.4736 14.7212H1.03516V16.7946H12.4736V14.7212Z" fill="#10B2F5"></path>
//                                                                                                                 <path
//                                                                                                                     d="M26.7949 10.2314C26.4144 9.80292 25.7589 9.76455 25.3314 10.145L20.192 14.71L18.1532 12.6449C17.7509 12.2375 17.0943 12.2334 16.6872 12.6356C16.2798 13.0379 16.2757 13.6944 16.6779 14.1019L19.4076 16.8664C19.6098 17.0714 19.8776 17.175 20.1457 17.175C20.3911 17.175 20.6368 17.0883 20.8334 16.9134L26.7082 11.6949C27.1363 11.3148 27.175 10.6595 26.7949 10.2314Z"
//                                                                                                                     fill="#10B2F5"></path>
//                                                                                                             </g>
//                                                                                                             <defs>
//                                                                                                                 <clipPath id="clip0_1339_6368">
//                                                                                                                     <rect width="32" height="32" fill="white"></rect>
//                                                                                                                 </clipPath>
//                                                                                                             </defs>
//                                                                                                         </svg>
//                                                                                                     </span>
//                                                                                                     <div>
//                                                                                                         <h4 class="mb-1">0
//                                                                                                         </h4>
//                                                                                                         <span>Total Shipped</span>
//                                                                                                     </div>
//                                                                                                 </div>


//                                                                                                 <div class="achievement-box d-flex align-items-center gap-3">
//                                                                                                     <span
//                                                                                                         class="icon bg-color-2 d-inline-flex align-items-center justify-content-center flex-shrink-0 bg-color-1 rounded-3">
//                                                                                                         <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
//                                                                                                             xmlns="http://www.w3.org/2000/svg">
//                                                                                                             <path
//                                                                                                                 d="M0.145579 15.9438H1.18512C1.34222 15.9438 1.49288 16.003 1.60396 16.1084C1.71505 16.2139 1.77745 16.3568 1.77745 16.5059C1.77511 18.9392 2.44015 21.3311 3.70719 23.4466C4.97422 25.562 6.79962 27.3282 9.0039 28.5713C9.1869 27.8714 9.59618 27.2434 10.1744 26.7754L10.2857 26.6838C8.41262 25.6462 6.85962 24.16 5.78223 22.3737C4.70485 20.5875 4.14087 18.564 4.14678 16.5059C4.14678 16.3568 4.20919 16.2139 4.32027 16.1084C4.43135 16.003 4.58202 15.9438 4.73911 15.9438H5.77866C5.8065 15.945 5.83406 15.9381 5.85759 15.9239C5.88112 15.9097 5.89947 15.889 5.91015 15.8646C5.92234 15.8419 5.92677 15.8162 5.92284 15.791C5.91892 15.7658 5.90682 15.7424 5.88824 15.724L3.07229 12.6185C3.05856 12.6036 3.04166 12.5918 3.02271 12.5836C3.00376 12.5755 2.98321 12.5713 2.96241 12.5713C2.94162 12.5713 2.92106 12.5755 2.90212 12.5836C2.88317 12.5918 2.86627 12.6036 2.85254 12.6185L0.0359972 15.724C0.0174144 15.7424 0.00531912 15.7658 0.00139153 15.791C-0.00253605 15.8162 0.00189912 15.8419 0.014081 15.8646C0.0247628 15.889 0.0431166 15.9097 0.0666451 15.9239C0.0901737 15.9381 0.117735 15.945 0.145579 15.9438V15.9438Z"
//                                                                                                                 fill="#FBA700"></path>
//                                                                                                             <path
//                                                                                                                 d="M5.2262 10.1731L5.31782 10.2857C6.35413 8.41201 7.83965 6.85859 9.62532 5.78133C11.411 4.70408 13.434 4.14087 15.4913 4.14823C15.6404 4.14823 15.7834 4.21066 15.8888 4.3218C15.9942 4.43293 16.0534 4.58366 16.0534 4.74082V5.78082C16.0522 5.80868 16.0592 5.83625 16.0734 5.85979C16.0876 5.88333 16.1083 5.90169 16.1327 5.91238C16.1554 5.92448 16.1811 5.92887 16.2063 5.92494C16.2314 5.92101 16.2548 5.90897 16.2732 5.89045L19.3783 3.07327C19.3932 3.05953 19.4052 3.04259 19.4133 3.02358C19.4215 3.00456 19.4258 2.98393 19.4258 2.96305C19.4258 2.94217 19.4215 2.92153 19.4133 2.90252C19.4052 2.88351 19.3932 2.86656 19.3783 2.85282L16.2732 0.0356401C16.2547 0.0172779 16.2314 0.00533168 16.2062 0.00141127C16.1811 -0.00250914 16.1554 0.00178477 16.1327 0.0137142C16.1083 0.0244008 16.0876 0.0427626 16.0734 0.0663015C16.0592 0.0898404 16.0522 0.117413 16.0534 0.14527V1.18527C16.0534 1.34243 15.9942 1.49316 15.8888 1.6043C15.7834 1.71543 15.6404 1.77786 15.4913 1.77786C13.058 1.77534 10.6659 2.4406 8.55042 3.70821C6.43491 4.97582 4.66879 6.80212 3.42578 9.00749C4.12554 9.19125 4.754 9.59933 5.22451 10.1755L5.2262 10.1731Z"
//                                                                                                                 fill="#FBA700"></path>
//                                                                                                             <path
//                                                                                                                 d="M15.8665 26.0884C15.8488 26.0798 15.8297 26.0752 15.8103 26.0747C15.7795 26.0755 15.7501 26.0882 15.7277 26.1103L12.6214 28.9272C12.6066 28.9409 12.5947 28.9579 12.5866 28.9769C12.5784 28.9959 12.5742 29.0165 12.5742 29.0374C12.5742 29.0582 12.5784 29.0788 12.5866 29.0978C12.5947 29.1168 12.6066 29.1338 12.6214 29.1476L15.7271 31.9644C15.7456 31.9828 15.769 31.9947 15.7941 31.9987C15.8192 32.0026 15.8449 31.9983 15.8676 31.9864C15.8918 31.9755 15.9123 31.957 15.9263 31.9335C15.9403 31.91 15.9471 31.8825 15.9458 31.8548V30.8149C15.9458 30.6578 16.005 30.5071 16.1104 30.396C16.2158 30.2848 16.3588 30.2224 16.5079 30.2224C18.9413 30.2249 21.3335 29.5596 23.4491 28.2922C25.5647 27.0247 27.331 25.1987 28.5742 22.9936C27.8745 22.8068 27.2464 22.3971 26.7754 21.8204V21.8204L26.6883 21.7144C25.6502 23.5879 24.1634 25.141 22.3767 26.2182C20.59 27.2954 18.5662 27.8589 16.5079 27.8523C16.3588 27.8523 16.2158 27.7899 16.1104 27.6788C16.005 27.5676 15.9458 27.4169 15.9458 27.2598V26.2199C15.947 26.1921 15.94 26.1645 15.9258 26.1409C15.9116 26.1174 15.8909 26.0991 15.8665 26.0884V26.0884Z"
//                                                                                                                 fill="#FBA700"></path>
//                                                                                                             <path
//                                                                                                                 d="M27.8531 16.3468C27.8531 16.5064 27.7906 16.6594 27.6795 16.7723C27.5684 16.8852 27.4177 16.9486 27.2606 16.9486H26.2209C26.193 16.9473 26.1655 16.9547 26.142 16.9699C26.1184 16.9851 26.1001 17.0073 26.0894 17.0334C26.0772 17.0577 26.0728 17.0852 26.0767 17.1122C26.0806 17.1392 26.0927 17.1642 26.1113 17.1839L28.9277 20.5082C28.9391 20.5275 28.9552 20.5435 28.9744 20.5546C28.9937 20.5657 29.0155 20.5716 29.0376 20.5716C29.0598 20.5716 29.0816 20.5657 29.1008 20.5546C29.1201 20.5435 29.1362 20.5275 29.1475 20.5082L31.9645 17.1833C31.9831 17.1636 31.9952 17.1386 31.9992 17.1116C32.0031 17.0846 31.9987 17.0571 31.9865 17.0328C31.9757 17.0068 31.9573 16.9847 31.9338 16.9697C31.9102 16.9546 31.8827 16.9472 31.8549 16.9486H30.8152C30.6581 16.9486 30.5074 16.8852 30.3963 16.7723C30.2852 16.6594 30.2228 16.5064 30.2228 16.3468C30.2254 13.7415 29.5603 11.1805 28.293 8.91549C27.0258 6.6505 25.1999 4.75959 22.9951 3.42871C22.8085 4.17796 22.3989 4.85047 21.8221 5.35444L21.7148 5.44832C23.5882 6.5595 25.1413 8.15114 26.2185 10.0638C27.2958 11.9765 27.8595 14.1432 27.8531 16.3468V16.3468Z"
//                                                                                                                 fill="#FBA700"></path>
//                                                                                                         </svg>
//                                                                                                     </span>
//                                                                                                     <div>
//                                                                                                         <h4 class="mb-1">
//                                                                                                             2</h4>
//                                                                                                         <span>Order Processing</span>
//                                                                                                     </div>
//                                                                                                 </div>

//                                                                                                 <div class="achievement-box d-flex align-items-center gap-3">
//                                                                                                     <span
//                                                                                                         class="icon bg-color-4 d-inline-flex align-items-center justify-content-center flex-shrink-0 bg-color-1 rounded-3">
//                                                                                                         <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
//                                                                                                             xmlns="http://www.w3.org/2000/svg">
//                                                                                                             <path
//                                                                                                                 d="M29.3988 26.2549H8.4524C8.19484 26.2549 8.08449 25.9166 8.28619 25.7611L11.202 23.5201H27.8625C29.047 23.5201 30.0295 22.5464 30.0524 21.3637L30.2391 11.7551C30.2605 10.6597 29.4583 9.70857 28.3734 9.54639C27.8514 9.46831 27.3626 9.8272 27.2844 10.3499C27.2062 10.8726 27.5669 11.359 28.09 11.4372C28.226 11.4575 28.3265 11.5757 28.3239 11.7125L28.1371 21.3265C28.1343 21.4743 28.0111 21.6057 27.8626 21.6057H11.6372L8.61464 8.53751L10.1488 8.76115C10.6718 8.83909 11.1595 8.47611 11.2378 7.95341C11.316 7.43071 10.9553 6.9422 10.4321 6.86398L8.1342 6.51987L7.25576 3.10519C7.14712 2.68191 6.76533 2.39331 6.32796 2.39331H2.59851C2.06952 2.39331 1.64062 2.822 1.64062 3.35051C1.64062 3.87902 2.06945 4.30771 2.59851 4.30771H5.58477L9.80376 22.1608L7.11615 24.2313C5.49472 25.4806 6.40666 28.1693 8.45233 28.1693H10.9669C10.8556 28.4428 10.7945 28.7915 10.7945 29.1338C10.7945 30.7172 12.0918 32 13.6865 32C15.2812 32 16.5785 30.7199 16.5785 29.1365C16.5785 28.7942 16.5174 28.4428 16.4061 28.1693H21.6375C21.5262 28.4428 21.4651 28.7915 21.4651 29.1338C21.4651 30.7172 22.7625 32 24.3572 32C25.9519 32 27.2493 30.7199 27.2493 29.1365C27.2493 28.7942 27.1881 28.4428 27.0768 28.1693H29.3989C29.928 28.1693 30.3568 27.7406 30.3568 27.2121C30.3568 26.6836 29.9279 26.2549 29.3988 26.2549V26.2549ZM13.6865 30.0806C13.1481 30.0806 12.7102 29.6511 12.7102 29.1232C12.7102 28.5952 13.1482 28.1657 13.6865 28.1657C14.2249 28.1657 14.6628 28.5952 14.6628 29.1232C14.6628 29.6511 14.2249 30.0806 13.6865 30.0806ZM24.3571 30.0806C23.8187 30.0806 23.3808 29.6511 23.3808 29.1232C23.3808 28.5952 23.8188 28.1657 24.3571 28.1657C24.8955 28.1657 25.3334 28.5952 25.3334 29.1232C25.3334 29.6511 24.8954 30.0806 24.3571 30.0806Z"
//                                                                                                                 fill="#A158FF"></path>
//                                                                                                             <path
//                                                                                                                 d="M19.1561 13.8741C15.3201 13.8741 12.1992 10.7621 12.1992 6.93703C12.1992 3.11192 15.3201 0 19.1561 0C22.9922 0 26.1131 3.11192 26.1131 6.93703C26.1131 10.7621 22.9922 13.8741 19.1561 13.8741ZM19.1561 1.91399C16.3764 1.91399 14.115 4.1673 14.115 6.93703C14.115 9.70675 16.3765 11.9601 19.1561 11.9601C21.9358 11.9601 24.1973 9.70675 24.1973 6.93703C24.1973 4.1673 21.9359 1.91399 19.1561 1.91399V1.91399Z"
//                                                                                                                 fill="#A158FF"></path>
//                                                                                                             <path
//                                                                                                                 d="M17.459 9.3735L15.9204 7.54764C15.5798 7.14336 15.6316 6.53964 16.0363 6.19922C16.4409 5.8588 17.0451 5.91056 17.3859 6.31498L18.2313 7.31819L20.8614 4.52358C21.2238 4.13858 21.8301 4.11991 22.2154 4.48194C22.6009 4.84397 22.6195 5.44967 22.2571 5.83467L18.8896 9.41275C18.5888 9.72937 17.8191 9.79207 17.459 9.3735V9.3735Z"
//                                                                                                                 fill="#A158FF"></path>
//                                                                                                         </svg>
//                                                                                                     </span>
//                                                                                                     <div>
//                                                                                                         <h4 class="mb-1">
//                                                                                                             32
//                                                                                                         </h4>
//                                                                                                         <span>New Orders</span>
//                                                                                                     </div>
//                                                                                                 </div>

//                                                                                             </div>
//                                                                                         </div>
//                                                                                     </div>

//                                                                                     <div class="row g-4">
//                                                                                         <div class="col-xl-3">
//                                                                                             <div class="account-nav bg-white rounded py-5">
//                                                                                                 <h6 class="mb-4 px-4">Manage My Account</h6>
//                                                                                                 <ul class="nav nav-tabs border-0 d-block account-nav-menu" role="tablist">
//                                                                                                     <li>
//                                                                                                         <a href="https://grostore.themetags.com/customer-dashboard" class="active">
//                                                                                                             <span class="me-2">
//                                                                                                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
//                                                                                                                     xmlns="http://www.w3.org/2000/svg">
//                                                                                                                     <path
//                                                                                                                         d="M3.33333 1.99341H6C6.35362 1.99341 6.69276 2.13388 6.94281 2.38393C7.19286 2.63398 7.33333 2.97312 7.33333 3.32674V5.99341C7.33333 6.34703 7.19286 6.68617 6.94281 6.93622C6.69276 7.18627 6.35362 7.32674 6 7.32674H3.33333C2.97971 7.32674 2.64057 7.18627 2.39052 6.93622C2.14048 6.68617 2 6.34703 2 5.99341V3.32674C2 2.97312 2.14048 2.63398 2.39052 2.38393C2.64057 2.13388 2.97971 1.99341 3.33333 1.99341Z"
//                                                                                                                         fill="#212B36"></path>
//                                                                                                                     <path
//                                                                                                                         d="M10 1.99341H12.6667C13.0203 1.99341 13.3594 2.13388 13.6095 2.38393C13.8595 2.63398 14 2.97312 14 3.32674V5.99341C14 6.34703 13.8595 6.68617 13.6095 6.93622C13.3594 7.18627 13.0203 7.32674 12.6667 7.32674H10C9.64638 7.32674 9.30724 7.18627 9.05719 6.93622C8.80714 6.68617 8.66667 6.34703 8.66667 5.99341V3.32674C8.66667 2.97312 8.80714 2.63398 9.05719 2.38393C9.30724 2.13388 9.64638 1.99341 10 1.99341Z"
//                                                                                                                         fill="#212B36"></path>
//                                                                                                                     <path
//                                                                                                                         d="M6 8.66008H3.33333C2.97971 8.66008 2.64057 8.80055 2.39052 9.0506C2.14048 9.30065 2 9.63979 2 9.99341V12.6601C2 13.0137 2.14048 13.3528 2.39052 13.6029C2.64057 13.8529 2.97971 13.9934 3.33333 13.9934H6C6.35362 13.9934 6.69276 13.8529 6.94281 13.6029C7.19286 13.3528 7.33333 13.0137 7.33333 12.6601V9.99341C7.33333 9.63979 7.19286 9.30065 6.94281 9.0506C6.69276 8.80055 6.35362 8.66008 6 8.66008Z"
//                                                                                                                         fill="#212B36"></path>
//                                                                                                                     <path
//                                                                                                                         d="M10 8.66008H12.6667C13.0203 8.66008 13.3594 8.80055 13.6095 9.0506C13.8595 9.30065 14 9.63979 14 9.99341V12.6601C14 13.0137 13.8595 13.3528 13.6095 13.6029C13.3594 13.8529 13.0203 13.9934 12.6667 13.9934H10C9.64638 13.9934 9.30724 13.8529 9.05719 13.6029C8.80714 13.3528 8.66667 13.0137 8.66667 12.6601V9.99341C8.66667 9.63979 8.80714 9.30065 9.05719 9.0506C9.30724 8.80055 9.64638 8.66008 10 8.66008Z"
//                                                                                                                         fill="#212B36"></path>
//                                                                                                                 </svg>
//                                                                                                             </span>
//                                                                                                             Dashboard
//                                                                                                         </a>
//                                                                                                     </li>
//                                                                                                     <li>
//                                                                                                         <a href="https://grostore.themetags.com/customer-order-history"
//                                                                                                             class="">
//                                                                                                             <span class="me-2">
//                                                                                                                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
//                                                                                                                     xmlns="http://www.w3.org/2000/svg">
//                                                                                                                     <path
//                                                                                                                         d="M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12Z"
//                                                                                                                         fill="#212B36"></path>
//                                                                                                                     <path
//                                                                                                                         d="M7 11.94C7 11.4209 7.42085 11 7.94 11H20.06C20.5791 11 21 11.4209 21 11.94V12.06C21 12.5791 20.5791 13 20.06 13H7.94C7.42085 13 7 12.5791 7 12.06V11.94Z"
//                                                                                                                         fill="#212B36"></path>
//                                                                                                                     <path
//                                                                                                                         d="M3 16.94C3 16.4209 3.42085 16 3.94 16H20.06C20.5791 16 21 16.4209 21 16.94V17.06C21 17.5791 20.5791 18 20.06 18H3.94C3.42085 18 3 17.5791 3 17.06V16.94Z"
//                                                                                                                         fill="#212B36"></path>
//                                                                                                                     <path
//                                                                                                                         d="M3 6.94C3 6.42085 3.42085 6 3.94 6H20.06C20.5791 6 21 6.42085 21 6.94V7.06C21 7.57915 20.5791 8 20.06 8H3.94C3.42085 8 3 7.57915 3 7.06V6.94Z"
//                                                                                                                         fill="#212B36"></path>
//                                                                                                                 </svg>
//                                                                                                             </span>
//                                                                                                             Order History
//                                                                                                         </a>
//                                                                                                     </li>

//                                                                                                     <li>
//                                                                                                         <a href="https://grostore.themetags.com/reward-points"
//                                                                                                             class="">
//                                                                                                             <span class="me-2">

//                                                                                                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
//                                                                                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                                                                                                     stroke-linejoin="round" class="feather feather-award">
//                                                                                                                     <circle cx="12" cy="8" r="7"></circle>
//                                                                                                                     <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
//                                                                                                                 </svg>

//                                                                                                             </span>
//                                                                                                             Reward Points
//                                                                                                         </a>
//                                                                                                     </li>

//                                                                                                     <li>
//                                                                                                         <a href="https://grostore.themetags.com/wallet-histories"
//                                                                                                             class="">
//                                                                                                             <span class="me-2">

//                                                                                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
//                                                                                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                                                                                                     stroke-linejoin="round" class="feather feather-credit-card">
//                                                                                                                     <rect x="1" y="4" width="22" height="16" rx="2" ry="2">
//                                                                                                                     </rect>
//                                                                                                                     <line x1="1" y1="10" x2="23" y2="10"></line>
//                                                                                                                 </svg>
//                                                                                                             </span>
//                                                                                                             Wallet History
//                                                                                                         </a>
//                                                                                                     </li>


//                                                                                                     <li>
//                                                                                                         <a href="https://grostore.themetags.com/refunds"
//                                                                                                             class="">
//                                                                                                             <span class="me-2">

//                                                                                                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
//                                                                                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                                                                                                     stroke-linejoin="round" class="feather feather-arrow-left">
//                                                                                                                     <line x1="19" y1="12" x2="5" y2="12"></line>
//                                                                                                                     <polyline points="12 19 5 12 12 5"></polyline>
//                                                                                                                 </svg>
//                                                                                                             </span>
//                                                                                                             Refund History
//                                                                                                         </a>
//                                                                                                     </li>
//                                                                                                     <li>
//                                                                                                         <a href="https://grostore.themetags.com/track-order"
//                                                                                                             class="">
//                                                                                                             <span class="me-2">

//                                                                                                                 <svg width="16" height="20" viewBox="0 0 16 20" fill="none"
//                                                                                                                     xmlns="http://www.w3.org/2000/svg">
//                                                                                                                     <path
//                                                                                                                         d="M7.64077 4.84662C5.83139 4.84662 4.35938 6.31863 4.35938 8.12801C4.35938 9.93738 5.83139 11.4094 7.64077 11.4094C9.45014 11.4094 10.9222 9.93738 10.9222 8.12801C10.9222 6.31863 9.45014 4.84662 7.64077 4.84662ZM7.64077 9.53431C6.86531 9.53431 6.23447 8.90342 6.23447 8.12801C6.23447 7.35256 6.86536 6.72171 7.64077 6.72171C8.41622 6.72171 9.04706 7.3526 9.04706 8.12801C9.04711 8.90342 8.41622 9.53431 7.64077 9.53431Z"
//                                                                                                                         fill="#212B36" />
//                                                                                                                     <path
//                                                                                                                         d="M7.64095 0.490906C3.42769 0.490906 0 3.91691 0 8.12802V8.33319C0 10.4566 1.2053 12.9162 3.58242 15.6439C5.29261 17.6062 6.98091 18.9762 7.05197 19.0335L7.64091 19.5091L8.22989 19.0335C8.30095 18.9762 9.98934 17.6062 11.6994 15.6439C14.0766 12.9162 15.2819 10.4566 15.2819 8.33319V8.12802C15.2819 3.91686 11.8542 0.490906 7.64095 0.490906ZM13.4068 8.12802V8.33319C13.4068 9.96191 12.3339 12.0567 10.3041 14.391C9.28875 15.5587 8.26158 16.519 7.64072 17.0696C7.02459 16.5234 6.00816 15.5733 4.99608 14.4119C2.9543 12.0692 1.87509 9.96711 1.87509 8.33319V8.12802C1.87509 4.95083 4.46166 2.366 7.64095 2.366C10.8203 2.366 13.4068 4.95083 13.4068 8.12802Z"
//                                                                                                                         fill="#212B36" />
//                                                                                                                 </svg>

//                                                                                                             </span>
//                                                                                                             Track Order
//                                                                                                         </a>
//                                                                                                     </li>
//                                                                                                     <li>
//                                                                                                         <a href="https://grostore.themetags.com/dashboard/support/ticket/create" class="">
//                                                                                                             <span class="me-2">


//                                                                                                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
//                                                                                                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//                                                                                                                     class="feather feather-life-buoy">
//                                                                                                                     <circle cx="12" cy="12" r="10"></circle>
//                                                                                                                     <circle cx="12" cy="12" r="4"></circle>
//                                                                                                                     <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
//                                                                                                                     <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
//                                                                                                                     <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
//                                                                                                                     <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
//                                                                                                                     <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
//                                                                                                                 </svg>

//                                                                                                             </span>
//                                                                                                             Create Ticket
//                                                                                                         </a>
//                                                                                                     </li>
//                                                                                                     <li>
//                                                                                                         <a href="https://grostore.themetags.com/dashboard/support/ticket" class="">
//                                                                                                             <span class="me-2">
//                                                                                                                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                                                                                     <path
//                                                                                                                         d="M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12Z"
//                                                                                                                         fill="#212B36"></path>
//                                                                                                                     <path
//                                                                                                                         d="M7 11.94C7 11.4209 7.42085 11 7.94 11H20.06C20.5791 11 21 11.4209 21 11.94V12.06C21 12.5791 20.5791 13 20.06 13H7.94C7.42085 13 7 12.5791 7 12.06V11.94Z"
//                                                                                                                         fill="#212B36"></path>
//                                                                                                                     <path
//                                                                                                                         d="M3 16.94C3 16.4209 3.42085 16 3.94 16H20.06C20.5791 16 21 16.4209 21 16.94V17.06C21 17.5791 20.5791 18 20.06 18H3.94C3.42085 18 3 17.5791 3 17.06V16.94Z"
//                                                                                                                         fill="#212B36"></path>
//                                                                                                                     <path
//                                                                                                                         d="M3 6.94C3 6.42085 3.42085 6 3.94 6H20.06C20.5791 6 21 6.42085 21 6.94V7.06C21 7.57915 20.5791 8 20.06 8H3.94C3.42085 8 3 7.57915 3 7.06V6.94Z"
//                                                                                                                         fill="#212B36"></path>
//                                                                                                                 </svg>
//                                                                                                             </span>
//                                                                                                             All Tickets
//                                                                                                         </a>
//                                                                                                     </li>

//                                                                                                     <li>
//                                                                                                         <a href="https://grostore.themetags.com/customer-address"
//                                                                                                             class="">
//                                                                                                             <span class="me-2">

//                                                                                                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
//                                                                                                                     xmlns="http://www.w3.org/2000/svg">
//                                                                                                                     <path
//                                                                                                                         d="M15.8169 7.5581C15.3974 7.13867 8.74938 0.4906 8.44188 0.183105C8.19787 -0.0610351 7.80212 -0.0610351 7.5581 0.183105C7.22179 0.519409 0.59558 7.1455 0.183105 7.5581C-0.0610351 7.80212 -0.0610351 8.19787 0.183105 8.44201C0.427124 8.68603 0.822875 8.68603 1.06689 8.44201L1.22912 8.27978V15.375C1.22912 15.7202 1.50903 16 1.85412 16H14.1459C14.491 16 14.7709 15.7202 14.7709 15.375V8.27978L14.933 8.44201C15.1771 8.68603 15.5729 8.68603 15.8169 8.44201C16.061 8.19787 16.061 7.80212 15.8169 7.5581ZM9.83336 14.75H6.16674V11.0834H9.83336V14.75ZM13.5209 14.75H11.0834V10.4584C11.0834 10.1132 10.8036 9.83337 10.4584 9.83337H5.54174C5.19653 9.83337 4.91674 10.1132 4.91674 10.4584V14.75H2.47925V7.02978L7.99999 1.50891L13.5209 7.02978V14.75Z"
//                                                                                                                         fill="#5D6374" />
//                                                                                                                 </svg>
//                                                                                                             </span>
//                                                                                                             Address Book
//                                                                                                         </a>
//                                                                                                     </li>

//                                                                                                     <li>
//                                                                                                         <a href="https://grostore.themetags.com/customer-profile"
//                                                                                                             class="">
//                                                                                                             <span class="me-2">
//                                                                                                                 <svg width="12" height="16" viewBox="0 0 12 16" fill="none"
//                                                                                                                     xmlns="http://www.w3.org/2000/svg">
//                                                                                                                     <path
//                                                                                                                         d="M6.00007 7.6714C3.96403 7.6714 2.30762 6.0148 2.30762 3.97855C2.30762 1.94251 3.96407 0.286133 6.00007 0.286133C8.03629 0.286133 9.69289 1.94255 9.69289 3.97855C9.69289 6.0148 8.03629 7.6714 6.00007 7.6714ZM6.00007 1.47569C4.61996 1.47569 3.49717 2.59848 3.49717 3.97855C3.49717 5.35887 4.61996 6.48185 6.00007 6.48185C7.38036 6.48185 8.50334 5.35887 8.50334 3.97855C8.50334 2.59848 7.38036 1.47569 6.00007 1.47569Z"
//                                                                                                                         fill="#5D6374" />
//                                                                                                                     <path
//                                                                                                                         d="M8.30755 15.7138H3.69245C1.65642 15.7138 0 14.0573 0 12.0213C0 9.98527 1.65645 8.32886 3.69245 8.32886H8.30755C10.3436 8.32886 12 9.98527 12 12.0213C12 14.0573 10.3436 15.7138 8.30755 15.7138ZM3.69245 9.51841C2.31234 9.51841 1.18955 10.6412 1.18955 12.0213C1.18955 13.4014 2.31234 14.5242 3.69245 14.5242H8.30755C9.68766 14.5242 10.8104 13.4014 10.8104 12.0213C10.8104 10.6412 9.68766 9.51841 8.30755 9.51841H3.69245Z"
//                                                                                                                         fill="#5D6374" />
//                                                                                                                 </svg>
//                                                                                                             </span>
//                                                                                                             Updated Profile
//                                                                                                         </a>
//                                                                                                     </li>

//                                                                                                     <li>
//                                                                                                         <a href="https://grostore.themetags.com/logout">
//                                                                                                             <span class="me-2">
//                                                                                                                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
//                                                                                                                     xmlns="http://www.w3.org/2000/svg">
//                                                                                                                     <path
//                                                                                                                         d="M6.99256 4.80345e-05C6.90051 0.000953881 6.80954 0.0200661 6.72486 0.056324C6.64018 0.092582 6.56345 0.145268 6.49906 0.211345C6.43467 0.277423 6.38388 0.355642 6.34961 0.441455C6.31533 0.527268 6.29825 0.618997 6.29932 0.711451V6.33816C6.29937 6.5248 6.37322 6.70381 6.50463 6.83576C6.63605 6.96772 6.81426 7.04181 7.00008 7.04181C7.1859 7.04181 7.36411 6.96772 7.49552 6.83576C7.62694 6.70381 7.70079 6.5248 7.70084 6.33816V0.711451C7.70193 0.617724 7.68435 0.524709 7.64914 0.437903C7.61394 0.351097 7.56181 0.272215 7.49582 0.205936C7.42983 0.139657 7.35131 0.0873274 7.26489 0.0519641C7.17846 0.0166007 7.08587 -0.00104732 6.99256 4.80345e-05ZM11.0768 1.4105C11.054 1.40984 11.0312 1.4103 11.0084 1.41187C10.87 1.42367 10.7382 1.47658 10.6298 1.56383C10.5214 1.65107 10.4413 1.7687 10.3997 1.90181C10.3581 2.03491 10.3568 2.17749 10.396 2.31132C10.4353 2.44515 10.5133 2.56423 10.6201 2.65342C11.8328 3.68778 12.6 5.22732 12.6 6.95615C12.6 10.0778 10.1044 12.5938 7.00349 12.5938C3.90258 12.5938 1.40151 10.0778 1.40152 6.95615C1.40152 5.23732 2.15898 3.70824 3.35954 2.67401C3.42949 2.61404 3.48699 2.5408 3.52876 2.45851C3.57053 2.37622 3.59576 2.28649 3.603 2.19441C3.61024 2.10233 3.59935 2.00976 3.57096 1.92191C3.54256 1.83406 3.49722 1.75268 3.43751 1.68243C3.37781 1.61218 3.30491 1.55443 3.22298 1.51248C3.14106 1.47052 3.0517 1.44514 2.96003 1.43787C2.86835 1.4306 2.77615 1.44156 2.68869 1.47009C2.60122 1.49861 2.52021 1.54414 2.45027 1.60412C0.951587 2.89516 6.5878e-06 4.81954 0 6.95615C-6.29675e-06 10.8366 3.14463 14.0002 7.0035 14.0002C10.8624 14.0002 14.0002 10.8366 14.0002 6.95615C14.0001 4.80707 13.0392 2.87479 11.5253 1.58353C11.4008 1.47453 11.2419 1.41324 11.0768 1.4105Z"
//                                                                                                                         fill="#5D6374" />
//                                                                                                                 </svg>
//                                                                                                             </span>
//                                                                                                             Log out
//                                                                                                         </a>
//                                                                                                     </li>
//                                                                                                 </ul>
//                                                                                             </div>
//                                                                                         </div>

//                                                                                         <div class="col-xl-9">
//                                                                                             <div class="recent-orders bg-white rounded py-5">
//                                                                                                 <h6 class="mb-4 px-4">Recent Orders</h6>
//                                                                                                 <div class="table-responsive">
//                                                                                                     <table class="order-history-table table">
//                                                                                                         <tbody>
//                                                                                                             <tr>
//                                                                                                                 <th>Order Code</th>
//                                                                                                                 <th>Placed On</th>
//                                                                                                                 <th>Items</th>
//                                                                                                                 <th>Total</th>
//                                                                                                                 <th>Status</th>
//                                                                                                                 <th class="text-center">Action</th>
//                                                                                                             </tr>

//                                                                                                             <tr>
//                                                                                                                 <td>#G-Store:75
//                                                                                                                 </td>
//                                                                                                                 <td>05 Dec, 2023</td>
//                                                                                                                 <td>7</td>
//                                                                                                                 <td class="text-secondary">
//                                                                                                                     ₹16,981.48</td>
//                                                                                                                 <td>
//                                                                                                                     <span class="badge bg-secondary">
//                                                                                                                         Order Placed
//                                                                                                                     </span>
//                                                                                                                 </td>
//                                                                                                                 <td class="text-center">
//                                                                                                                     <a href="https://grostore.themetags.com/track-order?code=75"
//                                                                                                                         class="view-invoice fs-xs me-2" target="_blank" data-bs-toggle="tooltip"
//                                                                                                                         data-bs-placement="top"
//                                                                                                                         data-bs-title="Track My Order"><i
//                                                                                                                             class="fas fa-truck text-dark"></i></a>

//                                                                                                                     <a href="https://grostore.themetags.com/orders/invoice/75"
//                                                                                                                         class="view-invoice fs-xs" target="_blank" data-bs-toggle="tooltip"
//                                                                                                                         data-bs-placement="top"
//                                                                                                                         data-bs-title="View Details"><i
//                                                                                                                             class="fas fa-eye"></i>
//                                                                                                                     </a>
//                                                                                                                 </td>
//                                                                                                             </tr>
//                                                                                                             <tr>
//                                                                                                                 <td>#G-Store:74
//                                                                                                                 </td>
//                                                                                                                 <td>03 Dec, 2023</td>
//                                                                                                                 <td>1</td>
//                                                                                                                 <td class="text-secondary">
//                                                                                                                     ₹33,600.00</td>
//                                                                                                                 <td>
//                                                                                                                     <span class="badge bg-secondary">
//                                                                                                                         Order Placed
//                                                                                                                     </span>
//                                                                                                                 </td>
//                                                                                                                 <td class="text-center">
//                                                                                                                     <a href="https://grostore.themetags.com/track-order?code=74"
//                                                                                                                         class="view-invoice fs-xs me-2" target="_blank" data-bs-toggle="tooltip"
//                                                                                                                         data-bs-placement="top"
//                                                                                                                         data-bs-title="Track My Order"><i
//                                                                                                                             class="fas fa-truck text-dark"></i></a>

//                                                                                                                     <a href="https://grostore.themetags.com/orders/invoice/74"
//                                                                                                                         class="view-invoice fs-xs" target="_blank" data-bs-toggle="tooltip"
//                                                                                                                         data-bs-placement="top"
//                                                                                                                         data-bs-title="View Details"><i
//                                                                                                                             class="fas fa-eye"></i>
//                                                                                                                     </a>
//                                                                                                                 </td>
//                                                                                                             </tr>
//                                                                                                             <tr>
//                                                                                                                 <td>#G-Store:73
//                                                                                                                 </td>
//                                                                                                                 <td>12 Aug, 2023</td>
//                                                                                                                 <td>1</td>
//                                                                                                                 <td class="text-secondary">
//                                                                                                                     ₹10,240.00</td>
//                                                                                                                 <td>
//                                                                                                                     <span class="badge bg-secondary">
//                                                                                                                         Order Placed
//                                                                                                                     </span>
//                                                                                                                 </td>
//                                                                                                                 <td class="text-center">
//                                                                                                                     <a href="https://grostore.themetags.com/track-order?code=73"
//                                                                                                                         class="view-invoice fs-xs me-2" target="_blank" data-bs-toggle="tooltip"
//                                                                                                                         data-bs-placement="top"
//                                                                                                                         data-bs-title="Track My Order"><i
//                                                                                                                             class="fas fa-truck text-dark"></i></a>

//                                                                                                                     <a href="https://grostore.themetags.com/orders/invoice/73"
//                                                                                                                         class="view-invoice fs-xs" target="_blank" data-bs-toggle="tooltip"
//                                                                                                                         data-bs-placement="top"
//                                                                                                                         data-bs-title="View Details"><i
//                                                                                                                             class="fas fa-eye"></i>
//                                                                                                                     </a>
//                                                                                                                 </td>
//                                                                                                             </tr>
//                                                                                                             <tr>
//                                                                                                                 <td>#G-Store:72
//                                                                                                                 </td>
//                                                                                                                 <td>12 Aug, 2023</td>
//                                                                                                                 <td>1</td>
//                                                                                                                 <td class="text-secondary">
//                                                                                                                     ₹9,601.46</td>
//                                                                                                                 <td>
//                                                                                                                     <span class="badge bg-secondary">
//                                                                                                                         Order Placed
//                                                                                                                     </span>
//                                                                                                                 </td>
//                                                                                                                 <td class="text-center">
//                                                                                                                     <a href="https://grostore.themetags.com/track-order?code=72"
//                                                                                                                         class="view-invoice fs-xs me-2" target="_blank" data-bs-toggle="tooltip"
//                                                                                                                         data-bs-placement="top"
//                                                                                                                         data-bs-title="Track My Order"><i
//                                                                                                                             class="fas fa-truck text-dark"></i></a>

//                                                                                                                     <a href="https://grostore.themetags.com/orders/invoice/72"
//                                                                                                                         class="view-invoice fs-xs" target="_blank" data-bs-toggle="tooltip"
//                                                                                                                         data-bs-placement="top"
//                                                                                                                         data-bs-title="View Details"><i
//                                                                                                                             class="fas fa-eye"></i>
//                                                                                                                     </a>
//                                                                                                                 </td>
//                                                                                                             </tr>
//                                                                                                             <tr>
//                                                                                                                 <td>#G-Store:70
//                                                                                                                 </td>
//                                                                                                                 <td>12 Aug, 2023</td>
//                                                                                                                 <td>3</td>
//                                                                                                                 <td class="text-secondary">
//                                                                                                                     ₹11,860.00</td>
//                                                                                                                 <td>
//                                                                                                                     <span class="badge bg-secondary">
//                                                                                                                         Delivered
//                                                                                                                     </span>
//                                                                                                                 </td>
//                                                                                                                 <td class="text-center">
//                                                                                                                     <a href="https://grostore.themetags.com/track-order?code=70"
//                                                                                                                         class="view-invoice fs-xs me-2" target="_blank" data-bs-toggle="tooltip"
//                                                                                                                         data-bs-placement="top"
//                                                                                                                         data-bs-title="Track My Order"><i
//                                                                                                                             class="fas fa-truck text-dark"></i></a>

//                                                                                                                     <a href="https://grostore.themetags.com/orders/invoice/70"
//                                                                                                                         class="view-invoice fs-xs" target="_blank" data-bs-toggle="tooltip"
//                                                                                                                         data-bs-placement="top"
//                                                                                                                         data-bs-title="View Details"><i
//                                                                                                                             class="fas fa-eye"></i>
//                                                                                                                     </a>
//                                                                                                                 </td>
//                                                                                                             </tr>
//                                                                                                         </tbody>
//                                                                                                     </table>
//                                                                                                 </div>
//                                                                                             </div>
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </section>

//                                                                             <!-- modals -->
//                                                                             <div class="modal fade" id="quickview_modal">
//                                                                                 <div class="modal-dialog modal-dialog-centered">
//                                                                                     <div class="modal-content min-h-400">
//                                                                                         <div class="modal-body h-100 bg-white">
//                                                                                             <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>

//                                                                                             <div class="data-preloader-wrapper d-flex align-items-center justify-content-center min-h-400">
//                                                                                                 <div class="" role="status">
//                                                                                                     <span class="sr-only"></span>
//                                                                                                 </div>
//                                                                                             </div>

//                                                                                             <div class="product-info">

//                                                                                             </div>
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                             <!-- modals -->


//                                                                             <!--footer section start-->
//                                                                             <div class="footer-curve position-relative overflow-hidden">
//                                                                                 <span class="position-absolute section-curve-wrapper top-0 h-100"
//                                                                                     data-background="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/section-curve.png?v=v3.0.0"></span>
//                                                                             </div>

//                                                                             <footer class="gshop-footer position-relative pt-8 bg-dark z-1 overflow-hidden">
//                                                                                 <img src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/tomato.svg?v=v3.0.0" alt="tomato"
//                                                                                     class="position-absolute z--1 tomato vector-shape">
//                                                                                     <img src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/pata-lg.svg?v=v3.0.0" alt="pata"
//                                                                                         class="position-absolute z--1 pata-lg vector-shape">
//                                                                                         <img src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/pata-xs.svg?v=v3.0.0" alt="pata"
//                                                                                             class="position-absolute z--1 pata-xs vector-shape">
//                                                                                             <img src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/frame-circle.svg?v=v3.0.0" alt="frame"
//                                                                                                 class="position-absolute z--1 frame-circle vector-shape">
//                                                                                                 <img src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/leaf.svg?v=v3.0.0" alt="leaf"
//                                                                                                     class="position-absolute z--1 leaf vector-shape">
//                                                                                                     <!--shape right -->
//                                                                                                     <img src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/leaf.svg?v=v3.0.0" alt="pata"
//                                                                                                         class="position-absolute leaf-2 z--1 vector-shape">
//                                                                                                         <img src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/pata-xs.svg?v=v3.0.0" alt="pata"
//                                                                                                             class="position-absolute pata-xs-2 z--1 vector-shape">
//                                                                                                             <img src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/tomato-slice.svg?v=v3.0.0" alt="tomato slice"
//                                                                                                                 class="position-absolute tomato-slice vector-shape z--1">
//                                                                                                                 <img src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/tomato-half.svg?v=v3.0.0" alt="tomato"
//                                                                                                                     class="position-absolute tomato-half z--1 vector-shape">
//                                                                                                                     <div class="container">
//                                                                                                                         <div class="row justify-content-center">
//                                                                                                                             <div class="col-xl-5 col-lg-6">
//                                                                                                                                 <div class="gshop_subscribe_form text-center">
//                                                                                                                                     <h4 class="text-white gshop-title">Subscribe to the us<mark
//                                                                                                                                         class="p-0 position-relative text-secondary bg-transparent"> New Arrivals
//                                                                                                                                         <img src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/border-line.svg?v=v3.0.0"
//                                                                                                                                             alt="border line" class="position-absolute border-line"></mark><br
//                                                                                                                                                 class="d-none d-sm-block">&amp; Other Information.</h4>
//                                                                                                                                     <form class="mt-5 d-flex align-items-center bg-white rounded subscribe_form"
//                                                                                                                                         action="https://grostore.themetags.com/subscribers" method="POST">
//                                                                                                                                         <input type="hidden" name="_token" value="Qxy9gkV0AmBqWP6KvZaYw9ga3fieRWvs3hqC7PY5">                        <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response-6570146dc0036"><script>
//                                                                                                                                             grecaptcha.ready(function() {
//                                                                                                                                                 grecaptcha.execute('', { action: 'recaptcha_token' }).then(function (token) {
//                                                                                                                                                     document.getElementById('g-recaptcha-response-6570146dc0036').value = token;
//                                                                                                                                                 });
//   });
//                                                                                                                                         </script>
//                                                                                                                                             <input type="email" class="form-control" placeholder="Enter Email Address"
//                                                                                                                                                 type="email" name="email" required>
//                                                                                                                                                 <button type="submit"
//                                                                                                                                                     class="btn btn-primary flex-shrink-0">Subscribe Now</button>
//                                                                                                                                             </form>
//                                                                                                                                         </div>
//                                                                                                                                         </div>
//                                                                                                                                 </div>
//                                                                                                                                 <span class="gradient-spacer my-8 d-block"></span>
//                                                                                                                                 <div class="row g-5">
//                                                                                                                                     <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
//                                                                                                                                         <div class="footer-widget">
//                                                                                                                                             <h5 class="text-white mb-4">Category</h5>
//                                                                                                                                             <ul class="footer-nav">
//                                                                                                                                                 <li><a
//                                                                                                                                                     href="https://grostore.themetags.com/products?&category_id=5">Beauty &amp; Health</a>
//                                                                                                                                                 </li>
//                                                                                                                                                 <li><a
//                                                                                                                                                     href="https://grostore.themetags.com/products?&category_id=7">Breakfast</a>
//                                                                                                                                                 </li>
//                                                                                                                                                 <li><a
//                                                                                                                                                     href="https://grostore.themetags.com/products?&category_id=8">Baby Care</a>
//                                                                                                                                                 </li>
//                                                                                                                                                 <li><a
//                                                                                                                                                     href="https://grostore.themetags.com/products?&category_id=9">Pet Care</a>
//                                                                                                                                                 </li>
//                                                                                                                                                 <li><a
//                                                                                                                                                     href="https://grostore.themetags.com/products?&category_id=12">Cold Drinks</a>
//                                                                                                                                                 </li>
//                                                                                                                                             </ul>
//                                                                                                                                         </div>
//                                                                                                                                     </div>
//                                                                                                                                     <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
//                                                                                                                                         <div class="footer-widget">
//                                                                                                                                             <h5 class="text-white mb-4">Quick Links</h5>
//                                                                                                                                             <ul class="footer-nav">
//                                                                                                                                                 <li><a
//                                                                                                                                                     href="https://grostore.themetags.com/pages/terms-conditions">Terms &amp; Conditions</a>
//                                                                                                                                                 </li>
//                                                                                                                                                 <li><a
//                                                                                                                                                     href="https://grostore.themetags.com/pages/return-policy">Return Policy</a>
//                                                                                                                                                 </li>
//                                                                                                                                                 <li><a
//                                                                                                                                                     href="https://grostore.themetags.com/pages/privacy-policy">Privacy Policy</a>
//                                                                                                                                                 </li>
//                                                                                                                                             </ul>
//                                                                                                                                         </div>
//                                                                                                                                     </div>
//                                                                                                                                     <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
//                                                                                                                                         <div class="footer-widget">
//                                                                                                                                             <h5 class="text-white mb-4">Customer Pages</h5>
//                                                                                                                                             <ul class="footer-nav">
//                                                                                                                                                 <li><a href="https://grostore.themetags.com/customer-dashboard">Your Account</a></li>
//                                                                                                                                                 <li><a href="https://grostore.themetags.com/customer-order-history">Your Orders</a></li>
//                                                                                                                                                 <li><a href="https://grostore.themetags.com/wishlist">Your Wishlist</a></li>
//                                                                                                                                                 <li><a href="https://grostore.themetags.com/customer-address">Address Book</a></li>
//                                                                                                                                                 <li><a href="https://grostore.themetags.com/customer-profile">Update Profile</a></li>
//                                                                                                                                             </ul>
//                                                                                                                                         </div>
//                                                                                                                                     </div>

//                                                                                                                                     <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
//                                                                                                                                         <div class="footer-widget">
//                                                                                                                                             <h5 class="text-white mb-4">Contact Info</h5>
//                                                                                                                                             <ul class="footer-nav">
//                                                                                                                                                 <li class="text-white pb-2 fs-xs">Washington, New York, USA - 254230</li>
//                                                                                                                                                 <li class="text-white pb-2 fs-xs">+88225467820</li>
//                                                                                                                                                 <li class="text-white pb-2 fs-xs">groshop@support.com</li>
//                                                                                                                                             </ul>
//                                                                                                                                         </div>
//                                                                                                                                     </div>
//                                                                                                                                 </div>
//                                                                                                                             </div>
//                                                                                                                             <div class="footer-copyright pt-120 pb-3">
//                                                                                                                                 <span class="gradient-spacer d-block mb-3"></span>
//                                                                                                                                 <div class="container">
//                                                                                                                                     <div class="row align-items-center g-3">
//                                                                                                                                         <div class="col-lg-4">
//                                                                                                                                             <div class="copyright-text text-light">
//                                                                                                                                                 © All Designed, Developed and 💕 by <b><font color="#ff9c00">ThemeTags</font></b>
//                                                                                                                                             </div>
//                                                                                                                                         </div>
//                                                                                                                                         <div class="col-lg-4 d-none d-lg-block">
//                                                                                                                                             <div class="logo-wrapper text-center">
//                                                                                                                                                 <a href="https://grostore.themetags.com" class="logo"><img
//                                                                                                                                                     src="https://grostore.themetags.com/public/uploads/media/ZithHqXrynYP6nkIfU0ei7VtWRMvuObOGd0P2tdR.png" alt="footer logo"
//                                                                                                                                                     class="img-fluid"></a>
//                                                                                                                                             </div>
//                                                                                                                                         </div>
//                                                                                                                                         <div class="col-lg-4">
//                                                                                                                                             <div class="footer-payments-info d-flex align-items-center justify-content-lg-end gap-2">
//                                                                                                                                                 <div
//                                                                                                                                                     class="rounded-1 d-inline-flex align-items-center justify-content-center p-2 flex-shrink-0">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/3WOll3QyXt5f9NNi22BRANFNCTNQRey75DYAOXd4.png"
//                                                                                                                                                         alt="accepted_payment" class="img-fluid">
//                                                                                                                                                 </div>
//                                                                                                                                             </div>
//                                                                                                                                         </div>
//                                                                                                                                     </div>
//                                                                                                                                 </div>
//                                                                                                                             </div>
//                                                                                                                         </footer>
//                                                                                                                         <div class="mobile-toolbar d-block d-md-none d-lg-none">
//                                                                                                                             <div class="d-table table-layout-fixed w-100">
//                                                                                                                                 <a class="d-table-cell mobile-toolbar-item  mobile-menu-toggle">
//                                                                                                                                     <span class="mobile-toolbar-icon"><i class="fas fa-bars"></i></span><span
//                                                                                                                                         class="mobile-toolbar-label">Category
//                                                                                                                                     </span>
//                                                                                                                                 </a>
//                                                                                                                                 <div class="gshop-header-search dropdown d-table-cell mobile-toolbar-item">
//                                                                                                                                     <button class="header-icon" type="button" data-bs-toggle="dropdown">
//                                                                                                                                         <span class="mobile-toolbar-icon">
//                                                                                                                                             <svg width="18" height="23" viewBox="0 0 22 23" fill="none"
//                                                                                                                                                 xmlns="http://www.w3.org/2000/svg">
//                                                                                                                                                 <path
//                                                                                                                                                     d="M9.68859 0.5C4.34645 0.5 0 4.84646 0 10.1886C0 15.5311 4.34645 19.8772 9.68859 19.8772C15.031 19.8772 19.3772 15.5311 19.3772 10.1886C19.3772 4.84646 15.031 0.5 9.68859 0.5ZM9.68859 18.0886C5.33261 18.0886 1.78866 14.5447 1.78866 10.1887C1.78866 5.83266 5.33261 2.28867 9.68859 2.28867C14.0446 2.28867 17.5885 5.83262 17.5885 10.1886C17.5885 14.5446 14.0446 18.0886 9.68859 18.0886Z"
//                                                                                                                                                     fill="#5D6374" />
//                                                                                                                                                 <path
//                                                                                                                                                     d="M21.7406 20.9824L16.6436 15.8853C16.2962 15.538 15.7338 15.538 15.3865 15.8853C15.0391 16.2323 15.0391 16.7954 15.3865 17.1424L20.4835 22.2395C20.6571 22.4131 20.8845 22.5 21.1121 22.5C21.3393 22.5 21.5669 22.4131 21.7406 22.2395C22.0879 21.8925 22.0879 21.3294 21.7406 20.9824Z"
//                                                                                                                                                     fill="#5D6374" />
//                                                                                                                                             </svg>
//                                                                                                                                         </span>
//                                                                                                                                         <span class="mobile-toolbar-label">Search</span>
//                                                                                                                                     </button>
//                                                                                                                                     <div class="dropdown-menu dropdown-menu-start border-0">
//                                                                                                                                         <form class="search-form d-flex align-items-center" action="https://grostore.themetags.com/products">
//                                                                                                                                             <input type="text" placeholder="Search products..." class="w-100"
//                                                                                                                                                 name="search" >
//                                                                                                                                                 <button type="submit" class="submit-icon-btn-secondary"><i
//                                                                                                                                                     class="fa-solid fa-magnifying-glass"></i></button>
//                                                                                                                                         </form>
//                                                                                                                                     </div>
//                                                                                                                                 </div>
//                                                                                                                                 <a class="d-table-cell mobile-toolbar-item" href="https://grostore.themetags.com/customer-dashboard">
//                                                                                                                                     <span class="mobile-toolbar-icon">
//                                                                                                                                         <svg width="18" height="25" viewBox="0 0 22 25" fill="none"
//                                                                                                                                             xmlns="http://www.w3.org/2000/svg">
//                                                                                                                                             <path
//                                                                                                                                                 d="M11.092 11.9546C12.6656 11.9546 14.0281 11.3902 15.1416 10.2766C16.2547 9.16322 16.8193 7.80093 16.8193 6.2271C16.8193 4.65382 16.2549 3.29134 15.1414 2.1776C14.0279 1.0644 12.6654 0.5 11.092 0.5C9.51825 0.5 8.156 1.0644 7.04266 2.17778C5.92931 3.29116 5.36475 4.65363 5.36475 6.2271C5.36475 7.80093 5.92931 9.1634 7.04266 10.2768C8.15636 11.39 9.51879 11.9546 11.092 11.9546ZM8.0281 3.16308C8.88239 2.30877 9.88453 1.89349 11.092 1.89349C12.2993 1.89349 13.3017 2.30877 14.1561 3.16308C15.0104 4.01757 15.4259 5.01992 15.4259 6.2271C15.4259 7.43464 15.0104 8.43681 14.1561 9.2913C13.3017 10.1458 12.2993 10.5611 11.092 10.5611C9.88489 10.5611 8.88275 10.1456 8.0281 9.2913C7.17364 8.43699 6.7582 7.43464 6.7582 6.2271C6.7582 5.01992 7.17364 4.01757 8.0281 3.16308Z"
//                                                                                                                                                 fill="#5D6374" stroke="#5D6374" stroke-width="0.2" />
//                                                                                                                                             <path
//                                                                                                                                                 d="M21.1339 18.893C21.1012 18.4201 21.0352 17.9043 20.9379 17.3596C20.8397 16.8108 20.7133 16.292 20.562 15.8178C20.4055 15.3277 20.1931 14.8438 19.9301 14.38C19.6575 13.8986 19.3371 13.4794 18.9776 13.1345C18.6016 12.7736 18.1414 12.4835 17.6091 12.2719C17.0787 12.0614 16.4909 11.9547 15.8621 11.9547C15.6152 11.9547 15.3763 12.0564 14.9151 12.3576C14.6313 12.5433 14.2993 12.7581 13.9287 12.9956C13.6118 13.1982 13.1825 13.3879 12.6523 13.5598C12.135 13.7277 11.6098 13.8129 11.0912 13.8129C10.5729 13.8129 10.0477 13.7277 9.53001 13.5598C9.00034 13.3881 8.57088 13.1984 8.25455 12.9958C7.88747 12.7605 7.55527 12.5457 7.26718 12.3574C6.80634 12.0562 6.56753 11.9545 6.32059 11.9545C5.69163 11.9545 5.10401 12.0614 4.57378 12.2721C4.04189 12.4833 3.58143 12.7734 3.20512 13.1347C2.84561 13.4798 2.52522 13.8988 2.25281 14.38C1.99019 14.8438 1.77758 15.3276 1.62108 15.818C1.46993 16.2922 1.34351 16.8108 1.24533 17.3596C1.14788 17.9035 1.082 18.4195 1.04933 18.8935C1.01722 19.3569 1.00098 19.8393 1.00098 20.3266C1.00098 21.5934 1.40238 22.6189 2.19394 23.3752C2.97572 24.1216 4.00996 24.5 5.26808 24.5H16.9157C18.1735 24.5 19.2077 24.1216 19.9897 23.3752C20.7814 22.6194 21.1828 21.5935 21.1828 20.3264C21.1826 19.8374 21.1662 19.3551 21.1339 18.893ZM19.0123 22.3449C18.4957 22.8381 17.8099 23.0779 16.9155 23.0779H5.26808C4.37354 23.0779 3.68773 22.8381 3.17135 22.3451C2.66474 21.8613 2.41854 21.2008 2.41854 20.3266C2.41854 19.8718 2.43349 19.4229 2.46339 18.9918C2.49255 18.569 2.55216 18.1044 2.64056 17.6108C2.72786 17.1233 2.83896 16.6658 2.9711 16.2516C3.09789 15.8545 3.27082 15.4612 3.48527 15.0824C3.68995 14.7214 3.92544 14.4116 4.18529 14.1621C4.42835 13.9286 4.73471 13.7375 5.0957 13.5942C5.42956 13.4616 5.80476 13.3891 6.21208 13.3781C6.26172 13.4046 6.35012 13.4552 6.49334 13.5488C6.78475 13.7394 7.12064 13.9567 7.49197 14.1946C7.91054 14.4624 8.44981 14.7042 9.09409 14.9128C9.75277 15.1265 10.4245 15.235 11.0913 15.235C11.7581 15.235 12.4301 15.1265 13.0884 14.913C13.7333 14.704 14.2723 14.4624 14.6915 14.1943C15.0715 13.9506 15.3979 13.7395 15.6894 13.5488C15.8326 13.4553 15.921 13.4046 15.9706 13.3781C16.3781 13.3891 16.7533 13.4616 17.0874 13.5942C17.4482 13.7375 17.7545 13.9288 17.9976 14.1621C18.2574 14.4114 18.4929 14.7212 18.6976 15.0826C18.9122 15.4612 19.0854 15.8547 19.212 16.2515C19.3443 16.6662 19.4556 17.1235 19.5427 17.6106C19.6309 18.1052 19.6907 18.5699 19.7199 18.992V18.9924C19.7499 19.4218 19.7651 19.8705 19.7653 20.3266C19.7651 21.201 19.5189 21.8613 19.0123 22.3449Z"
//                                                                                                                                                 fill="#5D6374" stroke="#5D6374" stroke-width="0.2" />
//                                                                                                                                         </svg>
//                                                                                                                                     </span>
//                                                                                                                                     <span class="mobile-toolbar-label">Account</span>
//                                                                                                                                 </a>
//                                                                                                                                 <a class="d-table-cell mobile-toolbar-item" href="https://grostore.themetags.com/carts">


//                                                                                                                                     <span class="mobile-toolbar-icon mobile-cart-icon">
//                                                                                                                                         <svg width="18" height="25" viewBox="0 0 22 25" fill="none"
//                                                                                                                                             xmlns="http://www.w3.org/2000/svg">
//                                                                                                                                             <path
//                                                                                                                                                 d="M21.1704 23.9559L19.6264 7.01422C19.5843 6.55156 19.1908 6.19718 18.7194 6.19718H15.5355V4.78227C15.5355 2.14533 13.3583 0 10.6823 0C8.00628 0 5.82937 2.14533 5.82937 4.78227V6.19718H2.6433C2.17192 6.19718 1.77839 6.55156 1.73625 7.01422L0.186259 24.0225C0.163431 24.2735 0.248671 24.5223 0.421216 24.7082C0.593761 24.8941 0.837705 25 1.0933 25H20.2695C20.2702 25 20.2712 25 20.2719 25C20.775 25 21.1826 24.5982 21.1826 24.1027C21.1825 24.0528 21.1784 24.0036 21.1704 23.9559ZM7.65075 4.78227C7.65075 3.1349 9.01071 1.79465 10.6824 1.79465C12.3542 1.79465 13.7142 3.1349 13.7142 4.78227V6.19718H7.65075V4.78227ZM2.08948 23.2055L3.47591 7.99183H5.82937V9.59649C5.82937 10.0921 6.237 10.4938 6.74006 10.4938C7.24313 10.4938 7.65075 10.0921 7.65075 9.59649V7.99183H13.7142V9.59649C13.7142 10.0921 14.1219 10.4938 14.6249 10.4938C15.128 10.4938 15.5356 10.0921 15.5356 9.59649V7.99183H17.8869L19.2733 23.2055H2.08948Z"
//                                                                                                                                                 fill="#5D6374" />
//                                                                                                                                         </svg>
//                                                                                                                                         <small class="badge bg-primary cart-counter">1</small>
//                                                                                                                                     </span>
//                                                                                                                                     <span class="mobile-toolbar-label sub-total-price">₹1,920.00</span>
//                                                                                                                                 </a>
//                                                                                                                             </div>
//                                                                                                                         </div>
//                                                                                                                         <div class="offcanvas-left-menu position-fixed">
//                                                                                                                             <div class="mobile-menu">
//                                                                                                                                 <button class="offcanvas-close"><i class="fa-solid fa-xmark"></i></button>
//                                                                                                                                 <a href="https://grostore.themetags.com" class="d-inline-block mb-5"><img
//                                                                                                                                     src="https://grostore.themetags.com/public/uploads/media/0vDgRJLm6biMs5zCaVAze5RFwEwcTF4kSuHsZ9OT.png" alt="logo"></a>
//                                                                                                                                 <nav class="mobile-menu-wrapper scrollbar">
//                                                                                                                                     <ul>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=2"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/aGeVazxlUQXFJR0WMObSRo14aOCKOE4jONbOtTfv.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Milk</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=3"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/cfhS63jnRBfMaGaUINykX9oTR4Vypy1APuirIImN.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Meat &amp; Fish</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=4"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/e9YeF8L34DkRI8cnCfKQP3QBd2SosU4xFuqA0d8a.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Bakery &amp; Biscuits</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=5"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/4rGt17EnNiVKsstcQJfZr70bDGXxkk3PcxK99oND.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Beauty &amp; Health</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=6"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/QZA5S8YHIm08QrrgdN74SfZrZBbhVloTvLaAyAue.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Cleaning</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=7"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/WReJ6ANlzBRlgvM2zj8UfoDlmf2SPlCx9x3rRgzd.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Breakfast</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=8"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/WQJjaqXZXNnUHaubvRhHh5c3m4knHkCSwHWCIPWd.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Baby Care</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=9"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/Fi49LWa1xxWipSnJzfW3PeoTPIELpNK7nibeMMCh.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Pet Care</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=10"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/5oephm2sfLrK3ISeqQThhR9rA5FKcCsDnRsOezBZ.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Jam &amp; Jelly</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=11"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/6Okf9CYyDN9I7KJd8zHTzm04OutW8JqT4MSfB3Pt.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Honey</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=12"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/wUmBSdLhhuyiPqNrzJJbxdtFemrBtwS2lDcfecbf.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Cold Drinks</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=13"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/B1w5t5CWLo5OtLqvM332UQfsWzIarG9qiyEVUNb0.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Fresh Organic</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=14"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/TMmhA1bTP1CTsrU3FpNspex6S3WNdqKy2xZR9aM8.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Fresh Fruits</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=15"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/OfNXzapZlaGqPdd3IcLP4D4bp8BkwDEjlRGhGbfh.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Coffee Drinks</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                             <a href="https://grostore.themetags.com/products?&category_id=16"
//                                                                                                                                                 class="d-flex align-items-center">
//                                                                                                                                                 <div class="me-2 avatar-icon">
//                                                                                                                                                     <img src="https://grostore.themetags.com/public/uploads/media/uJMJUEimGnHGQ1OFXuBZtDzAutNRicBjLOCMewlK.png"
//                                                                                                                                                         alt="" class="rounded-circle h-100 w-100">
//                                                                                                                                                 </div>
//                                                                                                                                                 <span>Vegetables</span>
//                                                                                                                                             </a>
//                                                                                                                                         </li>
//                                                                                                                                     </ul>
//                                                                                                                                 </nav>
//                                                                                                                             </div>
//                                                                                                                         </div>
//                                                                                                                         <!--footer section end-->

//                                                                                                                     </div>


//                                                                                                                     <!--scroll bottom to top button start-->
//                                                                                                                     <button class="scroll-top-btn">
//                                                                                                                         <i class="fa-regular fa-hand-pointer"></i></button>
//                                                                                                                     <!--scroll bottom to top button end-->

//                                                                                                                     <!--build:js-->
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/default/assets/js/vendors/jquery-3.6.4.min.js?v=v3.0.0"></script>
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/default/assets/js/vendors/jquery-ui.min.js?v=v3.0.0"></script>
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/default/assets/js/vendors/bootstrap.bundle.min.js?v=v3.0.0"></script>
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/default/assets/js/vendors/swiper-bundle.min.js?v=v3.0.0"></script>
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/default/assets/js/vendors/jquery.magnific-popup.min.js?v=v3.0.0"></script>
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/default/assets/js/vendors/simplebar.min.js?v=v3.0.0"></script>
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/default/assets/js/vendors/parallax-scroll.js?v=v3.0.0"></script>
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/default/assets/js/vendors/isotop.pkgd.min.js?v=v3.0.0"></script>
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/default/assets/js/vendors/countdown.min.js?v=v3.0.0"></script>
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/default/assets/js/vendors/range-slider.js?v=v3.0.0"></script>
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/default/assets/js/vendors/waypoints.js?v=v3.0.0"></script>
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/default/assets/js/vendors/counterup.min.js?v=v3.0.0"></script>
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/default/assets/js/vendors/clipboard.min.js?v=v3.0.0"></script>

//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/common/js/toastr.min.js?v=v3.0.0"></script>
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/common/js/select2.js?v=v3.0.0"></script>
//                                                                                                                     <script src="https://grostore.themetags.com/public/frontend/default/assets/js/app.js?v=v3.0.0"></script>

//                                                                                                                     <script>
//                                                                                                                         "use strict"

//                                                                                                                         // runs when the document is ready
//                                                                                                                         $(document).ready(function() {
//                                                                                                                             initIsotop();
//     });

//                                                                                                                         // tooltip
//                                                                                                                         $(function() {
//                                                                                                                             $('[data-bs-toggle="tooltip"]').tooltip();
//     });


//                                                                                                                         //isotop filter grid 
//                                                                                                                         function initIsotop() {
//         var $filter_grid = $(".filter_group").isotope({ });
//                                                                                                                         $(".filter-btns").on("click", "button", function() {
//             var filterValue = $(this).attr("data-filter");
//                                                                                                                         $filter_grid.isotope({
//                                                                                                                             filter: filterValue,
//             });
//                                                                                                                         $(this).parent().find("button.active").removeClass("active");
//                                                                                                                         $(this).addClass("active");
//         });
//     }

//                                                                                                                         // copy coupon code
//                                                                                                                         $(function() {
//                                                                                                                             new ClipboardJS('.copy-text');
//     });
//                                                                                                                         $(".copyBtn").each(function() {
//                                                                                                                             $(this).on("click", function () {
//                                                                                                                                 $(this).html('Copied');
//                                                                                                                             });
//     });

//                                                                                                                         // change language
//                                                                                                                         function changeLocaleLanguage(e) {
//         var locale = e.dataset.flag;
//                                                                                                                         $.post("https://grostore.themetags.com/backend/change-language", {
//                                                                                                                             _token: 'Qxy9gkV0AmBqWP6KvZaYw9ga3fieRWvs3hqC7PY5',
//                                                                                                                         locale: locale
//         }, function(data) {
//                                                                                                                             setTimeout(() => {
//                                                                                                                                 location.reload();
//                                                                                                                             }, 300);
//         });
//     }

//                                                                                                                         // change currency
//                                                                                                                         function changeLocaleCurrency(e) {
//         var currency_code = e.dataset.currency;
//                                                                                                                         $.post("https://grostore.themetags.com/backend/change-currency", {
//                                                                                                                             _token: 'Qxy9gkV0AmBqWP6KvZaYw9ga3fieRWvs3hqC7PY5',
//                                                                                                                         currency_code: currency_code
//         }, function(data) {
//                                                                                                                             setTimeout(() => {
//                                                                                                                                 location.reload();
//                                                                                                                             }, 300);
//         });
//     }

//                                                                                                                         // change location
//                                                                                                                         function changeLocation(e) {
//         var location_id = e.dataset.location;
//                                                                                                                         $.post("https://grostore.themetags.com/backend/change-location", {
//                                                                                                                             _token: 'Qxy9gkV0AmBqWP6KvZaYw9ga3fieRWvs3hqC7PY5',
//                                                                                                                         location_id: location_id
//         }, function(data) {
//                                                                                                                             setTimeout(() => {
//                                                                                                                                 location.reload();
//                                                                                                                             }, 300);
//         });
//     }


//                                                                                                                         // showRejectionReason
//                                                                                                                         function showRejectionReason(reason) {
//                                                                                                                             $('.reason').empty();
//                                                                                                                         $('#refundRejectionModal').modal('show');
//                                                                                                                         $('.reason').html(reason);
//     }

//                                                                                                                         // show product details in modal
//                                                                                                                         function showProductDetailsModal(productId) {
//                                                                                                                             $('#quickview_modal .product-info').html(null);
//         $('.data-preloader-wrapper>div').addClass('spinner-border');
//                                                                                                                         $('.data-preloader-wrapper').addClass('min-h-400');
//                                                                                                                         $('#quickview_modal').modal('show');

//                                                                                                                         $.post('https://grostore.themetags.com/products/show-product-info', {
//                                                                                                                             _token: 'Qxy9gkV0AmBqWP6KvZaYw9ga3fieRWvs3hqC7PY5',
//                                                                                                                         id: productId
//         }, function(data) {
//                                                                                                                             setTimeout(() => {
//                                                                                                                                 $('.data-preloader-wrapper>div').removeClass('spinner-border');
//                                                                                                                                 $('.data-preloader-wrapper').removeClass('min-h-400');
//                                                                                                                                 $('#quickview_modal .product-info').html(data);
//                                                                                                                                 TT.ProductSliders();
//                                                                                                                                 cartFunc();
//                                                                                                                             }, 200);
//         });
//     }

//                                                                                                                         $('#quickview_modal').on('hide.bs.modal', function(e) {
//                                                                                                                             $('#quickview_modal .product-info').html(null);
//     });

//                                                                                                                         // address modal select2
//                                                                                                                         function addressModalSelect2(parent = '.addAddressModal') {
//                                                                                                                             $('.select2Address').select2({
//                                                                                                                                 dropdownParent: $(parent)
//                                                                                                                             });
//     }
//                                                                                                                         addressModalSelect2();

//                                                                                                                         // ajax toast 
//                                                                                                                         function notifyMe(level, message) {
//         if (level == 'danger') {
//                                                                                                                             level = 'error';
//         }
//                                                                                                                         toastr.options = {
//                                                                                                                             "timeOut": "5000",
//                                                                                                                         "closeButton": true,
//                                                                                                                         "positionClass": "toast-top-center",
//         };
//                                                                                                                         toastr[level](message);
//     }

//                                                                                                                         // laravel flash as toast messages




//                                                                                                                         // get selected variation information
//                                                                                                                         function getVariationInfo() {
//         if ($('.add-to-cart-form input[name=quantity]').val() > 0 && isValidForAddingToCart()) {
//                                                                                                                             let data = $('.add-to-cart-form').serializeArray();
//                                                                                                                         $.ajax({
//                                                                                                                             type: "POST",
//                                                                                                                         url: 'https://grostore.themetags.com/products/get-variation-info',
//                                                                                                                         data: data,
//                                                                                                                         success: function(response) {

//                                                                                                                             $('.all-pricing').addClass('d-none');
//                                                                                                                         $('.variation-pricing').removeClass('d-none');
//                                                                                                                         $('.variation-pricing').html(response.data.price);

//                                                                                                                         $('.add-to-cart-form input[name=product_variation_id]').val(response.data
//                                                                                                                         .id);
//                                                                                                                         $('.add-to-cart-form input[name=quantity]').prop('max', response.data.stock);

//                                                                                                                         if (response.data.stock < 1) {
//                                                                                                                             $('.add-to-cart-btn').prop('disabled', true);
//                                                                                                                         $('.add-to-cart-btn .add-to-cart-text').html(TT.localize.outOfStock);
//                     } else {
//                                                                                                                             $('.add-to-cart-btn').prop('disabled', false);
//                                                                                                                         $('.add-to-cart-btn .add-to-cart-text').html(TT.localize.addToCart);
//                                                                                                                         $('.qty-increase-decrease input[name=quantity]').val(1);
//                     }
//                 }
//             });
//         }
//     }

//                                                                                                                         // check if it can be added to cart
//                                                                                                                         function isValidForAddingToCart() {

//         var count = 0;
//                                                                                                                         $('.variation-for-cart').each(function() {
//                                                                                                                             // how many variations
//                                                                                                                             count++;
//         });

//                                                                                                                         if ($('.product-radio-btn input:radio:checked').length == count) {
//             return true;
//         }

//                                                                                                                         return false;
//     }

//                                                                                                                         // cart func
//                                                                                                                         function cartFunc() {
//                                                                                                                             // on selection of variation
//                                                                                                                             $('.product-radio-btn input').on('change', function () {
//                                                                                                                                 getVariationInfo();
//                                                                                                                             });

//                                                                                                                         // increase qty
//                                                                                                                         $('.qty-increase-decrease .increase').on('click', function() {
//             var prevValue = $('.product-qty input[name=quantity]').val();
//                                                                                                                         var maxValue = $('.product-qty input[name=quantity]').attr('max');
//                                                                                                                         if (maxValue == undefined || parseInt(prevValue) < parseInt(maxValue)) {
//                                                                                                                             $('.qty-increase-decrease input[name=quantity]').val(parseInt(prevValue) + 1)
//                                                                                                                         }
//         });

//                                                                                                                         // decrease qty
//                                                                                                                         $('.qty-increase-decrease .decrease').on('click', function() {
//             var prevValue = $('.product-qty input[name=quantity]').val();
//             if (prevValue > 1) {
//                                                                                                                             $('.qty-increase-decrease input[name=quantity]').val(parseInt(prevValue) - 1)
//                                                                                                                         }
//         });

//                                                                                                                         // add to cart form submit
//                                                                                                                         $('.add-to-cart-form').on('submit', function(e) {
//                                                                                                                             e.preventDefault();
//                                                                                                                         if (isValidForAddingToCart()) {
//                                                                                                                             $('.add-to-cart-btn').prop('disabled', true);
//                                                                                                                         $('.add-to-cart-btn .add-to-cart-text').html(TT.localize.addingToCart);

//                                                                                                                         // add to cart here
//                                                                                                                         let data = $('.add-to-cart-form').serializeArray();
//                                                                                                                         $.ajax({
//                                                                                                                             type: "POST",
//                                                                                                                         url: 'https://grostore.themetags.com/add-to-cart',
//                                                                                                                         data: data,
//                                                                                                                         success: function(data) {
//                                                                                                                             $('.add-to-cart-btn').prop('disabled', false);
//                                                                                                                         $('.add-to-cart-btn .add-to-cart-text').html(TT.localize.addToCart);
//                                                                                                                         updateCarts(data);
//                                                                                                                         notifyMe(data.alert, data.message);
//                     }
//                 });

//             } else {
//                                                                                                                             optionsAlert();
//             }
//         })
//     }
//                                                                                                                         cartFunc();

//                                                                                                                         // without variation form submit
//                                                                                                                         function directAddToCartFormSubmit($this) {
//                                                                                                                             // add to cart here
//                                                                                                                             let parent = $($this).closest('.direct-add-to-cart-form');

//                                                                                                                         parent.find('.direct-add-to-cart-btn').prop('disabled', true);

//                                                                                                                         let text = parent.find('.add-to-cart-text').html();
//                                                                                                                         parent.find('.add-to-cart-text').html(TT.localize.pleaseWait);


//                                                                                                                         let data = parent.serializeArray();
//                                                                                                                         $.ajax({
//                                                                                                                             type: "POST",
//                                                                                                                         url: 'https://grostore.themetags.com/add-to-cart',
//                                                                                                                         data: data,
//                                                                                                                         success: function(data) {
//                                                                                                                             parent.find('.direct-add-to-cart-btn').prop('disabled', false);

//                                                                                                                         if (text.includes("Buy Now")) {
//                                                                                                                             parent.find('.add-to-cart-text').html(TT.localize.buyNow);
//                 } else {
//                                                                                                                             parent.find('.add-to-cart-text').html(TT.localize.addToCart);
//                 }
//                                                                                                                         updateCarts(data);
//                                                                                                                         notifyMe(data.alert, data.message);
//             }
//         });
//     }

//                                                                                                                         // please choose all the available options
//                                                                                                                         function optionsAlert() {
//                                                                                                                             notifyMe('warning', TT.localize.optionsAlert);
//     }

//                                                                                                                         // handleCartItem
//                                                                                                                         function handleCartItem(action, id) {
//                                                                                                                             let data = {
//                                                                                                                             _token: "Qxy9gkV0AmBqWP6KvZaYw9ga3fieRWvs3hqC7PY5",
//                                                                                                                         action: action,
//                                                                                                                         id: id,
//         };

//                                                                                                                         $.ajax({
//                                                                                                                             type: "POST",
//                                                                                                                         url: 'https://grostore.themetags.com/update-cart',
//                                                                                                                         data: data,
//                                                                                                                         success: function(data) {
//                 if (data.success == true) {

//                                                                                                                             $('.apply-coupon-btn').removeClass('d-none');
//                                                                                                                         $('.clear-coupon-btn').addClass('d-none');
//                                                                                                                         $('.apply-coupon-btn').prop('disabled', false);
//                                                                                                                         $('.apply-coupon-btn').html(TT.localize.applyCoupon);
//                                                                                                                         updateCarts(data);
//                                                                                                                         if (action == 'increase' && data.message) {
//                                                                                                                             notifyMe(data.alert, data.message);
//                     }
//                 }
//             }
//         });
//     }

//                                                                                                                         // coupon-form form submit
//                                                                                                                         $('.coupon-form').on('submit', function(e) {
//                                                                                                                             e.preventDefault();
//                                                                                                                         $('.apply-coupon-btn').prop('disabled', true);
//                                                                                                                         $('.apply-coupon-btn').html(TT.localize.pleaseWait);

//                                                                                                                         // apply coupon here
//                                                                                                                         let data = $('.coupon-form').serializeArray();
//                                                                                                                         $.ajax({
//                                                                                                                             type: "POST",
//                                                                                                                         url: 'https://grostore.themetags.com/apply-coupon',
//                                                                                                                         data: data,
//                                                                                                                         success: function(data) {
//                 if (data.success == false) {
//                                                                                                                             notifyMe('error', data.message);
//                                                                                                                         $('.apply-coupon-btn').prop('disabled', false);
//                                                                                                                         $('.apply-coupon-btn').html(TT.localize.applyCoupon);
//                 } else {
//                                                                                                                             // append clear button 
//                                                                                                                             $('.coupon-input').prop('disabled', false);
//                                                                                                                         $('.apply-coupon-btn').addClass('d-none');
//                                                                                                                         $('.clear-coupon-btn').removeClass('d-none');

//                                                                                                                         $('.apply-coupon-btn').prop('disabled', false);
//                                                                                                                         $('.apply-coupon-btn').html(TT.localize.applyCoupon);

//                                                                                                                         updateCouponPrice(data);

//                 }
//             }
//         });
//     })

//                                                                                                                         // clear-coupon-btn clicked
//                                                                                                                         $('.clear-coupon-btn').on('click', function(e) {
//                                                                                                                             e.preventDefault();
//                                                                                                                         // append clear button 
//                                                                                                                         $('.coupon-input').prop('disabled', false);
//                                                                                                                         $('.apply-coupon-btn').removeClass('d-none');
//                                                                                                                         $('.clear-coupon-btn').addClass('d-none');

//                                                                                                                         $.ajax({
//                                                                                                                             type: "GET",
//                                                                                                                         url: 'https://grostore.themetags.com/clear-coupon',
//                                                                                                                         success: function(data) {
//                                                                                                                             updateCouponPrice(data);
//             }
//         });
//     })

//                                                                                                                         function updateCouponPrice(data) {
//                                                                                                                             $('.coupon-discount-wrapper').toggleClass('d-none');
//                                                                                                                         $('.coupon-discount-price').html(data.couponDiscount);
//     }

//                                                                                                                         // update carts markup
//                                                                                                                         function updateCarts(data) {
//                                                                                                                             $('.cart-counter').empty();
//                                                                                                                         $('.sub-total-price').empty();

//                                                                                                                         $('.cart-navbar-wrapper .simplebar-content').empty();
//                                                                                                                         $('.cart-listing').empty();

//         if (data.cartCount > 0) {
//                                                                                                                             $('.cart-counter').removeClass('d-none');
//         } else {
//                                                                                                                             $('.cart-counter').addClass('d-none');
//         }

//                                                                                                                         $('.cart-counter').html(data.cartCount);
//                                                                                                                         $('.sub-total-price').html(data.subTotal);
//                                                                                                                         $('.cart-navbar-wrapper .simplebar-content').html(data.navCarts);
//                                                                                                                         $('.cart-listing').html(data.carts);
//                                                                                                                         $('.coupon-discount-wrapper').addClass('d-none');
//                                                                                                                         $('.checkout-sidebar').empty();

//     }

//                                                                                                                         // get logistics to check out
//                                                                                                                         function getLogistics(city_id) {
//                                                                                                                             $.ajax({
//                                                                                                                                 headers: {
//                                                                                                                                     'X-CSRF-TOKEN': 'Qxy9gkV0AmBqWP6KvZaYw9ga3fieRWvs3hqC7PY5'
//                                                                                                                                 },
//                                                                                                                                 url: "https://grostore.themetags.com/get-ch%20eckout-logistics",
//                                                                                                                                 type: 'POST',
//                                                                                                                                 data: {
//                                                                                                                                     city_id: city_id
//                                                                                                                                 },
//                                                                                                                                 success: function (data) {
//                                                                                                                                     $('.checkout-sidebar').empty();
//                                                                                                                                     $('.checkout-logistics').empty();
//                                                                                                                                     $('.checkout-logistics').html(data.logistics);
//                                                                                                                                     $('.checkout-sidebar').html(data.summary);
//                                                                                                                                 }
//                                                                                                                             });
//     }

//                                                                                                                         //  get logistics to check out -- onchange
//                                                                                                                         $(document).on('change', '[name=chosen_logistic_zone_id]', function() {
//         var chosen_logistic_zone_id = $(this).val();
//                                                                                                                         getShippingAmount(chosen_logistic_zone_id);
//     });

//                                                                                                                         // get logistics to check out
//                                                                                                                         function getShippingAmount(logistic_zone_id) {
//                                                                                                                             $.ajax({
//                                                                                                                                 headers: {
//                                                                                                                                     'X-CSRF-TOKEN': 'Qxy9gkV0AmBqWP6KvZaYw9ga3fieRWvs3hqC7PY5'
//                                                                                                                                 },
//                                                                                                                                 url: "https://grostore.themetags.com/shipping-amount",
//                                                                                                                                 type: 'POST',
//                                                                                                                                 data: {
//                                                                                                                                     logistic_zone_id: logistic_zone_id
//                                                                                                                                 },
//                                                                                                                                 success: function (data) {
//                                                                                                                                     $('.checkout-sidebar').empty();
//                                                                                                                                     $('.checkout-sidebar').html(data);
//                                                                                                                                 }
//                                                                                                                             });
//     }

//                                                                                                                         //  submit checkout form
//                                                                                                                         $(document).on('submit', '.checkout-form', function(e) {
//         // shipping address not selected
//         if ($('.checkout-form input[name=shipping_address_id]:checked').length == 0) {
//                                                                                                                             notifyMe('error', 'Please select shipping address');
//                                                                                                                         e.preventDefault();;
//                                                                                                                         return false;
//         }

//                                                                                                                         // logistic not selected
//                                                                                                                         if ($('.checkout-form input[name=chosen_logistic_zone_id]:checked').length == 0) {
//                                                                                                                             notifyMe('error', 'Please select logistic');
//                                                                                                                         e.preventDefault();;
//                                                                                                                         return false;
//         }

//                                                                                                                         // billing address not selected
//                                                                                                                         if ($('.checkout-form input[name=billing_address_id]:checked').length == 0) {
//                                                                                                                             notifyMe('error', 'Please select billing address');
//                                                                                                                         e.preventDefault();;
//                                                                                                                         return false;
//         }
//     });

//                                                                                                                         // add to wishlist
//                                                                                                                         function addToWishlist(productId) {
//                                                                                                                             $.ajax({
//                                                                                                                                 headers: {
//                                                                                                                                     'X-CSRF-TOKEN': 'Qxy9gkV0AmBqWP6KvZaYw9ga3fieRWvs3hqC7PY5'
//                                                                                                                                 },
//                                                                                                                                 type: "POST",
//                                                                                                                                 url: 'https://grostore.themetags.com/add-to-wishlist',
//                                                                                                                                 data: {
//                                                                                                                                     product_id: productId
//                                                                                                                                 },
//                                                                                                                                 success: function (data) {
//                                                                                                                                     notifyMe('success', data.message);
//                                                                                                                                 }
//                                                                                                                             });
//                         }
//                                                                                                                     </script>
//                                                                                                                     <!--endbuild-->

//                                                                                                                     <!--page's scripts-->
//                                                                                                                     <!--page's script-->

//                                                                                                                     <!--for pwa-->
//                                                                                                                     <script src="https://grostore.themetags.com/public/sw.js"></script>
//                                                                                                                     <script>
//                                                                                                                         if (!navigator.serviceWorker?.controller) {
//                                                                                                                             navigator.serviceWorker?.register("./public/sw.js").then(function (reg) {
//                                                                                                                                 // console.log("Service worker has been registered for scope: " + reg.scope);
//                                                                                                                             });
//             }
//                                                                                                                     </script>
//                                                                                                                     <!--for pwa-->

//                                                                                                                 </body>

//                                                                                                             </html>
