import { Card } from "./ui/card"

const Fallback = () => {
    return (
        <Card className='hidden lg:flex h-full w-full p-2 items-center justify-center bg-secondary text-secondary-foreground'>
            Select/start conversation to get started
        </Card>
    )
}

export default Fallback