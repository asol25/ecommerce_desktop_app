interface IProps {
    tag: string,
    id: string,
    title: string,
    cost: string,
    thumbnail: string,
    btn: string
}

function Feature() {
    return (
        <>
           <section className="featured section container" id="featured">
                <h2 className="section__title">
                    Featured
                </h2>

                <div className="featured__container grid">
                    <article className="featured__card">
                        <span className="featured__tag">Sale</span>

                        <img src="assets/img/featured1.png" alt="" className="featured__img"></img>

                        <div className="featured__data">
                            <h3 className="featured__title">Jazzmaster</h3>
                            <span className="featured__price">$1050</span>
                        </div>

                        <button className="button featured__button">ADD TO CART</button>
                    </article>

                    <article className="featured__card">
                        <span className="featured__tag">Sale</span>

                        <img src="assets/img/featured2.png" alt="" className="featured__img"></img>

                        <div className="featured__data">
                            <h3 className="featured__title">Ingersoll</h3>
                            <span className="featured__price">$250</span>
                        </div>

                        <button className="button featured__button">ADD TO CART</button>
                    </article>

                    <article className="featured__card">
                        <span className="featured__tag">Sale</span>

                        <img src="assets/img/featured3.png" alt="" className="featured__img"></img>

                        <div className="featured__data">
                            <h3 className="featured__title">Rose gold</h3>
                            <span className="featured__price">$890</span>
                        </div>

                        <button className="button featured__button">ADD TO CART</button>
                    </article>
                </div>
            </section>
        </>
      );
}

export default Feature;