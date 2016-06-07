routing is very imp and powerful tooll...

server - side routing...client-side routing..

server -side routing : before spas and all that.....everything is a server side routing..process of a server uisng a URL locate a resource and return it to the client...


most web apps are executed entirely on server...

client side routing does not replace ss routing...all apps interact with server and accept a url and locate and return resource...


the request to the server are often for a smalller bits of info...


SPAs and client side rotuing :  means appears to the user means one page in the browser..and update portions of the page -- you dont get full page reloads...

SPA's need client side routing as a means of referring to different locations within the spa...(within the angular app)

when user takes some action (click the link)  -- goes to new client side route -- into the portion of the page....new link --- loads diffeernt resource in the same part of the page 

you might retrieve (partial html files, json , images)

there is still interaction with the server ---it just means whole page in the browser -- is no longer being reloaded with every server interaction...

node application built with express framework...
...
.. the services will allow us to retrieve the data that is  displayed in teh appp....




URL based routing -- default ngRoute module  own angular module...part of the angular framework....

URL centric approach to routing.....

configure routes with $routeProvider........
match urls to controllers and views ------
use the $routeParams service -- to access URL parameters....clean and simple way to access and use parameters...

when route changed from one to another -- events are being fired....Handling $route events..


custom actions related to route transitions...
configure location service to operate in HTML5 routing....removes #...

---Getting ngRoute --- in own js file....
you could install with bower -- bower is package manager 

also can use npm to install the file...
npm install angular-route@1.4.0

code will be added in the directory node modules....
also use CDN..

--getting started with ngRoute ----
reference the angular route file...add ngRoute as a module dependency...
add ng-view directive to our index.html file..
each route will have own view......ng-view tells angular where to insert html...

ngRoute module dependency...

var app = angular.module ('app',['ngRoute']);

<div ng-view></div>

---configuring routes -------

add new routes using routeProvider....use module;s config function...

app.config(['$routeProvider'], function($routeProvider)){

	$routeProvider.when('',{
		controller:
		controllerAs:
		templateUrl:
	})

}
also can use controller: 'HomeController' as home
















































I hope all is well. I just wanted to check in and see if there's an update on the timeline or status for the [job title] position I interviewed for on [date of interview]. I'm still very interested and look forward to hearing back from you.

Please let me know if it would be helpful for me to provide any additional information as you move on to the next stage in the hiring process.

I look forward to hearing from you,