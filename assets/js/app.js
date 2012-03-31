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
        resize = function(w,h,f) {
            w = w || wrapper.clientWidth;
            h = h || wrapper.clientHeight;
            size.innerHTML = w + 'x' + h;
        },
        setPosition = function(w,h,t){
            var style = 'width:'+w+'px;height:'+h+'px;margin-top:20px;';
            style += (t === 'auto') ? 'margin-top:0;' : '';
            wrapper.setAttribute('style',style);
            body.setAttribute('style','min-height:'+h+'px;min-width:'+w+'px;');
            resize(w,h);
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
                    setPosition(320,480, 'iphone');
                } else if(self.classList.contains('smartphone-landscape')){
                    setPosition(480,320, 'iphone');
                } else if(self.classList.contains('tablet-portrait')){
                    setPosition(1024,768);
                } else if(self.classList.contains('tablet-landscape')){
                    setPosition(768,1024);
                } else if(self.classList.contains('auto')){
                    setPosition(w.innerWidth,w.innerHeight, 'auto');
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

        resize();
        size.style.minWidth = 0;
    });

})(resbook);
