let p = document.querySelector('p')
let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let text = p.innerText
let iteration = 0


    function randomText(){
        let str = text.split('').map(function(elem, idx){
            if (idx < iteration) {
                return elem
            }
                return char.split('')[Math.floor(Math.random()* text.length)]
            }).join('')
            
            p.innerHTML = str

            iteration += 0.5
    }

p.addEventListener('mouseenter',function(){
       
        setInterval(randomText,30)

})