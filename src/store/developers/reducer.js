// src/store/user/reducer.js
// src/store/user/reducer.js
const initialState = {
  developers: [
    {
      id: 1,
      name: "Kelley",
      website: "https://hi-im-kelley.netlify.com",
      favorites: [2, 3, 4, 5],
    },
    {
      id: 2,
      name: "Danny",
      website: "unknown",
      favorites: [1, 3, 6],
    },
    {
      id: 3,
      name: "Efe",
      website: "too lazy",
      favorites: [1, 2, 3, 6],
    },
  ],
};

export default function developerSliceReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
