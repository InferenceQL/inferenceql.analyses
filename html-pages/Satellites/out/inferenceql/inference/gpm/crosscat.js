// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.crosscat');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('clojure.edn');
goog.require('inferenceql.inference.gpm.conditioned');
goog.require('inferenceql.inference.gpm.constrained');
goog.require('inferenceql.inference.gpm.view');
goog.require('inferenceql.inference.gpm.column');
goog.require('inferenceql.inference.gpm.primitive_gpms');
goog.require('inferenceql.inference.gpm.proto');
goog.require('inferenceql.inference.primitives');
/**
 * Given a collection of columns, updates the columns' respective hyper grids.
 */
inferenceql.inference.gpm.crosscat.update_hyper_grids = (function inferenceql$inference$gpm$crosscat$update_hyper_grids(columns){
return cljs.core.reduce_kv((function (acc,col_name,col){
var hyper_grid = inferenceql.inference.gpm.primitive_gpms.hyper_grid(cljs.core.cst$kw$stattype.cljs$core$IFn$_invoke$arity$1(col),cljs.core.vals(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(col)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,col_name,inferenceql.inference.gpm.column.update_hypers(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(col,cljs.core.cst$kw$hyper_DASH_grid,hyper_grid)));
}),cljs.core.PersistentArrayMap.EMPTY,columns);
});
/**
 * Given a collection of columns, updates the columns' respective hyper grids.
 */
inferenceql.inference.gpm.crosscat.update_hyper_grids_xcat = (function inferenceql$inference$gpm$crosscat$update_hyper_grids_xcat(xcat){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(xcat,cljs.core.cst$kw$views,(function (views){
return cljs.core.reduce_kv((function (acc,view_name,view){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,view_name,cljs.core.update.cljs$core$IFn$_invoke$arity$3(view,cljs.core.cst$kw$columns,inferenceql.inference.gpm.crosscat.update_hyper_grids));
}),cljs.core.PersistentArrayMap.EMPTY,views);
}));
});
/**
 * Grabs data from xcat by row-id.
 */
inferenceql.inference.gpm.crosscat.get_data = (function inferenceql$inference$gpm$crosscat$get_data(xcat,row_id){
return cljs.core.reduce_kv((function (x,_,view){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,inferenceql.inference.gpm.view.get_data(view,row_id)], 0));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(xcat));
});
/**
 * Given an XCat GPM, for each row calculates the logpdf of the data contained in each row.
 *   Used for search in ensembles.
 */
inferenceql.inference.gpm.crosscat.calculate_weights = (function inferenceql$inference$gpm$crosscat$calculate_weights(xcat){
var row_ids = cljs.core.keys(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.first(cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(xcat))))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,row_id){
var row_data = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.val),inferenceql.inference.gpm.crosscat.get_data(xcat,row_id)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,row_id,inferenceql.inference.gpm.proto.logpdf(xcat,row_data,cljs.core.PersistentArrayMap.EMPTY));
}),cljs.core.PersistentArrayMap.EMPTY,row_ids);
});
/**
 * Given a CrossCat model, samples view assignments parameterized by the
 *   current concentration parameter value.
 */
inferenceql.inference.gpm.crosscat.generate_view_latents = (function inferenceql$inference$gpm$crosscat$generate_view_latents(n,alpha){
var vec__3902 = inferenceql.inference.primitives.crp_simulate.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alpha,alpha], null));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3902,(0),null);
var assignments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3902,(1),null);
return cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.shuffle(assignments));
});
/**
 * Given an XCat GPM, a map of values, and a row-id, incorporates
 *   the values into the GPM under the given row-id.
 */
inferenceql.inference.gpm.crosscat.incorporate_by_rowid = (function inferenceql$inference$gpm$crosscat$incorporate_by_rowid(xcat,values,row_id){
var fexpr__3906 = (function (gpm){
return cljs.core.reduce_kv((function (m,view_idx,view){
var view_vars = cljs.core.keys(cljs.core.cst$kw$columns.cljs$core$IFn$_invoke$arity$1(view));
var x_view = cljs.core.select_keys(values,view_vars);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view_idx], null),(function (p1__3905_SHARP_){
return inferenceql.inference.gpm.view.incorporate_by_rowid(p1__3905_SHARP_,x_view,row_id);
}));
}),gpm,cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(xcat));
});
return fexpr__3906(xcat);
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
inferenceql.inference.gpm.crosscat.XCat = (function (views,latents,__meta,__extmap,__hash){
this.views = views;
this.latents = latents;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(inferenceql.inference.gpm.crosscat.XCat.prototype.inferenceql$inference$gpm$proto$Variables$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.crosscat.XCat.prototype.inferenceql$inference$gpm$proto$Variables$variables$arity$1 = (function (p__3913){
var self__ = this;
var map__3914 = p__3913;
var map__3914__$1 = cljs.core.__destructure_map(map__3914);
var views__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3914__$1,cljs.core.cst$kw$views);
var map__3915 = this;
var map__3915__$1 = cljs.core.__destructure_map(map__3915);
var views__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3915__$1,cljs.core.cst$kw$views);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(inferenceql.inference.gpm.proto.variables),cljs.core.vals(views__$2));
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.inferenceql$inference$gpm$proto$GPM$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.crosscat.XCat.prototype.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3 = (function (_,targets,constraints){
var self__ = this;
var ___$1 = this;
var intersection = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(targets)),cljs.core.set(cljs.core.keys(constraints)));
if(cljs.core.truth_(cljs.core.not_empty(intersection))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Targets and constraints must be unique! ","These are shared: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(intersection))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$targets,targets,cljs.core.cst$kw$constraints,constraints], null));
} else {
return cljs.core.reduce_kv((function (logp,___$2,view){
var view_logp = inferenceql.inference.gpm.proto.logpdf(view,targets,constraints);
return (logp + view_logp);
}),(0),self__.views);
}
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.inferenceql$inference$gpm$proto$GPM$simulate$arity$3 = (function (_,targets,constraints){
var self__ = this;
var ___$1 = this;
var intersection = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(targets),cljs.core.set(cljs.core.keys(constraints)));
if(cljs.core.truth_(cljs.core.not_empty(intersection))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Targets and constraints must be unique! ","These are shared: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(intersection))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$targets,targets,cljs.core.cst$kw$constraints,constraints], null));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__3916){
var vec__3917 = p__3916;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3917,(0),null);
var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3917,(1),null);
return inferenceql.inference.gpm.proto.simulate(view,targets,constraints);
}),self__.views)));
}
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k3909,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__3920 = k3909;
var G__3920__$1 = (((G__3920 instanceof cljs.core.Keyword))?G__3920.fqn:null);
switch (G__3920__$1) {
case "views":
return self__.views;

break;
case "latents":
return self__.latents;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k3909,else__4475__auto__);

}
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__3921){
var vec__3922 = p__3921;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3922,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3922,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.inferenceql$inference$gpm$proto$Condition$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.crosscat.XCat.prototype.inferenceql$inference$gpm$proto$Condition$condition$arity$2 = (function (this$,conditions){
var self__ = this;
var this$__$1 = this;
return inferenceql.inference.gpm.conditioned.condition(this$__$1,conditions);
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#inferenceql.inference.gpm.crosscat.XCat{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$views,self__.views],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$latents,self__.latents],null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3908){
var self__ = this;
var G__3908__$1 = this;
return (new cljs.core.RecordIter((0),G__3908__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,cljs.core.cst$kw$latents], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new inferenceql.inference.gpm.crosscat.XCat(self__.views,self__.latents,self__.__meta,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.inferenceql$inference$gpm$proto$Score$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.crosscat.XCat.prototype.inferenceql$inference$gpm$proto$Score$logpdf_score$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__3925){
var vec__3926 = p__3925;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3926,(0),null);
var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3926,(1),null);
return (acc + inferenceql.inference.gpm.proto.logpdf_score(view));
}),(0),self__.views);
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__3929 = (function (coll__4469__auto__){
return (1216055394 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__3929(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3910,other3911){
var self__ = this;
var this3910__$1 = this;
return (((!((other3911 == null)))) && ((((this3910__$1.constructor === other3911.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3910__$1.views,other3911.views)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3910__$1.latents,other3911.latents)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3910__$1.__extmap,other3911.__extmap)))))))));
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$latents,null,cljs.core.cst$kw$views,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new inferenceql.inference.gpm.crosscat.XCat(self__.views,self__.latents,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k3909){
var self__ = this;
var this__4479__auto____$1 = this;
var G__3930 = k3909;
var G__3930__$1 = (((G__3930 instanceof cljs.core.Keyword))?G__3930.fqn:null);
switch (G__3930__$1) {
case "views":
case "latents":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k3909);

}
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__3908){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__3931 = cljs.core.keyword_identical_QMARK_;
var expr__3932 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__3934 = cljs.core.cst$kw$views;
var G__3935 = expr__3932;
return (pred__3931.cljs$core$IFn$_invoke$arity$2 ? pred__3931.cljs$core$IFn$_invoke$arity$2(G__3934,G__3935) : pred__3931.call(null,G__3934,G__3935));
})())){
return (new inferenceql.inference.gpm.crosscat.XCat(G__3908,self__.latents,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3936 = cljs.core.cst$kw$latents;
var G__3937 = expr__3932;
return (pred__3931.cljs$core$IFn$_invoke$arity$2 ? pred__3931.cljs$core$IFn$_invoke$arity$2(G__3936,G__3937) : pred__3931.call(null,G__3936,G__3937));
})())){
return (new inferenceql.inference.gpm.crosscat.XCat(self__.views,G__3908,self__.__meta,self__.__extmap,null));
} else {
return (new inferenceql.inference.gpm.crosscat.XCat(self__.views,self__.latents,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__3908),null));
}
}
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$views,self__.views,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$latents,self__.latents,null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.inferenceql$inference$gpm$proto$Constrain$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.crosscat.XCat.prototype.inferenceql$inference$gpm$proto$Constrain$constrain$arity$3 = (function (this$,event,opts){
var self__ = this;
var this$__$1 = this;
return inferenceql.inference.gpm.constrained.constrain(this$__$1,event,opts);
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__3908){
var self__ = this;
var this__4471__auto____$1 = this;
return (new inferenceql.inference.gpm.crosscat.XCat(self__.views,self__.latents,G__3908,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.inferenceql$inference$gpm$proto$Incorporate$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.crosscat.XCat.prototype.inferenceql$inference$gpm$proto$Incorporate$incorporate$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var row_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return inferenceql.inference.gpm.crosscat.incorporate_by_rowid(this$__$1,x,row_id);
}));

(inferenceql.inference.gpm.crosscat.XCat.prototype.inferenceql$inference$gpm$proto$Incorporate$unincorporate$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var fexpr__3938 = (function (xcat){
return cljs.core.reduce_kv((function (m,view_name,view){
var view_vars = cljs.core.keys(cljs.core.cst$kw$columns.cljs$core$IFn$_invoke$arity$1(view));
var x_view = cljs.core.select_keys(x,view_vars);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view_name], null),(function (p1__3907_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(inferenceql.inference.gpm.proto.unincorporate(p1__3907_SHARP_,x_view),cljs.core.cst$kw$columns,inferenceql.inference.gpm.crosscat.update_hyper_grids);
}));
}),xcat,self__.views);
});
return fexpr__3938(this$__$1);
}));

(inferenceql.inference.gpm.crosscat.XCat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$views,cljs.core.cst$sym$latents], null);
}));

(inferenceql.inference.gpm.crosscat.XCat.cljs$lang$type = true);

(inferenceql.inference.gpm.crosscat.XCat.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"inferenceql.inference.gpm.crosscat/XCat",null,(1),null));
}));

(inferenceql.inference.gpm.crosscat.XCat.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"inferenceql.inference.gpm.crosscat/XCat");
}));

/**
 * Positional factory function for inferenceql.inference.gpm.crosscat/XCat.
 */
inferenceql.inference.gpm.crosscat.__GT_XCat = (function inferenceql$inference$gpm$crosscat$__GT_XCat(views,latents){
return (new inferenceql.inference.gpm.crosscat.XCat(views,latents,null,null,null));
});

/**
 * Factory function for inferenceql.inference.gpm.crosscat/XCat, taking a map of keywords to field values.
 */
inferenceql.inference.gpm.crosscat.map__GT_XCat = (function inferenceql$inference$gpm$crosscat$map__GT_XCat(G__3912){
var extmap__4512__auto__ = (function (){var G__3939 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__3912,cljs.core.cst$kw$views,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$latents], 0));
if(cljs.core.record_QMARK_(G__3912)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__3939);
} else {
return G__3939;
}
})();
return (new inferenceql.inference.gpm.crosscat.XCat(cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(G__3912),cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(G__3912),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Incorporates a column in to the model at the specified view.
 */
inferenceql.inference.gpm.crosscat.incorporate_column = (function inferenceql$inference$gpm$crosscat$incorporate_column(xcat,column,view_assignment){
var var_name = cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(column);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(xcat,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$z,var_name], null),view_assignment),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$counts,view_assignment], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view_assignment], null),(function (p1__3942_SHARP_){
return inferenceql.inference.gpm.view.incorporate_column(p1__3942_SHARP_,column);
}));
});
/**
 * Unincorporates a column from the model with the specified name.
 */
inferenceql.inference.gpm.crosscat.unincorporate_column = (function inferenceql$inference$gpm$crosscat$unincorporate_column(xcat,var_name){
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$z.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(xcat)),var_name);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(xcat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$z], null),cljs.core.dissoc,var_name),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$counts,z], null),cljs.core.dec),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,z], null),(function (p1__3943_SHARP_){
return inferenceql.inference.gpm.view.unincorporate_column(p1__3943_SHARP_,var_name);
}));
});
/**
 * Filters empty views from a CrossCat model.
 */
inferenceql.inference.gpm.crosscat.filter_empty_views = (function inferenceql$inference$gpm$crosscat$filter_empty_views(xcat){
var latents = cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(xcat);
var views_to_remove = cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__3944_SHARP_){
return (cljs.core.second(p1__3944_SHARP_) === (0));
}),cljs.core.cst$kw$counts.cljs$core$IFn$_invoke$arity$1(latents)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(xcat,cljs.core.cst$kw$views,(function (p1__3945_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__3945_SHARP_,views_to_remove);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$counts], null),(function (p1__3946_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__3946_SHARP_,views_to_remove);
}));
});
/**
 * Given an XCat GPM and a Column, calculates the logpdf-score of the Column GPM
 *   if it were to be incorporated into each of the constituent View GPMs.
 */
inferenceql.inference.gpm.crosscat.view_logpdf_scores = (function inferenceql$inference$gpm$crosscat$view_logpdf_scores(xcat,column){
return cljs.core.reduce_kv((function (scores,view_name,view){
var view_latents = cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(view);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scores,view_name,inferenceql.inference.gpm.proto.logpdf_score(inferenceql.inference.gpm.column.update_column(column,view_latents)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(xcat));
});
/**
 * Generates an empty view with latent assignments generated from a CRP
 *   with concentration parameter alpha.
 */
inferenceql.inference.gpm.crosscat.generate_view = (function inferenceql$inference$gpm$crosscat$generate_view(row_ids){
var n = cljs.core.count(row_ids);
var alpha = inferenceql.inference.primitives.simulate.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$gamma,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$k,(1),cljs.core.cst$kw$theta,(1)], null));
var vec__3947 = inferenceql.inference.primitives.crp_simulate.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alpha,alpha], null));
var table_counts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3947,(0),null);
var assignments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3947,(1),null);
var counts = cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),table_counts);
var y = cljs.core.zipmap(row_ids,assignments);
var latents = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$alpha,alpha,cljs.core.cst$kw$counts,counts,cljs.core.cst$kw$y,y], null);
var columns = cljs.core.PersistentArrayMap.EMPTY;
var assignments__$1 = cljs.core.PersistentArrayMap.EMPTY;
return inferenceql.inference.gpm.view.__GT_View(columns,latents,assignments__$1);
});
/**
 * Add m auxiliary Views to the given XCat GPM.
 */
inferenceql.inference.gpm.crosscat.add_aux_views = (function inferenceql$inference$gpm$crosscat$add_aux_views(xcat,m){
var row_ids = cljs.core.keys(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.first(cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(xcat))))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xcat_SINGLEQUOTE_,_){
var view_symbol = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.assoc_in(cljs.core.assoc_in(xcat_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latents,cljs.core.cst$kw$counts,view_symbol], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view_symbol], null),inferenceql.inference.gpm.crosscat.generate_view(row_ids));
}),xcat,cljs.core.range.cljs$core$IFn$_invoke$arity$1(m));
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
 */
inferenceql.inference.gpm.crosscat.construct_xcat_from_latents = (function inferenceql$inference$gpm$crosscat$construct_xcat_from_latents(var_args){
var G__3952 = arguments.length;
switch (G__3952) {
case 3:
return inferenceql.inference.gpm.crosscat.construct_xcat_from_latents.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return inferenceql.inference.gpm.crosscat.construct_xcat_from_latents.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(inferenceql.inference.gpm.crosscat.construct_xcat_from_latents.cljs$core$IFn$_invoke$arity$3 = (function (spec,latents,data){
return inferenceql.inference.gpm.crosscat.construct_xcat_from_latents.cljs$core$IFn$_invoke$arity$4(spec,latents,data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
}));

(inferenceql.inference.gpm.crosscat.construct_xcat_from_latents.cljs$core$IFn$_invoke$arity$4 = (function (spec,latents,data,p__3953){
var map__3954 = p__3953;
var map__3954__$1 = cljs.core.__destructure_map(map__3954);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3954__$1,cljs.core.cst$kw$options);
var views = cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(spec);
var types = cljs.core.cst$kw$types.cljs$core$IFn$_invoke$arity$1(spec);
var global_latents = cljs.core.cst$kw$global.cljs$core$IFn$_invoke$arity$1(latents);
var views_SINGLEQUOTE_ = cljs.core.reduce_kv((function (acc,view_name,view){
var view_vars = cljs.core.keys(cljs.core.cst$kw$hypers.cljs$core$IFn$_invoke$arity$1(view));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,view_name,inferenceql.inference.gpm.view.construct_view_from_latents.cljs$core$IFn$_invoke$arity$5(view,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(latents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$local,view_name], null)),types,cljs.core.reduce_kv((function (data_SINGLEQUOTE_,row_id,datum){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_SINGLEQUOTE_,row_id,cljs.core.select_keys(datum,view_vars));
}),cljs.core.PersistentArrayMap.EMPTY,data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$options,options,cljs.core.cst$kw$crosscat,true], null)));
}),cljs.core.PersistentArrayMap.EMPTY,views);
var xcat_latents = cljs.core.reduce_kv((function (m,view_idx,_){
var var_names = cljs.core.keys(cljs.core.cst$kw$hypers.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(views,view_idx)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$counts,view_idx], null),cljs.core.count(var_names)),cljs.core.cst$kw$z,(function (p1__3950_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,var_name){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,var_name,view_idx);
}),p1__3950_SHARP_,var_names);
}));
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$alpha,cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(global_latents),cljs.core.cst$kw$counts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$z,cljs.core.PersistentArrayMap.EMPTY], null),views_SINGLEQUOTE_);
return inferenceql.inference.gpm.crosscat.__GT_XCat(views_SINGLEQUOTE_,xcat_latents);
}));

(inferenceql.inference.gpm.crosscat.construct_xcat_from_latents.cljs$lang$maxFixedArity = 4);

/**
 * Constructor of a XCat GPM, given a specification for variable hyperparameters, as well
 *   as variable statistical types.
 */
inferenceql.inference.gpm.crosscat.construct_xcat_from_hypers = (function inferenceql$inference$gpm$crosscat$construct_xcat_from_hypers(spec){
var latents = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$global,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$alpha,(1),cljs.core.cst$kw$counts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$z,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.cst$kw$local,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$alpha,(1),cljs.core.cst$kw$counts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$y,cljs.core.PersistentArrayMap.EMPTY], null)], null)], null);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(spec);
var data = cljs.core.PersistentArrayMap.EMPTY;
return inferenceql.inference.gpm.crosscat.construct_xcat_from_latents.cljs$core$IFn$_invoke$arity$4(spec,latents,data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,options], null));
});
/**
 * Constructor of a XCat GPM, given a specification for variable types, wherein all
 *   variables are placed into the same view initially.
 */
inferenceql.inference.gpm.crosscat.construct_xcat_from_types = (function inferenceql$inference$gpm$crosscat$construct_xcat_from_types(types,options){
var hypers = cljs.core.reduce_kv((function (hypers_SINGLEQUOTE_,var_name,var_type){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hypers_SINGLEQUOTE_,var_name,(function (){var G__3956 = var_type;
var G__3956__$1 = (((G__3956 instanceof cljs.core.Keyword))?G__3956.fqn:null);
switch (G__3956__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3956__$1)].join('')));

}
})());
}),cljs.core.PersistentArrayMap.EMPTY,types);
var spec = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$views,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hypers,hypers], null)], null),cljs.core.cst$kw$types,types,cljs.core.cst$kw$options,options], null);
return inferenceql.inference.gpm.crosscat.construct_xcat_from_hypers(spec);
});
/**
 * Converts a specified XCat GPM into a Multimixture spec.
 */
inferenceql.inference.gpm.crosscat.xcat__GT_mmix = (function inferenceql$inference$gpm$crosscat$xcat__GT_mmix(xcat){
var view_number = (function (p__3961){
var vec__3962 = p__3961;
var view_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3962,(0),null);
var _view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3962,(1),null);
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_matches(/view_(\d+)/,cljs.core.name(view_kw))));
});
var views = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(view_number,cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(xcat)));
var vec__3958 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__3965,view){
var vec__3966 = p__3965;
var vars = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3966,(0),null);
var views__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3966,(1),null);
var view_latents = cljs.core.cst$kw$latents.cljs$core$IFn$_invoke$arity$1(view);
var view_counts = cljs.core.cst$kw$counts.cljs$core$IFn$_invoke$arity$1(view_latents);
var view_variables = cljs.core.reduce_kv((function (var_types,col_name,column){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(var_types,col_name,cljs.core.cst$kw$stattype.cljs$core$IFn$_invoke$arity$1(column));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$columns.cljs$core$IFn$_invoke$arity$1(view));
var z = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(view_counts));
var cat_number = (function (cat_kw){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_matches(/cluster_(\d+)/,cljs.core.name(cat_kw))));
});
var category_names = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cat_number,cljs.core.keys(view_counts));
var categories = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (categories,category_name){
var category_weight = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(view_counts,category_name) / z);
var category = cljs.core.reduce_kv((function (column_categories,_,column){
var col_cat = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$categories,category_name], null),inferenceql.inference.gpm.column.generate_category(column));
var col_stattype = cljs.core.cst$kw$stattype.cljs$core$IFn$_invoke$arity$1(column);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_categories,inferenceql.inference.gpm.primitive_gpms.export_category(col_stattype,col_cat)], 0));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$columns.cljs$core$IFn$_invoke$arity$1(view));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(categories,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$probability,category_weight,cljs.core.cst$kw$parameters,category], null));
}),cljs.core.PersistentVector.EMPTY,category_names);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vars,view_variables], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(views__$1,categories)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY], null),views);
var vars = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3958,(0),null);
var views__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3958,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$vars,vars,cljs.core.cst$kw$views,views__$1], null);
});
/**
 * Checks if the given GPM is an XCat GPM.
 */
inferenceql.inference.gpm.crosscat.xcat_QMARK_ = (function inferenceql$inference$gpm$crosscat$xcat_QMARK_(stattype){
return ((cljs.core.record_QMARK_(stattype)) && ((stattype instanceof inferenceql.inference.gpm.crosscat.XCat)));
});
