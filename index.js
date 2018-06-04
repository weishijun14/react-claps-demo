import './index.css';
import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';

const html = new mojs.Html({
  el: '#el-js',
  x: {
    0: -200,
    duration: 1000,
    delay: 200,
    easomg: 'cubic.out',
    onComplete() {
      console.log('x preperty animation complete');
    }
  },
  y: {
    0: -200,
    duration: 2000,
    onComplete() {
      console.log('y property animation complete');
    }
  },
  left: '50%',
  top: '50%'
});

new MojsPlayer({
  add: html
});
