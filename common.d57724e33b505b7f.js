"use strict";(self.webpackChunkng_song_guesser=self.webpackChunkng_song_guesser||[]).push([[592],{8598:(l,i,o)=>{o.d(i,{g:()=>s});let s=(()=>{class e{}return e.API_URL="https://hackathon.ar:3000",e.PHRASE_INTERVAL=5e3,e.COUNTDOWN_INTERVAL=1e3,e.COUNTDOWN_SECONDS=30,e.SONGS_OPTIONS=5,e})()},9576:(l,i,o)=>{o.d(i,{f:()=>c});var s=o(8274),e=o(529),a=o(8598);let c=(()=>{class n{constructor(){this._http=(0,s.f3M)(e.eN)}getUsers(){const t=(new e.WM).append("appKey","YOUR_APP_KEY");return this._http.get(`${a.g.API_URL}/player/score`,{headers:t})}createUser(t){const r=(new e.WM).append("appKey","YOUR_APP_KEY"),{name:_,email:p}=t;return this._http.post(`${a.g.API_URL}/player`,{name:_,email:p,password:"password",score:0},{headers:r})}updateUserScore(t){const r=(new e.WM).append("appKey","YOUR_APP_KEY"),{email:_,name:p,score:m}=t;return this._http.put(`${a.g.API_URL}/player/score`,{name:p,email:_,score:m},{headers:r})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},1604:(l,i,o)=>{o.d(i,{U:()=>c});var s=o(6895),e=o(8274),a=o(7340);let c=(()=>{class n{constructor(){this.elRef=(0,e.f3M)(e.SBq),this.builder=(0,e.f3M)(a._j),this.randomWord="Loading..."}ngOnInit(){}startAnimation(t){this.randomWord=t,this.player||this.prepareAnimation(),this.playAnimation()}prepareAnimation(){const t=this.builder.build([(0,a.jt)("1s ease-in-out",(0,a.oB)({transform:"scale3d(1.5, 1.5, 1)",opacity:0}))]),r=this.elRef.nativeElement.querySelector("svg");this.player=t.create(r)}playAnimation(){this.player.play(),this.player.onDone(()=>{this.player.reset()})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-feedback-word"]],standalone:!0,features:[e.jDz],decls:8,vars:2,consts:[["role","img"],[1,"title"],["x","50%","y","50%","text-anchor","middle","fill","#222","stroke","#222","stroke-width","1.5%","dominant-baseline","central","stroke-linecap","round",1,"word"],["x","50%","y","50%","text-anchor","middle","fill","white","dominant-baseline","central",1,"word"]],template:function(t,r){1&t&&(e.TgZ(0,"h1"),e.O4$(),e.TgZ(1,"svg",0)(2,"title",1),e._uU(3,"Random Words!"),e.qZA(),e.TgZ(4,"text",2),e._uU(5),e.qZA(),e.TgZ(6,"text",3),e._uU(7),e.qZA()()()),2&t&&(e.xp6(5),e.Oqu(r.randomWord),e.xp6(2),e.Oqu(r.randomWord))},dependencies:[s.ez],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{height:100%;width:100%}body[_ngcontent-%COMP%]{transition:background-color .3s ease-in;font-family:Open Sans,sans-serif;overflow:hidden;font-size:12px}@media (min-width: 480px){body[_ngcontent-%COMP%]{font-size:14px}}@media (min-width: 640px){body[_ngcontent-%COMP%]{font-size:16px}}.word[_ngcontent-%COMP%]{font-family:Bangers,cursive}svg[_ngcontent-%COMP%]{height:100%;width:100%;position:relative;top:-1rem;animation:pop-out 1s ease-in-out infinite}.word[_ngcontent-%COMP%]{font-family:Bangers,cursive;letter-spacing:.05em;color:#fff;padding:.5em;font-size:28px}@media (min-width: 480px){.word[_ngcontent-%COMP%]{font-size:36px}}@media (min-width: 640px){.word[_ngcontent-%COMP%]{font-size:48px}}@media (min-width: 960px){.word[_ngcontent-%COMP%]{font-size:64px}}@media (min-width: 1280px){.word[_ngcontent-%COMP%]{font-size:84px}}p[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;line-height:2rem;text-align:center;color:#ffffffbf;background-color:#222}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited{color:inherit}"]}),n})()}}]);