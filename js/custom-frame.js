

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
        var rot = el.getAttribute('rotation') || '0 0 0';
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
            pos = tinyMoveTo(-5,0,-5, pos);
            rot = tinyMoveTo(0, 20, 0, rot,1);
        } else if (Math.abs(minState - state_2) < 0.001) {
            pos = tinyMoveTo(5,0,-8, pos);
            rot = tinyMoveTo(0, -40, 0, rot,1);
        } else if (Math.abs(minState - state_3) < 0.001) {
            pos = tinyMoveTo(-5,0,-4, pos);
            rot = tinyMoveTo(0, 30, 0, rot,1);
        } else if (Math.abs(minState - state_4) < 0.001) {
            pos = tinyMoveTo(0,0,-2.2, pos);
            rot = tinyMoveTo(0, 0, 0, rot,1);

            // pos = tinyMoveTo(2,0,-0.01, pos);
            // rot = tinyMoveTo(0, 0, 90, rot,1);
            
            // rot = tinyMoveTo(0, 900, 0, rot,1);
            
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
        el.setAttribute('rotation',rot);
    }
  });

 function tinyMoveTo(x,y,z,pos, step = 0.01) {
     pos.x = tinyMoveSingleTo(x,pos.x, step);
     pos.y = tinyMoveSingleTo(y,pos.y, step);
     pos.z = tinyMoveSingleTo(z,pos.z, step);
     return pos;
 }


 function tinyMoveSingleTo(dest_x, x, step) {
     if (Math.abs(x - dest_x) > step*2) {
        if(x > dest_x) {
            x -= step;
        } else if (x< dest_x){
            x += step;
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