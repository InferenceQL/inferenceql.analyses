// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.primitives');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('inferenceql.inference.utils');
goog.require('inferenceql.inference.distributions');
/**
 * Returns the log of `x` under a gamma function.
 */
inferenceql.inference.primitives.gammaln = (function inferenceql$inference$primitives$gammaln(x){
if(cljs.core.not(x)){
return (0);
} else {
return inferenceql.inference.distributions.log_gamma(x);
}
});
/**
 * Computes the natural log of the beta function.
 *   Assumes both arguments are greater than zero.
 */
inferenceql.inference.primitives.betaln = (function inferenceql$inference$primitives$betaln(x,y){
return ((inferenceql.inference.primitives.gammaln(x) + inferenceql.inference.primitives.gammaln(y)) + (- inferenceql.inference.primitives.gammaln((x + y))));
});
/**
 * Returns log probability of `x` under a bernoulli distribution parameterized
 *   by `p`.
 */
inferenceql.inference.primitives.bernoulli_logpdf = (function inferenceql$inference$primitives$bernoulli_logpdf(x,p__3349){
var map__3350 = p__3349;
var map__3350__$1 = cljs.core.__destructure_map(map__3350);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3350__$1,cljs.core.cst$kw$p);
if(cljs.core.truth_(x)){
return Math.log(p);
} else {
var G__3351 = ((1) - p);
return Math.log(G__3351);
}
});
/**
 * Generates a sample from a bernoulli distribution with parameter `p`.
 *   Generates `n` samples, if specified.
 */
inferenceql.inference.primitives.bernoulli_simulate = (function inferenceql$inference$primitives$bernoulli_simulate(var_args){
var G__3353 = arguments.length;
switch (G__3353) {
case 1:
return inferenceql.inference.primitives.bernoulli_simulate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return inferenceql.inference.primitives.bernoulli_simulate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.primitives.bernoulli_simulate.cljs$core$IFn$_invoke$arity$1 = (function (p__3354){
var map__3355 = p__3354;
var map__3355__$1 = cljs.core.__destructure_map(map__3355);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3355__$1,cljs.core.cst$kw$p);
var flip = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
return (flip < p);
}));

(inferenceql.inference.primitives.bernoulli_simulate.cljs$core$IFn$_invoke$arity$2 = (function (n,p){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return inferenceql.inference.primitives.bernoulli_simulate.cljs$core$IFn$_invoke$arity$1(p);
}));
}));

(inferenceql.inference.primitives.bernoulli_simulate.cljs$lang$maxFixedArity = 2);

/**
 * Returns log probability of `x` under a gaussian distribution parameterized
 *   by shape parameter `mu`, with optional scale parameter `sigma`.
 */
inferenceql.inference.primitives.gaussian_logpdf = (function inferenceql$inference$primitives$gaussian_logpdf(x,p__3357){
var map__3358 = p__3357;
var map__3358__$1 = cljs.core.__destructure_map(map__3358);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3358__$1,cljs.core.cst$kw$mu);
var sigma = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3358__$1,cljs.core.cst$kw$sigma);
var z_inv = (-0.5 * ((Math.log(sigma) + Math.log((2))) + Math.log(Math.PI)));
var px = (-0.5 * (function (){var G__3359 = ((x - mu) / sigma);
var G__3360 = (2);
return Math.pow(G__3359,G__3360);
})());
return (z_inv + px);
});
/**
 * Generates a sample from a dirichlet distribution with vector parameter `alpha`.
 *   Based on a Box-Muller transform.
 *   Generates `n` samples, if specified.
 */
inferenceql.inference.primitives.gaussian_simulate = (function inferenceql$inference$primitives$gaussian_simulate(var_args){
var G__3362 = arguments.length;
switch (G__3362) {
case 1:
return inferenceql.inference.primitives.gaussian_simulate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return inferenceql.inference.primitives.gaussian_simulate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.primitives.gaussian_simulate.cljs$core$IFn$_invoke$arity$1 = (function (p__3363){
var map__3364 = p__3363;
var map__3364__$1 = cljs.core.__destructure_map(map__3364);
var mu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3364__$1,cljs.core.cst$kw$mu);
var sigma = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3364__$1,cljs.core.cst$kw$sigma);
var u1 = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var u2 = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var z0 = ((function (){var G__3365 = ((-2) * Math.log(u1));
return Math.sqrt(G__3365);
})() * (function (){var G__3366 = (((2) * Math.PI) * u2);
return Math.cos(G__3366);
})());
return ((z0 * sigma) + mu);
}));

(inferenceql.inference.primitives.gaussian_simulate.cljs$core$IFn$_invoke$arity$2 = (function (n,parameters){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return inferenceql.inference.primitives.gaussian_simulate.cljs$core$IFn$_invoke$arity$1(parameters);
}));
}));

(inferenceql.inference.primitives.gaussian_simulate.cljs$lang$maxFixedArity = 2);

/**
 * Returns log probability of `x` under a gamma distribution parameterized
 *   by shape parameter `k`, with optional scale parameter `theta`.
 */
inferenceql.inference.primitives.gamma_logpdf = (function inferenceql$inference$primitives$gamma_logpdf(x,p__3368){
var map__3369 = p__3368;
var map__3369__$1 = cljs.core.__destructure_map(map__3369);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3369__$1,cljs.core.cst$kw$k);
var theta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3369__$1,cljs.core.cst$kw$theta);
var z_inv = (- (inferenceql.inference.primitives.gammaln(k) + (k * Math.log(theta))));
var px = (((k - (1)) * Math.log(x)) - (x / theta));
return (z_inv + px);
});
/**
 * An implementation of Marsaglia & Tang, 2000: A Simple Method for Generating Gamma Variables.
 *   Based on the javascript implementation found in WebPPL.
 * 
 *   This function works in CLJ as well as CLJS for testing purposes--although it is intened that
 *   we only use it in CLJS in practice.
 */
inferenceql.inference.primitives.gamma_simulate_webppl = (function inferenceql$inference$primitives$gamma_simulate_webppl(p__3370){
var map__3371 = p__3370;
var map__3371__$1 = cljs.core.__destructure_map(map__3371);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3371__$1,cljs.core.cst$kw$k);
var theta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3371__$1,cljs.core.cst$kw$theta);
if((k < (1))){
var r = ((function (){var G__3372 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$k,((1) + k),cljs.core.cst$kw$theta,theta], null);
return (inferenceql.inference.primitives.gamma_simulate_webppl.cljs$core$IFn$_invoke$arity$1 ? inferenceql.inference.primitives.gamma_simulate_webppl.cljs$core$IFn$_invoke$arity$1(G__3372) : inferenceql.inference.primitives.gamma_simulate_webppl.call(null,G__3372));
})() * (function (){var G__3373 = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var G__3374 = ((1) / k);
return Math.pow(G__3373,G__3374);
})());
var ret_val = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,(0)))?Number.MIN_VALUE:r);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,(0))){
var msg_3379 = ["gamma-simulate underflow. Rounded result to nearest ","representable support value"].join('');
console.warn(msg_3379);
} else {
}

return ret_val;
} else {
var d = (k - ((1) / (3)));
var c = ((1) / (function (){var G__3375 = ((9) * d);
return Math.sqrt(G__3375);
})());
while(true){
var vec__3376 = (function (){while(true){
var x = inferenceql.inference.primitives.gaussian_simulate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mu,(0),cljs.core.cst$kw$sigma,(1)], null));
var v = ((1) + (c * x));
if((v <= (0))){
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,v], null);
}
break;
}
})();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3376,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3376,(1),null);
var v__$1 = ((v * v) * v);
var u = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
if((((u < ((1) - ((((0.331 * x) * x) * x) * x)))) || ((Math.log(u) < (((0.5 * x) * x) + (d * (((1) + (- v__$1)) + Math.log(v__$1)))))))){
return ((theta * d) * v__$1);
} else {
continue;
}
break;
}
}
});
inferenceql.inference.primitives.gamma_simulate = (function inferenceql$inference$primitives$gamma_simulate(var_args){
var G__3381 = arguments.length;
switch (G__3381) {
case 1:
return inferenceql.inference.primitives.gamma_simulate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return inferenceql.inference.primitives.gamma_simulate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.primitives.gamma_simulate.cljs$core$IFn$_invoke$arity$1 = (function (p__3382){
var map__3383 = p__3382;
var map__3383__$1 = cljs.core.__destructure_map(map__3383);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3383__$1,cljs.core.cst$kw$k);
var theta = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__3383__$1,cljs.core.cst$kw$theta,(1));
return inferenceql.inference.primitives.gamma_simulate_webppl(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$k,k,cljs.core.cst$kw$theta,theta], null));
}));

(inferenceql.inference.primitives.gamma_simulate.cljs$core$IFn$_invoke$arity$2 = (function (n,params){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return inferenceql.inference.primitives.gamma_simulate.cljs$core$IFn$_invoke$arity$1(params);
}));
}));

(inferenceql.inference.primitives.gamma_simulate.cljs$lang$maxFixedArity = 2);

/**
 * Returns log probability of `x` under a beta distribution parameterized by
 *   `alpha` and `beta`.
 */
inferenceql.inference.primitives.beta_logpdf = (function inferenceql$inference$primitives$beta_logpdf(x,p__3385){
var map__3386 = p__3385;
var map__3386__$1 = cljs.core.__destructure_map(map__3386);
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3386__$1,cljs.core.cst$kw$alpha);
var beta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3386__$1,cljs.core.cst$kw$beta);
if((((alpha > (0))) && ((beta > (0))))){
} else {
throw (new Error(["Assert failed: ",["alpha and beta must be positive (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(beta),")"].join(''),"\n","(and (pos? alpha) (pos? beta))"].join('')));
}

var k = (inferenceql.inference.primitives.gammaln((alpha + beta)) - (inferenceql.inference.primitives.gammaln(alpha) + inferenceql.inference.primitives.gammaln(beta)));
var c = (alpha - (1));
var d = (beta - (1));
return ((k + (c * Math.log(x))) + (d * (function (){var G__3387 = ((1) - x);
return Math.log(G__3387);
})()));
});
/**
 * Generates a sample from a beta distribution with parameters `alpha` and `beta`.
 *   Based on the method specified in Section I, of 'Generating Gamma and Beta Random Variables
 *   with Non-Integral Shape Parameters' by J Whittaker, at https://www.jstor.org/stable/pdf/2347003.pdf?seq=1 .
 *   Generates `n` samples, if specified.
 */
inferenceql.inference.primitives.beta_simulate = (function inferenceql$inference$primitives$beta_simulate(var_args){
var G__3389 = arguments.length;
switch (G__3389) {
case 1:
return inferenceql.inference.primitives.beta_simulate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return inferenceql.inference.primitives.beta_simulate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.primitives.beta_simulate.cljs$core$IFn$_invoke$arity$1 = (function (p__3390){
var map__3391 = p__3390;
var map__3391__$1 = cljs.core.__destructure_map(map__3391);
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3391__$1,cljs.core.cst$kw$alpha);
var beta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3391__$1,cljs.core.cst$kw$beta);
var x1 = inferenceql.inference.primitives.gamma_simulate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,alpha], null));
var x2 = inferenceql.inference.primitives.gamma_simulate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,beta], null));
return (x1 / (x1 + x2));
}));

(inferenceql.inference.primitives.beta_simulate.cljs$core$IFn$_invoke$arity$2 = (function (n,parameters){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return inferenceql.inference.primitives.beta_simulate.cljs$core$IFn$_invoke$arity$1(parameters);
}));
}));

(inferenceql.inference.primitives.beta_simulate.cljs$lang$maxFixedArity = 2);

/**
 * Log PDF for categorical distribution.
 */
inferenceql.inference.primitives.categorical_logpdf = (function inferenceql$inference$primitives$categorical_logpdf(x,p__3393){
var map__3394 = p__3393;
var map__3394__$1 = cljs.core.__destructure_map(map__3394);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3394__$1,cljs.core.cst$kw$p);
var prob = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,x);
if((((prob === (0))) || ((prob == null)))){
return -Infinity;
} else {
return Math.log(prob);
}
});
/**
 * Generates a sample from a categorical distribution with vector parameters `p`.
 *   Generates `n` samples, if specified.
 */
inferenceql.inference.primitives.categorical_simulate = (function inferenceql$inference$primitives$categorical_simulate(var_args){
var G__3397 = arguments.length;
switch (G__3397) {
case 1:
return inferenceql.inference.primitives.categorical_simulate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return inferenceql.inference.primitives.categorical_simulate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.primitives.categorical_simulate.cljs$core$IFn$_invoke$arity$1 = (function (p__3398){
var map__3399 = p__3398;
var map__3399__$1 = cljs.core.__destructure_map(map__3399);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3399__$1,cljs.core.cst$kw$p);
var p_sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.last,p);
var cdf = cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__3400,p__3401){
var vec__3402 = p__3400;
var total = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3402,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3402,(1),null);
var vec__3405 = p__3401;
var variable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3405,(0),null);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3405,(1),null);
var new_p = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total,(0)))?p__$1:(total + p__$1));
var new_entry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [variable,new_p], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,new_entry)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY], null),p_sorted));
var flip = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
return cljs.core.ffirst(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__3395_SHARP_){
return (cljs.core.second(p1__3395_SHARP_) < flip);
}),cdf));
}));

(inferenceql.inference.primitives.categorical_simulate.cljs$core$IFn$_invoke$arity$2 = (function (n,parameters){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return inferenceql.inference.primitives.categorical_simulate.cljs$core$IFn$_invoke$arity$1(parameters);
}));
}));

(inferenceql.inference.primitives.categorical_simulate.cljs$lang$maxFixedArity = 2);

/**
 * Log PDF for categorical distribution parameterized by log probabilities.
 */
inferenceql.inference.primitives.log_categorical_logpdf = (function inferenceql$inference$primitives$log_categorical_logpdf(x,p__3409){
var map__3410 = p__3409;
var map__3410__$1 = cljs.core.__destructure_map(map__3410);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3410__$1,cljs.core.cst$kw$p);
var prob = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,x);
if((prob == null)){
return -Infinity;
} else {
return prob;
}
});
/**
 * Generates a sample from a categorical distribution with parameters `ps`,
 *   which are log probabilities.
 *   Generates `n` samples, if specified.
 */
inferenceql.inference.primitives.log_categorical_simulate = (function inferenceql$inference$primitives$log_categorical_simulate(var_args){
var G__3413 = arguments.length;
switch (G__3413) {
case 1:
return inferenceql.inference.primitives.log_categorical_simulate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return inferenceql.inference.primitives.log_categorical_simulate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.primitives.log_categorical_simulate.cljs$core$IFn$_invoke$arity$1 = (function (p__3414){
var map__3415 = p__3414;
var map__3415__$1 = cljs.core.__destructure_map(map__3415);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3415__$1,cljs.core.cst$kw$p);
var p_sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.last,p);
var cdf = cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__3416,p__3417){
var vec__3418 = p__3416;
var total = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3418,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3418,(1),null);
var vec__3421 = p__3417;
var variable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3421,(0),null);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3421,(1),null);
var new_p = (((total === (0)))?p__$1:(inferenceql.inference.utils.logsumexp(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [total,p__$1], null))));
var new_entry = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [variable,new_p], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,new_entry)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY], null),p_sorted));
var flip = (function (){var G__3424 = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
return Math.log(G__3424);
})();
return cljs.core.ffirst(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__3411_SHARP_){
return (cljs.core.second(p1__3411_SHARP_) < flip);
}),cdf));
}));

(inferenceql.inference.primitives.log_categorical_simulate.cljs$core$IFn$_invoke$arity$2 = (function (n,p){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return inferenceql.inference.primitives.log_categorical_simulate.cljs$core$IFn$_invoke$arity$1(p);
}));
}));

(inferenceql.inference.primitives.log_categorical_simulate.cljs$lang$maxFixedArity = 2);

/**
 * Returns log probability of table counts `x` under a Chinese Restaurant Process
 *   parameterized by a number `alpha`.
 */
inferenceql.inference.primitives.crp_logpdf = (function inferenceql$inference$primitives$crp_logpdf(x,p__3427){
var map__3428 = p__3427;
var map__3428__$1 = cljs.core.__destructure_map(map__3428);
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3428__$1,cljs.core.cst$kw$alpha);
var n = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,x);
var p_tilde = ((cljs.core.count(x) * Math.log(alpha)) + cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3426_SHARP_){
return inferenceql.inference.primitives.gammaln(p1__3426_SHARP_);
}),x)));
var z = (inferenceql.inference.primitives.gammaln((n + alpha)) - inferenceql.inference.primitives.gammaln(alpha));
return (p_tilde - z);
});
/**
 * Simulates n customers of a Chinese Restaurant Process parameterized by
 *   the concentration parameter `alpha`.
 *   Returns a vector of [table-counts customer-assignments].
 */
inferenceql.inference.primitives.crp_simulate = (function inferenceql$inference$primitives$crp_simulate(var_args){
var G__3431 = arguments.length;
switch (G__3431) {
case 1:
return inferenceql.inference.primitives.crp_simulate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return inferenceql.inference.primitives.crp_simulate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.primitives.crp_simulate.cljs$core$IFn$_invoke$arity$1 = (function (p__3432){
var map__3433 = p__3432;
var map__3433__$1 = cljs.core.__destructure_map(map__3433);
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3433__$1,cljs.core.cst$kw$alpha);
return inferenceql.inference.primitives.crp_simulate.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alpha,alpha], null));
}));

(inferenceql.inference.primitives.crp_simulate.cljs$core$IFn$_invoke$arity$2 = (function (n,p__3434){
var map__3435 = p__3434;
var map__3435__$1 = cljs.core.__destructure_map(map__3435);
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3435__$1,cljs.core.cst$kw$alpha);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__3436,_){
var vec__3437 = p__3436;
var counts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3437,(0),null);
var assignments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3437,(1),null);
var probs_tilde = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(counts,alpha);
var z = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,probs_tilde);
var probs = cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3429_SHARP_){
return (p1__3429_SHARP_ / z);
}),probs_tilde));
var c_i = inferenceql.inference.primitives.categorical_simulate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,probs], null));
var assignments_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(assignments,c_i);
var counts_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$3(counts,c_i,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counts_SINGLEQUOTE_,assignments_SINGLEQUOTE_], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),n));
}));

(inferenceql.inference.primitives.crp_simulate.cljs$lang$maxFixedArity = 2);

/**
 * Simulates a table assignment from a CRP with the given concentration parameter
 *   `alpha`. `counts` must be a coll of integers.
 */
inferenceql.inference.primitives.crp_simulate_counts = (function inferenceql$inference$primitives$crp_simulate_counts(p__3441){
var map__3442 = p__3441;
var map__3442__$1 = cljs.core.__destructure_map(map__3442);
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3442__$1,cljs.core.cst$kw$alpha);
var counts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3442__$1,cljs.core.cst$kw$counts);
var probs_tilde = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(counts,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),alpha);
var z = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(probs_tilde));
var probs = cljs.core.reduce_kv((function (p,category,cnt){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,category,(cnt / z));
}),cljs.core.PersistentArrayMap.EMPTY,probs_tilde);
return inferenceql.inference.primitives.categorical_simulate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,probs], null));
});
/**
 * Returns log probability of `x` under a dirichlet distribution parameterized by
 *   a vector `alpha`.
 */
inferenceql.inference.primitives.dirichlet_logpdf = (function inferenceql$inference$primitives$dirichlet_logpdf(x,p__3443){
var map__3444 = p__3443;
var map__3444__$1 = cljs.core.__destructure_map(map__3444);
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3444__$1,cljs.core.cst$kw$alpha);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(alpha),cljs.core.count(x))){
} else {
throw (new Error(["Assert failed: ","alpha and x must have same length","\n","(= (count alpha) (count x))"].join('')));
}

var z_inv = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inferenceql.inference.primitives.gammaln,alpha)) - inferenceql.inference.primitives.gammaln(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,alpha)));
var logDirichlet = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (alpha_k,x_k){
return ((alpha_k - (1)) * Math.log(x_k));
}),alpha,x));
return (z_inv + logDirichlet);
});
/**
 * Generates a sample from a dirichlet distribution with vector parameter `alpha`.
 *   Generates `n` samples, if specified.
 */
inferenceql.inference.primitives.dirichlet_simulate = (function inferenceql$inference$primitives$dirichlet_simulate(var_args){
var G__3448 = arguments.length;
switch (G__3448) {
case 1:
return inferenceql.inference.primitives.dirichlet_simulate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return inferenceql.inference.primitives.dirichlet_simulate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.primitives.dirichlet_simulate.cljs$core$IFn$_invoke$arity$1 = (function (p__3449){
var map__3450 = p__3449;
var map__3450__$1 = cljs.core.__destructure_map(map__3450);
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3450__$1,cljs.core.cst$kw$alpha);
var y = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3445_SHARP_){
return inferenceql.inference.primitives.gamma_simulate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$k,p1__3445_SHARP_,cljs.core.cst$kw$theta,(1)], null));
}),alpha);
var z = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,y);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__3446_SHARP_){
return (p1__3446_SHARP_ / z);
}),y);
}));

(inferenceql.inference.primitives.dirichlet_simulate.cljs$core$IFn$_invoke$arity$2 = (function (n,parameters){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return inferenceql.inference.primitives.dirichlet_simulate.cljs$core$IFn$_invoke$arity$1(parameters);
}));
}));

(inferenceql.inference.primitives.dirichlet_simulate.cljs$lang$maxFixedArity = 2);

/**
 * Given a primitive, its parameters, returns the log probability of
 *   `x` under said primitive.
 */
inferenceql.inference.primitives.logpdf = (function inferenceql$inference$primitives$logpdf(var_args){
var G__3453 = arguments.length;
switch (G__3453) {
case 3:
return inferenceql.inference.primitives.logpdf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return inferenceql.inference.primitives.logpdf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.primitives.logpdf.cljs$core$IFn$_invoke$arity$3 = (function (x,primitive,parameters){
var G__3454 = primitive;
var G__3454__$1 = (((G__3454 instanceof cljs.core.Keyword))?G__3454.fqn:null);
switch (G__3454__$1) {
case "bernoulli":
return inferenceql.inference.primitives.bernoulli_logpdf(x,parameters);

break;
case "beta":
return inferenceql.inference.primitives.beta_logpdf(x,parameters);

break;
case "categorical":
return inferenceql.inference.primitives.categorical_logpdf(x,parameters);

break;
case "crp":
return inferenceql.inference.primitives.crp_logpdf(x,parameters);

break;
case "dirichlet":
return inferenceql.inference.primitives.dirichlet_logpdf(x,parameters);

break;
case "gamma":
return inferenceql.inference.primitives.gamma_logpdf(x,parameters);

break;
case "gaussian":
return inferenceql.inference.primitives.gaussian_logpdf(x,parameters);

break;
case "log-categorical":
return inferenceql.inference.primitives.log_categorical_logpdf(x,parameters);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Primitive doesn't exist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(primitive)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$primitive,primitive], null));

}
}));

(inferenceql.inference.primitives.logpdf.cljs$core$IFn$_invoke$arity$2 = (function (primitive,parameters){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(inferenceql.inference.primitives.logpdf,primitive,parameters);
}));

(inferenceql.inference.primitives.logpdf.cljs$lang$maxFixedArity = 3);

/**
 * Given a primitive and its parameters, generates a sample from the primitive.
 *   Generates `n` samples, if specified.
 */
inferenceql.inference.primitives.simulate = (function inferenceql$inference$primitives$simulate(var_args){
var G__3458 = arguments.length;
switch (G__3458) {
case 2:
return inferenceql.inference.primitives.simulate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return inferenceql.inference.primitives.simulate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.primitives.simulate.cljs$core$IFn$_invoke$arity$2 = (function (primitive,parameters){
var G__3459 = primitive;
var G__3459__$1 = (((G__3459 instanceof cljs.core.Keyword))?G__3459.fqn:null);
switch (G__3459__$1) {
case "bernoulli":
return inferenceql.inference.primitives.bernoulli_simulate.cljs$core$IFn$_invoke$arity$1(parameters);

break;
case "beta":
return inferenceql.inference.primitives.beta_simulate.cljs$core$IFn$_invoke$arity$1(parameters);

break;
case "categorical":
return inferenceql.inference.primitives.categorical_simulate.cljs$core$IFn$_invoke$arity$1(parameters);

break;
case "dirichlet":
return inferenceql.inference.primitives.dirichlet_simulate.cljs$core$IFn$_invoke$arity$1(parameters);

break;
case "gamma":
return inferenceql.inference.primitives.gamma_simulate.cljs$core$IFn$_invoke$arity$1(parameters);

break;
case "gaussian":
return inferenceql.inference.primitives.gaussian_simulate.cljs$core$IFn$_invoke$arity$1(parameters);

break;
case "log-categorical":
return inferenceql.inference.primitives.log_categorical_simulate.cljs$core$IFn$_invoke$arity$1(parameters);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Primitive doesn't exist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(primitive)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$primitive,primitive], null));

}
}));

(inferenceql.inference.primitives.simulate.cljs$core$IFn$_invoke$arity$3 = (function (n,primitive,parameters){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return inferenceql.inference.primitives.simulate.cljs$core$IFn$_invoke$arity$2(primitive,parameters);
}));
}));

(inferenceql.inference.primitives.simulate.cljs$lang$maxFixedArity = 3);

