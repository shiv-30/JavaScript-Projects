const ModelOpen = document.querySelector('.modal-btn');
const ShowModel = document.querySelector('.modal-overlay');
const CloseBtn =  document.querySelector('.close-btn')

ModelOpen.addEventListener('click', function () {
    ShowModel.classList.add('open-modal')
})

CloseBtn.addEventListener('click', function () {
    ShowModel.classList.remove('open-modal');
})
