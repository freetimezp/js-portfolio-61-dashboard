import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="flex h-screen bg-white dark:bg-slate-900">
      <section className="w-[10%] sm:w-[15%]">
        <Sidebar />
      </section>
      <section className="flex flex-col w-[90%] sm:w-[85%] overflow-auto">
        <Main />
      </section>
    </div>
  );
}

export default App;
