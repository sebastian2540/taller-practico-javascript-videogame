/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '🚪',
    'X': '💣',
    'I': '🎁',
    'PLAYER': '💀',
    'BOMB_COLLISION': '🔥',
    'GAME_OVER': '👎',
    'WIN': '🏆',
  };
  
  const maps = [];
  maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    ----XXXXXX
    XXX-XXXXXX
    XXX-XXXXXX
    XXX-XXXXXX
    -XX-XXXXXX
    -XX-XXXXXX
    ----XXXXXX
    OXXXXXXXXX
  `);
  maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X--XXX-XXX
    XX-XXX--XX
    XX---XX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
  maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-------X
    XXXXXX-X-X
    XX-----X-X
    XX-XXXXX-X
    XX-----O-X
    XXXXXXXXXX
  `);  