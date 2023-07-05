gridContainer = document.querySelector(".grid")

for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        var div = document.createElement('div')
        div.classList.add('item')
        gridContainer.appendChild(div)
    }
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
