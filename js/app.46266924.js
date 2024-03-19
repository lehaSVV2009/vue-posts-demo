(function(){"use strict";var t={8489:function(t,e,o){var s=o(5130),n=(o(5524),o(9666)),r=o(1370),a=o(3739),l=o(8221),i=o(6768);const u={class:"app"};function d(t,e,o,s,n,r){const a=(0,i.g2)("nav-bar"),l=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(a),(0,i.Lk)("div",u,[(0,i.bF)(l)])],64)}o(4114);function c(t,e,o,s,n,r){const a=(0,i.g2)("v-app-bar-title"),l=(0,i.g2)("v-btn"),u=(0,i.g2)("v-app-bar"),d=(0,i.g2)("v-layout");return(0,i.uX)(),(0,i.Wv)(d,null,{default:(0,i.k6)((()=>[(0,i.bF)(u,{elevation:2},{append:(0,i.k6)((()=>[(0,i.bF)(l,{onClick:e[1]||(e[1]=e=>t.$router.push("/posts"))},{default:(0,i.k6)((()=>[(0,i.eW)("Posts")])),_:1}),(0,i.bF)(l,{onClick:e[2]||(e[2]=e=>t.$router.push("/about"))},{default:(0,i.k6)((()=>[(0,i.eW)("About")])),_:1})])),default:(0,i.k6)((()=>[(0,i.bF)(a,{onClick:e[0]||(e[0]=e=>t.$router.push("/"))},{default:(0,i.k6)((()=>[(0,i.eW)("My Posts")])),_:1})])),_:1})])),_:1})}var p={},g=o(1241);const f=(0,g.A)(p,[["render",c]]);var v=f,P={components:{NavBar:v}};const m=(0,g.A)(P,[["render",d]]);var h=m,b=o(1387);const k=(0,i.Lk)("h1",null,"App to learn vue basics",-1);function C(t,e,o,s,n,r){const a=(0,i.g2)("vue-viewport");return(0,i.uX)(),(0,i.Wv)(a,null,{default:(0,i.k6)((()=>[k])),_:1})}var _={};const y=(0,g.A)(_,[["render",C]]);var S=y;const A=(0,i.Lk)("h1",null,"Vue Posts Demo",-1);function F(t,e,o,s,n,r){const a=(0,i.g2)("v-btn"),l=(0,i.g2)("vue-viewport");return(0,i.uX)(),(0,i.Wv)(l,null,{default:(0,i.k6)((()=>[A,t.$store.state.auth.isLoggedIn?((0,i.uX)(),(0,i.Wv)(a,{key:0,onClick:r.logout},{default:(0,i.k6)((()=>[(0,i.eW)("Logout")])),_:1},8,["onClick"])):((0,i.uX)(),(0,i.Wv)(a,{key:1,onClick:r.login},{default:(0,i.k6)((()=>[(0,i.eW)("Login")])),_:1},8,["onClick"]))])),_:1})}var w={methods:{login(){this.$store.commit("auth/login")},logout(){this.$store.commit("auth/logout")}}};const L=(0,g.A)(w,[["render",F]]);var x=L;const O={key:0};function W(t,e,o,s,n,r){const a=(0,i.g2)("v-btn"),l=(0,i.g2)("v-col"),u=(0,i.g2)("v-text-field"),d=(0,i.g2)("v-select"),c=(0,i.g2)("v-row"),p=(0,i.g2)("post-form"),g=(0,i.g2)("v-card"),f=(0,i.g2)("v-dialog"),v=(0,i.g2)("post-list");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(c,{align:"center","no-gutters":""},{default:(0,i.k6)((()=>[(0,i.bF)(l,{cols:"3"},{default:(0,i.k6)((()=>[(0,i.bF)(a,{onClick:e[0]||(e[0]=t=>n.showCreatePostDialog=!0)},{default:(0,i.k6)((()=>[(0,i.eW)("Create post")])),_:1})])),_:1}),(0,i.bF)(l,null,{default:(0,i.k6)((()=>[(0,i.bF)(u,{"model-value":t.searchText,"onUpdate:modelValue":t.setSearchText,placeholder:"Search"},null,8,["model-value","onUpdate:modelValue"])])),_:1}),(0,i.bF)(l,{cols:"3"},{default:(0,i.k6)((()=>[(0,i.bF)(d,{class:"ml-2",label:"Sort","model-value":t.selectedSort,"onUpdate:modelValue":t.setSelectedSort,items:n.sortOptions},null,8,["model-value","onUpdate:modelValue","items"])])),_:1})])),_:1}),(0,i.bF)(f,{modelValue:n.showCreatePostDialog,"onUpdate:modelValue":e[1]||(e[1]=t=>n.showCreatePostDialog=t)},{default:(0,i.k6)((()=>[(0,i.bF)(g,{class:"create-post-card",title:"Create post"},{default:(0,i.k6)((()=>[(0,i.bF)(p,{onCreatePost:r.createPost},null,8,["onCreatePost"])])),_:1})])),_:1},8,["modelValue"]),t.isLoadingPost?((0,i.uX)(),(0,i.CE)("div",O,"Loading...")):((0,i.uX)(),(0,i.Wv)(v,{key:1,posts:t.filteredAndSortedAndPagedPosts,"current-page":t.currentPage,"total-pages":t.totalPages,onDeletePost:t.deletePost,onOpenPost:r.openPost,onChangeCurrentPage:t.setCurrentPage},null,8,["posts","current-page","total-pages","onDeletePost","onOpenPost","onChangeCurrentPage"]))],64)}var $=o(782);function X(t,e,o,n,r,a){const l=(0,i.g2)("v-text-field"),u=(0,i.g2)("v-btn");return(0,i.uX)(),(0,i.CE)("form",{class:"post-form",onSubmit:e[2]||(e[2]=(0,s.D$)((()=>{}),["prevent"]))},[(0,i.bF)(l,{class:"post-input",modelValue:r.title,"onUpdate:modelValue":e[0]||(e[0]=t=>r.title=t),placeholder:"Title"},null,8,["modelValue"]),(0,i.bF)(l,{class:"post-input",modelValue:r.description,"onUpdate:modelValue":e[1]||(e[1]=t=>r.description=t),type:"textarea",placeholder:"Description"},null,8,["modelValue"]),(0,i.bF)(u,{class:"post-form-submit-button",color:"teal-accent-4",onClick:a.createPost},{default:(0,i.k6)((()=>[(0,i.eW)(" Create ")])),_:1},8,["onClick"])],32)}var T={data(){return{title:"",description:""}},methods:{createPost(){this.$emit("create-post",{title:this.title,description:this.description}),this.title="",this.description=""}}};const V=(0,g.A)(T,[["render",X],["__scopeId","data-v-1c131724"]]);var D=V;const E={key:0},j={key:1};function I(t,e,o,n,r,a){const l=(0,i.g2)("post-list-item"),u=(0,i.g2)("v-pagination");return(0,i.uX)(),(0,i.CE)(i.FK,null,[Array.isArray(o.posts)&&o.posts.length>0?((0,i.uX)(),(0,i.CE)("div",E,[(0,i.bF)(s.F,{name:"posts",tag:"div"},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.posts,(t=>((0,i.uX)(),(0,i.CE)("div",{class:"post",key:t.id},[(0,i.bF)(l,{post:t,onDeletePost:a.deletePost,onOpenPost:a.openPost},null,8,["post","onDeletePost","onOpenPost"])])))),128))])),_:1})])):((0,i.uX)(),(0,i.CE)("div",j,"No posts")),(0,i.bF)(u,{"model-value":o.currentPage,length:o.totalPages,"onUpdate:modelValue":a.changeCurrentPage,rounded:"circle"},null,8,["model-value","length","onUpdate:modelValue"])],64)}var U=o(4232);function M(t,e,o,s,n,r){const a=(0,i.g2)("v-card-title"),l=(0,i.g2)("v-card-text"),u=(0,i.g2)("v-btn"),d=(0,i.g2)("v-card-actions"),c=(0,i.g2)("v-card");return(0,i.uX)(),(0,i.Wv)(c,null,{default:(0,i.k6)((()=>[(0,i.bF)(a,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,U.v_)(o.post.title),1)])),_:1}),(0,i.bF)(l,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,U.v_)(o.post.description),1)])),_:1}),(0,i.bF)(d,null,{default:(0,i.k6)((()=>[(0,i.bF)(u,{color:"teal-accent-4",variant:"text",onClick:e[0]||(e[0]=t=>r.openPost(o.post))},{default:(0,i.k6)((()=>[(0,i.eW)(" Open")])),_:1}),(0,i.bF)(u,{color:"teal-accent-4",variant:"text",onClick:e[1]||(e[1]=t=>r.deletePost(o.post))},{default:(0,i.k6)((()=>[(0,i.eW)(" Delete")])),_:1})])),_:1})])),_:1})}var N={props:{post:{type:Object,required:!0}},methods:{deletePost(t){this.$emit("delete-post",t)},openPost(t){this.$emit("open-post",t)}}};const q=(0,g.A)(N,[["render",M]]);var K=q,z={components:{PostListItem:K},props:{posts:{type:Array,required:!0},currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0}},methods:{deletePost(t){this.$emit("delete-post",t)},openPost(t){this.$emit("open-post",t)},changeCurrentPage(t){this.$emit("change-current-page",t)}}};const B=(0,g.A)(z,[["render",I],["__scopeId","data-v-e2ee2a3c"]]);var G=B,H={name:"App",components:{PostForm:D,PostList:G},data(){return{sortOptions:[{title:"",value:""},{title:"Title",value:"title"},{title:"Description",value:"description"}],showCreatePostDialog:!1}},mounted(){this.fetchAllPosts()},computed:{...(0,$.aH)({posts:t=>t.posts.posts,currentPage:t=>t.posts.currentPage,limit:t=>t.posts.limit,searchText:t=>t.posts.searchText,selectedSort:t=>t.posts.selectedSort,isLoadingPost:t=>t.posts.isLoadingPost}),...(0,$.L8)({totalPages:"posts/totalPages",filteredAndSortedAndPagedPosts:"posts/filteredAndSortedAndPagedPosts"})},methods:{...(0,$.PY)({setCurrentPage:"posts/setCurrentPage",setPosts:"posts/setPosts",setSearchText:"posts/setSearchText",setSelectedSort:"posts/setSelectedSort"}),...(0,$.i0)({fetchAllPosts:"posts/fetchAllPosts",createPost:"posts/createPost",deletePost:"posts/deletePost"}),createPost(t){t.title&&t.description&&this.setPosts([t,...this.posts]),this.showCreatePostDialog=!1},openPost(t){this.$router.push(`/posts/${t.id}`)}}};const R=(0,g.A)(H,[["render",W]]);var Y=R;function J(t,e,o,s,n,r){return(0,i.uX)(),(0,i.CE)("div",null,'Post with id "'+(0,U.v_)(t.$route.params.id)+'"',1)}var Q={};const Z=(0,g.A)(Q,[["render",J]]);var tt=Z;const et=[{path:"/",component:x},{path:"/about",component:S},{path:"/posts",component:Y},{path:"/posts/:id",component:tt}],ot=(0,b.aE)({history:(0,b.LA)("/"),routes:et});var st=ot;const nt={state:()=>({isLoggedIn:!1}),getters:{},mutations:{login(t){t.isLoggedIn=!0},logout(t){t.isLoggedIn=!1}},actions:{},namespaced:!0};var rt=o(8355);const at=async()=>await rt.A.get("https://jsonplaceholder.typicode.com/posts"),lt={state:()=>({posts:[],currentPage:1,limit:10,searchText:"",selectedSort:"",isLoadingPost:!1}),getters:{totalPages(t){return Math.ceil(t.posts.length/t.limit)},filteredPosts(t){return t.searchText?t.posts.filter((e=>e.title.toLowerCase().includes(t.searchText.toLowerCase()))):t.posts},filteredAndSortedPosts(t,e){let o=e.filteredPosts;return t.selectedSort&&(o=[...o].sort(((e,o)=>e[t.selectedSort]?.localeCompare(o[t.selectedSort])))),o},filteredAndSortedAndPagedPosts(t,e){if(0===e.filteredAndSortedPosts.length)return e.filteredAndSortedPosts;const o=t.limit*(t.currentPage-1),s=Math.min(e.filteredAndSortedPosts.length-1,t.limit*t.currentPage-1);return e.filteredAndSortedPosts.filter(((t,e)=>e>=o&&e<=s))}},mutations:{setPosts(t,e){t.posts=e},setCurrentPage(t,e){t.currentPage=e},setSearchText(t,e){t.searchText=e},setSelectedSort(t,e){t.selectedSort=e},setIsLoadingPost(t,e){t.isLoadingPost=e}},actions:{deletePost({state:t,commit:e},o){e("setPosts",t.posts.filter((t=>t.id!==o.id)))},async fetchAllPosts({commit:t}){try{t("isLoadingPost",!0);const e=await at(),o=e.data,s=o.map((t=>({id:t.id,title:t.title,description:t.body})));t("setPosts",s)}catch(e){console.log(e),t("setPosts",[])}finally{t("isLoadingPost",!1)}}},namespaced:!0},it=(0,$.y$)({modules:{auth:nt,posts:lt}});var ut=it;function dt(t,e,o,s,n,r){const a=(0,i.g2)("v-container");return(0,i.uX)(),(0,i.Wv)(a,{fluid:"",class:"viewport"},{default:(0,i.k6)((()=>[(0,i.RG)(t.$slots,"default",{},void 0,!0)])),_:3})}var ct={name:"vue-viewport"};const pt=(0,g.A)(ct,[["render",dt],["__scopeId","data-v-68050ef9"]]);var gt=pt,ft=[gt];const vt=(0,n.$N)({components:r,directives:a,icons:{defaultSet:"mdi",aliases:l.z,sets:{mdi:l.r}}}),Pt=(0,s.Ef)(h);ft.forEach((t=>{Pt.component(t.name,t)})),Pt.use(st).use(ut).use(vt).mount("#app")}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,r){if(!s){var a=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],r=t[d][2];for(var l=!0,i=0;i<s.length;i++)(!1&r||a>=r)&&Object.keys(o.O).every((function(t){return o.O[t](s[i])}))?s.splice(i--,1):(l=!1,r<a&&(a=r));if(l){t.splice(d--,1);var u=n();void 0!==u&&(e=u)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[s,n,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,r,a=s[0],l=s[1],i=s[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(i)var d=i(o)}for(e&&e(s);u<a.length;u++)r=a[u],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(d)},s=self["webpackChunkvue_demo"]=self["webpackChunkvue_demo"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(8489)}));s=o.O(s)})();
//# sourceMappingURL=app.46266924.js.map