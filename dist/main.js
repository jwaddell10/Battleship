(()=>{"use strict";class s{constructor(s,t,i,e,h){this.length=s,this.numberOfHits=t,this.isSunk=i,this.x=e,this.y=h}createShip(){const i=new s(3,0,!1),e=new s(2,0,!1),h=new s(4,0,!1),n=new s(1,0,!1);return t.addShip({ship1:i,ship2:e,ship3:h,ship4:n}),console.log(t,"this should have my ships"),t}shipWasHit(){return this.numberOfHits++,console.log(this.numberOfHits,"this is the # of hits"),this.numberOfHits}shipWasSunk(s){return this.numberOfHits===this.length?(console.log(s,"this ship is sunk"),!0):(console.log(s,"this ship is not sunk"),!1)}}const t=new class{constructor(){this.ships=[]}addShip(s){return this.ships.push(s),this.ships}removeShip(s){const t=this.ships.indexOf(s);-1!==t&&this.ships.splice(t,1)}};(new s).createShip();const i=s;const e=[],h=new class{constructor(){this.board=this.createBoard()}createBoard(){let s=[];for(let t=0;t<10;t++){s[t]=[];for(let i=0;i<10;i++)s[t][i]="."}return s}placeShips(){const s=this.createBoard(),t=new i(4,0,!1,0,4);return s[t.x][t.y]=t,{board:s,newShip:t}}receiveAttack(s,t){const{board:i,newShip:h}=this.placeShips();if(console.log(e,"this is missarray"),i[s][t]!==i[h.x][h.y]){const i=e.push(s,t);return console.log(i,"these shots missed"),i}h.shipWasHit(),h.shipWasSunk(h)}allShipsSunk(){}};h.placeShips(),h.receiveAttack(1,4),h.receiveAttack(1,9),h.receiveAttack(2,4)})();