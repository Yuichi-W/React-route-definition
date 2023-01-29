import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";
// UrlParameterを扱う場合はpathの記載方法に注意「:」の後にパラメーター名（何でもよい）を記載
export const page2Routers = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
