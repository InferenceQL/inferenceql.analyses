// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.distributions');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('metaprob.distributions');
goog.require('metaprob.prelude');
goog.require('inferenceql.inference.gpm.multimixture.specification');
/**
 * Returns Gamma(z + 1 = number) using Lanczos approximation.
 *   https://rosettacode.org/wiki/Gamma_function#Clojure
 */
inferenceql.inference.distributions.gamma = (function inferenceql$inference$distributions$gamma(number){
if((number < 0.5)){
return (Math.PI / ((function (){var G__3293 = (Math.PI * number);
return Math.sin(G__3293);
})() * (function (){var G__3294 = ((1) - number);
return (inferenceql.inference.distributions.gamma.cljs$core$IFn$_invoke$arity$1 ? inferenceql.inference.distributions.gamma.cljs$core$IFn$_invoke$arity$1(G__3294) : inferenceql.inference.distributions.gamma.call(null,G__3294));
})()));
} else {
var n = (number - (1));
var c = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.9999999999998099,676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-0.13857109526572012,9.984369578019572E-6,1.5056327351493116E-7], null);
return ((((function (){var G__3295 = ((2) * Math.PI);
return Math.sqrt(G__3295);
})() * (function (){var G__3296 = ((n + (7)) + 0.5);
var G__3297 = (n + 0.5);
return Math.pow(G__3296,G__3297);
})()) * (function (){var G__3298 = (- ((n + (7)) + 0.5));
return Math.exp(G__3298);
})()) * (cljs.core.first(c) + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__3292_SHARP_,p2__3291_SHARP_){
return (p2__3291_SHARP_ / ((n + p1__3292_SHARP_) + (1)));
}),cljs.core.next(c)))));
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$inferenceql$inference$distributions_SLASH_gamma,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$number,cljs.core.cst$sym$cljs$core_SLASH_pos_QMARK_)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$number,cljs.core.cst$sym$cljs$core_SLASH_pos_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$number], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pos_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_pos_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$number,cljs.core.cst$sym$cljs$core_SLASH_pos_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Returns Gamma(z + 1 = number) using Lanczos approximation.
 */
inferenceql.inference.distributions.log_gamma = (function inferenceql$inference$distributions$log_gamma(number){
if((number < 0.5)){
return (Math.log(Math.PI) - ((function (){var G__3301 = (function (){var G__3302 = (Math.PI * number);
return Math.sin(G__3302);
})();
return Math.log(G__3301);
})() + (function (){var G__3303 = ((1) - number);
return (inferenceql.inference.distributions.log_gamma.cljs$core$IFn$_invoke$arity$1 ? inferenceql.inference.distributions.log_gamma.cljs$core$IFn$_invoke$arity$1(G__3303) : inferenceql.inference.distributions.log_gamma.call(null,G__3303));
})()));
} else {
var n = (number - (1));
var c = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.9999999999998099,676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-0.13857109526572012,9.984369578019572E-6,1.5056327351493116E-7], null);
return ((((0.5 * (function (){var G__3304 = ((2) * Math.PI);
return Math.log(G__3304);
})()) + ((function (){var G__3305 = ((n + (7)) + 0.5);
return Math.log(G__3305);
})() * (n + 0.5))) + (- ((n + (7)) + 0.5))) + (function (){var G__3306 = (cljs.core.first(c) + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__3300_SHARP_,p2__3299_SHARP_){
return (p2__3299_SHARP_ / ((n + p1__3300_SHARP_) + (1)));
}),cljs.core.next(c))));
return Math.log(G__3306);
})());
}
});
inferenceql.inference.distributions.gamma_dist = (function inferenceql$inference$distributions$gamma_dist(k){
while(true){
var e = Math.E;
var u = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var v = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var w = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var condition_1 = (u <= (e / (e + k)));
var eps = ((condition_1)?(function (){var G__3307 = v;
var G__3308 = ((1) / k);
return Math.pow(G__3307,G__3308);
})():((1) - Math.log(v)));
var n = ((condition_1)?(w * (function (){var G__3309 = eps;
var G__3310 = (k - (1));
return Math.pow(G__3309,G__3310);
})()):(w * (function (){var G__3311 = e;
var G__3312 = ((0) - eps);
return Math.pow(G__3311,G__3312);
})()));
var condition_2 = (n > ((function (){var G__3313 = eps;
var G__3314 = (k - (1));
return Math.pow(G__3313,G__3314);
})() * (function (){var G__3315 = e;
var G__3316 = ((0) - eps);
return Math.pow(G__3315,G__3316);
})()));
if(condition_2){
continue;
} else {
return eps;
}
break;
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$inferenceql$inference$distributions_SLASH_beta_DASH_pdf,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$v,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_alpha,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$v,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_alpha,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v,cljs.core.cst$kw$args], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_alpha,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_alpha,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_alpha,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$v,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_alpha,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
inferenceql.inference.distributions.beta_pdf = (function inferenceql$inference$distributions$beta_pdf(v,p__3317){
var vec__3318 = p__3317;
var alpha = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3318,(0),null);
var beta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3318,(1),null);
var b = (function (alpha__$1,beta__$1){
return ((inferenceql.inference.distributions.gamma(alpha__$1) * inferenceql.inference.distributions.gamma(beta__$1)) / inferenceql.inference.distributions.gamma((alpha__$1 + beta__$1)));
});
return ((metaprob.prelude.expt(v,(alpha - (1))) * metaprob.prelude.expt(((1) - v),(beta - (1)))) / b(alpha,beta));
});
inferenceql.inference.distributions.beta_logpdf = (function inferenceql$inference$distributions$beta_logpdf(v,p__3321){
var vec__3322 = p__3321;
var alpha = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3322,(0),null);
var beta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3322,(1),null);
var log_b = (function (alpha__$1,beta__$1){
return ((inferenceql.inference.distributions.log_gamma(alpha__$1) + inferenceql.inference.distributions.log_gamma(beta__$1)) - inferenceql.inference.distributions.log_gamma((alpha__$1 + beta__$1)));
});
return (((Math.log(v) * (alpha - (1))) + ((function (){var G__3325 = ((1) - v);
return Math.log(G__3325);
})() * (beta - (1)))) - log_b(alpha,beta));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$inferenceql$inference$distributions_SLASH_beta_DASH_sampler,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$params,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta_DASH_parameters)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$params,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta_DASH_parameters),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta_DASH_parameters], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta_DASH_parameters], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$params,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta_DASH_parameters),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
inferenceql.inference.distributions.beta_sampler = (function inferenceql$inference$distributions$beta_sampler(p__3326){
var map__3327 = p__3326;
var map__3327__$1 = cljs.core.__destructure_map(map__3327);
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3327__$1,cljs.core.cst$kw$alpha);
var beta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3327__$1,cljs.core.cst$kw$beta);
var x = inferenceql.inference.distributions.gamma_dist(alpha);
var y = inferenceql.inference.distributions.gamma_dist(beta);
var denom = (x + y);
if((denom === (0))){
return (0);
} else {
return (x / denom);
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$inferenceql$inference$distributions_SLASH_beta_DASH_scorer,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$v,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta_DASH_parameters))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$v,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta_DASH_parameters)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v,cljs.core.cst$kw$args], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta_DASH_parameters], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta_DASH_parameters], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta_DASH_parameters)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$v,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta_DASH_parameters)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
inferenceql.inference.distributions.beta_scorer = (function inferenceql$inference$distributions$beta_scorer(v,p__3328){
var vec__3329 = p__3328;
var map__3332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3329,(0),null);
var map__3332__$1 = cljs.core.__destructure_map(map__3332);
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3332__$1,cljs.core.cst$kw$alpha);
var beta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3332__$1,cljs.core.cst$kw$beta);
return inferenceql.inference.distributions.beta_logpdf(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alpha,beta], null));
});
inferenceql.inference.distributions.beta = metaprob.prelude.make_primitive(inferenceql.inference.distributions.beta_sampler,inferenceql.inference.distributions.beta_scorer);
