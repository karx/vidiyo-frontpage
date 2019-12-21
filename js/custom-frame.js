
EasingFunctions = {
    // no easing, no acceleration
    linear: function (t) { return t },
    // accelerating from zero velocity
    easeInQuad: function (t) { return t*t },
    // decelerating to zero velocity
    easeOutQuad: function (t) { return t*(2-t) },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
    // accelerating from zero velocity 
    easeInCubic: function (t) { return t*t*t },
    // decelerating to zero velocity 
    easeOutCubic: function (t) { return (--t)*t*t+1 },
    // acceleration until halfway, then deceleration 
    easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
    // accelerating from zero velocity 
    easeInQuart: function (t) { return t*t*t*t },
    // decelerating to zero velocity 
    easeOutQuart: function (t) { return 1-(--t)*t*t*t },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
    // accelerating from zero velocity
    easeInQuint: function (t) { return t*t*t*t*t },
    // decelerating to zero velocity
    easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
    // acceleration until halfway, then deceleration 
    easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
  }

var sceneEl = document.querySelector('a-scene');
sceneEl.setAttribute('background','color: #04060F');
sceneEl.setAttribute('vr-mode-ui','enabled: false');


function scriptInit() {
    console.log('In Custom Frame');
}

function showDownloadApp() {
    document.getElementById('download-app').setAttribute('display', 'block');
}
scriptInit();

AFRAME.registerComponent('header-phone', {
    schema: {
        event: {type: 'string', default: ''},
        message: {type: 'string', default: 'Dont Matter'},
        isRoot: {type: 'string', default: 'false'}
      },
  
    init: function () {
      var stringToLog = this.data;
      this.data.tikr = 1;
    //   this.data.initPosZ = -10;
      this.data.initPosX = 0;
      console.log(stringToLog);
      console.log('hEader Phone');
    },

    update: function () {
        var data = this.data;  // Component property values.
        var el = this.el;  // Reference to the component's entity.
    
        if (data.event) {
          // This will log the `message` when the entity emits the `event`.
          el.addEventListener(data.event, function () {
            console.log(data.message);
          });
        } else {
          // `event` not specified, just log the message.
          console.log(data.message);
        }
      },
      multiple: true,
    tick: function() {
        var data = this.data;  // Component property values.
        var el = this.el;  // Reference to the component's entity.
        var pos = el.getAttribute('position');
        // console.log(pos);
        // console.log(pos.z);
        // if(pos.z <= -1) {
        //     pos.z = data.initPosZ + (EasingFunctions.easeInQuad(data.tikr++))*0.005;
            
        // }
        if(pos.x > -1.2) {
            if (pos.z < -4) {

            } else {
                pos.x -=  0.01;
                console.log(pos.x);
            }
        } else {
            showDownloadApp();
        }
        
        el.setAttribute('position',pos);
    }
  });

  let xlMatch = document.getElementById('track');
  setTimeout( ()=> {
    var viewportOffset = xlMatch.getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    var top = viewportOffset.top;
    var left = viewportOffset.left;
    console.log(top);
  }, 1000);