"use strict";$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}});var waypoint=new Waypoint({element:document.getElementById("basic-waypoint"),handler:function(){$("header").toggleClass("active"),$(".scroll-to-top").fadeToggle(300)}});waypoint=new Waypoint({element:document.getElementById("about"),handler:function(){$("#about").addClass("fader")},offset:"50%"}),waypoint=new Waypoint({element:document.getElementById("services"),handler:function(){$("#services").addClass("fader")},offset:"50%"}),waypoint=new Waypoint({element:document.getElementById("clients"),handler:function(){$("#clients").addClass("fader")},offset:"50%"}),waypoint=new Waypoint({element:document.getElementById("contact"),handler:function(){$("#contact").addClass("fader")},offset:"50%"});$(".head").click(function(){$(this).toggleClass("active"),$(this).parent().find(".arrow").toggleClass("arrow-animate"),$(this).parent().find(".content").slideToggle(280)}),MicroModal.init({disableScroll:!0,disableFocus:!0}),console.log("Testing JS import file two.");