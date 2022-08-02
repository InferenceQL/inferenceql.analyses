// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('inferenceql.inference.utils');
goog.require('inferenceql.inference.primitives');
goog.require('inferenceql.inference.gpm.column');
goog.require('inferenceql.inference.gpm.conditioned');
goog.require('inferenceql.inference.gpm.constrained');
goog.require('inferenceql.inference.gpm.proto');
goog.require('inferenceql.inference.gpm.utils');
goog.require('clojure.set');
/**
 * Given a map of columns, and targets, returns a map of category probabilities of the targets.
 */
inferenceql.inference.gpm.view.column_logpdfs = (function inferenceql$inference$gpm$view$column_logpdfs(var_args){
var G__3814 = arguments.length;
switch (G__3814) {
case 2:
return inferenceql.inference.gpm.view.column_logpdfs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return inferenceql.inference.gpm.view.column_logpdfs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.gpm.view.column_logpdfs.cljs$core$IFn$_invoke$arity$2 = (function (columns,targets){
return inferenceql.inference.gpm.view.column_logpdfs.cljs$core$IFn$_invoke$arity$3(columns,targets,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$add_DASH_aux,false], null));
}));

(inferenceql.inference.gpm.view.column_logpdfs.cljs$core$IFn$_invoke$arity$3 = (function (columns,targets,p__3815){
var map__3816 = p__3815;
var map__3816__$1 = cljs.core.__destructure_map(map__3816);
var add_aux = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3816__$1,cljs.core.cst$kw$add_DASH_aux);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core._PLUS_,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__3817){
var vec__3818 = p__3817;
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3818,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3818,(1),null);
return inferenceql.inference.gpm.column.category_logpdfs.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,var_name),cljs.core.PersistentArrayMap.createAsIfByAssoc([var_name,target]),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$add_DASH_aux,add_aux], null));
}),targets));
}));

(inferenceql.inference.gpm.view.column_logpdfs.cljs$lang$maxFixedArity = 3);

/**
 * Add m auxiliary categories to the given view.
 */
inferenceql.inference.gpm.view.add_aux_categories = (function inferenceql$inference$gpm$view$add_aux_categories(view,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (view_SINGLEQUOTE_,_){
var symb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(view_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$counts,symb], null),(0)),cljs.core.cst$kw$columns,(function (col_dict){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (col_dict_SINGLEQUOTE_,p__3822){
var vec__3823 = p__3822;
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3823,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3823,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(col_dict_SINGLEQUOTE_,var_name,inferenceql.inference.gpm.column.add_category(col,symb));
}),cljs.core.PersistentArrayMap.EMPTY,col_dict);
}));
}),view,cljs.core.range.cljs$core$IFn$_invoke$arity$1(m));
});
/**
 * Grabs data from view by row-id.
 */
inferenceql.inference.gpm.view.get_data = (function inferenceql$inference$gpm$view$get_data(view,row_id){
return cljs.core.reduce_kv((function (x,var_name,column){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,var_name,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,row_id], null)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$columns.cljs$core$IFn$_invoke$arity$1(view));
});
/**
 * Filters empty categories from the given view.
 */
inferenceql.inference.gpm.view.filter_empty_categories = (function inferenceql$inference$gpm$view$filter_empty_categories(view){
var to_remove = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__3826_SHARP_){
return (cljs.core.second(p1__3826_SHARP_) === (0));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$counts], null))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (view_SINGLEQUOTE_,category_to_remove){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(view_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$counts], null),cljs.core.dissoc,category_to_remove),cljs.core.cst$kw$columns,(function (col_dict){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (col_dict_SINGLEQUOTE_,var_name){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(col_dict_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var_name,cljs.core.cst$kw$categories], null),cljs.core.dissoc,category_to_remove);
}),col_dict,cljs.core.keys(col_dict));
}));
}),view,to_remove);
});
/**
 * Incorporate method for CrossCat inference machinery.
 *   Incorporates `values` into the category specified by `category-key`.
 */
inferenceql.inference.gpm.view.incorporate_into_category = (function inferenceql$inference$gpm$view$incorporate_into_category(var_args){
var G__3830 = arguments.length;
switch (G__3830) {
case 3:
return inferenceql.inference.gpm.view.incorporate_into_category.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return inferenceql.inference.gpm.view.incorporate_into_category.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.gpm.view.incorporate_into_category.cljs$core$IFn$_invoke$arity$3 = (function (view,values,category_key){
return inferenceql.inference.gpm.view.incorporate_into_category.cljs$core$IFn$_invoke$arity$4(view,values,category_key,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
}));

(inferenceql.inference.gpm.view.incorporate_into_category.cljs$core$IFn$_invoke$arity$4 = (function (view,values,category_key,row_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$y,row_id], null),category_key),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$counts,category_key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assignments,values,cljs.core.cst$kw$categories,category_key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assignments,values,cljs.core.cst$kw$row_DASH_ids], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__3827_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__3827_SHARP_,row_id);
}),cljs.core.PersistentHashSet.EMPTY)),cljs.core.cst$kw$columns,(function (p1__3828_SHARP_){
return cljs.core.reduce_kv((function (columns_SINGLEQUOTE_,col_name,column){
var col_data = cljs.core.PersistentArrayMap.createAsIfByAssoc([col_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,col_name)]);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(columns_SINGLEQUOTE_,col_name,inferenceql.inference.gpm.column.crosscat_incorporate(column,col_data,category_key,row_id));
}),cljs.core.PersistentArrayMap.EMPTY,p1__3828_SHARP_);
}));
}));

(inferenceql.inference.gpm.view.incorporate_into_category.cljs$lang$maxFixedArity = 4);

/**
 * Unincorporate method for CrossCat inference machinery.
 *   Unincorporates `values` associated with from the category
 *   specified by `category-remove`.
 */
inferenceql.inference.gpm.view.unincorporate_from_category = (function inferenceql$inference$gpm$view$unincorporate_from_category(var_args){
var G__3835 = arguments.length;
switch (G__3835) {
case 3:
return inferenceql.inference.gpm.view.unincorporate_from_category.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return inferenceql.inference.gpm.view.unincorporate_from_category.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.gpm.view.unincorporate_from_category.cljs$core$IFn$_invoke$arity$3 = (function (view,values,category_remove){
var row_id_remove = cljs.core.rand_nth(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assignments,values,cljs.core.cst$kw$row_DASH_ids], null))));
return inferenceql.inference.gpm.view.unincorporate_from_category.cljs$core$IFn$_invoke$arity$4(view,values,category_remove,row_id_remove);
}));

(inferenceql.inference.gpm.view.unincorporate_from_category.cljs$core$IFn$_invoke$arity$4 = (function (view,values,category_remove,row_id_remove){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$y], null),cljs.core.dissoc,row_id_remove),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$counts,category_remove], null),cljs.core.dec),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assignments,values,cljs.core.cst$kw$categories,category_remove], null),cljs.core.dec),cljs.core.cst$kw$assignments,(function (assignments){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(assignments,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [values,cljs.core.cst$kw$categories,category_remove], null)) === (0))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(assignments,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [values,cljs.core.cst$kw$categories], null),cljs.core.dissoc,category_remove);
} else {
return assignments;
}
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assignments,values,cljs.core.cst$kw$row_DASH_ids], null),(function (p1__3832_SHARP_){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__3832_SHARP_,row_id_remove);
})),cljs.core.cst$kw$assignments,(function (assignments){
if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(assignments,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [values,cljs.core.cst$kw$row_DASH_ids], null)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(assignments,values);
} else {
return assignments;
}
})),cljs.core.cst$kw$columns,(function (p1__3833_SHARP_){
return cljs.core.reduce_kv((function (columns_SINGLEQUOTE_,col_name,column){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(columns_SINGLEQUOTE_,col_name,inferenceql.inference.gpm.column.crosscat_unincorporate(column,category_remove,row_id_remove));
}),cljs.core.PersistentArrayMap.EMPTY,p1__3833_SHARP_);
}));
}));

(inferenceql.inference.gpm.view.unincorporate_from_category.cljs$lang$maxFixedArity = 4);

inferenceql.inference.gpm.view.incorporate_by_rowid = (function inferenceql$inference$gpm$view$incorporate_by_rowid(gpm,values,row_id){
var category_key = inferenceql.inference.primitives.crp_simulate_counts(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$alpha,cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(gpm)),cljs.core.cst$kw$counts,cljs.core.cst$kw$counts.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(gpm))], null));
return inferenceql.inference.gpm.view.incorporate_into_category.cljs$core$IFn$_invoke$arity$4(gpm,values,category_key,row_id);
});
/**
 * doc-string
 */
inferenceql.inference.gpm.view.update_hyper_grids = (function inferenceql$inference$gpm$view$update_hyper_grids(view){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(view,cljs.core.cst$kw$columns,(function (p1__3837_SHARP_){
return cljs.core.reduce_kv((function (columns_SINGLEQUOTE_,col_name,column){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(columns_SINGLEQUOTE_,col_name,inferenceql.inference.gpm.column.update_hyper_grid(column));
}),cljs.core.PersistentArrayMap.EMPTY,p1__3837_SHARP_);
}));
});
/**
 * Given a View, a variable name, and a Column GPM, incorporates the Column into the View.
 */
inferenceql.inference.gpm.view.incorporate_column = (function inferenceql$inference$gpm$view$incorporate_column(view,column){
var var_name = cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(column);
var col_data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(column);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$columns,var_name], null),inferenceql.inference.gpm.column.update_column(column,cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(view))),cljs.core.cst$kw$assignments,(function (assignments){
if(cljs.core.empty_QMARK_(assignments)){
return cljs.core.reduce_kv((function (assignments_SINGLEQUOTE_,row_id,datum){
var datum_SINGLEQUOTE_ = cljs.core.PersistentArrayMap.createAsIfByAssoc([var_name,datum]);
var y = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,row_id], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(assignments_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datum_SINGLEQUOTE_,cljs.core.cst$kw$categories,y], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datum_SINGLEQUOTE_,cljs.core.cst$kw$row_DASH_ids], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__3838_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__3838_SHARP_,row_id);
}),cljs.core.PersistentHashSet.EMPTY));
}),cljs.core.PersistentArrayMap.EMPTY,col_data);
} else {
return cljs.core.reduce_kv((function (m,k,v){
var row_ids = cljs.core.cst$kw$row_DASH_ids.cljs$core$IFn$_invoke$arity$1(v);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m_SINGLEQUOTE_,row_id){
var row_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(col_data,row_id);
var k_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(k,var_name,row_data);
var y = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,row_id], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,cljs.core.cst$kw$categories,y], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,cljs.core.cst$kw$row_DASH_ids], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__3839_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__3839_SHARP_,row_id);
}),cljs.core.PersistentHashSet.EMPTY));
}),m,row_ids);
}),cljs.core.PersistentArrayMap.EMPTY,assignments);
}
}));
});
/**
 * Given a View and a variable name unincorporates the Column from the View.
 */
inferenceql.inference.gpm.view.unincorporate_column = (function inferenceql$inference$gpm$view$unincorporate_column(view,var_name){
var singleton_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.cst$kw$columns.cljs$core$IFn$_invoke$arity$1(view)));
var view_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(view,cljs.core.cst$kw$columns,cljs.core.dissoc,var_name);
if(singleton_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(view_SINGLEQUOTE_,cljs.core.cst$kw$assignments,cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(view_SINGLEQUOTE_,cljs.core.cst$kw$assignments,(function (assignments){
var assignments_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__3840){
var vec__3841 = p__3840;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3841,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3841,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(k,var_name),v]);
}),assignments);
var merge_fn = (function (a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b))){
} else {
throw (new Error("Assert failed: (= (keys a) (keys b))"));
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$categories,cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$categories.cljs$core$IFn$_invoke$arity$1(a),cljs.core.cst$kw$categories.cljs$core$IFn$_invoke$arity$1(b)], 0)),cljs.core.cst$kw$row_DASH_ids,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$row_DASH_ids.cljs$core$IFn$_invoke$arity$1(a),cljs.core.cst$kw$row_DASH_ids.cljs$core$IFn$_invoke$arity$1(b))], null);
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,merge_fn,assignments_SINGLEQUOTE_);
}));
}
});
/**
 * Given a view and list of row-ids, infers the assignment of each row with both the
 *   current categories in the view, as well as `m` specified auxiliary ones.
 *   This is Algorithm 8 from http://www.stat.columbia.edu/npbayes/papers/neal_sampling.pdf
 */
inferenceql.inference.gpm.view.infer_row_category_view = (function inferenceql$inference$gpm$view$infer_row_category_view(var_args){
var G__3845 = arguments.length;
switch (G__3845) {
case 2:
return inferenceql.inference.gpm.view.infer_row_category_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return inferenceql.inference.gpm.view.infer_row_category_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.gpm.view.infer_row_category_view.cljs$core$IFn$_invoke$arity$2 = (function (view,m){
return inferenceql.inference.gpm.view.infer_row_category_view.cljs$core$IFn$_invoke$arity$3(view,m,null);
}));

(inferenceql.inference.gpm.view.infer_row_category_view.cljs$core$IFn$_invoke$arity$3 = (function (view,m,supplied_rowids){
var row_ids = cljs.core.shuffle(cljs.core.keys(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(view))));
var all_row_ids = (supplied_rowids == null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (view_SINGLEQUOTE_,row_id){
if(((all_row_ids) || (cljs.core.contains_QMARK_(supplied_rowids,row_id)))){
var row_data = inferenceql.inference.gpm.view.get_data(view_SINGLEQUOTE_,row_id);
var latents = cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(view_SINGLEQUOTE_);
var y = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(latents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,row_id], null));
var singleton_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(latents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$counts,y], null)));
var m__$1 = ((singleton_QMARK_)?(m - (1)):m);
var view_minus = inferenceql.inference.gpm.view.add_aux_categories(inferenceql.inference.gpm.view.unincorporate_from_category.cljs$core$IFn$_invoke$arity$4(view_SINGLEQUOTE_,row_data,y,row_id),m__$1);
var lls = inferenceql.inference.gpm.view.column_logpdfs.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$columns.cljs$core$IFn$_invoke$arity$1(view_minus),row_data);
var crp_weights = inferenceql.inference.gpm.utils.crp_weights(view_minus,m__$1);
var logps = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,inferenceql.inference.utils.log_normalize(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lls,crp_weights], 0)))], null);
var y_SINGLEQUOTE_ = inferenceql.inference.primitives.simulate.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$log_DASH_categorical,logps);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,y_SINGLEQUOTE_)){
return view_SINGLEQUOTE_;
} else {
return inferenceql.inference.gpm.view.filter_empty_categories(inferenceql.inference.gpm.view.incorporate_into_category.cljs$core$IFn$_invoke$arity$4(view_minus,row_data,y_SINGLEQUOTE_,row_id));
}
} else {
return view_SINGLEQUOTE_;
}
}),view,cljs.core.seq(row_ids));
}));

(inferenceql.inference.gpm.view.infer_row_category_view.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {inferenceql.inference.gpm.proto.Insert}
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
inferenceql.inference.gpm.view.View = (function (columns,latents,assignments,__meta,__extmap,__hash){
this.columns = columns;
this.latents = latents;
this.assignments = assignments;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$Variables$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$Variables$variables$arity$1 = (function (p__3856){
var self__ = this;
var map__3857 = p__3856;
var map__3857__$1 = cljs.core.__destructure_map(map__3857);
var columns__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3857__$1,cljs.core.cst$kw$columns);
var map__3858 = this;
var map__3858__$1 = cljs.core.__destructure_map(map__3858);
var columns__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3858__$1,cljs.core.cst$kw$columns);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(inferenceql.inference.gpm.proto.variables),cljs.core.vals(columns__$2));
}));

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$GPM$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3 = (function (_,targets,constraints){
var self__ = this;
var ___$1 = this;
var modeled_QMARK_ = cljs.core.set(cljs.core.keys(self__.columns));
var targets__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__3847_SHARP_){
var G__3859 = cljs.core.key(p1__3847_SHARP_);
return (modeled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? modeled_QMARK_.cljs$core$IFn$_invoke$arity$1(G__3859) : modeled_QMARK_.call(null,G__3859));
}),targets));
var constraints__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__3848_SHARP_){
var G__3860 = cljs.core.key(p1__3848_SHARP_);
return (modeled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? modeled_QMARK_.cljs$core$IFn$_invoke$arity$1(G__3860) : modeled_QMARK_.call(null,G__3860));
}),constraints));
var alpha = cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(self__.latents);
var crp_counts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$counts.cljs$core$IFn$_invoke$arity$1(self__.latents),cljs.core.cst$kw$aux,alpha);
var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(crp_counts));
var crp_weights = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__3861 = (v / n);
return Math.log(G__3861);
})());
}),cljs.core.PersistentArrayMap.EMPTY,crp_counts);
var lls_joint = inferenceql.inference.gpm.view.column_logpdfs.cljs$core$IFn$_invoke$arity$3(self__.columns,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([targets__$1,constraints__$1], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$add_DASH_aux,true], null));
var logp_joint = inferenceql.inference.utils.logsumexp(cljs.core.vals(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lls_joint,crp_weights], 0))));
var lls_constraints = inferenceql.inference.gpm.view.column_logpdfs.cljs$core$IFn$_invoke$arity$3(self__.columns,constraints__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$add_DASH_aux,true], null));
var logp_constraints = inferenceql.inference.utils.logsumexp(cljs.core.vals(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lls_constraints,crp_weights], 0))));
return (logp_joint - logp_constraints);
}));

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$GPM$simulate$arity$3 = (function (_,targets,constraints){
var self__ = this;
var ___$1 = this;
var modeled_QMARK_ = cljs.core.set(cljs.core.keys(self__.columns));
var targets__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(modeled_QMARK_,targets);
var constraints__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__3849_SHARP_){
var G__3862 = cljs.core.key(p1__3849_SHARP_);
return (modeled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? modeled_QMARK_.cljs$core$IFn$_invoke$arity$1(G__3862) : modeled_QMARK_.call(null,G__3862));
}),constraints));
if((targets__$1 == null)){
return cljs.core.List.EMPTY;
} else {
var crp_counts = cljs.core.cst$kw$counts.cljs$core$IFn$_invoke$arity$1(self__.latents);
var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(crp_counts));
var alpha = cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(self__.latents);
var z = (n + alpha);
var crp_weights = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__3863 = (v / z);
return Math.log(G__3863);
})());
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aux,(function (){var G__3864 = (alpha / z);
return Math.log(G__3864);
})()], null),crp_counts);
var constraint_weights = ((cljs.core.empty_QMARK_(constraints__$1))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core._PLUS_,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__3865){
var vec__3866 = p__3865;
var constraint_var = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3866,(0),null);
var constraint_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3866,(1),null);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.columns,constraint_var);
var aux = inferenceql.inference.gpm.column.generate_category(column);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inferenceql.inference.gpm.column.category_logpdfs.cljs$core$IFn$_invoke$arity$2(column,cljs.core.PersistentArrayMap.createAsIfByAssoc([constraint_var,constraint_val])),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aux,inferenceql.inference.gpm.proto.logpdf(aux,cljs.core.PersistentArrayMap.createAsIfByAssoc([constraint_var,constraint_val]),cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
}),constraints__$1)));
var unnormalized_weights = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([crp_weights,constraint_weights], 0));
var weights = inferenceql.inference.utils.log_normalize(unnormalized_weights);
var logps = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,weights], null);
var category_idx = inferenceql.inference.primitives.simulate.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$log_DASH_categorical,logps);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([var_name,inferenceql.inference.gpm.column.crosscat_simulate(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.columns,var_name),category_idx)]);
}),targets__$1));
}
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k3852,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__3869 = k3852;
var G__3869__$1 = (((G__3869 instanceof cljs.core.Keyword))?G__3869.fqn:null);
switch (G__3869__$1) {
case "columns":
return self__.columns;

break;
case "latents":
return self__.latents;

break;
case "assignments":
return self__.assignments;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k3852,else__4475__auto__);

}
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__3870){
var vec__3871 = p__3870;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3871,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3871,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$Condition$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$Condition$condition$arity$2 = (function (this$,conditions){
var self__ = this;
var this$__$1 = this;
return inferenceql.inference.gpm.conditioned.condition(this$__$1,conditions);
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#inferenceql.inference.gpm.view.View{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$columns,self__.columns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$latents,self__.latents],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$assignments,self__.assignments],null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3851){
var self__ = this;
var G__3851__$1 = this;
return (new cljs.core.RecordIter((0),G__3851__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$columns,cljs.core.cst$kw$latents,cljs.core.cst$kw$assignments], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new inferenceql.inference.gpm.view.View(self__.columns,self__.latents,self__.assignments,self__.__meta,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$Score$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$Score$logpdf_score$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__3874){
var vec__3875 = p__3874;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3875,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3875,(1),null);
return (acc + inferenceql.inference.gpm.proto.logpdf_score(column));
}),(0),self__.columns);
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__3878 = (function (coll__4469__auto__){
return (-1889079260 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__3878(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3853,other3854){
var self__ = this;
var this3853__$1 = this;
return (((!((other3854 == null)))) && ((((this3853__$1.constructor === other3854.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3853__$1.columns,other3854.columns)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3853__$1.latents,other3854.latents)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3853__$1.assignments,other3854.assignments)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3853__$1.__extmap,other3854.__extmap)))))))))));
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$assignments,null,cljs.core.cst$kw$latents,null,cljs.core.cst$kw$columns,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new inferenceql.inference.gpm.view.View(self__.columns,self__.latents,self__.assignments,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$Insert$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$Insert$insert$arity$2 = (function (this$,values){
var self__ = this;
var this$__$1 = this;
var category_key = inferenceql.inference.primitives.crp_simulate_counts(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$alpha,cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(self__.latents),cljs.core.cst$kw$counts,cljs.core.cst$kw$counts.cljs$core$IFn$_invoke$arity$1(self__.latents)], null));
var row_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var view_SINGLEQUOTE_ = inferenceql.inference.gpm.view.incorporate_into_category.cljs$core$IFn$_invoke$arity$4(this$__$1,values,category_key,row_id);
return inferenceql.inference.gpm.view.infer_row_category_view.cljs$core$IFn$_invoke$arity$3(view_SINGLEQUOTE_,(1),cljs.core.PersistentHashSet.createAsIfByAssoc([row_id]));
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k3852){
var self__ = this;
var this__4479__auto____$1 = this;
var G__3879 = k3852;
var G__3879__$1 = (((G__3879 instanceof cljs.core.Keyword))?G__3879.fqn:null);
switch (G__3879__$1) {
case "columns":
case "latents":
case "assignments":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k3852);

}
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__3851){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__3880 = cljs.core.keyword_identical_QMARK_;
var expr__3881 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__3883 = cljs.core.cst$kw$columns;
var G__3884 = expr__3881;
return (pred__3880.cljs$core$IFn$_invoke$arity$2 ? pred__3880.cljs$core$IFn$_invoke$arity$2(G__3883,G__3884) : pred__3880.call(null,G__3883,G__3884));
})())){
return (new inferenceql.inference.gpm.view.View(G__3851,self__.latents,self__.assignments,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3885 = cljs.core.cst$kw$latents;
var G__3886 = expr__3881;
return (pred__3880.cljs$core$IFn$_invoke$arity$2 ? pred__3880.cljs$core$IFn$_invoke$arity$2(G__3885,G__3886) : pred__3880.call(null,G__3885,G__3886));
})())){
return (new inferenceql.inference.gpm.view.View(self__.columns,G__3851,self__.assignments,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3887 = cljs.core.cst$kw$assignments;
var G__3888 = expr__3881;
return (pred__3880.cljs$core$IFn$_invoke$arity$2 ? pred__3880.cljs$core$IFn$_invoke$arity$2(G__3887,G__3888) : pred__3880.call(null,G__3887,G__3888));
})())){
return (new inferenceql.inference.gpm.view.View(self__.columns,self__.latents,G__3851,self__.__meta,self__.__extmap,null));
} else {
return (new inferenceql.inference.gpm.view.View(self__.columns,self__.latents,self__.assignments,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__3851),null));
}
}
}
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$columns,self__.columns,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$latents,self__.latents,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$assignments,self__.assignments,null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$Constrain$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$Constrain$constrain$arity$3 = (function (this$,event,opts){
var self__ = this;
var this$__$1 = this;
return inferenceql.inference.gpm.constrained.constrain(this$__$1,event,opts);
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__3851){
var self__ = this;
var this__4471__auto____$1 = this;
return (new inferenceql.inference.gpm.view.View(self__.columns,self__.latents,self__.assignments,G__3851,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.view.View.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$Incorporate$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$Incorporate$incorporate$arity$2 = (function (this$,values){
var self__ = this;
var this$__$1 = this;
var category_key = inferenceql.inference.primitives.crp_simulate_counts(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$alpha,cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(self__.latents),cljs.core.cst$kw$counts,cljs.core.cst$kw$counts.cljs$core$IFn$_invoke$arity$1(self__.latents)], null));
return inferenceql.inference.gpm.view.incorporate_into_category.cljs$core$IFn$_invoke$arity$3(this$__$1,values,category_key);
}));

(inferenceql.inference.gpm.view.View.prototype.inferenceql$inference$gpm$proto$Incorporate$unincorporate$arity$2 = (function (this$,values){
var self__ = this;
var this$__$1 = this;
var categories = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$assignments,values,cljs.core.cst$kw$categories], null));
var category_remove = cljs.core.rand_nth(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__3850_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$row_DASH_ids,p1__3850_SHARP_);
}),cljs.core.keys(categories)));
return inferenceql.inference.gpm.view.unincorporate_from_category.cljs$core$IFn$_invoke$arity$3(this$__$1,values,category_remove);
}));

(inferenceql.inference.gpm.view.View.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$columns,cljs.core.cst$sym$latents,cljs.core.cst$sym$assignments], null);
}));

(inferenceql.inference.gpm.view.View.cljs$lang$type = true);

(inferenceql.inference.gpm.view.View.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"inferenceql.inference.gpm.view/View",null,(1),null));
}));

(inferenceql.inference.gpm.view.View.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"inferenceql.inference.gpm.view/View");
}));

/**
 * Positional factory function for inferenceql.inference.gpm.view/View.
 */
inferenceql.inference.gpm.view.__GT_View = (function inferenceql$inference$gpm$view$__GT_View(columns,latents,assignments){
return (new inferenceql.inference.gpm.view.View(columns,latents,assignments,null,null,null));
});

/**
 * Factory function for inferenceql.inference.gpm.view/View, taking a map of keywords to field values.
 */
inferenceql.inference.gpm.view.map__GT_View = (function inferenceql$inference$gpm$view$map__GT_View(G__3855){
var extmap__4512__auto__ = (function (){var G__3889 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__3855,cljs.core.cst$kw$columns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$latents,cljs.core.cst$kw$assignments], 0));
if(cljs.core.record_QMARK_(G__3855)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__3889);
} else {
return G__3889;
}
})();
return (new inferenceql.inference.gpm.view.View(cljs.core.cst$kw$columns.cljs$core$IFn$_invoke$arity$1(G__3855),cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(G__3855),cljs.core.cst$kw$assignments.cljs$core$IFn$_invoke$arity$1(G__3855),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Constructor for a View GPM, given a spec for the View, latent
 *   assignments of data to their respective categories, statistical types of the columns,
 *   and data. Used in CrossCat inference.
 * 
 *   spec: a View specification, defined as map of {var-name var-hypers}.
 *   types: the statistical types of the variables contained in the columns (e.g. :bernoulli).
 *   latents: a map of the below structure, used to keep track of row-category assignments,
 *         as well as category sufficient statistics:
 *           {:alpha  number                     The concentration parameter for the Column's CRP
 *            :counts {category-name count}      Maps category name to size of the category. Updated
 *                                               incrementally instead of being calculated on the fly.
 *            :y {row-identifier category-name}  Maps rows to their current category assignment.
 *   data: the data belonging to the Column. Must be a map of {row-id {var-name value}},
 *      including nil values.
 *   options (optional): Information needed in the column; e.g. For a :categorical Column,
 *                    `options` would contain a list of possible values the variable could take.
 *   crosscat (optional): Flag to indicate use in a CrossCat model. This affects how data is handled
 *                     internally, as CrossCat inference relies on unique row identifiers for
 *                     efficient inference.
 */
inferenceql.inference.gpm.view.construct_view_from_latents = (function inferenceql$inference$gpm$view$construct_view_from_latents(var_args){
var G__3894 = arguments.length;
switch (G__3894) {
case 4:
return inferenceql.inference.gpm.view.construct_view_from_latents.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return inferenceql.inference.gpm.view.construct_view_from_latents.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.gpm.view.construct_view_from_latents.cljs$core$IFn$_invoke$arity$4 = (function (spec,latents,types,data){
return inferenceql.inference.gpm.view.construct_view_from_latents.cljs$core$IFn$_invoke$arity$5(spec,latents,types,data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$crosscat,false], null));
}));

(inferenceql.inference.gpm.view.construct_view_from_latents.cljs$core$IFn$_invoke$arity$5 = (function (spec,latents,types,data,p__3895){
var map__3896 = p__3895;
var map__3896__$1 = cljs.core.__destructure_map(map__3896);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3896__$1,cljs.core.cst$kw$options);
var crosscat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3896__$1,cljs.core.cst$kw$crosscat);
var hypers = cljs.core.cst$kw$hypers.cljs$core$IFn$_invoke$arity$1(spec);
var var_names = cljs.core.keys(hypers);
var columns = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var var_data = cljs.core.reduce_kv((function (m,row_id,row_data){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,row_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_data,var_name));
}),cljs.core.PersistentArrayMap.EMPTY,data);
var var_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(types,var_name);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([var_name,inferenceql.inference.gpm.column.construct_column_from_latents.cljs$core$IFn$_invoke$arity$6(var_name,var_type,cljs.core.get.cljs$core$IFn$_invoke$arity$2(hypers,var_name),latents,var_data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$options,options,cljs.core.cst$kw$crosscat,crosscat], null))]);
}),var_names));
var assignments = cljs.core.reduce_kv((function (assignments_SINGLEQUOTE_,row_id,datum){
var y = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(latents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,row_id], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(assignments_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datum,cljs.core.cst$kw$categories,y], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datum,cljs.core.cst$kw$row_DASH_ids], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__3892_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__3892_SHARP_,row_id);
}),cljs.core.PersistentHashSet.EMPTY));
}),cljs.core.PersistentArrayMap.EMPTY,data);
return inferenceql.inference.gpm.view.__GT_View(columns,latents,assignments);
}));

(inferenceql.inference.gpm.view.construct_view_from_latents.cljs$lang$maxFixedArity = 5);

/**
 * Constructor of a View GPM, given a specification for variable hyperparameters, as well
 *   as variable statistical types.
 */
inferenceql.inference.gpm.view.construct_view_from_hypers = (function inferenceql$inference$gpm$view$construct_view_from_hypers(spec,types){
var latents = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$alpha,(1),cljs.core.cst$kw$counts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$y,cljs.core.PersistentArrayMap.EMPTY], null);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(spec);
var data = cljs.core.PersistentArrayMap.EMPTY;
return inferenceql.inference.gpm.view.construct_view_from_latents.cljs$core$IFn$_invoke$arity$5(spec,latents,types,data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,options], null));
});
/**
 * Constructor of a View GPM, given a specification for variable types.
 */
inferenceql.inference.gpm.view.construct_view_from_types = (function inferenceql$inference$gpm$view$construct_view_from_types(types,options){
var hypers = cljs.core.reduce_kv((function (hypers_SINGLEQUOTE_,var_name,var_type){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hypers_SINGLEQUOTE_,var_name,(function (){var G__3898 = var_type;
var G__3898__$1 = (((G__3898 instanceof cljs.core.Keyword))?G__3898.fqn:null);
switch (G__3898__$1) {
case "bernoulli":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$alpha,0.5,cljs.core.cst$kw$beta,0.5], null);

break;
case "categorical":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alpha,(1)], null);

break;
case "gaussian":
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$m,(0),cljs.core.cst$kw$r,(1),cljs.core.cst$kw$s,(1),cljs.core.cst$kw$nu,(1)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3898__$1)].join('')));

}
})());
}),cljs.core.PersistentArrayMap.EMPTY,types);
var spec = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hypers,hypers,cljs.core.cst$kw$options,options], null);
return inferenceql.inference.gpm.view.construct_view_from_hypers(spec,types);
});
/**
 * Checks if the given GPM is a View.
 */
inferenceql.inference.gpm.view.view_QMARK_ = (function inferenceql$inference$gpm$view$view_QMARK_(stattype){
return ((cljs.core.record_QMARK_(stattype)) && ((stattype instanceof inferenceql.inference.gpm.view.View)));
});
