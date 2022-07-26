// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
inferenceql.inference.utils.normalize = (function inferenceql$inference$utils$normalize(weights){
var total = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,weights);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3337_SHARP_){
return (p1__3337_SHARP_ / total);
}),weights);
});
inferenceql.inference.utils.abs = (function inferenceql$inference$utils$abs(n){
var x__4306__auto__ = n;
var y__4307__auto__ = (- n);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
});
inferenceql.inference.utils.all_QMARK_ = (function inferenceql$inference$utils$all_QMARK_(l){
return cljs.core.every_QMARK_(cljs.core.identity,l);
});
inferenceql.inference.utils.relerr = (function inferenceql$inference$utils$relerr(a,b){
return inferenceql.inference.utils.abs((a - b));
});
inferenceql.inference.utils.col = (function inferenceql$inference$utils$col(col_key,table){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,col_key);
}),table);
});
inferenceql.inference.utils.average = (function inferenceql$inference$utils$average(column){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,column) / cljs.core.count(column));
});
inferenceql.inference.utils.square = (function inferenceql$inference$utils$square(x){
return (x * x);
});
inferenceql.inference.utils.variance = (function inferenceql$inference$utils$variance(a){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(a))){
return (0);
} else {
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inferenceql.inference.utils.square,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,a,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(inferenceql.inference.utils.average(a))))) / (cljs.core.count(a) - (1)));
}
});
inferenceql.inference.utils.std = (function inferenceql$inference$utils$std(a){
var G__3338 = inferenceql.inference.utils.variance(a);
return Math.sqrt(G__3338);
});
inferenceql.inference.utils.column_subset = (function inferenceql$inference$utils$column_subset(data,columns){
var row_subset = (function (row){
return cljs.core.select_keys(row,columns);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row_subset,data);
});
/**
 * Returns true if scalars `a` and `b` are approximately equal. Takes a distance
 *   metric (presumably from `inferenceql.metrics`) as its second argument. An example
 *   for a distance metric is Euclidean distance.
 */
inferenceql.inference.utils.almost_equal_QMARK_ = (function inferenceql$inference$utils$almost_equal_QMARK_(a,b,difference_metric,threshold){
return ((difference_metric.cljs$core$IFn$_invoke$arity$2 ? difference_metric.cljs$core$IFn$_invoke$arity$2(a,b) : difference_metric.call(null,a,b)) < threshold);
});
/**
 * Returns true if vectors `a` and `b` are approximately equal. Takes a difference
 *   metric (presumably from `inferenceql.metrics`) as its second argument.
 */
inferenceql.inference.utils.almost_equal_vectors_QMARK_ = (function inferenceql$inference$utils$almost_equal_vectors_QMARK_(a,b,difference_metric,threshold){
if(cljs.core.truth_(cljs.core.count(a))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(b)),"\n","(count a)"].join('')));
}

var call_almost_equal = (function (i){
return inferenceql.inference.utils.almost_equal_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,i),difference_metric,threshold);
});
return inferenceql.inference.utils.all_QMARK_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(call_almost_equal,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(a))));
});
/**
 * Returns true if maps `a` and `b` are approximately equal. Takes a distance
 *   metric (presumably from `inferenceql.metrics`) as its second argument.
 */
inferenceql.inference.utils.almost_equal_maps_QMARK_ = (function inferenceql$inference$utils$almost_equal_maps_QMARK_(a,b,distance_metric,threshold){
var ks = cljs.core.keys(a);
return inferenceql.inference.utils.almost_equal_vectors_QMARK_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3339_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,p1__3339_SHARP_);
}),ks),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3340_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,p1__3340_SHARP_);
}),ks),distance_metric,threshold);
});
inferenceql.inference.utils.within_factor_QMARK_ = (function inferenceql$inference$utils$within_factor_QMARK_(a,b,factor){
return ((((b / factor) <= a)) && ((a <= (b * factor))));
});
inferenceql.inference.utils.probability_for_observed_categories = (function inferenceql$inference$utils$probability_for_observed_categories(sample_vector){
var fraction = (function (item){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(cljs.core.vals(cljs.core.first(item))),(cljs.core.second(item) / cljs.core.count(sample_vector))]);
});
var occurences = cljs.core.frequencies(sample_vector);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(fraction,occurences));
});
inferenceql.inference.utils.probability_for_categories = (function inferenceql$inference$utils$probability_for_categories(sample_vector,categories){
var observed = inferenceql.inference.utils.probability_for_observed_categories(sample_vector);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(observed,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (category){
if(cljs.core.contains_QMARK_(observed,category)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,0.0], null);
}
}),categories));
});
inferenceql.inference.utils.probability_vector = (function inferenceql$inference$utils$probability_vector(samples,possible_values){
var probability_map = inferenceql.inference.utils.probability_for_observed_categories(samples);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3341_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(probability_map,p1__3341_SHARP_,(0));
}),possible_values);
});
inferenceql.inference.utils.equal_sample_values = (function inferenceql$inference$utils$equal_sample_values(samples_1,samples_2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.vals),samples_1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.vals),samples_2));
});
/**
 * Returns the index of the maximum value in the provided vector.
 */
inferenceql.inference.utils.max_index = (function inferenceql$inference$utils$max_index(xs){
return cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.second,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,xs)));
});
inferenceql.inference.utils.pos_float_QMARK_ = (function inferenceql$inference$utils$pos_float_QMARK_(value){
return (((value > (0))) && (cljs.core.float_QMARK_(value)));
});
/**
 * Runs `n` parallel calls to function `f`, that is assumed to have
 *   no arguments.
 */
inferenceql.inference.utils.prun = (function inferenceql$inference$utils$prun(n,f){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,f);
});
/**
 * Applies the standard tranpose operation to a collection. Assumes that
 *   `coll` is an object capable of having a transpose.
 */
inferenceql.inference.utils.transpose = (function inferenceql$inference$utils$transpose(coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,coll);
});
/**
 * Log-sum-exp operation for summing log probabilities without
 *   leaving the log domain.
 */
inferenceql.inference.utils.logsumexp = (function inferenceql$inference$utils$logsumexp(log_ps){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(log_ps))){
return cljs.core.first(log_ps);
} else {
var log_ps_sorted = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,log_ps);
var a0 = cljs.core.first(log_ps_sorted);
var tail = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),log_ps_sorted);
var res = (a0 + (function (){var G__3343 = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3342_SHARP_){
var G__3344 = (p1__3342_SHARP_ - a0);
return Math.exp(G__3344);
}),tail)) + (1));
return Math.log(G__3343);
})());
if(cljs.core.truth_(isNaN(res))){
return -Infinity;
} else {
return res;
}
}
});
/**
 * Generates a sequence of `n` numbers, linearly (evenly) spaced between `start` and `end`,
 *   the latter of which is exclusive.
 */
inferenceql.inference.utils.linspace = (function inferenceql$inference$utils$linspace(start,end,n){
var interval = ((end - start) / n);
return cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,(end + interval),interval);
});
/**
 * Generates a sequence of `n` numbers, spaced between `start` and `end` on a logarithmic scale,
 *   where `end` is excluded from the range.
 */
inferenceql.inference.utils.log_linspace = (function inferenceql$inference$utils$log_linspace(start,end,n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,start,null,(1),null)))));
} else {
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3345_SHARP_){
return Math.exp(p1__3345_SHARP_);
}),inferenceql.inference.utils.linspace(Math.log(start),Math.log(end),n)));
}
});
/**
 * Normalize a vector of log probabilities, while staying in the log domain.
 */
inferenceql.inference.utils.log_normalize = (function inferenceql$inference$utils$log_normalize(weights){
if(cljs.core.map_QMARK_(weights)){
var z = inferenceql.inference.utils.logsumexp(cljs.core.vals(weights));
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(v - z));
}),cljs.core.PersistentArrayMap.EMPTY,weights);
} else {
var z = inferenceql.inference.utils.logsumexp(weights);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3346_SHARP_){
return (p1__3346_SHARP_ - z);
}),weights);
}
});
