var hora = 0
var periodo = null
if (hora < 12 && hora >= 6) {
    console.log(`Bom dia!`)
    periodo = 'Manhã'
} else {
    if (hora >= 12 && hora < 18) {
        console.log('Boa Tarde!')
        periodo = 'Tarde'
    } else {
        if ( hora >= 18 && hora < 23) {
            console.log(`Boa Noite!`)
            periodo = 'Noite'
        } else {
            console.log('Boa Madrugada!')
            periodo = 'Madrugada'
        }
    }
    
}
console.log(`Agora são exatamente ${hora} horas da ${periodo}.`)