document.addEventListener('DOMContentLoaded', (event) => {
    
  /* Initialize tooltips */ 
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  /* Scroll to the developers section when the start button is clicked */
  const startBtn = document.getElementById('js-start-btn')
  const devSection = document.getElementById('js-developers')
  startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    devSection.scrollIntoView({behavior: 'smooth', block: 'start'})
  })
  
  /* Change the background color and innerHTML when the online button is hovered */
  const onlineBtn = document.getElementById('js-onlinebtn')
  if( onlineBtn !== null) {
      
      onlineBtn.addEventListener('mouseover', (event) => {
          onlineBtn.style.backgroundColor = "red"
          onlineBtn.style.borderColor = "red"
          onlineBtn.innerHTML = "Go offline"
          
      })
      
      onlineBtn.addEventListener('mouseout', (event) => {
          onlineBtn.style.backgroundColor = "#3DC794"
          onlineBtn.style.borderColor = "#3DC794"
          onlineBtn.innerHTML = "You are online"
          
      })
  }
  
  
  
  
  
  
  
    
})