function readlist(){
    document.getElementById("homepage").style.display='none';
    document.getElementById("todolist").style.display='block';
      var xhttp= new XMLHttpRequest();
      xhttp.onreadystatechange=function(){
          if(this.readyState==4 && this.status ==200){
              var response = JSON.parse(this.responseText);
              displayTable(response);//To add rows dynamically
             
           }
      };
      xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
      xhttp.send();
      }
      function displayTable(response){
        let table =  document.getElementById("todotable");
        for(i=0;i<response.length;i++){
            let rowCount= table.rows.length;
            var row = table.insertRow(rowCount);
            var cell1= row.insertCell(0);
            cell1.innerHTML=response[i].id;
            var cell2= row.insertCell(1);
            cell2.innerHTML=response[i].title;
            var cell3= row.insertCell(2);
            var element=document.createElement("input");
            element.type="checkbox";
            //checking already completed tasks
            if(response[i].completed == true){
                element.setAttribute("checked","true");
                element.setAttribute("disabled","true");
            }
            element.addEventListener('change',function(event){
                if(event.currentTarget.checked){
                   count++;
                   completeCheck();//To check five tasks completed
                }
                else{
                    count--;
                }
            })
            cell3.appendChild(element);
        }
      
      }
      var count=0;
      function completeCheck(){
          //use promise to display message on completion of five tasks
            let promise = new Promise(function (resolve,reject){  
            if(count>=5){
              setTimeout(function() {  resolve('Congrats. 5 Tasks have been Successfully Completed'); }, 1000);
             
            }
          })
          promise.then(
              function(value) { alert(value);}
          );
       }
      
    //On logout move to index.html
function logout(){
    let flag=0;
    location.replace("index.html");
        
}