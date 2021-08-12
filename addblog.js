var count =1;
var counts = 1;
function addData() {
    var title = document.getElementById("title").value;
    var article = document.getElementById("article").value;
    var fileInput = document.getElementById("file");
        
    var myPTag = document.createElement("p");
    var myPTagContent = document.createTextNode("Title :"+title);
    var myPTagContent2 = document.createTextNode("Article : "+article);
    
    myPTag.setAttribute("style","color:white;font-size:24px;");
    myPTag.setAttribute("id",count); 
    var deleteNode = document.createElement("a");
    var deleteNodeContent = document.createTextNode("delete");
    deleteNode.setAttribute("href","#");
    deleteNode.setAttribute("onClick","deleteInfo("+count+")");
    deleteNode.appendChild(deleteNodeContent);
      
    myPTag.appendChild(myPTagContent);
    var myPTag3 = document.createElement("BR");
    myPTag.appendChild(myPTag3);
    myPTag.appendChild(myPTagContent2);
    var myPTag4 = document.createElement("BR");
    myPTag.appendChild(myPTag4);
    var myPTag2 = document.createElement("IMG");
    myPTag2.setAttribute("id", count);
    
    myPTag2.setAttribute("src",URL.createObjectURL(fileInput.files[0]));
    
if(myPTag2 && myPTag2.style) {
    myPTag2.style.height = '300px';
    myPTag2.style.width = '400px';
}
    
    myPTag.appendChild(myPTag2);
    myPTag.appendChild(deleteNode);
    
    count++;
    document.getElementById("main").appendChild(myPTag);
    
    /*var myPTag2 = document.createElement("IMG");
    myPTag2.setAttribute("id", counts);
    
    myPTag2.setAttribute("src",URL.createObjectURL(fileInput.files[0]));
    
if(myPTag2 && myPTag2.style) {
    myPTag2.style.height = '300px';
    myPTag2.style.width = '400px';
}
    counts++;
    document.getElementById("main2").appendChild(myPTag2);*/
    reset();
}

function deleteInfo(count) {
    console.log("delete fun called.."+count);
    document.getElementById(count).remove();
   //document.getElementById(counts).remove();
   
}

function reset() {
    document.getElementById("title").value="";
    document.getElementById("article").value=""; 
    document.getElementById("output").src="";
}
