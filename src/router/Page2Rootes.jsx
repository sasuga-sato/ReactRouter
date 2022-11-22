import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    //:を書くことでid(名前は何でもよい)はURLパラメーターとして受け取る。 link名とパスを一致させる
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
