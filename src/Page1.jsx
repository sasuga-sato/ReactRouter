import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  // javascriptで画面遷移
  const history = useHistory();
  const onClickDetailA = () => history.push("/Page1/Page1DetailA");

  return (
    <div>
      <h1>Page1ページです</h1>
      {/* pathnameを使うとオブジェクトとして扱えるショートハンドの書き方
      ショートハンドとは、複数のプロパティをまとめて１つのプロパティで指定する
      方法 　
      state*/}
      <Link to={{ pathname: "/page1/Page1DetailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/Page1/Page1DetailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
