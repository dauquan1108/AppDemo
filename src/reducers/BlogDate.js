import * as types from '../constants/ActionType';
import avatar from '../assets/avatar.jpg';
import background from '../assets/nen.jpg';

let blog = [
  {
    id: 1,
    names: 'Đậu Xuân Quân',
    avatar: avatar,
    background: background,
    phone: [
      {id: 1, phone: '0387091106'},
      {id: 2, phone: '0973433709'},
    ],
  },
];

const BlogDate = (state = blog, action) => {
  switch (action.type) {
    // case types.DELETE_ITEM:
    //   const id = action.payload;
    //   const deleteItem = state.filter(todo => todo.id !== id);
    //   return [...state]
    default:
      return [...state];
  }
};
export default BlogDate;
