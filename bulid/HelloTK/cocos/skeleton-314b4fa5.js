System.register(["./json-asset-1a4fee7d.js","./mesh-c8768986.js"],(function(e){"use strict";var i,t,n,o,s,r,c,a,h,u,l,p,f,d,m,_;return{setters:[function(e){i=e.cR,t=e.cS,n=e.ef,o=e.ek,s=e.d7,r=e.cc,c=e.ec,a=e.l,h=e.e2,u=e.df,l=e.eg,p=e.eh,f=e.ed,d=e.cU,m=e.ei},function(e){_=e.M}],execute:function(){var v,b,y,g,P,j,k,B,S;i(_.prototype,"Mesh.prototype",[{name:"renderingMesh",newName:"renderingSubMeshes"}]),t(_.prototype,"Mesh.prototype",[{name:"hasFlatBuffers"},{name:"destroyFlatBuffers"}]);var w=e("S",(v=n("cc.Skeleton"),b=o([s]),y=o([r]),v((S=function(e){function i(){for(var i,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n))||this,p(i,"_joints",j,f(i)),p(i,"_bindposes",k,f(i)),p(i,"_hash",B,f(i)),i._invBindposes=null,i}c(i,e);var t=i.prototype;return t.destroy=function(){var i,t;return null===(i=null===(t=a.director.root)||void 0===t?void 0:t.dataPoolManager)||void 0===i||i.releaseSkeleton(this),e.prototype.destroy.call(this)},t.validate=function(){return this.joints.length>0&&this.bindposes.length>0},h(i,[{key:"joints",get:function(){return this._joints},set:function(e){this._joints=e}},{key:"bindposes",get:function(){return this._bindposes},set:function(e){this._bindposes=e}},{key:"inverseBindposes",get:function(){if(!this._invBindposes){this._invBindposes=[];for(var e=0;e<this._bindposes.length;e++){var i=new r;r.invert(i,this._bindposes[e]),this._invBindposes.push(i)}}return this._invBindposes}},{key:"hash",get:function(){if(!this._hash){for(var e="",i=0;i<this._bindposes.length;i++){var t=this._bindposes[i];e+=t.m00.toPrecision(2)+" "+t.m01.toPrecision(2)+" "+t.m02.toPrecision(2)+" "+t.m03.toPrecision(2)+" "+t.m04.toPrecision(2)+" "+t.m05.toPrecision(2)+" "+t.m06.toPrecision(2)+" "+t.m07.toPrecision(2)+" "+t.m08.toPrecision(2)+" "+t.m09.toPrecision(2)+" "+t.m10.toPrecision(2)+" "+t.m11.toPrecision(2)+" "+t.m12.toPrecision(2)+" "+t.m13.toPrecision(2)+" "+t.m14.toPrecision(2)+" "+t.m15.toPrecision(2)+"\n"}this._hash=d(e,666)}return this._hash}}]),i}(u),j=l((P=S).prototype,"_joints",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),k=l(P.prototype,"_bindposes",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),B=l(P.prototype,"_hash",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),g=P))||g));a.Skeleton=w}}}));
