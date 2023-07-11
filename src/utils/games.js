import horizonZeroDawn from '../images/adventure/horizon-zero-dawn.jpg';
import ghostOfTsushima from '../images/adventure/ghost-of-tsushima.jpeg';
import residentEvil4Remake from '../images/adventure/resident-evil-4-remake.webp';
import deadSpaceRemake from '../images/adventure/dead-space-remake.webp';
import deadIsland2 from '../images/adventure/dead-island-2.webp';

import streetFighter6 from '../images/fighting/street-fighter-6.jpg';
import tekken8 from '../images/fighting/tekken-8.webp';
import dnfDuel from '../images/fighting/dnf-duel.jpg';
import kingOfFighters from '../images/fighting/king-of-fighters-15.jpg';
import guiltyGearStrive from '../images/fighting/guilty-gear-strive.jpg';

import uniqid from "uniqid";

// games: Will contain a list of game objects.
export const games = [
    {
        name: "Horizon Zero Dawn",
        category: "Adventure",
        cost: "49.99",
        image: horizonZeroDawn,
        id: uniqid(),
        inCart: false,
        quantity: 0,
        platforms: {
            1: "PS4",
            2: "PC",
        }
    },
    {
        name: "Ghost of Tsushima",
        category: "Adventure",
        cost: "44.99",
        image: ghostOfTsushima,
        id: uniqid(),
        inCart: false,
        quantity: 0,
        platforms: {
            1: "PS4",
            2: "PS5",
        }
    },
    {
        name: "Resident Evil 4 Remake",
        category: "Adventure", 
        cost: "60.00",
        image: residentEvil4Remake,
        id: uniqid(),
        inCart: false,
        quantity: 0,
        platforms: {
            1: "PS4",
            2: "PS5",
            3: "Xbox Series X",
            4: "Xbox Series S",
            5: "PC",
        }
    },
    {
        name: "Dead Space Remake",
        category: "Adventure",
        cost: "60.00",
        image: deadSpaceRemake,
        id: uniqid(),
        inCart: false,
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "Xbox Series X",
            3: "Xbox Series S",
            4: "PC",
        }
    },
    {
        name: "Dead Island 2",
        category: "Adventure",
        cost: "60.00",
        image: deadIsland2,
        id: uniqid(),
        inCart: false,
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "PS4",
            3: "Xbox Series X",
            4: "Xbox Series S",
            5: "Xbox One",
            6: "PC",
        }
    },
    {
        name: "Street Fighter 6",
        category: "Fighting",
        cost: "60.00",
        image: streetFighter6,
        id: uniqid(),
        inCart: false,
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "PS4",
            3: "Xbox Series X",
            4: "Xbox Series S",
            5: "PC",
        }
    },
    {
        name: "Tekken 8",
        category: "Fighting",
        cost: "60.00",
        image: tekken8,
        id: uniqid(),
        inCart: false,
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "Xbox Series X",
            3: "Xbox Series S",
            4: "PC",
        }
    },
    {
        name: "DNF Duel",
        category: "Fighting",
        cost: "49.99",
        image: dnfDuel,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "Nintendo Switch",
            2: "PS5",
            3: "PS4",
            4: "PC",
        }
    },
    {
        name: "King of Fighters",
        category: "Fighting",
        cost: "60.00",
        image: kingOfFighters,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5", 
            2: "PS4",
            3: "Xbox Series X",
            4: "Xbox Series S",
            5: "PC" 
        }
    },
    {
        name: "Guilty Gear Strive",
        category: "Fighting",
        cost: "39.99",
        image: guiltyGearStrive,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "PS4",
            3: "Xbox Series X",
            4: "Xbox Series S",
            5: "Xbox One",
        }
    }
]