const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
// console.log(buttons);

buttons.forEach(function(btn){
    
    btn.addEventListener('click',function(event){
        
        // console.log('event name is : ',event);
        // console.log('target of this event is ',event.target);

        if(event.target.id=='grey'){
          body.style.backgroundColor="grey"
        }
        else if(event.target.id=="white"){
            body.style.backgroundColor="white"
        }
        else if(event.target.id=="blue"){
            body.style.backgroundColor="blue"
        }
        else if(event.target.id=="yellow"){
            body.style.backgroundColor="yellow"
        }
   })

});