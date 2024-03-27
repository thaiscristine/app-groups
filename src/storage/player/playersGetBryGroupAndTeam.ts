import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { playersGetByGroup } from "./playersGetByGroup";

export async function playersGetBryGroupAndTeam(groupName: string, teamName: string) {

    try{
        const storage = await playersGetByGroup(groupName);
        const players = storage.filter(player => player.team === teamName);
        return players;
    } catch(error) {
        throw error;
    }
}