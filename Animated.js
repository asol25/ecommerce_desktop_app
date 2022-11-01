const app = (() => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const handleActive = () => {
        const nodesActive = $$('.nav__link');
        nodesActive.forEach(e => {
            e.addEventListener('click', (e) => {
                e.preventDefault();
                removeActive(nodesActive);
                e.target.classList.add('active');
            })
        })
    }

    const removeActive = (nodesActive) => {
        nodesActive.forEach(element => {
            element.classList.remove('active');
        });
    }
    
    handleActive();
})();