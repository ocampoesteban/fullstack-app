export class Task {
    name: string;
    description: string;
    createdAt: date;
    deletedAt: date;

    constructor(
        fields?: {
            name?: string,
            description?: string,
            createdAt?: date,
            DeletedAt?: date
        }) {
        
        if (fields) Object.assign(this, fields);
    }
}