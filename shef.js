const menu = [
    {
        id: 1 ,
        title : 'piza',
        category: 'breakfast',
        price:'20:00',
        img: 'imgs/istockphoto-532868133-612x612.jpg',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum neque assumenda provident! Illo voluptatem',
    },
    {
        id: 2 ,
        title : 'piza',
        category: 'lunch',
        price:'20:00',
        img: 'imgs/istockphoto-532868133-612x612.jpg',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum neque assumenda provident! Illo voluptatem',
    },
    {
        id: 3 ,
        title : 'piza',
        category: 'breakfast',
        price:'20:00',
        img: 'imgs/istockphoto-532868133-612x612.jpg',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum neque assumenda provident! Illo voluptatem',
    },
    {
        id: 3 ,
        title : 'piza',
        category: 'lunch',
        price:'20:00',
        img: 'imgs/istockphoto-532868133-612x612.jpg',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum neque assumenda provident! Illo voluptatem',
    },
    {
        id: 3 ,
        title : 'piza',
        category: 'brake',
        price:'20:00',
        img: 'imgs/istockphoto-532868133-612x612.jpg',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum neque assumenda provident! Illo voluptatem',
    },
    {
        id: 3 ,
        title : 'piza',
        category: 'breakfast',
        price:'20:00',
        img: 'imgs/istockphoto-532868133-612x612.jpg',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum neque assumenda provident! Illo voluptatem',
    },
    {
        id: 4 ,
        title : 'piza',
        category: 'dinner',
        price:'20:00',
        img: 'imgs/istockphoto-532868133-612x612.jpg',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum neque assumenda provident! Illo voluptatem',
    }
];

const sectionCenter = document.querySelector('.menu-items');
// const btns = document.querySelector('.btns');
const filterBtns = document.querySelectorAll('.btn1');


window.addEventListener('DOMContentLoaded', function (){
   displayMenuItems(menu);
});

filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(Item){
        if(Item.category === category){
            return Item;
        }
        console.log('hello', Item.category);
        
      });

      if(category === 'all'){
        displayMenuItems(menu);
      }else{
        displayMenuItems();
      }
    });
});













function displayMenuItems(menu){
    let displayMenu = menu.map(function(item){
        return `<div class="menu">
        <div class="img">
           <img src=${item.img} alt="">
        </div>   
       <div class="menu-content">
           <div class="menu-heading">
              <h3>${item.title}</h3> 
              <p>${item.price}</p>
           </div>
           <hr>
           <p>${item.desc}</p>
           
       </div>
   </div>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}
