
export default async function SpaceLaunchDetail({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    return (
        <h2>I&apos;m a space launch detail {(await params).id} </h2>
    )
}