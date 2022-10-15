window.addEventListener('scroll', () =>{
    if(window.scrollY==0){
        document.querySelector('.header-site').classList.remove("shadow")    
    }else{
        document.querySelector('.header-site').classList.add("shadow")
        
    }
})

document.getElementById("busca").onclick=function(){
    document.querySelector(".search").value=""
    document.querySelector(".search").placeholder="Buscar por..."
    document.querySelector(".search").classList.toggle("longsearch")
    document.querySelector(".search").focus()
}

document.getElementById("barcodetext").addEventListener("keyup", escrever)

setInterval(start,100);

function escrever(){
    let code = document.getElementById("barcodetext").value
    document.querySelector(".qr").classList.remove("tamanha")
    JsBarcode("#code", code);
}

function start(){
    if(document.getElementById("type").value=="barcode"){
        document.querySelector(".barcode").style.display= "block"
        document.querySelector(".qrcode").style.display="none"
    }else{
        document.querySelector(".qrcode").style.display="block"
        document.querySelector(".barcode").style.display="none"
    }
}

function baixar(){
    
}

function phoneqr(){
    document.getElementById("type").value="qrcode" 
}
function phonebar(){
    document.getElementById("type").value="barcode" 
}
document.getElementById("autobar").onclick=function(){
    let code = Math.floor(9000000000000*Math.random()+1);
    document.querySelector(".qr").classList.remove("tamanha")
    JsBarcode("#code", code);
}

document.getElementById("start").onclick=function(){
   start()
}

function GerarQRCode(){
    qr()
}

function qr(){
    var inputUsuario = document.querySelector('textarea').value;
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl=';
    var conteudoQRCode = GoogleChartAPI + encodeURIComponent(inputUsuario);
    document.querySelector('#code').src = conteudoQRCode;
    document.querySelector(".qr").classList.add("tamanha")
}


