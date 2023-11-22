import Ship from './ship.js';
import Player from './player.js'
import Computer from './computer.js'
import gameBoard from './gameboard.js';
import { renderBoard } from './dom.js';
import './styles/styles.css'
import { game, computer, player, computerGameboard, playerGameboard, computerShips, playerShips } from './game.js'

const shipsSunk = computerGameboard.allShipsSunk(computerShips);
const cells = document.querySelectorAll('.computercell');