import MainTable from "./components/mainTable";
import { useParams } from "react-router-dom";

export default function App() {
  const {count} = useParams()

  return (
    <section className="flex justify-center items-center flex-col gap-14 h-full">
      <h1 className="text-3xl font-bold font-f-cairo text-winner-70 text-center pt-4">
        بسم الله الرحمن الرحيم
      </h1>

      <MainTable count={+count}/>
    </section>
  );
}
