let array = [
  './assets/img/img01.jpg',
  './assets/img/img02.jpg',
  './assets/img/img03.jpg',
  './assets/img/img04.jpg',
]

let images = document.querySelector('.img');

for(let i=0; i <= 5; i++){

  images.innerHTML +=`
  <div class="item">
      <img src="${array[i]}"; alt="">
  </div> 
  `
}

let position = 0;

images.querySelector('.item').classList.add('active')

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

prev.addEventListener("click", function(){
  
  document.querySelector('.item.active').classList.remove('active');

  if(position == array.length -1){
      position = 0
  }else{
      position++
  }
  document.getElementsByClassName('item')[position].classList.add('active');
})

next.addEventListener("click", function(){
  document.querySelector('.item.active').classList.remove('active');

  if(position == 0){
      position = array.length -1
  }else{
      position--
  }
  document.getElementsByClassName('item')[position].classList.add('active');
})