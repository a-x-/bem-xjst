var fixtures = require('./fixtures')('bemhtml');
var test = fixtures.test;

describe('Runtime Match', function() {
  it('should call body function in BEMContext context', function() {
    test(function() {
      block('b').def()(function() {
        return this.constructor.name;
      });
    }, { block: 'b' }, 'ContextChild');
  });

  it('should pass BEMContext as first argument', function() {
    test(function() {
      block('b').def()(function(ctx) {
        return ctx.constructor.name;
      });
    }, { block: 'b' }, 'ContextChild');
  });
});
