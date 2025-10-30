import{_ as B}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as w,b as e,o as k}from"./app-pd29G6o0.js";if(typeof window<"u"&&typeof document<"u"){let u=function(){try{y(),l=[...r],r.length===0?h():(v(),c(l))}catch(t){console.error("加载动画数据失败:",t),f()}},y=function(){const t=document.getElementById("loadingState"),n=document.getElementById("errorState"),a=document.getElementById("filtersContainer"),s=document.getElementById("animeGrid"),o=document.getElementById("emptyState");console.log("showLoadingState - 元素检查:",{loadingState:!!t,errorState:!!n,filtersContainer:!!a,animeGrid:!!s,emptyState:!!o}),t&&(t.style.display="block"),n&&(n.style.display="none"),a&&(a.style.display="none"),s&&(s.style.display="none"),o&&(o.style.display="none")},f=function(){const t=document.getElementById("loadingState"),n=document.getElementById("errorState"),a=document.getElementById("filtersContainer"),s=document.getElementById("animeGrid"),o=document.getElementById("emptyState");console.log("showErrorState - 元素检查:",{loadingState:!!t,errorState:!!n,filtersContainer:!!a,animeGrid:!!s,emptyState:!!o}),t&&(t.style.display="none"),n&&(n.style.display="block"),a&&(a.style.display="none"),s&&(s.style.display="none"),o&&(o.style.display="none")},v=function(){const t=document.getElementById("loadingState"),n=document.getElementById("errorState"),a=document.getElementById("filtersContainer"),s=document.getElementById("animeGrid"),o=document.getElementById("emptyState");t&&(t.style.display="none"),n&&(n.style.display="none"),a&&(a.style.display="block"),s&&(s.style.display="block"),o&&(o.style.display="none")},h=function(){const t=document.getElementById("loadingState"),n=document.getElementById("errorState"),a=document.getElementById("filtersContainer"),s=document.getElementById("animeGrid"),o=document.getElementById("emptyState");t&&(t.style.display="none"),n&&(n.style.display="none"),a&&(a.style.display="block"),s&&(s.style.display="none"),o&&(o.style.display="block")},c=function(t){const n=document.getElementById("animeGrid");if(console.log("renderAnimes - animeGrid元素:",!!n),!n){console.error("animeGrid元素未找到");return}if(t.length===0){h();return}n.innerHTML=t.map(a=>b(a)).join(""),v()},b=function(t){const n=I(t.watchStatus||t.status),a=t.genres?t.genres.slice(0,3).join(" · "):"";return`
    <div class="anime-card" onclick="goToDetail('${t.id}')">
      <div class="anime-cover">
        <img src="${t.cover||"https://via.placeholder.com/300x400/FF6B6B/FFFFFF?text="+encodeURIComponent(t.title)}" 
             alt="${t.title}" 
             onerror="this.src='https://via.placeholder.com/300x400/FF6B6B/FFFFFF?text=' + encodeURIComponent('${t.title}')">
        <div class="anime-overlay">
          <div class="anime-rating">⭐ ${t.rating||"N/A"}</div>
          <div class="anime-status ${n}">${t.watchStatus||t.status||"未知"}</div>
        </div>
      </div>
      <div class="anime-info">
        <h3 class="anime-title">${t.title}</h3>
        <p class="anime-subtitle">${t.titleEn||t.titleJp||""}</p>
        <div class="anime-meta">
          <span class="anime-year">${t.year||""}</span>
          <span class="anime-episodes">${t.episodes?t.episodes+"集":""}</span>
        </div>
        <div class="anime-genres">${a}</div>
        <div class="anime-progress">
          ${t.currentEpisode&&t.episodes?`<div class="progress-bar">
              <div class="progress-fill" style="width: ${t.currentEpisode/t.episodes*100}%"></div>
            </div>
            <span class="progress-text">${t.currentEpisode}/${t.episodes}</span>`:""}
        </div>
      </div>
    </div>
  `},I=function(t){return{正在观看:"watching",已完成:"completed",计划观看:"planned",暂停观看:"paused",已弃番:"dropped"}[t]||"unknown"},E=function(){console.log("=== 开始设置事件监听器 ===");const t=document.getElementById("genreFilter"),n=document.getElementById("statusFilter"),a=document.getElementById("ratingFilter");console.log("筛选器元素检查:",{genreFilter:!!t,statusFilter:!!n,ratingFilter:!!a}),t&&t.addEventListener("change",m),n&&n.addEventListener("change",m),a&&a.addEventListener("change",m);const s=document.getElementById("searchInput");console.log("搜索输入框元素:",!!s),s&&s.addEventListener("input",S(A,300)),console.log("正在查找AI助手按钮...");const o=document.getElementById("aiAssistantFab");console.log("AI助手按钮元素:",o),console.log("AI助手按钮详细信息:",{element:o,tagName:o?.tagName,id:o?.id,className:o?.className,style:o?.style?.display}),o?(console.log("找到AI助手按钮，正在绑定事件..."),o.addEventListener("click",function(i){console.log("AI助手按钮被点击 (addEventListener)"),i.preventDefault(),i.stopPropagation(),p()}),o.onclick=function(i){console.log("AI助手按钮被点击 (onclick)"),i.preventDefault(),i.stopPropagation(),p()},console.log("AI助手按钮事件绑定完成"),setTimeout(()=>{console.log("延迟检查AI按钮状态...");const i=document.getElementById("aiAssistantFab");console.log("延迟检查结果:",{exists:!!i,visible:i?.offsetParent!==null,display:i?.style?.display,computedStyle:i&&typeof window<"u"?window.getComputedStyle(i).display:"N/A"})},1e3)):(console.warn("AI助手按钮未找到"),setTimeout(()=>{console.log("延迟重试查找AI助手按钮...");const i=document.getElementById("aiAssistantFab");i?(console.log("延迟重试成功找到AI助手按钮，重新绑定事件..."),i.addEventListener("click",function(F){console.log("AI助手按钮被点击 (延迟绑定)"),F.preventDefault(),F.stopPropagation(),p()})):console.error("延迟重试仍未找到AI助手按钮")},2e3)),console.log("=== 事件监听器设置完成 ==="),document.addEventListener("click",function(i){console.log("全局点击事件:",{target:i.target,tagName:i.target.tagName,id:i.target.id,className:i.target.className}),(i.target.id==="aiAssistantFab"||i.target.closest("#aiAssistantFab"))&&(console.log("检测到AI助手按钮点击！"),i.preventDefault(),i.stopPropagation(),p())})},m=function(){const t=document.getElementById("genreFilter").value,n=document.getElementById("statusFilter").value,a=document.getElementById("ratingFilter").value;l=r.filter(s=>!(t&&(!s.genres||!s.genres.includes(t))||n&&s.watchStatus!==n&&s.status!==n||a&&(!s.rating||s.rating<parseFloat(a)))),c(l)},S=function(t,n){let a;return function(...o){const i=()=>{clearTimeout(a),t(...o)};clearTimeout(a),a=setTimeout(i,n)}},p=function(){console.log("openAIAssistant被调用"),console.log("aiDialog状态:",d),d?(console.log("AI助手已初始化，正在打开对话框"),d.open({page:"anime",type:"animation",currentData:l,totalData:r})):(console.warn("AI助手未初始化，正在尝试初始化..."),x().then(t=>{console.log("初始化结果:",t),console.log("初始化后aiDialog状态:",d),d&&t?(console.log("初始化成功，正在打开对话框"),d.open({page:"anime",type:"animation",currentData:l,totalData:r})):(console.error("AI助手初始化失败，无法打开对话框"),alert("AI助手暂时不可用，请刷新页面重试"))}).catch(t=>{console.error("初始化Promise被拒绝:",t),alert("AI助手初始化失败，请刷新页面重试")}))};console.log("=== JavaScript开始执行 ==="),console.log("页面URL:",window.location.href),console.log("当前时间:",new Date().toLocaleString()),console.log("document.readyState:",document.readyState);const g=[{id:"frieren",title:"葬送的芙莉莲",titleEn:"Sousou no Frieren",year:2023,episodes:28,currentEpisode:28,rating:9.8,watchStatus:"已完成",genres:["奇幻","冒险","治愈"],coverImage:"https://via.placeholder.com/200x280/FF6B6B/FFFFFF?text=芙莉莲",summary:"精灵魔法使芙莉莲在勇者死后开始理解人类的旅程。"},{id:"kusuriya",title:"药屋少女的呢喃",titleEn:"Kusuriya no Hitorigoto",year:2023,episodes:24,currentEpisode:24,rating:9.2,watchStatus:"已完成",genres:["推理","古风","宫廷"],coverImage:"https://via.placeholder.com/200x280/4ECDC4/FFFFFF?text=药屋少女",summary:"在后宫中工作的药师少女猫猫解决各种谜团的故事。"}];let r=g,l=g;if(typeof document<"u"){let t=function(){console.log("=== 开始页面初始化 ==="),console.log("DOM已加载完成，开始初始化..."),u(),E(),console.log("=== 初始化完成 ===")};console.log("=== 准备绑定DOMContentLoaded事件 ==="),console.log("当前document.readyState:",document.readyState),document.readyState==="loading"?(console.log("DOM正在加载中，绑定DOMContentLoaded事件"),document.addEventListener("DOMContentLoaded",t)):(console.log("DOM已经加载完成，直接执行初始化"),t())}async function A(){const t=document.getElementById("searchInput").value.trim();if(t===""){l=[...r],m();return}try{l=await animeService.searchAnimes(t),c(l)}catch(n){console.error("搜索失败:",n),l=r.filter(a=>a.title.toLowerCase().includes(t.toLowerCase())||a.titleEn&&a.titleEn.toLowerCase().includes(t.toLowerCase())),c(l)}}let d=null;async function x(){console.log("开始初始化AI助手");try{return d={isOpen:!1,open(t){if(console.log("AI对话框open方法被调用，context:",t),this.isOpen){console.log("对话框已经打开，忽略重复调用");return}this.createDialog(),this.setContext(t),this.isOpen=!0,console.log("AI对话框已打开")},close(){console.log("AI对话框close方法被调用");const t=document.getElementById("ai-dialog"),n=document.getElementById("ai-dialog-overlay");t&&(console.log("移除AI对话框元素"),t.remove()),n&&(console.log("移除AI对话框蒙层"),n.remove()),this.isOpen=!1,console.log("AI对话框已关闭")},createDialog(){const t=document.getElementById("ai-dialog");t&&t.remove(),document.body.insertAdjacentHTML("beforeend",`
          <div id="ai-dialog" style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            max-width: 90vw;
            height: 500px;
            max-height: 80vh;
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            z-index: 10000;
            display: flex;
            flex-direction: column;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          ">
            <div style="
              padding: 20px;
              border-bottom: 1px solid #eee;
              display: flex;
              justify-content: space-between;
              align-items: center;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              border-radius: 12px 12px 0 0;
            ">
              <h3 style="margin: 0; font-size: 18px;">🤖 AI助手</h3>
              <button id="ai-dialog-close" style="
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background-color 0.2s;
              " onmouseover="this.style.backgroundColor='rgba(255,255,255,0.2)'" onmouseout="this.style.backgroundColor='transparent'">×</button>
            </div>
            <div style="
              flex: 1;
              padding: 20px;
              overflow-y: auto;
              display: flex;
              flex-direction: column;
            ">
              <div id="ai-messages" style="
                flex: 1;
                margin-bottom: 15px;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 8px;
                min-height: 200px;
                overflow-y: auto;
              ">
                <div style="
                  background: #e3f2fd;
                  padding: 12px;
                  border-radius: 8px;
                  border-left: 4px solid #2196f3;
                  margin-bottom: 10px;
                ">
                  <strong>🤖 AI助手：</strong>您好！我是动漫推荐助手，可以帮您：<br>
                  • 根据您的喜好推荐动漫<br>
                  • 解答动漫相关问题<br>
                  • 分析动漫特点和评价<br><br>
                  请告诉我您想了解什么？
                </div>
              </div>
              <div style="display: flex; gap: 10px;">
                <input type="text" id="ai-input" placeholder="输入您的问题..." style="
                  flex: 1;
                  padding: 12px;
                  border: 2px solid #ddd;
                  border-radius: 25px;
                  outline: none;
                  font-size: 14px;
                  transition: border-color 0.2s;
                " onfocus="this.style.borderColor='#667eea'" onblur="this.style.borderColor='#ddd'">
                <button id="ai-send" style="
                  padding: 12px 20px;
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                  color: white;
                  border: none;
                  border-radius: 25px;
                  cursor: pointer;
                  font-size: 14px;
                  font-weight: 500;
                  transition: transform 0.2s;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">发送</button>
              </div>
            </div>
          </div>
          <div id="ai-dialog-overlay" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 9999;
          "></div>
        `),document.getElementById("ai-dialog-close").addEventListener("click",()=>this.close()),document.getElementById("ai-dialog-overlay").addEventListener("click",()=>this.close());const a=document.getElementById("ai-input"),s=document.getElementById("ai-send"),o=()=>{const i=a.value.trim();i&&(this.addMessage("user",i),a.value="",setTimeout(()=>{this.addMessage("ai",this.generateResponse(i))},1e3))};s.addEventListener("click",o),a.addEventListener("keypress",i=>{i.key==="Enter"&&o()}),setTimeout(()=>a.focus(),100)},addMessage(t,n){const a=document.getElementById("ai-messages"),s=document.createElement("div");t==="user"?(s.style.cssText=`
            background: #667eea;
            color: white;
            padding: 12px;
            border-radius: 18px 18px 4px 18px;
            margin: 8px 0 8px 50px;
            max-width: 80%;
            margin-left: auto;
            text-align: right;
          `,s.innerHTML=`<strong>您：</strong>${n}`):(s.style.cssText=`
            background: #e3f2fd;
            padding: 12px;
            border-radius: 18px 18px 18px 4px;
            margin: 8px 50px 8px 0;
            max-width: 80%;
            border-left: 4px solid #2196f3;
          `,s.innerHTML=`<strong>🤖 AI助手：</strong>${n}`),a.appendChild(s),a.scrollTop=a.scrollHeight},generateResponse(t){const n=["根据您的问题，我推荐您可以尝试一些经典的动漫作品。","这是一个很好的问题！让我为您分析一下相关的动漫特点。","基于当前的动漫数据，我可以为您提供一些个性化的推荐。","感谢您的提问！这类动漫通常具有很高的观赏价值。","我理解您的需求，让我为您推荐一些符合您喜好的作品。"];return n[Math.floor(Math.random()*n.length)]},setContext(t){this.context=t}},console.log("AI助手对象创建成功:",d),!0}catch(t){return console.error("AI助手初始化失败:",t),!1}}typeof document<"u"&&document.addEventListener("DOMContentLoaded",function(){setTimeout(()=>{x()},1e3)}),typeof window<"u"&&(window.loadAnimes=u)}const C={};function D(g,r,l,u,y,f){return k(),w("div",null,[...r[0]||(r[0]=[e("h1",{id:"🎞️-动画专区",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🎞️-动画专区"},[e("span",null,"🎞️ 动画专区")])],-1),e("div",{class:"animation-zone"},[e("div",{id:"loadingState",class:"loading-state"},[e("div",{class:"loading-spinner"}),e("p",null,"正在加载动画数据...")]),e("div",{id:"errorState",class:"error-state",style:{display:"none"}},[e("p",null,"❌ 加载失败，请检查网络连接或稍后重试"),e("button",{onclick:"loadAnimes()",class:"retry-button"},"重新加载")]),e("div",{class:"filters",id:"filtersContainer",style:{display:"none"}},[e("div",{class:"filter-group"},[e("label",null,"类型筛选："),e("select",{id:"genreFilter"},[e("option",{value:""},"全部类型"),e("option",{value:"奇幻"},"奇幻"),e("option",{value:"冒险"},"冒险"),e("option",{value:"剧情"},"剧情"),e("option",{value:"喜剧"},"喜剧"),e("option",{value:"动作"},"动作"),e("option",{value:"治愈"},"治愈"),e("option",{value:"科幻"},"科幻"),e("option",{value:"恋爱"},"恋爱"),e("option",{value:"悬疑"},"悬疑")])]),e("pre",null,[e("code",null,`<div class="filter-group">
  <label>状态筛选：</label>
  <select id="statusFilter">
    <option value="">全部状态</option>
    <option value="正在观看">正在观看</option>
    <option value="已完成">已完成</option>
    <option value="计划观看">计划观看</option>
    <option value="暂停观看">暂停观看</option>
  </select>
</div>

<div class="filter-group">
  <label>评分筛选：</label>
  <select id="ratingFilter">
    <option value="">全部评分</option>
    <option value="9">9分以上</option>
    <option value="8">8分以上</option>
    <option value="7">7分以上</option>
  </select>
</div>

<div class="filter-group">
  <label>搜索：</label>
  <input type="text" id="searchInput" placeholder="输入动画名称...">
</div>
`)])]),e("div",{class:"anime-grid",id:"animeGrid",style:{display:"none"}}),e("div",{id:"emptyState",class:"empty-state",style:{display:"none"}},[e("p",null,"📺 暂无符合条件的动画")]),e("div",{class:"ai-assistant-fab",id:"aiAssistantFab",title:"AI动漫助手"},[e("span",{class:"ai-fab-icon"},"🤖"),e("span",{class:"ai-fab-text"},"AI助手")]),e("div",{class:"anime-card","data-genre":"fantasy,adventure","data-status":"completed","data-rating":"9.5"},[e("div",{class:"anime-poster"},[e("img",{src:"https://via.placeholder.com/200x280/FF6B6B/FFFFFF?text=葬送的芙莉莲",alt:"葬送的芙莉莲"}),e("div",{class:"anime-overlay"},[e("div",{class:"anime-rating"},"9.5"),e("div",{class:"anime-status completed"},"已完成")])]),e("div",{class:"anime-info"},[e("h3",{class:"anime-title"},"葬送的芙莉莲"),e("p",{class:"anime-genres"},"奇幻 · 冒险 · 治愈"),e("p",{class:"anime-year"},"2023年"),e("p",{class:"anime-episodes"},"28集"),e("div",{class:"anime-description"}," 精灵法师芙莉莲在勇者辛美尔死后，踏上了理解人类情感的旅程... "),e("a",{href:"/Anime/animation/frieren.html",class:"anime-link"},"查看详情 →")])]),e("div",{class:"anime-card","data-genre":"mystery,drama","data-status":"completed","data-rating":"9.2"},[e("div",{class:"anime-poster"},[e("img",{src:"https://via.placeholder.com/200x280/4ECDC4/FFFFFF?text=药屋少女的呢喃",alt:"药屋少女的呢喃"}),e("div",{class:"anime-overlay"},[e("div",{class:"anime-rating"},"9.2"),e("div",{class:"anime-status completed"},"已完成")])]),e("div",{class:"anime-info"},[e("h3",{class:"anime-title"},"药屋少女的呢喃"),e("p",{class:"anime-genres"},"推理 · 古风 · 宫廷"),e("p",{class:"anime-year"},"2023年"),e("p",{class:"anime-episodes"},"24集"),e("div",{class:"anime-description"}," 猫猫在后宫中运用药学知识解决各种谜团的故事... "),e("a",{href:"/Anime/animation/kusuriya.html",class:"anime-link"},"查看详情 →")])]),e("div",{class:"anime-card","data-genre":"action,fantasy","data-status":"completed","data-rating":"9.0"},[e("div",{class:"anime-poster"},[e("img",{src:"https://via.placeholder.com/200x280/45B7D1/FFFFFF?text=咒术回战",alt:"咒术回战"}),e("div",{class:"anime-overlay"},[e("div",{class:"anime-rating"},"9.0"),e("div",{class:"anime-status completed"},"已完成")])]),e("div",{class:"anime-info"},[e("h3",{class:"anime-title"},"咒术回战 第二季"),e("p",{class:"anime-genres"},"动作 · 奇幻 · 热血"),e("p",{class:"anime-year"},"2023年"),e("p",{class:"anime-episodes"},"23集"),e("div",{class:"anime-description"}," 虎杖悠仁与咒术师们对抗咒灵的激烈战斗... "),e("a",{href:"/Anime/animation/jujutsu-kaisen.html",class:"anime-link"},"查看详情 →")])]),e("div",{class:"anime-card","data-genre":"comedy,action","data-status":"completed","data-rating":"8.8"},[e("div",{class:"anime-poster"},[e("img",{src:"https://via.placeholder.com/200x280/96CEB4/FFFFFF?text=间谍过家家",alt:"间谍过家家"}),e("div",{class:"anime-overlay"},[e("div",{class:"anime-rating"},"8.8"),e("div",{class:"anime-status completed"},"已完成")])]),e("div",{class:"anime-info"},[e("h3",{class:"anime-title"},"间谍过家家"),e("p",{class:"anime-genres"},"喜剧 · 动作 · 家庭"),e("p",{class:"anime-year"},"2022年"),e("p",{class:"anime-episodes"},"25集"),e("div",{class:"anime-description"}," 间谍、杀手和超能力者组成的伪装家庭的温馨日常... "),e("a",{href:"/Anime/animation/spy-family.html",class:"anime-link"},"查看详情 →")])]),e("div",{class:"anime-card","data-genre":"fantasy,adventure","data-status":"watching","data-rating":"8.5"},[e("div",{class:"anime-poster"},[e("img",{src:"https://via.placeholder.com/200x280/FFEAA7/333333?text=转生史莱姆",alt:"转生史莱姆"}),e("div",{class:"anime-overlay"},[e("div",{class:"anime-rating"},"8.5"),e("div",{class:"anime-status watching"},"观看中")])]),e("div",{class:"anime-info"},[e("h3",{class:"anime-title"},"关于我转生变成史莱姆这档事 第三季"),e("p",{class:"anime-genres"},"奇幻 · 冒险 · 异世界"),e("p",{class:"anime-year"},"2024年"),e("p",{class:"anime-episodes"},"8/24集"),e("div",{class:"anime-description"}," 利姆鲁在异世界建立魔物国家的冒险故事... "),e("a",{href:"/Anime/animation/slime.html",class:"anime-link"},"查看详情 →")])]),e("div",{class:"anime-card","data-genre":"action,drama","data-status":"planned","data-rating":"0"},[e("div",{class:"anime-poster"},[e("img",{src:"https://via.placeholder.com/200x280/DDA0DD/FFFFFF?text=鬼灭之刃",alt:"鬼灭之刃"}),e("div",{class:"anime-overlay"},[e("div",{class:"anime-rating"},"-"),e("div",{class:"anime-status planned"},"计划观看")])]),e("div",{class:"anime-info"},[e("h3",{class:"anime-title"},"鬼灭之刃 锻刀村篇"),e("p",{class:"anime-genres"},"动作 · 剧情 · 热血"),e("p",{class:"anime-year"},"2023年"),e("p",{class:"anime-episodes"},"11集"),e("div",{class:"anime-description"}," 炭治郎前往锻刀村修复日轮刀的故事... "),e("a",{href:"/Anime/animation/demon-slayer.html",class:"anime-link"},"查看详情 →")])])],-1)])])}const $=B(C,[["render",D]]),T=JSON.parse('{"path":"/Anime/animation/","title":"🎞️ 动画专区","lang":"zh-CN","frontmatter":{},"git":{"createdTime":1761843713000,"updatedTime":1761843713000,"contributors":[{"name":"HaKu","username":"HaKu","email":"hakuless@gmail.com","commits":1,"url":"https://github.com/HaKu"}]},"readingTime":{"minutes":15.72,"words":4717},"filePathRelative":"Anime/animation/README.md"}');export{$ as comp,T as data};
