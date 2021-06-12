import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div class="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div class="incomplete-area">
        <p class="title">未完了のTODO</p>
        <ul>
          <li class="list-row">
            <div class="div-row">
              <p>ああああ</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li class="list-row">
            <div class="div-row">
              <p>いいいい</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="complete-area">
        <p class="title">完了のTODO</p>
        <ul>
          <li class="list-row">
            <div class="div-row">
              <p>うううう</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
