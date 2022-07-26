// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.multimixture');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('metaprob.prelude');
goog.require('inferenceql.inference.gpm.conditioned');
goog.require('inferenceql.inference.gpm.constrained');
goog.require('inferenceql.inference.gpm.multimixture.utils');
goog.require('inferenceql.inference.utils');
goog.require('inferenceql.inference.gpm.proto');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
*/
inferenceql.inference.gpm.multimixture.Multimixture = (function (vars,views,__meta,__extmap,__hash){
this.vars = vars;
this.views = views;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(inferenceql.inference.gpm.multimixture.Multimixture.prototype.inferenceql$inference$gpm$proto$Variables$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.inferenceql$inference$gpm$proto$Variables$variables$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.set(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$vars)));
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k4011,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__4015 = k4011;
var G__4015__$1 = (((G__4015 instanceof cljs.core.Keyword))?G__4015.fqn:null);
switch (G__4015__$1) {
case "vars":
return self__.vars;

break;
case "views":
return self__.views;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k4011,else__4475__auto__);

}
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.inferenceql$inference$gpm$proto$Condition$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.inferenceql$inference$gpm$proto$Condition$condition$arity$2 = (function (this$,conditions){
var self__ = this;
var this$__$1 = this;
return inferenceql.inference.gpm.conditioned.condition(this$__$1,conditions);
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__4016){
var vec__4017 = p__4016;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4017,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4017,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.inferenceql$inference$gpm$proto$GPM$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3 = (function (this$,targets,constraints){
var self__ = this;
var this$__$1 = this;
var constraint_addrs_vals = inferenceql.inference.gpm.multimixture.utils.with_row_values(cljs.core.PersistentArrayMap.EMPTY,constraints);
var target_constraint_addrs_vals = inferenceql.inference.gpm.multimixture.utils.with_row_values(cljs.core.PersistentArrayMap.EMPTY,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([targets,constraints], 0)));
var row_generator = inferenceql.inference.gpm.multimixture.utils.optimized_row_generator(this$__$1);
var vec__4020 = (function (){var G__4023 = cljs.core.cst$kw$procedure;
var G__4024 = row_generator;
var G__4025 = cljs.core.cst$kw$observation_DASH_trace;
var G__4026 = target_constraint_addrs_vals;
return (metaprob.prelude.infer_and_score.cljs$core$IFn$_invoke$arity$4 ? metaprob.prelude.infer_and_score.cljs$core$IFn$_invoke$arity$4(G__4023,G__4024,G__4025,G__4026) : metaprob.prelude.infer_and_score.call(null,G__4023,G__4024,G__4025,G__4026));
})();
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4020,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4020,(1),null);
var log_weight_numer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4020,(2),null);
var log_weight_denom = ((cljs.core.empty_QMARK_(constraint_addrs_vals))?(0):(function (){var vec__4027 = (function (){var G__4030 = cljs.core.cst$kw$procedure;
var G__4031 = row_generator;
var G__4032 = cljs.core.cst$kw$observation_DASH_trace;
var G__4033 = constraint_addrs_vals;
return (metaprob.prelude.infer_and_score.cljs$core$IFn$_invoke$arity$4 ? metaprob.prelude.infer_and_score.cljs$core$IFn$_invoke$arity$4(G__4030,G__4031,G__4032,G__4033) : metaprob.prelude.infer_and_score.call(null,G__4030,G__4031,G__4032,G__4033));
})();
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4027,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4027,(1),null);
var weight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4027,(2),null);
return weight;
})());
return (log_weight_numer - log_weight_denom);
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.inferenceql$inference$gpm$proto$GPM$simulate$arity$3 = (function (this$,targets,constraints){
var self__ = this;
var this$__$1 = this;
var constraint_addrs_vals = inferenceql.inference.gpm.multimixture.utils.with_row_values(cljs.core.PersistentArrayMap.EMPTY,constraints);
var generative_model = inferenceql.inference.gpm.multimixture.utils.optimized_row_generator(this$__$1);
var vec__4034 = (function (){var G__4037 = cljs.core.cst$kw$procedure;
var G__4038 = generative_model;
var G__4039 = cljs.core.cst$kw$observation_DASH_trace;
var G__4040 = constraint_addrs_vals;
return (metaprob.prelude.infer_and_score.cljs$core$IFn$_invoke$arity$4 ? metaprob.prelude.infer_and_score.cljs$core$IFn$_invoke$arity$4(G__4037,G__4038,G__4039,G__4040) : metaprob.prelude.infer_and_score.call(null,G__4037,G__4038,G__4039,G__4040));
})();
var sample = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4034,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4034,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4034,(2),null);
return cljs.core.select_keys(sample,targets);
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.inferenceql$inference$gpm$proto$GPM$mutual_information$arity$5 = (function (this$,target_a,target_b,constraints,n_samples){
var self__ = this;
var this$__$1 = this;
var joint_target = cljs.core.into.cljs$core$IFn$_invoke$arity$2(target_a,target_b);
var samples = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n_samples,(function (){
return this$__$1.inferenceql$inference$gpm$proto$GPM$simulate$arity$3(null,(function (){var G__4041 = joint_target;
if(cljs.core.vector_QMARK_(constraints)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__4041,constraints);
} else {
return G__4041;
}
})(),constraints);
}));
var constraint = ((cljs.core.map_QMARK_(constraints))?cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n_samples,constraints):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__4009_SHARP_){
return cljs.core.select_keys(p1__4009_SHARP_,constraints);
}),samples));
var logpdf_estimate = (function (target){
return inferenceql.inference.utils.average(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,sample){
return this$__$1.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3(null,cljs.core.select_keys(sample,target),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(constraint,i));
}),samples));
});
var logpdf_a = logpdf_estimate(target_a);
var logpdf_b = logpdf_estimate(target_b);
var logpdf_ab = logpdf_estimate(joint_target);
return (logpdf_ab - (logpdf_a + logpdf_b));
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#inferenceql.inference.gpm.multimixture.Multimixture{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$views,self__.views],null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__4010){
var self__ = this;
var G__4010__$1 = this;
return (new cljs.core.RecordIter((0),G__4010__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vars,cljs.core.cst$kw$views], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new inferenceql.inference.gpm.multimixture.Multimixture(self__.vars,self__.views,self__.__meta,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__4042 = (function (coll__4469__auto__){
return (-164790269 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__4042(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this4012,other4013){
var self__ = this;
var this4012__$1 = this;
return (((!((other4013 == null)))) && ((((this4012__$1.constructor === other4013.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4012__$1.vars,other4013.vars)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4012__$1.views,other4013.views)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this4012__$1.__extmap,other4013.__extmap)))))))));
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$vars,null,cljs.core.cst$kw$views,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new inferenceql.inference.gpm.multimixture.Multimixture(self__.vars,self__.views,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k4011){
var self__ = this;
var this__4479__auto____$1 = this;
var G__4043 = k4011;
var G__4043__$1 = (((G__4043 instanceof cljs.core.Keyword))?G__4043.fqn:null);
switch (G__4043__$1) {
case "vars":
case "views":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k4011);

}
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__4010){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__4044 = cljs.core.keyword_identical_QMARK_;
var expr__4045 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__4047 = cljs.core.cst$kw$vars;
var G__4048 = expr__4045;
return (pred__4044.cljs$core$IFn$_invoke$arity$2 ? pred__4044.cljs$core$IFn$_invoke$arity$2(G__4047,G__4048) : pred__4044.call(null,G__4047,G__4048));
})())){
return (new inferenceql.inference.gpm.multimixture.Multimixture(G__4010,self__.views,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__4049 = cljs.core.cst$kw$views;
var G__4050 = expr__4045;
return (pred__4044.cljs$core$IFn$_invoke$arity$2 ? pred__4044.cljs$core$IFn$_invoke$arity$2(G__4049,G__4050) : pred__4044.call(null,G__4049,G__4050));
})())){
return (new inferenceql.inference.gpm.multimixture.Multimixture(self__.vars,G__4010,self__.__meta,self__.__extmap,null));
} else {
return (new inferenceql.inference.gpm.multimixture.Multimixture(self__.vars,self__.views,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__4010),null));
}
}
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$vars,self__.vars,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$views,self__.views,null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__4010){
var self__ = this;
var this__4471__auto____$1 = this;
return (new inferenceql.inference.gpm.multimixture.Multimixture(self__.vars,self__.views,G__4010,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.inferenceql$inference$gpm$proto$Constrain$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.multimixture.Multimixture.prototype.inferenceql$inference$gpm$proto$Constrain$constrain$arity$3 = (function (this$,event,opts){
var self__ = this;
var this$__$1 = this;
return inferenceql.inference.gpm.constrained.constrain(this$__$1,event,opts);
}));

(inferenceql.inference.gpm.multimixture.Multimixture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vars,cljs.core.cst$sym$views], null);
}));

(inferenceql.inference.gpm.multimixture.Multimixture.cljs$lang$type = true);

(inferenceql.inference.gpm.multimixture.Multimixture.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"inferenceql.inference.gpm.multimixture/Multimixture",null,(1),null));
}));

(inferenceql.inference.gpm.multimixture.Multimixture.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"inferenceql.inference.gpm.multimixture/Multimixture");
}));

/**
 * Positional factory function for inferenceql.inference.gpm.multimixture/Multimixture.
 */
inferenceql.inference.gpm.multimixture.__GT_Multimixture = (function inferenceql$inference$gpm$multimixture$__GT_Multimixture(vars,views){
return (new inferenceql.inference.gpm.multimixture.Multimixture(vars,views,null,null,null));
});

/**
 * Factory function for inferenceql.inference.gpm.multimixture/Multimixture, taking a map of keywords to field values.
 */
inferenceql.inference.gpm.multimixture.map__GT_Multimixture = (function inferenceql$inference$gpm$multimixture$map__GT_Multimixture(G__4014){
var extmap__4512__auto__ = (function (){var G__4051 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__4014,cljs.core.cst$kw$vars,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$views], 0));
if(cljs.core.record_QMARK_(G__4014)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__4051);
} else {
return G__4051;
}
})();
return (new inferenceql.inference.gpm.multimixture.Multimixture(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(G__4014),cljs.core.cst$kw$views.cljs$core$IFn$_invoke$arity$1(G__4014),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

