<section class="featured section container" id="featured">
    <h2 class="section__title">
        Courses Most Views
    </h2>

    <div class="featured__container grid">
    </div>
</section>

<script>
const app = (() => {
    const request = async () => {
        const response = await fetch('https://cryptic-mesa-81897.herokuapp.com/courses/limmit/3');
        const data = await response.json();
        return data;
    }

    const render = async () => {
        const nodeContainer = document.querySelector(".featured__container");
        const data = await request();

        for (let node of data) {
            let article = document.createElement('article');
            article.classList.add("_CoursesMostViewsOverView", "featured__card");
            article.innerHTML = `
            <span class='featured__tag'>Top Views</span>

            <img src=${node['thumbnailUrl']} alt='' class='featured__img'>

            <div class='featured__data'>
                <h3 class='featured__title'>${node['title']}</h3>
                <span class='featured__price'>${node['newPrice']}$</span>
            </div>
            <button class="button featured__button">READING MORE</button>
            `;
            nodeContainer.append(article);
        }
    };

    render();
})()
</script>