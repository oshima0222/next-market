import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = await request.headers.get("Authorization")?.split(" ")[1]
  // const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGV4YW1wbGUuY29tIiwiZXhwIjoxNzA4MTYyMzM3fQ.bPE_4uCVqYLKnUjuDb4N3ejSX1M8LT7E8-i9tG5sgQ0"
  if(!token) {
    return NextResponse.json({message: "トークンがありません"});
  }
  try {
    const secretKey = new TextEncoder().encode("next-market-app-book");
    const decodedJwt = await jwtVerify(token, secretKey);
    return NextResponse.next();
  } catch(err) {
    return NextResponse.json({message: "トークンが正しくないので、ログインしてください"});
  }
}

export const config = {
  matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}