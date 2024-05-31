import { useState } from "react";
import ModulesCard from "./ModulesCard";
import Layout from "../../Layout";
import { Link } from "react-router-dom";

const ModulesPage = () => {
  const [cards] = useState([
    {
      theme: "bg-white",
      title: "App Development",
      team: "Marketing Team",
      timeLeft: "1 Weeks Left",
      members: [
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU",
      ],
      progress: "34%",
    },
    {
      theme: "bg-white",
      title: "Web Design",
      team: "Core UI Team",
      timeLeft: "3 Weeks Left",
      members: [
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      progress: "76%",
    },
    {
      theme: "bg-white",
      title: "Leading Page",
      team: "Marketing Team",
      timeLeft: "2 Days Left",
      members: [
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU",
      ],
      progress: "4%",
    },
    {
      theme: "bg-white",
      title: "Business Compare",
      team: "Marketing Team",
      timeLeft: "1 Month Left",
      members: [
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg",
      ],
      progress: "90%",
    },
  ]);

  return (
    <Layout>
      <Link
        className="  flex justify-center text-sm font-semibold shadow-sm 0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        to={`/modules/create`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
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
