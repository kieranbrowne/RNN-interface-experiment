// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('rnn_app.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
rnn_app.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((((28) * (28)) * (4)),(255))),cljs.core.cst$kw$model,null], null));
rnn_app.core.model = reagent.core.cursor(rnn_app.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model], null));
rnn_app.core.input = reagent.core.cursor(rnn_app.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input], null));
var c__14242__auto___18019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14242__auto___18019){
return (function (){
var f__14243__auto__ = (function (){var switch__14118__auto__ = ((function (c__14242__auto___18019){
return (function (state_18009){
var state_val_18010 = (state_18009[(1)]);
if((state_val_18010 === (1))){
var inst_17997 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_17998 = [false];
var inst_17999 = cljs.core.PersistentHashMap.fromArrays(inst_17997,inst_17998);
var inst_18000 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://s3.amazonaws.com/neocortex-js/examples-data/mnist_mlp_model_params.json.gz",cljs.core.array_seq([inst_17999], 0));
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18009__$1,(2),inst_18000);
} else {
if((state_val_18010 === (2))){
var inst_18002 = (state_18009[(2)]);
var inst_18003 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_18002);
var inst_18004 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_18003], 0));
var inst_18005 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18002);
var inst_18006 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_18005,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
var inst_18007 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(rnn_app.core.model,inst_18006) : cljs.core.reset_BANG_.call(null,rnn_app.core.model,inst_18006));
var state_18009__$1 = (function (){var statearr_18011 = state_18009;
(statearr_18011[(7)] = inst_18004);

return statearr_18011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18009__$1,inst_18007);
} else {
return null;
}
}
});})(c__14242__auto___18019))
;
return ((function (switch__14118__auto__,c__14242__auto___18019){
return (function() {
var rnn_app$core$state_machine__14119__auto__ = null;
var rnn_app$core$state_machine__14119__auto____0 = (function (){
var statearr_18015 = [null,null,null,null,null,null,null,null];
(statearr_18015[(0)] = rnn_app$core$state_machine__14119__auto__);

(statearr_18015[(1)] = (1));

return statearr_18015;
});
var rnn_app$core$state_machine__14119__auto____1 = (function (state_18009){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_18009);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e18016){if((e18016 instanceof Object)){
var ex__14122__auto__ = e18016;
var statearr_18017_18020 = state_18009;
(statearr_18017_18020[(5)] = ex__14122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18009);

return cljs.core.cst$kw$recur;
} else {
throw e18016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,cljs.core.cst$kw$recur)){
var G__18021 = state_18009;
state_18009 = G__18021;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
rnn_app$core$state_machine__14119__auto__ = function(state_18009){
switch(arguments.length){
case 0:
return rnn_app$core$state_machine__14119__auto____0.call(this);
case 1:
return rnn_app$core$state_machine__14119__auto____1.call(this,state_18009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rnn_app$core$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = rnn_app$core$state_machine__14119__auto____0;
rnn_app$core$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = rnn_app$core$state_machine__14119__auto____1;
return rnn_app$core$state_machine__14119__auto__;
})()
;})(switch__14118__auto__,c__14242__auto___18019))
})();
var state__14244__auto__ = (function (){var statearr_18018 = (f__14243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14243__auto__.cljs$core$IFn$_invoke$arity$0() : f__14243__auto__.call(null));
(statearr_18018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14242__auto___18019);

return statearr_18018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14244__auto__);
});})(c__14242__auto___18019))
);

if(typeof rnn_app.core.debug_QMARK_ !== 'undefined'){
} else {
rnn_app.core.debug_QMARK_ = goog.DEBUG;
}
rnn_app.core.darken_point = (function rnn_app$core$darken_point(e){
var x = Math.floor((e.nativeEvent.offsetX / ((500) / (28))));
var y = Math.floor((e.nativeEvent.offsetY / ((500) / (28))));
var i = ((4) * ((y * (28)) + x));
console.log(e);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rnn_app.core.input,((function (x,y,i){
return (function (p1__18022_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__18022_SHARP_,i,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(-40)));
});})(x,y,i))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rnn_app.core.input,((function (x,y,i){
return (function (p1__18023_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__18023_SHARP_,(i + (1)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(-40)));
});})(x,y,i))
);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rnn_app.core.input,((function (x,y,i){
return (function (p1__18024_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__18024_SHARP_,(i + (2)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(-40)));
});})(x,y,i))
);
});
rnn_app.core.input_layer_canvas = (function rnn_app$core$input_layer_canvas(input_layer){
var this$ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (this$){
return (function (p1__18025_SHARP_){
var G__18032 = this$;
var G__18033 = reagent.core.dom_node(p1__18025_SHARP_);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18032,G__18033) : cljs.core.reset_BANG_.call(null,G__18032,G__18033));
});})(this$))
,cljs.core.cst$kw$component_DASH_did_DASH_update,((function (this$){
return (function (){
var ctx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)).getContext("2d");
var data = ctx.createImageData((28),(28));
ctx.imageSmoothingEnabled = false;

var seq__18034_18038 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(((28) * (28)) * (4))));
var chunk__18035_18039 = null;
var count__18036_18040 = (0);
var i__18037_18041 = (0);
while(true){
if((i__18037_18041 < count__18036_18040)){
var i_18042 = chunk__18035_18039.cljs$core$IIndexed$_nth$arity$2(null,i__18037_18041);
(data.data[i_18042] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rnn_app.core.input) : cljs.core.deref.call(null,rnn_app.core.input)),i_18042));

var G__18043 = seq__18034_18038;
var G__18044 = chunk__18035_18039;
var G__18045 = count__18036_18040;
var G__18046 = (i__18037_18041 + (1));
seq__18034_18038 = G__18043;
chunk__18035_18039 = G__18044;
count__18036_18040 = G__18045;
i__18037_18041 = G__18046;
continue;
} else {
var temp__4657__auto___18047 = cljs.core.seq(seq__18034_18038);
if(temp__4657__auto___18047){
var seq__18034_18048__$1 = temp__4657__auto___18047;
if(cljs.core.chunked_seq_QMARK_(seq__18034_18048__$1)){
var c__7228__auto___18049 = cljs.core.chunk_first(seq__18034_18048__$1);
var G__18050 = cljs.core.chunk_rest(seq__18034_18048__$1);
var G__18051 = c__7228__auto___18049;
var G__18052 = cljs.core.count(c__7228__auto___18049);
var G__18053 = (0);
seq__18034_18038 = G__18050;
chunk__18035_18039 = G__18051;
count__18036_18040 = G__18052;
i__18037_18041 = G__18053;
continue;
} else {
var i_18054 = cljs.core.first(seq__18034_18048__$1);
(data.data[i_18054] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rnn_app.core.input) : cljs.core.deref.call(null,rnn_app.core.input)),i_18054));

var G__18055 = cljs.core.next(seq__18034_18048__$1);
var G__18056 = null;
var G__18057 = (0);
var G__18058 = (0);
seq__18034_18038 = G__18055;
chunk__18035_18039 = G__18056;
count__18036_18040 = G__18057;
i__18037_18041 = G__18058;
continue;
}
} else {
}
}
break;
}

ctx.putImageData(data,(0),(0));

return ctx.drawImage((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),(0),(0),(28),(28),(0),(0),(500),(500));
});})(this$))
,cljs.core.cst$kw$display_DASH_name,"canvas",cljs.core.cst$kw$reagent_DASH_render,((function (this$){
return (function (i,input_layer__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,(function (){var temp__4655__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
if(cljs.core.truth_(temp__4655__auto__)){
var canvas = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(500),cljs.core.cst$kw$height,(500),cljs.core.cst$kw$data_DASH_v,cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rnn_app.core.input) : cljs.core.deref.call(null,rnn_app.core.input))),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transform,"rotateX(60deg) rotateY(0deg) rotateZ(-45deg)",cljs.core.cst$kw$margin_DASH_left,"150px",cljs.core.cst$kw$margin_DASH_top,"-203px",cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,((200) - i),cljs.core.cst$kw$opacity,0.8,cljs.core.cst$kw$box_DASH_shadow,"-9px 9px 7px rgba(0,0,0,0.6)"], null),cljs.core.cst$kw$on_DASH_click,rnn_app.core.darken_point,cljs.core.cst$kw$on_DASH_mouse_DASH_move,rnn_app.core.darken_point], null);
} else {
return null;
}
})()], null);
});})(this$))
], null));
});
rnn_app.core.synapse = (function rnn_app$core$synapse(weight){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,[cljs.core.str(((100) / (28))),cljs.core.str("%")].join(''),cljs.core.cst$kw$padding_DASH_bottom,[cljs.core.str(((100) / (28))),cljs.core.str("%")].join(''),cljs.core.cst$kw$background,[cljs.core.str("rgb("),cljs.core.str((0)),cljs.core.str(cljs.core.rand_int((255))),cljs.core.str((0)),cljs.core.str(")")].join(''),cljs.core.cst$kw$display,"inline-block"], null)], null)], null);
});
rnn_app.core.neuron = (function rnn_app$core$neuron(value){
return null;
});
rnn_app.core.hidden_layer = (function rnn_app$core$hidden_layer(layer){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"500px",cljs.core.cst$kw$line_DASH_height,(0)], null)], null)], null);
});
rnn_app.core.page = (function rnn_app$core$page(ratom){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"#ddd"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"RNN"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rnn_app.core.hidden_layer,rnn_app.core.model], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str(cljs.core.count(cljs.core.cst$kw$W.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$parameters.cljs$core$IFn$_invoke$arity$1(cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rnn_app.core.model) : cljs.core.deref.call(null,rnn_app.core.model))))))))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rnn_app.core.input_layer_canvas,(1),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rnn_app.core.input_layer_canvas,(2),null], null)], null);
});
rnn_app.core.dev_setup = (function rnn_app$core$dev_setup(){
if(cljs.core.truth_(rnn_app.core.debug_QMARK_)){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["dev mode"], 0));
} else {
return null;
}
});
rnn_app.core.reload = (function rnn_app$core$reload(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rnn_app.core.page,rnn_app.core.model], null),document.getElementById("app"));
});
rnn_app.core.main = (function rnn_app$core$main(){
rnn_app.core.dev_setup();

return rnn_app.core.reload();
});
goog.exportSymbol('rnn_app.core.main', rnn_app.core.main);
