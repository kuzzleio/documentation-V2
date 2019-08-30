// Generated by LiveScript 1.5.0
(function(){
  var p, fix;
  p = require('prelude-ls');
  fix = function(str, options){
    var countSpaces, ref$, escape, getSpaces, process;
    countSpaces = (ref$ = options != null ? options.countSpaces : void 8) != null ? ref$ : 4;
    escape = function(str){
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    };
    getSpaces = function(str){
      var ref$, ref1$, ref2$;
      return (ref$ = (ref1$ = str.match(/^[ ]+/g)) != null ? (ref2$ = ref1$[0]) != null ? ref2$.length : void 8 : void 8) != null ? ref$ : 0;
    };
    process = function(previous, line){
      var findIgnore, eachIgnore, ref$, current, last, find2, found, gen, shift, ignoreUnder, index, r_last, next, this$ = this;
      findIgnore = curry$(function(get, rule){
        return line.match(escape(get(rule)));
      });
      eachIgnore = function(get){
        if (typeof (options != null ? options.ignoreInside : void 8) !== 'Array') {
          return false;
        }
        return p.any(findIgnore(get))(
        options.ignoreInside);
      };
      if (previous.ignore === true) {
        previous.push(line);
        if (eachIgnore(function(it){
          return it[1];
        })) {
          previous.ignore = false;
        }
        return previous;
      }
      previous.ignore = eachIgnore(function(it){
        return it[0];
      });

      previous.log = (ref$ = previous.log) != null
        ? ref$
        : [];
      current = {
        line: line,
        actual: getSpaces(line),
        fixed: 0
      };
      last = previous.log[previous.log.length - 1];
      find2 = function(actual){
        var reversed, i$, len$, item;
        reversed = p.reverse(
        previous.log);
        for (i$ = 0, len$ = reversed.length; i$ < len$; ++i$) {
          item = reversed[i$];
          if (item.actual === actual) {
            return item.fixed;
          }
        }
        for (i$ = 0, len$ = reversed.length; i$ < len$; ++i$) {
          item = reversed[i$];
          if (item.actual < actual) {
            return actual - (item.actual - item.fixed);
          }
        }
        return 0;
      };
      found = find2(current.actual);
      gen = function(num){
        return (function(){
          var i$, to$, results$ = [];
          for (i$ = 0, to$ = num - 1; i$ <= to$; ++i$) {
            results$.push(i$);
          }
          return results$;
        }()).map(function(){
          return " ";
        }).join("");
      };
      shift = current.actual + current.actual % countSpaces;
      ignoreUnder = (ref$ = options != null ? options.ignoreUnder : void 8) != null
        ? ref$
        : [];
      current.fixed = (function(){
        switch (false) {
        case last != null:
          return 0;
        case !(current.actual > last.actual && ignoreUnder.filter(function(it){
            return last.line.match(it);
          }).length > 0):
          return last.fixed + (current.actual - last.actual);
        case !(last.fixed < last.actual && last.actual === current.actual):
          return last.fixed;
        case !(last.actual < current.actual && last.fixed < current.actual):
          return last.fixed + countSpaces;
        case !(last.actual < current.actual && last.fixed === current.actual):
          return shift + countSpaces;
        case !(last.actual > current.actual && shift !== current.actual):
          return find2(current.actual);
        case found === current.actual:
          return found;
        default:
          return current.actual;
        }
      }());
      index = 1;
      do {
        r_last = previous.log[previous.log.length - index];
        if (current.fixed === (r_last != null ? r_last.fixed : void 8) && current.actual < r_last.actual) {
          previous[previous.length - index] = gen(countSpaces) + previous[previous.length - index];
          index += 1;
        } else {
          index = 0;
        }
      } while (index > 0);
      next = line.replace(/^[ ]+/, gen(current.fixed));
      previous.log.push(current);
      previous.push(next);
      return previous;
    };
    return p.join('\n')(p.foldl(process, [])(str.replace(/\t/g, "  ").split('\n')));
  };
  module.exports = fix;
  function curry$(f, bound){
    var context,
    _curry = function(args) {
      return f.length > 1 ? function(){
        var params = args ? args.concat() : [];
        context = bound ? context || this : this;
        return params.push.apply(params, arguments) <
            f.length && arguments.length ?
          _curry.call(context, params) : f.apply(context, params);
      } : f;
    };
    return _curry();
  }
}).call(this);