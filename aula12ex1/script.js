function carregar(){
    let agora = new Date()
    let hora = agora.getHours()
    let img = document.getElementById("horadia")
    let p = window.document.getElementById("text-script")
    let p2 = window.document.getElementById('text-script2')
    
    if (hora >= 6 && hora < 12) {
       document.body.style.backgroundColor = '#D0C094'
       p.innerHTML = `Agora são ${hora}:00 horas!`
       img.src = 'img/pexels-simon73-1266810.jpg'
       p2.innerHTML = "Bom dia!"
    } else {
        if (hora >= 12 && hora < 18) {
            document.body.style.backgroundColor = '#A87A66'
            p.innerHTML = `Agora são ${hora}:00 horas!`
            img.src = 'img/pexels-anderson-martinsz-2386144.jpg'
            p2.innerHTML = "Boa Tarde!"
        } else {
            if (hora >= 18 && hora <= 23) {
                document.body.style.backgroundColor = '#01090E'
                p.innerHTML = `Agora são ${hora}:00 horas!`
                img.src = "img/pexels-eberhardgross-2098427.jpg"
                p2.innerHTML = 'Boa Noite!'
            } else {
                if (hora >= 0 && hora <= 5){
                    document.body.style.backgroundColor = '#000'
                    p.innerHTML = `Agora são 0${hora}:00 horas!`
                    img.src = "img/pexels-optical-chemist-340351297-31698033.jpg"
                    p2.innerHTML = 'Boa Madrugada!'
                }
            }
        }
    }
}
