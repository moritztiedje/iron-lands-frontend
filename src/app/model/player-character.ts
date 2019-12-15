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
    xcoordinate: number;
    ycoordinate: number;
}

export class Consumable {
    itemname: String;
    amount: number;
}

