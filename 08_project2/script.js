const form = document.querySelector('form')
//const height = parseInt(document.querySelector('#eight').value)

form.addEventLIstener('submit', function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');

    if(height ==='' || height<0 || isNaN(height)){
     result.innerHTML = ('please give a valid height', height)
    }else if(weight === '' || weight <0 || isNaN(weight)){
   result.innerHTML=('please give a valid weght', weight)
    }else{
        const bmi = (weight/((height*height)/1000)).toFixed(2);
        result.innerHTML=<span>${bmi}</span>;
    }
})