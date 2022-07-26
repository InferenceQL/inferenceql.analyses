// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('metaprob.prelude');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('metaprob.trace');
goog.require('metaprob.generative_functions');
metaprob.prelude.exp = (function metaprob$prelude$exp(x){
return Math.exp(x);
});
metaprob.prelude.expt = (function metaprob$prelude$expt(x,y){
return Math.pow(x,y);
});
metaprob.prelude.sqrt = (function metaprob$prelude$sqrt(x){
return Math.sqrt(x);
});
metaprob.prelude.log = (function metaprob$prelude$log(x){
return Math.log(x);
});
metaprob.prelude.cos = (function metaprob$prelude$cos(x){
return Math.cos(x);
});
metaprob.prelude.sin = (function metaprob$prelude$sin(x){
return Math.sin(x);
});
metaprob.prelude.log1p = (function metaprob$prelude$log1p(x){
return Math.log1p(x);
});
metaprob.prelude.floor = (function metaprob$prelude$floor(x){
return Math.floor(x);
});
metaprob.prelude.round = (function metaprob$prelude$round(x){
return Math.round(x);
});
metaprob.prelude.negative_infinity = Number.NEGATIVE_INFINITY;
metaprob.prelude.sample_uniform = (function metaprob$prelude$sample_uniform(var_args){
var G__3165 = arguments.length;
switch (G__3165) {
case 0:
return metaprob.prelude.sample_uniform.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return metaprob.prelude.sample_uniform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metaprob.prelude.sample_uniform.cljs$core$IFn$_invoke$arity$0 = (function (){
return Math.random();
}));

(metaprob.prelude.sample_uniform.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return (a + (Math.random() * (b - a)));
}));

(metaprob.prelude.sample_uniform.cljs$lang$maxFixedArity = 2);

metaprob.prelude.set_difference = (function metaprob$prelude$set_difference(s1,s2){
return cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(s1),cljs.core.set(s2)));
});
metaprob.prelude.apply = cljs.core.with_meta(cljs.core.apply,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$apply_QMARK_,true], null));
metaprob.prelude.map = metaprob.generative_functions.generative_function_from_traced_code((function (at,apply_at){
return (function (f,l){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return (at.cljs$core$IFn$_invoke$arity$3 ? at.cljs$core$IFn$_invoke$arity$3(i,f,x) : at.call(null,i,f,x));
}),l));
});
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$generative_DASH_source,cljs.core.list(cljs.core.cst$sym$gen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$l], null),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$map_DASH_indexed,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$x], null),cljs.core.list(cljs.core.cst$sym$at,cljs.core.cst$sym$i,cljs.core.cst$sym$f,cljs.core.cst$sym$x)),cljs.core.cst$sym$l)))], null));
metaprob.prelude.replicate = metaprob.generative_functions.generative_function_from_traced_code((function (at,apply_at){
return (function (n,f){
var G__3167 = (function (i){
return (at.cljs$core$IFn$_invoke$arity$2 ? at.cljs$core$IFn$_invoke$arity$2(i,f) : at.call(null,i,f));
});
var G__3168 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(n);
return (metaprob.prelude.map.cljs$core$IFn$_invoke$arity$2 ? metaprob.prelude.map.cljs$core$IFn$_invoke$arity$2(G__3167,G__3168) : metaprob.prelude.map.call(null,G__3167,G__3168));
});
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$generative_DASH_source,cljs.core.list(cljs.core.cst$sym$gen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$n,cljs.core.cst$sym$f], null),cljs.core.list(cljs.core.cst$sym$map,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null),cljs.core.list(cljs.core.cst$sym$at,cljs.core.cst$sym$i,cljs.core.cst$sym$f)),cljs.core.list(cljs.core.cst$sym$range,cljs.core.cst$sym$n)))], null));
metaprob.prelude.doall_STAR_ = (function metaprob$prelude$doall_STAR_(s){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.tree_seq(cljs.core.seq_QMARK_,cljs.core.seq,s));

return s;
});
metaprob.prelude.make_primitive = (function metaprob$prelude$make_primitive(sampler,scorer){
return metaprob.generative_functions.make_generative_function.cljs$core$IFn$_invoke$arity$2(sampler,(function (observations){
if(metaprob.trace.trace_has_value_QMARK_.cljs$core$IFn$_invoke$arity$1(observations)){
return metaprob.generative_functions.generative_function_from_traced_code((function (at,apply_at){
return (function() { 
var G__3174__delegate = function (args){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metaprob.trace.trace_value.cljs$core$IFn$_invoke$arity$1(observations),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,metaprob.trace.trace_value.cljs$core$IFn$_invoke$arity$1(observations)], null),(function (){var G__3169 = metaprob.trace.trace_value.cljs$core$IFn$_invoke$arity$1(observations);
var G__3170 = args;
return (scorer.cljs$core$IFn$_invoke$arity$2 ? scorer.cljs$core$IFn$_invoke$arity$2(G__3169,G__3170) : scorer.call(null,G__3169,G__3170));
})()], null);
};
var G__3174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3175__i = 0, G__3175__a = new Array(arguments.length -  0);
while (G__3175__i < G__3175__a.length) {G__3175__a[G__3175__i] = arguments[G__3175__i + 0]; ++G__3175__i;}
  args = new cljs.core.IndexedSeq(G__3175__a,0,null);
} 
return G__3174__delegate.call(this,args);};
G__3174.cljs$lang$maxFixedArity = 0;
G__3174.cljs$lang$applyTo = (function (arglist__3176){
var args = cljs.core.seq(arglist__3176);
return G__3174__delegate(args);
});
G__3174.cljs$core$IFn$_invoke$arity$variadic = G__3174__delegate;
return G__3174;
})()
;
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$generative_DASH_source,cljs.core.list(cljs.core.cst$sym$gen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.cst$sym$args], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$trace_SLASH_trace_DASH_value,cljs.core.cst$sym$observations),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.list(cljs.core.cst$sym$trace_SLASH_trace_DASH_value,cljs.core.cst$sym$observations)], null),cljs.core.list(cljs.core.cst$sym$scorer,cljs.core.list(cljs.core.cst$sym$trace_SLASH_trace_DASH_value,cljs.core.cst$sym$observations),cljs.core.cst$sym$args)], null))], null));
} else {
return metaprob.generative_functions.generative_function_from_traced_code((function (at,apply_at){
return (function() { 
var G__3177__delegate = function (args){
var result = (function (){var G__3171 = cljs.core.List.EMPTY;
var G__3172 = (metaprob.prelude.make_primitive.cljs$core$IFn$_invoke$arity$2 ? metaprob.prelude.make_primitive.cljs$core$IFn$_invoke$arity$2(sampler,scorer) : metaprob.prelude.make_primitive.call(null,sampler,scorer));
var G__3173 = args;
return (apply_at.cljs$core$IFn$_invoke$arity$3 ? apply_at.cljs$core$IFn$_invoke$arity$3(G__3171,G__3172,G__3173) : apply_at.call(null,G__3171,G__3172,G__3173));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,result], null),(0)], null);
};
var G__3177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3178__i = 0, G__3178__a = new Array(arguments.length -  0);
while (G__3178__i < G__3178__a.length) {G__3178__a[G__3178__i] = arguments[G__3178__i + 0]; ++G__3178__i;}
  args = new cljs.core.IndexedSeq(G__3178__a,0,null);
} 
return G__3177__delegate.call(this,args);};
G__3177.cljs$lang$maxFixedArity = 0;
G__3177.cljs$lang$applyTo = (function (arglist__3179){
var args = cljs.core.seq(arglist__3179);
return G__3177__delegate(args);
});
G__3177.cljs$core$IFn$_invoke$arity$variadic = G__3177__delegate;
return G__3177;
})()
;
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$generative_DASH_source,cljs.core.list(cljs.core.cst$sym$gen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.cst$sym$args], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$result,cljs.core.list(cljs.core.cst$sym$apply_DASH_at,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.List.EMPTY),cljs.core.list(cljs.core.cst$sym$make_DASH_primitive,cljs.core.cst$sym$sampler,cljs.core.cst$sym$scorer),cljs.core.cst$sym$args)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$result,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$sym$result], null),(0)], null)))], null));
}
}));
});
metaprob.prelude.infer_and_score = metaprob.generative_functions.generative_function_from_traced_code((function (at,apply_at){
return (function() { 
var G__3185__delegate = function (p__3180){
var map__3181 = p__3180;
var map__3181__$1 = cljs.core.__destructure_map(map__3181);
var procedure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3181__$1,cljs.core.cst$kw$procedure);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__3181__$1,cljs.core.cst$kw$inputs,cljs.core.PersistentVector.EMPTY);
var observation_trace = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__3181__$1,cljs.core.cst$kw$observation_DASH_trace,cljs.core.PersistentArrayMap.EMPTY);
var G__3182 = cljs.core.List.EMPTY;
var G__3183 = metaprob.generative_functions.make_constrained_generator(procedure,observation_trace);
var G__3184 = inputs;
return (apply_at.cljs$core$IFn$_invoke$arity$3 ? apply_at.cljs$core$IFn$_invoke$arity$3(G__3182,G__3183,G__3184) : apply_at.call(null,G__3182,G__3183,G__3184));
};
var G__3185 = function (var_args){
var p__3180 = null;
if (arguments.length > 0) {
var G__3186__i = 0, G__3186__a = new Array(arguments.length -  0);
while (G__3186__i < G__3186__a.length) {G__3186__a[G__3186__i] = arguments[G__3186__i + 0]; ++G__3186__i;}
  p__3180 = new cljs.core.IndexedSeq(G__3186__a,0,null);
} 
return G__3185__delegate.call(this,p__3180);};
G__3185.cljs$lang$maxFixedArity = 0;
G__3185.cljs$lang$applyTo = (function (arglist__3187){
var p__3180 = cljs.core.seq(arglist__3187);
return G__3185__delegate(p__3180);
});
G__3185.cljs$core$IFn$_invoke$arity$variadic = G__3185__delegate;
return G__3185;
})()
;
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$generative_DASH_source,cljs.core.list(cljs.core.cst$sym$gen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$procedure,cljs.core.cst$sym$inputs,cljs.core.cst$sym$observation_DASH_trace], null),cljs.core.cst$kw$or,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$inputs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$sym$observation_DASH_trace,cljs.core.PersistentArrayMap.EMPTY], null)], null)], null),cljs.core.list(cljs.core.cst$sym$apply_DASH_at,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.List.EMPTY),cljs.core.list(cljs.core.cst$sym$make_DASH_constrained_DASH_generator,cljs.core.cst$sym$procedure,cljs.core.cst$sym$observation_DASH_trace),cljs.core.cst$sym$inputs))], null));
