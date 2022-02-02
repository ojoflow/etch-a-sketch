let drawColor = '#EA3546';
let gridTextInput = document.querySelector('.xbyx');
let input = 16;
let changeGrid = document.querySelector('.change-grid');
let reset = document.querySelector('.reset');

reset.addEventListener('click', 

		() => {
			createGrid();
		}

)

const createGrid = () => {

    const numOfSquares = input * input;
    const container = document.querySelector('.grid-container');

    container.innerHTML = '';

    container.style.cssText = `
        grid-template-columns: repeat(${input}, 1fr);
        grid-template-rows: repeat(${input}, 1fr);
    `;

    for (i=0; i<numOfSquares; i++) {
        const square = document.createElement('div')
        square.classList.add('pixel');
        square.setAttribute('onmouseover', 'draw(this)');
        container.appendChild(square);
    }
    	
   
	
}

const color = color => {
	switch(color){
		case 'red':
			drawColor = '#EA3546;'
			break;
		case 'orange':
			drawColor = '#F86624;'
			break;
		case 'yellow':
			drawColor = '#F9C80E;'
			break;
		case 'green':
			drawColor = '#64C956;'
			break;
		case 'blue':
			drawColor = '#1BE0FA;'
			break;
		case 'purple':
			drawColor = '#662E9B;'
			break;
		default:
			break;
	}
}

const draw = (x) => {
	x.style.cssText = `background-color: ${drawColor};`;
}

createGrid();
