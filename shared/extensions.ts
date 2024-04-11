import * as interfaces from './interfaces.js';

export interface FactionRank extends Partial<interfaces.FactionRank> {
    paycheckTest?: number;
}

export interface FactionCharacter extends Partial<interfaces.FactionCharacter> {
    nextPaycheckTest?: number;
}
