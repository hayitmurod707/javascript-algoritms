const checkPermission = () => {
	if (!('Notification' in window)) {
		return 'not-supported';
	} else {
		return Notification.permission;
	}
};
export const sendNotification = ({ title, body }) => {
	const permission = checkPermission();
	if (permission === 'not-supported') {
		alert('Your browser is not supported notification');
	} else if (permission === 'default') {
		Notification.requestPermission().then(permission => {
			if (permission === 'granted') {
				new Notification(title, { body });
			} else if (permission === 'denied') {
				alert('Allow notifications');
			} else {
				// alert('default');
			}
		});
	} else if (permission === 'denied') {
		alert('Allow notifications');
	} else {
		new Notification(title, { body });
	}
};
