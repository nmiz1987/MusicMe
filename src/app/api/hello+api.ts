// It is safe to use secret keys here HAS LONG AS YOU DON'T IMPORT THIS FILE TO A CLIENT SIDE FILE, see more: https://docs.expo.dev/router/reference/api-routes/#security

export function GET(request: Request) {
  return Response.json({ hello: 'world' });
}

export async function POST(request: Request) {
  const body = await request.json();

  return Response.json(body);
}
