(()=>{"use strict";class t{constructor(t,e,s,o,r){this.length=t,this.numberOfHits=e,this.isSunk=s,this.x=o,this.y=r}shipWasHit(){return this.numberOfHits++,console.log(this.numberOfHits,"this is the # of hits"),this.numberOfHits}shipWasSunk(){return this.numberOfHits===this.length?(console.log(t,"this ship is sunk"),this.isSunk=!0):(console.log(t,"this ship is not sunk"),this.isSunk=!1),this.isSunk}}const e=[],s=new t(4,0,!1,4,0),o=new t(4,0,!1,3,1),r=new t(3,0,!1,5,9);e.push(s,o,r);class c{constructor(){this.board=this.createBoard()}createBoard(){let t=[];for(let e=0;e<10;e++){t[e]=[];for(let s=0;s<10;s++)t[e][s]="."}return t}placeShips(t){t.forEach((t=>{this.board[t.x][t.y]=t}))}receiveAttack(t,e,s){let o=!1;t.forEach((t=>{this.board[e][s]===this.board[t.x][t.y]&&(t.shipWasHit(),t.shipWasSunk(t),o=!0)})),o||(a.push(e,s),console.log(a,"this is missed shots"))}allShipsSunk(t){let e=!1;const s=t.filter((t=>!0===t.shipWasSunk()));return s.length!==t.length?(e=!1,e):s.length===t.length?(e=!0,e):void 0}}const a=[],i=new c;i.placeShips(e);const n=new class{constructor(t){this.player=t}createPlayerGameboard(){(new c).placeShips(e)}checkAttack(t,e){}sendAttack(t,e){this.checkAttack(t,e),i.board[t][e]}};n.createPlayerGameboard(),n.sendAttack(1,0);const h=[],l=new class{constructor(t){this.computer=t}createComputerGameboard(){const t=new c;t.placeShips(e),console.log(t,"this is computerboard")}computerCheckAttack(t,e){t<0||t>10||e<0||e>10?console.log("invalid attack"):1!==t&&2!==e||console.log("this worked")}generateRandomNumber(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1)+t)}checkRepeatHits(t,e){const s=h.some((t=>t[0]===o[0]&&t[1]===o[1])),o=[t,e];console.log(h,"these are are shotsarray "),console.log(o,"these are coordinates"),console.log(s,"this is hitsrepeat")}computerSendAttack(t,e){const s=[t,e];h.push(s),this.computerCheckAttack(),this.checkRepeatHits(t,e),i.board[t][e]}};l.computerSendAttack(1,2),l.computerSendAttack(1,2),l.computerSendAttack(l.generateRandomNumber(0,9),l.generateRandomNumber(0,9))})();