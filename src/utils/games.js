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

import finalFantasy16 from '../images/rpg/final-fantasy-16.jpg';
import finalFantasy7Remake from '../images/rpg/final-fantasy-7-remake.webp';
import eldenRing from '../images/rpg/elden-ring.webp';
import persona5Royal from '../images/rpg/persona-5-royal.webp';
import shinMegamiTenseiV from '../images/rpg/shin-megami-tensei-v.jpg';

import granTurismo7 from '../images/racing/gran-turismo-7.jpg';
import forzaHorizon5 from '../images/racing/forza-horizon-5.jpg';
import forzaMotorSport8 from '../images/racing/forza-motorsport-8.jpg';
import testDriveUnlimitedSolarCrown from '../images/racing/test-drive-unlimited-solar-crown.jpg';
import theCrewMotorfest from '../images/racing/the-crew-motorfest.jpg';

import callOfDutyModernWarfare2 from '../images/shooters/call-of-duty-modern-warfare-2.jpg';
import cyberpunk2077 from '../images/shooters/cyberpunk-2077.jpg';
import overwatch2 from '../images/shooters/overwatch-2.jpg';
import systemShock3 from '../images/shooters/system-shock-3.webp';
import payday3 from '../images/shooters/payday-3.png';

import nba2k23 from '../images/sports/nba-2k23.jpg';
import fifa23 from '../images/sports/fifa-23.jpeg';
import nba2k24 from '../images/sports/nba-2k24.webp';
import mlbTheShow23 from '../images/sports/mlb-the-show-23.png';
import pgaTour2K23 from '../images/sports/pga-tour-2k23.jpg';

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
    },
    {
        name: "Final Fantasy 16",
        category: "RPG",
        cost: "70.00",
        image: finalFantasy16,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5",
        }
    },
    {
        name: "Elden Ring",
        category: "RPG",
        cost: "51.70",
        image: eldenRing,
        inCart: false,
        id: uniqid(),
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
        name: "Final Fantasy 7 Remake",
        category: "RPG",
        cost: "60.00",
        image: finalFantasy7Remake,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "PS4",
            3: "PC",
        }
    },
    {
        name: "Persona 5 Royal",
        category: "RPG",
        cost: "60.00",
        image: persona5Royal,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "PS4",
            3: "Xbox Series X",
            4: "Xbox Series S",
            5: "Xbox One",
            6: "Nintendo Switch",
            7: "PC",
        }
    },
    {
        name: "Shin Megami Tensei V",
        category: "RPG",
        cost: "60.00", 
        image: shinMegamiTenseiV,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "Nintendo Switch",
        }
    },
    {
        name: "Gran Turismo 7",
        category: "Racing",
        cost: "70.00",
        image: granTurismo7,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "PS4",
        }
    },
    {
        name: "Forza Horizon 5",
        category: "Racing",
        cost: "60.00",
        image: forzaHorizon5,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "Xbox Series X",
            2: "Xbox Series S", 
            3: "Xbox One",
            4: "PC",
        }
    },
    {
        name: "Test Drive Unlimited Solar Crown",
        category: "Racing",
        cost: "70.00",
        image: testDriveUnlimitedSolarCrown,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "Xbox Series X",
            3: "Xbox Series S",
            4: "Nintendo Switch",
            5: "PC",
        }
    },
    {
        name: "Forza Motorsport 8",
        category: "Racing",
        cost: "70.00",
        image: forzaMotorSport8,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "Xbox Series X",
            2: "Xbox Series S",
            3: "PC",
        }
    },
    {
        name: "The Crew Motorfest",
        category: "Racing",
        cost: "70.00",
        image: theCrewMotorfest,
        inCart: false,
        id: uniqid(),
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
        name: "Call of Duty Modern Warfare 2",
        category: "Shooters",
        cost: "70.00",
        image: callOfDutyModernWarfare2, 
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "PS4",
            3: "Xbox Series X",
            4: "Xbox Series S",
            5: "Xbox One",
            6: "PC" 
        }
    },
    {
        name: "Cyberpunk 2077",
        category: "Shooters",
        cost: "60.00",
        image: cyberpunk2077,
        inCart: false,
        id: uniqid(),
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
        name: "Overwatch 2",
        category: "Shooters",
        cost: "0.00",
        image: overwatch2,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "PS4",
            3: "Xbox Series X",
            4: "Xbox Series S",
            5: "Xbox One",
            6: "Nintendo Switch",
            7: "PC",
        }
    },
    {
        name: "Payday 3",
        category: "Shooters",
        cost: "70.00",
        image: payday3,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5", 
            2: "Xbox Series X",
            3: "Xbox Series S",
            4: "PC",
        }
    },
    {
        name: "System Shock 3",
        category: "Shooters",
        cost: "70.00",
        image: systemShock3,
        inCart: false,
        id: uniqid(),
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
        name: "NBA 2K23", 
        category: "Sports",
        cost: "60.00",
        image: nba2k23,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "PS4",
            3: "Xbox Series X",
            4: "Xbox Series S",
            5: "Xbox One", 
            6: "Nintendo Switch",
            7: "PC",
        }
    },
    {
        name: "Fifa 23",
        category: "Sports",
        cost: "60.00",
        image: fifa23,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "PS4",
            3: "Xbox Series X",
            4: "Xbox Series S",
            5: "Xbox One",
            6: "Nintendo Switch",
            7: "PC",
        }
    },
    {
        name: "NBA 2K24",
        category: "Sports",
        cost: "70.00",
        image: nba2k24,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "PS4", 
            3: "Xbox Series X",
            4: "Xbox Series S",
            5: "Xbox One",
            6: "Nintendo Switch",
            7: "PC",
        }
    },
    {
        name: "MLB The Shows 23",
        category: "Sports",
        cost: "70.00", 
        image: mlbTheShow23,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "PS4",
            3: "Xbox Series X",
            4: "Xbox Series S",
            5: "Xbox One",
            6: "Nintendo Switch", 
        }
    },
    {
        name: "PGA Tour 2K23",
        category: "Sports",
        cost: "70.00",
        image: pgaTour2K23,
        inCart: false,
        id: uniqid(),
        quantity: 0,
        platforms: {
            1: "PS5",
            2: "PS4",
            3: "Xbox Series X",
            4: "Xbox Series S",
            5: "Xbox One",
            6: "PC",
        }
    }
]