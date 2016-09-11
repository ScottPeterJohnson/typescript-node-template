import {People} from "things/people";
import {House} from "places/houses";

export class Employee implements People {
	private home : House;
	constructor(public firstName : string, public lastName : string){}
	static bob(){ return new Employee("Bob", "Bobson"); }
}
