const buyTicketsBtns = document.querySelectorAll('.buy-tickets');
const buyTicketsModal = document.querySelector('.modal');
const closeModal1 = document.querySelector('.modal__close1');
const closeModal2 = document.querySelector('.modal__close2');

buyTicketsBtns.forEach((buyTicketsBtn, index) => {
  buyTicketsBtn.addEventListener('click', function() {
    buyTicketsModal.classList.add('modal--active');
  })
});

closeModal1.onclick = function() {
  buyTicketsModal.classList.remove('modal--active');
}
closeModal2.onclick = function() {
    buyTicketsModal.classList.remove('modal--active');
}
