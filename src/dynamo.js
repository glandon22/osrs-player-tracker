const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema(
    {
      username: {
        type: String,
        hashKey: true,
      },
      unix_timestamp: {
        type: Number,
        rangeKey: true,
      },
      game_mode: {
        type: String,
      },
      overall: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    attack: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    defence: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    strength: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    hitpoints: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    ranged: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    prayer: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    magic: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    cooking: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    woodcutting: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    fletching: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    fishing: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    firemaking: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    crafting: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    smithing: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    mining: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    herblore: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    agility: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    thieving: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    slayer: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    farming: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    runecrafting: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    hunter: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    construction: {
        type: Object,
        schema: {
            rank: Number,
            xp: Number,
            level: Number
        }	
    },
    abyssal_sire: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    alchemical_hydra: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    artio: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    barrows_chests: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    bryophyta: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    callisto: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    calvarion: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    cerberus: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    chambers_of_xeric: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    chambers_of_xeric_challenge_mode: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    chaos_elemental: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    chaos_fanatic: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    commander_zilyana: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    corporeal_beast: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    crazy_archaeologist: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    dagannoth_prime: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    dagannoth_rex: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    dagannoth_supreme: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    deranged_archaeologist: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    duke_sucellus: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    general_graardor: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    giant_mole: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    grotesque_guardians: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    hespori: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    kalphite_queen: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    king_black_dragon: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    kraken: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    kreearra: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    kril_tsutsaroth: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    lunar_chests: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    mimic: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    nex: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    nightmare: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    phosanis_nightmare: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    obor: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    phantom_muspah: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    sarachnis: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    scorpia: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    scurrius: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    skotizo: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    sol_heredit: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    spindel: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    tempoross: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    the_gauntlet: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    the_corrupted_gauntlet: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    the_leviathan: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    the_whisperer: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    theatre_of_blood: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    theatre_of_blood_hard_mode: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    thermonuclear_smoke_devil: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    tombs_of_amascut: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    tombs_of_amascut_expert: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    tzkal_zuk: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    tztok_jad: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    vardorvis: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    venenatis: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    vetion: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    vorkath: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    wintertodt: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    zalcano: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }	
    },
    zulrah: {
        type: Object,
        schema: {
            rank: Number,
            kc: Number
        }
    }
    },
    {
      timestamps: true,
    }
);

const PlayersModel = dynamoose.model('osrs-users', schema, {
    create: false
});

module.exports = { PlayersModel };