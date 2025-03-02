import { createSlice } from '@reduxjs/toolkit';

const products = [
  { id: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoT7nK1GW6R7Scqeb2WgpXdDbLOXsNyTRMg&s', name: 'Телевизор', descriptions: 'Описание товара 1', price: 999, stock: 10, rating: 4.5, available: true, category: 'Техника', characteristics: [{ color: 'black' }, { diagonal: 100 }, { made: 'USA' }], reviews: [{ id: 1, productId: 1, userId: 1, name: "Иван", comment: "Отличный ноутбук!", rating: 4.5 }], },
  { id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktwbIzv3M36wWosmq5k0up9PwNgGGws9zuA&s', name: 'Холодильник', descriptions: 'Описание товара 2', price: 9999, stock: 100, rating: 4, available: true, category: 'Техника', characteristics: [{ color: 'white' }, { freezing: true }, { height: 2.2 }, { width: 0.7 }, { made: 'Germany' }], reviews: [{ id: 1, productId: 1, userId: 1, name: "Петр", comment: "Отличный холодильник!", rating: 4 }, { id: 2, productId: 1, userId: 2, name: "Василий", comment: "Замечательный холодильник!", rating: 5 }, { id: 3, productId: 1, userId: 3, name: "Николай", comment: "Пойдет!", rating: 3 }], },
  { id: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXPexcjWKwRRc6nP0Fq1qPMElgn6KeUBlIQ&s', name: 'Шуруповерт', descriptions: 'Описание товара 3', price: 365, stock: 2, rating: 3.5, available: true, category: 'Строительная техника', characteristics: [{ color: 'blue' }, { power: 250 }, { made: 'Russia' }], reviews: [{ id: 1, productId: 1, userId: 2, name: "Алексей", comment: "Хороший шурик!", rating: 3.5 }], },
  { id: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcWBd7WG5iG2dpy0y2o8MuyFX_XJu_hLmTA&s', name: 'Туфли', descriptions: 'Описание товара 4', price: 21, stock: 0, rating: 3, available: false, category: 'Обувь', characteristics: [{ color: 'red' }, { size: 40, }, { made: 'Japan' }], reviews: [{ id: 1, productId: 1, userId: 1, name: "Алена", comment: "Так себе туфли!", rating: 3 }], },
  { id: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkhBt4GD2jV8KR083kjtOzbMc2DEoOkMCUrQ&s', name: 'Кофта', descriptions: 'Описание товара 5', price: 100, stock: 1, rating: 2.5, available: true, category: 'Одежда', characteristics: [{ color: 'gray' }, { size: 'L' }, { made: 'Finland' }], reviews: [{ id: 1, productId: 1, userId: 1, name: "Дмитрий", comment: "Хреновая кофта", rating: 2.5 }], },
  { id: 6, img: 'https://cdn-img.perekrestok.ru/i/800x800-fit/xdelivery/files/c1/4e/c1293a98c533342638ff64eec5ae.jpg', name: 'Огурцы', descriptions: 'Описание товара 6', price: 544, stock: 500, rating: 1, available: true, category: 'Еда', characteristics: [{ made: 'Russia' }], reviews: [{ id: 1, productId: 1, userId: 1, name: "Павел", comment: "Самые плохие огрцы которые я ел!", rating: 1 }], }
]

const productSlice = createSlice({
  name: 'products',
  initialState: products,
  reducers: {
    add: (state, action) => {
      state.push(action.payload); // Добавляем новый товар в массив
    },
    remove: (state, action) => state.filter(product => product.id !== action.payload),
    edit: (state, action) => {
      const { id, updatedProduct } = action.payload;

      const product = state.find(product => product.id === id);
      if (product) {
        product.characteristics = updatedProduct.characteristics;
        Object.assign(product, updatedProduct);
      }
    }
  }
});

export const { remove, edit, add } = productSlice.actions;
export default productSlice.reducer;