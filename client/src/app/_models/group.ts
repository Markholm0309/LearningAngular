export interface Group {
    name: string;
    Connections: Connection[]
}

interface Connection {
    connectionId: number;
    username: string;
}