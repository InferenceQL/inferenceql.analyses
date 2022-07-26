// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.compositional');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('inferenceql.inference.dpm');
goog.require('inferenceql.inference.gpm.proto');
goog.require('metaprob.distributions');
inferenceql.inference.gpm.compositional.monte_carlo_integration = (function inferenceql$inference$gpm$compositional$monte_carlo_integration(n,dpm,gpm,targets,conditions){
var samples = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return inferenceql.inference.gpm.proto.simulate(gpm,inferenceql.inference.dpm.independent_variables(dpm),conditions);
}));
return metaprob.distributions.logmeanexp(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__3783_SHARP_){
return inferenceql.inference.gpm.proto.logpdf(dpm,targets,p1__3783_SHARP_);
}),samples));
});

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
inferenceql.inference.gpm.compositional.Compositional = (function (dpm,gpm,n,__meta,__extmap,__hash){
this.dpm = dpm;
this.gpm = gpm;
this.n = n;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k3785,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__3789 = k3785;
var G__3789__$1 = (((G__3789 instanceof cljs.core.Keyword))?G__3789.fqn:null);
switch (G__3789__$1) {
case "dpm":
return self__.dpm;

break;
case "gpm":
return self__.gpm;

break;
case "n":
return self__.n;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k3785,else__4475__auto__);

}
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__3790){
var vec__3791 = p__3790;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3791,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3791,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#inferenceql.inference.gpm.compositional.Compositional{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dpm,self__.dpm],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$gpm,self__.gpm],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$n,self__.n],null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3784){
var self__ = this;
var G__3784__$1 = this;
return (new cljs.core.RecordIter((0),G__3784__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dpm,cljs.core.cst$kw$gpm,cljs.core.cst$kw$n], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new inferenceql.inference.gpm.compositional.Compositional(self__.dpm,self__.gpm,self__.n,self__.__meta,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__3794 = (function (coll__4469__auto__){
return (96948400 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__3794(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3786,other3787){
var self__ = this;
var this3786__$1 = this;
return (((!((other3787 == null)))) && ((((this3786__$1.constructor === other3787.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3786__$1.dpm,other3787.dpm)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3786__$1.gpm,other3787.gpm)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3786__$1.n,other3787.n)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3786__$1.__extmap,other3787.__extmap)))))))))));
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.inferenceql$inference$gpm$proto$GPM$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.compositional.Compositional.prototype.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3 = (function (_,targets,conditions){
var self__ = this;
var ___$1 = this;
var target_variables = cljs.core.set(cljs.core.keys(targets));
var conditioned_variables = cljs.core.set(cljs.core.keys(conditions));
var dependent_variables = cljs.core.set(inferenceql.inference.dpm.dependent_variables(self__.dpm));
var independent_variables = cljs.core.set(inferenceql.inference.dpm.independent_variables(self__.dpm));
var dependent_targets = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(target_variables,dependent_variables);
var independent_targets = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(target_variables,independent_variables);
if(((cljs.core.seq(dependent_targets)) && (cljs.core.seq(independent_targets)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`inferenceql.inference.gpm/logpdf` cannot be computed for a mixture of dependent and independent target variables.",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dependent_DASH_targets,dependent_targets,cljs.core.cst$kw$independent_DASH_targets,independent_targets,cljs.core.cst$kw$dpm,self__.dpm], null));
} else {
if(cljs.core.seq(independent_targets)){
return inferenceql.inference.gpm.proto.logpdf(self__.gpm,targets,conditions);
} else {
if(cljs.core.seq(dependent_targets)){
if(clojure.set.subset_QMARK_(independent_variables,conditioned_variables)){
return inferenceql.inference.gpm.proto.logpdf(self__.dpm,targets,conditions);
} else {
return inferenceql.inference.gpm.compositional.monte_carlo_integration(self__.n,self__.dpm,self__.gpm,targets,conditions);
}
} else {
return null;
}
}
}
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$n,null,cljs.core.cst$kw$gpm,null,cljs.core.cst$kw$dpm,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new inferenceql.inference.gpm.compositional.Compositional(self__.dpm,self__.gpm,self__.n,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k3785){
var self__ = this;
var this__4479__auto____$1 = this;
var G__3795 = k3785;
var G__3795__$1 = (((G__3795 instanceof cljs.core.Keyword))?G__3795.fqn:null);
switch (G__3795__$1) {
case "dpm":
case "gpm":
case "n":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k3785);

}
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__3784){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__3796 = cljs.core.keyword_identical_QMARK_;
var expr__3797 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__3799 = cljs.core.cst$kw$dpm;
var G__3800 = expr__3797;
return (pred__3796.cljs$core$IFn$_invoke$arity$2 ? pred__3796.cljs$core$IFn$_invoke$arity$2(G__3799,G__3800) : pred__3796.call(null,G__3799,G__3800));
})())){
return (new inferenceql.inference.gpm.compositional.Compositional(G__3784,self__.gpm,self__.n,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3801 = cljs.core.cst$kw$gpm;
var G__3802 = expr__3797;
return (pred__3796.cljs$core$IFn$_invoke$arity$2 ? pred__3796.cljs$core$IFn$_invoke$arity$2(G__3801,G__3802) : pred__3796.call(null,G__3801,G__3802));
})())){
return (new inferenceql.inference.gpm.compositional.Compositional(self__.dpm,G__3784,self__.n,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3803 = cljs.core.cst$kw$n;
var G__3804 = expr__3797;
return (pred__3796.cljs$core$IFn$_invoke$arity$2 ? pred__3796.cljs$core$IFn$_invoke$arity$2(G__3803,G__3804) : pred__3796.call(null,G__3803,G__3804));
})())){
return (new inferenceql.inference.gpm.compositional.Compositional(self__.dpm,self__.gpm,G__3784,self__.__meta,self__.__extmap,null));
} else {
return (new inferenceql.inference.gpm.compositional.Compositional(self__.dpm,self__.gpm,self__.n,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__3784),null));
}
}
}
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$dpm,self__.dpm,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$gpm,self__.gpm,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$n,self__.n,null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.inferenceql$inference$gpm$proto$Variables$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.compositional.Compositional.prototype.inferenceql$inference$gpm$proto$Variables$variables$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return inferenceql.inference.gpm.proto.variables(self__.dpm);
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__3784){
var self__ = this;
var this__4471__auto____$1 = this;
return (new inferenceql.inference.gpm.compositional.Compositional(self__.dpm,self__.gpm,self__.n,G__3784,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.compositional.Compositional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(inferenceql.inference.gpm.compositional.Compositional.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dpm,cljs.core.cst$sym$gpm,cljs.core.cst$sym$n], null);
}));

(inferenceql.inference.gpm.compositional.Compositional.cljs$lang$type = true);

(inferenceql.inference.gpm.compositional.Compositional.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"inferenceql.inference.gpm.compositional/Compositional",null,(1),null));
}));

(inferenceql.inference.gpm.compositional.Compositional.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"inferenceql.inference.gpm.compositional/Compositional");
}));

/**
 * Positional factory function for inferenceql.inference.gpm.compositional/Compositional.
 */
inferenceql.inference.gpm.compositional.__GT_Compositional = (function inferenceql$inference$gpm$compositional$__GT_Compositional(dpm,gpm,n){
return (new inferenceql.inference.gpm.compositional.Compositional(dpm,gpm,n,null,null,null));
});

/**
 * Factory function for inferenceql.inference.gpm.compositional/Compositional, taking a map of keywords to field values.
 */
inferenceql.inference.gpm.compositional.map__GT_Compositional = (function inferenceql$inference$gpm$compositional$map__GT_Compositional(G__3788){
var extmap__4512__auto__ = (function (){var G__3805 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__3788,cljs.core.cst$kw$dpm,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$gpm,cljs.core.cst$kw$n], 0));
if(cljs.core.record_QMARK_(G__3788)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__3805);
} else {
return G__3805;
}
})();
return (new inferenceql.inference.gpm.compositional.Compositional(cljs.core.cst$kw$dpm.cljs$core$IFn$_invoke$arity$1(G__3788),cljs.core.cst$kw$gpm.cljs$core$IFn$_invoke$arity$1(G__3788),cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(G__3788),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Composes the provided DPM and GPM in such a way that the GPM models the
 *   distribution on independent variables for the DPM. Conditioning for
 *   simulations is delegated to the GPM and the DPM. Monte Carlo integration is
 *   used to condition the independent variables using `n` samples.
 */
inferenceql.inference.gpm.compositional.compose = (function inferenceql$inference$gpm$compositional$compose(n,dpm,gpm){
return inferenceql.inference.gpm.compositional.map__GT_Compositional(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dpm,dpm,cljs.core.cst$kw$gpm,gpm,cljs.core.cst$kw$n,n], null));
});
