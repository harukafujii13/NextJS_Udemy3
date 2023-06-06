import Link from "next/link";
function ClientPage() {
  const clients = [
    { id: "haruka", name: "Haruka" },
    { id: "max", name: "Max" },
  ];
  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}>
              {" "}
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;

//memo1
//The pathname property is set to "/clients/[id]", which represents the dynamic route pattern in Next.js.
//It indicates that the link points to a page that accepts a dynamic parameter called id.
//The square brackets around id indicate that it's a dynamic segment in the URL.

//The query property is an object with a single property id,
//which is set to the id value of the current client.
//This will be used as the dynamic parameter in the URL.
