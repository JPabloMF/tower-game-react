const getItemType = (type, life, damage) => ({ type, life, damage });

const getBoxType = (type, item = 'none') => ({ type, item });

export const MIDDLE_AGE_MAP = [
  [
    getItemType('cannon', 30, 5),
    getItemType('tower', 100, 10),
    getItemType('cannon', 30, 5),
  ],
  [getBoxType('grass'), getBoxType('grass'), getBoxType('grass')],
  [getBoxType('wood'), getBoxType('water'), getBoxType('wood')],
  [getBoxType('grass'), getBoxType('grass'), getBoxType('grass')],
  [
    getItemType('cannon', 30, 5),
    getItemType('tower', 100, 10),
    getItemType('cannon', 30, 5),
  ],
];
