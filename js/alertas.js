// ventana con información 
function Info(){
    Swal.fire({
        icon: 'info',
        title: 'Envianos un correo:',
        html: '<p> <b> fire_graphics@gmail.com </b> </p>',        
        confirmButtonText: 'Listo',
        

    })
}
// evitar 'refresh'
document.getElementById('contacto').addEventListener('click', function (e){
    e.preventDefault();
}) 
   
