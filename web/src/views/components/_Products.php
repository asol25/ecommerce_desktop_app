<?php ?>

<!--==================== PRODUCTS ====================-->
<section class="products section container" id="products">
    <form action="" class="form_products">
        <select>
            <option value="">None</option>
            <option value="">A to Z</option>
            <option value="">Z to A</option>
            <option value="">Large than</option>
            <option value="">Small than</option>
        </select>
    </form>

    <h2 class="section__title">
        <a href="/courses">Products</a>
    </h2>

    <div class="products__container grid">

    </div>
</section>

<script>
const products__container = (() => {
    // const event = () => {
    //     const btn = document.querySelectorAll(".products__button");
    //     btn.forEach(node => {
    //         node.addEventListener('click', (event) => {
    //             event.preventDefault();
    //             return window.location = `http://localhost:8000/course/${event.target.dataset.id}`;
    //         });
    //     });
    // }
    const request = async () => {
        const response = await fetch('https://cryptic-mesa-81897.herokuapp.com/courses/');
        const data = await response.json();
        return data;
    }

    const render = async () => {
        const nodeContainer = document.querySelector(".products__container");
        const data = await request();
        for (let node of data) {
            let article = document.createElement('article');
            article.classList.add("products__card");
            article.innerHTML = `
             <img src="${node['thumbnailUrl']}" alt="" class="products__img">

            <h3 class="products__title">${node['title']}</h3>
            <span class="products__price">$${node['newPrice']}</span>

            <button class="products__button">
                <i class='bx bx-shopping-bag'></i>
            </button>
            `;
            nodeContainer.append(article);
        }
    };

    render();
})()
</script>