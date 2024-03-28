interface graphqlRequestProps {
  query: any;
}

export default async function graphqlRequest({ query }: graphqlRequestProps) {
  const url = process.env.WP_API_URL || "http://localhost/wordpress/graphql";
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify({ query }),
  });

  const data = await res.json();
  return data;
}
