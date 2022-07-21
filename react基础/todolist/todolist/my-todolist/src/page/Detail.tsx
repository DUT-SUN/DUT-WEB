import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
export default function Detail() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  let myid = params.getAll("id")[0];
  const goHome = () => {
    navigate("/", {
      state: { id: 789 },
    });
  };
  return (
    <div>
      <h2>详情页</h2>
      <button onClick={goHome}>调转首页</button>
    </div>
  );
}
