// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.primitive_gpms');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('inferenceql.inference.gpm.primitive_gpms.bernoulli');
goog.require('inferenceql.inference.gpm.primitive_gpms.categorical');
goog.require('inferenceql.inference.gpm.primitive_gpms.gaussian');
/**
 * Checks whether the given GPM is a primitive GPM.
 */
inferenceql.inference.gpm.primitive_gpms.primitive_QMARK_ = (function inferenceql$inference$gpm$primitive_gpms$primitive_QMARK_(stattype){
return ((cljs.core.record_QMARK_(stattype)) && (((inferenceql.inference.gpm.primitive_gpms.bernoulli.bernoulli_QMARK_(stattype)) || (((inferenceql.inference.gpm.primitive_gpms.categorical.categorical_QMARK_(stattype)) || (inferenceql.inference.gpm.primitive_gpms.gaussian.gaussian_QMARK_(stattype)))))));
});
inferenceql.inference.gpm.primitive_gpms.hyper_grid = (function inferenceql$inference$gpm$primitive_gpms$hyper_grid(var_args){
var args__4835__auto__ = [];
var len__4829__auto___3619 = arguments.length;
var i__4830__auto___3620 = (0);
while(true){
if((i__4830__auto___3620 < len__4829__auto___3619)){
args__4835__auto__.push((arguments[i__4830__auto___3620]));

var G__3621 = (i__4830__auto___3620 + (1));
i__4830__auto___3620 = G__3621;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return inferenceql.inference.gpm.primitive_gpms.hyper_grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(inferenceql.inference.gpm.primitive_gpms.hyper_grid.cljs$core$IFn$_invoke$arity$variadic = (function (stattype,data,p__3616){
var map__3617 = p__3616;
var map__3617__$1 = cljs.core.__destructure_map(map__3617);
var n_grid = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__3617__$1,cljs.core.cst$kw$n_DASH_grid,(30));
if(cljs.core.empty_QMARK_(data)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__3618 = stattype;
var G__3618__$1 = (((G__3618 instanceof cljs.core.Keyword))?G__3618.fqn:null);
switch (G__3618__$1) {
case "bernoulli":
return inferenceql.inference.gpm.primitive_gpms.bernoulli.hyper_grid(data,n_grid);

break;
case "categorical":
return inferenceql.inference.gpm.primitive_gpms.categorical.hyper_grid(data,n_grid);

break;
case "gaussian":
return inferenceql.inference.gpm.primitive_gpms.gaussian.hyper_grid(data,n_grid);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["pGPM doesn't exist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stattype)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stattype,stattype,cljs.core.cst$kw$data,data], null));

}
}
}));

(inferenceql.inference.gpm.primitive_gpms.hyper_grid.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(inferenceql.inference.gpm.primitive_gpms.hyper_grid.cljs$lang$applyTo = (function (seq3613){
var G__3614 = cljs.core.first(seq3613);
var seq3613__$1 = cljs.core.next(seq3613);
var G__3615 = cljs.core.first(seq3613__$1);
var seq3613__$2 = cljs.core.next(seq3613__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3614,G__3615,seq3613__$2);
}));

inferenceql.inference.gpm.primitive_gpms.export_category = (function inferenceql$inference$gpm$primitive_gpms$export_category(stattype,category){
var G__3623 = stattype;
var G__3623__$1 = (((G__3623 instanceof cljs.core.Keyword))?G__3623.fqn:null);
switch (G__3623__$1) {
case "bernoulli":
return inferenceql.inference.gpm.primitive_gpms.bernoulli.export$(category);

break;
case "categorical":
return inferenceql.inference.gpm.primitive_gpms.categorical.export$(category);

break;
case "gaussian":
return inferenceql.inference.gpm.primitive_gpms.gaussian.export$(category);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["pGPM doesn't exist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stattype)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stattype,stattype], null));

}
});
/**
 * Cast a spec to the specified pGPM.
 *   Optionally takes suff-stats, hyperparameters, and options, by key.
 */
inferenceql.inference.gpm.primitive_gpms.__GT_pGPM = (function inferenceql$inference$gpm$primitive_gpms$__GT_pGPM(var_args){
var args__4835__auto__ = [];
var len__4829__auto___3631 = arguments.length;
var i__4830__auto___3632 = (0);
while(true){
if((i__4830__auto___3632 < len__4829__auto___3631)){
args__4835__auto__.push((arguments[i__4830__auto___3632]));

var G__3633 = (i__4830__auto___3632 + (1));
i__4830__auto___3632 = G__3633;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return inferenceql.inference.gpm.primitive_gpms.__GT_pGPM.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(inferenceql.inference.gpm.primitive_gpms.__GT_pGPM.cljs$core$IFn$_invoke$arity$variadic = (function (primitive,var_name,p__3628){
var map__3629 = p__3628;
var map__3629__$1 = cljs.core.__destructure_map(map__3629);
var suff_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3629__$1,cljs.core.cst$kw$suff_DASH_stats);
var hyperparameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3629__$1,cljs.core.cst$kw$hyperparameters);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3629__$1,cljs.core.cst$kw$options);
var G__3630 = primitive;
var G__3630__$1 = (((G__3630 instanceof cljs.core.Keyword))?G__3630.fqn:null);
switch (G__3630__$1) {
case "bernoulli":
return inferenceql.inference.gpm.primitive_gpms.bernoulli.spec__GT_bernoulli.cljs$core$IFn$_invoke$arity$variadic(var_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$suff_DASH_stats,suff_stats,cljs.core.cst$kw$hyperparameters,hyperparameters], 0));

break;
case "categorical":
return inferenceql.inference.gpm.primitive_gpms.categorical.spec__GT_categorical.cljs$core$IFn$_invoke$arity$variadic(var_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$suff_DASH_stats,suff_stats,cljs.core.cst$kw$hyperparameters,hyperparameters,cljs.core.cst$kw$options,options], 0));

break;
case "gaussian":
return inferenceql.inference.gpm.primitive_gpms.gaussian.spec__GT_gaussian.cljs$core$IFn$_invoke$arity$variadic(var_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$suff_DASH_stats,suff_stats,cljs.core.cst$kw$hyperparameters,hyperparameters], 0));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["pGPM doesn't exist for var-name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(primitive)," for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$primitive,primitive], null));

}
}));

(inferenceql.inference.gpm.primitive_gpms.__GT_pGPM.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(inferenceql.inference.gpm.primitive_gpms.__GT_pGPM.cljs$lang$applyTo = (function (seq3625){
var G__3626 = cljs.core.first(seq3625);
var seq3625__$1 = cljs.core.next(seq3625);
var G__3627 = cljs.core.first(seq3625__$1);
var seq3625__$2 = cljs.core.next(seq3625__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3626,G__3627,seq3625__$2);
}));

