void((function() {
    var d = document, page = [];

    // Create page quickly (and dirty)
    page.push('&#60;!DOCTYPE html>&#60;html>&#60;head>&#60;meta charset=&#34;UTF-8&#34;>&#60;title>'+d.title+' - Responsive test&#60;/title>');
    page.push('&#60;link rel=&#34;stylesheet&#34; href=&#34;http://responsive-bookmarklet.local/assets/css/app.css&#34;>&#60;/head>&#60;body>');
    page.push('&#60;header>&#60;div id=&#34;size&#34;>&#60;/div>');
    page.push('&#60;div id=&#34;devices&#34;>');
    page.push('&#60;a href=&#34;#&#34; class=&#34;tablet-portrait&#34;>&#60;span>Tablet Portrait&#60;/span>&#60;/a>');
    page.push('&#60;a href=&#34;#&#34; class=&#34;tablet-landscape&#34;>&#60;span>Tablet Landscape&#60;/span>&#60;/a>');
    page.push('&#60;a href=&#34;#&#34; class=&#34;smartphone-portrait&#34;>&#60;span>iPhone Portrait&#60;/span>&#60;/a>');
    page.push('&#60;a href=&#34;#&#34; class=&#34;smartphone-landscape&#34;>&#60;span>iPhone Landscape&#60;/span>&#60;/a>');
    page.push('&#60;a href=&#34;#&#34; class=&#34;auto active&#34;>&#60;span>Auto&#60;/span>&#60;/a>');
    page.push('&#60;/div>&#60;/header>&#60;section>');
    page.push('&#60;iframe id=&#34;wrapper&#34; src=&#34'+d.URL+'&#34; >&#60;/iframe>&#60;/section>');
    page.push('&#60;script src=&#34;http://responsive-bookmarklet.local/assets/js/app.js&#34;>&#60;/script>');
    page.push('&#60;/body>&#60;/html>');

    d.write(page.join(''));
})());