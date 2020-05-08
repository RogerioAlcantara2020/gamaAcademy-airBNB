const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'

fetch(url)
    .then(response => response.json())
    .then(data => {

        let elementos = document.getElementById('resultados-quartos');

        for(let i =0; i <24;i++){
            elementos.innerHTML += `
            <div class='card-hospedagem-tumb'>
            <div class='card-hospedagem-img'><img src='${data[i].photo}' class='card-hospedagem-img'/></div>
            <div class="card-hospedagem-titulo">${data[i].property_type}</div>
            <div class="card-hospedagem-descricao">${data[i].name}</div>
                <div class="card-hospedagem-descricao"><b>R$ ${data[i].price}</b>/noite</div>
            </div>
            `;
      
         
                   
        }  
    })



