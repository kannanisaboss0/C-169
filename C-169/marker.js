//--------------------------------C-168--------------------------------//
//---------------------------Automobiles Galore--------------------------------//
//------------------------------marker.js--------------------------------//

//Registering acomponent to handle marker events
AFRAME.registerComponent("handle-marker",{

    //Schema
    schema:{},


    //Calling an init function
    init:function(){

        //Sourcing the button division tag
        div=document.getElementById("div_btn")
        
        //Adding an event listener for when the marker is found
        this.el.addEventListener("markerFound",()=>{

            //Making the divsion tag visible
            div.style.display="flex"

            //Adding a sweet alert modal to affirm that the model has loaded
            swal({
                icon:"success",
                title:"LOADING SUCCESSFUL",
                timer:1500,
            })
        })

        //Adding an event listener for when the marker is lost
        this.el.addEventListener("markerLost",()=>{

            //Making the divsion tag visible
            div.style.display="none"
        }) 
    }
})


//------------------------------marker.js--------------------------------//
//---------------------------Automobiles Galore--------------------------------//
//--------------------------------C-168--------------------------------//