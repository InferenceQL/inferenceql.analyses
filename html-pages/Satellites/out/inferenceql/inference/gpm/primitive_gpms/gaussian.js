// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('inferenceql.inference.gpm.primitive_gpms.gaussian');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('inferenceql.inference.gpm.proto');
goog.require('inferenceql.inference.utils');
goog.require('inferenceql.inference.primitives');
/**
 * Given sufficient statistics and the current hyperparameters,
 *   returns the hyperparameters of the posterior distribution.
 */
inferenceql.inference.gpm.primitive_gpms.gaussian.posterior_hypers = (function inferenceql$inference$gpm$primitive_gpms$gaussian$posterior_hypers(n,sum_x,sum_x_sq,hyperparameters){
var m = cljs.core.cst$kw$m.cljs$core$IFn$_invoke$arity$1(hyperparameters);
var r = cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(hyperparameters);
var s = cljs.core.cst$kw$s.cljs$core$IFn$_invoke$arity$1(hyperparameters);
var nu = cljs.core.cst$kw$nu.cljs$core$IFn$_invoke$arity$1(hyperparameters);
var r_SINGLEQUOTE_ = (r + n);
var nu_SINGLEQUOTE_ = (nu + n);
var m_SINGLEQUOTE_ = (((r * m) + sum_x) / r_SINGLEQUOTE_);
var s_SINGLEQUOTE_ = (((s + sum_x_sq) + ((r * m) * m)) + ((((-1) * r_SINGLEQUOTE_) * m_SINGLEQUOTE_) * m_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_SINGLEQUOTE_,r_SINGLEQUOTE_,(((s_SINGLEQUOTE_ === (0)))?s:s_SINGLEQUOTE_),nu_SINGLEQUOTE_], null);
});
/**
 * Given the hyperparameters r, s, and nu, calculates the normalizing
 *   constant Z of a Normal-Inverse-Gamma distribution.
 */
inferenceql.inference.gpm.primitive_gpms.gaussian.calc_z = (function inferenceql$inference$gpm$primitive_gpms$gaussian$calc_z(r,s,nu){
return ((0.5 * ((((nu * (Math.log((2)) - Math.log(s))) + Math.log(Math.PI)) + Math.log((2))) + (- Math.log(r)))) + inferenceql.inference.primitives.gammaln((nu / (2))));
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
inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian = (function (var_name,suff_stats,hyperparameters,__meta,__extmap,__hash){
this.var_name = var_name;
this.suff_stats = suff_stats;
this.hyperparameters = hyperparameters;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.inferenceql$inference$gpm$proto$Variables$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.inferenceql$inference$gpm$proto$Variables$variables$arity$1 = (function (p__3486){
var self__ = this;
var map__3487 = p__3486;
var map__3487__$1 = cljs.core.__destructure_map(map__3487);
var var_name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3487__$1,cljs.core.cst$kw$var_DASH_name);
var map__3488 = this;
var map__3488__$1 = cljs.core.__destructure_map(map__3488);
var var_name__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3488__$1,cljs.core.cst$kw$var_DASH_name);
return cljs.core.PersistentHashSet.createAsIfByAssoc([var_name__$2]);
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.inferenceql$inference$gpm$proto$GPM$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.inferenceql$inference$gpm$proto$GPM$logpdf$arity$3 = (function (_,targets,constraints){
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
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(self__.suff_stats);
var sum_x = cljs.core.cst$kw$sum_DASH_x.cljs$core$IFn$_invoke$arity$1(self__.suff_stats);
var sum_x_sq = cljs.core.cst$kw$sum_DASH_x_DASH_sq.cljs$core$IFn$_invoke$arity$1(self__.suff_stats);
var vec__3489 = inferenceql.inference.gpm.primitive_gpms.gaussian.posterior_hypers(n,sum_x,sum_x_sq,self__.hyperparameters);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3489,(0),null);
var r_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3489,(1),null);
var s_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3489,(2),null);
var nu_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3489,(3),null);
var vec__3492 = inferenceql.inference.gpm.primitive_gpms.gaussian.posterior_hypers((n + (1)),(sum_x + x),(sum_x_sq + (x * x)),self__.hyperparameters);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3492,(0),null);
var r_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3492,(1),null);
var s_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3492,(2),null);
var nu_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3492,(3),null);
var z_SINGLEQUOTE_ = inferenceql.inference.gpm.primitive_gpms.gaussian.calc_z(r_SINGLEQUOTE_,s_SINGLEQUOTE_,nu_SINGLEQUOTE_);
var z_SINGLEQUOTE__SINGLEQUOTE_ = inferenceql.inference.gpm.primitive_gpms.gaussian.calc_z(r_SINGLEQUOTE__SINGLEQUOTE_,s_SINGLEQUOTE__SINGLEQUOTE_,nu_SINGLEQUOTE__SINGLEQUOTE_);
return (((-0.5 * (Math.log((2)) + Math.log(Math.PI))) + z_SINGLEQUOTE__SINGLEQUOTE_) + ((-1) * z_SINGLEQUOTE_));

}
}
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.inferenceql$inference$gpm$proto$GPM$simulate$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var vec__3495 = inferenceql.inference.gpm.primitive_gpms.gaussian.posterior_hypers(cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(self__.suff_stats),cljs.core.cst$kw$sum_DASH_x.cljs$core$IFn$_invoke$arity$1(self__.suff_stats),cljs.core.cst$kw$sum_DASH_x_DASH_sq.cljs$core$IFn$_invoke$arity$1(self__.suff_stats),self__.hyperparameters);
var m_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3495,(0),null);
var r_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3495,(1),null);
var s_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3495,(2),null);
var nu_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3495,(3),null);
var rho = inferenceql.inference.primitives.simulate.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$gamma,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$k,(nu_n / (2)),cljs.core.cst$kw$theta,((2) / s_n)], null));
var mu = inferenceql.inference.primitives.simulate.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$gaussian,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mu,m_n,cljs.core.cst$kw$sigma,((1) / (function (){var G__3498 = (rho * r_n);
var G__3499 = 0.5;
return Math.pow(G__3498,G__3499);
})())], null));
return inferenceql.inference.primitives.simulate.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$gaussian,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mu,mu,cljs.core.cst$kw$sigma,Math.pow(rho,-0.5)], null));
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k3482,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__3500 = k3482;
var G__3500__$1 = (((G__3500 instanceof cljs.core.Keyword))?G__3500.fqn:null);
switch (G__3500__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k3482,else__4475__auto__);

}
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__3501){
var vec__3502 = p__3501;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3502,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3502,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#inferenceql.inference.gpm.primitive-gpms.gaussian.Gaussian{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$var_DASH_name,self__.var_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suff_DASH_stats,self__.suff_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hyperparameters,self__.hyperparameters],null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3481){
var self__ = this;
var G__3481__$1 = this;
return (new cljs.core.RecordIter((0),G__3481__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$var_DASH_name,cljs.core.cst$kw$suff_DASH_stats,cljs.core.cst$kw$hyperparameters], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian(self__.var_name,self__.suff_stats,self__.hyperparameters,self__.__meta,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.inferenceql$inference$gpm$proto$Score$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.inferenceql$inference$gpm$proto$Score$logpdf_score$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(self__.suff_stats);
var sum_x = cljs.core.cst$kw$sum_DASH_x.cljs$core$IFn$_invoke$arity$1(self__.suff_stats);
var sum_x_sq = cljs.core.cst$kw$sum_DASH_x_DASH_sq.cljs$core$IFn$_invoke$arity$1(self__.suff_stats);
var vec__3505 = inferenceql.inference.gpm.primitive_gpms.gaussian.posterior_hypers(n,sum_x,sum_x_sq,self__.hyperparameters);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3505,(0),null);
var r_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3505,(1),null);
var s_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3505,(2),null);
var nu_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3505,(3),null);
var z_n = inferenceql.inference.gpm.primitive_gpms.gaussian.calc_z(r_n,s_n,nu_n);
var z_0 = inferenceql.inference.gpm.primitive_gpms.gaussian.calc_z(cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(self__.hyperparameters),cljs.core.cst$kw$s.cljs$core$IFn$_invoke$arity$1(self__.hyperparameters),cljs.core.cst$kw$nu.cljs$core$IFn$_invoke$arity$1(self__.hyperparameters));
return ((((-0.5 * n) * (Math.log((2)) + Math.log(Math.PI))) + z_n) + (- z_0));
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__3508 = (function (coll__4469__auto__){
return (894287651 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__3508(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3483,other3484){
var self__ = this;
var this3483__$1 = this;
return (((!((other3484 == null)))) && ((((this3483__$1.constructor === other3484.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3483__$1.var_name,other3484.var_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3483__$1.suff_stats,other3484.suff_stats)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3483__$1.hyperparameters,other3484.hyperparameters)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this3483__$1.__extmap,other3484.__extmap)))))))))));
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hyperparameters,null,cljs.core.cst$kw$suff_DASH_stats,null,cljs.core.cst$kw$var_DASH_name,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian(self__.var_name,self__.suff_stats,self__.hyperparameters,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k3482){
var self__ = this;
var this__4479__auto____$1 = this;
var G__3509 = k3482;
var G__3509__$1 = (((G__3509 instanceof cljs.core.Keyword))?G__3509.fqn:null);
switch (G__3509__$1) {
case "var-name":
case "suff-stats":
case "hyperparameters":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k3482);

}
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__3481){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__3510 = cljs.core.keyword_identical_QMARK_;
var expr__3511 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__3513 = cljs.core.cst$kw$var_DASH_name;
var G__3514 = expr__3511;
return (pred__3510.cljs$core$IFn$_invoke$arity$2 ? pred__3510.cljs$core$IFn$_invoke$arity$2(G__3513,G__3514) : pred__3510.call(null,G__3513,G__3514));
})())){
return (new inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian(G__3481,self__.suff_stats,self__.hyperparameters,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3515 = cljs.core.cst$kw$suff_DASH_stats;
var G__3516 = expr__3511;
return (pred__3510.cljs$core$IFn$_invoke$arity$2 ? pred__3510.cljs$core$IFn$_invoke$arity$2(G__3515,G__3516) : pred__3510.call(null,G__3515,G__3516));
})())){
return (new inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian(self__.var_name,G__3481,self__.hyperparameters,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__3517 = cljs.core.cst$kw$hyperparameters;
var G__3518 = expr__3511;
return (pred__3510.cljs$core$IFn$_invoke$arity$2 ? pred__3510.cljs$core$IFn$_invoke$arity$2(G__3517,G__3518) : pred__3510.call(null,G__3517,G__3518));
})())){
return (new inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian(self__.var_name,self__.suff_stats,G__3481,self__.__meta,self__.__extmap,null));
} else {
return (new inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian(self__.var_name,self__.suff_stats,self__.hyperparameters,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__3481),null));
}
}
}
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$var_DASH_name,self__.var_name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$suff_DASH_stats,self__.suff_stats,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$hyperparameters,self__.hyperparameters,null))], null),self__.__extmap));
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__3481){
var self__ = this;
var this__4471__auto____$1 = this;
return (new inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian(self__.var_name,self__.suff_stats,self__.hyperparameters,G__3481,self__.__extmap,self__.__hash));
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.inferenceql$inference$gpm$proto$Incorporate$ = cljs.core.PROTOCOL_SENTINEL);

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.inferenceql$inference$gpm$proto$Incorporate$incorporate$arity$2 = (function (this$,values){
var self__ = this;
var this$__$1 = this;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,self__.var_name);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$suff_DASH_stats,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(self__.suff_stats,cljs.core.cst$kw$n,cljs.core.inc),cljs.core.cst$kw$sum_DASH_x,(function (p1__3477_SHARP_){
return (p1__3477_SHARP_ + x);
})),cljs.core.cst$kw$sum_DASH_x_DASH_sq,(function (p1__3478_SHARP_){
return (p1__3478_SHARP_ + (x * x));
})));
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.prototype.inferenceql$inference$gpm$proto$Incorporate$unincorporate$arity$2 = (function (this$,values){
var self__ = this;
var this$__$1 = this;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,self__.var_name);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$suff_DASH_stats,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(self__.suff_stats,cljs.core.cst$kw$n,cljs.core.dec),cljs.core.cst$kw$sum_DASH_x,(function (p1__3479_SHARP_){
return (p1__3479_SHARP_ - x);
})),cljs.core.cst$kw$sum_DASH_x_DASH_sq,(function (p1__3480_SHARP_){
return (p1__3480_SHARP_ - (x * x));
})));
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_DASH_name,cljs.core.cst$sym$suff_DASH_stats,cljs.core.cst$sym$hyperparameters], null);
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.cljs$lang$type = true);

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"inferenceql.inference.gpm.primitive-gpms.gaussian/Gaussian",null,(1),null));
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"inferenceql.inference.gpm.primitive-gpms.gaussian/Gaussian");
}));

/**
 * Positional factory function for inferenceql.inference.gpm.primitive-gpms.gaussian/Gaussian.
 */
inferenceql.inference.gpm.primitive_gpms.gaussian.__GT_Gaussian = (function inferenceql$inference$gpm$primitive_gpms$gaussian$__GT_Gaussian(var_name,suff_stats,hyperparameters){
return (new inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian(var_name,suff_stats,hyperparameters,null,null,null));
});

/**
 * Factory function for inferenceql.inference.gpm.primitive-gpms.gaussian/Gaussian, taking a map of keywords to field values.
 */
inferenceql.inference.gpm.primitive_gpms.gaussian.map__GT_Gaussian = (function inferenceql$inference$gpm$primitive_gpms$gaussian$map__GT_Gaussian(G__3485){
var extmap__4512__auto__ = (function (){var G__3519 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__3485,cljs.core.cst$kw$var_DASH_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$suff_DASH_stats,cljs.core.cst$kw$hyperparameters], 0));
if(cljs.core.record_QMARK_(G__3485)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__3519);
} else {
return G__3519;
}
})();
return (new inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian(cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(G__3485),cljs.core.cst$kw$suff_DASH_stats.cljs$core$IFn$_invoke$arity$1(G__3485),cljs.core.cst$kw$hyperparameters.cljs$core$IFn$_invoke$arity$1(G__3485),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Checks if the given pGPM is Gaussian.
 */
inferenceql.inference.gpm.primitive_gpms.gaussian.gaussian_QMARK_ = (function inferenceql$inference$gpm$primitive_gpms$gaussian$gaussian_QMARK_(stattype){
return ((cljs.core.record_QMARK_(stattype)) && ((stattype instanceof inferenceql.inference.gpm.primitive_gpms.gaussian.Gaussian)));
});
/**
 * Hyperparameter grid for the Gaussian variable, used in column hyperparameter inference
 *   for Column GPMs.
 *   This mirrors the implementation in `cgpm` library for a `normal` variable.
 */
inferenceql.inference.gpm.primitive_gpms.gaussian.hyper_grid = (function inferenceql$inference$gpm$primitive_gpms$gaussian$hyper_grid(data,n_grid){
var n = (cljs.core.count(data) + (1));
var sum_sq_dev = (inferenceql.inference.utils.variance(data) * (n - (2)));
var sum_sq_dev__$1 = (((sum_sq_dev === (0)))?0.01:sum_sq_dev);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$m,inferenceql.inference.utils.linspace(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,data),((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,data) + (5)) + (1)),n_grid),cljs.core.cst$kw$r,inferenceql.inference.utils.log_linspace(((1) / n),n,n_grid),cljs.core.cst$kw$s,inferenceql.inference.utils.log_linspace((sum_sq_dev__$1 / 100.0),sum_sq_dev__$1,n_grid),cljs.core.cst$kw$nu,inferenceql.inference.utils.log_linspace((1),n,n_grid)], null);
});
/**
 * Casts a CrossCat category spec to a Gaussian pGPM.
 *   Requires a variable name, optionally takes by key
 *   sufficient statistics and hyperparameters.
 */
inferenceql.inference.gpm.primitive_gpms.gaussian.spec__GT_gaussian = (function inferenceql$inference$gpm$primitive_gpms$gaussian$spec__GT_gaussian(var_args){
var args__4835__auto__ = [];
var len__4829__auto___3526 = arguments.length;
var i__4830__auto___3527 = (0);
while(true){
if((i__4830__auto___3527 < len__4829__auto___3526)){
args__4835__auto__.push((arguments[i__4830__auto___3527]));

var G__3528 = (i__4830__auto___3527 + (1));
i__4830__auto___3527 = G__3528;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return inferenceql.inference.gpm.primitive_gpms.gaussian.spec__GT_gaussian.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(inferenceql.inference.gpm.primitive_gpms.gaussian.spec__GT_gaussian.cljs$core$IFn$_invoke$arity$variadic = (function (var_name,p__3524){
var map__3525 = p__3524;
var map__3525__$1 = cljs.core.__destructure_map(map__3525);
var hyperparameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3525__$1,cljs.core.cst$kw$hyperparameters);
var suff_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3525__$1,cljs.core.cst$kw$suff_DASH_stats);
var suff_stats_SINGLEQUOTE_ = (((!((suff_stats == null))))?suff_stats:new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$n,(0),cljs.core.cst$kw$sum_DASH_x,(0),cljs.core.cst$kw$sum_DASH_x_DASH_sq,(0)], null));
var hyperparameters_SINGLEQUOTE_ = (((!((hyperparameters == null))))?hyperparameters:new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$m,(0),cljs.core.cst$kw$r,(1),cljs.core.cst$kw$s,(1),cljs.core.cst$kw$nu,(1)], null));
return inferenceql.inference.gpm.primitive_gpms.gaussian.__GT_Gaussian(var_name,suff_stats_SINGLEQUOTE_,hyperparameters_SINGLEQUOTE_);
}));

(inferenceql.inference.gpm.primitive_gpms.gaussian.spec__GT_gaussian.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(inferenceql.inference.gpm.primitive_gpms.gaussian.spec__GT_gaussian.cljs$lang$applyTo = (function (seq3522){
var G__3523 = cljs.core.first(seq3522);
var seq3522__$1 = cljs.core.next(seq3522);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3523,seq3522__$1);
}));

/**
 * Exports a Gaussian pGPM to a Multimixture spec.
 */
inferenceql.inference.gpm.primitive_gpms.gaussian.export$ = (function inferenceql$inference$gpm$primitive_gpms$gaussian$export(gaussian){
var samples = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((1000),(function (){
return inferenceql.inference.gpm.proto.simulate(gaussian,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(gaussian)], null),cljs.core.PersistentArrayMap.EMPTY);
}));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$var_DASH_name.cljs$core$IFn$_invoke$arity$1(gaussian),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mu,inferenceql.inference.utils.average(samples),cljs.core.cst$kw$sigma,inferenceql.inference.utils.std(samples)], null)]);
});
