// Define the shape of the player state
export interface PlayerState {
    character: Character;
    party: Character[];
    reserve: Character[];
    inventory: InventoryItem[];
}

export interface InventoryItem {
    id: string;
    name: string;
    description: string;
    quantity: number;
    maxQuantity: number;
    type: string; // e.g. consumable, equipment, etc.
}


// Define the shape of the character object
export interface Character {
    id: string;
    name: string;
    sprite: string;
    level: number;
    abilities: Ability[];
    unlockedAbilities: Ability[];
    stats: Stats[];
    ultimateAbility: Ability[];
    gear: Gear[]
    statusEffects: StatusEffect[];
}

// Define the shape of the ability object
export interface Ability {
    id: string;
    name: string;
    description: string;
    damage: number;
    cooldown: number;
    isAOE: boolean;
    isUltimate: boolean;
    
}

// Define the shape of the stats object
export interface Stats {
    name: string;
    value: number;
}

// Define the shape of the gear object  
export interface Gear {
    id: string;
    name: string;
    description: string;
    stats: Stats[];
}

// Define the shape of the status effect object
export interface StatusEffect {
    id: string;
    name: string;
    description: string;
    duration: number;
    type: string; // e.g. poison, burn, stun, etc.
}
