export function isBlank(obj: any): boolean {
	return obj === undefined || obj === null;
}

export function isFunction(obj: any): boolean {
	return typeof obj === 'function';
}

export function isTrue(val: any) {
	val = val || "";
	return val === "true";
}

export function isNumber(obj: any): boolean {
	return typeof obj === 'number';
}

export function isObject(obj: any): boolean {
	return obj !== null && (typeof obj === 'function' || typeof obj === 'object');
}

export function isPresent(obj: any): boolean {
	return obj !== undefined && obj !== null;
}

export function isString(obj: any): boolean {
	return typeof obj === 'string';
}

declare var $: any;

interface IUtils {
	isBlank: Function,
	isFunction: Function,
	isNumber: Function,
	isObject: Function,
	isPresent: Function,
	isString: Function,
	isMobile: Function,
	isNativeMobile: Function,
}

export var Utils: IUtils = {
	isBlank: isBlank,
	isFunction: isFunction,
	isNumber: isNumber,
	isObject: isObject,
	isPresent: isPresent,
	isString: isString,
	isMobile: function () {
		if ($('body').hasClass('desktop-only')) {
			return false;
		} else {
			return true;
		}
	},
	isNativeMobile: function () {
		if ($('body').hasClass('desktop-only')) {
			return false;
		} else {
			return !!((<any>window).device && (<any>window).device.platform);
		}
	}
};

