import './index.css';
import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';

const redCircle = new mojs.Shape({
  left: 0,
  top: 0,
  stroke: 'red',
  strokeWidth: 5,
  fill: 'none',
  radius: 15
  // duration: 1000
}).then({
  strokeWidth: 0,
  scale: { 1: 2, easing: 'sin.in' },
  duration: 500
});

const sparks = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 0: 30, easing: 'cubic.out' },
  angle: { 0: 90, easing: 'quad.out' },
  count: 50,
  children: {
    // shape: 'cross',
    // stroke: 'red',
    points: 12,
    radius: 10,
    fill: '#ffeb3b',
    angle: { 0: 360 },
    duration: 500
  }
});

const triangles = new mojs.Burst({
  radius: { 0: 300, easing: 'cubic.out' },
  angle: { 1080: 0, easing: 'quad.out' },
  left: 0,
  top: 0,
  count: 20,
  children: {
    shape: 'polygon',
    points: 4,
    radius: { 10: 100 },
    fill: ['red', 'yellow', 'blue', 'green'],
    duration: 3000
  }
});

document.addEventListener('click', e => {
  redCircle.tune({ x: e.pageX, y: e.pageY }).replay();
  sparks.tune({ x: e.pageX, y: e.pageY }).replay();
  triangles.tune({ x: e.pageX, y: e.pageY }).replay();
});
