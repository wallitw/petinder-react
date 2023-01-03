
import client from "./client";

export function getPets() {
    return client.get('pets');
}
export function addPet(newPet) {
    return client.post('pets', newPet);
}
export function deletePet(selectedPet) {
    const selectedPetId = parseInt(selectedPet.id,10)
    return client.delete(`pets/${selectedPetId}`);
}

export async function incrementPopularity(name) {
     await client.get(`pets/${name}/incrementPopularity`);
}