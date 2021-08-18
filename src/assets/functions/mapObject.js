export const changeObjectInArray = (items, objectProp, compareProp, changedPart) =>
   items.map(item => {
      if (item[objectProp] === compareProp) {
         return { ...item, ...changedPart }
      }
      return item;
   })