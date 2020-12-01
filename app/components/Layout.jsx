import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50 h-full">
      <Head>
        <title>Rentspree DemoApp</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <header className="fixed w-full p-2 bg-blue-500 text-white top-0">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <h6 className="text-2xl font-bold">Rentspree DemoApp</h6>
          </div>
        </div>
      </header>
      <div className="mt-10 py-5">
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
