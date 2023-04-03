let string="";
let buttonlist = document.querySelectorAll('.buttons')

Array.from(buttonlist).forEach((button)=>{

    button.addEventListener('click',(e)=>{

       try {
        if(e.target.innerHTML=='=')
        {
            string=eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='⬅')
        {
            string=string.substring(0,string.length-1);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='C')
        {
            string="";
            document.querySelector('input').value = string;
        }
        else
        {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
       } 
       catch (error) {
        
        console.log("Error Occurred")
       
        // document.getElementById('input').innerHTML="Lavanya";
        //let message="Enter proper expression"
        //string.innerHTML="Enter proper expression";
        alert("Enter a valid expression")
       }
    })
})