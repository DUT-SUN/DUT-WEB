import React, { useContext, useState } from "react";
import { Button } from "antd";
import { MyContext } from "./MyProvider";
import { StateProps } from "../store/reducer";
import { Navigate, Link } from "react-router-dom";
// import Delete from "./Delete"
const idStyle = {
  width: "100px",
};
const style = {
  marginTop: "5px",
  padding: "5px 0",
  boxShadow: "0 0 3px #eee",
  width: "300px",
};
const style1 = {
  position: "absolute",
  left: "350px",
  width: "100px",
} as React.CSSProperties;
const style2 = {
  position: "absolute",
  left: "450px",
  background: "url(C:UserslenovoDesktop\react基础jsximage删除.png)",
} as React.CSSProperties;
const styleLink = {
  position: "absolute",
  left: "310px",
} as React.CSSProperties;
interface Iporps {
  todo: StateProps;
}

const TodoItem = ({ todo }: Iporps) => {
  // const {changedelete}=[Delete]
  const { dispatch } = useContext(MyContext);
  const changehandler = () => {
    dispatch({
      type: "CHANGEFINSISHED",
      id: todo.id,
    });
  };
  const spanStyle = {
    textDecoration: todo.isFinished ? "line-through" : "none",
  };
  // const ButtonX: React.FC<any> = Button as any;
  const [S, setS] = useState(["未开始", "未完成", "已完成"]);

  return (
    <div className="todo-item" style={style}>
      <span style={idStyle}>{todo.id}</span>

      <input
        type="checkbox"
        checked={todo.isFinished}
        onChange={changehandler}
      />
      <span style={spanStyle}>{todo.text}</span>
      <span>
        <select style={style1}>
          <option>未开始</option>
          <option>待完成</option>
          <option>已完成</option>
        </select>
      </span>
      <span>
        <button style={style2}>删除</button>
      </span>
      <Link style={styleLink} to={"./detail?id=123"}>
        详情
      </Link>
      <p>
        截止时间:{todo.text1}年{todo.text2}月{todo.text3}日{todo.text4}时
        {todo.text5}分
      </p>
      {/* <ButtonX type='link' style={styleButton}>123</ButtonX> */}
    </div>
  );
};
// onChange={changedelete}
export default TodoItem;
