import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupName: string) {
  try {
    const storage = await groupsGetAll();
    const filteredGroups = storage.filter(group => group !== groupName);
    const groups = JSON.stringify(filteredGroups);

    await AsyncStorage.setItem(GROUP_COLLECTION, groups)
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`)
  } catch(error) {
    throw error;
  }
}