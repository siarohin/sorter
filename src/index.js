class Sorter {
    constructor() {
        this.arr = [];
        this.compare = (left, right) => left - right;
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {
        if (indices.length > 1) {
            indices.sort(this.arr.compare);

            let array = [];
            for (let i = 0; i < indices.length; i++) {
                array[i] = this.arr[indices[i]];
            }
            
            array.sort(this.compare);
            for (let i = 0; i < array.length; i++) {
                this.arr[indices[i]] = array[i];
            }


        }

    }

    setComparator(compareFunction) {
        this.compare = compareFunction;
    }
}

module.exports = Sorter;