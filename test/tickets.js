/* let drpDwn = document.getElementById('lestImpremnt')
const apiRequest = 'http://127.0.0:5656/';

const obtenerImpresoras = () => {
    var impresora = new PrinterEscPos();
        impresora.getPrinters().then(response =>{
            if(response.status == "OK"){
                response.listPrinter.forEach(namePrinter =>{
                    console.log(namePrinter);
                });
            }else{
                console.log('makanch');
                
            }
        }) 
};
obtenerImpresoras();
const imprimirTicket = ()=>{
    var impresora = new PrinterEscPos();
    impresora.setText("hola mundo"); // metodo para imprimir texto
    impresora.setQR("123"); // metodo para imprimir codigos QR
    impresora.setBarCode("21","code93"); // metodo para imprimir codigo de barra tiene dos argumentos (codigo, tipo de codigo)
    impresora.setImage("image.png"); // metodo para imprimir imagenes al igual acepta enlaces de imagenes de internet
    impresora.setConfigure(
        font='a',
        bold= true,
        align= "center"
    ); // este metodo solo puede mandar 3 argumentos, para la fuente 'a' o 'b', letras negritas y la aliniacion del texto 'center','right','left'
    impresora.printerIn("lp0"); // una vez configurado el ticket pasamos a mandarlo a la impresora que deseamos imprimir el ticket
}; */
let url2 = '../src/courses.html'
let url = 'https://cnfrmpage.web.app/'
function tpngOthr() {
    var printWindow = window.open(url);
    printWindow.onload = function() {
      printWindow.print();

    };
  }
  function prntng() {
    window.print()
  }