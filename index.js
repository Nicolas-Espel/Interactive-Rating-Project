//Pulling classes from HTML as variables
const submitBtn = document.querySelector('.submit');
const selected = document.getElementById('selected');
const header = document.querySelector('.header');
const rateChoice = document.querySelectorAll('.rating');
const headerTwo = document.querySelector('.data2');

//variable used to insert result
let rate = undefined;

//sets a rating button active once clicked
rateChoice.forEach(rating => {
    rating.addEventListener('click', () => {
        rateChoice.forEach(rating => rating.classList.remove('clicked'))
        rating.classList.add('clicked')
        rate = rating.textContent
    })
});

//function added onto submit button once clicked, adds 'hide' class to rating screen/removes from thank you screen to display
//prints the resulted string onto the open paragraph in HTML class name 'selected' 
submitBtn.addEventListener('click', () => {
    if(rate !== undefined) {
        header.classList.add('hide');
        headerTwo.classList.remove('hide');
        selected.textContent = `You selected ${rate} out of 5`;
    } else {
        alert('Error please select a rating');
    }
});
