export class Task {
    name: string;
    description: string;
    createdAt: Date;
    deletedAt: Date;
    iconPath: string;

    constructor(
        fields?: {
            name?: string,
            description?: string,
            createdAt?: Date,
            iconPath: string,
            deletedAt?: Date
        }) {
        
        if (fields) Object.assign(this, fields);
    }
}