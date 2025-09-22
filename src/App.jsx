import useGlobalContext from "./hooks/useGlobalContext";

const App = () => {
  const { isSidebarOpen } = useGlobalContext();
  console.log(isSidebarOpen);
  return <h2>React Dynamic Navbar</h2>;
};

export default App;
