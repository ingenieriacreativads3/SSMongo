export function open() {
	return {
		type: 'OPEN'
	}
}

export function close() {
	return {
		type: 'CLOSE'
	}
}

export function visibleDrawer() {
	return {
		type: 'VISIBLE'
	}
}

export function invisibleDrawer() {
	return {
		type: 'INVISIBLE'
	}
}