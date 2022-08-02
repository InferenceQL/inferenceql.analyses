// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('metaprob.generative_functions');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.analyzer');
goog.require('metaprob.code_handlers');
goog.require('metaprob.trace');
metaprob.generative_functions.at = (function metaprob$generative_functions$at(var_args){
var args__4835__auto__ = [];
var len__4829__auto___3107 = arguments.length;
var i__4830__auto___3108 = (0);
while(true){
if((i__4830__auto___3108 < len__4829__auto___3107)){
args__4835__auto__.push((arguments[i__4830__auto___3108]));

var G__3109 = (i__4830__auto___3108 + (1));
i__4830__auto___3108 = G__3109;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return metaprob.generative_functions.at.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(metaprob.generative_functions.at.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(["Assert failed: ","Cannot invoke at outside of a (gen ...) form.","\n","false"].join('')));

}));

(metaprob.generative_functions.at.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(metaprob.generative_functions.at.cljs$lang$applyTo = (function (seq3106){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3106));
}));

metaprob.generative_functions.apply_at = (function metaprob$generative_functions$apply_at(var_args){
var args__4835__auto__ = [];
var len__4829__auto___3111 = arguments.length;
var i__4830__auto___3112 = (0);
while(true){
if((i__4830__auto___3112 < len__4829__auto___3111)){
args__4835__auto__.push((arguments[i__4830__auto___3112]));

var G__3113 = (i__4830__auto___3112 + (1));
i__4830__auto___3112 = G__3113;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return metaprob.generative_functions.apply_at.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(metaprob.generative_functions.apply_at.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(["Assert failed: ","Cannot invoke apply-at outside of a (gen ...) form.","\n","false"].join('')));

}));

(metaprob.generative_functions.apply_at.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(metaprob.generative_functions.apply_at.cljs$lang$applyTo = (function (seq3110){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3110));
}));

metaprob.generative_functions.make_generative_function = (function metaprob$generative_functions$make_generative_function(var_args){
var G__3115 = arguments.length;
switch (G__3115) {
case 2:
return metaprob.generative_functions.make_generative_function.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metaprob.generative_functions.make_generative_function.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metaprob.generative_functions.make_generative_function.cljs$core$IFn$_invoke$arity$2 = (function (run_in_clojure,make_constrained_generator){
return metaprob.generative_functions.make_generative_function.cljs$core$IFn$_invoke$arity$3(run_in_clojure,make_constrained_generator,cljs.core.PersistentArrayMap.EMPTY);
}));

(metaprob.generative_functions.make_generative_function.cljs$core$IFn$_invoke$arity$3 = (function (run_in_clojure,make_constrained_generator,others){
return cljs.core.with_meta(run_in_clojure,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(others,cljs.core.cst$kw$make_DASH_constrained_DASH_generator,make_constrained_generator));
}));

(metaprob.generative_functions.make_generative_function.cljs$lang$maxFixedArity = 3);

metaprob.generative_functions.make_constrained_generator = (function metaprob$generative_functions$make_constrained_generator(procedure,observations){
var fexpr__3117 = (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(procedure),cljs.core.cst$kw$make_DASH_constrained_DASH_generator);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (function (observations__$1){
return (function() { 
var G__3118__delegate = function (args){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(procedure,args),cljs.core.PersistentArrayMap.EMPTY,(0)], null);
};
var G__3118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3119__i = 0, G__3119__a = new Array(arguments.length -  0);
while (G__3119__i < G__3119__a.length) {G__3119__a[G__3119__i] = arguments[G__3119__i + 0]; ++G__3119__i;}
  args = new cljs.core.IndexedSeq(G__3119__a,0,null);
} 
return G__3118__delegate.call(this,args);};
G__3118.cljs$lang$maxFixedArity = 0;
G__3118.cljs$lang$applyTo = (function (arglist__3120){
var args = cljs.core.seq(arglist__3120);
return G__3118__delegate(args);
});
G__3118.cljs$core$IFn$_invoke$arity$variadic = G__3118__delegate;
return G__3118;
})()
;
});
}
})();
return (fexpr__3117.cljs$core$IFn$_invoke$arity$1 ? fexpr__3117.cljs$core$IFn$_invoke$arity$1(observations) : fexpr__3117.call(null,observations));
});
metaprob.generative_functions.generative_function_from_traced_code = (function metaprob$generative_functions$generative_function_from_traced_code(fn_accepting_tracers,metadata){
return metaprob.generative_functions.make_generative_function.cljs$core$IFn$_invoke$arity$3((function (){var G__3121 = (function() { 
var G__3131__delegate = function (addr,proc,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(proc,args);
};
var G__3131 = function (addr,proc,var_args){
var args = null;
if (arguments.length > 2) {
var G__3132__i = 0, G__3132__a = new Array(arguments.length -  2);
while (G__3132__i < G__3132__a.length) {G__3132__a[G__3132__i] = arguments[G__3132__i + 2]; ++G__3132__i;}
  args = new cljs.core.IndexedSeq(G__3132__a,0,null);
} 
return G__3131__delegate.call(this,addr,proc,args);};
G__3131.cljs$lang$maxFixedArity = 2;
G__3131.cljs$lang$applyTo = (function (arglist__3133){
var addr = cljs.core.first(arglist__3133);
arglist__3133 = cljs.core.next(arglist__3133);
var proc = cljs.core.first(arglist__3133);
var args = cljs.core.rest(arglist__3133);
return G__3131__delegate(addr,proc,args);
});
G__3131.cljs$core$IFn$_invoke$arity$variadic = G__3131__delegate;
return G__3131;
})()
;
var G__3122 = (function (addr,proc,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(proc,args);
});
return (fn_accepting_tracers.cljs$core$IFn$_invoke$arity$2 ? fn_accepting_tracers.cljs$core$IFn$_invoke$arity$2(G__3121,G__3122) : fn_accepting_tracers.call(null,G__3121,G__3122));
})(),(function (observations){
var G__3123 = (function (at,apply_at){
return (function() { 
var G__3134__delegate = function (args){
var score = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var trace = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var apply_at_impl = (function (addr,gf,args__$1){
var vec__3125 = (function (){var G__3128 = addr;
var G__3129 = metaprob.generative_functions.make_constrained_generator(gf,metaprob.trace.maybe_subtrace(observations,addr));
var G__3130 = args__$1;
return (apply_at.cljs$core$IFn$_invoke$arity$3 ? apply_at.cljs$core$IFn$_invoke$arity$3(G__3128,G__3129,G__3130) : apply_at.call(null,G__3128,G__3129,G__3130));
})();
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3125,(0),null);
var tr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3125,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3125,(2),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(score,cljs.core._PLUS_,s);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(trace,metaprob.trace.merge_subtrace,addr,tr);

return v;
});
var at_impl = (function() { 
var G__3135__delegate = function (addr,gf,args__$1){
return apply_at_impl(addr,gf,args__$1);
};
var G__3135 = function (addr,gf,var_args){
var args__$1 = null;
if (arguments.length > 2) {
var G__3136__i = 0, G__3136__a = new Array(arguments.length -  2);
while (G__3136__i < G__3136__a.length) {G__3136__a[G__3136__i] = arguments[G__3136__i + 2]; ++G__3136__i;}
  args__$1 = new cljs.core.IndexedSeq(G__3136__a,0,null);
} 
return G__3135__delegate.call(this,addr,gf,args__$1);};
G__3135.cljs$lang$maxFixedArity = 2;
G__3135.cljs$lang$applyTo = (function (arglist__3137){
var addr = cljs.core.first(arglist__3137);
arglist__3137 = cljs.core.next(arglist__3137);
var gf = cljs.core.first(arglist__3137);
var args__$1 = cljs.core.rest(arglist__3137);
return G__3135__delegate(addr,gf,args__$1);
});
G__3135.cljs$core$IFn$_invoke$arity$variadic = G__3135__delegate;
return G__3135;
})()
;
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((fn_accepting_tracers.cljs$core$IFn$_invoke$arity$2 ? fn_accepting_tracers.cljs$core$IFn$_invoke$arity$2(at_impl,apply_at_impl) : fn_accepting_tracers.call(null,at_impl,apply_at_impl)),args);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,cljs.core.deref(trace),cljs.core.deref(score)], null);
};
var G__3134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3138__i = 0, G__3138__a = new Array(arguments.length -  0);
while (G__3138__i < G__3138__a.length) {G__3138__a[G__3138__i] = arguments[G__3138__i + 0]; ++G__3138__i;}
  args = new cljs.core.IndexedSeq(G__3138__a,0,null);
} 
return G__3134__delegate.call(this,args);};
G__3134.cljs$lang$maxFixedArity = 0;
G__3134.cljs$lang$applyTo = (function (arglist__3139){
var args = cljs.core.seq(arglist__3139);
return G__3134__delegate(args);
});
G__3134.cljs$core$IFn$_invoke$arity$variadic = G__3134__delegate;
return G__3134;
})()
;
});
var G__3124 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$make_DASH_constrained_DASH_generator_DASH_impl], null);
return (metaprob.generative_functions.generative_function_from_traced_code.cljs$core$IFn$_invoke$arity$2 ? metaprob.generative_functions.generative_function_from_traced_code.cljs$core$IFn$_invoke$arity$2(G__3123,G__3124) : metaprob.generative_functions.generative_function_from_traced_code.call(null,G__3123,G__3124));
}),metadata);
});
var ret__4878__auto___3143 = (function (){
metaprob.generative_functions.gen = (function metaprob$generative_functions$gen(var_args){
var args__4835__auto__ = [];
var len__4829__auto___3144 = arguments.length;
var i__4830__auto___3145 = (0);
while(true){
if((i__4830__auto___3145 < len__4829__auto___3144)){
args__4835__auto__.push((arguments[i__4830__auto___3145]));

var G__3146 = (i__4830__auto___3145 + (1));
i__4830__auto___3145 = G__3146;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return metaprob.generative_functions.gen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(metaprob.generative_functions.gen.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_){
var expr = _AMPERSAND_form;
var body = metaprob.code_handlers.gen_body(expr);
var name = metaprob.code_handlers.gen_name(expr);
var tracer_name = cljs.core.cst$sym$at;
var apply_tracer_name = cljs.core.cst$sym$apply_DASH_at;
var params = metaprob.code_handlers.gen_pattern(expr);
var thunk_name = (cljs.core.truth_(name)?cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"thunk"].join('')):null);
var named_fn_body = (cljs.core.truth_(name)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,thunk_name,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))))):body);
var innermost_fn_expr = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,params,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([named_fn_body], 0))));
var generative_function_expression = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$metaprob$generative_DASH_functions_SLASH_generative_DASH_function_DASH_from_DASH_traced_DASH_code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,tracer_name,null,(1),null)),(new cljs.core.List(null,apply_tracer_name,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,innermost_fn_expr,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$generative_DASH_source,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null))], 0))))),null,(1),null))], 0))));
if(cljs.core.truth_(name)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,thunk_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,generative_function_expression,null,(1),null))], 0)))),null,(1),null)))));
} else {
return generative_function_expression;
}
}));

(metaprob.generative_functions.gen.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metaprob.generative_functions.gen.cljs$lang$applyTo = (function (seq3140){
var G__3141 = cljs.core.first(seq3140);
var seq3140__$1 = cljs.core.next(seq3140);
var G__3142 = cljs.core.first(seq3140__$1);
var seq3140__$2 = cljs.core.next(seq3140__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3141,G__3142,seq3140__$2);
}));

return null;
})()
;
(metaprob.generative_functions.gen.cljs$lang$macro = true);

var ret__4878__auto___3156 = (function (){
metaprob.generative_functions.let_traced = (function metaprob$generative_functions$let_traced(var_args){
var args__4835__auto__ = [];
var len__4829__auto___3157 = arguments.length;
var i__4830__auto___3158 = (0);
while(true){
if((i__4830__auto___3158 < len__4829__auto___3157)){
args__4835__auto__.push((arguments[i__4830__auto___3158]));

var G__3159 = (i__4830__auto___3158 + (1));
i__4830__auto___3158 = G__3159;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return metaprob.generative_functions.let_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(metaprob.generative_functions.let_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var binding_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var trace_with_name = (function metaprob$generative_functions$trace_with_name(expr,name){
while(true){
if(cljs.core.truth_((metaprob.code_handlers.if_expr_QMARK_.cljs$core$IFn$_invoke$arity$1 ? metaprob.code_handlers.if_expr_QMARK_.cljs$core$IFn$_invoke$arity$1(expr) : metaprob.code_handlers.if_expr_QMARK_.call(null,expr)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,metaprob$generative_functions$trace_with_name((metaprob.code_handlers.if_predicate.cljs$core$IFn$_invoke$arity$1 ? metaprob.code_handlers.if_predicate.cljs$core$IFn$_invoke$arity$1(expr) : metaprob.code_handlers.if_predicate.call(null,expr)),name),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,metaprob$generative_functions$trace_with_name(metaprob.code_handlers.if_then_clause(expr),name),null,(1),null)),(new cljs.core.List(null,metaprob$generative_functions$trace_with_name(metaprob.code_handlers.if_else_clause(expr),name),null,(1),null))], 0))));
} else {
if(cljs.core.truth_((metaprob.code_handlers.do_expr_QMARK_.cljs$core$IFn$_invoke$arity$1 ? metaprob.code_handlers.do_expr_QMARK_.cljs$core$IFn$_invoke$arity$1(expr) : metaprob.code_handlers.do_expr_QMARK_.call(null,expr)))){
return cljs.core.cons(cljs.core.cst$sym$do,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (expr,name,binding_pairs){
return (function (p1__3147_SHARP_){
return metaprob$generative_functions$trace_with_name(p1__3147_SHARP_,name);
});})(expr,name,binding_pairs))
,cljs.core.rest(expr)));
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = (!(cljs.core.seq_QMARK_(expr)));
if(or__4223__auto__){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = cljs.core.special_symbol_QMARK_(cljs.core.first(expr));
if(or__4223__auto____$1){
return or__4223__auto____$1;
} else {
var or__4223__auto____$2 = (metaprob.code_handlers.let_expr_QMARK_.cljs$core$IFn$_invoke$arity$1 ? metaprob.code_handlers.let_expr_QMARK_.cljs$core$IFn$_invoke$arity$1(expr) : metaprob.code_handlers.let_expr_QMARK_.call(null,expr));
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
var or__4223__auto____$3 = (metaprob.code_handlers.let_traced_expr_QMARK_.cljs$core$IFn$_invoke$arity$1 ? metaprob.code_handlers.let_traced_expr_QMARK_.cljs$core$IFn$_invoke$arity$1(expr) : metaprob.code_handlers.let_traced_expr_QMARK_.call(null,expr));
if(cljs.core.truth_(or__4223__auto____$3)){
return or__4223__auto____$3;
} else {
var or__4223__auto____$4 = (metaprob.code_handlers.fn_expr_QMARK_.cljs$core$IFn$_invoke$arity$1 ? metaprob.code_handlers.fn_expr_QMARK_.cljs$core$IFn$_invoke$arity$1(expr) : metaprob.code_handlers.fn_expr_QMARK_.call(null,expr));
if(cljs.core.truth_(or__4223__auto____$4)){
return or__4223__auto____$4;
} else {
return (metaprob.code_handlers.gen_expr_QMARK_.cljs$core$IFn$_invoke$arity$1 ? metaprob.code_handlers.gen_expr_QMARK_.cljs$core$IFn$_invoke$arity$1(expr) : metaprob.code_handlers.gen_expr_QMARK_.call(null,expr));
}
}
}
}
}
})())){
return expr;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.macroexpand_1(_AMPERSAND_env,expr),expr)){
var G__3160 = cljs.analyzer.macroexpand_1(_AMPERSAND_env,expr);
var G__3161 = name;
expr = G__3160;
name = G__3161;
continue;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$at,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0))));

}
}
}
}
break;
}
});
var convert_binding = (function (p__3152){
var vec__3153 = p__3152;
var lhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3153,(0),null);
var rhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3153,(1),null);
if((lhs instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhs,trace_with_name(rhs,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lhs))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhs,rhs], null);
}
});
var new_bindings = cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(convert_binding,binding_pairs)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,new_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(metaprob.generative_functions.let_traced.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(metaprob.generative_functions.let_traced.cljs$lang$applyTo = (function (seq3148){
var G__3149 = cljs.core.first(seq3148);
var seq3148__$1 = cljs.core.next(seq3148);
var G__3150 = cljs.core.first(seq3148__$1);
var seq3148__$2 = cljs.core.next(seq3148__$1);
var G__3151 = cljs.core.first(seq3148__$2);
var seq3148__$3 = cljs.core.next(seq3148__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3149,G__3150,G__3151,seq3148__$3);
}));

return null;
})()
;
(metaprob.generative_functions.let_traced.cljs$lang$macro = true);

