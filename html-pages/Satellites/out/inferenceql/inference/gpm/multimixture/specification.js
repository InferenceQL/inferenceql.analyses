// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.multimixture.specification');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_alpha,cljs.core.cst$sym$cljs$core_SLASH_pos_QMARK_,cljs.core.pos_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta,cljs.core.cst$sym$cljs$core_SLASH_pos_QMARK_,cljs.core.pos_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta_DASH_parameters,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_alpha,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_alpha,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__3245){
return cljs.core.map_QMARK_(G__3245);
}),(function (G__3245){
return cljs.core.contains_QMARK_(G__3245,cljs.core.cst$kw$alpha);
}),(function (G__3245){
return cljs.core.contains_QMARK_(G__3245,cljs.core.cst$kw$beta);
})], null),(function (G__3245){
return ((cljs.core.map_QMARK_(G__3245)) && (((cljs.core.contains_QMARK_(G__3245,cljs.core.cst$kw$alpha)) && (cljs.core.contains_QMARK_(G__3245,cljs.core.cst$kw$beta)))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_alpha,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_beta], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$alpha,cljs.core.cst$kw$beta], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$alpha)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$beta))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_mu,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_sigma,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_pos_QMARK_),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_pos_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,cljs.core.pos_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_gaussian_DASH_parameters,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_mu,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_sigma], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_mu,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_sigma], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__3246){
return cljs.core.map_QMARK_(G__3246);
}),(function (G__3246){
return cljs.core.contains_QMARK_(G__3246,cljs.core.cst$kw$mu);
}),(function (G__3246){
return cljs.core.contains_QMARK_(G__3246,cljs.core.cst$kw$sigma);
})], null),(function (G__3246){
return ((cljs.core.map_QMARK_(G__3246)) && (((cljs.core.contains_QMARK_(G__3246,cljs.core.cst$kw$mu)) && (cljs.core.contains_QMARK_(G__3246,cljs.core.cst$kw$sigma)))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_mu,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_sigma], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mu,cljs.core.cst$kw$sigma], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$mu)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$sigma))], null),null])));
inferenceql.inference.gpm.multimixture.specification.normalized_QMARK_ = (function inferenceql$inference$gpm$multimixture$specification$normalized_QMARK_(xs){
return ((1) === cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs));
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,(0),cljs.core.cst$sym$_PERCENT_,(1))),(function (p1__3247_SHARP_){
return ((((0) <= p1__3247_SHARP_)) && ((p1__3247_SHARP_ <= (1))));
}));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability_DASH_vector,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability),cljs.core.cst$sym$inferenceql$inference$gpm$multimixture$specification_SLASH_normalized_QMARK_),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability),cljs.core.cst$sym$inferenceql$inference$gpm$multimixture$specification_SLASH_normalized_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.rep_PLUS_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability),inferenceql.inference.gpm.multimixture.specification.normalized_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_binary_DASH_paramters,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__3248_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,(0),cljs.core.cst$sym$p1__3248_SHARP_,(1)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,(0),cljs.core.cst$sym$_PERCENT_,(1)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.number_QMARK_,(function (p1__3248_SHARP_){
return ((((0) <= p1__3248_SHARP_)) && ((p1__3248_SHARP_ <= (1))));
})], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_categorical_DASH_parameters,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_float_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$float_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_float_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.float_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__3249){
return cljs.core.map_QMARK_(G__3249);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__480__auto__,v__481__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__481__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_float_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_distribution_DASH_paremeters,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_binary_DASH_parameters,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_binary_DASH_paramters,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_categorical_DASH_parameters,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_categorical_DASH_parameters,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_gaussian_DASH_parameters,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_gaussian_DASH_parameters),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_binary_DASH_parameters,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_categorical_DASH_parameters,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_gaussian_DASH_parameters], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_binary_DASH_paramters,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_categorical_DASH_parameters,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_gaussian_DASH_parameters], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_binary_DASH_paramters,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_categorical_DASH_parameters,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_gaussian_DASH_parameters], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_row,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$sym$any_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__3250){
return cljs.core.map_QMARK_(G__3250);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__480__auto__,v__481__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__481__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_rows,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_row),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_row,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_row,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__3251){
return cljs.core.coll_QMARK_(G__3251);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_row)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_parameters,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_distribution_DASH_paremeters),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_distribution_DASH_paremeters),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_distribution_DASH_paremeters], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_distribution_DASH_paremeters], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__3252){
return cljs.core.map_QMARK_(G__3252);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__480__auto__,v__481__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__481__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_distribution_DASH_paremeters)], null),null));
inferenceql.inference.gpm.multimixture.specification.distribution_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$binary,null,cljs.core.cst$kw$gaussian,null,cljs.core.cst$kw$categorical,null], null), null);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_distribution,cljs.core.cst$sym$inferenceql$inference$gpm$multimixture$specification_SLASH_distribution_QMARK_,inferenceql.inference.gpm.multimixture.specification.distribution_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_vars,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__3253_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__GT_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_count,cljs.core.cst$sym$p1__3253_SHARP_),(0))),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_distribution)),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__GT_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_count,cljs.core.cst$sym$_PERCENT_),(0))),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_distribution)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__3253_SHARP_){
return (cljs.core.count(p1__3253_SHARP_) > (0));
}),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_distribution),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_distribution], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_distribution], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__3254){
return cljs.core.map_QMARK_(G__3254);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__480__auto__,v__481__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__481__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_distribution)], null),null)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_cluster,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_parameters], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_parameters], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__3255){
return cljs.core.map_QMARK_(G__3255);
}),(function (G__3255){
return cljs.core.contains_QMARK_(G__3255,cljs.core.cst$kw$probability);
}),(function (G__3255){
return cljs.core.contains_QMARK_(G__3255,cljs.core.cst$kw$parameters);
})], null),(function (G__3255){
return ((cljs.core.map_QMARK_(G__3255)) && (((cljs.core.contains_QMARK_(G__3255,cljs.core.cst$kw$probability)) && (cljs.core.contains_QMARK_(G__3255,cljs.core.cst$kw$parameters)))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_probability,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_parameters], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$probability,cljs.core.cst$kw$parameters], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$probability)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$parameters))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_clusters,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_cluster),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_cluster,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_cluster,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__3256){
return cljs.core.coll_QMARK_(G__3256);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_cluster)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_view,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_clusters,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_clusters);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_views,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_view),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_view,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__3257){
return cljs.core.coll_QMARK_(G__3257);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_view)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_vars,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_views], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_vars,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_views], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__3258){
return cljs.core.map_QMARK_(G__3258);
}),(function (G__3258){
return cljs.core.contains_QMARK_(G__3258,cljs.core.cst$kw$vars);
}),(function (G__3258){
return cljs.core.contains_QMARK_(G__3258,cljs.core.cst$kw$views);
})], null),(function (G__3258){
return ((cljs.core.map_QMARK_(G__3258)) && (((cljs.core.contains_QMARK_(G__3258,cljs.core.cst$kw$vars)) && (cljs.core.contains_QMARK_(G__3258,cljs.core.cst$kw$views)))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_vars,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_views], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vars,cljs.core.cst$kw$views], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$vars)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$views))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$inferenceql$inference$gpm$multimixture$specification_SLASH_from_DASH_json,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$json,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.core.cst$kw$ret,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$json,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$json], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$any_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__3259){
return cljs.core.map_QMARK_(G__3259);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__480__auto__,v__481__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__481__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$json,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,null,null),cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,null,null,null));
inferenceql.inference.gpm.multimixture.specification.from_json = (function inferenceql$inference$gpm$multimixture$specification$from_json(p__3260){
var map__3261 = p__3260;
var map__3261__$1 = cljs.core.__destructure_map(map__3261);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3261__$1,"columns");
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3261__$1,"views");
var vars = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v));
}),cljs.core.PersistentArrayMap.EMPTY,columns);
var views__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (view){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (cluster){
var column_parameters = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cluster,"p");
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$probability,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cluster,"p"),cljs.core.cst$kw$parameters,cljs.core.reduce_kv((function (m,column,parameters){
var stattype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,column);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,column,(function (){var G__3262 = stattype;
var G__3262__$1 = (((G__3262 instanceof cljs.core.Keyword))?G__3262.fqn:null);
switch (G__3262__$1) {
case "gaussian":
return cljs.core.zipmap(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mu,cljs.core.cst$kw$sigma], null),parameters);

break;
case "categorical":
return parameters;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3262__$1)].join('')));

}
})());
}),cljs.core.PersistentArrayMap.EMPTY,column_parameters)], null);
}),view);
}),views);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$vars,vars,cljs.core.cst$kw$views,views__$1], null);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$inferenceql$inference$gpm$multimixture$specification_SLASH_cluster_DASH_variables,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$cluster,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_cluster),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$cluster,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_cluster),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cluster], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_cluster], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_cluster], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$cluster,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_cluster),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__3264){
return cljs.core.coll_QMARK_(G__3264);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column)], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column),null,null,null));
inferenceql.inference.gpm.multimixture.specification.cluster_variables = (function inferenceql$inference$gpm$multimixture$specification$cluster_variables(cluster){
return cljs.core.set(cljs.core.keys(cljs.core.cst$kw$parameters.cljs$core$IFn$_invoke$arity$1(cluster)));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$inferenceql$inference$gpm$multimixture$specification_SLASH_view_DASH_variables,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$view,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_view),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$view,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_view),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_view], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$view,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_view),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__3265){
return cljs.core.coll_QMARK_(G__3265);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column)], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column),null,null,null));
/**
 * Returns the variables assigned to given view.
 */
inferenceql.inference.gpm.multimixture.specification.view_variables = (function inferenceql$inference$gpm$multimixture$specification$view_variables(view){
return inferenceql.inference.gpm.multimixture.specification.cluster_variables(cljs.core.first(view));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$inferenceql$inference$gpm$multimixture$specification_SLASH_variables,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$mmix,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$mmix,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mmix], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$mmix,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__3266){
return cljs.core.coll_QMARK_(G__3266);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column)], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column),null,null,null));
/**
 * Returns the variables in a multi-mixture.
 */
inferenceql.inference.gpm.multimixture.specification.variables = (function inferenceql$inference$gpm$multimixture$specification$variables(mmix){
return cljs.core.set(cljs.core.keys(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(mmix)));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$inferenceql$inference$gpm$multimixture$specification_SLASH_view_DASH_index_DASH_for_DASH_variable,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$mmix,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,cljs.core.cst$kw$variable,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$mmix,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,cljs.core.cst$kw$variable,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mmix,cljs.core.cst$kw$variable], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$mmix,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,cljs.core.cst$kw$variable,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_column),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Returns the index of the view a given variable was assigned to.
 */
inferenceql.inference.gpm.multimixture.specification.view_index_for_variable = (function inferenceql$inference$gpm$multimixture$specification$view_index_for_variable(mmix,variable){
return cljs.core.some((function (p__3267){
var vec__3268 = p__3267;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3268,(0),null);
var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3268,(1),null);
if(cljs.core.contains_QMARK_(inferenceql.inference.gpm.multimixture.specification.view_variables(view),variable)){
return i;
} else {
return null;
}
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(mmix)));
});
/**
 * Returns the view a given variable was assigned to.
 */
inferenceql.inference.gpm.multimixture.specification.view_for_variable = (function inferenceql$inference$gpm$multimixture$specification$view_for_variable(mmix,variable){
return cljs.core.some((function (view){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$parameters.cljs$core$IFn$_invoke$arity$1(cljs.core.first(view)),variable)){
return view;
} else {
return null;
}
}),cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(mmix));
});
/**
 * Returns the statistical type (distribution from `metaprob.distributions`) of a
 *   variable.
 */
inferenceql.inference.gpm.multimixture.specification.stattype = (function inferenceql$inference$gpm$multimixture$specification$stattype(mmix,variable){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mmix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vars,variable], null));
});
/**
 * Returns true if `variable` is a nominal variable in `mmix`.
 */
inferenceql.inference.gpm.multimixture.specification.nominal_QMARK_ = (function inferenceql$inference$gpm$multimixture$specification$nominal_QMARK_(mmix,variable){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$categorical,inferenceql.inference.gpm.multimixture.specification.stattype(mmix,variable));
});
/**
 * Returns true if `variable` is a numerical variable in `multimixture`.
 */
inferenceql.inference.gpm.multimixture.specification.numerical_QMARK_ = (function inferenceql$inference$gpm$multimixture$specification$numerical_QMARK_(mmix,variable){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$gaussian,inferenceql.inference.gpm.multimixture.specification.stattype(mmix,variable));
});
/**
 * Returns the parameters of a variable for a cluster.
 */
inferenceql.inference.gpm.multimixture.specification.parameters = (function inferenceql$inference$gpm$multimixture$specification$parameters(mmix,variable,cluster_idx){
var view = inferenceql.inference.gpm.multimixture.specification.view_for_variable(mmix,variable);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cluster_idx,cljs.core.cst$kw$parameters,variable], null));
});
/**
 * Returns the mu for the given variable.
 */
inferenceql.inference.gpm.multimixture.specification.mu = (function inferenceql$inference$gpm$multimixture$specification$mu(mmix,variable,cluster_idx){
return cljs.core.cst$kw$mu.cljs$core$IFn$_invoke$arity$1(inferenceql.inference.gpm.multimixture.specification.parameters(mmix,variable,cluster_idx));
});
/**
 * Returns the sigma for the given variable.
 */
inferenceql.inference.gpm.multimixture.specification.sigma = (function inferenceql$inference$gpm$multimixture$specification$sigma(mmix,variable,cluster_idx){
return cljs.core.cst$kw$sigma.cljs$core$IFn$_invoke$arity$1(inferenceql.inference.gpm.multimixture.specification.parameters(mmix,variable,cluster_idx));
});
inferenceql.inference.gpm.multimixture.specification.cluster_probability = (function inferenceql$inference$gpm$multimixture$specification$cluster_probability(mmix,view_idx,cluster_idx){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mmix,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view_idx,cluster_idx,cljs.core.cst$kw$probability], null));
});
inferenceql.inference.gpm.multimixture.specification.categories = (function inferenceql$inference$gpm$multimixture$specification$categories(mmix,variable){
return cljs.core.set(cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inferenceql.inference.gpm.multimixture.specification.view_for_variable(mmix,variable),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.cst$kw$parameters,variable], null))));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$inferenceql$inference$gpm$multimixture$specification_SLASH_categorical_DASH_probabilities,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$mmix,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,cljs.core.cst$kw$variable,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_variable,cljs.core.cst$kw$cluster_DASH_idxs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$mmix,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,cljs.core.cst$kw$variable,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_variable,cljs.core.cst$kw$cluster_DASH_idxs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mmix,cljs.core.cst$kw$variable,cljs.core.cst$kw$cluster_DASH_idxs], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_variable,cljs.spec.alpha.rep_PLUS_impl(cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_,cljs.core.nat_int_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_variable,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$mmix,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,cljs.core.cst$kw$variable,cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_variable,cljs.core.cst$kw$cluster_DASH_idxs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Returns the probabilities for the given categorical variable. If multiple
 *   clusters are provided the weighted (by cluster probability) sum is returned
 *   instead.
 */
inferenceql.inference.gpm.multimixture.specification.categorical_probabilities = (function inferenceql$inference$gpm$multimixture$specification$categorical_probabilities(var_args){
var G__3278 = arguments.length;
switch (G__3278) {
case 3:
return inferenceql.inference.gpm.multimixture.specification.categorical_probabilities.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___3282 = arguments.length;
var i__4830__auto___3283 = (0);
while(true){
if((i__4830__auto___3283 < len__4829__auto___3282)){
args_arr__4850__auto__.push((arguments[i__4830__auto___3283]));

var G__3284 = (i__4830__auto___3283 + (1));
i__4830__auto___3283 = G__3284;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((4)),(0),null));
return inferenceql.inference.gpm.multimixture.specification.categorical_probabilities.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4851__auto__);

}
});

(inferenceql.inference.gpm.multimixture.specification.categorical_probabilities.cljs$core$IFn$_invoke$arity$3 = (function (mmix,variable,cluster_idx){
return inferenceql.inference.gpm.multimixture.specification.parameters(mmix,variable,cluster_idx);
}));

(inferenceql.inference.gpm.multimixture.specification.categorical_probabilities.cljs$core$IFn$_invoke$arity$variadic = (function (mmix,variable,cluster_idx_1,cluster_idx_2,more){
var cluster_idxs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(more,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cluster_idx_1,cluster_idx_2], null));
var view_idx = inferenceql.inference.gpm.multimixture.specification.view_index_for_variable(mmix,variable);
var view = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mmix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view_idx], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__3279){
var map__3280 = p__3279;
var map__3280__$1 = cljs.core.__destructure_map(map__3280);
var probability = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3280__$1,cljs.core.cst$kw$probability);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3280__$1,cljs.core.cst$kw$parameters);
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(v * probability));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(parameters,variable));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3271_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view,p1__3271_SHARP_);
}),cluster_idxs)));
}));

/** @this {Function} */
(inferenceql.inference.gpm.multimixture.specification.categorical_probabilities.cljs$lang$applyTo = (function (seq3273){
var G__3274 = cljs.core.first(seq3273);
var seq3273__$1 = cljs.core.next(seq3273);
var G__3275 = cljs.core.first(seq3273__$1);
var seq3273__$2 = cljs.core.next(seq3273__$1);
var G__3276 = cljs.core.first(seq3273__$2);
var seq3273__$3 = cljs.core.next(seq3273__$2);
var G__3277 = cljs.core.first(seq3273__$3);
var seq3273__$4 = cljs.core.next(seq3273__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3274,G__3275,G__3276,G__3277,seq3273__$4);
}));

(inferenceql.inference.gpm.multimixture.specification.categorical_probabilities.cljs$lang$maxFixedArity = (4));

/**
 * Returns true if `x` is a valid multimixture specification.
 */
inferenceql.inference.gpm.multimixture.specification.spec_QMARK_ = (function inferenceql$inference$gpm$multimixture$specification$spec_QMARK_(x){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inferenceql$inference$gpm$multimixture$specification_SLASH_multi_DASH_mixture,x);
});
