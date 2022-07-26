// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('metaprob.distributions');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('metaprob.prelude');
metaprob.distributions.exactly = metaprob.prelude.make_primitive((function (x){
return x;
}),(function (y,p__3190){
var vec__3191 = p__3190;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3191,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(y,x)){
return metaprob.prelude.negative_infinity;
} else {
return (0);
}
}));
metaprob.distributions.uniform = metaprob.prelude.make_primitive((function (a,b){
return metaprob.prelude.sample_uniform.cljs$core$IFn$_invoke$arity$2(a,b);
}),(function (x,p__3194){
var vec__3195 = p__3194;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3195,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3195,(1),null);
if((((a <= x)) && ((x <= b)))){
return (- metaprob.prelude.log((b - a)));
} else {
return metaprob.prelude.negative_infinity;
}
}));
metaprob.distributions.uniform_discrete = metaprob.prelude.make_primitive((function (items){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,(function (){var G__3199 = (metaprob.prelude.sample_uniform.cljs$core$IFn$_invoke$arity$0() * cljs.core.count(items));
return Math.floor(G__3199);
})());
}),(function (item,p__3200){
var vec__3201 = p__3200;
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3201,(0),null);
return (metaprob.prelude.log(cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__3198_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__3198_SHARP_,item);
}),items))) - metaprob.prelude.log(cljs.core.count(items)));
}));
metaprob.distributions.flip = metaprob.prelude.make_primitive((function (weight){
return (metaprob.prelude.sample_uniform.cljs$core$IFn$_invoke$arity$0() < weight);
}),(function (value,p__3204){
var vec__3205 = p__3204;
var weight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3205,(0),null);
if(cljs.core.truth_(value)){
return metaprob.prelude.log(weight);
} else {
return metaprob.prelude.log1p((- weight));
}
}));
metaprob.distributions.normalize_numbers = (function metaprob$distributions$normalize_numbers(nums){
var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,nums);
var G__3209 = (function (p1__3208_SHARP_){
return (p1__3208_SHARP_ / total);
});
var G__3210 = nums;
return (metaprob.prelude.map.cljs$core$IFn$_invoke$arity$2 ? metaprob.prelude.map.cljs$core$IFn$_invoke$arity$2(G__3209,G__3210) : metaprob.prelude.map.call(null,G__3209,G__3210));
});
metaprob.distributions.categorical = metaprob.prelude.make_primitive((function (probs){
if(cljs.core.map_QMARK_(probs)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(probs),(function (){var G__3212 = metaprob.distributions.normalize_numbers(cljs.core.vals(probs));
return (metaprob.distributions.categorical.cljs$core$IFn$_invoke$arity$1 ? metaprob.distributions.categorical.cljs$core$IFn$_invoke$arity$1(G__3212) : metaprob.distributions.categorical.call(null,G__3212));
})());
} else {
var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,probs);
var r = (metaprob.prelude.sample_uniform.cljs$core$IFn$_invoke$arity$0() * total);
return cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__3211_SHARP_){
return (p1__3211_SHARP_ < r);
}),cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,probs)));
}
}),(function (i,p__3213){
var vec__3214 = p__3213;
var probs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3214,(0),null);
if(cljs.core.map_QMARK_(probs)){
if((!(cljs.core.contains_QMARK_(probs,i)))){
return metaprob.prelude.negative_infinity;
} else {
return (metaprob.prelude.log(cljs.core.get.cljs$core$IFn$_invoke$arity$2(probs,i)) - metaprob.prelude.log(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(probs))));
}
} else {
return metaprob.prelude.log(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(probs,i));
}
}));
metaprob.distributions.logsumexp = (function metaprob$distributions$logsumexp(scores){
var max_score = (metaprob.prelude.apply.cljs$core$IFn$_invoke$arity$2 ? metaprob.prelude.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,scores) : metaprob.prelude.apply.call(null,cljs.core.max,scores));
var weights = (function (){var G__3218 = (function (p1__3217_SHARP_){
var G__3220 = (p1__3217_SHARP_ - max_score);
return Math.exp(G__3220);
});
var G__3219 = scores;
return (metaprob.prelude.map.cljs$core$IFn$_invoke$arity$2 ? metaprob.prelude.map.cljs$core$IFn$_invoke$arity$2(G__3218,G__3219) : metaprob.prelude.map.call(null,G__3218,G__3219));
})();
return ((function (){var G__3221 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,weights);
return Math.log(G__3221);
})() + max_score);
});
metaprob.distributions.logmeanexp = (function metaprob$distributions$logmeanexp(scores){
return (metaprob.distributions.logsumexp(scores) - metaprob.prelude.log(cljs.core.count(scores)));
});
metaprob.distributions.log_scores_to_probabilities = (function metaprob$distributions$log_scores_to_probabilities(scores){
var log_normalizer = metaprob.distributions.logsumexp(scores);
var G__3223 = (function (p1__3222_SHARP_){
var G__3225 = (p1__3222_SHARP_ - log_normalizer);
return Math.exp(G__3225);
});
var G__3224 = scores;
return (metaprob.prelude.map.cljs$core$IFn$_invoke$arity$2 ? metaprob.prelude.map.cljs$core$IFn$_invoke$arity$2(G__3223,G__3224) : metaprob.prelude.map.call(null,G__3223,G__3224));
});
metaprob.distributions.log_categorical = metaprob.prelude.make_primitive((function (scores){
var probs = ((cljs.core.map_QMARK_(scores))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),cljs.core.keys(scores),metaprob.distributions.log_scores_to_probabilities(cljs.core.vals(scores)))):metaprob.distributions.log_scores_to_probabilities(scores));
return (metaprob.distributions.categorical.cljs$core$IFn$_invoke$arity$1 ? metaprob.distributions.categorical.cljs$core$IFn$_invoke$arity$1(probs) : metaprob.distributions.categorical.call(null,probs));
}),(function (i,p__3226){
var vec__3227 = p__3226;
var scores = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3227,(0),null);
var probs = ((cljs.core.map_QMARK_(scores))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),cljs.core.keys(scores),metaprob.distributions.log_scores_to_probabilities(cljs.core.vals(scores)))):metaprob.distributions.log_scores_to_probabilities(scores));
if(cljs.core.map_QMARK_(probs)){
if((!(cljs.core.contains_QMARK_(probs,i)))){
return metaprob.prelude.negative_infinity;
} else {
return (metaprob.prelude.log(cljs.core.get.cljs$core$IFn$_invoke$arity$2(probs,i)) - metaprob.prelude.log(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(probs))));
}
} else {
return metaprob.prelude.log(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(probs,i));
}
}));
metaprob.distributions.generate_gaussian = (function metaprob$distributions$generate_gaussian(mu,sigma){
return (mu + ((sigma * (function (){var G__3230 = ((-2) * (function (){var G__3231 = metaprob.prelude.sample_uniform.cljs$core$IFn$_invoke$arity$0();
return Math.log(G__3231);
})());
return Math.sqrt(G__3230);
})()) * (function (){var G__3232 = (((2) * Math.PI) * metaprob.prelude.sample_uniform.cljs$core$IFn$_invoke$arity$0());
return Math.cos(G__3232);
})()));
});
metaprob.distributions.standard_gaussian_log_density = (function metaprob$distributions$standard_gaussian_log_density(x){
return (-0.5 * ((function (){var G__3233 = ((2) * Math.PI);
return Math.log(G__3233);
})() + (x * x)));
});
metaprob.distributions.score_gaussian = (function metaprob$distributions$score_gaussian(x,p__3234){
var vec__3235 = p__3234;
var mu = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3235,(0),null);
var sigma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3235,(1),null);
return (metaprob.distributions.standard_gaussian_log_density(((x - mu) / sigma)) - Math.log(sigma));
});
metaprob.distributions.gaussian = metaprob.prelude.make_primitive(metaprob.distributions.generate_gaussian,metaprob.distributions.score_gaussian);
metaprob.distributions.geometric = metaprob.prelude.make_primitive((function (p){
var i = (0);
while(true){
if(cljs.core.truth_((metaprob.distributions.flip.cljs$core$IFn$_invoke$arity$1 ? metaprob.distributions.flip.cljs$core$IFn$_invoke$arity$1(p) : metaprob.distributions.flip.call(null,p)))){
var G__3242 = (i + (1));
i = G__3242;
continue;
} else {
return i;
}
break;
}
}),(function (v,p__3238){
var vec__3239 = p__3238;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3239,(0),null);
return (metaprob.prelude.log1p((- p)) + (metaprob.prelude.log(p) * v));
}));
