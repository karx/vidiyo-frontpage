
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
        var sceneEl = document.querySelector('a-scene');
sceneEl.setAttribute('background','color: #04060F');
sceneEl.setAttribute('vr-mode-ui','enabled: false');

      var stringToLog = this.data;
      this.data.tikr = 1;
        //   this.data.initPosZ = -10;
      this.data.initPosX = 0;
      this.data.last_state = 0;
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
      
    tick: function() {
        console.log('tiickng');
        var data = this.data;  // Component property values.
        var el = this.el;  // Reference to the component's entity.
        var pos = el.getAttribute('position');
        let t_vh_mid = document.documentElement.clientHeight/2;
        let state_1 = Math.abs(calcMidFromOffsets('target-land-1') - t_vh_mid);
        let state_2 = Math.abs(calcMidFromOffsets('target-right-2') - t_vh_mid);
        let state_3 = Math.abs(calcMidFromOffsets('target-left-3') - t_vh_mid);
        let state_4 = Math.abs(calcMidFromOffsets('target-mid-4') - t_vh_mid);

        possibleState = [state_1,state_2,state_3,state_4];
        let minState = Math.min(...possibleState);
        console.log(minState);
        console.log(possibleState);
        if (Math.abs(minState - state_1) < 0.001) {
            pos = tinyMoveTo(-1,0,-1, pos);
        } else if (Math.abs(minState - state_2) < 0.001) {
            pos = tinyMoveTo(0.75,0,-0.75, pos);
        } else if (Math.abs(minState - state_3) < 0.001) {
            pos = tinyMoveTo(-0.75,0,-1.2, pos);
        } else if (Math.abs(minState - state_4) < 0.001) {
            pos = tinyMoveTo(2,0,-0.1, pos);
        } else {
            console.log('no state near, something is wrong');
        }
        console.log(`
            state_1: ${state_1}
            state_2: ${state_2}
            state_3: ${state_3}
            state_4: ${state_4}`);
        // console.log(pos);
        // console.log(pos.z);
        // if(pos.z <= -1) {
        //     pos.z = data.initPosZ + (EasingFunctions.easeInQuad(data.tikr++))*0.005;
            
        // }

        
        // if(pos.x > -1.2) {
        //     if (pos.z < -4) {

        //     } else {
        //         pos.x -=  0.01;
        //         console.log(pos.x);
        //     }
        // } else {
        //     showDownloadApp();
        // }
        
        el.setAttribute('position',pos);
    }
  });

 function tinyMoveTo(x,y,z,pos) {
     pos.x = tinyMoveSingleTo(x,pos.x);
     pos.y = tinyMoveSingleTo(y,pos.y);
     pos.z = tinyMoveSingleTo(z,pos.z);
     return pos;
 }

 function tinyMoveSingleTo(dest_x, x) {
     if (Math.abs(x - dest_x) > 0.1) {
        if(x > dest_x) {
            x -= 0.01;
        } else if (x< dest_x){
            x += 0.01;
        }
     }
     return x;
 }

  function calcMidFromOffsets(target) {
    let xlMatch = document.getElementById(target);

    var viewportOffset = xlMatch.getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    var top = viewportOffset.top;
    var left = viewportOffset.left;
    var bottom = viewportOffset.bottom;
    var right = viewportOffset.right;
    console.log(target);
    console.log(`T:${top} L:${left} B:${bottom} R:${right}`);
    return (top + bottom)/2;
  }