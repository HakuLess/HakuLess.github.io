import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as s,e as d,o as c}from"./app-DiesaxRU.js";const o={"spy-family":{title:"间谍过家家",subtitle:"SPY×FAMILY",coverImage:"https://via.placeholder.com/300x420/FF6B6B/FFFFFF?text=间谍过家家",author:"远藤达哉",publisher:"集英社",startDate:"2019年3月",status:"连载中",rating:9.5,genres:["喜剧","动作","家庭"],summary:"为了完成任务，间谍黄昏需要组建一个家庭。他收养了能读心的少女阿尼亚，并与杀手约儿假结婚。三人各怀秘密却温馨的日常生活就此开始。",characters:[{name:"黄昏/洛伊德·福杰",role:"主角",description:"西国间谍，代号黄昏。为了任务与约儿假结婚，收养阿尼亚。",avatar:"https://via.placeholder.com/120x120/FF6B6B/FFFFFF?text=洛伊德"},{name:"约儿·福杰",role:"主角",description:"东国杀手，代号荆棘公主。与洛伊德假结婚，成为阿尼亚的养母。",avatar:"https://via.placeholder.com/120x120/4ECDC4/FFFFFF?text=约儿"},{name:"阿尼亚·福杰",role:"主角",description:"拥有读心能力的少女，被洛伊德收养。知道养父母的真实身份。",avatar:"https://via.placeholder.com/120x120/45B7D1/FFFFFF?text=阿尼亚"}]}};typeof document<"u"&&document.addEventListener("DOMContentLoaded",function(){try{const e=o["spy-family"];e?(h(e),p()):i()}catch(a){console.error("初始化失败:",a),i()}});function i(){document.getElementById("loading-state").style.display="none",document.getElementById("error-state").style.display="block",document.getElementById("manga-content").style.display="none"}function p(){document.getElementById("manga-content").style.display="block"}function h(a){document.title=a.title+" - 漫画详情",document.getElementById("manga-title").textContent=a.title,document.getElementById("manga-subtitle").textContent=a.subtitle||"";const e=document.getElementById("manga-poster");e.src=a.coverImage||`https://via.placeholder.com/300x420/FF6B6B/FFFFFF?text=${encodeURIComponent(a.title)}`,e.alt=a.title,v(a),u(a.summary),g(a.characters),m(a.impressions),f(a.chapters),F(a.progress),b(a.awards),y(a.related),x(a.links)}function v(a){const e=document.getElementById("manga-meta"),t=[{label:"作者",value:a.author},{label:"类型",value:(a.genres||[]).join(" · ")},{label:"连载杂志",value:a.magazine},{label:"连载时间",value:a.serialization},{label:"当前进度",value:`第${a.currentChapter}话 / ${a.status==="ongoing"?"连载中":"已完结"}`},{label:"我的评分",value:`⭐⭐⭐⭐⭐ ${a.rating}/10`,class:"rating"},{label:"阅读状态",value:$(a.status),class:`status ${a.status}`}];e.innerHTML=t.map(n=>`
    <div class="meta-item">
      <span class="meta-label">${n.label}：</span>
      <span class="meta-value ${n.class||""}">${n.value||"未知"}</span>
    </div>
  `).join("")}function u(a){const e=document.getElementById("summary-content");e.innerHTML=a?`<p>${a}</p>`:"<p>暂无剧情简介</p>"}function g(a){const e=document.getElementById("characters-grid");if(!a||a.length===0){e.innerHTML="<p>暂无角色信息</p>";return}e.innerHTML=a.map(t=>`
    <div class="character-card">
      <div class="character-avatar">
        <img src="${t.avatar||"https://via.placeholder.com/80x80/4ECDC4/FFFFFF?text="+encodeURIComponent(t.name)}" 
             alt="${t.name}">
      </div>
      <div class="character-info">
        <h4>${t.name}</h4>
        <p class="character-role">${t.role||""}</p>
        <p class="character-description">${t.description||""}</p>
      </div>
    </div>
  `).join("")}function m(a){const e=document.getElementById("impressions-content");if(!a||a.length===0){e.innerHTML="<p>暂无阅读感想</p>";return}e.innerHTML=a.map(t=>`
    <div class="impression-item">
      <h4>${t.title}</h4>
      <p>${t.content}</p>
    </div>
  `).join("")}function f(a){const e=document.getElementById("chapters-content");if(!a||a.length===0){e.innerHTML="<p>暂无章节评价</p>";return}e.innerHTML=`
    <div class="chapters-grid">
      ${a.map(t=>`
        <div class="chapter-card">
          <div class="chapter-header">
            <span class="chapter-number">第${t.number}话</span>
            <span class="chapter-rating">⭐ ${t.rating}/10</span>
          </div>
          <h4 class="chapter-title">${t.title}</h4>
          <p class="chapter-comment">${t.comment||""}</p>
        </div>
      `).join("")}
    </div>
  `}function F(a){const e=document.getElementById("progress-content");if(!a){e.innerHTML="<p>暂无阅读进度信息</p>";return}const t=Math.round(a.current/a.total*100);e.innerHTML=`
    <div class="reading-progress">
      <div class="progress-text">阅读进度：${a.current}/${a.total} (${t}%)</div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${t}%"></div>
      </div>
      <div class="reading-stats">
        <div class="stat-item">
          <span class="stat-label">开始阅读：</span>
          <span class="stat-value">${a.startDate||"未记录"}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">最后更新：</span>
          <span class="stat-value">${a.lastUpdate||"未记录"}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">阅读天数：</span>
          <span class="stat-value">${a.readingDays||0}天</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">平均评分：</span>
          <span class="stat-value">${a.averageRating||0}/10</span>
        </div>
      </div>
    </div>
  `}function b(a){const e=document.getElementById("awards-content");if(!a||a.length===0){e.innerHTML="<p>暂无获奖记录</p>";return}e.innerHTML=`
    <div class="awards-list">
      ${a.map(t=>`
        <div class="award-item">
          <div class="award-icon">🏆</div>
          <div class="award-info">
            <h4>${t.name}</h4>
            <p>${t.year} · ${t.category}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `}function y(a){const e=document.getElementById("related-content");if(!a||a.length===0){e.innerHTML="<p>暂无相关作品</p>";return}e.innerHTML=`
    <div class="related-grid">
      ${a.map(t=>`
        <div class="related-card">
          <img src="${t.image||"https://via.placeholder.com/150x200/4ECDC4/FFFFFF?text="+encodeURIComponent(t.title)}" 
               alt="${t.title}">
          <div class="related-info">
            <h4>${t.title}</h4>
            <p>${t.type} · ${t.year}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `}function x(a){const e=document.getElementById("links-content");if(!a||a.length===0){e.innerHTML="<p>暂无相关链接</p>";return}e.innerHTML=`
    <div class="links-grid">
      ${a.map(t=>`
        <a href="${t.url}" target="_blank" class="link-card">
          <div class="link-icon">${t.icon||"🔗"}</div>
          <div class="link-info">
            <h4>${t.name}</h4>
            <p>${t.description||""}</p>
          </div>
        </a>
      `).join("")}
    </div>
  `}function $(a){return{reading:"正在阅读",completed:"已完成",planned:"计划阅读",paused:"暂停",dropped:"已弃坑",ongoing:"连载追更中"}[a]||"未知状态"}typeof window<"u"&&(window.loadMangaDetail=loadMangaDetail);const B={};function M(a,e,t,n,q,I){return c(),l("div",null,[...e[0]||(e[0]=[s("h1",{id:"间谍过家家",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#间谍过家家"},[s("span",null,"间谍过家家")])],-1),s("div",{id:"loading-state",class:"loading-state"},[s("div",{class:"loading-spinner"}),s("p",null,"正在加载漫画详情...")],-1),s("div",{id:"error-state",class:"error-state",style:{display:"none"}},[s("div",{class:"error-icon"},"❌"),s("h3",null,"加载失败"),s("p",null,"无法加载漫画详情，请检查网络连接或稍后重试。"),s("button",{onclick:"loadMangaDetail()",class:"retry-btn"},"重新加载")],-1),d(`<div id="manga-content" style="display:none;"><div class="manga-header"><div class="manga-cover-large"><img id="manga-poster" src="" alt=""></div><pre><code>&lt;div class=&quot;manga-details&quot;&gt;
  &lt;h1 id=&quot;manga-title&quot;&gt;加载中...&lt;/h1&gt;
  &lt;p id=&quot;manga-subtitle&quot; class=&quot;manga-subtitle&quot;&gt;&lt;/p&gt;
  
  &lt;div id=&quot;manga-meta&quot; class=&quot;manga-meta&quot;&gt;
    &lt;!-- 元数据将通过JavaScript动态填充 --&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre></div><h2 id="📖-剧情简介" tabindex="-1"><a class="header-anchor" href="#📖-剧情简介"><span>📖 剧情简介</span></a></h2><div id="summary-content"></div><h2 id="👥-主要角色" tabindex="-1"><a class="header-anchor" href="#👥-主要角色"><span>👥 主要角色</span></a></h2><div id="characters-grid" class="characters-grid"></div><h2 id="💭-阅读感想" tabindex="-1"><a class="header-anchor" href="#💭-阅读感想"><span>💭 阅读感想</span></a></h2><div id="impressions-content"></div><h2 id="📚-章节评价" tabindex="-1"><a class="header-anchor" href="#📚-章节评价"><span>📚 章节评价</span></a></h2><div id="chapters-content"></div><h2 id="📈-阅读进度" tabindex="-1"><a class="header-anchor" href="#📈-阅读进度"><span>📈 阅读进度</span></a></h2><div id="progress-content"></div><h2 id="🏆-获奖记录" tabindex="-1"><a class="header-anchor" href="#🏆-获奖记录"><span>🏆 获奖记录</span></a></h2><div id="awards-content"></div><h2 id="🔗-相关作品" tabindex="-1"><a class="header-anchor" href="#🔗-相关作品"><span>🔗 相关作品</span></a></h2><div id="related-content"></div><h2 id="🌐-相关链接" tabindex="-1"><a class="header-anchor" href="#🌐-相关链接"><span>🌐 相关链接</span></a></h2><div id="links-content"></div></div><h2 id="🎭-主要角色" tabindex="-1"><a class="header-anchor" href="#🎭-主要角色"><span>🎭 主要角色</span></a></h2><div class="character-grid"><div class="character-card"><div class="character-avatar"><img src="https://via.placeholder.com/120x120/FF6B6B/FFFFFF?text=黄昏" alt="黄昏"></div><h4>劳埃德·福杰 (黄昏)</h4><p>精英间谍，代号&quot;黄昏&quot;。为了任务假扮成精神科医生，收养阿尼亚并与约儿结婚。</p></div><div class="character-card"><div class="character-avatar"><img src="https://via.placeholder.com/120x120/4ECDC4/FFFFFF?text=约儿" alt="约儿"></div><h4>约儿·福杰</h4><p>杀手，代号&quot;荆棘公主&quot;。表面是市政府职员，与劳埃德假结婚成为阿尼亚的继母。</p></div><div class="character-card"><div class="character-avatar"><img src="https://via.placeholder.com/120x120/45B7D1/FFFFFF?text=阿尼亚" alt="阿尼亚"></div><h4>阿尼亚·福杰</h4><p>拥有读心能力的少女，被劳埃德收养。知道父母的真实身份但选择保守秘密。</p></div><div class="character-card"><div class="character-avatar"><img src="https://via.placeholder.com/120x120/96CEB4/FFFFFF?text=邦德" alt="邦德"></div><h4>邦德·福杰</h4><p>福杰家的宠物狗，拥有预知未来的能力。原本是实验体，后被阿尼亚拯救。</p></div></div><h2 id="💭-阅读感想-1" tabindex="-1"><a class="header-anchor" href="#💭-阅读感想-1"><span>💭 阅读感想</span></a></h2><h3 id="🌟-亮点" tabindex="-1"><a class="header-anchor" href="#🌟-亮点"><span>🌟 亮点</span></a></h3><ul><li><strong>设定新颖</strong>：间谍、杀手、超能力者组成家庭的设定非常有趣</li><li><strong>搞笑元素</strong>：阿尼亚的表情包和各种误会制造了大量笑点</li><li><strong>温馨日常</strong>：虽然都有秘密，但家庭互动非常温暖</li><li><strong>画风精美</strong>：远藤达哉的画风清新，人物表情生动</li></ul><h3 id="📝-详细评价" tabindex="-1"><a class="header-anchor" href="#📝-详细评价"><span>📝 详细评价</span></a></h3><p>这部作品最大的魅力在于&quot;伪装家庭&quot;的设定。三个各有秘密的人组成家庭，却意外地和谐。阿尼亚作为唯一知道所有秘密的人，她的反应和表情包成为了作品的一大看点。</p><p>作者在搞笑和温情之间把握得很好，既有因为误会产生的喜剧效果，也有真正的家庭温暖。特别是劳埃德和约儿虽然是假结婚，但对阿尼亚的关爱是真实的。</p><h2 id="📊-章节评价" tabindex="-1"><a class="header-anchor" href="#📊-章节评价"><span>📊 章节评价</span></a></h2><div class="chapter-ratings"><div class="arc-group"><h4>入学篇 (第1-17话)</h4><div class="chapter-highlights"><p><strong>精彩章节：</strong></p><ul><li>第1话 - 家庭组建，设定展开 ⭐⭐⭐⭐⭐</li><li>第7话 - 入学面试，全家总动员 ⭐⭐⭐⭐⭐</li><li>第15话 - 阿尼亚的朋友，达米安登场 ⭐⭐⭐⭐</li></ul></div></div><div class="arc-group"><h4>校园篇 (第18-40话)</h4><div class="chapter-highlights"><p><strong>精彩章节：</strong></p><ul><li>第25话 - 阿尼亚的第一次考试 ⭐⭐⭐⭐</li><li>第32话 - 约儿的嫉妒，家庭危机 ⭐⭐⭐⭐⭐</li><li>第38话 - 校外教学，邦德登场 ⭐⭐⭐⭐⭐</li></ul></div></div><div class="arc-group"><h4>邮轮篇 (第41-65话)</h4><div class="chapter-highlights"><p><strong>精彩章节：</strong></p><ul><li>第45话 - 邮轮度假开始 ⭐⭐⭐⭐</li><li>第58话 - 约儿大显身手 ⭐⭐⭐⭐⭐</li><li>第62话 - 家庭羁绊加深 ⭐⭐⭐⭐⭐</li></ul></div></div></div><h2 id="📈-阅读进度-1" tabindex="-1"><a class="header-anchor" href="#📈-阅读进度-1"><span>📈 阅读进度</span></a></h2><div class="reading-progress"><div class="progress-bar"><div class="progress-fill" style="width:85%;"></div></div><p class="progress-text">已阅读：第95话 / 连载中 (85%)</p><div class="reading-stats"><div class="stat-item"><span class="stat-label">开始阅读：</span><span class="stat-value">2022年4月</span></div><div class="stat-item"><span class="stat-label">追更频率：</span><span class="stat-value">每周更新</span></div><div class="stat-item"><span class="stat-label">重读次数：</span><span class="stat-value">3次</span></div></div></div><h2 id="🏆-获奖记录-1" tabindex="-1"><a class="header-anchor" href="#🏆-获奖记录-1"><span>🏆 获奖记录</span></a></h2><ul><li><strong>2020年 下一部漫画大奖</strong> - 第1位</li><li><strong>2021年 手冢治虫文化奖</strong> - 短篇奖</li><li><strong>2022年 小学馆漫画奖</strong> - 少年向部门</li></ul><h2 id="📺-相关作品" tabindex="-1"><a class="header-anchor" href="#📺-相关作品"><span>📺 相关作品</span></a></h2><h3 id="动画化" tabindex="-1"><a class="header-anchor" href="#动画化"><span>动画化</span></a></h3><ul><li><strong>TV动画 第一季</strong> (2022年4月-6月) - 12集</li><li><strong>TV动画 第二季</strong> (2023年10月-12月) - 12集</li><li><strong>剧场版</strong> (2023年12月) - CODE: White</li></ul><h3 id="衍生作品" tabindex="-1"><a class="header-anchor" href="#衍生作品"><span>衍生作品</span></a></h3><ul><li><strong>小说版</strong>：间谍过家家 家族的肖像</li><li><strong>游戏</strong>：间谍过家家 Operation Diary</li></ul><h2 id="🔗-相关链接" tabindex="-1"><a class="header-anchor" href="#🔗-相关链接"><span>🔗 相关链接</span></a></h2><ul><li><a href="https://spy-family.net/" target="_blank" rel="noopener noreferrer">官方网站</a></li><li><a href="https://shonenjumpplus.com/episode/3269754496401369355" target="_blank" rel="noopener noreferrer">少年Jump+</a></li><li><a href="https://spy-family.net/anime/" target="_blank" rel="noopener noreferrer">动画官网</a></li></ul><h2 id="📝-个人笔记" tabindex="-1"><a class="header-anchor" href="#📝-个人笔记"><span>📝 个人笔记</span></a></h2><h3 id="最喜欢的情节" tabindex="-1"><a class="header-anchor" href="#最喜欢的情节"><span>最喜欢的情节</span></a></h3><ol><li><strong>阿尼亚的入学面试</strong> - 全家人的紧张和努力让人印象深刻</li><li><strong>约儿的醋意大发</strong> - 展现了她作为妻子的一面</li><li><strong>邦德的加入</strong> - 让这个家庭更加完整</li></ol><h3 id="经典台词" tabindex="-1"><a class="header-anchor" href="#经典台词"><span>经典台词</span></a></h3><blockquote><p>&quot;为了世界和平！&quot; - 阿尼亚</p><p>&quot;这就是...家庭吗？&quot; - 劳埃德</p><p>&quot;我想保护这个家庭。&quot; - 约儿</p></blockquote><hr><div class="navigation-buttons"><a href="/Anime/manga/" class="nav-button">← 返回漫画专区</a><a href="/Anime/manga/jujutsu-kaisen.html" class="nav-button">下一部：咒术回战 →</a></div>`,29)])])}const T=r(B,[["render",M]]),L=JSON.parse('{"path":"/Anime/manga/spy-family.html","title":"间谍过家家","lang":"zh-CN","frontmatter":{},"git":{"createdTime":1788281477000,"updatedTime":1788281477000,"contributors":[{"name":"HaKu","username":"HaKu","email":"hakuless@gmail.com","commits":1,"url":"https://github.com/HaKu"}]},"readingTime":{"minutes":10.25,"words":3075},"filePathRelative":"Anime/manga/spy-family.md"}');export{T as comp,L as data};
