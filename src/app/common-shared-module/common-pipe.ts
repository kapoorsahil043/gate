import { Pipe } from '@angular/core';

@Pipe({ name: 'uuid' })
export class CustomUUID {
	// create uuid immediate via class name
	// UUID.getUUID()
	static getUUID(prefix?: string) {
		let baseStr = 'xxx-4x-yx-xy';
		let uuid = baseStr.replace(/[xy]/g, function (c) {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1).toLowerCase();
		});

		if (prefix) {
			return prefix + uuid;
		}

		return uuid;
	}

	transform(text: string, args?: any[]): any {
		text = text || '';

		let uuid = CustomUUID.getUUID();

		return text + uuid;
	}
}
