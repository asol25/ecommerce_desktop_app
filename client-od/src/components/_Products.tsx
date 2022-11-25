function Products() {
    return (
        <>
            <section className="products section container" id="products">
                <h2 className="section__title">
                    Products
                </h2>

                <div className="products__container grid">
                    <article className="products__card">
                        <img src="assets/img/product1.png" alt="" className="products__img"></img>

                        <h3 className="products__title">Spirit rose</h3>
                        <span className="products__price">$1500</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>

                    <article className="products__card">
                        <img src="assets/img/product2.png" alt="" className="products__img"></img>

                        <h3 className="products__title">Khaki pilot</h3>
                        <span className="products__price">$1350</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>

                    <article className="products__card">
                        <img src="assets/img/product3.png" alt="" className="products__img"></img>

                        <h3 className="products__title">Jubilee black</h3>
                        <span className="products__price">$870</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>

                    <article className="products__card">
                        <img src="assets/img/product4.png" alt="" className="products__img"></img>

                        <h3 className="products__title">Fosil me3</h3>
                        <span className="products__price">$650</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>

                    <article className="products__card">
                        <img src="assets/img/product5.png" alt="" className="products__img"></img>

                        <h3 className="products__title">Duchen</h3>
                        <span className="products__price">$950</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Products;