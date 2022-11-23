const toggleButtons = document.querySelectorAll('.faq-toggle')

// toggleButtons.forEach(toggleBtn => {
//   toggleBtn.addEventListener('click', (e) => {
//     console.log(e.target.parentNode.parentNode)
//     e.target.parentElement.parentElement.classList.toggle('active')
//   })
// })

toggleButtons.forEach(toggleBtn => {
  toggleBtn.addEventListener('click', () => {
    toggleBtn.parentNode.classList.toggle('active')
  })
})