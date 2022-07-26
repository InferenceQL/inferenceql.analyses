// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.conditioned');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('inferenceql.inference.gpm.proto');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {inferenceql.inference.gpm.proto.Variables}
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
inferenceql.inference.gpm.conditioned.ConditionedGPM = (function (gpm,conditions,__meta,__extmap,__hash){
this.gpm = gpm;
this.conditions = conditions;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.inferenceql$inference$gpm$proto$Variables$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.inferenceql$inference$gpm$proto$Variables$variables$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return inferenceql.inference.gpm.proto.variables(self__.gpm);
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.inferenceql$inference$gpm$proto$GPM$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3 = (function (_,targets,logpdf_conditions){
var self__ = this;
var ___$1 = this;
var merged_conditions = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.conditions,logpdf_conditions], 0));
return inferenceql.inference.gpm.proto.logpdf(self__.gpm,targets,merged_conditions);
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.inferenceql$inference$gpm$proto$GPM$simulate$arity$3 = (function (_,targets,simulate_conditions){
var self__ = this;
var ___$1 = this;
var merged_conditions = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.conditions,simulate_conditions], 0));
return inferenceql.inference.gpm.proto.simulate(self__.gpm,targets,merged_conditions);
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k3682,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__3686 = k3682;
var G__3686__$1 = (((G__3686 instanceof cljs.core.Keyword))?G__3686.fqn:null);
switch (G__3686__$1) {
case "gpm":
return self__.gpm;

break;
case "conditions":
return self__.conditions;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k3682,else__4475__auto__);

}
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__3687){
var vec__3688 = p__3687;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3688,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3688,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#inferenceql.inference.gpm.conditioned.ConditionedGPM{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$gpm,self__.gpm],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$conditions,self__.conditions],null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3681){
var self__ = this;
var G__3681__$1 = this;
return (new cljs.core.RecordIter((0),G__3681__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gpm,cljs.core.cst$kw$conditions], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new inferenceql.inference.gpm.conditioned.ConditionedGPM(self__.gpm,self__.conditions,self__.__meta,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__3691 = (function (coll__4469__auto__){
return (-1140339456 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__3691(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3683,other3684){
var self__ = this;
var this3683__$1 = this;
return (((!((other3684 == null)))) && ((((this3683__$1.constructor === other3684.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3683__$1.gpm,other3684.gpm)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3683__$1.conditions,other3684.conditions)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3683__$1.__extmap,other3684.__extmap)))))))));
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gpm,null,cljs.core.cst$kw$conditions,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new inferenceql.inference.gpm.conditioned.ConditionedGPM(self__.gpm,self__.conditions,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k3682){
var self__ = this;
var this__4479__auto____$1 = this;
var G__3692 = k3682;
var G__3692__$1 = (((G__3692 instanceof cljs.core.Keyword))?G__3692.fqn:null);
switch (G__3692__$1) {
case "gpm":
case "conditions":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k3682);

}
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__3681){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__3693 = cljs.core.keyword_identical_QMARK_;
var expr__3694 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__3696 = cljs.core.cst$kw$gpm;
var G__3697 = expr__3694;
return (pred__3693.cljs$core$IFn$_invoke$arity$2 ? pred__3693.cljs$core$IFn$_invoke$arity$2(G__3696,G__3697) : pred__3693.call(null,G__3696,G__3697));
})())){
return (new inferenceql.inference.gpm.conditioned.ConditionedGPM(G__3681,self__.conditions,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3698 = cljs.core.cst$kw$conditions;
var G__3699 = expr__3694;
return (pred__3693.cljs$core$IFn$_invoke$arity$2 ? pred__3693.cljs$core$IFn$_invoke$arity$2(G__3698,G__3699) : pred__3693.call(null,G__3698,G__3699));
})())){
return (new inferenceql.inference.gpm.conditioned.ConditionedGPM(self__.gpm,G__3681,self__.__meta,self__.__extmap,null));
} else {
return (new inferenceql.inference.gpm.conditioned.ConditionedGPM(self__.gpm,self__.conditions,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__3681),null));
}
}
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$gpm,self__.gpm,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$conditions,self__.conditions,null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__3681){
var self__ = this;
var this__4471__auto____$1 = this;
return (new inferenceql.inference.gpm.conditioned.ConditionedGPM(self__.gpm,self__.conditions,G__3681,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$gpm,cljs.core.cst$sym$conditions], null);
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.cljs$lang$type = true);

(inferenceql.inference.gpm.conditioned.ConditionedGPM.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"inferenceql.inference.gpm.conditioned/ConditionedGPM",null,(1),null));
}));

(inferenceql.inference.gpm.conditioned.ConditionedGPM.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"inferenceql.inference.gpm.conditioned/ConditionedGPM");
}));

/**
 * Positional factory function for inferenceql.inference.gpm.conditioned/ConditionedGPM.
 */
inferenceql.inference.gpm.conditioned.__GT_ConditionedGPM = (function inferenceql$inference$gpm$conditioned$__GT_ConditionedGPM(gpm,conditions){
return (new inferenceql.inference.gpm.conditioned.ConditionedGPM(gpm,conditions,null,null,null));
});

/**
 * Factory function for inferenceql.inference.gpm.conditioned/ConditionedGPM, taking a map of keywords to field values.
 */
inferenceql.inference.gpm.conditioned.map__GT_ConditionedGPM = (function inferenceql$inference$gpm$conditioned$map__GT_ConditionedGPM(G__3685){
var extmap__4512__auto__ = (function (){var G__3700 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__3685,cljs.core.cst$kw$gpm,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$conditions], 0));
if(cljs.core.record_QMARK_(G__3685)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__3700);
} else {
return G__3700;
}
})();
return (new inferenceql.inference.gpm.conditioned.ConditionedGPM(cljs.core.cst$kw$gpm.cljs$core$IFn$_invoke$arity$1(G__3685),cljs.core.cst$kw$conditions.cljs$core$IFn$_invoke$arity$1(G__3685),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Conditions gpm based on conditions via rejection sampling. Arguments are the
 *   same as those for `inferenceql.inference.gom/condition`.
 */
inferenceql.inference.gpm.conditioned.condition = (function inferenceql$inference$gpm$conditioned$condition(gpm,conditions){
if(cljs.core.truth_(cljs.core.map_QMARK_)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(conditions),"\n","map?"].join('')));
}

return inferenceql.inference.gpm.conditioned.__GT_ConditionedGPM(gpm,conditions);
});
