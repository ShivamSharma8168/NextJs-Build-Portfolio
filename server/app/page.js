(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5722:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>o.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d}),i(5526),i(660),i(5866);var r=i(3191),n=i(8716),s=i(7922),o=i.n(s),a=i(5231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);i.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,5526)),"C:\\Users\\Admin\\Desktop\\NextJs Portfolio\\portfolio-nextjs\\src\\app\\page.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,660)),"C:\\Users\\Admin\\Desktop\\NextJs Portfolio\\portfolio-nextjs\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\Admin\\Desktop\\NextJs Portfolio\\portfolio-nextjs\\src\\app\\page.jsx"],c="/page",f={require:i,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8314:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2994,23)),Promise.resolve().then(i.t.bind(i,6114,23)),Promise.resolve().then(i.t.bind(i,9727,23)),Promise.resolve().then(i.t.bind(i,9671,23)),Promise.resolve().then(i.t.bind(i,1868,23)),Promise.resolve().then(i.t.bind(i,4759,23))},1806:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2481,23)),Promise.resolve().then(i.t.bind(i,9404,23))},5373:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,9404,23))},2481:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=i(1174),n=i(8374),s=i(326),o=n._(i(7577)),a=r._(i(962)),l=r._(i(815)),d=i(3078),u=i(5248),c=i(1206);i(576);let f=i(131),p=r._(i(6820)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,i,r,n,s,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function g(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let x=(0,o.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:n,height:a,width:l,decoding:d,className:u,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:x,fill:v,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:j,setShowAltText:w,sizesInput:_,onLoad:P,onError:S,...C}=e;return(0,s.jsx)("img",{...C,...g(f),loading:m,width:l,height:a,decoding:d,"data-nimg":v?"fill":"1",className:u,style:c,sizes:n,srcSet:r,src:i,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&h(e,p,b,y,j,x,_))},[i,p,b,y,j,S,x,_,t]),onLoad:e=>{h(e.currentTarget,p,b,y,j,x,_)},onError:e=>{w(!0),"empty"!==p&&j(!0),S&&S(e)}})});function v(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...g(i.fetchPriority)};return t&&a.default.preload?(a.default.preload(i.src,r),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...r},"__nimg-"+i.src+i.srcSet+i.sizes)})}let b=(0,o.forwardRef)((e,t)=>{let i=(0,o.useContext)(f.RouterContext),r=(0,o.useContext)(c.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=m||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[r]),{onLoad:a,onLoadingComplete:l}=e,h=(0,o.useRef)(a);(0,o.useEffect)(()=>{h.current=a},[a]);let g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let[b,y]=(0,o.useState)(!1),[j,w]=(0,o.useState)(!1),{props:_,meta:P}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:b,showAltText:j});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{..._,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:w,sizesInput:e.sizes,ref:t}),P.priority?(0,s.jsx)(v,{isAppRouter:!i,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3484:(e,t,i)=>{"use strict";e.exports=i(1616).vendored.contexts.AmpContext},1157:(e,t,i)=>{"use strict";e.exports=i(1616).vendored.contexts.HeadManagerContext},1206:(e,t,i)=>{"use strict";e.exports=i(1616).vendored.contexts.ImageConfigContext},8710:(e,t)=>{"use strict";function i(e){let{ampFirst:t=!1,hybrid:i=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||i&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return i}})},3078:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),i(576);let r=i(380),n=i(5248);function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var i;let a,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:h,quality:g,width:x,height:v,fill:b=!1,style:y,overrideSrc:j,onLoad:w,onLoadingComplete:_,placeholder:P="empty",blurDataURL:S,fetchPriority:C,layout:M,objectFit:O,objectPosition:z,lazyBoundary:E,lazyRoot:I,...A}=e,{imgConf:k,showAltText:R,blurComplete:N,defaultLoader:D}=t,G=k||n.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let U=A.loader||D;delete A.loader,delete A.srcSet;let q="__next_img_default"in U;if(q){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:i,...r}=t;return e(r)}}if(M){"fill"===M&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!c&&(c=t)}let T="",F=o(x),L=o(v);if("object"==typeof(i=u)&&(s(i)||void 0!==i.src)){let e=s(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,T=e.src,!b){if(F||L){if(F&&!L){let t=F/e.width;L=Math.round(e.height*t)}else if(!F&&L){let t=L/e.height;F=Math.round(e.width*t)}}else F=e.width,L=e.height}}let B=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:T)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,B=!1),a.unoptimized&&(f=!0),q&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let W=o(g),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:z}:{},R?{}:{color:"transparent"},y),V=N||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:L,blurWidth:l,blurHeight:d,blurDataURL:S||"",objectFit:H.objectFit})+'")':'url("'+P+'")',J=V?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},Y=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:s,sizes:o,loader:a}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,o),u=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((e,r)=>a({config:t,src:i,quality:s,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:a({config:t,src:i,quality:s,width:l[u]})}}({config:a,src:u,unoptimized:f,width:F,quality:W,sizes:c,loader:U});return{props:{...A,loading:B?"lazy":m,fetchPriority:C,width:F,height:L,decoding:"async",className:h,style:{...H,...J},sizes:Y.sizes,srcSet:Y.srcSet,src:j||Y.src},meta:{unoptimized:f,priority:p,placeholder:P,fill:b}}}},815:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return h},defaultHead:function(){return c}});let r=i(1174),n=i(8374),s=i(326),o=n._(i(7577)),a=r._(i(8003)),l=i(3484),d=i(1157),u=i(8710);function c(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}i(576);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:i}=t;return e.reduce(f,[]).reverse().concat(c(i).reverse()).filter(function(){let e=new Set,t=new Set,i=new Set,r={};return n=>{let s=!0,o=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){o=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?s=!1:t.add(n.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)i.has(t)?s=!1:i.add(t);else{let e=n.props[t],i=r[t]||new Set;("name"!==t||!o)&&i.has(e)?s=!1:(i.add(e),r[t]=i)}}}}return s}}()).reverse().map((e,t)=>{let r=e.key||t;if(!i&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}let h=function(e){let{children:t}=e,i=(0,o.useContext)(l.AmpStateContext),r=(0,o.useContext)(d.HeadManagerContext);return(0,s.jsx)(a.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,u.isInAmpMode)(i),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},380:(e,t)=>{"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:s,objectFit:o}=e,a=r?40*r:t,l=n?40*n:i,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},5248:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return r}});let i=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},6820:(e,t)=>{"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},8003:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=i(7577),n=()=>{},s=()=>{};function o(e){var t;let{headManager:i,reduceComponentsToState:o}=e;function a(){if(i&&i.mountedInstances){let t=r.Children.toArray(Array.from(i.mountedInstances).filter(Boolean));i.updateHead(o(t,e))}}return null==i||null==(t=i.mountedInstances)||t.add(e.children),a(),n(()=>{var t;return null==i||null==(t=i.mountedInstances)||t.add(e.children),()=>{var t;null==i||null==(t=i.mountedInstances)||t.delete(e.children)}}),n(()=>(i&&(i._pendingUpdate=a),()=>{i&&(i._pendingUpdate=a)})),s(()=>(i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null),()=>{i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null)})),null}},221:(e,t,i)=>{"use strict";let{createProxy:r}=i(8570);e.exports=r("C:\\Users\\Admin\\Desktop\\NextJs Portfolio\\portfolio-nextjs\\node_modules\\next\\dist\\client\\image-component.js")},9241:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),i(6501);let r=i(5728),n=i(9472);function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var i;let a,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:h,quality:g,width:x,height:v,fill:b=!1,style:y,overrideSrc:j,onLoad:w,onLoadingComplete:_,placeholder:P="empty",blurDataURL:S,fetchPriority:C,layout:M,objectFit:O,objectPosition:z,lazyBoundary:E,lazyRoot:I,...A}=e,{imgConf:k,showAltText:R,blurComplete:N,defaultLoader:D}=t,G=k||n.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let U=A.loader||D;delete A.loader,delete A.srcSet;let q="__next_img_default"in U;if(q){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:i,...r}=t;return e(r)}}if(M){"fill"===M&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!c&&(c=t)}let T="",F=o(x),L=o(v);if("object"==typeof(i=u)&&(s(i)||void 0!==i.src)){let e=s(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,T=e.src,!b){if(F||L){if(F&&!L){let t=F/e.width;L=Math.round(e.height*t)}else if(!F&&L){let t=L/e.height;F=Math.round(e.width*t)}}else F=e.width,L=e.height}}let B=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:T)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,B=!1),a.unoptimized&&(f=!0),q&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let W=o(g),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:z}:{},R?{}:{color:"transparent"},y),V=N||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:L,blurWidth:l,blurHeight:d,blurDataURL:S||"",objectFit:H.objectFit})+'")':'url("'+P+'")',J=V?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},Y=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:s,sizes:o,loader:a}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,o),u=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((e,r)=>a({config:t,src:i,quality:s,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:a({config:t,src:i,quality:s,width:l[u]})}}({config:a,src:u,unoptimized:f,width:F,quality:W,sizes:c,loader:U});return{props:{...A,loading:B?"lazy":m,fetchPriority:C,width:F,height:L,decoding:"async",className:h,style:{...H,...J},sizes:Y.sizes,srcSet:Y.srcSet,src:j||Y.src},meta:{unoptimized:f,priority:p,placeholder:P,fill:b}}}},5728:(e,t)=>{"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:s,objectFit:o}=e,a=r?40*r:t,l=n?40*n:i,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},9472:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return r}});let i=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},6794:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return l},getImageProps:function(){return a}});let r=i(3370),n=i(9241),s=i(221),o=r._(i(2049));function a(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let l=s.Image},2049:(e,t)=>{"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},6501:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},660:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d,metadata:()=>l});var r=i(9510),n=i(563),s=i.n(n);i(5023),i(301);var o=i(7371);let a=()=>r.jsx("header",{children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"leftSection",children:[r.jsx("div",{className:"logo",children:r.jsx("img",{src:"assets/my-image.jpg"})}),r.jsx("span",{children:"Mumair"})]}),(0,r.jsxs)("div",{className:"rightSection",children:[r.jsx(o.default,{href:"/",children:" Home "}),r.jsx(o.default,{href:"/about",children:" About Me "}),r.jsx(o.default,{href:"/services",children:"  Services "}),r.jsx(o.default,{href:"/projects",children:" Projects "}),r.jsx(o.default,{href:"/testimonials",children:" Testimonials "}),r.jsx(o.default,{href:"/contact",children:" Contact"}),(0,r.jsxs)("a",{href:"assets/ShivamResume.pdf",download:"ShivamResume.pdf",children:["  ",r.jsx("button",{id:"cv-download",children:"Download CV"})," "]})]})]})}),l={title:"Welcome to my Portfolio",description:"Generated by create next app"};function d({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:s().className,children:[r.jsx(a,{}),e]})})}},5526:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});var r=i(9510);i(6794),i(7371);let n=()=>(0,r.jsxs)("div",{className:"firstPage",children:[(0,r.jsxs)("div",{className:"intro-lines",children:[r.jsx("span1",{children:"Hi, I am"}),r.jsx("br",{}),r.jsx("span2",{children:"Rapheal Marcoux"}),r.jsx("br",{}),(0,r.jsxs)("div",{children:[" ",r.jsx("span3",{children:"UI & UX"})]}),r.jsx("span4",{children:"Designer"}),r.jsx("br",{}),r.jsx("p",{children:"This Portfolio is developed as an assingment recieved from Mugs through Internshala.This Portfolio is   under devlopement but still have some functionalities."}),r.jsx("br",{}),r.jsx("button",{children:"Hire Me"})]}),(0,r.jsxs)("div",{className:"imgSection",children:[r.jsx("div",{className:"image-here",children:r.jsx("img",{src:"assets/yello-man.jpg"})}),(0,r.jsxs)("div",{className:"contactIcons",children:[r.jsx("a",{href:"",children:r.jsx("i",{class:"bx bxl-facebook-circle"})}),r.jsx("a",{href:"",children:r.jsx("i",{class:"bx bxl-twitter"})}),r.jsx("a",{href:"",children:r.jsx("i",{class:"bx bxl-instagram"})}),r.jsx("a",{href:"",children:r.jsx("i",{class:"bx bxl-linkedin"})})]})]})]});function s(){return r.jsx("main",{children:r.jsx(n,{})})}},3881:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var r=i(6621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[948,12,621],()=>i(5722));module.exports=r})();