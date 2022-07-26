// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.proto');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * A simple protocol for defining a GPM.
 * @interface
 */
inferenceql.inference.gpm.proto.GPM = function(){};

var inferenceql$inference$gpm$proto$GPM$logpdf$dyn_3464 = (function (this$,targets,constraints){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (inferenceql.inference.gpm.proto.logpdf[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,targets,constraints) : m__4522__auto__.call(null,this$,targets,constraints));
} else {
var m__4519__auto__ = (inferenceql.inference.gpm.proto.logpdf["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,targets,constraints) : m__4519__auto__.call(null,this$,targets,constraints));
} else {
throw cljs.core.missing_protocol("GPM.logpdf",this$);
}
}
});
inferenceql.inference.gpm.proto.logpdf = (function inferenceql$inference$gpm$proto$logpdf(this$,targets,constraints){
if((((!((this$ == null)))) && ((!((this$.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3 == null)))))){
return this$.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3(this$,targets,constraints);
} else {
return inferenceql$inference$gpm$proto$GPM$logpdf$dyn_3464(this$,targets,constraints);
}
});

var inferenceql$inference$gpm$proto$GPM$simulate$dyn_3465 = (function (this$,targets,constraints){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (inferenceql.inference.gpm.proto.simulate[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,targets,constraints) : m__4522__auto__.call(null,this$,targets,constraints));
} else {
var m__4519__auto__ = (inferenceql.inference.gpm.proto.simulate["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,targets,constraints) : m__4519__auto__.call(null,this$,targets,constraints));
} else {
throw cljs.core.missing_protocol("GPM.simulate",this$);
}
}
});
inferenceql.inference.gpm.proto.simulate = (function inferenceql$inference$gpm$proto$simulate(this$,targets,constraints){
if((((!((this$ == null)))) && ((!((this$.inferenceql$inference$gpm$proto$GPM$simulate$arity$3 == null)))))){
return this$.inferenceql$inference$gpm$proto$GPM$simulate$arity$3(this$,targets,constraints);
} else {
return inferenceql$inference$gpm$proto$GPM$simulate$dyn_3465(this$,targets,constraints);
}
});

var inferenceql$inference$gpm$proto$GPM$mutual_information$dyn_3466 = (function (this$,target_a,target_b,constraints,n_samples){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (inferenceql.inference.gpm.proto.mutual_information[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$5(this$,target_a,target_b,constraints,n_samples) : m__4522__auto__.call(null,this$,target_a,target_b,constraints,n_samples));
} else {
var m__4519__auto__ = (inferenceql.inference.gpm.proto.mutual_information["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$5(this$,target_a,target_b,constraints,n_samples) : m__4519__auto__.call(null,this$,target_a,target_b,constraints,n_samples));
} else {
throw cljs.core.missing_protocol("GPM.mutual-information",this$);
}
}
});
inferenceql.inference.gpm.proto.mutual_information = (function inferenceql$inference$gpm$proto$mutual_information(this$,target_a,target_b,constraints,n_samples){
if((((!((this$ == null)))) && ((!((this$.inferenceql$inference$gpm$proto$GPM$mutual_information$arity$5 == null)))))){
return this$.inferenceql$inference$gpm$proto$GPM$mutual_information$arity$5(this$,target_a,target_b,constraints,n_samples);
} else {
return inferenceql$inference$gpm$proto$GPM$mutual_information$dyn_3466(this$,target_a,target_b,constraints,n_samples);
}
});


/**
 * Expand functionality of GPMs for CrossCat necessary functionality.
 * @interface
 */
inferenceql.inference.gpm.proto.Incorporate = function(){};

var inferenceql$inference$gpm$proto$Incorporate$incorporate$dyn_3467 = (function (this$,values){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (inferenceql.inference.gpm.proto.incorporate[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,values) : m__4522__auto__.call(null,this$,values));
} else {
var m__4519__auto__ = (inferenceql.inference.gpm.proto.incorporate["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,values) : m__4519__auto__.call(null,this$,values));
} else {
throw cljs.core.missing_protocol("Incorporate.incorporate",this$);
}
}
});
/**
 * Includes the specified values into the given GPM.
 */
inferenceql.inference.gpm.proto.incorporate = (function inferenceql$inference$gpm$proto$incorporate(this$,values){
if((((!((this$ == null)))) && ((!((this$.inferenceql$inference$gpm$proto$Incorporate$incorporate$arity$2 == null)))))){
return this$.inferenceql$inference$gpm$proto$Incorporate$incorporate$arity$2(this$,values);
} else {
return inferenceql$inference$gpm$proto$Incorporate$incorporate$dyn_3467(this$,values);
}
});

var inferenceql$inference$gpm$proto$Incorporate$unincorporate$dyn_3468 = (function (this$,values){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (inferenceql.inference.gpm.proto.unincorporate[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,values) : m__4522__auto__.call(null,this$,values));
} else {
var m__4519__auto__ = (inferenceql.inference.gpm.proto.unincorporate["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,values) : m__4519__auto__.call(null,this$,values));
} else {
throw cljs.core.missing_protocol("Incorporate.unincorporate",this$);
}
}
});
/**
 * Removes the specified values from the given GPM.
 *                             It is the client's responsibility to avoid unincorporating
 *                             values that were not previously incorporated.
 */
inferenceql.inference.gpm.proto.unincorporate = (function inferenceql$inference$gpm$proto$unincorporate(this$,values){
if((((!((this$ == null)))) && ((!((this$.inferenceql$inference$gpm$proto$Incorporate$unincorporate$arity$2 == null)))))){
return this$.inferenceql$inference$gpm$proto$Incorporate$unincorporate$arity$2(this$,values);
} else {
return inferenceql$inference$gpm$proto$Incorporate$unincorporate$dyn_3468(this$,values);
}
});


/**
 * Calculates the marginal log joint density of all observations and current variable configuration
 *   of the current state of a GPM.
 *   Necessary for all CrossCat-related GPMs.
 * @interface
 */
inferenceql.inference.gpm.proto.Score = function(){};

var inferenceql$inference$gpm$proto$Score$logpdf_score$dyn_3469 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (inferenceql.inference.gpm.proto.logpdf_score[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (inferenceql.inference.gpm.proto.logpdf_score["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Score.logpdf-score",this$);
}
}
});
inferenceql.inference.gpm.proto.logpdf_score = (function inferenceql$inference$gpm$proto$logpdf_score(this$){
if((((!((this$ == null)))) && ((!((this$.inferenceql$inference$gpm$proto$Score$logpdf_score$arity$1 == null)))))){
return this$.inferenceql$inference$gpm$proto$Score$logpdf_score$arity$1(this$);
} else {
return inferenceql$inference$gpm$proto$Score$logpdf_score$dyn_3469(this$);
}
});


/**
 * Given a non-parametric GPM and it's partition, insert a row into into the correct
 *   category (aka the correct table/cluster)
 * @interface
 */
inferenceql.inference.gpm.proto.Insert = function(){};

var inferenceql$inference$gpm$proto$Insert$insert$dyn_3470 = (function (this$,values){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (inferenceql.inference.gpm.proto.insert[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,values) : m__4522__auto__.call(null,this$,values));
} else {
var m__4519__auto__ = (inferenceql.inference.gpm.proto.insert["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,values) : m__4519__auto__.call(null,this$,values));
} else {
throw cljs.core.missing_protocol("Insert.insert",this$);
}
}
});
inferenceql.inference.gpm.proto.insert = (function inferenceql$inference$gpm$proto$insert(this$,values){
if((((!((this$ == null)))) && ((!((this$.inferenceql$inference$gpm$proto$Insert$insert$arity$2 == null)))))){
return this$.inferenceql$inference$gpm$proto$Insert$insert$arity$2(this$,values);
} else {
return inferenceql$inference$gpm$proto$Insert$insert$dyn_3470(this$,values);
}
});


/**
 * Given a GPM, returns the variables it supports.
 * @interface
 */
inferenceql.inference.gpm.proto.Variables = function(){};

var inferenceql$inference$gpm$proto$Variables$variables$dyn_3471 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (inferenceql.inference.gpm.proto.variables[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (inferenceql.inference.gpm.proto.variables["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Variables.variables",this$);
}
}
});
inferenceql.inference.gpm.proto.variables = (function inferenceql$inference$gpm$proto$variables(this$){
if((((!((this$ == null)))) && ((!((this$.inferenceql$inference$gpm$proto$Variables$variables$arity$1 == null)))))){
return this$.inferenceql$inference$gpm$proto$Variables$variables$arity$1(this$);
} else {
return inferenceql$inference$gpm$proto$Variables$variables$dyn_3471(this$);
}
});


/**
 * @interface
 */
inferenceql.inference.gpm.proto.Condition = function(){};

var inferenceql$inference$gpm$proto$Condition$condition$dyn_3472 = (function (this$,conditions){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (inferenceql.inference.gpm.proto.condition[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,conditions) : m__4522__auto__.call(null,this$,conditions));
} else {
var m__4519__auto__ = (inferenceql.inference.gpm.proto.condition["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,conditions) : m__4519__auto__.call(null,this$,conditions));
} else {
throw cljs.core.missing_protocol("Condition.condition",this$);
}
}
});
inferenceql.inference.gpm.proto.condition = (function inferenceql$inference$gpm$proto$condition(this$,conditions){
if((((!((this$ == null)))) && ((!((this$.inferenceql$inference$gpm$proto$Condition$condition$arity$2 == null)))))){
return this$.inferenceql$inference$gpm$proto$Condition$condition$arity$2(this$,conditions);
} else {
return inferenceql$inference$gpm$proto$Condition$condition$dyn_3472(this$,conditions);
}
});


/**
 * @interface
 */
inferenceql.inference.gpm.proto.Constrain = function(){};

var inferenceql$inference$gpm$proto$Constrain$constrain$dyn_3473 = (function (this$,event,opts){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (inferenceql.inference.gpm.proto.constrain[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,event,opts) : m__4522__auto__.call(null,this$,event,opts));
} else {
var m__4519__auto__ = (inferenceql.inference.gpm.proto.constrain["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,event,opts) : m__4519__auto__.call(null,this$,event,opts));
} else {
throw cljs.core.missing_protocol("Constrain.constrain",this$);
}
}
});
inferenceql.inference.gpm.proto.constrain = (function inferenceql$inference$gpm$proto$constrain(this$,event,opts){
if((((!((this$ == null)))) && ((!((this$.inferenceql$inference$gpm$proto$Constrain$constrain$arity$3 == null)))))){
return this$.inferenceql$inference$gpm$proto$Constrain$constrain$arity$3(this$,event,opts);
} else {
return inferenceql$inference$gpm$proto$Constrain$constrain$dyn_3473(this$,event,opts);
}
});


/**
 * @interface
 */
inferenceql.inference.gpm.proto.LogProb = function(){};

var inferenceql$inference$gpm$proto$LogProb$logprob$dyn_3474 = (function (this$,event){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (inferenceql.inference.gpm.proto.logprob[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4522__auto__.call(null,this$,event));
} else {
var m__4519__auto__ = (inferenceql.inference.gpm.proto.logprob["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4519__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("LogProb.logprob",this$);
}
}
});
inferenceql.inference.gpm.proto.logprob = (function inferenceql$inference$gpm$proto$logprob(this$,event){
if((((!((this$ == null)))) && ((!((this$.inferenceql$inference$gpm$proto$LogProb$logprob$arity$2 == null)))))){
return this$.inferenceql$inference$gpm$proto$LogProb$logprob$arity$2(this$,event);
} else {
return inferenceql$inference$gpm$proto$LogProb$logprob$dyn_3474(this$,event);
}
});

