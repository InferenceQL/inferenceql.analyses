// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

var cljs_time$coerce$ICoerce$to_date_time$dyn_12641 = (function (obj){
var x__4521__auto__ = (((obj == null))?null:obj);
var m__4522__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4522__auto__.call(null,obj));
} else {
var m__4519__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4519__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
return cljs_time$coerce$ICoerce$to_date_time$dyn_12641(obj);
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__12642 = millis;
if((G__12642 == null)){
return null;
} else {
return goog.date.UtcDateTime.fromTimestamp.call(null,G__12642);
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4622__auto__ = (function cljs_time$coerce$from_string_$_iter__12643(s__12644){
return (new cljs.core.LazySeq(null,(function (){
var s__12644__$1 = s__12644;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__12644__$1);
if(temp__5753__auto__){
var s__12644__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12644__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__12644__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__12646 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__12645 = (0);
while(true){
if((i__12645 < size__4621__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__12645);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e12647){if((e12647 instanceof Error)){
var _ = e12647;
return null;
} else {
throw e12647;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__12646,d);

var G__12649 = (i__12645 + (1));
i__12645 = G__12649;
continue;
} else {
var G__12650 = (i__12645 + (1));
i__12645 = G__12650;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12646),cljs_time$coerce$from_string_$_iter__12643(cljs.core.chunk_rest(s__12644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12646),null);
}
} else {
var f = cljs.core.first(s__12644__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e12648){if((e12648 instanceof Error)){
var _ = e12648;
return null;
} else {
throw e12648;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__12643(cljs.core.rest(s__12644__$2)));
} else {
var G__12651 = cljs.core.rest(s__12644__$2);
s__12644__$1 = G__12651;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__12652 = date;
var G__12652__$1 = (((G__12652 == null))?null:G__12652.getTime());
if((G__12652__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__12652__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__12653 = obj;
var G__12653__$1 = (((G__12653 == null))?null:cljs_time.coerce.to_date_time(G__12653));
if((G__12653__$1 == null)){
return null;
} else {
return G__12653__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__4221__auto__ = millis;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__4221__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__12654 = obj;
var G__12654__$1 = (((G__12654 == null))?null:cljs_time.coerce.to_date_time(G__12654));
var G__12654__$2 = (((G__12654__$1 == null))?null:G__12654__$1.getTime());
if((G__12654__$2 == null)){
return null;
} else {
return (new Date(G__12654__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__12655 = obj;
var G__12655__$1 = (((G__12655 == null))?null:cljs_time.coerce.to_date_time(G__12655));
if((G__12655__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(cljs.core.cst$kw$date_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__12655__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5751__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5751__auto__)){
var dt = temp__5751__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5751__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5751__auto__)){
var dt = temp__5751__auto__;
var G__12656 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__12656.setHours(dt.getHours());

G__12656.setMinutes(dt.getMinutes());

G__12656.setSeconds(dt.getSeconds());

G__12656.setMilliseconds(dt.getMilliseconds());

return G__12656;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

goog.object.set(cljs_time.coerce.to_date_time,"null",(function (_){
return null;
}));

(Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
}));

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
}));

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
}));

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

goog.object.set(cljs_time.coerce.to_date_time,"number",(function (long$){
return cljs_time.coerce.from_long(long$);
}));

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

goog.object.set(cljs_time.coerce.to_date_time,"string",(function (string){
return cljs_time.coerce.from_string(string);
}));
