// initialize elements
let arrow = document.getElementById('arrow');
let orders = document.getElementById('orders');
let head = document.getElementById("head");
let add = document.getElementById('add');
let content = document.querySelector(".content");
let launch = document.querySelector('.launch');
let container = document.getElementById('container-main');
let gridContainer = document.querySelector('.grid-container');



//arrow function is to close both orders form section and header.
arrow.addEventListener('click', function(){


        orders.style.display  = "none";
        head.style.display = "none";
        
        document.querySelector('.container-main').style.gridTemplateAreas = '"nav nav nav""launch launch launch" "content content content" "footer footer footer"';
        document.querySelector('.grid-container').style.cssText = "width: 60%; position: absolute;  left:18% ";
        //mobile version
        window.innerWidth< 1024
        ?(launch.style.display = 'grid',
         content.style.cssText = 'display: grid;',
          gridContainer.style.cssText = 'display: grid; position: relative; width:auto; height: 26.5%'):undefined;
    });

    

    //add function is to enable back both orders form section and header area.
    add.addEventListener('click', function(){

        orders.style.display = "grid";
        head.style.display = "grid";
         document.querySelector('.container-main').style.gridTemplateAreas = '"nav nav nav" "orders-head launch launch" "orders content content" "footer footer footer"';
        document.querySelector('.grid-container').style.cssText = "width:40% position: absolute;";
        //mobile version
        window.innerWidth<1024
        ?(launch.style.display = 'none',
          content.style.display= 'none',
          gridContainer.style.display = 'none'):undifined;
        
    })

    //creating another grid by clicking on launch button

    
