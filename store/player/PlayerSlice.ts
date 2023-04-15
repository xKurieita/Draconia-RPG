import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayerState, Character, Ability, Gear, StatusEffect, InventoryItem } from './PlayerState';

// Define the initial state for the player slice
const initialState: PlayerState = {
    character: {
        id: '',
        name: '',
        sprite: '',
        level: 1,
        abilities: [],
        unlockedAbilities: [],
        stats: [],
        ultimateAbility: [],
        gear: [],
        statusEffects: []
    },
    party: [],
    reserve: [],
    inventory: []
};


// Define a player Slice using createSlice from Redux Toolkit

export const PlayerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        // Define reducer to create a new character
        createCharacter: (state, action: PayloadAction<Character>) => {
            //update the character state with the new character
            state.character = action.payload;
        },
        // Define reducer to update the character
        updateCharacter: (state, action: PayloadAction<Partial<Character>>) => {
            //update the character state with the new character
            state.character = {...state.character, ...action.payload};
        },
        // Add characters to the party array
        addToParty: (state, action: PayloadAction<Character>) => {
            // Check if the party is already at maximum capacity
            if (state.party.length >= 4) {
                // Add character to the reserve if the party is full 
                state.reserve.push(action.payload);
            } else {
                // Add character to the party if there is space
                state.party.push(action.payload);
            }

        },
        // Remove characters from the party array based on their id
        removeFromParty: (state, action: PayloadAction<string>) => {
         state.party = state.party.filter((character) =>  {
                // Add character to the reserve if the party is full
                if (character.id === action.payload) {
                    state.reserve.push(character);
                    return false; // Exclude character from the party
                }
                return true; // Include character in the party
            });
        },

        updateAbility: (state , action: PayloadAction<{ characterId: string; abilityId: string; ability: Ability}>) => {
            // update the ability of the character in the state.
            const { characterId, abilityId, ability } = action.payload;

            const character = state.character.id === characterId ? state.character : state.party.find((character) => character.id === characterId);
            if (character) {
                const existingAbilityIndex = character.abilities.findIndex((ability) => ability.id === abilityId);
                if (existingAbilityIndex !== -1) {
                    // update the ability
                    character.abilities[existingAbilityIndex] = ability;
                } else {
                    // if the ability is not found in abilities, it is in unlocked abilities
                    // find the index of the ability in unlocked abilities
                    const unlockedAbilityIndex = character.unlockedAbilities.findIndex((ability) => ability.id === abilityId);
                    if (unlockedAbilityIndex !== -1) {
                        // update the ability
                        character.unlockedAbilities[unlockedAbilityIndex] = ability;
                    } else {
                        // if its not there it means the ability is not unlocked yet
                        // add the ability to unlocked abilities
                        character.unlockedAbilities.push(ability);
                    }       
            }     
        }
    },

        updateGear: (state, action: PayloadAction<{ characterId: string; gearId: string; gear: Gear}>) => {
            // Update the gear of a character in the state
            const { characterId, gearId, gear } = action.payload;
            const character = state.character.id === characterId ? state.character : state.party.find((character) => character.id === characterId);
            if (character) { 
                const existingGearIndex = character.gear.findIndex((gear) => gear.id === gearId);
                if (existingGearIndex !== -1) {
                    // update the gear
                    character.gear[existingGearIndex] = gear;
                } else {
                    // Add gear to inventory if the character already has a piece of gear in that slot
                    const inventoryItem : InventoryItem = {
                        id: gearId,
                        name: gear.name,
                        description: gear.description,
                        quantity: 1,
                        maxQuantity: 1,
                        type: 'gear'
                    };
                    state.inventory.push(inventoryItem);
                }
            }

        },
        addToInventory: (state, action: PayloadAction<InventoryItem>) => {
            // Add an item to the inventory
            state.inventory.push(action.payload);
        },

        removeFromInventory: (state, action: PayloadAction<string>) => {
            // Remove an item from the inventory
            state.inventory = state.inventory.filter((item) => item.id !== action.payload);
        }

    }
});