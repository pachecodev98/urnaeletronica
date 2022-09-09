 let etapas = [
    {
        titulo: 'VEREADOR',
        numeros: 5,
        candidatos: [
            {
                numero: '12345',
                nome: 'Felizarda',
                partido: 'PSCSV',
                fotos: [
                    {
                    url: '../urn--js/img/ndeu/v1.jpg', legenda: 'VEREADOR'
                }]
            }
        ]
    },
    {
        titulo: 'PREFEITO',
        numeros: 2,
        candidatos: [
            {
                numero: '17',
                nome: 'Feltrano Souza ',
                partido: 'PBB',
                vice: 'Peter',
                fotos: [
                        {url: '../urn--js/img/ndeu/c1.jpg', legenda: 'PREFEITO'},
                        {url: '../urn--js/img/ndeu/c2.jpg', legenda: 'VICE-PREFEITO', small: true} 
                ]
            },
            {
                numero: '13',
                nome: 'Ciclano Silvano',
                partido: 'MBDB',
                vice: 'Joana',
                fotos: [
                        {url: '../URNA.js/img/ndeu/c3.jpg', legenda: 'PREFEITO'},
                        {url: '../URNA.js/img/ndeu/c4.jpg', legenda: 'VICE-PREFEITO', small: true} 
                ]
            }
        ]
    },
    
   
] 








let seuvotopara = document.querySelector('.left-1 span');
let cargo = document.querySelector('.left-2 span');
let desc = document.querySelector('.left-4');
let aviso = document.querySelector('.d-2');
let img = document.querySelector('.right');
let num = document.querySelector('.left-3');

let etapaAtual = 0
let numb = '';
let white = true


function attInterface() {
    let etapa = etapas[etapaAtual];
    let cand = etapa.candidatos.filter((nCandidato)=>{
        if (nCandidato.numero === numb) {
            return true
        } else {
            return false
        };
    })
    if (cand.length >= 0) {
        cand = cand[0];
        seuvotopara.style.display = 'block';
        desc.innerHTML = `Nome: ${cand.nome}<br> Partido ${cand.partido}`;
        aviso.style.display = 'block';
        let fotosHtml = '';
        for (let i in cand.fotos) {
            if (cand.fotos[i].url.small) {
                fotosHtml += `<div class="right-image small"><img src="${cand.fotos[i].url}">${cand.fotos[i].legenda}</div>`
            } else {
                fotosHtml += `<div class="right-image"><img src="${cand.fotos[i].url}">${cand.fotos[i].legenda}</div>`
            }
            
        }
        img.innerHTML = fotosHtml;   
    } else if (cand.length == 0) {
        seuvotopara.style.display = 'block';
        aviso.style.display = 'block';
        desc.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
    } ; 
    
}

function start() {
    // window.alert('Ao preencher todos os campos, selecione o botão ZERO para aparecer a imagem do candidato')
    numb = '';
    let etapa = etapas[etapaAtual];
    let numeroHTML = '';
    white = false
    
    for(let i=0; i<etapa.numeros; i++) {
        if (i === 0) {
            numeroHTML += '<div class="quad-1 pisca"></div>'
        } else {
            numeroHTML += '<div class="quad-1 "></div>';
    }}

    seuvotopara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    desc.innerHTML = '';
    aviso.style.display = 'none';
    img.innerHTML = '';
    num.innerHTML = numeroHTML;
    
}

function clicou(n) {
    let elNumero = document.querySelector('.quad-1.pisca')
    if(elNumero != null) {
        elNumero.innerHTML = n;
        numb = `${numb}${n}`;   
        
        elNumero.classList.remove('pisca');
        if (elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
    } else {
        attInterface()
    }}
}
function branco() {
    if(numb === '') {
        white = true;
        seuvotopara.style.display = 'block';
        num.innerHTML = '';
        aviso.style.display = 'block';
        desc.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>'
    }
}
function corrige() {
    start()
}
function confirma() {
    let etapa = etapas[etapaAtual];
    let votoConfirmado = false

    if(white === true ) {
        alert('Confirmado como BRANCO');
        votoConfirmado = true;
        
    } else if (numb.length === etapa.numeros) { 
        votoConfirmado = true;
        alert('VOTO salvo!')   
    }
    if (votoConfirmado) {
        etapaAtual++;
        if (etapas[etapaAtual] !== undefined) {
            start()
        } else {
            document.querySelector('.d-1').innerHTML = '<div class="aviso--grande pisca">FIM!</div>'
        }
    }

}
start()


