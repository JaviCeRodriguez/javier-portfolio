import { NextResponse, type NextRequest } from "next/server";
import { verifyAccess, type ApiData } from "@vercel/flags";

export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get("Authorization"));
  if (!access) return NextResponse.json(null, { status: 401 });

  return NextResponse.json<ApiData>({
    definitions: {
      // The flag is defined here and should be the same as @/flags/index.ts
      experiences: {
        description: "Section to show the experiences",
        options: [
          { value: false, label: "Off" },
          { value: true, label: "On" },
        ],
      },
    },
  });
}
