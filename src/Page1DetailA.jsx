//useLocationを使ってsutateの確認
import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  // const location = useLocation();
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  const onClickBack = () => history.push("/page1");

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
