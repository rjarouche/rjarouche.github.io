document.addEventListener('DOMContentLoaded',function(){
    Vue.prototype.$http = axios;
    new Vue({
        el: '#app',
        delimiters: ['${' , '}'],
        data: {
        beers: [],
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
            displayAtt: function(event,index){

                document.getElementById("idtext").innerHTML = "<h1>"+this.beers[index].name+"</h1>" + "<img class='img-modal' src='" + this.beers[index].imgInside + "'>" +this.beers[index].longDescription
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











