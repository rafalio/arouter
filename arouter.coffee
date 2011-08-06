exports.route = (routes, app, middleware) ->
  funcs = 
    post: app.post
    get:  app.get
    all:  app.all
  
  for type, func of funcs
    for path of routes[type]
      args = routes[type][path]
      if middleware
        args.unshift middleware
      args.unshift path
      func.apply app,args