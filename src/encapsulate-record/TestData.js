import _ from 'lodash';

export default class TestData {
    static get customerData() {

        const data = {
            "1920": {
                name: "martin", id: "1920", usages: {
                    "2016": {"1": 50, "2": 55, "3": 60, "4": 65, "5": 70, "6": 75,
                             "7": 80, "8": 85, "9": 90, "10": 95, "11": 100, "12": 105},
                    "2015": {"1": 40, "2": 45, "3": 50, "4": 55, "5": 60, "6": 65,
                        "7": 70, "8": 75, "9": 80, "10": 85, "11": 90, "12": 95}
                }
            },
            "38673": {
                name: "neal", id: "38673", usages: {
                    "2016": {
                        "1": 20, "2": 25, "3": 30, "4": 35, "5": 40, "6": 45,
                        "7": 50, "8": 55, "9": 60, "10": 65, "11": 70, "12": 75
                    },
                    "2015": {
                        "1": 10, "2": 15, "3": 20, "4": 25, "5": 30, "6": 35,
                        "7": 40, "8": 45, "9": 50, "10": 55, "11": 60, "12": 65
                    }
                }
            }
        };

        return _.cloneDeep(data);
    }
}
