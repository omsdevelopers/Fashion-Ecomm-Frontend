import React from "react";
import { Link } from "react-router-dom";

function Shop() {
    return (
        <>
            <main>
                <div className="page-notification">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Breadcrumb section */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home </Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Shop</a>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="category-area">
                    <div className="row">
                        {/* Categories Column */}
                        <div className=" container col-12 col-sm-12 col-md-2">
                            <nav className="navbar navbar-expand-xl flex-column flex-wrap  " style={{ width: '100%', fontSize: '16px' }}>
                                {/* ... Your existing filter code */}
                                <button
            className="btn btn-primary d-xl-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarFilter"
            aria-controls="offcanvasNavbarFilter"
        >
            Toggle Filters
        </button>

                                <div
                                    className="offcanvas offcanvas-start "
                                    tabIndex="-1"
                                    id="offcanvasNavbarFilter"
                                    aria-labelledby="offcanvasNavbarFilterLabel"
                                >
                                    <div className="offcanvas-header" >
                                        <h5 className="offcanvas-title mb-0  d-xl-none fw-bold" id="offcanvasNavbarFilterLabel" >
                                            Filters
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close text-reset"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <div className="filter-sidebar">
                                            <div className="card rounded-0">
                                                <div className="card-header d-none d-xl-block bg-transparent">
                                                    <h5 className="mb-0 fw-bold" style={{ fontSize: '20px' }}>Filters</h5>
                                                </div>
                                                <div className="card-body">
                                                    <h6 className="p-1 fw-bold bg-light" style={{ fontSize: '16px' }}>Categories</h6>
                                                    <div className="categories">
                                                        <div className="categories-wrapper height-1 p-1">
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value=""
                                                                    id="chekCate1"
                                                                />
                                                                <label className="form-check-label" for="chekCate1">
                                                                    <span>Shirts</span>
                                                                    <span className="product-number">(1548)</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="categories-wrapper height-1 p-1">
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value=""
                                                                    id="chekCate1"
                                                                />
                                                                <label className="form-check-label" for="chekCate1">
                                                                    <span>Jackets</span>
                                                                    <span className="product-number">(1548)</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="categories-wrapper height-1 p-1">
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value=""
                                                                    id="chekCate1" />
                                                                <label className="form-check-label" for="chekCate1">
                                                                    <span>Hoodies</span>
                                                                    <span className="product-number">(1548)</span>
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div className="categories-wrapper height-1 p-1">
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value=""
                                                                    id="chekCate1" />
                                                                <label className="form-check-label" for="chekCate1">
                                                                    <span>Kurties</span>
                                                                    <span className="product-number">(1548)</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="categories-wrapper height-1 p-1">
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value=""
                                                                    id="chekCate1" />
                                                                <label className="form-check-label" for="chekCate1">
                                                                    <span>Gown</span>
                                                                    <span className="product-number">(1548)</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="brands">
                                                            <h6 className="p-1 fw-bold bg-light" style={{ fontSize: '16px' }}>Brands</h6>
                                                            <div className="brands-wrapper height-1 p-1">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand4" />
                                                                    <label className="form-check-label" for="chekBrand4">
                                                                        <span>Zara</span><span className="product-number">(987)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label className="form-check-label" for="chekBrand5">
                                                                        <span>Ramraj</span><span className="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label className="form-check-label" for="chekBrand5">
                                                                        <span>Zudio</span><span className="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label className="form-check-label" for="chekBrand5">
                                                                        <span>Otto</span><span className="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label className="form-check-label" for="chekBrand5">
                                                                        <span>Fila</span><span className="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="brands">
                                                            <h6 className="p-1 fw-bold bg-light" style={{ fontSize: '16px' }}>Size</h6>
                                                            <div className="brands-wrapper height-1 p-1">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand4" />
                                                                    <label className="form-check-label" for="chekBrand4">
                                                                        <span>XS</span><span className="product-number">(987)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label className="form-check-label" for="chekBrand5">
                                                                        <span>S</span><span className="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand4" />
                                                                    <label className="form-check-label" for="chekBrand4">
                                                                        <span>M</span><span className="product-number">(987)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label className="form-check-label" for="chekBrand5">
                                                                        <span>L</span><span className="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label className="form-check-label" for="chekBrand5">
                                                                        <span>XL</span><span className="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label className="form-check-label" for="chekBrand5">
                                                                        <span>XXL</span><span className="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="brands">
                                                            <h6 className="p-1 fw-bold bg-light" style={{ fontSize: '16px' }}>Colors</h6>
                                                            <div className="brands-wrapper height-1 p-1">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand4" />
                                                                    <label className="form-check-label" for="chekBrand4">
                                                                        <span>Red</span><span className="product-number">(987)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label className="form-check-label" for="chekBrand5">
                                                                        <span>Black</span><span className="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand4" />
                                                                    <label className="form-check-label" for="chekBrand4">
                                                                        <span>White</span><span className="product-number">(987)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label className="form-check-label" for="chekBrand5">
                                                                        <span>Blue</span><span className="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label className="form-check-label" for="chekBrand5">
                                                                        <span>Navy Blue</span><span className="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label className="form-check-label" for="chekBrand5">
                                                                        <span>Green </span><span className="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="brands">
                                                            <h6 className="p-1 fw-bold bg-light" style={{ fontSize: '16px' }}>Discount %</h6>
                                                            <div className="brands-wrapper height-1 p-1">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand4" />
                                                                    <label className="form-check-label" for="chekBrand4">
                                                                        <span>50% and Above</span><span className="product-number">(987)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label className="form-check-label" for="chekBrand5">
                                                                        <span>60% and Above</span><span className="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand4" />
                                                                    <label className="form-check-label" for="chekBrand4">
                                                                        <span>70% and Above</span><span className="product-number">(987)</span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label className="form-check-label" for="chekBrand5">
                                                                        <span>80% and Above</span><span className="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        {/* Product Cards Column */}
                        <div className="col-12 col-md-10">
                            <div className="shop-right-sidebar">
                                <div className="product-grid mt-4">
                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                        {/* Your existing product cards code goes here */}
                                        <div className="col">
                                            {/* ... Your existing product card code */}
                                            <div class="card border shadow-none">
                                                <div class="position-relative overflow-hidden">
                                                    <a href="javascript:;">
                                                        <img
                                                            src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/best-sellar/02.webp"
                                                            class="card-img-top"
                                                            alt="..."
                                                        />
                                                    </a>
                                                </div>
                                                <div class="card-body border-top">
                                                    <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                    <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                    <div class="product-price d-flex align-items-center gap-2 mt-2">
                                                        <div class="h6 fw-bold">$458</div>
                                                        <div class="h6 fw-light text-muted text-decoration-line-through">
                                                            $2089
                                                        </div>
                                                        <div class="h6 fw-bold text-danger">(70% off)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* ... Your existing product card code */}
                                            <div class="card border shadow-none">
                                                <div class="position-relative overflow-hidden">
                                                    <a href="javascript:;">
                                                        <img
                                                            src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/03.webp"
                                                            class="card-img-top"
                                                            alt="..."
                                                        />
                                                    </a>
                                                </div>
                                                <div class="card-body border-top">
                                                    <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                    <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                    <div class="product-price d-flex align-items-center gap-2 mt-2">
                                                        <div class="h6 fw-bold">$458</div>
                                                        <div class="h6 fw-light text-muted text-decoration-line-through">
                                                            $2089
                                                        </div>
                                                        <div class="h6 fw-bold text-danger">(70% off)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* ... Your existing product card code */}
                                            <div class="card border shadow-none">
                                                <div class="position-relative overflow-hidden">
                                                    <a href="javascript:;">
                                                        <img
                                                            src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/05.webp"
                                                            class="card-img-top"
                                                            alt="..."
                                                        />
                                                    </a>
                                                </div>
                                                <div class="card-body border-top mt-3">
                                                    <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                    <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                    <div class="product-price d-flex align-items-center gap-2 mt-2">
                                                        <div class="h6 fw-bold">$458</div>
                                                        <div class="h6 fw-light text-muted text-decoration-line-through">
                                                            $2089
                                                        </div>
                                                        <div class="h6 fw-bold text-danger">(70% off)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                        {/* Your existing product cards code goes here */}
                                        <div className="col">
                                            {/* ... Your existing product card code */}
                                            <div class="card border shadow-none">
                                                <div class="position-relative overflow-hidden">
                                                    <a href="javascript:;">
                                                        <img
                                                            src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/special-offer/03.webp"
                                                            class="card-img-top"
                                                            alt="..."
                                                        />
                                                    </a>
                                                </div>
                                                <div class="card-body border-top">
                                                    <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                    <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                    <div class="product-price d-flex align-items-center gap-2 mt-2">
                                                        <div class="h6 fw-bold">$458</div>
                                                        <div class="h6 fw-light text-muted text-decoration-line-through">
                                                            $2089
                                                        </div>
                                                        <div class="h6 fw-bold text-danger">(70% off)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* ... Your existing product card code */}
                                            <div class="card border shadow-none">
                                                <div class="position-relative overflow-hidden">
                                                    <a href="javascript:;">
                                                        <img
                                                            src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/trending-product/04.webp"
                                                            class="card-img-top"
                                                            alt="..."
                                                        />
                                                    </a>
                                                </div>
                                                <div class="card-body border-top">
                                                    <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                    <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                    <div class="product-price d-flex align-items-center gap-2 mt-2">
                                                        <div class="h6 fw-bold">$458</div>
                                                        <div class="h6 fw-light text-muted text-decoration-line-through">
                                                            $2089
                                                        </div>
                                                        <div class="h6 fw-bold text-danger">(70% off)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* ... Your existing product card code */}
                                            <div class="card border shadow-none mt-2" >
                                                <div class="position-relative overflow-hidden">
                                                    <a href="javascript:;">
                                                        <img
                                                            src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/new-arrival/08.webp"
                                                            class="card-img-top"
                                                            alt="..."
                                                        />
                                                    </a>
                                                </div>
                                                <div class="card-body border-top">
                                                    <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                    <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                    <div class="product-price d-flex align-items-center gap-2 mt-2">
                                                        <div class="h6 fw-bold">$458</div>
                                                        <div class="h6 fw-light text-muted text-decoration-line-through">
                                                            $2089
                                                        </div>
                                                        <div class="h6 fw-bold text-danger">(70% off)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-3" />
                        <div className="d-flex justify-content-center">
                            <h2><b>Categories</b></h2>
                        </div>
                        <div className="popular-items mt-5">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="single-popular-items mb-50 text-center">
                                            <div className="popular-img">
                                                <img src="assets/img/gallery/popular1.png" alt="" />
                                                <div className="img-cap">
                                                    <span>Glasses</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <a href="shop.html" className="btn">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="single-popular-items mb-50 text-center">
                                            <div className="popular-img">
                                                <img src="assets/img/gallery/popular2.png" alt="" />
                                                <div className="img-cap">
                                                    <span>Watches</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <a href="shop.html" className="btn">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="single-popular-items mb-50 text-center">
                                            <div className="popular-img">
                                                <img src="assets/img/gallery/popular3.png" alt="" />
                                                <div className="img-cap">
                                                    <span>Jackets</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <a href="shop.html" className="btn">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="single-popular-items mb-50 text-center">
                                            <div className="popular-img">
                                                <img src="assets/img/gallery/popular4.png" alt="" />
                                                <div className="img-cap">
                                                    <span>Clothes</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <a href="shop.html" className="btn">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default Shop;
