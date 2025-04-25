function verificar() {
    let Nasci = Number(document.getElementById("txtdata").value)
    let Sexo = document.querySelector('input[name="sexo"]:checked').value
    let agora = new Date()
    let AnoAtual = agora.getFullYear()
    let idad = AnoAtual - Nasci
    let resulttext = document.getElementById("p-result")
    let img = document.getElementById("img-result")
    if (idad >=126 || AnoAtual === Nasci ) {
        window.alert("[ERRO] Idade Inválida! Tente Novamente.")
        return
    } else if(Sexo === "Masculino" && idad >= 1 && idad <=14) {
        resulttext.innerHTML = `Detectamos uma Criança de ${idad} anos!`
        img.src = "imgs/homem-criança.jpg"
    } else if(Sexo === "Masculino" && idad >= 15 && idad <= 17) {
        resulttext.innerHTML = `Detectamos um adolescente de ${idad} anos!`
        img.src = "imgs/homem-adolescente.jpg"
    } else if(Sexo === "Masculino" && idad >= 18 && idad <=59) {
        resulttext.innerHTML = `Detectamos um Homem Adulto de ${idad} anos!`
        img.src = "imgs/homem-adulto.jpg"
    } else if (Sexo === "Masculino" && idad >= 60) {
        resulttext.innerHTML = `Detectamos um Homem Idoso de ${idad} anos!`
        img.src = "imgs/homem-idoso.jpg"
    } else if (Sexo === "Feminino" && idad >= 1 && idad <=14) {
        resulttext.innerHTML = `Detectamos uma Menina de ${idad} anos!`
        img.src = "imgs/mulher-criança.jpg"
    } else if (Sexo === "Feminino" && idad >= 15 && idad <=17) {
        resulttext.innerHTML = `Detectamos uma adolescente de ${idad} anos!`
        img.src = "imgs/mulher-adolescente.jpg"
    } else if (Sexo === "Feminino" && idad >= 18 && idad <= 59) {
        resulttext.innerHTML = `Detectamos uma Mulher Adulta de ${idad} anos!`
        img.src = "imgs/mulher-adulta.jpg"
    } else if (Sexo === "Feminino" && idad >= 60 && idad <= 149) {
         resulttext.innerHTML = `Detectamos uma Mulher Idosa de ${idad} anos!`
        img.src = "imgs/mulher-idosa.jpg"
    }
}

