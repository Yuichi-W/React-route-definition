import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>404エラー！！ページが存在しません！！</h1>
      <Link to="/">TOPに戻る</Link>
    </div>
  );
};
