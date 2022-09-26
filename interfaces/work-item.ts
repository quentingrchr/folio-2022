export default interface IWorkItem {
    id: number;
    title: string;
    description: string;
    titleWidth?: number;
    data?: {
        year: number;
        image: {
            src: string;
        }
        details: string
        meta: {
            stack: string[]
            releaseYear: number
            client: string
        }

    }
}
