(function(){var e={"esri/core/HandleOwner":111,"esri/renderers/support/heatmapUtils":704,"esri/views/2d/layers/features/processors/BaseProcessor":846,"esri/views/2d/layers/features/processors/HeatmapProcessor":2160},t=this||window,r=t.webpackJsonp=t.webpackJsonp||[];r.registerAbsMids?r.registerAbsMids(e):(r.absMidsWaiting=r.absMidsWaiting||[]).push(e)})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{111:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(28),r(27),r(38),r(68),r(29)],void 0===(o=function(e,t,r,n,o,i,a){return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=e.call(this)||this;return n.handles=new i,n}return r(t,e),t.prototype.destroy=function(){this.handles.destroy()},n([a.property({readOnly:!0})],t.prototype,"handles",void 0),n([a.subclass("esri.core.HandleOwner")],t)}(a.declared(o))}.apply(null,n))||(e.exports=o)},2160:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(28),r(27),r(29),r(704),r(846)],void 0===(o=function(e,t,r,n,o,i,a){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="heatmap",t.updating=!1,t}return r(t,e),Object.defineProperty(t.prototype,"queryInfo",{get:function(){var e=this.configuration,t=e.renderer,r=e.definitionExpression,n=e.outFields,o=e.gdbVersion,i=e.historicMoment;return{definitionExpression:r,orderByFields:null,outFields:n,pixelBuffer:Math.round(4.5*t.blurRadius),returnCentroid:!1,returnGeometry:!0,gdbVersion:o,historicMoment:i}},enumerable:!0,configurable:!0}),t.prototype.onTileData=function(e,t){if(t&&t.addOrUpdate&&t.addOrUpdate.length>0){var r=i.calculateHeatmapIntensityInfo(t.addOrUpdate,this.configuration.renderer,512,512);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:r},{transferList:[r.matrix]})}return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:null})},t.prototype.onTileError=function(e,t){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t})},t.prototype.onTileUpdate=function(e){},n([o.property()],t.prototype,"configuration",void 0),n([o.property({constructOnly:!0})],t.prototype,"queryInfo",null),n([o.property()],t.prototype,"updating",void 0),n([o.subclass()],t)}(o.declared(a.default));t.default=l}.apply(null,n))||(e.exports=o)},704:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(8),r(36)],void 0===(o=function(e,t,r,n){function o(e,t,r,o,i){for(var a=new Uint32Array(e*e),l=("buffer"in t?t:new Float64Array(t)),u=("buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer)),p=u.length/(i-o),s=0;s<l.length;s++){var d=l[s],c=Math.floor((d-o)*p);a[s]=u[n.clamp(c,0,u.length-1)]}return a.buffer}function i(e){for(var t=Math.round(4.5*e),r=e*e,n=new Float64Array(2*t+1),o=0;o<=n.length;o++)n[o]=Math.exp(-Math.pow(o-t,2)/(2*r))/Math.sqrt(2*Math.PI)*(e/2);return n}function a(e,t){return"function"==typeof e?e:e?"string"==typeof t?function(t){return-1*+t[e]}:function(r){return+r[e]+t}:function(e){return 1}}Object.defineProperty(t,"__esModule",{value:!0}),t.generateGradient=function(){if(!("document"in r))return function(e){return null};var e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,function(r){for(var n=t.createLinearGradient(0,0,0,e.height),o=0,i=r.colorStops;o<i.length;o++){var a=i[o],l=a.ratio,u=a.color;n.addColorStop(l,"rgba("+u[0]+", "+u[1]+", "+u[2]+", "+u[3]+")")}return t.fillStyle=n,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}}(),t.calculateHeatmapIntensityInfo=function(e,t,r,n){for(var o,l=t.blurRadius,u=t.fieldOffset,p=t.field,s=new Float64Array(r*n),d=i(l),c=Math.round(4.5*l),f=Number.NEGATIVE_INFINITY,y=a(p,u),h=0,v=e;h<v.length;h++)for(var g=v[h],b=g.geometry,m=g.attributes,w=b.x-c,M=b.y-c,O=Math.max(0,w),I=Math.max(0,M),x=Math.min(n,b.y+c),U=Math.min(r,b.x+c),A=+y(m),R=I;R<x;R++)for(var T=d[R-M],j=O;j<U;j++){var S=d[j-w];(o=s[R*r+j]+=T*S*A)>f&&(f=o)}return{matrix:s.buffer,max:f}},t.drawHeatmap=function(e,t,r,n,i,a){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);var l=e.getImageData(0,0,t,t);r&&n&&l.data.set(new Uint8ClampedArray(o(t,r,n,i,a))),e.putImageData(l,0,0)},t.createHeatmapImageData=o,t.createKernel=i,t.createValueFunction=a}.apply(null,n))||(e.exports=o)},846:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(28),r(27),r(38),r(111),r(29),r(353)],void 0===(o=function(e,t,r,n,o,i,a,l){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])},t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"supportsTileUpdates",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"spatialReference",{get:function(){var e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null},enumerable:!0,configurable:!0}),n([a.property({readOnly:!0})],t.prototype,"supportsTileUpdates",null),n([a.property({constructOnly:!0})],t.prototype,"remoteClient",void 0),n([a.property({constructOnly:!0})],t.prototype,"service",void 0),n([a.property({dependsOn:["tileStore.tileScheme.spatialReference"]})],t.prototype,"spatialReference",null),n([a.property({constructOnly:!0})],t.prototype,"tileInfo",void 0),n([a.property({constructOnly:!0})],t.prototype,"tileStore",void 0),n([a.subclass()],t)}(a.declared(o,i,l.default));t.default=u}.apply(null,n))||(e.exports=o)}}]);