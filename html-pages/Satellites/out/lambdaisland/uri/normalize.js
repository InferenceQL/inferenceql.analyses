// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('lambdaisland.uri.normalize');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('lambdaisland.uri.platform');
/**
 * Which characters should be percent-encoded depends on which section
 *  of the URI is being normalized. This map contains regexes that for each
 *  case match the characters that need encoding.
 */
lambdaisland.uri.normalize.character_classes = (function (){var alpha = "a-zA-Z";
var digit = "0-9";
var gen_delims = ":\\/\\?#\\[\\]@";
var sub_delims = "!\\$&'\\(\\)\\*\\+,;=";
var reserved = [gen_delims,sub_delims].join('');
var unreserved = [alpha,digit,"\\-\\._~"].join('');
var pchar = [unreserved,sub_delims,":@"].join('');
var scheme = [alpha,digit,"\\-\\+\\."].join('');
var host = [unreserved,sub_delims,"\\[:\\]"].join('');
var authority = pchar;
var path = [pchar,"\\/"].join('');
var query = [unreserved,":@\\/\\?"].join('');
var fragment = [pchar,"\\/\\?"].join('');
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$path,cljs.core.cst$kw$fragment,cljs.core.cst$kw$authority,cljs.core.cst$kw$pchar,cljs.core.cst$kw$unreserved,cljs.core.cst$kw$sub_DASH_delims,cljs.core.cst$kw$gen_DASH_delims,cljs.core.cst$kw$host,cljs.core.cst$kw$reserved,cljs.core.cst$kw$alpha,cljs.core.cst$kw$query,cljs.core.cst$kw$scheme,cljs.core.cst$kw$digit],[cljs.core.re_pattern(["[^",path,"]"].join('')),cljs.core.re_pattern(["[^",fragment,"]"].join('')),cljs.core.re_pattern(["[^",authority,"]"].join('')),cljs.core.re_pattern(["[^",pchar,"]"].join('')),cljs.core.re_pattern(["[^",unreserved,"]"].join('')),cljs.core.re_pattern(["[^",sub_delims,"]"].join('')),cljs.core.re_pattern(["[^",gen_delims,"]"].join('')),cljs.core.re_pattern(["[^",host,"]"].join('')),cljs.core.re_pattern(["[^",reserved,"]"].join('')),cljs.core.re_pattern(["[^",alpha,"]"].join('')),cljs.core.re_pattern(["[^",query,"]"].join('')),cljs.core.re_pattern(["[^",scheme,"]"].join('')),cljs.core.re_pattern(["[^",digit,"]"].join(''))]);
})();
/**
 * Return a seq of the characters in a string, making sure not to split up
 *   UCS-2 (or is it UTF-16?) surrogate pairs. Because JavaScript. And Java.
 */
lambdaisland.uri.normalize.char_seq = (function lambdaisland$uri$normalize$char_seq(var_args){
var G__40609 = arguments.length;
switch (G__40609) {
case 1:
return lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$1 = (function (str){
return lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$2(str,(0));
}));

(lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$2 = (function (str,offset){
if((offset >= lambdaisland.uri.platform.str_len(str))){
return cljs.core.List.EMPTY;
} else {
var code = lambdaisland.uri.platform.char_code_at(str,offset);
var width = ((((((55296) <= code)) && ((code <= (56319)))))?(2):(1));
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(str,offset,(offset + width)),lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$2(str,(offset + width)));
}
}));

(lambdaisland.uri.normalize.char_seq.cljs$lang$maxFixedArity = 2);

/**
 * Convert characters in their percent encoded form. e.g.
 * `(percent_encode "a") #_=> "%61"`. When given a second argument, then
 * only characters of the given character class are encoded,
 * see `character-class`.
 * 
 * Characters are encoded as UTF-8. To use a different encoding. re-bind
 * `*character-encoding*`
 */
lambdaisland.uri.normalize.percent_encode = (function lambdaisland$uri$normalize$percent_encode(var_args){
var G__40614 = arguments.length;
switch (G__40614) {
case 1:
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$1 = (function (component){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40611_SHARP_){
return ["%",lambdaisland.uri.platform.byte__GT_hex(p1__40611_SHARP_)].join('');
}),lambdaisland.uri.platform.string__GT_byte_seq(component)));
}));

(lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$2 = (function (component,type){
var char_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.normalize.character_classes,type);
var encode_char = (function (p1__40612_SHARP_){
var G__40615 = p1__40612_SHARP_;
if(cljs.core.truth_(cljs.core.re_find(char_class,p1__40612_SHARP_))){
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$1(G__40615);
} else {
return G__40615;
}
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(encode_char,lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$1(component)));
}));

(lambdaisland.uri.normalize.percent_encode.cljs$lang$maxFixedArity = 2);

/**
 * The inverse of `percent-encode`, convert any %XX sequences in a string to
 * characters. Byte sequences are interpreted as UTF-8. To use a different
 * encoding. re-bind `*character-encoding*`
 */
lambdaisland.uri.normalize.percent_decode = (function lambdaisland$uri$normalize$percent_decode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,/(%[0-9A-Fa-f]{2})+/,(function (p__40617){
var vec__40618 = p__40617;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40618,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40618,(1),null);
return lambdaisland.uri.platform.byte_seq__GT_string(cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.platform.hex__GT_byte,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),clojure.string.split.cljs$core$IFn$_invoke$arity$2(x,/%/))));
}));
} else {
return null;
}
});
lambdaisland.uri.normalize.normalize_path = (function lambdaisland$uri$normalize$normalize_path(path){
if((path == null)){
return null;
} else {
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.normalize.percent_decode(path),cljs.core.cst$kw$path);
}
});
lambdaisland.uri.normalize.hex_code_point_QMARK_ = (function lambdaisland$uri$normalize$hex_code_point_QMARK_(cp){
return ((((((48) <= cp)) && ((cp <= (57))))) || (((((((65) <= cp)) && ((cp <= (70))))) || (((((97) <= cp)) && ((cp <= (102))))))));
});
/**
 * RFC3986 section 2.2
 * 
 *   The purpose of reserved characters is to provide a set of delimiting
 *   characters that are distinguishable from other data within a URI.
 *   URIs that differ in the replacement of a reserved character with its
 *   corresponding percent-encoded octet are not equivalent.  Percent-
 *   encoding a reserved character, or decoding a percent-encoded octet
 *   that corresponds to a reserved character, will change how the URI is
 *   interpreted by most applications.  Thus, characters in the reserved
 *   set are protected from normalization and are therefore safe to be
 *   used by scheme-specific and producer-specific algorithms for
 *   delimiting data subcomponents within a URI. 
 */
lambdaisland.uri.normalize.sub_delims = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["'",null,")",null,"=",null,"!",null,"*",null,"(",null,"&",null,";",null,",",null,"+",null,"$",null], null), null);
/**
 * Normalize the query section of a URI
 * 
 *   - sub-delimiters that are not percent encoded are left unencoded
 *   - sub-delimiters and other reserved characters are always percent encoded
 *   - non-reserved characters that are percent-encoded are decoded
 *   
 */
lambdaisland.uri.normalize.normalize_query = (function lambdaisland$uri$normalize$normalize_query(s){
if(cljs.core.truth_(s)){
var len = lambdaisland.uri.platform.str_len(s);
var i = (0);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,len)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,res);
} else {
if((((i < (len - (2)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((37),lambdaisland.uri.platform.char_code_at(s,i))) && (((lambdaisland.uri.normalize.hex_code_point_QMARK_(lambdaisland.uri.platform.char_code_at(s,(i + (1))))) && (lambdaisland.uri.normalize.hex_code_point_QMARK_(lambdaisland.uri.platform.char_code_at(s,(i + (2))))))))))){
var G__40621 = (i + (3));
var G__40622 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.normalize.percent_decode(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,i,(i + (3)))),cljs.core.cst$kw$query));
i = G__40621;
res = G__40622;
continue;
} else {
if(cljs.core.contains_QMARK_(lambdaisland.uri.normalize.sub_delims,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,i,(i + (1))))){
var G__40623 = (i + (1));
var G__40624 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,i,(i + (1))));
i = G__40623;
res = G__40624;
continue;
} else {
var G__40625 = (i + (1));
var G__40626 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,i,(i + (1))),cljs.core.cst$kw$query));
i = G__40625;
res = G__40626;
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
/**
 * Normalize a lambdaisland.uri.URI.
 */
lambdaisland.uri.normalize.normalize = (function lambdaisland$uri$normalize$normalize(uri){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(uri,cljs.core.cst$kw$path,lambdaisland.uri.normalize.normalize_path),cljs.core.cst$kw$query,lambdaisland.uri.normalize.normalize_query);
});
