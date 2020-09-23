import React, { useState } from "react";
import { selectDevelopersWithFavorite } from "./store/selectors";
import { selectDevelopersFavoritesResources } from "./store/selectors";
import "./App.css";
import { useSelector } from "react-redux";

const selectStatistics = (state) => {
  return {
    numDevelopers: state.developers.length,
    numResources: state.resources.length,
  };
};
const selectResources = (state) => {
  return state.resources;
};
const selectDevelopers = (state) => {
  return state.developers;
};

function App() {
  //Selectors
  const statistics = useSelector(selectStatistics);
  const resources = useSelector(selectResources);
  const developers = useSelector(selectDevelopers);
  //Local states
  const [developerId, setDeveloperId] = useState(2);
  const [favoriteId, setFavoriteId] = useState(2);

  //parametrized selectors
  const developersWithThisFavorite = useSelector(
    selectDevelopersWithFavorite(favoriteId)
  );
  const favoriteResources = useSelector(
    selectDevelopersFavoritesResources(developerId)
  );

  return (
    <div className="App">
      <h1>Web development resources</h1>
      <div className="statistics">
        <div className="statistic">
          <div className="statistic__num">{statistics.numDevelopers}</div>
          <p>developers</p>
        </div>
        <div className="statistic">
          <div className="statistic__num">{statistics.numResources}</div>
          <p>resources</p>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "2rem" }}>
          <h2>
            Who likes{" "}
            <select
              value={favoriteId}
              onChange={(e) => setFavoriteId(parseInt(e.target.value))}
            >
              {resources.map((resource) => {
                return (
                  <option key={resource.id} value={resource.id}>
                    {resource.name}
                  </option>
                );
              })}
            </select>
            ?
          </h2>
          <ul>
            {developersWithThisFavorite.map((dev) => {
              return <li key={dev.id}>{dev.name}</li>;
            })}
          </ul>
        </div>

        <div>
          <h2>
            What are{" "}
            <select
              value={developerId}
              onChange={(e) => setDeveloperId(parseInt(e.target.value))}
            >
              {developers.map((dev) => {
                return (
                  <option key={dev.id} value={dev.id}>
                    {dev.name}
                  </option>
                );
              })}
            </select>
            's favorites?
          </h2>
          <ul>
            {favoriteResources.map((resource) => {
              return <li key={resource.id}>{resource.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
