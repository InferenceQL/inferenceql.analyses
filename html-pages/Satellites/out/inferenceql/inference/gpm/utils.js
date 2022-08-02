// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('inferenceql.inference.utils');
/**
 * Given a GPM and the number of auxiliary sub-GPMs, calculates the associated CRP weights.
 *   Expects an XCat or View GPM.
 */
inferenceql.inference.gpm.utils.crp_weights = (function inferenceql$inference$gpm$utils$crp_weights(gpm,m){
var latents = cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(gpm);
var alpha = cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(latents);
var counts = cljs.core.cst$kw$counts.cljs$core$IFn$_invoke$arity$1(latents);
var z = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,alpha,cljs.core.vals(counts));
var m__$1 = (((m === (0)))?(m + (1)):m);
var altered_counts = cljs.core.reduce_kv((function (counts_SINGLEQUOTE_,sub_gpm_name,cnt){
var cnt_SINGLEQUOTE_ = (((cnt === (0)))?(alpha / m__$1):cnt);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(counts_SINGLEQUOTE_,sub_gpm_name,(function (){var G__3810 = (cnt_SINGLEQUOTE_ / z);
return Math.log(G__3810);
})());
}),cljs.core.PersistentArrayMap.EMPTY,counts);
return inferenceql.inference.utils.log_normalize(altered_counts);
});
