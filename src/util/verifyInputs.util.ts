import { Alerts } from "./alerts.util";

export class VerifyContactInputs {
    constructor(private _alertInputs = Alerts) { }

    verifyInputs(phone: string, email: string, name: string): boolean {
        if (email === "" && phone === "" && name === "") {
            alert(this._alertInputs.ALERT_VOID_INPUTS);
            return false;
        } else {
            if (this.validateEmail(email) && this.validatePhone(phone) && this.validateName(name)) {
                return true;
            } else {
                return false;
            }
        }
    }

    validateEmail(email: string): boolean {
        if (email === "") {
            alert(this._alertInputs.ALERT_VOID_EMAIL);
            return false;
        } else {
            if (email.includes('@')) {
                let validateEmail = email.split('@');
                let validateDominion = validateEmail[1].split('.');
                if (email.includes(' ') || validateEmail[0].length === 0 || validateDominion.length < 2
                    || validateDominion[0].length === 0 || validateDominion[1] !== "com") {
                    alert(this._alertInputs.ALERT_FORMAT_EMAIL);
                    return false;
                } else {
                    return true;
                }
            } else {
                alert(this._alertInputs.ALERT_FORMAT_EMAIL);
                return false;
            }
        }
    }

    validatePhone(phone: string): boolean {
        if (phone === "") {
            alert(this._alertInputs.ALERT_VOID_PHONE_NUMBER);
            return false;
        } else {
            let verifyPhone = new RegExp('^\\([1-9]{2}\\)((9[0-9]{4}-[0-9]{4})|9[0-9]{8})$');
            if (verifyPhone.test(phone)) {
                return true;
            } else {
                alert(this._alertInputs.ALERT_FORMAT_PHONE_NUMBER);
                return false;
            }
        }

    }

    validateName(name: string): boolean {
        if (name === "") {
            alert(this._alertInputs.ALERT_VOID_NAME);
            return false;
        } else if (name.length < 3) {
            alert(this._alertInputs.ALERT_FORMAT_NAME);
            return false;
        } else {
            return true;
        }
    }
}
