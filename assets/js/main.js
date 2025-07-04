    document.querySelector('.menu-icon').addEventListener('click', () => {
         document.querySelector('.navbar').classList.toggle('active');
    });

    document.addEventListener("DOMContentLoaded", function () {
          let aside_open_icon = document.querySelector(".aside_open_icon");
          let aside = document.querySelector("aside");
          // let chatbot = document.querySelector(".chatbot");
          let open_icon = document.querySelector(".open_chat_icon");
          let close_chat_icon = document.querySelector(".close_chat_icon");
          
          let chat = document.querySelector(".chat_card");

          if(aside_open_icon) {
               aside_open_icon.addEventListener("click", function() {
               aside.classList.toggle("open");
               aside_open_icon.classList.toggle("open");
               });
          }
        
          //chatbot
        if (open_icon) {
               open_icon.addEventListener("click", function() {
               if (chat) {
                    chat.classList.toggle("open");  
               }
               });
               }

               if (close_chat_icon) {
               close_chat_icon.addEventListener("click", function() {
               if (chat) {
                    chat.classList.remove("open"); 
               }
               });
        }
    });

    