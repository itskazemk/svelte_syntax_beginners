export const globalState = $state({ jwt: 'jwt_token' });

export function chnage_state() {
	globalState.jwt = 'BIG CHNAGE';
}
