import _ from 'lodash';

const shuffleItems = (array) => !_.isNil(array) && _.shuffle(array);

const findItemById = (items, itemId) =>
  items.find((item) => item.id === itemId);

const updateItemByIndex = (items, itemId, props) =>
  items.map((item) => {
    if (item.id === itemId) {
      return {
        ...item,
        ...props,
      };
    } else {
      return item;
    }
  });

const updateItemsByIndex = (items, idsArray, props) =>
  items.map((item) => {
    if (idsArray.includes(item.id)) {
      return {
        ...item,
        ...props,
      };
    } else {
      return item;
    }
  });

export { shuffleItems, findItemById, updateItemByIndex, updateItemsByIndex };
