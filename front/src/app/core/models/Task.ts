export class Task {
    name: string;
    description: string;
    createdAt: Date;
    deletedAt: Date;

    constructor(
        fields?: {
            name?: string,
            description?: string,
            createdAt?: Date,
            deletedAt?: Date
        }) {
        
        if (fields) Object.assign(this, fields);
    }
}