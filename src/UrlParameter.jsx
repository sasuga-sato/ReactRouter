import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  // useParamsでURLパラメータの受け取りができるようになる。
  const { id } = useParams();
  //useLocation(Hooks（フックス）と呼ばれる関数群)内にあるserchを使うとクエリパラメーターが使えるようになる
  const { search } = useLocation();
  //クエリパラメータを便利に扱える為のメソッドを提供してくれる
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは{id}です。</p>
      <p>クエリパラメータ―は{query.get("name")}</p>
    </div>
  );
};
