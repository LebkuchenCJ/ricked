import React, { useState } from "react";
import AppHeader from "../components/main/AppHeader";
import InputPlanets from "../components/main/InputPlanets";
import AppMain from "../components/main/AppMain";
import List from "../components/main/List";
import LoadingScreen from "../components/loading/Loading";
import { useQuery } from "react-query";
import { fetchEpisodes, fetchEpisodeName } from "../api/rickedApi";
import EpisodeList from "../components/main/EpisodeList";

function Episodes() {
  const [episodes, setEpisodes] = useState(null);
  const [query, setQuery] = useState("");

  let { data, status } = useQuery("episodes", fetchEpisodes);

  let timeOutId;

  function handleChange(input) {
    setQuery(input);
    clearTimeout(timeOutId);
    timeOutId = setTimeout(async () => {
      const results = await fetchEpisodeName(query);
      setEpisodes(results);
    }, 300);
  }
  if (episodes != null) {
    data = episodes;
  }

  return (
    <>
      <AppHeader>
        <h1>Epsiodes</h1>
        <InputPlanets
          value={query}
          handleChange={(value) => handleChange(value)}
        />
      </AppHeader>
      <AppMain>
        <List>
          {status === "loading" && <LoadingScreen />}
          {status === "error" && <div>Error</div>}
          {status === "success" && (
            <>
              {data.map((episode) => (
                <EpisodeList key={episode.name} episode={episode} />
              ))}
            </>
          )}
        </List>
      </AppMain>
    </>
  );
}

export default Episodes;
