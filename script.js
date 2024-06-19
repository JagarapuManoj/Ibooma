function change(){                                  document.getElementById("div").classList.toggle("cross");
   var dialog=document.getElementById("cna");
    dialog.showModal();
}
function closeDialog(event){
    
    var dialog=document.getElementById("cna");
    if(event.target==dialog){
     dialog.close();
        document.getElementById("div").classList.toggle("cross");
    }
}
function cna(){
document.getElementById("cna").addEventListener("click", closeDialog(event));
}
