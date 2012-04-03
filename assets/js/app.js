// Responsive Bookmarklet namespace
window.resbook = {};

(function(rb) {
    // Private var & methods
    var d = document,
        w = window,
        url = d.URL,
        title = d.title,
        wrapper = null,
        devices = null,
        close = null,
        body = null,
        size = null,
        auto = true,
        isResized = false,
        isAnimated = false,
        sizes = {
            smartphonePortrait: [320, 480],
            smartphoneLandscape: [480, 320],
            tabletPortrait: [1024, 768],
            tabletLandscape: [768, 1024],
            auto: 'auto'
        },
        resize = function(w,h,f) {
            w = w || wrapper.clientWidth;
            h = h || wrapper.clientHeight;
            size.innerHTML = w + 'x' + h;
        },
        setPosition = function(wh,t){
            var width = (d == 'auto') ? w.innerWidth : wh[0],
                height = (d == 'auto') ? w.innerHeight : wh[1],
                style = 'width:'+width+'px;height:'+height+'px;margin-top:20px;';

            if (typeof(width) == 'undefined' || typeof(height) == 'undefined') return false;

            style += (t === 'auto') ? 'margin-top:0;' : '';
            wrapper.setAttribute('style',style);
            body.setAttribute('style','min-height:'+height+'px;min-width:'+width+'px;');
            resize(width,height);
            if(t === 'auto'){
                isResized = false;
                setTimeout(function(){
                    wrapper.setAttribute('style','');
                    body.setAttribute('style','');
                    isAnimated = false;
                }, 260);
            } else {
                isAnimated = false;
            }
        },
        readyElement = function(id,callback){
          var interval = setInterval(function(){
            if(d.getElementById(id)){
              callback(d.getElementById(id));
              clearInterval(interval);
            }
          },60);
        };

    // === Public methods ====
    /**
     * Change url and the document title with pushState method
     * @param  {string} u   url of the new page
     * @param  {title} t title of the new page
     */
    rb.changeUrl = function (u,t){
        d.title = t + ' - Responsive test';
        if(history.pushState) {
            history.pushState(null,  null, u);
        }
    };

    // "document ready"
    readyElement('wrapper', function(){
        // Set var cache
        wrapper = d.getElementById('wrapper');
        devices = d.getElementById('devices');
        size = d.getElementById('size');
        close = d.querySelector('.close a');
        body = d.querySelector('body');

        // Events
        [].forEach.call(document.querySelectorAll('#devices a'), function(el) {
          el.addEventListener('click', function(e) {

            [].forEach.call(document.querySelectorAll('#devices a'), function(el) {
                el.classList.remove('active');
            });

            e.preventDefault();
            e.stopPropagation();
            var self = this;

            if((self.classList.contains('auto') && isResized === false) || isAnimated === true)
                return false;

            isAnimated = true;
            if(isResized === false){
                isResized = true;
                setPosition(w.innerWidth,w.innerHeight);
            }
     
            setTimeout(function(){
                self.classList.add('active');
                if(self.classList.contains('smartphone-portrait')){
                    setPosition(sizes.smartphonePortrait);
                } else if(self.classList.contains('smartphone-landscape')){
                    setPosition(sizes.smartphoneLandscape);
                } else if(self.classList.contains('tablet-portrait')){
                    setPosition(sizes.tabletPortrait);
                } else if(self.classList.contains('tablet-landscape')){
                    setPosition(sizes.tabletLandscape);
                } else if(self.classList.contains('auto')){
                    setPosition(sizes.auto);
                }
            }, 10);
            
          });
        });

        close.addEventListener('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            w.location = d.URL;
        }, false);

        w.addEventListener('resize', function(){
            resize();
        }, false);

        w.addEventListener('keyup', function(e){
            var key = e.keyCode ? e.keyCode : e.charCode,
                keys = {
                    49: 'smartphonePortrait',
                    50: 'smartphoneLandscape',
                    51: 'tabletPortrait',
                    52: 'tabletLandscape',
                    53: 'auto'
                };

            // Quit now if the key isn't in our object map
            if (typeof(keys[key]) == 'undefined') return false;

            setPosition(sizes[keys[key]]);

        }, false);

        resize();
        size.style.minWidth = 0;
    });

})(resbook);
