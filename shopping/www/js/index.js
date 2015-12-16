document.addEventListener("DOMContentLoaded", function () {

    var addButton = document.getElementById("addbtn"); 
    var counter = 0;
       
    addButton.addEventListener("click", firstFunction); // do something when Add button is clicked

    function firstFunction() {
       
        var mainContainer = document.getElementById("main")
        var container = document.getElementById("container");
        var newItem = document.getElementById("input").value;
        var t = document.createTextNode(newItem);
        var p = document.createElement("p");
        var dale0106 = {
            listThing: newItem
        };
      
        var checkbox = document.createElement("INPUT");
        var deleteItem = document.createElement("BUTTON");
        
       
        deleteItem.setAttribute("type", "button"); 
        deleteItem.setAttribute("id", "deletebtn");
        deleteItem.innerHTML = 'delete';
        checkbox.setAttribute("type", "checkbox");
        localStorage.dale0106 = JSON.stringify(dale0106); // json part.
        var keyDale0106 = JSON.parse(localStorage.dale0106);
        localStorage.setItem(keyDale0106, t);


        alert (keyDale0106.listThing); //working! data has been parsed
        p.appendChild(t);
        container.appendChild(p);
        container.appendChild(checkbox);
        container.appendChild(deleteItem);
        mainContainer.appendChild(container);
        counter++;
        //alert(counter);
     
        // WE JUST CREATED THE FIRST LIST ITEM WITH CHECK BOX AND BUTTON
        
        deleteItem.addEventListener("click", function(){ //WHEN DELETE BUTTON GETS CLICKED
        
        p.removeChild(t);
        //container.removeChild(p);
        container.removeChild(checkbox);
        container.removeChild(deleteItem);
        localStorage.removeItem(keyDale0106.listThing);
        alert(localStorage.keyDale0106);
        //mainContainer.removeChild(container);
           
            
            
            
        
        });
        
        
    }    
        


});
    