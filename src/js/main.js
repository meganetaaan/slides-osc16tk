Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,
	mouseWheel: true,
	keyboard: true,
	center: false,

	transition: 'fade', // none/fade/slide/convex/concave/zoom

	// Optional reveal.js plugins
	dependencies: [
		{ src: '/js/vendor/classList.js', condition: function() { return !document.body.classList; } },
		{ src: 'js/vendor/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: 'js/vendor/notes/notes.js', async: true },
		        // Interpret Markdown in <section> elements
	    { src: 'js/vendor/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'js/vendor/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
	]
});

Reveal.addEventListener('slidechanged', function(event) {               
    console.log(event);
     if(event.currentSlide.getAttribute('data-background-iframe')) {
          document.querySelector('.reveal>.backgrounds').style.zIndex = 1;
          document.querySelector('.reveal>.backgrounds>.slide-background.present').style.zIndex = 1;
     } else {
          document.querySelector('.reveal>.backgrounds').style.zIndex = 0;
          document.querySelector('.reveal>.backgrounds>.slide-background.present').style.zIndex = 0;
     }                  
});