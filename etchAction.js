gridContainer = document.querySelector(".grid")
var dimensions = 16
updateGrid(16)

slider = document.getElementById('slider')
sliderValue = document.getElementById('sliderValue')

slider.addEventListener('input', function() {
    var value = parseInt(slider.value)
    sliderValue.textContent = value.toString()
    updateGrid(value)
})


function updateGrid(sideLength) {
    gridContainer.innerHTML = ''
    for (i = 0; i < sideLength; i++) {
        for (j = 0; j < sideLength; j++) {
            var div = document.createElement('div')
            div.classList.add('item')
            gridContainer.appendChild(div)
        }
    }
    var r = Math.floor(960/sideLength)
    console.log(r)
    gridContainer.style.gridTemplateColumns = `repeat(${sideLength}, ${r}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${sideLength}, ${r}px)`;

    isMouseDown = false
    gridItems = document.querySelectorAll('.item')
    gridItems.forEach(function(gridItem) {
    gridItem.addEventListener('mouseover', function(event) {
        gridItem.classList.add('filled');
    })
    gridItem.addEventListener('mouseout', function(event) {
        gridItem.classList.remove('filled');
    })
    gridItem.addEventListener('mousedown', function(event) {
        isMouseDown = true
        gridItem.classList.add('filledPerm');
    })

    gridItem.addEventListener('mousemove', function(event) {
        if (isMouseDown == true) {
            gridItem.classList.add('filledPerm');
        }
    })
    gridItem.addEventListener('mouseup', function(event) {
        isMouseDown = false
    })
})
}

isMouseDown = false
gridItems = document.querySelectorAll('.item')
gridItems.forEach(function(gridItem) {
    gridItem.addEventListener('mouseover', function(event) {
        gridItem.classList.add('filled');
    })
    gridItem.addEventListener('mouseout', function(event) {
        gridItem.classList.remove('filled');
    })
    gridItem.addEventListener('mousedown', function(event) {
        isMouseDown = true
        gridItem.classList.add('filledPerm');
    })

    gridItem.addEventListener('mousemove', function(event) {
        if (isMouseDown == true) {
            gridItem.classList.add('filledPerm');
        }
    })
    gridItem.addEventListener('mouseup', function(event) {
        isMouseDown = false
    })
})

clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', function(event) {
    gridItems.forEach(function(gridItem) {
        gridItem.classList.remove('filledPerm')
    })
})

