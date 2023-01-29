import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  // stateを持つことでユーザー情報などを維持したまま画面遷移ができる
  console.log(state);

  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>このページはPage1DetailAページです！！</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
