#ARouter
###Very simple router for node.js

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
	get:
		'/': [home]
		'/edit': [requireLogin,edit]
	post:
		'/edit' : [edit_p]
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

