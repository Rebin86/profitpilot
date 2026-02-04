import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/", // sender brukeren til forsiden for login
  },
});

export const config = {
  matcher: ["/dashboard/:path*", "/campaign/:path*", "/campaigns/:path*"],
};
