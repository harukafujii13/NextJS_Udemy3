import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Project of a Given Client</h1>
    </div>
  );
}

export default ClientProjectPage;

//The useRouter hook is then used to access the router object, which provides information
//about the current route, including the query parameters. In this code, router.query is
//logged to the console, which would display the query parameters passed in the URL.
