System.register(["./json-asset-1a4fee7d.js","./mesh-c8768986.js"],(function(t){"use strict";var e,a,r,n,s,i,o,u,f,l,v;return{setters:[function(t){e=t.b3,a=t.t,r=t.gb,n=t.b4,s=t.x,i=t.aH,o=t.c5,u=t.gc,f=t.a3},function(t){l=t.M,v=t.B}],execute:function(){var h;t({c:function(t,r,i){i=i||{};var h,c=[],T=0,b=[],g=0,R=t.positions.slice();if(R.length>0){if(h=null,t.attributes)for(var A,w=a(t.attributes);!(A=w()).done;){var O=A.value;if(O.name===e.ATTR_POSITION){h=O;break}}h||(h=d[0]),c.push(h);var x=n[h.format];g=Math.max(g,Math.floor(R.length/x.count)),b.push({offset:T,data:R,attribute:h}),T+=x.size}if(t.normals&&t.normals.length>0){if(h=null,t.attributes)for(var p,M=a(t.attributes);!(p=M()).done;){var _=p.value;if(_.name===e.ATTR_NORMAL){h=_;break}}h||(h=d[1]);var B=n[h.format];c.push(h),g=Math.max(g,Math.floor(t.normals.length/B.count)),b.push({offset:T,data:t.normals,attribute:h}),T+=B.size}if(t.uvs&&t.uvs.length>0){if(h=null,t.attributes)for(var L,N=a(t.attributes);!(L=N()).done;){var I=L.value;if(I.name===e.ATTR_TEX_COORD){h=I;break}}h||(h=d[2]);var y=n[h.format];c.push(h),g=Math.max(g,Math.floor(t.uvs.length/y.count)),b.push({offset:T,data:t.uvs,attribute:h}),T+=y.size}if(t.tangents&&t.tangents.length>0){if(h=null,t.attributes)for(var z,G=a(t.attributes);!(z=G()).done;){var C=z.value;if(C.name===e.ATTR_TANGENT){h=C;break}}h||(h=d[3]);var P=n[h.format];c.push(h),g=Math.max(g,Math.floor(t.tangents.length/P.count)),b.push({offset:T,data:t.tangents,attribute:h}),T+=P.size}if(t.colors&&t.colors.length>0){if(h=null,t.attributes)for(var D,E=a(t.attributes);!(D=E()).done;){var k=D.value;if(k.name===e.ATTR_COLOR){h=k;break}}h||(h=d[4]);var F=n[h.format];c.push(h),g=Math.max(g,Math.floor(t.colors.length/F.count)),b.push({offset:T,data:t.colors,attribute:h}),T+=F.size}if(t.customAttributes)for(var S,V=a(t.customAttributes);!(S=V()).done;){var j=S.value,U=n[j.attr.format];c.push(j.attr),g=Math.max(g,Math.floor(j.values.length/U.count)),b.push({offset:T,data:j.values,attribute:j.attr}),T+=U.size}for(var X=new v,H=new ArrayBuffer(g*T),q=new DataView(H),J=0,K=b;J<K.length;J++){var Q=K[J];u(q,Q.data,Q.attribute.format,Q.offset,T)}X.setNextAlignment(0);var W={attributes:c,view:{offset:X.getLength(),length:H.byteLength,count:g,stride:T}};X.addBuffer(H);var Y=null,Z=0;if(t.indices){var $=t.indices;Z=$.length,Y=new ArrayBuffer(2*Z);var tt=new DataView(Y);u(tt,$,s.R16UI)}var et={primitiveMode:t.primitiveMode||f.TRIANGLE_LIST,vertexBundelIndices:[0]};Y&&(X.setNextAlignment(2),et.indexView={offset:X.getLength(),length:Y.byteLength,count:Z,stride:2},X.addBuffer(Y));var at=t.minPos;if(!at&&i.calculateBounds){at=o.set(new o,1/0,1/0,1/0);for(var rt=0;rt<g;++rt)o.set(m,R[3*rt+0],R[3*rt+1],R[3*rt+2]),o.min(at,at,m)}var nt=t.maxPos;if(!nt&&i.calculateBounds){nt=o.set(new o,-1/0,-1/0,-1/0);for(var st=0;st<g;++st)o.set(m,R[3*st+0],R[3*st+1],R[3*st+2]),o.max(nt,nt,m)}var it={vertexBundles:[W],primitives:[et]};return at&&(it.minPosition=new o(at.x,at.y,at.z)),nt&&(it.maxPosition=new o(nt.x,nt.y,nt.z)),r||(r=new l),r.reset({struct:it,data:new Uint8Array(X.getCombined())}),r},r:function(t,e){void 0===e&&(e=0);for(var i,o={positions:[]},u=new DataView(t.data.buffer,t.data.byteOffset,t.data.byteLength),f=t.struct,l=f.primitives[e],v=a(l.vertexBundelIndices);!(i=v()).done;)for(var d,m=i.value,c=f.vertexBundles[m],T=c.view.offset,b=c.view,g=b.length,R=b.stride,A=a(c.attributes);!(d=A()).done;){var w=d.value,O=h[w.name];O&&(o[O]=(o[O]||[]).concat(r(u,w.format,T,g,R))),T+=n[w.format].size}var x=l.indexView;return o.indices=r(u,s["R"+8*x.stride+"UI"],x.offset,x.length),o}}),function(t){t[t.positions=e.ATTR_POSITION]="positions",t[t.normals=e.ATTR_NORMAL]="normals",t[t.uvs=e.ATTR_TEX_COORD]="uvs",t[t.colors=e.ATTR_COLOR]="colors"}(h||(h={}));var d=[new i(e.ATTR_POSITION,s.RGB32F),new i(e.ATTR_NORMAL,s.RGB32F),new i(e.ATTR_TEX_COORD,s.RG32F),new i(e.ATTR_TANGENT,s.RGBA32F),new i(e.ATTR_COLOR,s.RGBA32F)],m=new o}}}));
