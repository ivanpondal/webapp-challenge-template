import { SpaceLaunchItem } from "@/components/space-launch/SpaceLaunchItem";

export default function Home() {
  return (
    <div className="container sm mx-auto mt-4">
      <h1 className="text-4xl font-bold">martian chronicles</h1>
      <div className="container mt-4 max-w-md">
        <SpaceLaunchItem name="FalconSat" successful={true} date={new Date()} patchImageUrl="https://images2.imgbox.com/94/f2/NN6Ph45r_o.png" />
      </div>
    </div>
  );
}