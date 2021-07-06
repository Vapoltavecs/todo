import { useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import Form from "../form/form";
import RegistratedForm from "../form/registrated/registratedForm";
import NavBar from "../NavBar/NavBar";
import CreateTask from "../pages/create/createTask";
import TasksPage from "../pages/tasks/tasksPage";
import Spinner from "../spinner/Spinner";
const RouteComponent = () => {
  const isMatch = useSelector((state) => state.AuthReducer.isMatch);
  const isLoaded = useSelector((state) => state.setLoading.isLoading);

  return (
    <BrowserRouter>
      <div>
        {isMatch ? (
          <div>
            <NavBar />
            <Route path="/tasks" component={TasksPage} />
            <Route path="/create" component={CreateTask} />
          </div>
        ) : !isLoaded ? (
          <div>
            <Route exact path="/" component={Form} />
            <Route path="/registrated" component={RegistratedForm} />
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </BrowserRouter>
  );
};

export default RouteComponent;
