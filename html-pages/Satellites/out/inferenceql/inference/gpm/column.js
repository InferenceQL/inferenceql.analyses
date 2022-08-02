// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.column');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('inferenceql.inference.gpm.constrained');
goog.require('inferenceql.inference.gpm.conditioned');
goog.require('inferenceql.inference.gpm.primitive_gpms');
goog.require('inferenceql.inference.gpm.proto');
goog.require('inferenceql.inference.primitives');
goog.require('inferenceql.inference.utils');
/**
 * Given a column and alpha, returns the CRP prior over categories.
 */
inferenceql.inference.gpm.column.crp_weights = (function inferenceql$inference$gpm$column$crp_weights(column,alpha){
return inferenceql.inference.utils.log_normalize(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce_kv((function (weights,cat_name,category){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(weights,cat_name,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$suff_DASH_stats.cljs$core$IFn$_invoke$arity$1(category)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$categories.cljs$core$IFn$_invoke$arity$1(column)),cljs.core.cst$kw$aux,alpha));
});
/**
 * Given a column, generates a category from the column's hyperparameters.
 */
inferenceql.inference.gpm.column.generate_category = (function inferenceql$inference$gpm$column$generate_category(column){
var metadata = cljs.core.cst$kw$metadata.cljs$core$IFn$_invoke$arity$1(column);
var stattype = cljs.core.cst$kw$stattype.cljs$core$IFn$_invoke$arity$1(column);
var var_name = cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(column);
var hyperparameters = cljs.core.cst$kw$hyperparameters.cljs$core$IFn$_invoke$arity$1(column);
return inferenceql.inference.gpm.primitive_gpms.__GT_pGPM.cljs$core$IFn$_invoke$arity$variadic(stattype,var_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$hyperparameters,hyperparameters,cljs.core.cst$kw$options,metadata], 0));
});
/**
 * Adds a category under the given symbol name to the specified column.
 */
inferenceql.inference.gpm.column.add_category = (function inferenceql$inference$gpm$column$add_category(column,symb){
var category = inferenceql.inference.gpm.column.generate_category(column);
return cljs.core.assoc_in(column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$categories,symb], null),category);
});
/**
 * Updates a column's categories based on a new view's latent assignments.
 *   Used in incorporate-column.
 */
inferenceql.inference.gpm.column.update_column = (function inferenceql$inference$gpm$column$update_column(column,latents){
var ys = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(latents);
var data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(column);
var var_name = cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(column);
var categories = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.vals(ys),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(inferenceql.inference.gpm.column.generate_category(column))));
var categories_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__3706){
var vec__3707 = p__3706;
var row_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3707,(0),null);
var datum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3707,(1),null);
if((!((datum == null)))){
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ys,row_id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,category,(function (p1__3705_SHARP_){
return inferenceql.inference.gpm.proto.incorporate(p1__3705_SHARP_,cljs.core.PersistentArrayMap.createAsIfByAssoc([var_name,datum]));
}));
} else {
return acc;
}
}),categories,data);
var assignments = cljs.core.reduce_kv((function (assignments_SINGLEQUOTE_,row_id,data__$1){
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ys,row_id);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(assignments_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([var_name,data__$1]),y], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}),cljs.core.PersistentArrayMap.EMPTY,data);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(column,cljs.core.cst$kw$categories,categories_SINGLEQUOTE_),cljs.core.cst$kw$assignments,assignments);
});
/**
 * Calculates the logpdf of the target in each of the Column categories.
 */
inferenceql.inference.gpm.column.category_logpdfs = (function inferenceql$inference$gpm$column$category_logpdfs(var_args){
var G__3711 = arguments.length;
switch (G__3711) {
case 2:
return inferenceql.inference.gpm.column.category_logpdfs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return inferenceql.inference.gpm.column.category_logpdfs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.gpm.column.category_logpdfs.cljs$core$IFn$_invoke$arity$2 = (function (column,target){
return inferenceql.inference.gpm.column.category_logpdfs.cljs$core$IFn$_invoke$arity$3(column,target,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$add_DASH_aux,false], null));
}));

(inferenceql.inference.gpm.column.category_logpdfs.cljs$core$IFn$_invoke$arity$3 = (function (column,target,p__3712){
var map__3713 = p__3712;
var map__3713__$1 = cljs.core.__destructure_map(map__3713);
var add_aux = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3713__$1,cljs.core.cst$kw$add_DASH_aux);
var categories = (cljs.core.truth_(add_aux)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$categories.cljs$core$IFn$_invoke$arity$1(column),cljs.core.cst$kw$aux,inferenceql.inference.gpm.column.generate_category(column)):cljs.core.cst$kw$categories.cljs$core$IFn$_invoke$arity$1(column));
return cljs.core.reduce_kv((function (logpdfs,cat_name,category){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logpdfs,cat_name,inferenceql.inference.gpm.proto.logpdf(category,target,cljs.core.PersistentArrayMap.EMPTY));
}),cljs.core.PersistentArrayMap.EMPTY,categories);
}));

(inferenceql.inference.gpm.column.category_logpdfs.cljs$lang$maxFixedArity = 3);

/**
 * Update the hyperparameters across all categories in a Column GPM.
 */
inferenceql.inference.gpm.column.update_hypers = (function inferenceql$inference$gpm$column$update_hypers(column){
var hypers = cljs.core.cst$kw$hyperparameters.cljs$core$IFn$_invoke$arity$1(column);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(column,cljs.core.cst$kw$categories,(function (p1__3715_SHARP_){
return cljs.core.reduce_kv((function (cats_SINGLEQUOTE_,cat_name,category){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cats_SINGLEQUOTE_,cat_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(category,cljs.core.cst$kw$hyperparameters,hypers));
}),cljs.core.PersistentArrayMap.EMPTY,p1__3715_SHARP_);
}));
});
/**
 * doc-string
 */
inferenceql.inference.gpm.column.update_hyper_grid = (function inferenceql$inference$gpm$column$update_hyper_grid(column){
var stattype = cljs.core.cst$kw$stattype.cljs$core$IFn$_invoke$arity$1(column);
var data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(column);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(column,cljs.core.cst$kw$hyper_DASH_grid,inferenceql.inference.gpm.primitive_gpms.hyper_grid(stattype,cljs.core.vals(data)));
});
/**
 * Incorporate method for CrossCat inference machinery.
 *   Incorporates `values` with a given `row-id` into the category
 *   specified by `category-key`.
 */
inferenceql.inference.gpm.column.crosscat_incorporate = (function inferenceql$inference$gpm$column$crosscat_incorporate(column,values,category_key,row_id){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(column));
if((!((x == null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$categories,category_key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__3716_SHARP_){
return inferenceql.inference.gpm.proto.incorporate(p1__3716_SHARP_,values);
}),inferenceql.inference.gpm.column.generate_category(column))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assignments,values,category_key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),cljs.core.cst$kw$data,cljs.core.assoc,row_id,x);
} else {
return column;
}
});
/**
 * Unincorporate method for CrossCat inference machinery.
 *   Unincorporates the data associated with `row-id` from the category
 *   specified by `category-key`.
 */
inferenceql.inference.gpm.column.crosscat_unincorporate = (function inferenceql$inference$gpm$column$crosscat_unincorporate(column,category_key,row_id){
var var_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,row_id], null));
var values = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(column),var_data]);
if((!((var_data == null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$categories,category_key], null),(function (p1__3717_SHARP_){
return inferenceql.inference.gpm.proto.unincorporate(p1__3717_SHARP_,values);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assignments,values,category_key], null),cljs.core.dec),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assignments,values], null),(function (counts){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(counts,category_key) === (0))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(counts,category_key);
} else {
return counts;
}
})),cljs.core.cst$kw$assignments,(function (assignments){
if(cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(assignments,values))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(assignments,values);
} else {
return assignments;
}
})),cljs.core.cst$kw$data,cljs.core.dissoc,row_id);
} else {
return column;
}
});
/**
 * Given a Column and a category key, simulates a value from that category.
 */
inferenceql.inference.gpm.column.crosscat_simulate = (function inferenceql$inference$gpm$column$crosscat_simulate(column,category_key){
var category = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$categories,category_key], null),inferenceql.inference.gpm.column.generate_category(column));
return inferenceql.inference.gpm.proto.simulate(category,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(column)], null),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Logpdf score used in CrossCat inference. This allows easy scoring of custom proposals
 *   to column hyperparameters across all categories.
 */
inferenceql.inference.gpm.column.crosscat_logpdf_score = (function inferenceql$inference$gpm$column$crosscat_logpdf_score(column){
var hypers = cljs.core.cst$kw$hyperparameters.cljs$core$IFn$_invoke$arity$1(column);
return inferenceql.inference.gpm.proto.logpdf_score(cljs.core.update.cljs$core$IFn$_invoke$arity$3(column,cljs.core.cst$kw$categories,(function (p1__3718_SHARP_){
return cljs.core.reduce_kv((function (categories_SINGLEQUOTE_,cat_name,category){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(categories_SINGLEQUOTE_,cat_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(category,cljs.core.cst$kw$hyperparameters,hypers));
}),cljs.core.PersistentArrayMap.EMPTY,p1__3718_SHARP_);
})));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {inferenceql.inference.gpm.proto.Incorporate}
 * @implements {cljs.core.ICounted}
 * @implements {inferenceql.inference.gpm.proto.Constrain}
 * @implements {inferenceql.inference.gpm.proto.Variables}
 * @implements {inferenceql.inference.gpm.proto.Condition}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {inferenceql.inference.gpm.proto.GPM}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {inferenceql.inference.gpm.proto.Score}
*/
inferenceql.inference.gpm.column.Column = (function (var_name,stattype,categories,assignments,hyperparameters,hyper_grid,metadata,__meta,__extmap,__hash){
this.var_name = var_name;
this.stattype = stattype;
this.categories = categories;
this.assignments = assignments;
this.hyperparameters = hyperparameters;
this.hyper_grid = hyper_grid;
this.metadata = metadata;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(inferenceql.inference.gpm.column.Column.prototype.inferenceql$inference$gpm$proto$Variables$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.column.Column.prototype.inferenceql$inference$gpm$proto$Variables$variables$arity$1 = (function (p__3728){
var self__ = this;
var map__3729 = p__3728;
var map__3729__$1 = cljs.core.__destructure_map(map__3729);
var categories__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3729__$1,cljs.core.cst$kw$categories);
var map__3730 = this;
var map__3730__$1 = cljs.core.__destructure_map(map__3730);
var categories__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3730__$1,cljs.core.cst$kw$categories);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(inferenceql.inference.gpm.proto.variables),cljs.core.vals(categories__$2));
}));

(inferenceql.inference.gpm.column.Column.prototype.inferenceql$inference$gpm$proto$GPM$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.column.Column.prototype.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3 = (function (this$,targets,constraints){
var self__ = this;
var this$__$1 = this;
var column_target = cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.var_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(targets,self__.var_name)]);
var column_constraint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(constraints,self__.var_name);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(targets,self__.var_name) == null)){
return (0);
} else {
if((!((column_constraint == null)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(column_target,self__.var_name),column_constraint)){
return (0);
} else {
return -Infinity;
}
} else {
var weights_lls = cljs.core.reduce_kv((function (m,cat_name,category){
return cljs.core.assoc_in(cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weights,cat_name], null),(function (){var G__3731 = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$suff_DASH_stats.cljs$core$IFn$_invoke$arity$1(category));
return Math.log(G__3731);
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$logps,cat_name], null),inferenceql.inference.gpm.proto.logpdf(category,column_target,cljs.core.PersistentArrayMap.EMPTY));
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$weights,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aux,(function (){var G__3732 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$alpha,(1));
return Math.log(G__3732);
})()], null),cljs.core.cst$kw$logps,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aux,inferenceql.inference.gpm.proto.logpdf(inferenceql.inference.gpm.column.generate_category(this$__$1),column_target,cljs.core.PersistentArrayMap.EMPTY)], null)], null),self__.categories);
return inferenceql.inference.utils.logsumexp(cljs.core.vals(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inferenceql.inference.utils.log_normalize(cljs.core.cst$kw$weights.cljs$core$IFn$_invoke$arity$1(weights_lls)),cljs.core.cst$kw$logps.cljs$core$IFn$_invoke$arity$1(weights_lls)], 0))));

}
}
}));

(inferenceql.inference.gpm.column.Column.prototype.inferenceql$inference$gpm$proto$GPM$simulate$arity$3 = (function (this$,_,___$1){
var self__ = this;
var this$__$1 = this;
var crp_prior = inferenceql.inference.utils.log_normalize((function (){var G__3734 = cljs.core.reduce_kv((function (m,cat_name,category){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cat_name,(function (){var G__3735 = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$suff_DASH_stats.cljs$core$IFn$_invoke$arity$1(category));
return Math.log(G__3735);
})());
}),cljs.core.PersistentArrayMap.EMPTY,self__.categories);
var fexpr__3733 = (function (p1__3719_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__3719_SHARP_,cljs.core.cst$kw$aux,(0));
});
return fexpr__3733(G__3734);
})());
var categories_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.categories,cljs.core.cst$kw$aux,inferenceql.inference.gpm.column.generate_category(this$__$1));
var category_key = inferenceql.inference.primitives.simulate.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$log_DASH_categorical,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,crp_prior], null));
return inferenceql.inference.gpm.proto.simulate(cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_SINGLEQUOTE_,category_key),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.var_name], null),cljs.core.PersistentArrayMap.EMPTY);
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k3724,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__3736 = k3724;
var G__3736__$1 = (((G__3736 instanceof cljs.core.Keyword))?G__3736.fqn:null);
switch (G__3736__$1) {
case "var-name":
return self__.var_name;

break;
case "stattype":
return self__.stattype;

break;
case "categories":
return self__.categories;

break;
case "assignments":
return self__.assignments;

break;
case "hyperparameters":
return self__.hyperparameters;

break;
case "hyper-grid":
return self__.hyper_grid;

break;
case "metadata":
return self__.metadata;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k3724,else__4475__auto__);

}
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__3737){
var vec__3738 = p__3737;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3738,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3738,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(inferenceql.inference.gpm.column.Column.prototype.inferenceql$inference$gpm$proto$Condition$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.column.Column.prototype.inferenceql$inference$gpm$proto$Condition$condition$arity$2 = (function (this$,conditions){
var self__ = this;
var this$__$1 = this;
return inferenceql.inference.gpm.conditioned.condition(this$__$1,conditions);
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#inferenceql.inference.gpm.column.Column{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$var_DASH_name,self__.var_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stattype,self__.stattype],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$categories,self__.categories],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$assignments,self__.assignments],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hyperparameters,self__.hyperparameters],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hyper_DASH_grid,self__.hyper_grid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$metadata,self__.metadata],null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3723){
var self__ = this;
var G__3723__$1 = this;
return (new cljs.core.RecordIter((0),G__3723__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$var_DASH_name,cljs.core.cst$kw$stattype,cljs.core.cst$kw$categories,cljs.core.cst$kw$assignments,cljs.core.cst$kw$hyperparameters,cljs.core.cst$kw$hyper_DASH_grid,cljs.core.cst$kw$metadata], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new inferenceql.inference.gpm.column.Column(self__.var_name,self__.stattype,self__.categories,self__.assignments,self__.hyperparameters,self__.hyper_grid,self__.metadata,self__.__meta,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.column.Column.prototype.inferenceql$inference$gpm$proto$Score$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.column.Column.prototype.inferenceql$inference$gpm$proto$Score$logpdf_score$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce_kv((function (acc,___$2,category){
return (acc + inferenceql.inference.gpm.proto.logpdf_score(category));
}),(0),self__.categories);
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__3741 = (function (coll__4469__auto__){
return (-685870240 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__3741(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3725,other3726){
var self__ = this;
var this3725__$1 = this;
return (((!((other3726 == null)))) && ((((this3725__$1.constructor === other3726.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3725__$1.var_name,other3726.var_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3725__$1.stattype,other3726.stattype)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3725__$1.categories,other3726.categories)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3725__$1.assignments,other3726.assignments)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3725__$1.hyperparameters,other3726.hyperparameters)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3725__$1.hyper_grid,other3726.hyper_grid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3725__$1.metadata,other3726.metadata)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3725__$1.__extmap,other3726.__extmap)))))))))))))))))));
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$assignments,null,cljs.core.cst$kw$hyperparameters,null,cljs.core.cst$kw$categories,null,cljs.core.cst$kw$hyper_DASH_grid,null,cljs.core.cst$kw$var_DASH_name,null,cljs.core.cst$kw$stattype,null,cljs.core.cst$kw$metadata,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new inferenceql.inference.gpm.column.Column(self__.var_name,self__.stattype,self__.categories,self__.assignments,self__.hyperparameters,self__.hyper_grid,self__.metadata,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k3724){
var self__ = this;
var this__4479__auto____$1 = this;
var G__3742 = k3724;
var G__3742__$1 = (((G__3742 instanceof cljs.core.Keyword))?G__3742.fqn:null);
switch (G__3742__$1) {
case "var-name":
case "stattype":
case "categories":
case "assignments":
case "hyperparameters":
case "hyper-grid":
case "metadata":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k3724);

}
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__3723){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__3743 = cljs.core.keyword_identical_QMARK_;
var expr__3744 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__3746 = cljs.core.cst$kw$var_DASH_name;
var G__3747 = expr__3744;
return (pred__3743.cljs$core$IFn$_invoke$arity$2 ? pred__3743.cljs$core$IFn$_invoke$arity$2(G__3746,G__3747) : pred__3743.call(null,G__3746,G__3747));
})())){
return (new inferenceql.inference.gpm.column.Column(G__3723,self__.stattype,self__.categories,self__.assignments,self__.hyperparameters,self__.hyper_grid,self__.metadata,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3748 = cljs.core.cst$kw$stattype;
var G__3749 = expr__3744;
return (pred__3743.cljs$core$IFn$_invoke$arity$2 ? pred__3743.cljs$core$IFn$_invoke$arity$2(G__3748,G__3749) : pred__3743.call(null,G__3748,G__3749));
})())){
return (new inferenceql.inference.gpm.column.Column(self__.var_name,G__3723,self__.categories,self__.assignments,self__.hyperparameters,self__.hyper_grid,self__.metadata,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3750 = cljs.core.cst$kw$categories;
var G__3751 = expr__3744;
return (pred__3743.cljs$core$IFn$_invoke$arity$2 ? pred__3743.cljs$core$IFn$_invoke$arity$2(G__3750,G__3751) : pred__3743.call(null,G__3750,G__3751));
})())){
return (new inferenceql.inference.gpm.column.Column(self__.var_name,self__.stattype,G__3723,self__.assignments,self__.hyperparameters,self__.hyper_grid,self__.metadata,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3752 = cljs.core.cst$kw$assignments;
var G__3753 = expr__3744;
return (pred__3743.cljs$core$IFn$_invoke$arity$2 ? pred__3743.cljs$core$IFn$_invoke$arity$2(G__3752,G__3753) : pred__3743.call(null,G__3752,G__3753));
})())){
return (new inferenceql.inference.gpm.column.Column(self__.var_name,self__.stattype,self__.categories,G__3723,self__.hyperparameters,self__.hyper_grid,self__.metadata,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3754 = cljs.core.cst$kw$hyperparameters;
var G__3755 = expr__3744;
return (pred__3743.cljs$core$IFn$_invoke$arity$2 ? pred__3743.cljs$core$IFn$_invoke$arity$2(G__3754,G__3755) : pred__3743.call(null,G__3754,G__3755));
})())){
return (new inferenceql.inference.gpm.column.Column(self__.var_name,self__.stattype,self__.categories,self__.assignments,G__3723,self__.hyper_grid,self__.metadata,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3756 = cljs.core.cst$kw$hyper_DASH_grid;
var G__3757 = expr__3744;
return (pred__3743.cljs$core$IFn$_invoke$arity$2 ? pred__3743.cljs$core$IFn$_invoke$arity$2(G__3756,G__3757) : pred__3743.call(null,G__3756,G__3757));
})())){
return (new inferenceql.inference.gpm.column.Column(self__.var_name,self__.stattype,self__.categories,self__.assignments,self__.hyperparameters,G__3723,self__.metadata,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3758 = cljs.core.cst$kw$metadata;
var G__3759 = expr__3744;
return (pred__3743.cljs$core$IFn$_invoke$arity$2 ? pred__3743.cljs$core$IFn$_invoke$arity$2(G__3758,G__3759) : pred__3743.call(null,G__3758,G__3759));
})())){
return (new inferenceql.inference.gpm.column.Column(self__.var_name,self__.stattype,self__.categories,self__.assignments,self__.hyperparameters,self__.hyper_grid,G__3723,self__.__meta,self__.__extmap,null));
} else {
return (new inferenceql.inference.gpm.column.Column(self__.var_name,self__.stattype,self__.categories,self__.assignments,self__.hyperparameters,self__.hyper_grid,self__.metadata,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__3723),null));
}
}
}
}
}
}
}
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$var_DASH_name,self__.var_name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$stattype,self__.stattype,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$categories,self__.categories,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$assignments,self__.assignments,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$hyperparameters,self__.hyperparameters,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$hyper_DASH_grid,self__.hyper_grid,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$metadata,self__.metadata,null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.column.Column.prototype.inferenceql$inference$gpm$proto$Constrain$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.column.Column.prototype.inferenceql$inference$gpm$proto$Constrain$constrain$arity$3 = (function (this$,event,opts){
var self__ = this;
var this$__$1 = this;
return inferenceql.inference.gpm.constrained.constrain(this$__$1,event,opts);
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__3723){
var self__ = this;
var this__4471__auto____$1 = this;
return (new inferenceql.inference.gpm.column.Column(self__.var_name,self__.stattype,self__.categories,self__.assignments,self__.hyperparameters,self__.hyper_grid,self__.metadata,G__3723,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.column.Column.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(inferenceql.inference.gpm.column.Column.prototype.inferenceql$inference$gpm$proto$Incorporate$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.column.Column.prototype.inferenceql$inference$gpm$proto$Incorporate$incorporate$arity$2 = (function (this$,values){
var self__ = this;
var this$__$1 = this;
var weights = inferenceql.inference.gpm.column.crp_weights(this$__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$alpha,(1)));
var category = inferenceql.inference.primitives.simulate.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$log_DASH_categorical,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,weights], null));
var category__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$aux,category))?cljs.core.gensym.cljs$core$IFn$_invoke$arity$0():category);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$categories,category__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__3720_SHARP_){
return inferenceql.inference.gpm.proto.incorporate(p1__3720_SHARP_,values);
}),inferenceql.inference.gpm.column.generate_category(this$__$1))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assignments,values], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (cats){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cats,category__$1,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}),cljs.core.PersistentArrayMap.EMPTY));
}));

(inferenceql.inference.gpm.column.Column.prototype.inferenceql$inference$gpm$proto$Incorporate$unincorporate$arity$2 = (function (this$,values){
var self__ = this;
var this$__$1 = this;
var cats = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assignments,values], null),null);
var cat_remove = cljs.core.rand_nth(cljs.core.keys(cats));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assignments,values,cat_remove], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,(1))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assignments,values], null),(function (p1__3721_SHARP_){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__3721_SHARP_,cat_remove) === (0))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__3721_SHARP_,cat_remove);
} else {
return p1__3721_SHARP_;
}
})),cljs.core.cst$kw$categories,(function (p1__3722_SHARP_){
var cat_remove_SINGLEQUOTE_ = inferenceql.inference.gpm.proto.unincorporate(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__3722_SHARP_,cat_remove),values);
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cat_remove_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$suff_DASH_stats,cljs.core.cst$kw$n], null)) === (0))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__3722_SHARP_,cat_remove);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__3722_SHARP_,cat_remove,cat_remove_SINGLEQUOTE_);
}
}));
}));

(inferenceql.inference.gpm.column.Column.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_DASH_name,cljs.core.cst$sym$stattype,cljs.core.cst$sym$categories,cljs.core.cst$sym$assignments,cljs.core.cst$sym$hyperparameters,cljs.core.cst$sym$hyper_DASH_grid,cljs.core.cst$sym$metadata], null);
}));

(inferenceql.inference.gpm.column.Column.cljs$lang$type = true);

(inferenceql.inference.gpm.column.Column.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"inferenceql.inference.gpm.column/Column",null,(1),null));
}));

(inferenceql.inference.gpm.column.Column.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"inferenceql.inference.gpm.column/Column");
}));

/**
 * Positional factory function for inferenceql.inference.gpm.column/Column.
 */
inferenceql.inference.gpm.column.__GT_Column = (function inferenceql$inference$gpm$column$__GT_Column(var_name,stattype,categories,assignments,hyperparameters,hyper_grid,metadata){
return (new inferenceql.inference.gpm.column.Column(var_name,stattype,categories,assignments,hyperparameters,hyper_grid,metadata,null,null,null));
});

/**
 * Factory function for inferenceql.inference.gpm.column/Column, taking a map of keywords to field values.
 */
inferenceql.inference.gpm.column.map__GT_Column = (function inferenceql$inference$gpm$column$map__GT_Column(G__3727){
var extmap__4512__auto__ = (function (){var G__3760 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__3727,cljs.core.cst$kw$var_DASH_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$stattype,cljs.core.cst$kw$categories,cljs.core.cst$kw$assignments,cljs.core.cst$kw$hyperparameters,cljs.core.cst$kw$hyper_DASH_grid,cljs.core.cst$kw$metadata], 0));
if(cljs.core.record_QMARK_(G__3727)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__3760);
} else {
return G__3760;
}
})();
return (new inferenceql.inference.gpm.column.Column(cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(G__3727),cljs.core.cst$kw$stattype.cljs$core$IFn$_invoke$arity$1(G__3727),cljs.core.cst$kw$categories.cljs$core$IFn$_invoke$arity$1(G__3727),cljs.core.cst$kw$assignments.cljs$core$IFn$_invoke$arity$1(G__3727),cljs.core.cst$kw$hyperparameters.cljs$core$IFn$_invoke$arity$1(G__3727),cljs.core.cst$kw$hyper_DASH_grid.cljs$core$IFn$_invoke$arity$1(G__3727),cljs.core.cst$kw$metadata.cljs$core$IFn$_invoke$arity$1(G__3727),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Constructor for a Column GPM, given data for the column and latent
 *   assignments of data to their respective categories. Used in CrossCat inference.
 * 
 *   var-name: the name of the variable contained in the column.
 *   stattype: the statistical type of the variable contained in the column (e.g. :bernoulli).
 *   hyperparameters: the hyperparameters of column; these persist across all categories.
 *   latents: a map of the below structure, used to keep track of row-category assignments,
 *         as well as category sufficient statistics:
 *           {:alpha  number                     The concentration parameter for the Column's CRP
 *            :counts {category-name count}      Maps category name to size of the category. Updated
 *                                               incrementally instead of being calculated on the fly.
 *            :y {row-identifier category-name}  Maps rows to their current category assignment.
 *   data: the data belonging to the Column. Must either be a map of {row-id datum} or a vector
 *      of data (that includes nil values).
 *   options (optional): Information needed in the column; e.g. For a :categorical Column,
 *                    `options` would contain a list of possible values the variable could take.
 *   crosscat (optional): Flag to indicate use in a CrossCat model. This affects how data is handled
 *                     internally, as CrossCat inference relies on unique row identifiers for
 *                     efficient inference.
 */
inferenceql.inference.gpm.column.construct_column_from_latents = (function inferenceql$inference$gpm$column$construct_column_from_latents(var_args){
var G__3765 = arguments.length;
switch (G__3765) {
case 5:
return inferenceql.inference.gpm.column.construct_column_from_latents.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return inferenceql.inference.gpm.column.construct_column_from_latents.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.gpm.column.construct_column_from_latents.cljs$core$IFn$_invoke$arity$5 = (function (var_name,stattype,hyperparameters,latents,data){
return inferenceql.inference.gpm.column.construct_column_from_latents.cljs$core$IFn$_invoke$arity$6(var_name,stattype,hyperparameters,latents,data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$crosscat,false], null));
}));

(inferenceql.inference.gpm.column.construct_column_from_latents.cljs$core$IFn$_invoke$arity$6 = (function (var_name,stattype,hyperparameters,latents,data,p__3766){
var map__3767 = p__3766;
var map__3767__$1 = cljs.core.__destructure_map(map__3767);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3767__$1,cljs.core.cst$kw$options);
var crosscat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3767__$1,cljs.core.cst$kw$crosscat);
var ys = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(latents);
var category_names = cljs.core.keys(cljs.core.cst$kw$counts.cljs$core$IFn$_invoke$arity$1(latents));
var data__$1 = ((cljs.core.map_QMARK_(data))?data:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),data));
var metadata = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stattype,cljs.core.cst$kw$categorical))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,var_name):cljs.core.PersistentArrayMap.EMPTY);
var categories = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,category_names,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return inferenceql.inference.gpm.primitive_gpms.__GT_pGPM.cljs$core$IFn$_invoke$arity$variadic(stattype,var_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$hyperparameters,hyperparameters,cljs.core.cst$kw$options,metadata], 0));
}))));
var categories_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__3768){
var vec__3769 = p__3768;
var row_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3769,(0),null);
var datum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3769,(1),null);
if((!((datum == null)))){
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ys,row_id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,category,(function (p1__3763_SHARP_){
return inferenceql.inference.gpm.proto.incorporate(p1__3763_SHARP_,cljs.core.PersistentArrayMap.createAsIfByAssoc([var_name,datum]));
}));
} else {
return acc;
}
}),categories,data__$1);
var hyper_grid = inferenceql.inference.gpm.primitive_gpms.hyper_grid(stattype,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.vals(data__$1)));
var assignments = cljs.core.reduce_kv((function (assignments_SINGLEQUOTE_,row_id,data__$2){
var y = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(latents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,row_id], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(assignments_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([var_name,data__$2]),y], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}),cljs.core.PersistentArrayMap.EMPTY,data__$1);
var column = inferenceql.inference.gpm.column.__GT_Column(var_name,stattype,categories_SINGLEQUOTE_,assignments,hyperparameters,hyper_grid,metadata);
if(cljs.core.truth_(crosscat)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(column,cljs.core.cst$kw$data,data__$1);
} else {
return column;
}
}));

(inferenceql.inference.gpm.column.construct_column_from_latents.cljs$lang$maxFixedArity = 6);

/**
 * Checks if the given GPM is a Column.
 */
inferenceql.inference.gpm.column.column_QMARK_ = (function inferenceql$inference$gpm$column$column_QMARK_(stattype){
return ((cljs.core.record_QMARK_(stattype)) && ((stattype instanceof inferenceql.inference.gpm.column.Column)));
});
