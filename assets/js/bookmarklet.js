void( function () {
  var d = document;
  d.write(
    '&#60;!DOCTYPE html>' +
    '&#60;html>' +
      '&#60;head>' +
        '&#60;meta charset=&#39;UTF-8&#39;>' +
        '&#60;title>'+d.title+' - Responsive test &#60;/title>' +
        '&#60;link rel=&#39;stylesheet&#39; href=&#39;http://responsive.victorcoulon.fr/assets/css/app.css&#39;>' +
        '&#60;script src=&#39;http://responsive.victorcoulon.fr/assets/js/app.min.js&#39;>&#60;/script>' +
      '&#60;/head>' +
      '&#60;body>' +
        '&#60;header>' +
          '&#60;div class=&#39;close&#39;>' +
            '&#60;a href=&#39;#&#39;>&times;&#60;/a>' +
          '&#60;/div>' +
          '&#60;div id=&#39;size&#39;>&#60;/div>' +
          '&#60;div class=&#39;keyboard&#39;>' +
            '&#60;a href=&#39;#&#39;>I&#60;/a>' +
          '&#60;/div>' +
          '&#60;div class=&#39;cssrefresh&#39;>' +
            '&#60;a href=&#39;#&#39;>I&#60;/a>' +
          '&#60;/div>' +
          '&#60;div class=&#39;reloadiframe&#39;>' +
            '&#60;a href=&#39;#&#39;>I&#60;/a>' +
          '&#60;/div>' +
          '&#60;div id=&#39;devices&#39;>' +
            '&#60;a href=&#39;#&#39; class=&#39;tablet-portrait&#39;>' +
              '&#60;span>Tablet Portrait&#60;/span>' +
            '&#60;/a>' +
            '&#60;a href=&#39;#&#39; class=&#39;tablet-landscape&#39;>' +
              '&#60;span>Tablet Landscape&#60;/span>' +
            '&#60;/a>' +
            '&#60;a href=&#39;#&#39; class=&#39;smartphone-landscape&#39;>' +
              '&#60;span>iPhone Landscape&#60;/span>' +
            '&#60;/a>' +
            '&#60;a href=&#39;#&#39; class=&#39;smartphone-portrait&#39;>' +
              '&#60;span>iPhone Portrait&#60;/span>' +
            '&#60;/a>' +
            '&#60;a href=&#39;#&#39; class=&#39;auto active&#39;>' +
              '&#60;span>Auto&#60;/span>' +
            '&#60;/a>' +
          '&#60;/div>' +
        '&#60;/header>' +
        '&#60;section>' +
          '&#60;div id=&#39;wrapper&#39;>' +
            '&#60;iframe src=&#39;'+d.URL+'&#39; onLoad=&#39;resbook.changeUrl(this.contentWindow.location,this.contentDocument.title);&#39;>&#60;/iframe>' +
          '&#60;span class=&#39;keyboard-bg&#39;>&#60;/span>' +
          '&#60;/div>' +
        '&#60;/section>' +
      '&#60;/body>' +
    '&#60;/html>'
  );
}());
