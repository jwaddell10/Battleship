(()=>{"use strict";class s{constructor(s,t,i,e,o){this.length=s,this.numberOfHits=t,this.isSunk=i,this.x=e,this.y=o}createShip(){const t=new s;console.log(t,"this is a ship")}shipWasHit(){return this.numberOfHits++,console.log(this.numberOfHits,"this is the # of hits"),this.numberOfHits}shipWasSunk(s){return this.numberOfHits===this.length?(console.log(s,"this ship is sunk"),!0):(console.log(s,"this ship is not sunk"),!1)}}const t=s;const i=new class{constructor(){this.board=this.createBoard()}createBoard(){let s=[];for(let t=0;t<10;t++){s[t]=[];for(let i=0;i<10;i++)s[t][i]="."}return s}placeShips(){const s=this.createBoard(),i=new t(4,0,!1,0,4);return console.log(i,"this is newship"),s[i.x][i.y]=i,console.log(s,"this is with a ship"),{board:s,newShip:i}}receiveAttack(s,t){const{board:i,newShip:e}=this.placeShips();if(i[s][t]!==i[e.x][e.y]){const i=[],e=i.push(s,t);return console.log(i,"this is missedshotsarray"),console.log(s,t,"you missed"),e}e.shipWasHit(),console.log(e.numberOfHits,"this should say 1")}};i.placeShips(),i.receiveAttack(0,4),i.receiveAttack(0,4),i.receiveAttack(2,4)})();