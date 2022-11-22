import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Rootes";

export const Router = () => {
  return (
    // Linkを押下した際にどのコンポーネントをレンダリングするか設定
    <Switch>
      {/* exact（完全一致）これがないとpage1を押してもルート配下の物はHomeコンポーネントに飛ぶ */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/Page1"
        //ネストされたページ遷移　レンダーはデフォルトでpropsを受け取っている。その中のmatch関数を使うことでpage1（ルートファイル名）の打ち間違い
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/Page2"
        //ネストされたページ遷移　レンダーはデフォルトでpropsを受け取っている。その中のmatch関数を使うことでpage1（ルートファイル名）の打ち間違い
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      {/* ＊はすべて一致という意味 */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
