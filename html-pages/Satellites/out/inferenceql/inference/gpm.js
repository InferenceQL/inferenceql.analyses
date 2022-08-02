// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.edn');
goog.require('inferenceql.inference.gpm.column');
goog.require('inferenceql.inference.gpm.compositional');
goog.require('inferenceql.inference.gpm.crosscat');
goog.require('inferenceql.inference.gpm.multimixture');
goog.require('inferenceql.inference.gpm.multimixture.specification');
goog.require('inferenceql.inference.gpm.primitive_gpms.bernoulli');
goog.require('inferenceql.inference.gpm.primitive_gpms.categorical');
goog.require('inferenceql.inference.gpm.primitive_gpms.gaussian');
goog.require('inferenceql.inference.gpm.proto');
goog.require('inferenceql.inference.gpm.view');
/**
 * Returns a CrossCat Column GPM.
 * 
 *   It is the responsibility of the user to make sure that all categories
 *   are of the correct type, and assignments are consistent in terms of assigning
 *   a particular value to a given category.
 * 
 *   var-name: the name of the variable contained in the column.
 *   stattype: the statistical type of the variable contained in the column (e.g. :bernoulli).
 *   categories: a map of {category-symbol category}, where each category must be a pGPM of
 *            the Column's statistical type.
 *   assignments: map of {value {category-symbol count}}, used for (un)incorporating by value alone.
 *             Note that identical instances of values are unique only in that `assignments` keeps
 *             track of to which categories they belong.
 *   hyperparameters: the hyperparameters of column; these persist across all categories.
 *   hyper-grid: a gridded approximation of the hyperparameter space, used in CrossCat inference;
 *            this is only updated when values are added or removed to the Column.
 *   metadata: additional information needed in the column; e.g. for a :categorical Column,
 *          `metadata` would contain a list of possible values the variable could take.
 */
inferenceql.inference.gpm.Column = (function inferenceql$inference$gpm$Column(var_name,stattype,categories,assignments,hyperparameters,hyper_grid,metadata){
return inferenceql.inference.gpm.column.__GT_Column(var_name,stattype,categories,assignments,hyperparameters,hyper_grid,metadata);
});
/**
 * Returns a CrossCat View GPM.
 * 
 *   It is the responsibility of the user to make sure that all categories
 *   are of the correct type, and assignments are consistent in terms of assigning
 *   a particular value to a given category.
 * 
 *   columns: map of {column-symbol column}, where each column is a proper Column GPM.
 *   latents: map of the below structure, used to keep track of row-category assignments,
 *   as well as category sufficient statistics:
 * 
 *   {:alpha  number                     The concentration parameter for the Column's CRP
 *   :counts {category-name count}      Maps category name to size of the category. Updated
 *   incrementally instead of being calculated on the fly.
 *   :y {row-identifier category-name}  Maps rows to their current category assignment.
 * 
 *   assignments: map of {value {:row-ids #{row-ids} category-symbol count}}, used for (un)incorporating
 *   by value alone. The :row-ids key for each set of values is used for CrossCat inference
 *   and the internal labeling of the data.
 */
inferenceql.inference.gpm.View = (function inferenceql$inference$gpm$View(columns,latents,assignments){
return inferenceql.inference.gpm.view.__GT_View(columns,latents,assignments);
});
/**
 * Returns a CrossCat View GPM, given a View specification, latent assignments of rows
 *   to categories, variable types, options (for categorical variables) and the corresponding data.
 */
inferenceql.inference.gpm.dpmm = (function inferenceql$inference$gpm$dpmm(var_args){
var G__4057 = arguments.length;
switch (G__4057) {
case 1:
return inferenceql.inference.gpm.dpmm.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return inferenceql.inference.gpm.dpmm.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return inferenceql.inference.gpm.dpmm.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.gpm.dpmm.cljs$core$IFn$_invoke$arity$1 = (function (p__4058){
var map__4059 = p__4058;
var map__4059__$1 = cljs.core.__destructure_map(map__4059);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4059__$1,cljs.core.cst$kw$model);
var latents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4059__$1,cljs.core.cst$kw$latents);
var types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4059__$1,cljs.core.cst$kw$types);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4059__$1,cljs.core.cst$kw$data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4059__$1,cljs.core.cst$kw$options);
return inferenceql.inference.gpm.dpmm.cljs$core$IFn$_invoke$arity$5(model,latents,types,data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$options,options,cljs.core.cst$kw$crosscat,true], null));
}));

(inferenceql.inference.gpm.dpmm.cljs$core$IFn$_invoke$arity$4 = (function (model,latents,types,data){
return inferenceql.inference.gpm.dpmm.cljs$core$IFn$_invoke$arity$5(model,latents,types,data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$crosscat,true], null));
}));

(inferenceql.inference.gpm.dpmm.cljs$core$IFn$_invoke$arity$5 = (function (model,latents,types,data,p__4060){
var map__4061 = p__4060;
var map__4061__$1 = cljs.core.__destructure_map(map__4061);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4061__$1,cljs.core.cst$kw$options);
var crosscat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4061__$1,cljs.core.cst$kw$crosscat);
return inferenceql.inference.gpm.view.construct_view_from_latents.cljs$core$IFn$_invoke$arity$5(model,latents,types,data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$options,options,cljs.core.cst$kw$crosscat,crosscat], null));
}));

(inferenceql.inference.gpm.dpmm.cljs$lang$maxFixedArity = 5);

/**
 * Wrapper to provide conversion to Multimixture model.
 */
inferenceql.inference.gpm.Multimixture = (function inferenceql$inference$gpm$Multimixture(model){
return inferenceql.inference.gpm.multimixture.map__GT_Multimixture(model);
});
/**
 * Returns `true` if `x` is a generative population model.
 */
inferenceql.inference.gpm.gpm_QMARK_ = (function inferenceql$inference$gpm$gpm_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.inferenceql$inference$gpm$proto$GPM$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(inferenceql.inference.gpm.proto.GPM,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(inferenceql.inference.gpm.proto.GPM,x);
}
});
/**
 * Given a GPM, incorporates values into the GPM by updating its sufficient statistics.
 */
inferenceql.inference.gpm.incorporate = (function inferenceql$inference$gpm$incorporate(gpm,values){
return inferenceql.inference.gpm.proto.incorporate(gpm,values);
});
/**
 * Given a non-parametric GPM and it's partition, insert a row into into the correct
 *   category (aka the correct table/cluster)
 */
inferenceql.inference.gpm.insert = (function inferenceql$inference$gpm$insert(gpm,values){
return inferenceql.inference.gpm.proto.insert(gpm,values);
});
/**
 * Given a GPM, calculates the logpdf of `targets` given `constraints`.
 */
inferenceql.inference.gpm.logpdf = (function inferenceql$inference$gpm$logpdf(gpm,targets,constraints){
return inferenceql.inference.gpm.proto.logpdf(gpm,targets,constraints);
});
/**
 * Given a GPM, estimates the mutual-information of `target-a` and `target-b`
 *   given `constraints` with `n-samples`.
 */
inferenceql.inference.gpm.mutual_information = (function inferenceql$inference$gpm$mutual_information(gpm,target_a,target_b,constraints,n_samples){
return inferenceql.inference.gpm.proto.mutual_information(gpm,target_a,target_b,constraints,n_samples);
});
/**
 * Given a GPM, simulates a sample of the variables in `targets` given `constraints`.
 */
inferenceql.inference.gpm.simulate = (function inferenceql$inference$gpm$simulate(gpm,targets,constraints){
return inferenceql.inference.gpm.proto.simulate(gpm,targets,constraints);
});
/**
 * Conditions the provided generative probabilistic model such that it only
 *   simulates the provided targets, and is always subject to the provided
 *   conditions.
 */
inferenceql.inference.gpm.condition = (function inferenceql$inference$gpm$condition(gpm,conditions){
return inferenceql.inference.gpm.proto.condition(gpm,conditions);
});
/**
 * Constrains a GPM by an event. event is a tree-like data structure. opts is a
 *   collection of functions for traversal of that tree-like data structure. Nodes
 *   in that data structure are either operations (which can have child nodes),
 *   variables, or values.
 * 
 *   Required keys for opts include:
 *  - :operation? must be a fn of one arg that returns true if its argument is
 *    an operation node
 *  - :operands must be a fn of one arg that returns the arguments to an
 *    operation node
 *  - :operator must be a fn of one arg that returns the operator for an
 *    operation node
 *  - :variable? must be a fn of one arg that returns true if its argument is a
 *    variable
 */
inferenceql.inference.gpm.constrain = (function inferenceql$inference$gpm$constrain(gpm,event,opts){
return inferenceql.inference.gpm.proto.constrain(gpm,event,opts);
});
inferenceql.inference.gpm.readers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$sym$inferenceql$inference$gpm$column$Column,inferenceql.inference.gpm.column.map__GT_Column,cljs.core.cst$sym$inferenceql$inference$gpm$compositional$Compositional,inferenceql.inference.gpm.compositional.map__GT_Compositional,cljs.core.cst$sym$inferenceql$inference$gpm$crosscat$XCat,inferenceql.inference.gpm.crosscat.map__GT_XCat,cljs.core.cst$sym$inferenceql$inference$gpm$primitive_gpms$bernoulli$Bernoulli,inferenceql.inference.gpm.primitive_gpms.bernoulli.map__GT_Bernoulli,cljs.core.cst$sym$inferenceql$inference$gpm$primitive_gpms$categorical$Categorical,inferenceql.inference.gpm.primitive_gpms.categorical.map__GT_Categorical,cljs.core.cst$sym$inferenceql$inference$gpm$primitive_gpms$gaussian$Gaussian,inferenceql.inference.gpm.primitive_gpms.gaussian.map__GT_Gaussian,cljs.core.cst$sym$inferenceql$inference$gpm$view$View,inferenceql.inference.gpm.view.map__GT_View], null);
/**
 * Coerce argument to a value that implements `gpm-proto.GPM`.
 */
inferenceql.inference.gpm.as_gpm = (function inferenceql$inference$gpm$as_gpm(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.inferenceql$inference$gpm$proto$GPM$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(inferenceql.inference.gpm.proto.GPM,x):false)):cljs.core.native_satisfies_QMARK_(inferenceql.inference.gpm.proto.GPM,x))){
return x;
} else {
if(inferenceql.inference.gpm.multimixture.specification.spec_QMARK_(x)){
return inferenceql.inference.gpm.Multimixture(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot coerce value to GPM",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,x], null));

}
}
});
/**
 * Like `clojure.edn/read` but includes readers for records in
 *   `inferneceql.inference`.
 */
inferenceql.inference.gpm.read = (function inferenceql$inference$gpm$read(var_args){
var G__4067 = arguments.length;
switch (G__4067) {
case 1:
return inferenceql.inference.gpm.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return inferenceql.inference.gpm.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.gpm.read.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return inferenceql.inference.gpm.read.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,stream);
}));

(inferenceql.inference.gpm.read.cljs$core$IFn$_invoke$arity$2 = (function (opts,stream){
return inferenceql.inference.gpm.as_gpm(clojure.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,cljs.core.cst$kw$readers,cljs.core.merge,inferenceql.inference.gpm.readers),stream));
}));

(inferenceql.inference.gpm.read.cljs$lang$maxFixedArity = 2);

/**
 * Like `clojure.edn/read-string` but includes readers for records from
 *   `inferenceql.inference`.
 */
inferenceql.inference.gpm.read_string = (function inferenceql$inference$gpm$read_string(var_args){
var G__4070 = arguments.length;
switch (G__4070) {
case 1:
return inferenceql.inference.gpm.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return inferenceql.inference.gpm.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('inferenceql.inference.gpm.read_string', inferenceql.inference.gpm.read_string);

(inferenceql.inference.gpm.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return inferenceql.inference.gpm.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,s);
}));

(inferenceql.inference.gpm.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return inferenceql.inference.gpm.as_gpm(clojure.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,cljs.core.cst$kw$readers,cljs.core.merge,inferenceql.inference.gpm.readers),s));
}));

(inferenceql.inference.gpm.read_string.cljs$lang$maxFixedArity = 2);

/**
 * Given a GPM, returns the variables it supports.
 */
inferenceql.inference.gpm.variables = (function inferenceql$inference$gpm$variables(gpm){
return inferenceql.inference.gpm.proto.variables(gpm);
});
/**
 * Returns the log probability of of an event under a model.
 */
inferenceql.inference.gpm.logprob = (function inferenceql$inference$gpm$logprob(gpm,event){
return inferenceql.inference.gpm.proto.logprob(gpm,event);
});
