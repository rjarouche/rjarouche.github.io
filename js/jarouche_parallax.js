/*!
Jarouche Parallax Animation - 0.1
Copyright © 2017 Rodrigo Sartori Jarouche
Licensed under the MIT license.
*/
var jParallax;

$.fn.extend({
    addAnimation: function (animationName,animationEndName,theOffset) {
         if(!theOffset){
            theOffset = "85%"
         }
         this.each(function() {
            $(this).addClass('animated');   
            var types = ['bounce','flash','pulse','rubberBand','shake','swing','tada','wobble','jello','flip','hinge','jackInTheBox'];
            
            if( $.inArray(animationName,types) == -1 ){
                $(this).css('opacity','0');
            }
            

            var waypoint = new Waypoint({
              element: $(this).get(0),
              handler: function(direction) {
                 if(direction == 'down'){
                     $(this.element).addClass(animationName);
                     if(animationEndName && animationName != animationEndName){
                         $(this.element).removeClass(animationEndName);
                     } 
                 }else{
                    $(this.element).removeClass(animationName);
                     if(animationEndName && animationName != animationEndName){
                         $(this.element).addClass(animationEndName);
                     } 
                 }
          
              }, offset: theOffset
            });
         });
        return this;
    }
});



function jarouche_parallax(){

    /* CONFIG */
    var jarouche_parallax_config = {
        /* Prefix of the classe for animation ex. if you put foo_ the class to animate bounceIn is foo_ */
        prefix  : 'jar_',
        /* Put the animation direction when up the page */
        default_inverted_animation  : true,
        /* Offset of the page, defined by jquery waypoints https://github.com/imakewebthings/waypoints */
        offset  : "85%"
    }


    this.start = function (config){

        if(config){
            jarouche_parallax_config.prefix = config.prefix ? config.prefix :jarouche_parallax_config.prefix;
            jarouche_parallax_config.default_inverted_animation = config.default_inverted_animation == null || config.default_inverted_animation == undefined  ? jarouche_parallax_config.default_inverted_animation : config.default_inverted_animation;
            jarouche_parallax_config.offset = config.offset ? config.offset :jarouche_parallax_config.offset;          
        }
        putClasses();
    }
    
    
    
    function putClasses(){
        var prefix = jarouche_parallax_config.prefix;
        var typesComum = ['bounce','flash','pulse','rubberBand','shake','swing','tada','wobble','jello','flip','hinge','jackInTheBox'];
        
        for (i = 0; i < typesComum.length; i++) { 
            $('.' + prefix + typesComum[i]).addAnimation(typesComum[i],  jarouche_parallax_config.default_inverted_animation ? typesComum[i] : false, jarouche_parallax_config.offset); 
        }
    
        var types = [ ['bounceIn','bounceOut'] ,
                  ['bounceInDown','bounceOutUp'],
                  ['bounceInLeft','bounceOutRight'],
                  ['bounceInRight','bounceOutLeft'],
                  ['bounceInUp','bounceOutDown'],
                  ['fadeIn','fadeOut'],
                  ['fadeInDown','fadeOutUp'],
                  ['fadeInDownBig','fadeOutUpBig'],
                  ['fadeInLeft','fadeOutRight'],
                  ['fadeInLeftBig','fadeOutRightBig'],
                  ['fadeInRight','fadeOutLeft'],
                  ['fadeInRightBig','fadeOutLeftBig'],
                  ['fadeInUp','fadeOutUp'],
                  ['fadeInUpBig','fadeOutDownBig'],
                  ['flipInX','flipOutY'],
                  ['flipInY','flipOutX'],
                  ['lightSpeedIn','lightSpeedOut'],
                  ['rotateIn','rotateOut'],
                  ['rotateInDownLeft','rotateOutDownLeft'],
                  ['rotateInDownRight','rotateOutDownRight'],
                  ['rotateInUpLeft','rotateOutUpLeft'],
                  ['rotateInUpRight','rotateOutUpRight'],
                  ['slideInUp','slideOutDown'],
                  ['slideInDown','slideOutUp'],
                  ['slideInLeft','slideOutRight'],
                  ['slideInRight','slideOutLeft'],
                  ['zoomIn','zoomOut'],
                  ['zoomInDown','zoomOutUp'],
                  ['zoomInLeft','zoomOutRight'],
                  ['zoomInRight','zoomOutLeft'],
                  ['zoomInUp','zoomOutUp'],
                  ['rollIn','rollOut'] 
        ];     
    
        for (i = 0; i < types.length; i++) { 

            $('.' + prefix + types[i][0]).addAnimation(types[i][0], 
                                                    jarouche_parallax_config.default_inverted_animation ? types[i][1] : false , 
                                                    jarouche_parallax_config.offset);       
                                                    
            $('.' + prefix + types[i][1]).addAnimation(types[i][1], 
                                                    jarouche_parallax_config.default_inverted_animation ? types[i][0] : false , 
                                                    jarouche_parallax_config.offset); 
        }
    

    }
}

$(function(){
   
    jParallax = new jarouche_parallax();

});





