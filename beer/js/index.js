document.addEventListener('DOMContentLoaded',function(){


    Vue.prototype.$http = axios;
    Vue.prototype.$Ebc2Hex = new Ebc2Hex;
    new Vue({
        el: '#wrapper',
        delimiters: ['${' , '}'],
        data: {
        beers: [],
        modalBeer: []
        },
        created() {
        var vm = this
        this.$http
            .get('data.json')
            .then(function(response) {
            vm.beers = response.data
            })
        },
        methods: {
            displayAtt: function(event,index,beer){
                this.modalBeer = beer;

                if(this.modalBeer.EBC){
                  this.modalBeer.hex = this.$Ebc2Hex.convert(this.modalBeer.EBC,0.7);
                }

                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

                if(width > 768){
                  this.modalBeer.perc = this.modalBeer.imgInside.length <= 5 ? (100 / this.modalBeer.imgInside.length) - 1 : 19;
                }else{
                  this.modalBeer.perc = 100;
                }




                //document.getElementById("idtext").innerHTML = "<h1>"+this.beers[index].name+"</h1>" + "<img class='img-modal' src='" + this.beers[index].imgInside + "'>" +this.beers[index].longDescription
                document.getElementById("myModal").style.display = "block";
            }
        }
    });


    // Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

});











