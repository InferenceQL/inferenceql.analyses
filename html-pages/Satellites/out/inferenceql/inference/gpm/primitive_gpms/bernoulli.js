// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.primitive_gpms.bernoulli');
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
inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli = (function (var_name,suff_stats,hyperparameters,__meta,__extmap,__hash){
this.var_name = var_name;
this.suff_stats = suff_stats;
this.hyperparameters = hyperparameters;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.inferenceql$inference$gpm$proto$Variables$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.inferenceql$inference$gpm$proto$Variables$variables$arity$1 = (function (p__3580){
var self__ = this;
var map__3581 = p__3580;
var map__3581__$1 = cljs.core.__destructure_map(map__3581);
var var_name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3581__$1,cljs.core.cst$kw$var_DASH_name);
var map__3582 = this;
var map__3582__$1 = cljs.core.__destructure_map(map__3582);
var var_name__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3582__$1,cljs.core.cst$kw$var_DASH_name);
return cljs.core.PersistentHashSet.createAsIfByAssoc([var_name__$2]);
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.inferenceql$inference$gpm$proto$GPM$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3 = (function (_,targets,constraints){
var self__ = this;
var ___$1 = this;
var x_sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.suff_stats,cljs.core.cst$kw$x_DASH_sum);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.suff_stats,cljs.core.cst$kw$n);
var alpha_SINGLEQUOTE_ = (cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(self__.hyperparameters) + x_sum);
var beta_SINGLEQUOTE_ = ((cljs.core.cst$kw$beta.cljs$core$IFn$_invoke$arity$1(self__.hyperparameters) + n) + ((-1) * x_sum));
var denom = (function (){var G__3583 = (alpha_SINGLEQUOTE_ + beta_SINGLEQUOTE_);
return Math.log(G__3583);
})();
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
if(cljs.core.truth_(x)){
return (Math.log(alpha_SINGLEQUOTE_) - denom);
} else {
return (Math.log(beta_SINGLEQUOTE_) - denom);

}
}
}
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.inferenceql$inference$gpm$proto$GPM$simulate$arity$3 = (function (this$,_,___$1){
var self__ = this;
var this$__$1 = this;
return ((function (){var G__3584 = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
return Math.log(G__3584);
})() < this$__$1.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.var_name,true]),cljs.core.PersistentArrayMap.EMPTY));
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k3576,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__3585 = k3576;
var G__3585__$1 = (((G__3585 instanceof cljs.core.Keyword))?G__3585.fqn:null);
switch (G__3585__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k3576,else__4475__auto__);

}
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__3586){
var vec__3587 = p__3586;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3587,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3587,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#inferenceql.inference.gpm.primitive-gpms.bernoulli.Bernoulli{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$var_DASH_name,self__.var_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suff_DASH_stats,self__.suff_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hyperparameters,self__.hyperparameters],null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3575){
var self__ = this;
var G__3575__$1 = this;
return (new cljs.core.RecordIter((0),G__3575__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$var_DASH_name,cljs.core.cst$kw$suff_DASH_stats,cljs.core.cst$kw$hyperparameters], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli(self__.var_name,self__.suff_stats,self__.hyperparameters,self__.__meta,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.inferenceql$inference$gpm$proto$Score$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.inferenceql$inference$gpm$proto$Score$logpdf_score$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(self__.suff_stats);
var x_sum = cljs.core.cst$kw$x_DASH_sum.cljs$core$IFn$_invoke$arity$1(self__.suff_stats);
var alpha = cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(self__.hyperparameters);
var beta = cljs.core.cst$kw$beta.cljs$core$IFn$_invoke$arity$1(self__.hyperparameters);
return (inferenceql.inference.primitives.betaln((alpha + x_sum),((n + (- x_sum)) + beta)) - inferenceql.inference.primitives.betaln(alpha,beta));
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__3590 = (function (coll__4469__auto__){
return (-1568472393 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__3590(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3577,other3578){
var self__ = this;
var this3577__$1 = this;
return (((!((other3578 == null)))) && ((((this3577__$1.constructor === other3578.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3577__$1.var_name,other3578.var_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3577__$1.suff_stats,other3578.suff_stats)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3577__$1.hyperparameters,other3578.hyperparameters)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3577__$1.__extmap,other3578.__extmap)))))))))));
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hyperparameters,null,cljs.core.cst$kw$suff_DASH_stats,null,cljs.core.cst$kw$var_DASH_name,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli(self__.var_name,self__.suff_stats,self__.hyperparameters,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k3576){
var self__ = this;
var this__4479__auto____$1 = this;
var G__3591 = k3576;
var G__3591__$1 = (((G__3591 instanceof cljs.core.Keyword))?G__3591.fqn:null);
switch (G__3591__$1) {
case "var-name":
case "suff-stats":
case "hyperparameters":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k3576);

}
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__3575){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__3592 = cljs.core.keyword_identical_QMARK_;
var expr__3593 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__3595 = cljs.core.cst$kw$var_DASH_name;
var G__3596 = expr__3593;
return (pred__3592.cljs$core$IFn$_invoke$arity$2 ? pred__3592.cljs$core$IFn$_invoke$arity$2(G__3595,G__3596) : pred__3592.call(null,G__3595,G__3596));
})())){
return (new inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli(G__3575,self__.suff_stats,self__.hyperparameters,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3597 = cljs.core.cst$kw$suff_DASH_stats;
var G__3598 = expr__3593;
return (pred__3592.cljs$core$IFn$_invoke$arity$2 ? pred__3592.cljs$core$IFn$_invoke$arity$2(G__3597,G__3598) : pred__3592.call(null,G__3597,G__3598));
})())){
return (new inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli(self__.var_name,G__3575,self__.hyperparameters,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3599 = cljs.core.cst$kw$hyperparameters;
var G__3600 = expr__3593;
return (pred__3592.cljs$core$IFn$_invoke$arity$2 ? pred__3592.cljs$core$IFn$_invoke$arity$2(G__3599,G__3600) : pred__3592.call(null,G__3599,G__3600));
})())){
return (new inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli(self__.var_name,self__.suff_stats,G__3575,self__.__meta,self__.__extmap,null));
} else {
return (new inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli(self__.var_name,self__.suff_stats,self__.hyperparameters,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__3575),null));
}
}
}
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$var_DASH_name,self__.var_name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$suff_DASH_stats,self__.suff_stats,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$hyperparameters,self__.hyperparameters,null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__3575){
var self__ = this;
var this__4471__auto____$1 = this;
return (new inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli(self__.var_name,self__.suff_stats,self__.hyperparameters,G__3575,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.inferenceql$inference$gpm$proto$Incorporate$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.inferenceql$inference$gpm$proto$Incorporate$incorporate$arity$2 = (function (this$,values){
var self__ = this;
var this$__$1 = this;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,self__.var_name);
if(cljs.core.boolean_QMARK_(x)){
} else {
throw (new Error(["Assert failed: ","Only boolean values can be incorporated into a Bernoulli gpm.","\n","(boolean? x)"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$suff_DASH_stats,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(self__.suff_stats,cljs.core.cst$kw$n,cljs.core.inc),cljs.core.cst$kw$x_DASH_sum,(function (p1__3573_SHARP_){
return (p1__3573_SHARP_ + (cljs.core.truth_(x)?(1):(0)));
})));
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.prototype.inferenceql$inference$gpm$proto$Incorporate$unincorporate$arity$2 = (function (this$,values){
var self__ = this;
var this$__$1 = this;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,self__.var_name);
if(cljs.core.boolean_QMARK_(x)){
} else {
throw (new Error(["Assert failed: ","Only boolean values can be incorporated into a Bernoulli gpm.","\n","(boolean? x)"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$suff_DASH_stats,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(self__.suff_stats,cljs.core.cst$kw$n,cljs.core.dec),cljs.core.cst$kw$x_DASH_sum,(function (p1__3574_SHARP_){
return (p1__3574_SHARP_ - (cljs.core.truth_(x)?(1):(0)));
})));
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_DASH_name,cljs.core.cst$sym$suff_DASH_stats,cljs.core.cst$sym$hyperparameters], null);
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.cljs$lang$type = true);

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"inferenceql.inference.gpm.primitive-gpms.bernoulli/Bernoulli",null,(1),null));
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"inferenceql.inference.gpm.primitive-gpms.bernoulli/Bernoulli");
}));

/**
 * Positional factory function for inferenceql.inference.gpm.primitive-gpms.bernoulli/Bernoulli.
 */
inferenceql.inference.gpm.primitive_gpms.bernoulli.__GT_Bernoulli = (function inferenceql$inference$gpm$primitive_gpms$bernoulli$__GT_Bernoulli(var_name,suff_stats,hyperparameters){
return (new inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli(var_name,suff_stats,hyperparameters,null,null,null));
});

/**
 * Factory function for inferenceql.inference.gpm.primitive-gpms.bernoulli/Bernoulli, taking a map of keywords to field values.
 */
inferenceql.inference.gpm.primitive_gpms.bernoulli.map__GT_Bernoulli = (function inferenceql$inference$gpm$primitive_gpms$bernoulli$map__GT_Bernoulli(G__3579){
var extmap__4512__auto__ = (function (){var G__3601 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__3579,cljs.core.cst$kw$var_DASH_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$suff_DASH_stats,cljs.core.cst$kw$hyperparameters], 0));
if(cljs.core.record_QMARK_(G__3579)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__3601);
} else {
return G__3601;
}
})();
return (new inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli(cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(G__3579),cljs.core.cst$kw$suff_DASH_stats.cljs$core$IFn$_invoke$arity$1(G__3579),cljs.core.cst$kw$hyperparameters.cljs$core$IFn$_invoke$arity$1(G__3579),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Checks if the given pGPM is Bernoulli.
 */
inferenceql.inference.gpm.primitive_gpms.bernoulli.bernoulli_QMARK_ = (function inferenceql$inference$gpm$primitive_gpms$bernoulli$bernoulli_QMARK_(stattype){
return ((cljs.core.record_QMARK_(stattype)) && ((stattype instanceof inferenceql.inference.gpm.primitive_gpms.bernoulli.Bernoulli)));
});
/**
 * Hyperparameter grid for the Bernoulli variable, used in column hyperparameter inference
 *   for Column GPMs.
 */
inferenceql.inference.gpm.primitive_gpms.bernoulli.hyper_grid = (function inferenceql$inference$gpm$primitive_gpms$bernoulli$hyper_grid(data,n_grid){
var grid = (function (){
return inferenceql.inference.utils.log_linspace(0.5,cljs.core.count(data),n_grid);
});
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$alpha,grid(),cljs.core.cst$kw$beta,grid()], null);
});
/**
 * Casts a CrossCat category spec to a Bernoulli pGPM.
 *   Requires a variable name, optionally takes by key
 *   sufficient statistics and hyperparameters.
 */
inferenceql.inference.gpm.primitive_gpms.bernoulli.spec__GT_bernoulli = (function inferenceql$inference$gpm$primitive_gpms$bernoulli$spec__GT_bernoulli(var_args){
var args__4835__auto__ = [];
var len__4829__auto___3608 = arguments.length;
var i__4830__auto___3609 = (0);
while(true){
if((i__4830__auto___3609 < len__4829__auto___3608)){
args__4835__auto__.push((arguments[i__4830__auto___3609]));

var G__3610 = (i__4830__auto___3609 + (1));
i__4830__auto___3609 = G__3610;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return inferenceql.inference.gpm.primitive_gpms.bernoulli.spec__GT_bernoulli.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(inferenceql.inference.gpm.primitive_gpms.bernoulli.spec__GT_bernoulli.cljs$core$IFn$_invoke$arity$variadic = (function (var_name,p__3606){
var map__3607 = p__3606;
var map__3607__$1 = cljs.core.__destructure_map(map__3607);
var hyperparameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3607__$1,cljs.core.cst$kw$hyperparameters);
var suff_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3607__$1,cljs.core.cst$kw$suff_DASH_stats);
var suff_stats_SINGLEQUOTE_ = (((!((suff_stats == null))))?suff_stats:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$n,(0),cljs.core.cst$kw$x_DASH_sum,(0)], null));
var hyperparameters_SINGLEQUOTE_ = (((!((hyperparameters == null))))?hyperparameters:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$alpha,0.5,cljs.core.cst$kw$beta,0.5], null));
return inferenceql.inference.gpm.primitive_gpms.bernoulli.__GT_Bernoulli(var_name,suff_stats_SINGLEQUOTE_,hyperparameters_SINGLEQUOTE_);
}));

(inferenceql.inference.gpm.primitive_gpms.bernoulli.spec__GT_bernoulli.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(inferenceql.inference.gpm.primitive_gpms.bernoulli.spec__GT_bernoulli.cljs$lang$applyTo = (function (seq3604){
var G__3605 = cljs.core.first(seq3604);
var seq3604__$1 = cljs.core.next(seq3604);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3605,seq3604__$1);
}));

/**
 * Exports a Bernoulli pGPM to a Multimixture spec.
 */
inferenceql.inference.gpm.primitive_gpms.bernoulli.export$ = (function inferenceql$inference$gpm$primitive_gpms$bernoulli$export(bernoulli){
var x_sum = cljs.core.cst$kw$x_DASH_sum.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$suff_DASH_stats.cljs$core$IFn$_invoke$arity$1(bernoulli));
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$suff_DASH_stats.cljs$core$IFn$_invoke$arity$1(bernoulli));
var alpha_SINGLEQUOTE_ = (cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hyperparameters.cljs$core$IFn$_invoke$arity$1(bernoulli)) + x_sum);
var beta_SINGLEQUOTE_ = ((cljs.core.cst$kw$beta.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hyperparameters.cljs$core$IFn$_invoke$arity$1(bernoulli)) + n) + ((-1) * x_sum));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(bernoulli),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,(alpha_SINGLEQUOTE_ / (alpha_SINGLEQUOTE_ + beta_SINGLEQUOTE_))], null)]);
});
