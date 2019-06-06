export default class Person {
    constructor(name) {
        this._name = name;
        this._courses = [];
    }

    get name() {
        return this._name;
    }

    get courses() {
        return this._courses;
    }

    set courses(aList) {
        this._courses = aList;
    }
}