import React from "react";
import Layout from "./Layout";
import {
  Link,
  Switch,
  useRouteMatch,
  Route,
  useParams,
} from "react-router-dom";

const Topic = () => {
  let { id } = useParams();
  console.log(useParams());
  return <p>Este es mi tema {id}</p>;
};

const getDataFromAPI = [
  {
    topic: "react",
    title: "Learn React",
  },
  {
    topic: "kappawick",
    title: "Gaming",
  },
  {
    topic: "redux",
    title: "Learn Redux",
  },
];

const Topics = () => {
  let { path, url } = useRouteMatch();
  return (
    <Layout>
      <ul>
        {getDataFromAPI.map((value) => (
          <li>
            <Link to={`${url}/${value.topic}`}>{value.title}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route path={`${path}/:id`} component={Topic} />
        <Route path={path}>Esta es mi ruta Topics</Route>
      </Switch>
    </Layout>
  );
};

export default Topics;
