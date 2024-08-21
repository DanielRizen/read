function search() {


    const input = document.getElementById('find').value.toUpperCase();
    const product = document.querySelectorAll('.grow');
    const x = document.getElementsByTagName('p');


    for(let i = 0; i < x.length; i++ ){
        let a = product[i].getElementsByTagName('p')[0];

        let value = a.innerHTML ||  a.innerText  || a.textContent;

        if(value.toUpperCase().indexOf(input) > -1){
            product[i].style.display="";
        }
        else{
            product[i].style.display = "none";
        }

    }

}

