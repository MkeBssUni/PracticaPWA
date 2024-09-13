console.log('SW Hola mundo !!');

self.addEventListener('install',(event)=>{ //instalar el service worker
    console.log('SW: Instalado'); //cuando se instala el service worker
});

self.addEventListener('fetch', (event)=>{
    console.log(event.request.url);

    /*if(event.request.url.includes('style.css')){
        const respuesta = new Response(
            `body{
                color: blue;
                background-color: #000;
            }`,
            {
                headers:{
                    'Content-Type':'text/css'
                }
            }
        );
        event.respondWith(respuesta);
    }*/

})