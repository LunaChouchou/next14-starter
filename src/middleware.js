import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

// 规定该中间件适用的URL，不包含以api, static, _next开头的路径, 文件扩展名
export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
