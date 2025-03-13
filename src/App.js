import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import StyledNavLink from "./styled";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/zadania/:id" element={<TaskPage />} />
      <Route path="/zadania" element={<TasksPage />} />
      <Route path="/autor" element={<AuthorPage />} />
      <Route path="/" element={<Navigate to="/zadania" />} />
    </Routes>
  </HashRouter>
);

export default App;
