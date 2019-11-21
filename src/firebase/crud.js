import { FIRE_STORAGE } from './util';

// create user on database
export const createUser = async (userObj, additionData) => {
	if (userObj) {
		// create reference in fire_store
		const userRef = FIRE_STORAGE.doc(`users/${userObj.uid}`);
		// get user snap shot from fire_store
		const userSnap = await userRef.get();
		if (!userSnap.exists) {
			const { displayName, email } = userObj;
			const createdAt = new Date();
			try {
				await userRef.set({ 
					displayName,
					email,
					createdAt,
					...additionData
				})
			} catch(error) {
				console.error('Error in firebase.crud.createUser', error);
			}
		}
		return userRef;
	}
}