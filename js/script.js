const container = document.getElementById("certificate-container");

for(let i=1;i<=25;i++){

    const card=document.createElement("div");

    card.className="certificate-card";

    const img=document.createElement("img");

    if(i===13){

        img.src=`images/${i}.png`;

    }else{

        img.src=`images/${i}.jpg`;

    }

    img.onclick=()=>window.open(img.src);
s
    card.appendChild(img);

    container.appendChild(card);

}