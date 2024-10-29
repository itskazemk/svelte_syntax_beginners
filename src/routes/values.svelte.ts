const init = {
	user: 'kazem',
	jwt: 'xxxxx'
};

export const globalState = $state(init);

export function change_state() {
	globalState.jwt = 'BIG CHNAGE';
}

export function updateUser({ user }) {
	globalState.user = user;
}
