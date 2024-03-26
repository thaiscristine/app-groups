import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, groupName: string) {
    try {
        const storagePlayers = await playersGetByGroup(groupName);
        const playerAlreadyExists = storagePlayers.filter(player => player.name === newPlayer.name).length > 0;

        if(playerAlreadyExists) {
            throw new AppError('Player already exists');
        }

        const storage = JSON.stringify([...storagePlayers, newPlayer]);
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-:${groupName}`, storage);
    } catch (error) {
        throw error;
    }
}