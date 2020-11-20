// src/store/developers/selectors.js

function average(numbers) {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

export const selectDevelopers = (state) => {
  return state.developers;
};

export const selectDeveloperStatistics = (state) => {
  return {
    num: state.developers.length,
    numWithWebsite: state.developers.filter((dev) => !!dev.website).length,
    numWithoutFavorites: state.developers.filter(
      (dev) => dev.favorites.length === 0
    ).length,
    avgNumberOfFavorites: average(
      state.developers.map((dev) => dev.favorites.length)
    ),
  };
};

export const selectDevelopersWithFavorite = (favoriteId) => (state) => {
  return state.developers.filter((dev) => dev.favorites.includes(favoriteId));
};

export const selectDevelopersFavoritesResources = (developerId) => (state) => {
  const developer = state.developers.find((dev) => dev.id === developerId);
  if (!developer) {
    return [];
  }
  return state.resources.filter((resource) => {
    return developer.favorites.includes(resource.id);
  });
};

export const selectLoggedinUser = (state) => {
  return state.developers.find((dev) => dev.id === state.user.id);
};

export const selectListofResources = (state) => {
  return state.resources;
};
