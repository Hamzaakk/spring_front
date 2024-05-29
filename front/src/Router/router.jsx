import Layout from "../Compenent/Admin/Layout";
import AllGroups from "../Compenent/Admin/Pages/Group/AllGroups";
import CreateGroupForm from "../Compenent/Admin/Pages/Group/CreateGroupForm";
import GroupWithProfs from "../Compenent/Admin/Pages/Group/GroupWithProfs";
import AllProfs from "../Compenent/Admin/Pages/Prof/AllProfs";
import CreateProf from "../Compenent/Admin/Pages/Prof/CreateProf";
import EditProf from "../Compenent/Admin/Pages/Prof/EditProf";
import Users from "../Compenent/Admin/Pages/Users/Users";
import Login from "../Compenent/Auth/Login";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/users",
      element: <Users />,
    },


    {
      path: "/profs",
      element: <AllProfs />,
    },

    {
      path: "/profs/creaet",
      element: <CreateProf />,
    },

    
    {
      path: "/profs/edit/:id",
      element: <EditProf />,
    },

    {
      path: "/groups",
      element: <AllGroups />,
    },
    {
      path: "/groups/group/:id",
      element: <GroupWithProfs />,
    },
    {
      path: "groups/group/add",
      element: <CreateGroupForm />,
    },

    
    

])