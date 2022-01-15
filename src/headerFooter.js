const headerFooter = (function() { //mainPage module
    const container = document.getElementById('body');
    _addHeader(container);
    _addMainContent(container);
    _addFooter(container);

    function _addHeader(container){
        const header = document.createElement('div');
        header.classList.add('header');
        const headText = document.createElement('h1');
        headText.textContent = "Header";
        header.appendChild(headText)
        container.appendChild(header);
    }

    function _addFooter(container){
        const footer = document.createElement('div');
        footer.classList.add('footer');
        const footText = document.createElement('h2');
        footText.textContent = "Footer";
        footer.appendChild(footText)
        container.appendChild(footer);
    }

    function _addMainContent(container){
        const content = document.createElement('div');
        content.classList.add('content');
        _addNavBar(content);
        container.appendChild(content);

    }

    function _addNavBar(content){
        const navBar = document.createElement('ul');
        navBar.classList.add('navBar');
        const home = document.createElement('li')
        home.textContent = "Home";
        const today = document.createElement('li')
        today.textContent = "Today";
        const week = document.createElement('li')
        week.textContent = "Week";
        navBar.appendChild(home);
        navBar.appendChild(today);
        navBar.appendChild(week);
        content.appendChild(navBar);
    }
    
});

export {headerFooter};