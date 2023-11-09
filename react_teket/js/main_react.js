function Sample(){
    return (
        <>
            <SkipComponent />
            <Header />
            <WrapComponent />
            <Footer />
        </>
    )
}

function SkipComponent(){
    return (
        <>
            <ul className="skip">
                <li><a href="#main">콘텐츠 바로가기</a></li>
            </ul>
        </>
    )
}

function Header(){
    return (
        <>
            <header>
                <h1>
                    <a href="#">
                        <img src="img/logo.png" alt="cteket" />
                    </a>
                </h1>
            </header>
        </>
    )
}

function WrapComponent(){
    return (
        <>
            <MainComponent />
        </>
    )
}

function MainComponent (){
    return (
        <>
            <div id="menubox">
                <nav id="menu">
                    <ul>
                        <li><a href="#">TOP</a></li>
                        <li><a href="#">BOTTOM</a></li>
                        <li><a href="#">ACCESSORIES</a></li>
                        <li><a href="#">LIVING</a></li>
                    </ul>
                </nav>
                <div className="submenu">
                    <div className="box">
                        <ul>
                            <li><a href="#">Outerwear</a></li>
                            <li><a href="#">Knitwear</a></li>
                            <li><a href="#">Sweatshirts</a></li>
                            <li><a href="#">Tees</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Pants</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Headwear</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Apartment</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section id="banner">
                <div><img src="img/01.jpg" alt="ban" /></div>
                <div><img src="img/02.jpg" alt="ban" /></div>
                <div><img src="img/03.jpg" alt="ban" /></div>
            </section>
            <section id="main">
                <ul>
                    <li>
                        <a href="#">
                            <img src="img/001.jpg" alt="1" />
                            <p className="product-name">Layer Wind Jacket Light Pink</p>
                            <p className="price">185,000</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/002.jpg" alt="1" />
                            <p className="product-name">Holly Zip-Up Hoodie Beige</p>
                            <p className="price">149,000</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/003.jpg" alt="1" />
                            <p className="product-name">Pack-Up Sweatshirt Yellow</p>
                            <p className="price">89,000</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/004.jpg" alt="1" />
                            <p className="product-name">Igloo Reversible Down Jacket Gray</p>
                            <p className="price">279,000</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/005.jpg" alt="1" />
                            <p className="product-name">Quaint Wind Jacket Light Blue</p>
                            <p className="price">195,000</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/006.jpg" alt="1" />
                            <p className="product-name">WW Sweatshirt Black</p>
                            <p className="price">89,000</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/007.jpg" alt="1" />
                            <p className="product-name">Layer Wind Jacket Black</p>
                            <p className="price">185,000</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/008.jpg" alt="1" />
                            <p className="product-name">Warm Things Hoodie Melange Gray</p>
                            <p className="price">97,000</p>
                        </a>
                    </li>
                    <li class="arrow-right">
                        <a href="#">
                            <img src="img/arrow-right.svg" />
                        </a>
                    </li>
                </ul>
            </section>
            <section id="ban1">
                <img src="img/04.jpg" alt="" />
            </section>
            <section id="main1">
                <h2>ACCESSORIES</h2>
                <ul>
                    <li><a href="#"><img src="img/009.jpg" /></a></li>
                    <li><a href="#"><img src="img/010.jpg" /></a></li>
                    <li><a href="#"><img src="img/011.jpg" /></a></li>
                    <li><a href="#"><img src="img/012.jpg" /></a></li>
                    <li><a href="#"><img src="img/013.jpg" /></a></li>
                    <li><a href="#"><img src="img/014.jpg" /></a></li>
                    <li><a href="#"><img src="img/015.jpg" /></a></li>
                </ul>
            </section>
            <section id="main2">
                <h2>LIVING</h2>
                <ul>
                    <li><a href="#"><img src="img/living01.jpg" /></a></li>
                    <li><a href="#"><img src="img/living02.jpg" /></a></li>
                </ul>
            </section>
        </>
    )
}

function Footer(){
    return (
        <>
            <footer>
                <ul class="footer">
                    <li>Service
                        <ul>
                            <li>Q&A</li>
                            <li>Information</li>
                        </ul>
                    </li>
                    <li>Help
                        <ul>
                            <li>Stockists</li>
                            <li>Legal</li>
                            <li>FAQ</li>
                            <li>Tracking</li>
                        </ul>
                    </li>
                    <li>Social
                        <ul>
                            <li>Instagram</li>
                            <li>Kakao</li>
                        </ul>
                    </li>
                </ul>
            </footer>
        </>
    )
}

ReactDOM.render(
    <Sample />,
    document.getElementById("root")
)