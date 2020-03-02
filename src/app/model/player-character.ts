export class PlayerCharacter {
    agility: number;
    characterName: String;
    charisma: number;
    intelligence: number;
    strength: number;
    username: String;
    stomachState: String;
    nourishment: number;
    copper: number;
    consumables: Array<Consumable>;
    farms: Array<Farm>;
    xcoordinate: number;
    ycoordinate: number;
}

export class Consumable {
    itemname: String;
    amount: number;
}

export class Farm {
    constructor(farm: Farm) {
        this.progression = farm.progression;
        this.state = farm.state;
        this.xcoordinate = farm.xcoordinate;
        this.ycoordinate = farm.ycoordinate;
        this.name = farm.name;
        this.id = farm.id;
    }

    xcoordinate: number;
    ycoordinate: number;
    state: string;
    progression: number;
    name: string;
    id: number;

    displayState(): string {
        switch (this.state) {
            case 'UNUSED': return 'not being used';
            case 'PLANTING_POTATOES': return 'being planted with potatoes';
            case 'GROWING_POTATOES': return 'growing potatoes';
            case 'HARVESTING_POTATOES': return 'being harvested for potatoes';
            default: return this.state;
        }
    }
}
