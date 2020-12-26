import * as moment from 'moment';
import { Utils } from 'src/app/common/utils';

export class BaseComponent{

  constructor() { 
    (<any>window).timeoutCB = this.timeOutHandler.bind(this);
		(<any>window).idleTimeoutCB = this.idleTimeOutHandler.bind(this);
  }

  ngOnInit() {
  }

  timeOutHandler(type): void {
		//console.log('log::BaseComponent,timeOutHandler,type',type);
		let self = this;
		let callbackTimeout: any = function () {
			self.timeoutCallbackHandler();
		}

		if (type === 'REMINDER') {
			//this.showErrorPopup('Your secure connection to Clicks is about to timeout. Please complete your transaction to avoid interruption.');
		}
		if (type === 'TIMEOUT') {
			//this.showErrorPopup('Your session has expired. Please login again to continue.', null, callbackTimeout);
			// setTimeout(function () {
			// 	window.location.reload();
			// }, 10);
		}
  }
  
  idleTimeOutHandler(type): void {
		//console.log('log::BaseComponent,idleTimeOutHandler');

		let self = this;
		let callbackTimeout: any = function () {
			//self.idleTimeOutCallbackHandler();
		}

		let callbackRemindTimeout: any = function () {
			(<any>window).currentTimeSession = moment(moment().toISOString()).unix();
			(<any>window).idleReminderCalled = false;
			console.log('log::BaseComponent,callbackRemindTimeout');
		}

		if (type === 'REMINDER') {
			//this.showCountdownPopup('Your secure connection to Clicks is about to timeout within next ', ' seconds. Please complete your transaction to avoid interruption.', '', null, callbackRemindTimeout);
		
		}
		if (type === 'TIMEOUT') {
			//this.showErrorPopup('Your idle session has expired. Please login again to continue.', null, callbackTimeout);
		}
  }

  timeoutCallbackHandler() {
		//console.log('timeOutHandler');
		localStorage.setItem("isSessionTimeoutLogout", 'true');
		//this.onProceed();
  }
  
  idleTimeOutCallbackHandler() {
		if (Utils.isMobile()) {
			//self.router.parent.navigate(['Login', {}]);
			// WL.Client.reloadApp();
			//localStorage.setItem("isSessionTimeoutLogout", 'true');
			//this.onProceed();
		} else {
			// window.location.assign('/index.html');
			// window.location.assign('#/logout');
			// window.location.reload();
			// window.location.href = '#/Logout';
			//localStorage.setItem("isSessionTimeoutLogout", 'true');
			// self.globalVariableService.isSessionTimeoutLogout = true;

			//this.onProceed();
		}
		
	}

}
