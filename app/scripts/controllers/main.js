'use strict';

angular.module('whatNext')
  .controller('MainCtrl', function ($scope, $sce, $firebase) {

    //allows github widget links in the iFrames
    $scope.trustWatch = function(watch) {
    return $sce.trustAsResourceUrl(watch);
    };
    $scope.trustFork = function(fork) {
    return $sce.trustAsResourceUrl(fork);
    };
    $scope.trustFollow = function(follow) {
    return $sce.trustAsResourceUrl(follow);
    };

    //hardcoded data to populate the app
    $scope.scaffoldThings = [
      	{
      		displayName: 'Yeoman',
          name: 'yeoman',
          repo: 'yeoman',
          watch: 'http://ghbtns.com/github-btn.html?user=yeoman&repo=yeoman&type=watch&count=true',
          fork: 'http://ghbtns.com/github-btn.html?user=yeoman&repo=yeoman&type=fork&count=true',
          follow: 'http://ghbtns.com/github-btn.html?user=yeoman&type=follow&count=true',
      		image: 'http://yeoman.io/assets/img/yeoman-logo.a053.png',
      		link: 'http://yeoman.io/index.html',
      		description: 'With so many great tools available to front-end web developers these days it can sometimes be difficult to understand how they all fit together. Deciding on a workflow that you’re happy with is often a very personal endeavour, but getting started isn’t always easy. Yeoman aims to solve this problem by scaffolding workflows for creating modern webapps, while at the same time mixing in many of the best practices that have evolved within the industry.'
      	},
      	{
      		displayName: 'Slush',
          name: 'slushjs',
          repo: 'slush',
          watch: 'http://ghbtns.com/github-btn.html?user=slushjs&repo=slush&type=watch&count=true',
          fork: 'http://ghbtns.com/github-btn.html?user=slushjs&repo=slush&type=fork&count=true',
          follow: 'http://ghbtns.com/github-btn.html?user=slushjs&type=follow&count=true',
      		image: 'http://slushjs.github.io/assets/slush.png',
      		link: 'http://slushjs.github.io/#/',
      		description: 'Slush is a scaffolding tool, i.e. a tool to help you generate new project structures to get you up and running with your new project in a matter of seconds.'
      	},
      	{
      		displayName: 'Polymer',
          name: 'Polymer',
          repo: 'polymer',
          watch: 'http://ghbtns.com/github-btn.html?user=polymer&repo=polymer&type=watch&count=true',
          fork: 'http://ghbtns.com/github-btn.html?user=polymer&repo=polymer&type=fork&count=true',
          follow: 'http://ghbtns.com/github-btn.html?user=polymer&type=follow&count=true',
      		image: 'http://www.polymer-project.org/images/logos/p-logo.svg',
      		link: 'http://www.polymer-project.org/',
      		description: 'Polymer is a library that uses the latest web technologies to let you create custom HTML elements. Build anything from a button to a complete application as an encapsulated, reusable element that works across desktop and mobile.'
      	}
    ];
    $scope.jsThings = [
        {
      		displayName: 'jQuery',
          name: 'jquery',
          repo: 'jquery',
          watch: 'http://ghbtns.com/github-btn.html?user=jquery&repo=jquery&type=watch&count=true',
          fork: 'http://ghbtns.com/github-btn.html?user=jquery&repo=jquery&type=fork&count=true',
          follow: 'http://ghbtns.com/github-btn.html?user=jquery&type=follow&count=true',
      		image: 'http://api.jquery.com/jquery-wp-content/themes/jquery/images/logo-jquery.png',
      		link: 'http://jquery.com/',
      		description: 'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.'
      	},
      	{
      		displayName: 'Underscore',
          name: 'jashkenas',
          repo: 'underscore',
          watch: 'http://ghbtns.com/github-btn.html?user=jashkenas&repo=underscore&type=watch&count=true',
          fork: 'http://ghbtns.com/github-btn.html?user=jashkenas&repo=underscore&type=fork&count=true',
          follow: 'http://ghbtns.com/github-btn.html?user=jashkenas&type=follow&count=true',
      		image: 'http://underscorejs.org/docs/images/underscore.png',
      		link: 'http://underscorejs.org/',
      		description: 'Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects. It’s the answer to the question: “If I sit down in front of a blank HTML page, and want to start being productive immediately, what do I need?” … and the tie to go along with jQuery\'s tux and Backbone\'s suspenders.'
      	},
      	{
      		displayName: 'Backbone',
          name: 'jashkenas',
          repo: 'backbone',
          watch: 'http://ghbtns.com/github-btn.html?user=jashkenas&repo=backbone&type=watch&count=true',
          fork: 'http://ghbtns.com/github-btn.html?user=jashkenas&repo=backbone&type=fork&count=true',
          follow: 'http://ghbtns.com/github-btn.html?user=jashkenas&type=follow&count=true',
      		image: 'http://backbonejs.org/docs/images/backbone.png',
      		link: 'http://backbonejs.org/',
      		description: 'Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.'
      	},
      	{
      		displayName: 'Ember',
          name: 'emberjs',
          repo: 'ember.js',
          watch: 'http://ghbtns.com/github-btn.html?user=emberjs&repo=ember.js&type=watch&count=true',
          fork: 'http://ghbtns.com/github-btn.html?user=emberjs&repo=ember.js&type=fork&count=true',
          follow: 'http://ghbtns.com/github-btn.html?user=emberjs&type=follow&count=true',
      		image: 'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200',
      		link: 'http://emberjs.com/',
      		description: 'Ember.js is built for productivity. Designed with developer ergonomics in mind, its friendly APIs help you get your job done—fast.'
      	},
      	{
      		displayName: 'Angular',
          name: 'angular',
          repo: 'angular.js',
          watch: 'http://ghbtns.com/github-btn.html?user=angular&repo=angular.js&type=watch&count=true',
          fork: 'http://ghbtns.com/github-btn.html?user=angular&repo=angular.js&type=fork&count=true',
          follow: 'http://ghbtns.com/github-btn.html?user=angular&type=follow&count=true',
      		image: 'https://angularjs.org/img/AngularJS-large.png',
      		link: 'https://angularjs.org/',
      		description: 'HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.'
      	}
    ];
    $scope.hostingThings = [
        {
      		displayName: 'Heroku',
          name: 'heroku',
          repo: 'heroku',
          watch: 'http://ghbtns.com/github-btn.html?user=heroku&repo=heroku&type=watch&count=true',
          fork: 'http://ghbtns.com/github-btn.html?user=heroku&repo=heroku&type=fork&count=true',
          follow: 'http://ghbtns.com/github-btn.html?user=heroku&type=follow&count=true',
      		image: 'https://id.heroku.com/assets/logo.png',
      		link: 'https://www.heroku.com/home',
      		description: 'Heroku provides you with all the tools you need to iterate quickly, and adopt the right technologies for your project. Build modern, maintainable apps and instantly extend them with functionality from hundreds of cloud services providers without worrying about infrastructure.'
      	},
      	{
      		displayName: 'Firebase',
          name: 'firebase',
          repo: 'angularFire',
          watch: 'http://ghbtns.com/github-btn.html?user=firebase&repo=angularFire&type=watch&count=true',
          fork: 'http://ghbtns.com/github-btn.html?user=firebase&repo=angularFire&type=fork&count=true',
          follow: 'http://ghbtns.com/github-btn.html?user=firebase&type=follow&count=true',
      		image: 'https://lh5.googleusercontent.com/-IlfNr4Wok4g/AAAAAAAAAAI/AAAAAAAAAIw/sQVCxa4ubmY/s120-c/photo.jpg',
      		link: 'https://www.firebase.com/',
      		description: 'Build realtime mobile and web apps in minutes using client-side code and our powerful API. Save time. Delight your users.'
      	},
      	{
      		displayName: 'MongoDB',
          name: 'mongodb',
          repo: 'mongo',
          watch: 'http://ghbtns.com/github-btn.html?user=mongodb&repo=mongo&type=watch&count=true',
          fork: 'http://ghbtns.com/github-btn.html?user=mongodb&repo=mongo&type=fork&count=true',
          follow: 'http://ghbtns.com/github-btn.html?user=mongodb&type=follow&count=true',
      		image: 'http://media.mongodb.org/logo-mongodb-header.png',
      		link: 'http://www.mongodb.org/',
      		description: 'MongoDB (from "humongous") is an open-source document database, and the leading NoSQL database. Written in C++.'
      	}
    ];
    $scope.miscThings = [
        {
      		displayName: 'SASS',
          name: 'sass',
          repo: 'sass',
          watch: 'http://ghbtns.com/github-btn.html?user=sass&repo=sass&type=watch&count=true',
          fork: 'http://ghbtns.com/github-btn.html?user=sass&repo=sass&type=fork&count=true',
          follow: 'http://ghbtns.com/github-btn.html?user=sass&type=follow&count=true',
      		image: 'http://sass-lang.com/assets/img/logo-235e394c.png',
      		link: 'http://sass-lang.com/',
      		description: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.'
      	},
      	{
      		displayName: 'Twitter Bootstrap',
          name: 'twbs',
          repo: 'bootstrap',
          watch: 'http://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true',
          fork: 'http://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=fork&count=true',
          follow: 'http://ghbtns.com/github-btn.html?user=twbs&type=follow&count=true',
      		image: 'http://blog.getbootstrap.com/public/ico/apple-touch-icon-144-precomposed.png',
      		link: 'http://getbootstrap.com/',
      		description: 'The most popular front-end framework for developing responsive, mobile first projects on the web.'
      	},
      	{
      		displayName: 'Angular Bootstrap',
          name: 'angular-ui',
          repo: 'bootstrap',
          watch: 'http://ghbtns.com/github-btn.html?user=angular-ui&repo=bootstrap&type=watch&count=true',
          fork: 'http://ghbtns.com/github-btn.html?user=angular-ui&repo=bootstrap&type=fork&count=true',
          follow: 'http://ghbtns.com/github-btn.html?user=angular-ui&type=follow&count=true',
      		image: 'http://blog.getbootstrap.com/public/ico/apple-touch-icon-144-precomposed.png',
      		link: 'http://angular-ui.github.io/bootstrap/',
      		description: 'Bootstrap components written in pure AngularJS by the AngularUI Team.'
      	}
    ];
  })
  .controller('DateCtrl', function ($scope) {
      $scope.today = function() {
        $scope.dt = new Date();
      };
      $scope.today();

      $scope.clear = function () {
        $scope.dt = null;
      };

      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };

  })
  .controller('CollapseCtrl', function ($scope){
      $scope.isCollapsed = false;
  })
  .controller('AccordianCtrl', function ($scope){
      $scope.oneAtATime = true;
  });

