const catItems = [
  {
    cat_id: 1,
    name: 'Misu',
    birthdate: '2020-05-12',
    weight: 4.5,
    owner: 'Matti',
    image: '...',
  },
  {
    cat_id: 2,
    name: 'Mirri',
    birthdate: '2019-10-01',
    weight: 5.1,
    owner: 'Maija',
    image: '...',
  },
];

const listAllCats = () => catItems;

const findCatById = (id) => catItems.find((item) => item.cat_id == id);

const addCat = (cat) => {
  const newId = catItems.length ? catItems[0].cat_id + 1 : 1;
  const newCat = {cat_id: newId, ...cat};
  catItems.unshift(newCat);
  return {cat_id: newId};
};

export {listAllCats, findCatById, addCat};
