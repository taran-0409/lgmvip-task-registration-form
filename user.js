let submit= document.getElementById("submit");
let clear=document.getElementById("clear");
let name= document.getElementById("name");
let mail=document.getElementById("mail");
let site= document.getElementById("site");
let phone=document.getElementById("phone");
var radList = document.getElementsByName('gender');
var checkbox = document.getElementsByName('skills');
let detail=document.getElementById("detail");
var image="";
var gender="";
var skills="";

submit.addEventListener("click",addDetails);
clear.addEventListener("click",clearAll);
function clearAll() {
  
    name.value="";
    mail.value="";
    site.value="";
    phone.value="";
   

    for (var i = 0; i < radList.length; i++) {
      if(radList[i].checked) radList[i].checked = false;
        }
    for (var i = 0; i <checkbox.length; i++) {
      if(radList[i].checked) checkbox[i].checked = false;
          }  

}
function addDetails() {
  
  skills="";
    var row=1;
    var newRow=detail.insertRow(row);
    var col1= newRow.insertCell(0);
    var col2= newRow.insertCell(1);
    var ele = document.getElementsByName('gender');
    
    for(i = 0; i < ele.length; i++) {
                     if(ele[i].checked)
                gender=ele[i].value+" " ;
        
    }
    var el = document.getElementsByName('skills');
    
    for(i = 0; i < el.length; i++) {
                     if(el[i].checked)
                skills+=el[i].value+" " ;
        
    }
    col1.style.padding="10px";
    col2.style.padding="10px";
    col1.style.border="2px solid black";
    col2.style.border="2px solid black";
    col1.innerHTML=name.value+"<br> "+site.value+"<br> "+gender+"<br> "+skills;
    col2.innerHTML=phone.value+"<br> "+mail.value;
  //  col2.innerHTML=`<img src="${imglink.value}" alt='hello'/>`;
   
   row++;
            
}

 
     

