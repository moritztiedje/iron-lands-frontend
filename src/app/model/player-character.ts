export class PlayerCharacter {
    agility: number;
    characterName: String;
    charisma: number;
    intelligence: number;
    strength: number;
    username: String;
    stomachState: String;
    gold: number;
    silver: number;
    copper: number;
    consumables: Array<Consumable>;
    xcoordinate: number;
    ycoordinate: number;
}

export class Consumable {
    itemname: String;
    amount: number;
}

export class TravelJob {
    xcoordinate: number;
    ycoordinate: number;
}
