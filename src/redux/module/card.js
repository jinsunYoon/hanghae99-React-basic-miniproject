import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

// Actions (액션 타입을 정해준다.)
const LOAD = "card/LOAD";
const CREATE = "card/CREATE";

// 초기 상태값
const initialState = {
  list: [],
};

// Action Creators
export function loadCard(my_lists) {
  return { type: LOAD, my_lists };
}

export function createCard(card) {
  return { type: CREATE, card: card };
}

//middlewares
export const loadCardFB = () => {
  return async function (dispatch) {
    const card_data = await getDocs(collection(db, "vocabulary"));
    let my_lists = [];
    card_data.forEach((c) => {
      my_lists.push({ id: c.id, ...c.data() });
    });
    dispatch(loadCard(my_lists));
  };
};

export const addCardFB = (card) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "vocabulary"), card);
    const card_data = { id: docRef.id, ...card };
    dispatch(createCard(card_data));
  };
};

// Reducer (실질적으로 store에 있는 데이터를 변경하는 곳)
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "card/LOAD": {
      return { list: action.my_lists };
    }

    case "card/CREATE": {
      // console.log(state.list);
      const new_card_list = [...state.list, action.card];
      return { list: new_card_list };
    }

    default:
      return state;
  }
}
