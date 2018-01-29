$(document).ready(function() {	

	// smooth scrolling

	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	
	// welcome section
	
	var welcome = "<div class='intro-body'>\
						<div class='container'>\
							<div class='row'>\
								<div class='col-md-8 col-md-offset-2'>\
									<h1>Hello World. My name is Adam.</h1>\
									<h4>Web Designer & Front-end Developer</h4>\
									<hr></hr>\
									<h5><i class='fa fa-map-marker' aria-hidden='true'></i> Berlin, Germany</h5>\
									<div id='example' class='animated bounce'>\
										<h2 class='small-break'>\
											<a href='#portfolio' class='angle'>\
												<i class='fa fa-angle-double-down' aria-hidden='true'></i>\
											</a>\
										</h2>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\ ";

	$('header.intro').hide().fadeIn(1500).append(welcome);
	$('div.intro-body').hide().delay(350).fadeIn(1500);			
	

	// work section

	var works = [
	  {
		title: "Train & Benefit",
		pic: "./img/tb.jpg",
		description: "Web Development / Fitness Mobile App",
		link: "http://trainandbenefit.com/",
		modal: "tb"
	  },
	  {
		title: "Wspólny Mianownik",
		pic: "./img/pancake.jpg",
		description: "Landing-page / Pancake Bistro",
		link: "http://wspolnymianownik.eu/",
		modal: "wm"
	  },
	  {
		title: "Career Foundry Project",
		pic: "./img/bike.jpg",
		  description: "Online Shop / Bikes",
		link: "http://yournewbikeinberlin.herokuapp.com/",
		modal: "cf"
	  },
	  {
		title: "Low Studios Online Mixing",
		pic: "./img/studio.jpg",
		  description: "Web Design & Development / Online Mixing Services",
		link: "http://lowstudios.com/",
		modal: "ls"
	  },
	  {
		title: "Marta Wilk Photography",
		pic: "./img/mwp.jpg",
		  description: "Web Design & Development / Photography Services",
		link: "http://martawilkphotography.com/",
		modal: "mw"
	  }
	];

	for(var i = 0; i < works.length; ++i ) {
	  $("#works").append("\
		<div class='col-xs-10 col-xs-offset-1 col-sm-5 col-md-4 col-md-offset-0'>\
			<a href='" + works[i].link + "' class='work-img small-break' target='_blank'>\
				<img class='img-responsive' src='" + works[i].pic + "'>\
			</a>\
			<h4>" + works[i].title + "</h4>\
			<h6>" + works[i].description + "</h6>\
	  ");
	};

	// skills section

	var skills = [
	  "HTML",
	  "CSS",
	  "JavaScript",
	  "Ruby",
	  "Front-end Development",
	  "Responsive Web Design",
	  "jQuery",
	  "AJAX",
	  "Bootstrap",
	  "Back-end Development",
	  "Ruby on Rails",
	  "Heroku",
	  "Stripe",
	  "Git/GitHub",
	  "Debugging",
	  "Rspec",
	  "TDD & BDD",
	  "CRUD",
	  "REST",
	  "Caching"
	]

	for(var i = 0; i < skills.length; ++i ) {
	  $("#skills").append("\
		<button type='button' class='btn btn-default'>" + skills[i] + "</button>\
	  ");
	};
	
	// contact section

	var media = [
	  {
		type: "email",
		title: "lukasiewicz.a.m@gmail.com",
		icon: "fa-envelope-o",
		link: "mailto:lukasiewicz.a.m@gmail.com"
	  },
	  {
		type: "linkedin",
		title: "adamlukasiewicz",
		icon: "fa-linkedin-square",
		link: "https://de.linkedin.com/in/adamlukasiewicz"
	  },
	  {
		type: "github",
		title: "westbee",
		icon: "fa-github",
		link: "https://github.com/westbee"
	  }
	];

	for(var i = 0; i < media.length; ++i ) {
	  $('div.clmns').append("\
		<div class='col-sm-4'>\
    		<div class='contact small-break'>\
    			<h2>\
    				<a href='"+media[i].link+"'><i class='fa "+media[i].icon+"' aria-hidden='true'></i></a>\
    			</h2>\
				<p class='text-center'>"+media[i].title+"</p>\
    		</div>\
    	</div>\
	  ");
	};
	
	// footer section
	
	var date = new Date().getFullYear();
	var cr = "<div class='container text-center'>\
                <p>&copy;2016-"+date+" Adam Lukasiewicz. All rights reserved.</p>\
            </div>"
	$('footer').append(cr);
});