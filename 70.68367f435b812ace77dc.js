(function(){var e={"esri/core/HandleOwner":111,"esri/views/2d/layers/features/controllers/BaseController":703,"esri/views/2d/layers/features/controllers/StreamController":1004,"esri/views/2d/layers/features/controllers/support/DispatchQueue":2156},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1004:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(28),r(27),r(34),r(406),r(161),r(97),r(59),r(35),r(33),r(32),r(756),r(29),r(343),r(529),r(568),r(587),r(131),r(703),r(2156)],void 0===(i=function(e,t,r,n,i,o,s,a,u,c,p,l,d,h,y,f,_,v,g,m,b){function S(e){for(var t=0,r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r),t|=0;return t}Object.defineProperty(t,"__esModule",{value:!0});var w=p.getLogger("esri.views.2d.layers.features.controllers.StreamController"),F=5e3,E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.errorString=null,t._started=!1,t._idCounter=0,t._tileDispatchMap=new s.default,t._updateIntervalId=0,t._reconnectWebSocketT=d.throttle(t._reconnectWebSocket,F,t),t._featureIds=[],t}return r(t,e),t.prototype.initialize=function(){var e=this;this.handles.add(this.watch("processor",this._switchProcessor.bind(this))),["connectionStatus","errorString"].forEach(function(t){e.watch(t,function(r){return e.remoteClient.invoke("setProperty",{propertyName:t,value:r})})}),this._updateIntervalId=setInterval(function(){return e._checkForUpdates()},64)},t.prototype.destroy=function(){clearInterval(this._updateIntervalId),this._destroyWebSocket(),this._tileDispatchMap.forEach(function(e){return e.destroy()}),this.queryEngine&&(this.queryEngine.destroy(),this._set("queryEngine",null)),this._tempQueryEngine&&this._tempQueryEngine.destroy()},Object.defineProperty(t.prototype,"updating",{get:function(){return!this._started||this._tempQueryEngine&&!!this._tempQueryEngine.spatialIndex.numFeatures||this._anyUpdatesQueued()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"connectionStatus",{get:function(){if(!this._websocket)return"disconnected";switch(this._websocket.readyState){case 0:case 1:return"connected";case 2:case 3:return"disconnected"}},enumerable:!0,configurable:!0}),t.prototype.onEdits=function(e){},t.prototype.redraw=function(){},t.prototype.refresh=function(){},t.prototype.setViewState=function(e){},t.prototype.queryFeatures=function(e){return this.queryEngine.executeQuery(g.fromJSON(e))},t.prototype.queryFeatureCount=function(e){return this.queryEngine.executeQueryForCount(g.fromJSON(e))},t.prototype.queryObjectIds=function(e){return this.queryEngine.executeQueryForIds(g.fromJSON(e))},t.prototype.queryExtent=function(e){return this.queryEngine.executeQueryForExtent(g.fromJSON(e))},t.prototype.queryLatestObservations=function(e){return this.queryEngine.executeQueryForLatestObservations(g.fromJSON(e))},t.prototype.onTileUpdate=function(e){var t=this,r=e.added,n=e.removed;this._started&&(n.forEach(function(e){return t._handleTileRemove(e)}),r.forEach(function(e){return t._handleTileAdd(e)}))},t.prototype.enableEvent=function(e){"data-received"===e.name&&(this._shouldPushDataReceived=e.value)},t.prototype._start=function(){var e=this;this._started||this._queryBuddies().then(function(){e._startWebSocket(),e.tileStore.tiles.forEach(function(t){return e._handleTileAdd(t)}),e._started=!0,e._updateActiveTiles(e.queryEngine)})},t.prototype._getService=function(){var e=i({},this.service.content,{f:"json"});return u(this.service.source,{query:e,responseType:"json"}).then(function(e){return e.data})},t.prototype._startWebSocket=function(){var e=this;this._getService().then(function(t){return e._createWebSocket(t)}).then(function(t){return e._setFilter(t)}).catch(function(e){return w.error(new c("stream-socket","Encountered an error while creating listening stream",e))})},t.prototype._destroyWebSocket=function(){this._websocket&&(this._websocket.onmessage=null,this._websocket.onerror=null,this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.close(),this.notifyChange("connectionStatus"))},t.prototype._createWebSocket=function(e){var t=this;return l.create(function(r){for(var n=e.streamUrls.filter(function(e){return"ws"===e.transport})[0],i=n.token,o=null,s=null,a=0,u=n.urls;a<u.length;a++){var c=u[a];-1!==c.indexOf("wss")?o=c:s=c}var p=(o||s)+"/subscribe?token="+i+"&outSR="+t.spatialReference.wkid,l=new WebSocket(p);l.onopen=function(){t.notifyChange("connectionStatus"),r(l)},l.onmessage=t._handleWebSocketMessage.bind(t),l.onclose=t._handleWebSocketClose.bind(t),t._destroyWebSocket(),t._websocket=l})},t.prototype._setFilter=function(e){var t=this,r={},n=this.processor.queryInfo.outFields;return this.configuration.filter.geometry&&(r.geometry=JSON.stringify(this.configuration.filter.geometry)),this.configuration.filter.where&&(r.where=this.configuration.filter.where),n.length/this.service.fields.length>=.75&&(r.outFields=n.join(",")),r.geometry||r.where||r.outFields||l.resolve(),l.create(function(n,i){var o=e.onmessage;e.onmessage=function(r){var s=JSON.parse(r.data);s.filter&&(e.onmessage=o,s.error?(t.set("errorString","Could not set filter - "+s.error),i(new c("stream-socket-filter",t.errorString,{activeFilter:s.filter}))):n())},e.send(JSON.stringify({filter:r}))})},t.prototype._reconnectWebSocket=function(e){this.set("errorString","Lost websocket connection - "+e+", attempting to reconnect"),w.error(new c("stream-socket",this.errorString)),this._startWebSocket()},t.prototype._handleWebSocketClose=function(e){var t=e.code;if(this.notifyChange("connectionStatus"),1001===t||t>=4e3){var r=this._getErrorMessage(t);this.set("errorString","Encountered a service error "+t+" - "+r+", terminating websocket connection"),w.error(new c("stream-socket",this.errorString))}else{if(1e3===t)return;this._reconnectWebSocketT(t)}},t.prototype._getErrorMessage=function(e){switch(e){case 1001:return"Service is going away";case 4400:return"Invalid URL parameters. Check filter properties.";case 4401:case 4403:return"Not authorized";case 4404:return"Service not found";default:return"Encountered error code "+e}},t.prototype._handleWebSocketMessage=function(e){try{var t=JSON.parse(e.data);if(this._shouldPushDataReceived&&this.remoteClient.invoke("emitEvent",{name:"data-received",event:t}),this._normalizeFeatureId(t),this._enrichFeature(t),!t.geometry&&!t.centroid)return void w.error(new c("stream-socket","Found malformed feature"));var r=y.convertFromFeature(t,this.service.geometryType,!1,!1,this.service.objectIdField);this._featureIds.push(r.attributes[this.service.objectIdField]),this._tempQueryEngine.spatialIndex.add(r)}catch(e){w.error(new c("stream-socket","Encountered an error when parsing socket message",e))}},t.prototype._handleTileAdd=function(e){if(this._tileDispatchMap.has(e.id)){(t=this._tileDispatchMap.get(e.id)).up()}else{var t=new b.default;this._tileDispatchMap.set(e.id,t)}this._queryTileFeatures(e,!0,this.queryEngine)},t.prototype._handleTileRemove=function(e){this._tileDispatchMap.get(e.id).destroy(),this._tileDispatchMap.delete(e.id)},t.prototype._checkForUpdates=function(){if(this._started){var e=this._getFeaturesToAdd(),t=this._getFeaturesToRemove(),r=[];e.spatialIndex.forEachFeature(function(e){return r.push(e)}),t.spatialIndex.addMany(r),this.processor.supportsTileUpdates?(this._updateActiveTiles(e,t),e.spatialIndex.transferAll(this.queryEngine.spatialIndex)):(e.spatialIndex.transferAll(this.queryEngine.spatialIndex),this._repushActiveTiles(e,t)),t.destroy()}},t.prototype._anyUpdatesQueued=function(){return o.from(this._tileDispatchMap).some(function(e){return e[0],e[1].hasAction()})},t.prototype._updateActiveTiles=function(e,t){for(var r=0,n=this.tileStore.tiles;r<n.length;r++){var i=n[r];this._queryTileFeatures(i,!1,e,t)}},t.prototype._repushActiveTiles=function(e,t){for(var r=0,n=this.tileStore.tiles;r<n.length;r++){var i=n[r];this._queryTileFeatures(i,!0,this.queryEngine)}},t.prototype._getFeaturesToAdd=function(){return this._tempQueryEngine},t.prototype._getFeaturesToRemove=function(){var e=this.configuration.purgeOptions,t=e.displayCount,r=e.age,n=this._createQueryEngine();return this._purgeByDisplayCount(t,n),this._purgeByAge(r,n),n},t.prototype._purgeByDisplayCount=function(e,t){if(null!=e){var r=this.queryEngine.spatialIndex.numFeatures;if(r>e){var n=r-e,i=this._featureIds.splice(0,n);this.queryEngine.spatialIndex.transferIds(t.spatialIndex,i)}}},t.prototype._purgeByAge=function(e,t){if(null==e)return l.resolve();var r=60*e*1e3,n=Date.now()-r,i=this.service.timeInfo.startTimeField;this.queryEngine.spatialIndex.transferIf(t.spatialIndex,function(e){return e.attributes[i]<n})},t.prototype._queryTileFeatures=function(e,t,r,n){var i=this,o={hasZ:!1,hasM:!1,transform:{originPosition:"upperLeft",scale:[e.resolution,e.resolution],translate:[e.bounds[0],e.bounds[3]]}},s=this.processor.queryInfo,a={returnCentroid:s.returnCentroid,returnGeometry:s.returnGeometry,pixelBuffer:s.pixelBuffer},u=this._tileDispatchMap.get(e.id),c=r&&r.executeTileQuery(e,a),p=c&&c.features,l=n&&n.executeTileQueryForIds(e,a);u.enqueue(function(){return i.processor.onTileData(e,{addOrUpdate:p,remove:l,clear:t,transformParams:o})})},t.prototype._queryBuddies=function(){var e=this,t=this.service.buddyLayers,r=t.relatedFeatures,n=t.keepLatestArchive,i=this._queryBuddy(r),o=this._queryBuddy(n);return l.all([i,o]).then(function(t){var r=t[0],n=t[1];return e._addBuddyFeatures(r,n)})},t.prototype._queryBuddy=function(e){if(!e)return l.resolve();var t=this._createQuery(this.processor.queryInfo);return v.executeQuery(e.source,t).then(function(e){return e.data})},t.prototype._addBuddyFeatures=function(e,t){e&&this._setEnrichmentData(e),t&&this._addFeatures(t)},t.prototype._setEnrichmentData=function(e){for(var t=e.features,r=new s.default,n=this.service.buddyLayers.relatedFeatures.joinField,i=0,o=t;i<o.length;i++){var a=o[i];n===this.service.objectIdField&&"string"==typeof n&&(a.attributes[n]=S(a.attributes[n])),r.set(a.attributes[n],a)}this._enrichmentData=r},t.prototype._enrichFeature=function(e){if(!this._enrichmentData)return e;var t=this.service.buddyLayers.relatedFeatures.joinField,r=e.attributes[t];if(this._enrichmentData.has(r)){var n=this._enrichmentData.get(r),i=n.attributes,o=n.geometry;for(var s in i)e.attributes[s]=i[s];o&&(e.geometry=o)}return e},t.prototype._normalizeFeatureId=function(e){var t;t="__OBJECTID"===this.service.objectIdField?this._idCounter++:"string"==typeof e.attributes[this.service.objectIdField]?S(e.attributes[this.service.objectIdField]):e.attributes[this.service.objectIdField],e.attributes[this.service.objectIdField]=t},t.prototype._addFeatures=function(e){e.objectIdFieldName=this.service.objectIdField;for(var t=0,r=e.features;t<r.length;t++){var n=r[t];this._normalizeFeatureId(n),this._enrichFeature(n)}var i=y.convertFromFeatureSet(e).features;this.queryEngine.spatialIndex.addMany(i)},t.prototype._createQuery=function(e){var t=new g,r=e.historicMoment,n=e.outFields;return t.historicMoment=null!=r?new Date(r):null,t.outFields=n.length/this.service.fields.length>=.75?["*"]:n,t.returnExceededLimitFeatures=!0,t.returnGeometry=!0,t.gdbVersion=e.gdbVersion,t.returnCentroid=e.returnCentroid,t.orderByFields=e.orderByFields,t.outSpatialReference=this.spatialReference,t.where=this.configuration.filter.where||"1=1",this.configuration.filter.geometry&&(t.geometry=a.Extent.fromJSON(this.configuration.filter.geometry)),t},t.prototype._createQueryEngine=function(){var e=this.processor.queryInfo,t=e.definitionExpression,r=e.gdbVersion,n=e.historicMoment;return new _.default({definitionExpression:t,fields:this.service.fields,geometryType:this.service.geometryType,objectIdField:this.service.objectIdField,hasM:!1,hasZ:!1,spatialReference:this.spatialReference.toJSON(),cacheSpatialQueries:!0,gdbVersion:r,historicMoment:null!=n&&new Date(n),spatialIndex:new f.default({geometryType:this.service.geometryType,hasM:!1,hasZ:!1}),timeInfo:this.service.timeInfo})},t.prototype._resetTempStore=function(){this._tempQueryEngine&&this._tempQueryEngine.destroy(),this._tempQueryEngine=this._createQueryEngine()},t.prototype._switchProcessor=function(e,t){this.queryEngine&&this.queryEngine.destroy(),this._set("queryEngine",this._createQueryEngine()),this._resetTempStore(),this._start(),this.notifyChange("updating")},n([h.property()],t.prototype,"service",void 0),n([h.property()],t.prototype,"configuration",void 0),n([h.property({readOnly:!0})],t.prototype,"queryEngine",void 0),n([h.property()],t.prototype,"updating",null),n([h.property()],t.prototype,"connectionStatus",null),n([h.property()],t.prototype,"errorString",void 0),n([h.subclass()],t)}(h.declared(m.default));t.default=E}.apply(null,n))||(e.exports=i)},111:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(28),r(27),r(38),r(68),r(29)],void 0===(i=function(e,t,r,n,i,o,s){return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=e.call(this)||this;return n.handles=new o,n}return r(t,e),t.prototype.destroy=function(){this.handles.destroy()},n([s.property({readOnly:!0})],t.prototype,"handles",void 0),n([s.subclass("esri.core.HandleOwner")],t)}(s.declared(i))}.apply(null,n))||(e.exports=i)},2156:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(32)],void 0===(i=function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this._action=null,this._queue=[],this._refs=1}return e.prototype.up=function(){this._refs++},e.prototype.down=function(){return 0==--this._refs},e.prototype.destroy=function(){this._queue.length=0,this._action&&(this._action.cancel(),this._action=null)},e.prototype.enqueue=function(e){this._action?this._queue.push(e):this._setAction(e)},e.prototype.flush=function(){var e=this._action;if(!e)return r.resolve();var t=this._queue.reduce(function(e,t){return e.then(t)},e);return this._action=t.then(this._handleNext.bind(this)),this._queue.length=0,t},e.prototype.hasAction=function(){return!!this._action},e.prototype._setAction=function(e){this._action=e().then(this._handleNext.bind(this))},e.prototype._handleNext=function(){this._queue.length?this._setAction(this._queue.shift()):this._action=null},e}();t.default=n}.apply(null,n))||(e.exports=i)},703:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(28),r(27),r(38),r(111),r(29)],void 0===(i=function(e,t,r,n,i,o,s){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.processor=null,t.remoteClient=null,t.service=null,t.tileStore=null,t}return r(t,e),t.prototype.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])},t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"spatialReference",{get:function(){return this.tileStore.tileScheme.spatialReference},enumerable:!0,configurable:!0}),t.prototype.enableEvent=function(e){},n([s.property()],t.prototype,"processor",void 0),n([s.property({constructOnly:!0})],t.prototype,"remoteClient",void 0),n([s.property({constructOnly:!0})],t.prototype,"service",void 0),n([s.property({dependsOn:["tileStore"]})],t.prototype,"spatialReference",null),n([s.property({constructOnly:!0})],t.prototype,"tileInfo",void 0),n([s.property({constructOnly:!0})],t.prototype,"tileStore",void 0),n([s.subclass()],t)}(s.declared(i,o));t.default=a}.apply(null,n))||(e.exports=i)}}]);