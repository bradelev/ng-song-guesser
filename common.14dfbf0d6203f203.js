"use strict";(self.webpackChunkng_song_guesser=self.webpackChunkng_song_guesser||[]).push([[592],{8598:(c,d,t)=>{t.d(d,{g:()=>i});let i=(()=>{class e{}return e.API_URL="https://137.184.76.157:3000",e.PHRASE_INTERVAL=5e3,e.COUNTDOWN_INTERVAL=1e3,e.COUNTDOWN_SECONDS=30,e.SONGS_OPTIONS=5,e})()},9576:(c,d,t)=>{t.d(d,{f:()=>a});var i=t(8274),e=t(9646),r=t(529),_=t(8598);let a=(()=>{class s{constructor(){this._http=(0,i.f3M)(r.eN)}getUsers(){const n=(new r.WM).append("appKey","YOUR_APP_KEY");return this._http.get(`${_.g.API_URL}/player/score`,{headers:n})}getUsersByTeamCode(n){const l=(new r.WM).append("appKey","YOUR_APP_KEY");return this._http.get(`${_.g.API_URL}/player/score`,{headers:l})}updateUserScore(n){return console.log("scoreObj",n),(new r.WM).append("appKey","YOUR_APP_KEY"),(0,e.of)(!0)}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},1604:(c,d,t)=>{t.d(d,{U:()=>_});var i=t(6895),e=t(8274),r=t(7340);let _=(()=>{class a{constructor(){this.elRef=(0,e.f3M)(e.SBq),this.builder=(0,e.f3M)(r._j),this.randomWord="Loading..."}ngOnInit(){}startAnimation(o){this.randomWord=o,this.player||this.prepareAnimation(),this.playAnimation()}prepareAnimation(){const o=this.builder.build([(0,r.jt)("1s ease-in-out",(0,r.oB)({transform:"scale3d(1.5, 1.5, 1)",opacity:0}))]),n=this.elRef.nativeElement.querySelector("svg");this.player=o.create(n)}playAnimation(){this.player.play(),this.player.onDone(()=>{this.player.reset()})}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-feedback-word"]],standalone:!0,features:[e.jDz],decls:8,vars:2,consts:[["role","img"],[1,"title"],["x","50%","y","50%","text-anchor","middle","fill","#222","stroke","#222","stroke-width","1.5%","dominant-baseline","central","stroke-linecap","round",1,"word"],["x","50%","y","50%","text-anchor","middle","fill","white","dominant-baseline","central",1,"word"]],template:function(o,n){1&o&&(e.TgZ(0,"h1"),e.O4$(),e.TgZ(1,"svg",0)(2,"title",1),e._uU(3,"Random Words!"),e.qZA(),e.TgZ(4,"text",2),e._uU(5),e.qZA(),e.TgZ(6,"text",3),e._uU(7),e.qZA()()()),2&o&&(e.xp6(5),e.Oqu(n.randomWord),e.xp6(2),e.Oqu(n.randomWord))},dependencies:[i.ez],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{height:100%;width:100%}body[_ngcontent-%COMP%]{transition:background-color .3s ease-in;font-family:Open Sans,sans-serif;overflow:hidden;font-size:12px}@media (min-width: 480px){body[_ngcontent-%COMP%]{font-size:14px}}@media (min-width: 640px){body[_ngcontent-%COMP%]{font-size:16px}}.word[_ngcontent-%COMP%]{font-family:Bangers,cursive}svg[_ngcontent-%COMP%]{height:100%;width:100%;position:relative;top:-1rem;animation:pop-out 1s ease-in-out infinite}.word[_ngcontent-%COMP%]{font-family:Bangers,cursive;letter-spacing:.05em;color:#fff;padding:.5em;font-size:28px}@media (min-width: 480px){.word[_ngcontent-%COMP%]{font-size:36px}}@media (min-width: 640px){.word[_ngcontent-%COMP%]{font-size:48px}}@media (min-width: 960px){.word[_ngcontent-%COMP%]{font-size:64px}}@media (min-width: 1280px){.word[_ngcontent-%COMP%]{font-size:84px}}p[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;line-height:2rem;text-align:center;color:#ffffffbf;background-color:#222}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited{color:inherit}"]}),a})()}}]);