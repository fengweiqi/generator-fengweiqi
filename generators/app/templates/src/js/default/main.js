/*
作用：tg2
日期：2015-12-10
作者：冯维琪
*/
require.config({
    waitSeconds:10,
    paths : {
        
       
        jquery:["lib/jquery/jquery-1.11.1.min"],
        tmpl:["lib/tmpl/tmpl.min"]
       

    },
    shim: {
        
        "tmpl":{
            // deps:["jquery"],
            exports:"tmpl"
        }
        
    }
  
});

require(['jquery'],function($){
   
});


