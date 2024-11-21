import { SpaceLaunchItem } from "./SpaceLaunchItem"

export const SpaceLaunchList = () => (
    <>
        <h1 className="text-4xl font-bold">martian chronicles</h1>

        <h2 className="text-2xl font-semibold mt-4">space launches</h2>
        <div className="container mt-4 max-w-md">
            <SpaceLaunchItem name="FalconSat" successful={true} date={new Date()} patchImageUrl="https://images2.imgbox.com/94/f2/NN6Ph45r_o.png" />
        </div>
    </>
)
