// middleware专用NextAuth配置（因为传递给了auth，auth也能用）
// 如果只写在auth.js里就不能给middleware使用，因为middleware不能使用外部库
export const authConfig = {
  pages: { signIn: "/login" }, // authorized返回false时redirect到/login
  providers: [],
  callbacks: {
    async jwt({ token, user }) { // 取得user信息
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) { // session回调用于自定义session，这里添加了user信息
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) { // auth是从session中提取出来的，如果已经登录，可以获取user等信息
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin"); // 请求admin页面
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD

      if (isOnAdminPanel && !user?.isAdmin) { // 非admin用户请求admin页面，跳转到/login
        return false;
      }

      // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE

      if (isOnBlogPage && !user) { // 未登录请求blog页面，跳转到/login
        return false;
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

      if (isOnLoginPage && user) { // 已登录请求login页面，跳转到主页
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true; // 无权限限制，直接跳转
    },
  },
};
