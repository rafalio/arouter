(function() {
  exports.route = function(routes, app, middleware) {
    var args, func, funcs, path, type, _results;
    funcs = {
      post: app.post,
      get: app.get,
      all: app.all
    };
    _results = [];
    for (type in funcs) {
      func = funcs[type];
      _results.push((function() {
        var _results2;
        _results2 = [];
        for (path in routes[type]) {
          args = routes[type][path];
          if (middleware) {
            args.unshift(middleware);
          }
          args.unshift(path);
          _results2.push(func.apply(app, args));
        }
        return _results2;
      })());
    }
    return _results;
  };
}).call(this);
