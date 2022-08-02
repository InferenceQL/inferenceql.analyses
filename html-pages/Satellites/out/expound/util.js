// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('expound.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
expound.util.assert_message = "Internal Expound assertion failed. Please report this bug at https://github.com/bhb/expound/issues";
expound.util.nan_QMARK_ = (function expound$util$nan_QMARK_(x){
var and__4221__auto__ = typeof x === 'number';
if(and__4221__auto__){
return isNaN(x);
} else {
return and__4221__auto__;
}
});
