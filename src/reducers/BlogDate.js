import * as types from '../constants/ActionType';
import avatar from '../assets/avatar.jpg';
import background from '../assets/nen.jpg';

let blog = [
  {id: 1, names: 'Đậu Xuân Quân', avatar: avatar, background: background},
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
