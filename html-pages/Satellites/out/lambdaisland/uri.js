// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('lambdaisland.uri');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('lambdaisland.uri.normalize');
lambdaisland.uri.uri_regex = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)?(\?([^#]*))?(#(.*))?$/;
lambdaisland.uri.authority_regex = /^(([^:]*)(:(.*))?@)?([^:]*)(:(\d*))?$/;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {lambdaisland.uri.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
lambdaisland.uri.URI = (function (scheme,user,password,host,port,path,query,fragment,__meta,__extmap,__hash){
this.scheme = scheme;
this.user = user;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.fragment = fragment;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(lambdaisland.uri.URI.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var authority_string = (function (user__$1,password__$1,host__$1,port__$1){
if(cljs.core.truth_(host__$1)){
var G__40635 = user__$1;
var G__40635__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = user__$1;
if(cljs.core.truth_(and__4221__auto__)){
return password__$1;
} else {
return and__4221__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40635),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password__$1)].join(''):G__40635);
var G__40635__$2 = (cljs.core.truth_(user__$1)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40635__$1),"@"].join(''):G__40635__$1);
var G__40635__$3 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40635__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(host__$1)].join('')
;
if(cljs.core.truth_(port__$1)){
return [G__40635__$3,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port__$1)].join('');
} else {
return G__40635__$3;
}
} else {
return null;
}
});
var authority = authority_string(self__.user,self__.password,self__.host,self__.port);
var G__40636 = "";
var G__40636__$1 = (cljs.core.truth_(self__.scheme)?[G__40636,cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.scheme),":"].join(''):G__40636);
var G__40636__$2 = (cljs.core.truth_(authority)?[G__40636__$1,"//",authority].join(''):G__40636__$1);
var G__40636__$3 = [G__40636__$2,cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join('')
;
var G__40636__$4 = (cljs.core.truth_(self__.query)?[G__40636__$3,"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.query)].join(''):G__40636__$3);
if(cljs.core.truth_(self__.fragment)){
return [G__40636__$4,"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fragment)].join('');
} else {
return G__40636__$4;
}
}));

(lambdaisland.uri.URI.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(lambdaisland.uri.URI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k40630,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__40637 = k40630;
var G__40637__$1 = (((G__40637 instanceof cljs.core.Keyword))?G__40637.fqn:null);
switch (G__40637__$1) {
case "scheme":
return self__.scheme;

break;
case "user":
return self__.user;

break;
case "password":
return self__.password;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "fragment":
return self__.fragment;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40630,else__4475__auto__);

}
}));

(lambdaisland.uri.URI.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__40638){
var vec__40639 = p__40638;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40639,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40639,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(lambdaisland.uri.URI.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#lambdaisland.uri.URI{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$scheme,self__.scheme],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$user,self__.user],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$password,self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$host,self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$port,self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$query,self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fragment,self__.fragment],null))], null),self__.__extmap));
}));

(lambdaisland.uri.URI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40629){
var self__ = this;
var G__40629__$1 = this;
return (new cljs.core.RecordIter((0),G__40629__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheme,cljs.core.cst$kw$user,cljs.core.cst$kw$password,cljs.core.cst$kw$host,cljs.core.cst$kw$port,cljs.core.cst$kw$path,cljs.core.cst$kw$query,cljs.core.cst$kw$fragment], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(lambdaisland.uri.URI.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(lambdaisland.uri.URI.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,self__.__hash));
}));

(lambdaisland.uri.URI.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(lambdaisland.uri.URI.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__40642 = (function (coll__4469__auto__){
return (-701916260 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__40642(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(lambdaisland.uri.URI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40631,other40632){
var self__ = this;
var this40631__$1 = this;
return (((!((other40632 == null)))) && ((((this40631__$1.constructor === other40632.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40631__$1.scheme,other40632.scheme)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40631__$1.user,other40632.user)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40631__$1.password,other40632.password)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40631__$1.host,other40632.host)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40631__$1.port,other40632.port)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40631__$1.path,other40632.path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40631__$1.query,other40632.query)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40631__$1.fragment,other40632.fragment)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40631__$1.__extmap,other40632.__extmap)))))))))))))))))))));
}));

(lambdaisland.uri.URI.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$password,null,cljs.core.cst$kw$fragment,null,cljs.core.cst$kw$port,null,cljs.core.cst$kw$host,null,cljs.core.cst$kw$query,null,cljs.core.cst$kw$user,null,cljs.core.cst$kw$scheme,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(lambdaisland.uri.URI.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k40630){
var self__ = this;
var this__4479__auto____$1 = this;
var G__40643 = k40630;
var G__40643__$1 = (((G__40643 instanceof cljs.core.Keyword))?G__40643.fqn:null);
switch (G__40643__$1) {
case "scheme":
case "user":
case "password":
case "host":
case "port":
case "path":
case "query":
case "fragment":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40630);

}
}));

(lambdaisland.uri.URI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__40629){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__40644 = cljs.core.keyword_identical_QMARK_;
var expr__40645 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__40647 = cljs.core.cst$kw$scheme;
var G__40648 = expr__40645;
return (pred__40644.cljs$core$IFn$_invoke$arity$2 ? pred__40644.cljs$core$IFn$_invoke$arity$2(G__40647,G__40648) : pred__40644.call(null,G__40647,G__40648));
})())){
return (new lambdaisland.uri.URI(G__40629,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40649 = cljs.core.cst$kw$user;
var G__40650 = expr__40645;
return (pred__40644.cljs$core$IFn$_invoke$arity$2 ? pred__40644.cljs$core$IFn$_invoke$arity$2(G__40649,G__40650) : pred__40644.call(null,G__40649,G__40650));
})())){
return (new lambdaisland.uri.URI(self__.scheme,G__40629,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40651 = cljs.core.cst$kw$password;
var G__40652 = expr__40645;
return (pred__40644.cljs$core$IFn$_invoke$arity$2 ? pred__40644.cljs$core$IFn$_invoke$arity$2(G__40651,G__40652) : pred__40644.call(null,G__40651,G__40652));
})())){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,G__40629,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40653 = cljs.core.cst$kw$host;
var G__40654 = expr__40645;
return (pred__40644.cljs$core$IFn$_invoke$arity$2 ? pred__40644.cljs$core$IFn$_invoke$arity$2(G__40653,G__40654) : pred__40644.call(null,G__40653,G__40654));
})())){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,G__40629,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40655 = cljs.core.cst$kw$port;
var G__40656 = expr__40645;
return (pred__40644.cljs$core$IFn$_invoke$arity$2 ? pred__40644.cljs$core$IFn$_invoke$arity$2(G__40655,G__40656) : pred__40644.call(null,G__40655,G__40656));
})())){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,G__40629,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40657 = cljs.core.cst$kw$path;
var G__40658 = expr__40645;
return (pred__40644.cljs$core$IFn$_invoke$arity$2 ? pred__40644.cljs$core$IFn$_invoke$arity$2(G__40657,G__40658) : pred__40644.call(null,G__40657,G__40658));
})())){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,G__40629,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40659 = cljs.core.cst$kw$query;
var G__40660 = expr__40645;
return (pred__40644.cljs$core$IFn$_invoke$arity$2 ? pred__40644.cljs$core$IFn$_invoke$arity$2(G__40659,G__40660) : pred__40644.call(null,G__40659,G__40660));
})())){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,G__40629,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40661 = cljs.core.cst$kw$fragment;
var G__40662 = expr__40645;
return (pred__40644.cljs$core$IFn$_invoke$arity$2 ? pred__40644.cljs$core$IFn$_invoke$arity$2(G__40661,G__40662) : pred__40644.call(null,G__40661,G__40662));
})())){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,G__40629,self__.__meta,self__.__extmap,null));
} else {
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__40629),null));
}
}
}
}
}
}
}
}
}));

(lambdaisland.uri.URI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$scheme,self__.scheme,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$user,self__.user,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$password,self__.password,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$host,self__.host,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$port,self__.port,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path,self__.path,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$query,self__.query,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fragment,self__.fragment,null))], null),self__.__extmap));
}));

(lambdaisland.uri.URI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__40629){
var self__ = this;
var this__4471__auto____$1 = this;
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,G__40629,self__.__extmap,self__.__hash));
}));

(lambdaisland.uri.URI.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(lambdaisland.uri.URI.prototype.call = (function (self__,kw){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,kw);
}));

(lambdaisland.uri.URI.prototype.apply = (function (self__,args40634){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40634)));
}));

(lambdaisland.uri.URI.prototype.cljs$core$IFn$_invoke$arity$1 = (function (kw){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,kw);
}));

(lambdaisland.uri.URI.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$scheme,cljs.core.cst$sym$user,cljs.core.cst$sym$password,cljs.core.cst$sym$host,cljs.core.cst$sym$port,cljs.core.cst$sym$path,cljs.core.cst$sym$query,cljs.core.cst$sym$fragment], null);
}));

(lambdaisland.uri.URI.cljs$lang$type = true);

(lambdaisland.uri.URI.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"lambdaisland.uri/URI",null,(1),null));
}));

(lambdaisland.uri.URI.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"lambdaisland.uri/URI");
}));

/**
 * Positional factory function for lambdaisland.uri/URI.
 */
lambdaisland.uri.__GT_URI = (function lambdaisland$uri$__GT_URI(scheme,user,password,host,port,path,query,fragment){
return (new lambdaisland.uri.URI(scheme,user,password,host,port,path,query,fragment,null,null,null));
});

/**
 * Factory function for lambdaisland.uri/URI, taking a map of keywords to field values.
 */
lambdaisland.uri.map__GT_URI = (function lambdaisland$uri$map__GT_URI(G__40633){
var extmap__4512__auto__ = (function (){var G__40663 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40633,cljs.core.cst$kw$scheme,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$user,cljs.core.cst$kw$password,cljs.core.cst$kw$host,cljs.core.cst$kw$port,cljs.core.cst$kw$path,cljs.core.cst$kw$query,cljs.core.cst$kw$fragment], 0));
if(cljs.core.record_QMARK_(G__40633)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40663);
} else {
return G__40663;
}
})();
return (new lambdaisland.uri.URI(cljs.core.cst$kw$scheme.cljs$core$IFn$_invoke$arity$1(G__40633),cljs.core.cst$kw$user.cljs$core$IFn$_invoke$arity$1(G__40633),cljs.core.cst$kw$password.cljs$core$IFn$_invoke$arity$1(G__40633),cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(G__40633),cljs.core.cst$kw$port.cljs$core$IFn$_invoke$arity$1(G__40633),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__40633),cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(G__40633),cljs.core.cst$kw$fragment.cljs$core$IFn$_invoke$arity$1(G__40633),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

lambdaisland.uri.match_uri = (function lambdaisland$uri$match_uri(uri){
var matches = cljs.core.re_matches(lambdaisland.uri.uri_regex,uri);
var vec__40666 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40666,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40666,(1),null);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40666,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40666,(3),null);
var authority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40666,(4),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40666,(5),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40666,(6),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40666,(7),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40666,(8),null);
var fragment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40666,(9),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [scheme,authority,((cljs.core.seq(path))?path:null),query,fragment], null);
});
lambdaisland.uri.match_authority = (function lambdaisland$uri$match_authority(authority){
var matches = cljs.core.re_matches(lambdaisland.uri.authority_regex,authority);
var vec__40669 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40669,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40669,(1),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40669,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40669,(3),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40669,(4),null);
var host = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40669,(5),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40669,(6),null);
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40669,(7),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [user,password,host,port], null);
});
/**
 * Parse a URI string into a lambadisland.uri.URI record.
 */
lambdaisland.uri.parse = (function lambdaisland$uri$parse(uri){
var vec__40672 = lambdaisland.uri.match_uri(uri);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40672,(0),null);
var authority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40672,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40672,(2),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40672,(3),null);
var fragment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40672,(4),null);
if(cljs.core.truth_(authority)){
var vec__40675 = lambdaisland.uri.match_authority(authority);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40675,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40675,(1),null);
var host = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40675,(2),null);
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40675,(3),null);
return (new lambdaisland.uri.URI(scheme,user,password,host,port,path,query,fragment,null,null,null));
} else {
return (new lambdaisland.uri.URI(scheme,null,null,null,null,path,query,fragment,null,null,null));
}
});
/**
 * Turn the given value into a lambdaisland.uri.URI record, if it isn't one
 *   already. Supports String, java.net.URI, and other URI-like objects that return
 *   a valid URI string with `str`.
 */
lambdaisland.uri.uri = (function lambdaisland$uri$uri(uri_like){
if((uri_like instanceof lambdaisland.uri.URI)){
return uri_like;
} else {
return lambdaisland.uri.parse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri_like));
}
});
lambdaisland.uri.absolute_path_QMARK_ = (function lambdaisland$uri$absolute_path_QMARK_(path){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(path),"/");
});
/**
 * As per RFC 3986 section 5.2.4
 */
lambdaisland.uri.remove_dot_segments = (function lambdaisland$uri$remove_dot_segments(path){
if(cljs.core.truth_(path)){
var in$ = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/(?=\/)/);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var G__40679 = cljs.core.first(in$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/.",G__40679)){
if(cljs.core.next(in$)){
var G__40680 = cljs.core.next(in$);
var G__40681 = out;
in$ = G__40680;
out = G__40681;
continue;
} else {
var G__40682 = null;
var G__40683 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,"/");
in$ = G__40682;
out = G__40683;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/..",G__40679)){
if(cljs.core.next(in$)){
var G__40684 = cljs.core.next(in$);
var G__40685 = cljs.core.vec(cljs.core.butlast(out));
in$ = G__40684;
out = G__40685;
continue;
} else {
var G__40686 = null;
var G__40687 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(out)),"/");
in$ = G__40686;
out = G__40687;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__40679)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(out);
} else {
var G__40688 = cljs.core.next(in$);
var G__40689 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(in$));
in$ = G__40688;
out = G__40689;
continue;

}
}
}
break;
}
} else {
return null;
}
});
lambdaisland.uri.merge_paths = (function lambdaisland$uri$merge_paths(a,b){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["/",null], null), null),a))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/^.*\//,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
} else {
if(lambdaisland.uri.absolute_path_QMARK_(b)){
return b;
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
}
}
});
/**
 * Join two URI records as per RFC 3986. Handles relative URIs.
 */
lambdaisland.uri.join_STAR_ = (function lambdaisland$uri$join_STAR_(base,ref){
if(cljs.core.truth_(cljs.core.cst$kw$scheme.cljs$core$IFn$_invoke$arity$1(ref))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ref,cljs.core.cst$kw$path,lambdaisland.uri.remove_dot_segments);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(ref))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ref,cljs.core.cst$kw$scheme,cljs.core.cst$kw$scheme.cljs$core$IFn$_invoke$arity$1(base),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$query,cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(ref)], 0)):(((cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(ref) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,cljs.core.cst$kw$query,cljs.core.some(cljs.core.cst$kw$query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,base], null))):cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(base,cljs.core.cst$kw$path,lambdaisland.uri.remove_dot_segments(((lambdaisland.uri.absolute_path_QMARK_(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(ref)))?cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(ref):lambdaisland.uri.merge_paths(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(base),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(ref)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$query,cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(ref)], 0)))),cljs.core.cst$kw$fragment,cljs.core.cst$kw$fragment.cljs$core$IFn$_invoke$arity$1(ref));
}
});
/**
 * Joins any number of URIs as per RFC3986. Arguments can be strings, they will
 *   be coerced to URI records.
 */
lambdaisland.uri.join = (function lambdaisland$uri$join(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40691 = arguments.length;
var i__4830__auto___40692 = (0);
while(true){
if((i__4830__auto___40692 < len__4829__auto___40691)){
args__4835__auto__.push((arguments[i__4830__auto___40692]));

var G__40693 = (i__4830__auto___40692 + (1));
i__4830__auto___40692 = G__40693;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic = (function (uris){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.join_STAR_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.uri,uris));
}));

(lambdaisland.uri.join.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(lambdaisland.uri.join.cljs$lang$applyTo = (function (seq40690){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40690));
}));

lambdaisland.uri.decode_param_pair = (function lambdaisland$uri$decode_param_pair(param){
var vec__40694 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(param,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40694,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40694,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(k)?lambdaisland.uri.normalize.percent_decode(k):""),(cljs.core.truth_(v)?lambdaisland.uri.normalize.percent_decode(clojure.string.replace(v,/\+/," ")):"")], null);
});
/**
 * Parse a query string, consisting of key=value pairs, separated by "&". Takes
 *   the following options:
 * 
 *   - `:keywordize?` whether to turn return keys as keywords. Defaults to `true`.
 *   - `:multikeys` how to handle the same key occuring multiple times, defaults to
 *  `:duplicates`
 * 
 *   The possible values for `:multikeys` are
 * 
 *   - `:never` always return a single value for a key. The rightmost value
 *  "wins"
 *   - `:always` return a map with vectors as values, with successive
 *  values of the same key in order
 *   - `:duplicates` return a vector for keys that occur multiple times, or a
 *  string otherwise
 */
lambdaisland.uri.query_string__GT_map = (function lambdaisland$uri$query_string__GT_map(var_args){
var G__40698 = arguments.length;
switch (G__40698) {
case 1:
return lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$1 = (function (q){
return lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$2(q,null);
}));

(lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$2 = (function (q,p__40699){
var map__40700 = p__40699;
var map__40700__$1 = cljs.core.__destructure_map(map__40700);
var multikeys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40700__$1,cljs.core.cst$kw$multikeys,cljs.core.cst$kw$duplicates);
var keywordize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40700__$1,cljs.core.cst$kw$keywordize_QMARK_,true);
if((!(clojure.string.blank_QMARK_(q)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__40701){
var vec__40702 = p__40701;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40702,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40702,(1),null);
var k__$1 = (cljs.core.truth_(keywordize_QMARK_)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k):k);
var G__40705 = multikeys;
var G__40705__$1 = (((G__40705 instanceof cljs.core.Keyword))?G__40705.fqn:null);
switch (G__40705__$1) {
case "never":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k__$1,v);

break;
case "always":
if(cljs.core.contains_QMARK_(m,k__$1)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,k__$1,cljs.core.conj,v);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}

break;
case "duplicates":
if(cljs.core.contains_QMARK_(m,k__$1)){
if(cljs.core.vector_QMARK_((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k__$1) : m.call(null,k__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,k__$1,cljs.core.conj,v);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k__$1) : m.call(null,k__$1)),v], null));
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k__$1,v);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40705__$1)].join('')));

}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.decode_param_pair,clojure.string.split.cljs$core$IFn$_invoke$arity$2(q,/&/)));
} else {
return null;
}
}));

(lambdaisland.uri.query_string__GT_map.cljs$lang$maxFixedArity = 2);

/**
 * Return the query section of a URI as a map. Will coerce its argument
 *   with [[uri]]. Takes an options map, see [[query-string->map]] for options.
 */
lambdaisland.uri.query_map = (function lambdaisland$uri$query_map(var_args){
var G__40709 = arguments.length;
switch (G__40709) {
case 1:
return lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$2(uri,null);
}));

(lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$2 = (function (u,opts){
return lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.uri(u).query,opts);
}));

(lambdaisland.uri.query_map.cljs$lang$maxFixedArity = 2);

/**
 * Percent encoding for query strings. Will percent-encode values that are
 *   reserved in query strings only. Encodes spaces as +.
 */
lambdaisland.uri.query_encode = (function lambdaisland$uri$query_encode(s){
var encode_char = (function (p1__40711_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__40711_SHARP_)){
return "+";
} else {
if(cljs.core.truth_(cljs.core.re_find(/[^a-zA-Z0-9\-\._~@\\/]/,p1__40711_SHARP_))){
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$1(p1__40711_SHARP_);
} else {
return p1__40711_SHARP_;

}
}
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(encode_char,lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$1(s)));
});
lambdaisland.uri.encode_param_pair = (function lambdaisland$uri$encode_param_pair(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.query_encode(((cljs.core.simple_ident_QMARK_(k))?cljs.core.name(k):((cljs.core.qualified_ident_QMARK_(k))?[cljs.core.namespace(k),"/",cljs.core.name(k)].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)
)))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.query_encode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
});
/**
 * Convert a map into a query string, consisting of key=value pairs separated by
 *   `&`. The result is percent-encoded so it is always safe to use. Keys can be
 *   strings or keywords. If values are collections then this results in multiple
 *   entries for the same key. `nil` values are ignored. Values are stringified.
 */
lambdaisland.uri.map__GT_query_string = (function lambdaisland$uri$map__GT_query_string(m){
if(cljs.core.seq(m)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("&",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__40712){
var vec__40713 = p__40712;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40713,(1),null);
if((v == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.coll_QMARK_(v)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.encode_param_pair,k),v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.uri.encode_param_pair(k,v)], null);

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0))));
} else {
return null;
}
});
/**
 * Add additional query parameters to a URI. Takes a URI (or coercible to URI) and
 *   a map of query params.
 */
lambdaisland.uri.assoc_query_STAR_ = (function lambdaisland$uri$assoc_query_STAR_(u,m){
var u__$1 = lambdaisland.uri.uri(u);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,cljs.core.cst$kw$query,lambdaisland.uri.map__GT_query_string(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$1(u__$1),m], 0))));
});
/**
 * Add additional query parameters to a URI. Takes a URI (or coercible to URI)
 *   followed key value pairs.
 * 
 *   (assoc-query "http://example.com?id=1&name=John" :name "Jack" :style "goth")
 *   ;;=> #lambdaisland/uri "http://example.com?id=1&name=Jack&style=goth" 
 */
lambdaisland.uri.assoc_query = (function lambdaisland$uri$assoc_query(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40720 = arguments.length;
var i__4830__auto___40721 = (0);
while(true){
if((i__4830__auto___40721 < len__4829__auto___40720)){
args__4835__auto__.push((arguments[i__4830__auto___40721]));

var G__40722 = (i__4830__auto___40721 + (1));
i__4830__auto___40721 = G__40722;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return lambdaisland.uri.assoc_query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(lambdaisland.uri.assoc_query.cljs$core$IFn$_invoke$arity$variadic = (function (u,p__40718){
var map__40719 = p__40718;
var map__40719__$1 = cljs.core.__destructure_map(map__40719);
var kvs = map__40719__$1;
return lambdaisland.uri.assoc_query_STAR_(u,kvs);
}));

(lambdaisland.uri.assoc_query.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.uri.assoc_query.cljs$lang$applyTo = (function (seq40716){
var G__40717 = cljs.core.first(seq40716);
var seq40716__$1 = cljs.core.next(seq40716);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40717,seq40716__$1);
}));

/**
 * Is the URI relative? Returns true if the URI does not have a scheme (protocol).
 */
lambdaisland.uri.relative_QMARK_ = (function lambdaisland$uri$relative_QMARK_(uri){
return (cljs.core.cst$kw$scheme.cljs$core$IFn$_invoke$arity$1(uri) == null);
});
/**
 * Is the URI absolute? Returns true if the URI has a scheme (protocol), and hence also an origin.
 */
lambdaisland.uri.absolute_QMARK_ = cljs.core.complement(lambdaisland.uri.relative_QMARK_);
lambdaisland.uri.edn_tag = cljs.core.cst$sym$lambdaisland_SLASH_uri;
(lambdaisland.uri.URI.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(lambdaisland.uri.URI.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.edn_tag)," ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1.toString()], 0))], 0));
}));
/**
 * A map that can be passed to clojure.edn/read, so tagged URI literals are
 *   read back correctly.
 */
lambdaisland.uri.edn_readers = cljs.core.PersistentArrayMap.createAsIfByAssoc([lambdaisland.uri.edn_tag,lambdaisland.uri.parse]);
