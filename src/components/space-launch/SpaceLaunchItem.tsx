import { Card, CardTitle, CardDescription, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


type SpaceLaunchItemProps = {
    name: string;
    successful: boolean;
    date: Date;
    patchImageUrl: string;
}

export const SpaceLaunchItem = ({ name, successful, date, patchImageUrl }: SpaceLaunchItemProps) => (
    <Card>
        <div className="flex flex-row p-6">
            <Avatar className="w-12 h-12 mr-4">
                <AvatarImage src={patchImageUrl} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardHeader className="p-0 justify-center">
                <CardTitle>{name}</CardTitle>
                <CardDescription>{date.toLocaleDateString()}</CardDescription>
            </CardHeader>
        </div>

        <CardContent>

            {successful ? "OK" : "FAILED"}
        </CardContent>
    </Card>
)