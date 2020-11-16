let canvas, ctx

function init() {
    console.log('game running')

    canvas = document.getElementById('gameCanvas')
    ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.strokeRect(50, 35, 50, 50)

    // filled square X: 125, Y: 35, width/height 50
    ctx.beginPath()
    ctx.fillRect(125, 35, 50, 50)
}

document.addEventListener('DOMContentLoaded', init)


