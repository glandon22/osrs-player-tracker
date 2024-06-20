const axios = require('axios');
const { PlayersModel } = require('./dynamo');

const dataOrder = [
    'overall',
    'attack',
    'defence',
    'strength',
    'hitpoints',
    'ranged',
    'prayer',
    'magic',
    'cooking',
    'woodcutting',
    'fletching',
    'fishing',
    'firemaking',
    'crafting',
    'smithing',
    'mining',
    'herblore',
    'agility',
    'thieving',
    'slayer',
    'farming',
    'runecrafting',
    'hunter',
    'construction',
    'abyssal_sire',
    'alchemical_hydra',
    'artio',
    'barrows_chests',
    'bryophyta',
    'callisto',
    'calvarion',
    'cerberus',
    'chambers_of_xeric',
    'chambers_of_xeric_challenge_mode',
    'chaos_elemental',
    'chaos_fanatic',
    'commander_zilyana',
    'corporeal_beast',
    'crazy_archaeologist',
    'dagannoth_prime',
    'dagannoth_rex',
    'dagannoth_supreme',
    'deranged_archaeologist',
    'duke_sucellus',
    'general_graardor',
    'giant_mole',
    'grotesque_guardians',
    'hespori',
    'kalphite_queen',
    'king_black_dragon',
    'kraken',
    'kreearra',
    'kril_tsutsaroth',
    'lunar_chests',
    'mimic',
    'nex',
    'nightmare',
    'phosanis_nightmare',
    'obor',
    'phantom_muspah',
    'sarachnis',
    'scorpia',
    'scurrius',
    'skotizo',
    'sol_heredit',
    'spindel',
    'tempoross',
    'the_gauntlet',
    'the_corrupted_gauntlet',
    'the_leviathan',
    'the_whisperer',
    'theatre_of_blood',
    'theatre_of_blood_hard_mode',
    'thermonuclear_smoke_devil',
    'tombs_of_amascut',
    'tombs_of_amascut_expert',
    'tzkal_zuk',
    'tztok_jad',
    'vardorvis',
    'venenatis',
    'vetion',
    'vorkath',
    'wintertodt',
    'zalcano',
    'zulrah'
];

const parseUserData = (data, username, game_mode='standard') => {
    const userObject = {
        username,
        game_mode,
        unix_timestamp: Date.now()
    }
    // split out skills and boss kc
    const individualDataPoints = data.split('\n');
    for (const [i, item] of individualDataPoints.entries()) {
        // boss kc only has two points, rank and kc while skills have three (xp)
        const [rank, levelOrKC, xp=null] = item.split(',');
        const dataPointTitle = dataOrder[i];
        if (dataPointTitle == undefined) continue;
        
        if (xp !== null) {
            userObject[dataPointTitle] = {
                rank: parseInt(rank),
                level: parseInt(levelOrKC),
                xp: parseInt(xp)
            }
        }
        
        else {
            userObject[dataPointTitle]  = {
                rank: parseInt(rank),
                kc: parseInt(levelOrKC),
            }
        }
    }

    return userObject;
}

async function fetchHiscoreDataForUser(username) {
    if (!username) {
        return 'no username'
    }
    const userData = await axios.get(`https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${username}`);
    if (!userData.data || userData.status != 200) {
        return 'jagex error'
    }

    const parsed = parseUserData(userData.data, username);
    try {
        const result = await PlayersModel.create(parsed);
        console.log('dynamo write result: ', result);
    } catch(error) {
        console.log('encountered an error writing to dynamo', error);
    }
    return;
}

module.exports = {
    fetchHiscoreDataForUser
}