new Vue({
    el:"#app",
    data:{
        currentIndex:0,
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
        nextPhoto:function(){
            this.currentIndex++;
            if(this.currentIndex>this.photo.length - 1){
                this.currentIndex=0
            }
        },
        prevPhoto:function(){
            this.currentIndex--;
            if(this.currentIndex<0){
                this.currentIndex = this.photo.length - 1;
            }
        },
        // autoplay: function(){
        //     setInterval(function() {
        //        nextPhoto();
        //     }, 3000);
        // }

    }
})