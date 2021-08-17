import { Pipe, PipeTransform } from '@angular/core';
//import { UtilService } from '../services/util-service';

/**
 * 'url' pipe
 */

@Pipe({ name: 'url' })
export class Url implements PipeTransform {
	transform(url: string, args?: string[]): any {
		let root: string = args[0] || '/dashboard.html#/dashboard';
		let link: string = `${root}/`;

		if (url) {
			link += `${url}`;
		} else {
			link += `#`;
		}

		return link;
	}
}

@Pipe({ name: 'amount' })

export class Amount {
	transform(amount: number, args?: any[]): any {
		let rootDigits: number = 0;

		if (args && args.length > 0) {
			rootDigits = args[0];
		}

		// rootDigits = parseInt(rootDigits, 10);
		if (isNaN(rootDigits)) {
			rootDigits = 2;
		}

		var formatNumber = function (no: number, mark?: string) {
			mark = mark || ',';
			var amountStr: string = '';
			amountStr = no.toFixed(rootDigits);

			return amountStr.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + mark);
		};

		var aS = amount.toString();
		if (isNaN(parseInt(aS, 10))) {
			amount = 0;
		} else {
			amount = parseInt(aS, 10);
		}

		return formatNumber(amount);
	}
}

@Pipe({ name: 'pluralize' })

export class Pluralize {
	transform(text: string, args?: any[]): any {
		let no = args[0] || args || 0;
		let suffix = args[1] || 's';

		if (typeof no === 'string') {
			no = parseInt(no);
			//no = 0;
		}

		if (no > 1) {
			return text.toString() + suffix;
		} else {
			return text.toString();
		}
	}
}

@Pipe({ name: 'uuid' })
/**
 * Create unique string
 */
export class UUID {
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

		let uuid = UUID.getUUID();

		return text + uuid;
	}
}

@Pipe({ name: 'percentage' })

export class Percentage {
	transform(value: number, args?: any[]): any {
		let total = args[0] | 100;
		value = value || 0;

		// console.log('percentage', value, total)

		let percentage = Math.round(value / total * 100) / 100;
		percentage = percentage * 100;
		percentage = Math.floor(percentage);

		if (percentage) {
			return percentage;
		}

		return 0;
	}
}


@Pipe({ name: 'maskString' })

export class MaskString {
	transform(value: string, args?: any): string {
		let result: string = value.toString();
		let type: string = args;
		let mask: string = '*';
		let convertedText: string = '';

		switch (type) {
			case 'email':
				// convertedText = value.replace(/.(?=.{4})/g, '*');
				// let emailParts: Array<string> = result.split('@');
				// let prefixEmail: string = emailParts[0];
				// let suffixEmail: string = emailParts[1];

				// convertedText = `${prefixEmail.substr(0, 2)}
				// 				 ${mask.repeat(5)}
				// 				 ${prefixEmail.substr(prefixEmail.length - 2, 2)}@
				// 				 ${suffixEmail.substr(0, 1)}
				// 				 ${mask.repeat(4)}
				// 				 ${suffixEmail.substr(suffixEmail.length - 1, 1)}`;
				let emailParts: Array<string> = result.split('@');
				let prefixEmail: string = emailParts[0];
				let suffixEmail: string = emailParts[1];

				convertedText = `${prefixEmail.substr(0, 2)}${mask.repeat(5)}${prefixEmail.substr(prefixEmail.length - 2, 2)}@${suffixEmail.substr(0, 1)}${mask.repeat(5)}${suffixEmail.substr(suffixEmail.length - 1, 1)}`;
				break;
			case 'phoneNumber':
				convertedText = `${result.substr(0, result.length - 8)}${mask.repeat(2)}${result.substr(result.length - 6, 1)}${mask.repeat(3)}${result.substr(result.length - 2, 2)}`;
				break;
			case 'all':
				convertedText = `${mask.repeat(result.length)}`;
				break;
			default:
				// convertedText = `${mask.repeat(result.length)}`;
				convertedText = value.toString().replace(/.(?=.{4})/g, 'X');
				break;
		}

		return convertedText;
	}
}

@Pipe({ name: 'formatAccountNumber' })
export class FormatAccountNumber {
	transform(accountNumber?: string, accountType?: string, country: string = 'my') {
		//console.log('formatAccountNumber', accountNumber, accountType, country);
		var formattedAccountNumber;
		if (country === 'my' && (accountType === 'casa' || accountType === 'ca' || accountType === 'sa')) {
			formattedAccountNumber = accountNumber.replace(/(\d{2})(\d{7})(\d{1})/g, "$1 $2 $3");
		} else if (country === 'my' && accountType === 'gi') {
			formattedAccountNumber = accountNumber.replace(/(\d{2})(\d{7})(\d{1})(\d{2})/g, "$1 $2 $3 $4");
		} else if (country === 'my' && accountType === 'fd') {
			formattedAccountNumber = accountNumber.replace(/(\d{2})(\d{7})(\d{1})(\d{4})/g, "$1 $2 $3 $4");
		} else if (accountType === 'cc' || accountType === 'cld' || accountType === 'kw') {
			formattedAccountNumber = accountNumber.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/g, "$1 $2 $3 $4");
		} else if (country === 'my' && accountType === 'la') {
			formattedAccountNumber = accountNumber.replace(/(\d{2})(\d{7})(\d{1})/g, "$1 $2 $3");
		} else {
			formattedAccountNumber = accountNumber;
		}
		return formattedAccountNumber;
	}
}

@Pipe({
	name: 'ellipsis'
})
export class EllipsisPipe {
	transform(val: any, args?: any) {
		if (args[0] <= 0) {
			return val;
		}

		if (val.length > args[0]) {
			return val.substring(0, args[0]) + '...';
		} else {
			return val;
		}
	}
}
/* 
@Pipe({
	name: 'converDecimal'
})
export class ConverDecimal {
	transform(value?: string, args?: any[]) {
		return UtilService.convertToDecimal(value);
	}
} */

@Pipe({ name: 'spacer' })
export class Spacer {
	transform(input: string) {
		return input.replace(/(\d+:\d+)\s?(.+)/, "$1 $2");
	}
}

@Pipe({ name: 'capitalLetter' })
export class CapitalLetter {
	transform(input: string) {
		return input.toUpperCase();
	}
}

@Pipe({ name: 'formatEmptyData' })
export class FormatEmptyData {
	transform(input: string, replaceToString?: string) {
		if (input) {
			return input;
		} else {
			if (replaceToString) {
				return replaceToString;
			} else {
				return '-';
			}
		}
	}
}

@Pipe({ name: 'formatJsonValue' })
export class FormatJsonValue {
	transform(input: any, replaceWith?: any) {
		if (input || input !== null) {
			if (input == 0) {
				return 0;
			} else if (input == "") {
				return "";
			} else {
				return input;
			}
		} else {
			if (replaceWith) {
				return replaceWith;
			}
			return null;
		}
	}
}

import { DomSanitizer } from '@angular/platform-browser'

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
