import { LaunchItem } from "@/components/launches/LaunchItem";

export default function Home() {
  return (
    <div className="container sm mx-auto mt-4">
      <h1 className="text-4xl font-bold">martian chronicles</h1>
      <div className="container mt-4 max-w-md">
        <LaunchItem />
      </div>
    </div>
  );
}