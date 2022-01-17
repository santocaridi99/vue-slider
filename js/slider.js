new Vue({
    el:"#app",
    data:{
        // setto un indice iniziale a 0
        //setto un timer iniziale a 0 per la timing function
        currentIndex:0,
        timer:0,
        // modale inizialmente falsa
        modalShow:false,
        photo:[
            {
                nome:'Reggio Calabria',
                url:'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2019/04/panorama-Reggio-Calabria-iStock-8013859641-1080x720.jpg?v=315237'
            },
            {
                nome:'Tropea',
                url:'https://images.lonelyplanetitalia.it/uploads/tropea?q=80&p=slider&s=a733aec7e49f5cb84e68fc66096a3ebc'
            },
            {
                nome:'Scilla',
                url:'https://media-cdn.tripadvisor.com/media/vr-splice-j/06/87/c8/dd.jpg'
            },
            {
                nome:'Aspromonte',
                url:'https://www.calabriatours.org/images/sampledata/aree-protette/parco-dell-aspromonte.jpg'
            },
            {
                nome:'Palmi',
                url:'https://www.citynow.it/wp-content/uploads/2016/11/palmi6-800x532.jpg'
            }
        ]

    },
    methods:{
        //metodo per mandare avanti la photo
        //aumento indice 
        //se indice corrente è > della lunghezza dell'array allora ritorna a zero
        nextPhoto:function(){
            this.currentIndex++;
            if(this.currentIndex>this.photo.length - 1){
                this.currentIndex=0
            }
        },
        //stessa cosa ma al contrario
        //se indice è minore di 0 torna a posizione iniziale 
        prevPhoto:function(){
            this.currentIndex--;
            if(this.currentIndex<0){
                this.currentIndex = this.photo.length - 1;
            }
        },
        //autoplay do una variabile che collego a this per evitare conflitti 
        //il timer che va da 0 a 3 sec chiamerà function nextphoto
        //avrei potuto usare la arrow function senza dichairare variabile = this
        autoplay:function(){
            let t = this;
            this.timer=setInterval(function() {
               t.nextPhoto();
            }, 3000);
        },
        //apertura modale 
        openModal:function(){
            if (!this.modalShow) { // qui è false
                this.modalShow = true;//diventerà vera
                clearInterval(this.timer)//si stopperà il timer
            }
        },
        //chiusura modale
        closeModal:function(){
            if(this.modalShow) {  // qui è true
                this.modalShow = false;//modale diventerà falsa
                this.autoplay(this.timer);//avrò autoplay
            }
        }
    },
    // una funzione mounted esterna o montata che mi chiama l'autoplay quando avvio la pagina
    mounted:function(){
        this.autoplay();
    },

})