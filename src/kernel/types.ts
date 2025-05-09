export type Entity<Tidentifier extends string> ={
    id?: Tidentifier
}

export type ResponseApi<T> = {
    code: number,
    error?: boolean,
    message?: string,
    entity?: T,
    entities?: T[],
    count?: number
}