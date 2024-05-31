import React, { useEffect, useState } from "react";
import axios from "axios";
import ModulesCard from "./ModulesCard";
import Layout from "../../Layout";
import { Link } from "react-router-dom";

const ModulesPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get('http://localhost:8080/api/pedagogiceElement/all', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log("Modules:", response.data);
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

    fetchModules();
  }, []);

  return (
    <Layout>
      <Link
        className="flex justify-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        to={`/modules/create`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
          />
        </svg>
      </Link>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {cards.map((card, index) => (
            <ModulesCard key={index} {...card} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ModulesPage;
