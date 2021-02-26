window.onscroll = function() (myFunction());
      var navbar = document.getElementByClassName("navbar");
      var sticky = navbar.offsetTop;
      function myFuncion(){
          if(window.pageYOffset >= sticky){
              navbar.classList.add("sticky");
          }else{
              navbar.classList.remove("sticky");
          }
    }  


