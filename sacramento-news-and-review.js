// List articles on main page (https://sacramento.newsreview.com/)
let mainContent = document.getElementById("main-content");
Array.from(mainContent.querySelectorAll('a')).forEach( (e) => {console.log(e.href)})

// Print PDF out of individual articles
let article = document.querySelector('#main-content article');
let root = document.body.parentNode;
root.removeChild(document.body);
[article].forEach(elem => root.insertAdjacentElement('beforeend', elem));
document.title = "sacramento-news-and-review-" + new URL(document.URL).pathname.replace(/^\/(.*)\/$/, "$1").replace(/\//g, '-');
window.print()
// Choose to print to PDF
