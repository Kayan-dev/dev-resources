import React, { useState } from "react";
import {
  selectDevelopersWithFavorite,
  selectLoggedinUser,
  selectDevelopers,
  selectListofResources,
} from "./store/selectors";
import { selectDevelopersFavoritesResources } from "./store/selectors";
import "./App.css";
import { useSelector } from "react-redux";
import ResourcesSection from "./components/ResourceSection/ResourcesSection";
import AddResourceForm from "./components/AddResourceForm";

const selectStatistics = (state) => {
  return {
    numDevelopers: state.developers.length,
    numResources: state.resources.length,
  };
};

function App() {
  //Selectors
  const loggedinUser = useSelector(selectLoggedinUser);
  const statistics = useSelector(selectStatistics);
  const resources = useSelector(selectListofResources);
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

  console.log("user", loggedinUser);

  return (
    <div className="App">
      <p
        style={{
          margin: "1rem 0 2rem 0",
          padding: "0.5rem",
          background: "#eee",
        }}
      >
        Welcome back, <strong>{loggedinUser.name}</strong>!
      </p>
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
      <ResourcesSection></ResourcesSection>
      <AddResourceForm></AddResourceForm>
    </div>
  );
}

export default App;
