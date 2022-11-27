let principal=document.getElementById('cont-princ');

Restaurante=new Array();


Restaurante[0]= ['img/Pacifico_Mar.jpg' ,'<p><a href="pacifico_mar.html">Restaurante Pacifico Mar</a></p>'],
Restaurante[1]= ['img/Restaurante italiano.jpg', '<p><a href="Restaurante Italiano.html">Restaurante Italiano</a></p>'],
Restaurante[2]= ['img/Fritos.jpg','<p><a href="fritos.html">Restaurante De Fritos</a></p>'],
Restaurante[3]= ['img/Pollo.jpg' , '<p><a href="pollo.html">Restaurante El Pollo</a></p>'];

if(principal){
for(i=0;i<Restaurante.length;i++){
    let creaDiv= document.createElement('div');
    let creaimg= document.createElement('img');

    creaDiv.setAttribute('class','foto');
    creaDiv.innerHTML =Restaurante[i][1];
    creaimg.setAttribute('src',Restaurante[i][0])

    principal.appendChild(creaDiv);
    principal.appendChild(creaimg);
}
}


