exports.route = (routes, app) ->
  funcs = 
    post: app.post
    get:  app.get
    all:  app.all
  
  for type, func of funcs
    for path of routes[type]
      args = routes[type][path]
      args.unshift path
      func.apply app,args