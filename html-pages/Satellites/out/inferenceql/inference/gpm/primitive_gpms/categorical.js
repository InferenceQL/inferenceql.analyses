// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.primitive_gpms.categorical');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('inferenceql.inference.gpm.proto');
goog.require('inferenceql.inference.utils');
goog.require('inferenceql.inference.primitives');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {inferenceql.inference.gpm.proto.Incorporate}
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
 * @implements {inferenceql.inference.gpm.proto.Score}
*/
inferenceql.inference.gpm.primitive_gpms.categorical.Categorical = (function (var_name,suff_stats,hyperparameters,__meta,__extmap,__hash){
this.var_name = var_name;
this.suff_stats = suff_stats;
this.hyperparameters = hyperparameters;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.inferenceql$inference$gpm$proto$Variables$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.inferenceql$inference$gpm$proto$Variables$variables$arity$1 = (function (p__3536){
var self__ = this;
var map__3537 = p__3536;
var map__3537__$1 = cljs.core.__destructure_map(map__3537);
var var_name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3537__$1,cljs.core.cst$kw$var_DASH_name);
var map__3538 = this;
var map__3538__$1 = cljs.core.__destructure_map(map__3538);
var var_name__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3538__$1,cljs.core.cst$kw$var_DASH_name);
return cljs.core.PersistentHashSet.createAsIfByAssoc([var_name__$2]);
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.inferenceql$inference$gpm$proto$GPM$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3 = (function (_,targets,constraints){
var self__ = this;
var ___$1 = this;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(targets,self__.var_name);
var x_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(constraints,self__.var_name);
var constrained_QMARK_ = (!((x_SINGLEQUOTE_ == null)));
if((x == null)){
return (0);
} else {
if(constrained_QMARK_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,x_SINGLEQUOTE_)){
return (0);
} else {
return -Infinity;
}
} else {
var counts = cljs.core.cst$kw$counts.cljs$core$IFn$_invoke$arity$1(self__.suff_stats);
var alpha = cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(self__.hyperparameters);
var numer = (function (){var G__3539 = (alpha + cljs.core.get.cljs$core$IFn$_invoke$arity$2(counts,x));
return Math.log(G__3539);
})();
var denom = (function (){var G__3540 = ((alpha * cljs.core.count(counts)) + cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(counts)));
return Math.log(G__3540);
})();
return (numer - denom);

}
}
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.inferenceql$inference$gpm$proto$GPM$simulate$arity$3 = (function (this$,_,___$1){
var self__ = this;
var this$__$1 = this;
var p = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$p,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,this$__$1.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.var_name,k]),cljs.core.PersistentArrayMap.EMPTY));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.cst$kw$counts.cljs$core$IFn$_invoke$arity$1(self__.suff_stats))));
return inferenceql.inference.primitives.simulate.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$log_DASH_categorical,p);
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k3532,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__3541 = k3532;
var G__3541__$1 = (((G__3541 instanceof cljs.core.Keyword))?G__3541.fqn:null);
switch (G__3541__$1) {
case "var-name":
return self__.var_name;

break;
case "suff-stats":
return self__.suff_stats;

break;
case "hyperparameters":
return self__.hyperparameters;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k3532,else__4475__auto__);

}
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__3542){
var vec__3543 = p__3542;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3543,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3543,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#inferenceql.inference.gpm.primitive-gpms.categorical.Categorical{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$var_DASH_name,self__.var_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suff_DASH_stats,self__.suff_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hyperparameters,self__.hyperparameters],null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3531){
var self__ = this;
var G__3531__$1 = this;
return (new cljs.core.RecordIter((0),G__3531__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$var_DASH_name,cljs.core.cst$kw$suff_DASH_stats,cljs.core.cst$kw$hyperparameters], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new inferenceql.inference.gpm.primitive_gpms.categorical.Categorical(self__.var_name,self__.suff_stats,self__.hyperparameters,self__.__meta,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.inferenceql$inference$gpm$proto$Score$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.inferenceql$inference$gpm$proto$Score$logpdf_score$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var counts = cljs.core.cst$kw$counts.cljs$core$IFn$_invoke$arity$1(self__.suff_stats);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(self__.suff_stats);
var k = cljs.core.count(counts);
var alpha = cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(self__.hyperparameters);
var a = (k * alpha);
var lg = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return inferenceql.inference.primitives.gammaln((v + alpha));
}),cljs.core.vals(counts)));
return (((inferenceql.inference.primitives.gammaln(a) + (- inferenceql.inference.primitives.gammaln((a + n)))) + lg) + (((-1) * k) * inferenceql.inference.primitives.gammaln(alpha)));
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__3546 = (function (coll__4469__auto__){
return (1949224916 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__3546(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3533,other3534){
var self__ = this;
var this3533__$1 = this;
return (((!((other3534 == null)))) && ((((this3533__$1.constructor === other3534.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3533__$1.var_name,other3534.var_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3533__$1.suff_stats,other3534.suff_stats)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3533__$1.hyperparameters,other3534.hyperparameters)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3533__$1.__extmap,other3534.__extmap)))))))))));
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hyperparameters,null,cljs.core.cst$kw$suff_DASH_stats,null,cljs.core.cst$kw$var_DASH_name,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new inferenceql.inference.gpm.primitive_gpms.categorical.Categorical(self__.var_name,self__.suff_stats,self__.hyperparameters,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k3532){
var self__ = this;
var this__4479__auto____$1 = this;
var G__3547 = k3532;
var G__3547__$1 = (((G__3547 instanceof cljs.core.Keyword))?G__3547.fqn:null);
switch (G__3547__$1) {
case "var-name":
case "suff-stats":
case "hyperparameters":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k3532);

}
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__3531){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__3548 = cljs.core.keyword_identical_QMARK_;
var expr__3549 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__3551 = cljs.core.cst$kw$var_DASH_name;
var G__3552 = expr__3549;
return (pred__3548.cljs$core$IFn$_invoke$arity$2 ? pred__3548.cljs$core$IFn$_invoke$arity$2(G__3551,G__3552) : pred__3548.call(null,G__3551,G__3552));
})())){
return (new inferenceql.inference.gpm.primitive_gpms.categorical.Categorical(G__3531,self__.suff_stats,self__.hyperparameters,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3553 = cljs.core.cst$kw$suff_DASH_stats;
var G__3554 = expr__3549;
return (pred__3548.cljs$core$IFn$_invoke$arity$2 ? pred__3548.cljs$core$IFn$_invoke$arity$2(G__3553,G__3554) : pred__3548.call(null,G__3553,G__3554));
})())){
return (new inferenceql.inference.gpm.primitive_gpms.categorical.Categorical(self__.var_name,G__3531,self__.hyperparameters,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3555 = cljs.core.cst$kw$hyperparameters;
var G__3556 = expr__3549;
return (pred__3548.cljs$core$IFn$_invoke$arity$2 ? pred__3548.cljs$core$IFn$_invoke$arity$2(G__3555,G__3556) : pred__3548.call(null,G__3555,G__3556));
})())){
return (new inferenceql.inference.gpm.primitive_gpms.categorical.Categorical(self__.var_name,self__.suff_stats,G__3531,self__.__meta,self__.__extmap,null));
} else {
return (new inferenceql.inference.gpm.primitive_gpms.categorical.Categorical(self__.var_name,self__.suff_stats,self__.hyperparameters,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__3531),null));
}
}
}
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$var_DASH_name,self__.var_name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$suff_DASH_stats,self__.suff_stats,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$hyperparameters,self__.hyperparameters,null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__3531){
var self__ = this;
var this__4471__auto____$1 = this;
return (new inferenceql.inference.gpm.primitive_gpms.categorical.Categorical(self__.var_name,self__.suff_stats,self__.hyperparameters,G__3531,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.inferenceql$inference$gpm$proto$Incorporate$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.inferenceql$inference$gpm$proto$Incorporate$incorporate$arity$2 = (function (this$,values){
var self__ = this;
var this$__$1 = this;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,self__.var_name);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$suff_DASH_stats,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(self__.suff_stats,cljs.core.cst$kw$n,cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$counts,x], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))));
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.prototype.inferenceql$inference$gpm$proto$Incorporate$unincorporate$arity$2 = (function (this$,values){
var self__ = this;
var this$__$1 = this;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,self__.var_name);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$suff_DASH_stats,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(self__.suff_stats,cljs.core.cst$kw$n,cljs.core.dec),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$counts,x], null),cljs.core.dec));
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_DASH_name,cljs.core.cst$sym$suff_DASH_stats,cljs.core.cst$sym$hyperparameters], null);
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.cljs$lang$type = true);

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"inferenceql.inference.gpm.primitive-gpms.categorical/Categorical",null,(1),null));
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.Categorical.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"inferenceql.inference.gpm.primitive-gpms.categorical/Categorical");
}));

/**
 * Positional factory function for inferenceql.inference.gpm.primitive-gpms.categorical/Categorical.
 */
inferenceql.inference.gpm.primitive_gpms.categorical.__GT_Categorical = (function inferenceql$inference$gpm$primitive_gpms$categorical$__GT_Categorical(var_name,suff_stats,hyperparameters){
return (new inferenceql.inference.gpm.primitive_gpms.categorical.Categorical(var_name,suff_stats,hyperparameters,null,null,null));
});

/**
 * Factory function for inferenceql.inference.gpm.primitive-gpms.categorical/Categorical, taking a map of keywords to field values.
 */
inferenceql.inference.gpm.primitive_gpms.categorical.map__GT_Categorical = (function inferenceql$inference$gpm$primitive_gpms$categorical$map__GT_Categorical(G__3535){
var extmap__4512__auto__ = (function (){var G__3557 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__3535,cljs.core.cst$kw$var_DASH_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$suff_DASH_stats,cljs.core.cst$kw$hyperparameters], 0));
if(cljs.core.record_QMARK_(G__3535)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__3557);
} else {
return G__3557;
}
})();
return (new inferenceql.inference.gpm.primitive_gpms.categorical.Categorical(cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(G__3535),cljs.core.cst$kw$suff_DASH_stats.cljs$core$IFn$_invoke$arity$1(G__3535),cljs.core.cst$kw$hyperparameters.cljs$core$IFn$_invoke$arity$1(G__3535),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Checks if the given pGPM is Categorical.
 */
inferenceql.inference.gpm.primitive_gpms.categorical.categorical_QMARK_ = (function inferenceql$inference$gpm$primitive_gpms$categorical$categorical_QMARK_(stattype){
return ((cljs.core.record_QMARK_(stattype)) && ((stattype instanceof inferenceql.inference.gpm.primitive_gpms.categorical.Categorical)));
});
/**
 * Hyperparameter grid for the Categorical variable, used in column hyperparameter inference
 *   for Column GPMs.
 */
inferenceql.inference.gpm.primitive_gpms.categorical.hyper_grid = (function inferenceql$inference$gpm$primitive_gpms$categorical$hyper_grid(data,n_grid){
var grid = inferenceql.inference.utils.log_linspace((1),cljs.core.count(data),n_grid);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alpha,grid], null);
});
/**
 * Casts a CrossCat category spec to a Categorical pGPM.
 *   Requires a variable name, optionally takes by key
 *   sufficient statistics, options, and hyperparameters.
 */
inferenceql.inference.gpm.primitive_gpms.categorical.spec__GT_categorical = (function inferenceql$inference$gpm$primitive_gpms$categorical$spec__GT_categorical(var_args){
var args__4835__auto__ = [];
var len__4829__auto___3564 = arguments.length;
var i__4830__auto___3565 = (0);
while(true){
if((i__4830__auto___3565 < len__4829__auto___3564)){
args__4835__auto__.push((arguments[i__4830__auto___3565]));

var G__3566 = (i__4830__auto___3565 + (1));
i__4830__auto___3565 = G__3566;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return inferenceql.inference.gpm.primitive_gpms.categorical.spec__GT_categorical.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(inferenceql.inference.gpm.primitive_gpms.categorical.spec__GT_categorical.cljs$core$IFn$_invoke$arity$variadic = (function (var_name,p__3562){
var map__3563 = p__3562;
var map__3563__$1 = cljs.core.__destructure_map(map__3563);
var hyperparameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3563__$1,cljs.core.cst$kw$hyperparameters);
var suff_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3563__$1,cljs.core.cst$kw$suff_DASH_stats);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3563__$1,cljs.core.cst$kw$options);
var suff_stats_SINGLEQUOTE_ = (((((suff_stats == null)) && ((!((options == null))))))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$n,(0),cljs.core.cst$kw$counts,cljs.core.zipmap(options,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)))], null):suff_stats);
var hyperparameters_SINGLEQUOTE_ = (((!((hyperparameters == null))))?hyperparameters:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alpha,(1)], null));
return inferenceql.inference.gpm.primitive_gpms.categorical.__GT_Categorical(var_name,suff_stats_SINGLEQUOTE_,hyperparameters_SINGLEQUOTE_);
}));

(inferenceql.inference.gpm.primitive_gpms.categorical.spec__GT_categorical.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(inferenceql.inference.gpm.primitive_gpms.categorical.spec__GT_categorical.cljs$lang$applyTo = (function (seq3560){
var G__3561 = cljs.core.first(seq3560);
var seq3560__$1 = cljs.core.next(seq3560);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3561,seq3560__$1);
}));

/**
 * Exports a Categorical pGPM to a Multimixture spec.
 */
inferenceql.inference.gpm.primitive_gpms.categorical.export$ = (function inferenceql$inference$gpm$primitive_gpms$categorical$export(categorical){
var counts = cljs.core.cst$kw$counts.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$suff_DASH_stats.cljs$core$IFn$_invoke$arity$1(categorical));
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$suff_DASH_stats.cljs$core$IFn$_invoke$arity$1(categorical));
var alpha = cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hyperparameters.cljs$core$IFn$_invoke$arity$1(categorical));
var z = (n + (cljs.core.count(counts) * alpha));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(categorical),cljs.core.reduce_kv((function (p,option,cnt){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,option,((cnt + alpha) / z));
}),cljs.core.PersistentArrayMap.EMPTY,counts)]);
});
