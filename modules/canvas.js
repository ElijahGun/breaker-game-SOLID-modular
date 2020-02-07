export var canvas = document.getElementById('canvas');
export var ctx = canvas.getContext('2d');

export function clear() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
}