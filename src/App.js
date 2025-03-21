import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import { Nav, NavList, NavItem, StyledNavLink } from "./styled";

const App = () => (
  <HashRouter>
    <Nav>
      <NavList>
        <NavItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </NavItem>
      </NavList>
    </Nav>
    <Routes>
      <Route path="/zadania/:id" element={<TaskPage />} />
      <Route path="/zadania" element={<TasksPage />} />
      <Route path="/autor" element={<AuthorPage />} />
      <Route path="/" element={<Navigate to="/zadania" />} />
    </Routes>
  </HashRouter>
);

export default App;
