"use strict";

$(document).ready(function() {

  // connect-livereload via Gulp autorefreshes the site.
  $("body").append('<script src="http://localhost:35729/livereload.js?snipver=1"></script>');

  // hide loadin + show app
  $("#loading").out()
  $("#app").in("fadeIn")

  function clearApp(){
    front.out()

    e404.out()
    $('html,body').scrollTop(0)
  }

  // VIEWS
  // Front page view
  var frontView = function () {
    clearApp()
    front.in('fadeIn')
    frontController()
  }

  // MODEL
  // Set up routes
  crossroads.addRoute('/', frontView);

  // that's a 404 if the route structure is not matched
  crossroads.bypassed.add(function(request){
    clearApp()
    e404.in()
  })

  // start routing
  route(crossroads);

  // CONTROLLERS
  // Controller, "/"
  function frontController() {

    var button1 = document.getElementById("button");
    var trigger1 = document.getElementById("trigger");
    var triggerCross1 = document.getElementById("triggerCross");
    var triggerDots1 = document.getElementById("triggerDots");
    var menu1_1 = document.getElementById("menu1");
    var menu2_1 = document.getElementById("menu2");
    var menu3_1 = document.getElementById("menu3");


    var isOpen = false;
    trigger.on('click', function(event){

      //background-size: 0 0;


      var t1 = new TimelineLite();

      var t1_trigger = new TimelineLite();


      var t1_menu1 = new TimelineLite();
      var t1_menu2 = new TimelineLite();
      var t1_menu3 = new TimelineLite();

      // menu is closed
      if (isOpen === false) {

        // initial drop
        t1.to(trigger1, 0.1, {
          backgroundSize:"50px 50px"
        });

        // rotate trigger
        t1_trigger.to(trigger1, 0.3, {
          rotation: 90,
        });

        // make big wave
        t1.to(button1, 0.5, {
          width:250,
          height:250,
          bottom: 30,
          right: -50,
          ease: Back.easeOut.config(1.7),
          y: 0
        });

        // menu element 1
        t1_menu1.to(menu1_1, 0.5, {
          bottom: 207,
          right: 118,
          opacity: 1
        })

        // menu element 2
        t1_menu2.to(menu2_1, 0.5, {
          bottom: 150,
          right: 150,
          opacity: 1
        })

        // menu element 3
        t1_menu3.to(menu3_1, 0.5, {
          bottom: 236,
          opacity: 1
        })

        // hide dots
        TweenMax.to(triggerDots1, 0.3, {
          opacity: 0,
          scale: 0.6
        });

        // show cross
        TweenMax.to(triggerCross1, 0.3, {
          opacity: 1,
          scale: 1
        });

        isOpen = true;

      // menu is open
      } else {
        var t2 = new TimelineLite();

        // hide dots
        TweenMax.to(triggerDots1, 0.3, {
          opacity: 1,
          scale: 1
        });

        // show cross
        TweenMax.to(triggerCross1, 0.3, {
          opacity: 0,
          scale: 0.6
        });

        // menu element 1
        t1_menu1.to(menu1_1, 0.5, {
          bottom: 178,
          right: 95,
          opacity: 0
        })

        // menu element 2
        t1_menu2.to(menu2_1, 0.5, {
          bottom: 150,
          right: 100,
          opacity: 0
        })

        // menu element 3
        t1_menu3.to(menu3_1, 0.5, {
          bottom: 190,
          opacity: 0
        })

        // make big wave
        t1.to(button1, 0.5, {
          width:50,
          height:50,
          bottom: 130,
          right: 50,
          ease: Back.easeOut.config(1.7),
          y: 0
        });

        // rotate trigger
        t1_trigger.to(trigger1, 0.3, {
          rotation: 0,
        });

        // initial drop
        t1_trigger.to(trigger1, 0.3, {
          backgroundSize:"0px 0px"
        });

        isOpen = false;
      }

    })

  }
});
