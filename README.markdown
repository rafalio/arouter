#ARouter
###Very simple router for node.js

#### Installation

<pre>
npm install arouter	
</pre>

This allows me to define my routes in the following way:

<pre>
home = function(req,res){
	res.render('index.jade');
}

edit = function(req,res){
	res.render('edit.jade');
}

requireLogin = function(req,res,next){
	if(req.session.user) next();
	else res.redirect('/');
}

edit_p = function(req,res){
	// posting to a page
}
	
routes = {
	get:{
		'/': home,
		'/edit': [requireLogin,edit]
	},
	post:{
		'/edit' : edit_p
	}
}
</pre>

and then use them in it in the following way

<pre>
arouter = require('./arouter')
arouter.router(routes,app)
</pre>

where 'app' is the express app instance.

The middleware you provide in the list for each page, are evaluated from left to right.
Hence, anything but the last function needs to have a 'next' function in the parameter to continue the execution.
If you're not using any middleware you don't have to put the final function in an array.

If you want to apply a piece (or multiple pieces) of middleware to all of your routing functions just do:

<pre>
arouter = require('./arouter')
arouter.router(routes,app, Middleware1)
</pre>

<pre>
arouter = require('./arouter')
arouter.router(routes,app, [Middleware1, Middleware2])
</pre>

