let img = document.querySelector('img')
let button = document.querySelector('button')
let input = document.querySelector('#input');
let submit = document.querySelector('#button');
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind');
let description = document.querySelector('#desc');
let city = document.querySelector('#city')

fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>{
        // console.log(res.json())
        return res.json()
    })
        .then(data=>{
            console.log(data.message);
            img.src = data.message
        })

        button.addEventListener('click',()=>{
            fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>{
        // console.log(res.json())
        return res.json()
    })
        .then(data=>{
            console.log(data.message);
            img.src = data.message
        })





            
        })

        submit.addEventListener('click',()=>{
            //console.log(input.value)
            fetch(`https://goweather.herokuapp.com/weather/${input.value}`)
        .then(res =>{
            //console.log(res.json())
            return res.json()
            
        })
            .then(data =>{
                console.log(data)
        
                city.innerText = input.value
                temp.innerText = data.temperature;
                wind.innerHTML = `Wind speed ${data.wind}`;
                description.innerHTML = data.description;
        
            })
            
        })