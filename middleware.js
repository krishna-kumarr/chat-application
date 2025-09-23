import { NextResponse } from "next/server";
import { decryptData } from "./utils/crypto";

function extractEncAndTrailing(pathname, sep = "enc") {
  const regex = new RegExp(`${sep}__(.+?)__${sep}(.*)`);
  const match = pathname.match(regex);
  return match ? { encrypted: match[1], trailing: match[2] } : null;
}

export async function middleware(req) {
  if (process.env.NEXT_PUBLIC_APP_ENV !== 'production') {
    return NextResponse.next();
  }

  const url = req.nextUrl;
  if (!url.pathname.startsWith("/secure") && !url.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Capture prefix (secure or api)
  const prefixMatch = url.pathname.match(/^\/(secure|api)\//);
  const prefix = prefixMatch ? `/${prefixMatch[1]}` : "";

  // Remove prefix from path
  const pathWithoutPrefix = url.pathname.replace(/^\/(secure|api)\//, "");

  // Extract encrypted + trailing
  const parsed = extractEncAndTrailing(pathWithoutPrefix, "enc");
  if (!parsed) return NextResponse.next();

  // Decrypt
  const decrypted = await decryptData(parsed.encrypted);
  if (decrypted?.url) {
    if (new Date(decrypted.expires_in) < new Date()) {
      return NextResponse.json({ error: "Endpoint expired" }, { status: 200 });
    }

    const newUrl = req.nextUrl.clone();
    // Re-add prefix + decrypted.url + trailing
    newUrl.pathname = `${prefix}/${decrypted.url}${parsed.trailing}`;
    return NextResponse.rewrite(newUrl);
  }

  return NextResponse.next();
}

// middleware config
export const config = {
  matcher: ["/secure/:path*", "/api/:path*"],
};
