(function(a) {
  var b = a(window);
  var c = b.height();
  b.resize(function() {
    c = b.height()
  });
  a.fn.parallax = function(e, d, g) {
    var i = a(this);
    var j;
    var h;
    var f = 0;
    i.each(function() {
      h = i.offset().top
    });
    if (g) {
      j = function(l) {
        return l.outerHeight(true)
      }
    } else {
      j = function(l) {
        return l.height()
      }
    }
    if (arguments.length < 1 || e === null) {
      e = "50%"
    }
    if (arguments.length < 2 || d === null) {
      d = 0.1
    }
    if (arguments.length < 3 || g === null) {
      g = true
    }

    function k() {
      var l = b.scrollTop();
      i.each(function() {
        var n = a(this);
        var o = n.offset().top;
        var m = j(n);
        if (o + m < l || o > l + c) {
          return
        }
        i.css("backgroundPosition", e + " " + Math.round((h - l) * d) + "px")
      })
    }
    b.bind("scroll", k).resize(k);
    k()
  }
})(jQuery);
