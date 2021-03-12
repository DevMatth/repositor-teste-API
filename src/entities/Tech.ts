


import {uuid} from 'uuidv4'

export class Tech {
    
    public readonly id: string;

    public name: string;
    public link: string;
    public description: string;
    public tags: string[];

    constructor(props: Omit<Tech, 'id'>, id?: string) {
        this.name = props.name;
        this.link = props.link;
        this.description = props.description;
        this.tags = props.tags;

        if (!id) {
            this.id = uuid();
        }
    }
} 