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
    
    const toggleClose = () => {
        const nodeClose = $('.toggle__close');
        const nodeMenu = $('.nav');
        nodeClose.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.classList.add('show');
            nodeMenu.classList.add('show');
        })
    }

    const toggleOpen = () => {
        const nodeOpen = $('.toggle__open');
        const nodeMenu = $('.nav');
        nodeOpen.addEventListener('click', (e) => {
            e.preventDefault();
            nodeMenu.classList.remove('show');
        });
    }

    toggleOpen();
    toggleClose();
    handleActive();
})();