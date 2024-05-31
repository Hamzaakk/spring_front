import AllDepartement from "../Compenent/Admin/Pages/Departement/AllDepartement";
import CreatDepartment from "../Compenent/Admin/Pages/Departement/CreatDepartment";
import CreateElem from "../Compenent/Admin/Pages/ElemenetPedacogical/CreateElem";
import ModulesPage from "../Compenent/Admin/Pages/ElemenetPedacogical/ModulesPage";
import AllExams from "../Compenent/Admin/Pages/Exam/AllExams";
import CreateExam from "../Compenent/Admin/Pages/Exam/CreateExam";
import CreateExamForm from "../Compenent/Admin/Pages/Exam/CreateExamForm";
import ElemPedago from "../Compenent/Admin/Pages/Exam/ElemPedago";
import FiledExam from "../Compenent/Admin/Pages/Exam/FiliedExam";
import Monitoring from "../Compenent/Admin/Pages/Exam/Monitoring";
import AllGroups from "../Compenent/Admin/Pages/Group/AllGroups";
import CreateGroupForm from "../Compenent/Admin/Pages/Group/CreateGroupForm";
import GroupWithProfs from "../Compenent/Admin/Pages/Group/GroupWithProfs";
import NotFound from "../Compenent/Admin/Pages/NotFound";
import AllProfs from "../Compenent/Admin/Pages/Prof/AllProfs";
import CreateProf from "../Compenent/Admin/Pages/Prof/CreateProf";
import EditProf from "../Compenent/Admin/Pages/Prof/EditProf";
import CreatAdmin from "../Compenent/Admin/Pages/Users/CreatAdmin";
import Users from "../Compenent/Admin/Pages/Users/Users";
import Login from "../Compenent/Auth/Login";
import { createBrowserRouter } from "react-router-dom";
import SuccessOperation from "../Compenent/Utilites/SuccessOperation";
import ExamDetails from "../Compenent/Admin/Pages/Exam/ExamDetails";

export const router = createBrowserRouter([
  {
    path : "/*",
    element: <NotFound />, // Route for the NotFound component
  },
  {
    path: "/",
    element: <Login />,
  },

  {
    path: '/admin/creaet',
    element : <CreatAdmin/>
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
    path: "/profs/create",
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
    path: "/groups/group/:name/:id",
    element: <GroupWithProfs />,
  },
  {
    path: "/groups/group/add",
    element: <CreateGroupForm />,
  },

  {
    path: "/exams",
    element: <CreateExam />,
  },
  {
    path: "/exams/department/:id",
    element: <FiledExam />,
  },

  {
    path: "/exams/departement/:id/:idfil",
    element: <ElemPedago />,
  },

  {
    path: "/exams/departement/:id/:idfil/:idel/:idType",
    element: <CreateExamForm />,
  },

  {
    path: "/allExams",
    element: <AllExams />,
  },

  {
    path : "/allExams/exam/detail/:id",
    element : <ExamDetails/>,
  },

  {
    path: "test",
    element: <Monitoring />,
  },


  {
    path : "/modules",
    element : <ModulesPage/>
  },

  {
    path : "/modules/create",
    element : <CreateElem/>
  },

  {
    path:'/departments',
    element :<AllDepartement/>

  },
  {
    path:'/departments/create',
    element :<CreatDepartment/>

  }
  ,
  {
    path :'/success',
    element :<SuccessOperation/>
  }
]);




// import React from 'react';

// const ModulesCard = ({ title, prof_coordinateur, prof_ensg }) => {
//   return (
//     <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
//       <h3 className="mb-3 text-xl font-bold text-indigo-600">{title}</h3>
//       <div className="mt-4 text-gray-800">
//         <p className="text-lg font-bold">Coordinator:</p>
//         <p>{prof_coordinateur.firstName} {prof_coordinateur.lastName}</p>
//         <p>{prof_coordinateur.email}</p>
//         <p className="text-lg font-bold mt-4">Professor:</p>
//         <p>{prof_ensg.firstName} {prof_ensg.lastName}</p>
//         <p>{prof_ensg.email}</p>
//       </div>
//     </div>
//   );
// };

// export default ModulesCard;
