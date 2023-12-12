import { Request as ExpressRequest, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthenticatedRequest extends ExpressRequest {
  user?: JwtPayload; // Add your custom user property here
}

const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): any => {
  const authHeader: any = req.headers["x-auth"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(404).json({ error: "Token not found" });
  }

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err: any, user: any) => {
      if (err) {
        return res.status(401).json({ error: "You are not authorized" });
      }

      if (user) {
        req.user = user;
        next();
      } else {
        res.status(401).json({ error: "Invalid token" });
      }
    }
  );
};

export default authenticateToken;
