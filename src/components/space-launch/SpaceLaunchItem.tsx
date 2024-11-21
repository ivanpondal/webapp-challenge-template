import { Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Skeleton } from "../ui/skeleton";


type SpaceLaunchItemProps = {
    name: string;
    successful: boolean;
    date: Date;
    patchImageUrl: string;
}

export const SpaceLaunchItem = ({ name, date, patchImageUrl }: SpaceLaunchItemProps) => (
    <Card>
        <div className="flex flex-row p-6">
            <Avatar className="w-12 h-12 mr-4">
                <AvatarImage src={patchImageUrl} />
                <AvatarFallback>
                    <Skeleton className="w-12 h-12 rounded-full" />
                </AvatarFallback>
            </Avatar>
            <CardHeader className="p-0 justify-center">
                <CardTitle>{name}</CardTitle>
                <CardDescription>{date.toLocaleDateString()}</CardDescription>
            </CardHeader>
        </div>
    </Card>
)