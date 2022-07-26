// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__6027__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__6027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6028__i = 0, G__6028__a = new Array(arguments.length -  0);
while (G__6028__i < G__6028__a.length) {G__6028__a[G__6028__i] = arguments[G__6028__i + 0]; ++G__6028__i;}
  args = new cljs.core.IndexedSeq(G__6028__a,0,null);
} 
return G__6027__delegate.call(this,args);};
G__6027.cljs$lang$maxFixedArity = 0;
G__6027.cljs$lang$applyTo = (function (arglist__6029){
var args = cljs.core.seq(arglist__6029);
return G__6027__delegate(args);
});
G__6027.cljs$core$IFn$_invoke$arity$variadic = G__6027__delegate;
return G__6027;
})()
);

(o.error = (function() { 
var G__6030__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__6030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6031__i = 0, G__6031__a = new Array(arguments.length -  0);
while (G__6031__i < G__6031__a.length) {G__6031__a[G__6031__i] = arguments[G__6031__i + 0]; ++G__6031__i;}
  args = new cljs.core.IndexedSeq(G__6031__a,0,null);
} 
return G__6030__delegate.call(this,args);};
G__6030.cljs$lang$maxFixedArity = 0;
G__6030.cljs$lang$applyTo = (function (arglist__6032){
var args = cljs.core.seq(arglist__6032);
return G__6030__delegate(args);
});
G__6030.cljs$core$IFn$_invoke$arity$variadic = G__6030__delegate;
return G__6030;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
