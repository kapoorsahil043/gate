import { BaseComponent } from './base.component';

declare var $: any;
export class BaseApplicationComponent extends BaseComponent{

  constructor() { 
	super();
  }

  checkCharacters(e: KeyboardEvent, n: number): boolean {
	var ew: any = e.which ? e.which : e.keyCode;
	let val: any = $(e.target).val();

	if (ew == 8 || ew == 9) { // BACKSPACE AND TAB
		return true;
	} else {
		if (n === 1) { // 0-9
			if (e.key == "." && val.indexOf('.') == -1) return true;
			else if (48 <= ew && ew <= 57) return true;
		} else if (n === 2) { // A-Z AND a-z
			if (ew == 32) return true;
			else if (e.key == "-" || e.key == "/") return true;
			else if (65 <= ew && ew <= 90 || 97 <= ew && ew <= 122) return true;
		} else if (n === 3) { // 0-9, A-Z, AND a-z
			if (ew == 32) return true;
			else if (e.key == "," || e.key == "." || e.key == '"' || e.key == "#" || e.key == "(" || e.key == ")" || e.key == "/" || e.key == "'" || e.key == "-") return true;
			else if (48 <= ew && ew <= 57 || 65 <= ew && ew <= 90 || 97 <= ew && ew <= 122) return true;
		}
	}

	return false;
}

}
