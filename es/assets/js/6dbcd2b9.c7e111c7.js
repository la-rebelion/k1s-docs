"use strict";(self.webpackChunkk_1_s_docs=self.webpackChunkk_1_s_docs||[]).push([[353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>q,contentTitle:()=>x,default:()=>V,frontMatter:()=>O,metadata:()=>P,toc:()=>C});var a=n(7462),r=n(7294),o=n(3905),s=n(6010),l=n(2466),i=n(6550),u=n(1980),p=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=b({queryString:n,groupId:a}),[p,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=i??p;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),d(e)}),[u,d,o]),tabValues:o}}var k=n(2389);const g="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(c(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,s.Z)("tabs__item",v,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",g)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}const j="tabItem_Ymn6";function E(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(j,a),hidden:n},t)}const O={sidebar_position:1,sidebar_label:"Pods",description:"Find the different alternative to get the pods information",title:"Pods",tags:["apiVersion: v1","group: core"],categories:["Workload Resources"]},x=void 0,P={unversionedId:"your-kubernetes-cluster/api-requests/pods",id:"your-kubernetes-cluster/api-requests/pods",title:"Pods",description:"Find the different alternative to get the pods information",source:"@site/docs/4-your-kubernetes-cluster/api-requests/pods.mdx",sourceDirName:"4-your-kubernetes-cluster/api-requests",slug:"/your-kubernetes-cluster/api-requests/pods",permalink:"/es/your-kubernetes-cluster/api-requests/pods",draft:!1,tags:[{label:"apiVersion: v1",permalink:"/es/tags/api-version-v-1"},{label:"group: core",permalink:"/es/tags/group-core"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Pods",description:"Find the different alternative to get the pods information",title:"Pods",tags:["apiVersion: v1","group: core"],categories:["Workload Resources"]},sidebar:"tutorialSidebar",previous:{title:"Kubernetes API requests",permalink:"/es/category/kubernetes-api-requests"},next:{title:"K1s roadmap",permalink:"/es/roadmap"}},q={},C=[],I={toc:C};function V(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Pods")," are a core component and the heart \ud83d\udc96 of Kubernetes deployments"),(0,o.kt)("p",null,"Pods are the fundamental building blocks in Kubernetes, representing a single instance of a running process in a cluster. They encapsulate one or more containers, along with shared resources such as network and storage volumes."),(0,o.kt)("p",null,"Pods provide a cohesive environment for running containers that need to work together and share resources. They enable the deployment of tightly coupled application components within a Kubernetes cluster. For example, a pod can consist of multiple containers that communicate with each other using local network interfaces, allowing them to collaborate seamlessly."),(0,o.kt)("p",null,"Kubernetes schedules and manages pods as the unit of deployment. It ensures that the desired number of pods are running and handles scaling, self-healing, and load balancing. Pods can be replicated and distributed across multiple nodes in a cluster to ensure high availability and fault tolerance."),(0,o.kt)("p",null,"Additionally, pods have their own IP address and can be accessed directly within the cluster, which facilitates easy communication and service discovery between different pods and services. They can also share storage volumes, allowing data to be shared and persisted across multiple containers within a pod."),(0,o.kt)("p",null,"Overall, pods play a crucial role in Kubernetes deployments, serving as the basic unit of deployment, scaling, and management, and enabling the efficient orchestration of containerized applications within a cluster.")),(0,o.kt)(T,{mdxType:"Tabs"},(0,o.kt)(E,{value:"k1s",label:"kubectl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-k1s"},"kubectl get pods --server=https://api.k1s.me/kubernetes\n"))),(0,o.kt)(E,{value:"cr",label:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cr"},"curl https://api.k1s.me/kubernetes/api/v1/pods\n"))),(0,o.kt)(E,{value:"ht",label:"Httpie",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ht"},"https api.k1s.me/kubernetes/api/v1/pods\n")))),(0,o.kt)(T,{mdxType:"Tabs"},(0,o.kt)(E,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nconst https = require('https');\n\nconst options = {\n  hostname: 'api.k1s.me',\n  port: 443,\n  path: '/kubernetes/api/v1/pods',\n  method: 'GET'\n};\n\nconst req = https.request(options, res => {\n  console.log(`statusCode: ${res.statusCode}`);\n\n  res.on('data', d => {\n    process.stdout.write(d);\n  });\n});\n\nreq.on('error', error => {\n  console.error(error);\n});\n\nreq.end();\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Execute code above assuming the file is named ",(0,o.kt)("inlineCode",{parentName:"strong"},"index.js"),"?")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install Node.js from ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")),(0,o.kt)("li",{parentName:"ol"},"Open a terminal and run ",(0,o.kt)("inlineCode",{parentName:"li"},"node index.js")),(0,o.kt)("li",{parentName:"ol"},"The output should be similar to the following:\n",(0,o.kt)("inlineCode",{parentName:"li"},"statusCode: 200")))),(0,o.kt)(E,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# k1s-pods.py\nimport requests\n\nurl = "https://api.k1s.me/kubernetes/api/v1/pods"\npayload={}\nheaders = {}\nresponse = requests.request("GET", url, headers=headers, data=payload)\n\nprint(response.text)\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Execute code above assuming the file is named ",(0,o.kt)("inlineCode",{parentName:"strong"},"k1s-pods.py"),"?")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install Python from ",(0,o.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"https://www.python.org/downloads/")),(0,o.kt)("li",{parentName:"ol"},"Open a terminal and run ",(0,o.kt)("inlineCode",{parentName:"li"},"python k1s-pods.py")),(0,o.kt)("li",{parentName:"ol"},"The output should be similar to the following:\n",(0,o.kt)("inlineCode",{parentName:"li"},"statusCode: 200")))),(0,o.kt)(E,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// K1sPods.java\nimport okhttp3.OkHttpClient;\nimport okhttp3.Request;\nimport okhttp3.Response;\n\nimport java.io.IOException;\n\npublic class K1sPods {\n    public static void main(String[] args) throws IOException {\n        OkHttpClient client = new OkHttpClient().newBuilder()\n                .build();\n        Request request = new Request.Builder()\n                .url("https://api.k1s.me/kubernetes/api/v1/pods")\n                .method("GET", null)\n                .build();\n        Response response = client.newCall(request).execute();\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Execute this code above assuming the file is named ",(0,o.kt)("inlineCode",{parentName:"strong"},"K1sPods.java"),"?")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install Java from ",(0,o.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/javase-downloads.html"},"https://www.oracle.com/java/technologies/javase-downloads.html")),(0,o.kt)("li",{parentName:"ol"},"Download the OkHttp library from ",(0,o.kt)("a",{parentName:"li",href:"https://square.github.io/okhttp/"},"https://square.github.io/okhttp/")," or mavencentral"),(0,o.kt)("li",{parentName:"ol"},"Open a terminal and run ",(0,o.kt)("inlineCode",{parentName:"li"},"javac K1sPods.java")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"java K1sPods")),(0,o.kt)("li",{parentName:"ol"},"The output should be similar to the following:\n",(0,o.kt)("inlineCode",{parentName:"li"},"statusCode: 200"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl -k https://repo1.maven.org/maven2/com/squareup/okhttp3/okhttp/4.11.0/okhttp-4.11.0.jar -o okhttp-4.11.0.jar\n$ javac -cp okhttp-4.11.0.jar:. K1sPods.java\n$ java -cp okhttp-4.11.0.jar:. K1sPods\n")))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"References: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://httpie.io/docs/cli"},"httpie"))))}V.isMDXComponent=!0}}]);