// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.dpm');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');

/**
 * @interface
 */
inferenceql.inference.dpm.DependentVariables = function(){};

var inferenceql$inference$dpm$DependentVariables$dependent_variables$dyn_3775 = (function (dpm){
var x__4521__auto__ = (((dpm == null))?null:dpm);
var m__4522__auto__ = (inferenceql.inference.dpm.dependent_variables[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(dpm) : m__4522__auto__.call(null,dpm));
} else {
var m__4519__auto__ = (inferenceql.inference.dpm.dependent_variables["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(dpm) : m__4519__auto__.call(null,dpm));
} else {
throw cljs.core.missing_protocol("DependentVariables.dependent-variables",dpm);
}
}
});
inferenceql.inference.dpm.dependent_variables = (function inferenceql$inference$dpm$dependent_variables(dpm){
if((((!((dpm == null)))) && ((!((dpm.inferenceql$inference$dpm$DependentVariables$dependent_variables$arity$1 == null)))))){
return dpm.inferenceql$inference$dpm$DependentVariables$dependent_variables$arity$1(dpm);
} else {
return inferenceql$inference$dpm$DependentVariables$dependent_variables$dyn_3775(dpm);
}
});


/**
 * @interface
 */
inferenceql.inference.dpm.IndependentVariables = function(){};

var inferenceql$inference$dpm$IndependentVariables$independent_variables$dyn_3776 = (function (dpm){
var x__4521__auto__ = (((dpm == null))?null:dpm);
var m__4522__auto__ = (inferenceql.inference.dpm.independent_variables[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(dpm) : m__4522__auto__.call(null,dpm));
} else {
var m__4519__auto__ = (inferenceql.inference.dpm.independent_variables["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(dpm) : m__4519__auto__.call(null,dpm));
} else {
throw cljs.core.missing_protocol("IndependentVariables.independent-variables",dpm);
}
}
});
inferenceql.inference.dpm.independent_variables = (function inferenceql$inference$dpm$independent_variables(dpm){
if((((!((dpm == null)))) && ((!((dpm.inferenceql$inference$dpm$IndependentVariables$independent_variables$arity$1 == null)))))){
return dpm.inferenceql$inference$dpm$IndependentVariables$independent_variables$arity$1(dpm);
} else {
return inferenceql$inference$dpm$IndependentVariables$independent_variables$dyn_3776(dpm);
}
});

/**
 * Returns `true` if `x` is a discriminative population model.
 */
inferenceql.inference.dpm.dpm_QMARK_ = (function inferenceql$inference$dpm$dpm_QMARK_(x){
var and__4221__auto__ = (((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.inferenceql$inference$dpm$DependentVariables$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(inferenceql.inference.dpm.DependentVariables,x):false)):cljs.core.native_satisfies_QMARK_(inferenceql.inference.dpm.DependentVariables,x));
if(and__4221__auto__){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.inferenceql$inference$dpm$IndependentVariables$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(inferenceql.inference.dpm.IndependentVariables,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(inferenceql.inference.dpm.IndependentVariables,x);
}
} else {
return and__4221__auto__;
}
});
/**
 * Throws an exception any of the targets are not dependent variables.
 */
inferenceql.inference.dpm.assert_targets_dependent = (function inferenceql$inference$dpm$assert_targets_dependent(dpm,target_variables){
var temp__5753__auto__ = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(target_variables),cljs.core.set(inferenceql.inference.dpm.dependent_variables(dpm))));
if(temp__5753__auto__){
var vars = temp__5753__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Some target variables are not dependent.",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cognitect$anomalies_SLASH_category,cljs.core.cst$kw$cognitect$anomalies_SLASH_incorrect,cljs.core.cst$kw$non_DASH_dependent_DASH_vars,vars,cljs.core.cst$kw$dpm,dpm], null));
} else {
return null;
}
});
/**
 * Throws an exception if any of the independent variables are not conditioned.
 */
inferenceql.inference.dpm.assert_ivars_conditioned = (function inferenceql$inference$dpm$assert_ivars_conditioned(dpm,constrained_variables){
var temp__5753__auto__ = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(inferenceql.inference.dpm.independent_variables(dpm)),cljs.core.set(constrained_variables)));
if(temp__5753__auto__){
var unconditioned_ivars = temp__5753__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not all independent variables are conditioned.",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cognitect$anomalies_SLASH_category,cljs.core.cst$kw$cognitect$anomalies_SLASH_incorrect,cljs.core.cst$kw$unconditioned_DASH_independent_DASH_variables,unconditioned_ivars,cljs.core.cst$kw$dpm,dpm], null));
} else {
return null;
}
});
/**
 * Asserts that `inferenceql.inference.gpm/logpdf` and
 *   `inferenceql.inference.gpm/constraints` can be called with the provided
 *   targeted and constrained variables.
 */
inferenceql.inference.dpm.assert_args_valid = (function inferenceql$inference$dpm$assert_args_valid(dpm,target_variables,constrained_variables){
inferenceql.inference.dpm.assert_targets_dependent(dpm,target_variables);

return inferenceql.inference.dpm.assert_ivars_conditioned(dpm,constrained_variables);
});
