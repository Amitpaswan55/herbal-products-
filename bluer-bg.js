function toggle(){
    var blur =document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
    var popup = document.getElementById('popup2');
    popup2.classList.toggle('active');
    

}

var div = document.getElementById('reviewformbox');
var display = 0

function dicription(){
    
        if(display == 1)
            {
                reviewformbox.style.display='block';
                display = 0;
            }
        else{
            reviewformbox.style.display='none';
                display = 1;
            }
    
}