//--------------------------------C-168--------------------------------//
//---------------------------Automobiles Galore--------------------------------//
//------------------------------buttons.js--------------------------------//

//Registering a component to create html buttons 
AFRAME.registerComponent("button-renderer",{

    //Schema
    schema:{},

    //Calling a init function
    init:function(){

        //Creatng the purchase button and giving it a partially unique id ~~(i)
        button_purchase=document.createElement("button")
        button_purchase.innerHTML="PURSCHASE"
        button_purchase.setAttribute("id","purchase_btn")

        //Creatng the info button and giving it a partially unique id ~~(ii)
        button_info=document.createElement("button")
        button_info.innerHTML="INFO"
        button_info.setAttribute("id","info_btn")

        //Creatng the rate button and giving it a partially unique id ~~(iii)
        button_rate=document.createElement("button")
        button_rate.innerHTML="RATE"
        button_rate.setAttribute("id","rate_btn")

        //Sourcing the division tag and appending buttons at (i),(ii),(iii) as children to it
        button_div=document.getElementById("div_btn")
        button_div.appendChild(button_purchase)
        button_div.appendChild(button_info)
        button_div.appendChild(button_rate)

        //Adding an event listener for the purchase button
        button_purchase.addEventListener("click",()=>{

                //Displaying a sweet alert modal to display the corresponding purchase information
                swal({
                    icon:"./icons/shopping_cart.png",
                    title:"PURCHASE",
                    text:"Price: \n USD: $10,878,821.28 \n INR:₹ 83,04,00,000 \n [import duties included] "
                    
                })
            })
        
        //Adding an event listener for the info button    
        button_info.addEventListener("click",()=>{

                //Displaying a sweet alert modal to display the corresponding info information
                swal({
                    icon:"./icons/pagani_logo.png",
                    title:"Huayra BC ",
                    text:"Class: Hypercar \n  Manufacturer: PAGANI AUTOMOBILI \n Year Introduced: 2016 \n  Engine: 6.0L  V-12 (twin-tirbocharged) \n Horspower: 789 HP \n Torque: 1100 Nm \n Top Speed: 370 km/h \n Acceleration: 0-100 km/h in 3.3s \n Curb Weight:1293 kg \n Average Take Off Impulse: 36909 N \n Total Units Manufactured: 20 \n "
                    
                })
            })
        
        //Adding an event listener for the rate button
        button_rate.addEventListener("click",()=>{

            //Displaying a sweet alert modal to display the corresponding rate information
            swal({
                icon:"info",
                title:"Rating",
                text:"Will be available by version 0.5.0 \n (current:0.2.1 )"
            })
        })    
           
        //Alerting the user about the heaviness of the model
        swal({
            icon:"warning",
            text:"The model moght take a longer time to load due to its size. "
        })
    }
})

//------------------------------buttons.js--------------------------------//
//---------------------------Automobiles Galore--------------------------------//
//--------------------------------C-168--------------------------------//