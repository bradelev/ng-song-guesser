"use strict";(self.webpackChunkng_song_guesser=self.webpackChunkng_song_guesser||[]).push([[566],{6566:(at,x,r)=>{r.r(x),r.d(x,{GuessTheSongComponent:()=>rt});var G=r(1034),l=r(6895),t=r(8256),a=r(433),I=r(1135),C=r(7579),$=r(9841),c=r(4004),h=r(5698),m=r(4049),A=r(9751),U=r(3532);function f(e=0,s,n=m.P){let o=-1;return null!=s&&((0,U.K)(s)?n=s:o=s),new A.y(i=>{let g=function P(e){return e instanceof Date&&!isNaN(e)}(e)?+e-n.now():e;g<0&&(g=0);let Z=0;return n.schedule(function(){i.closed||(i.next(Z++),0<=o?this.schedule(void 0,o):i.complete())},g)})}var T=r(2529),u=r(8675),p=r(3900),N=r(9300),L=r(8505),w=r(7272),J=r(4482),Y=r(5403),j=r(5032),F=r(9718),Q=r(5577);function O(e,s){return s?n=>(0,w.z)(s.pipe((0,h.q)(1),function E(){return(0,J.e)((e,s)=>{e.subscribe((0,Y.x)(s,j.Z))})}()),n.pipe(O(e))):(0,Q.z)((n,o)=>e(n,o).pipe((0,h.q)(1),(0,F.h)(n)))}var W=r(263),y=r(529);let D=(()=>{class e{constructor(n){this.http=n}getSongs(){const n=(new y.WM).append("appKey","YOUR_APP_KEY");return this.http.get("http://137.184.76.157:3000/song/10",{headers:n})}getLyrics(n){return this.getSongs().pipe((0,c.U)(o=>o.find(i=>i.id===n)),(0,c.U)(o=>o?.lyrics??[]))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(y.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var K=r(42),V=r(8562);function B(e,s){if(1&e&&(t.TgZ(0,"p",15),t._uU(1," Your team is "),t.TgZ(2,"strong"),t._uU(3),t.qZA()()),2&e){const n=s.ngIf;t.xp6(3),t.Oqu(n.name)}}function R(e,s){if(1&e&&(t.TgZ(0,"div")(1,"span",16),t._uU(2),t.qZA()()),2&e){const n=s.ngIf;t.xp6(2),t.Oqu(n)}}function X(e,s){1&e&&(t.TgZ(0,"div"),t._uU(1,"Loading..."),t.qZA())}function H(e,s){if(1&e&&(t.TgZ(0,"div",17),t._UZ(1,"input",18),t.TgZ(2,"label",19),t._uU(3),t.qZA()()),2&e){const n=s.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("id","song-"+n.id)("value",n.id)("disabled",o.isGameOver),t.xp6(1),t.ekj("pointer-events-none",o.isGameOver),t.Q6J("for","song-"+n.id),t.xp6(1),t.hij(" ",n.name," ")}}function k(e,s){if(1&e&&(t.TgZ(0,"div",22)(1,"div",23),t._uU(2),t.qZA(),t.O4$(),t.TgZ(3,"svg",24),t._UZ(4,"circle",25),t.qZA()()),2&e){const n=t.oxw().ngIf;t.xp6(2),t.Oqu(n)}}function q(e,s){1&e&&(t.TgZ(0,"span",16),t._uU(1,"Time's up!"),t.qZA())}function tt(e,s){1&e&&(t.TgZ(0,"span",16),t._uU(1,"Game Over"),t.qZA())}function nt(e,s){if(1&e&&(t.TgZ(0,"div",26),t.YNc(1,q,2,0,"span",27),t.YNc(2,tt,2,0,"span",27),t.qZA()),2&e){const n=t.oxw(3);t.xp6(1),t.Q6J("ngIf",!n.isGameOver),t.xp6(1),t.Q6J("ngIf",n.isGameOver)}}function et(e,s){if(1&e&&(t.ynx(0),t.YNc(1,k,5,1,"div",20),t.YNc(2,nt,3,2,"ng-template",null,21,t.W1O),t.BQk()),2&e){const n=s.ngIf,o=t.MAs(3),i=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n>0&&!i.isGameOver)("ngIfElse",o)}}const ot=function(e,s){return{"opacity-50":e,"cursor-not-allowed":s}};function st(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",1)(1,"div",2),t.YNc(2,B,4,1,"p",3),t.TgZ(3,"div",4)(4,"p"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA()(),t.TgZ(10,"form",5),t.NdJ("ngSubmit",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.onSubmit())}),t.TgZ(11,"div",6),t.YNc(12,R,3,1,"div",7),t.ALo(13,"async"),t.YNc(14,X,2,0,"ng-template",null,8,t.W1O),t.qZA(),t.TgZ(16,"div",9),t.YNc(17,H,4,7,"div",10),t.ALo(18,"async"),t.qZA(),t.TgZ(19,"div",11),t._UZ(20,"app-button",12),t.ALo(21,"async"),t.qZA()(),t.TgZ(22,"div",13),t.YNc(23,et,4,2,"ng-container",14),t.ALo(24,"async"),t.qZA()()()}if(2&e){const n=s.ngIf,o=t.MAs(15),i=t.oxw();t.xp6(2),t.Q6J("ngIf",n.selectedTeam),t.xp6(3),t.hij("Attempts: ",i.attempts," / 3"),t.xp6(2),t.hij("Played Games: ",i.playedGames,""),t.xp6(2),t.hij("Total Score: ",i.totalScore,""),t.xp6(1),t.Q6J("formGroup",i.songsForm)("ngClass",t.WLB(22,ot,i.isGameOver,i.isGameOver)),t.xp6(2),t.Q6J("ngIf",t.lcZ(13,14,i.currentPhrase$))("ngIfElse",o),t.xp6(5),t.Q6J("ngForOf",t.lcZ(18,16,i.songs$)),t.xp6(3),t.Q6J("isDisabled",!!t.lcZ(21,18,i.stopCondition$)||i.isGameOver)("inputType","submit")("value","Guess")("classes","w-full"),t.xp6(3),t.Q6J("ngIf",t.lcZ(24,20,i.timer$))}}const d=1e3;let rt=(()=>{class e{constructor(){this._router=(0,t.f3M)(G.F0),this._fb=(0,t.f3M)(a.qu),this._authService=(0,t.f3M)(W.e),this._songsService=(0,t.f3M)(D),this._userService=(0,t.f3M)(V.f),this._document=(0,t.f3M)(l.K0),this.attempts=0,this.playedGames=0,this.totalScore=0,this.isGameOver=!1,this.teamCode="",this.randomSongId=Math.floor(8*Math.random())+1,this.lyrics$=this._getLyrics(this.randomSongId),this.stopCondition$=new I.X(!1),this._resetTimer$=new C.x,this.songCorrect$=new C.x,this.authState$=this._authService.authState$,this.vm$=(0,$.a)([this._authService.authState$,this._authService.isLoggedIn$,this._authService.selectedTeam$]).pipe((0,c.U)(([n,o,i])=>({authState:n,isLoggedIn:o,selectedTeam:i}))),this.songsForm=this._fb.group({songChoice:[null]}),this.songs$=this._songsService.getSongs().pipe((0,h.q)(1),(0,c.U)(n=>this._getSongOptions(n,this.randomSongId,5))),this.currentPhrase$=function b(e=0,s=m.z){return e<0&&(e=0),f(e,e,s)}(5e3).pipe((0,T.o)(()=>!this.stopCondition$.getValue()),(0,u.O)(0),(0,p.w)(()=>this.lyrics$),(0,c.U)(n=>n[Math.floor(Math.random()*n.length)])),this.timer$=this._resetTimer$.pipe((0,u.O)(void 0),(0,p.w)(()=>f(0,d)),(0,c.U)(n=>30-n)),this.countdown_reversed$=this.songCorrect$.pipe((0,u.O)(null),(0,p.w)(()=>f(0,d).pipe((0,T.o)(()=>!this.stopCondition$.getValue()),(0,c.U)(n=>30-n),(0,h.q)(31))))}ngOnInit(){this.authState$.subscribe(n=>{n||this._router.navigate(["/login"])})}_resetCountdown(){this._resetTimer$.next(void 0),this._toggleClass("#countdown svg","active",500)}_toggleClass(n,o,i){const g=this._document.querySelector(n);g?.classList.toggle(o),setTimeout(()=>{g?.classList.toggle(o)},i)}onSubmit(){this.attempts++;const n=this.songsForm.get("songChoice")?.value;Number(n)===this.randomSongId?(console.log("isCorrect -> ",this.randomSongId),this.playedGames++,this.totalScore+=1===this.attempts?5:2===this.attempts?3:1,console.log("FEEDBACK MESSAGE: totalScore => ",this.totalScore),f(1e3).subscribe(o=>{this.attempts=0,this.randomSongId=Math.floor(8*Math.random())+1,this.lyrics$=this._getLyrics(this.randomSongId),this.songs$=this._songsService.getSongs().pipe((0,h.q)(1),(0,c.U)(i=>this._getSongOptions(i,this.randomSongId,5))),this.stopCondition$.next(!1),this.songCorrect$.next(),this._resetCountdown()})):(this._toggleClass("form.bg-white.shadow-md.rounded","shake-error",d),console.log("incorrect => ",Number(n),this.randomSongId)),this.attempts>=3&&this.gameOver()}gameOver(){this.isGameOver=!0,this.stopCondition$.next(!0),this._authService.authState$.pipe((0,h.q)(1),(0,N.h)(n=>!!n),(0,L.b)(n=>{this._userService.updateUserScore({email:n.email,playedGames:this.playedGames,totalScore:this.totalScore})}),function z(e,s=m.z){const n=f(e,s);return O(()=>n)}(3e3)).subscribe(()=>{this._router.navigate(["/ranking"])})}_getLyrics(n){return this._songsService.getLyrics(n).pipe((0,c.U)(o=>this._shuffleArray(o)))}_getSongOptions(n,o,i){const _=n.filter(S=>S.id!==o).sort(()=>Math.random()-.5).slice(0,i-1),M=n.find(S=>S.id===o);return M&&_.push(M),_.sort(()=>Math.random()-.5)}_shuffleArray(n){for(let o=n.length-1;o>0;o--){const i=Math.floor(Math.random()*(o+1));[n[o],n[i]]=[n[i],n[o]]}return n}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-guess-the-song"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[["class","flex flex-col items-center justify-center mb-6",4,"ngIf"],[1,"flex","flex-col","items-center","justify-center","mb-6"],[1,"w-full","max-w-xl","mx-auto"],["class","my-5 text-center",4,"ngIf"],[1,"text-center","mb-4"],[1,"bg-white","shadow-md","rounded","px-8","pt-6","pb-8","text-black",3,"formGroup","ngClass","ngSubmit"],[1,"mb-6"],[4,"ngIf","ngIfElse"],["loading",""],[1,"flex","flex-col"],["class","radio mb-2",4,"ngFor","ngForOf"],[1,"flex","items-stretch","flex-col","justify-between","pt-4"],[3,"isDisabled","inputType","value","classes"],[1,"w-full","h-4","mt-4"],[4,"ngIf"],[1,"my-5","text-center"],[1,"font-bold"],[1,"radio","mb-2"],["hidden","hidden","type","radio","formControlName","songChoice",3,"id","value","disabled"],[1,"px-2","py-1","rounded-lg","flex","justify-center","items-center","font-bold","w-full","h-10","lg:h-14","hover:cursor-pointer",3,"for"],["id","countdown",4,"ngIf","ngIfElse"],["timesUp",""],["id","countdown"],["id","countdown-number"],[1,"active"],["r","18","cx","20","cy","20"],[1,"text-center"],["class","font-bold",4,"ngIf"]],template:function(n,o){1&n&&(t.YNc(0,st,25,25,"div",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,o.vm$))},dependencies:[l.ez,l.mk,l.sg,l.O5,l.Ov,K.r,a.UX,a._Y,a.Fj,a._,a.JJ,a.JL,a.sg,a.u],styles:[".radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%]{background-color:#e9e1e1;color:#2f4f4f}.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ label[_ngcontent-%COMP%]{background-color:#46e616;color:#fff}#countdown[_ngcontent-%COMP%]{position:relative;margin:50px auto auto;height:40px;width:40px;text-align:center}#countdown-number[_ngcontent-%COMP%]{color:#fff;display:inline-block;line-height:40px}svg[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:40px;height:40px;transform:rotateY(-180deg) rotate(-90deg)}svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke-dasharray:113px;stroke-dashoffset:0px;stroke-linecap:round;stroke-width:2px;stroke:#fff;fill:none}svg.active[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_countdown 30s linear forwards}@keyframes _ngcontent-%COMP%_countdown{0%{stroke-dashoffset:0px}to{stroke-dashoffset:113px}}form.shake-error[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_horizontal-shaking .3s linear forwards}@keyframes _ngcontent-%COMP%_horizontal-shaking{0%{transform:translate(0)}25%{transform:translate(10px)}50%{transform:translate(-10px)}75%{transform:translate(10px)}to{transform:translate(0)}}"]}),e})()}}]);