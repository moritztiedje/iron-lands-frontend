export class PlayerCharacter {
    agility: number;
    characterName: String;
    charisma: number;
    intelligence: number;
    strength: number;
    username: String;
    stomachState: String;
    consumables: Array<Consumable>;
}

export class Consumable {
    itemname: String;
    amount: number;
}
