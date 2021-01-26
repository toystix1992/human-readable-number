module.exports = function toReadable (number) {
    let strOfNum = number.toString();
    let solution = "";

    if (number<10) {
        solution = getUnits(strOfNum);
        return solution;
    }

    if (number>9 && number < 20) {
        solution = getElevenToNineteen(strOfNum);
        return solution
    }

    if (number>19 && number<100 ) {
        let dec = strOfNum[0];
        let unit = number % 10;
        if (unit === 0) {
            solution = getDecemals(dec);
            return solution;
        } else {
            solution = `${getDecemals(dec)} ${getUnits(unit.toString())}`;
            return solution
        }
    }

    if (number>99 && number<1000 ) {
        if (number%100 === 0) {
            solution = `${getUnits(strOfNum[0])} hundred`;
            return solution;
        } else if (strOfNum.substr(1, 2)*1 >9 && strOfNum.substr(1, 2) < 20) {
            solution = `${getUnits(strOfNum[0])} hundred ${getElevenToNineteen(strOfNum.substr(1, 2))}`;
            return solution;
        } else  { solution = `${getUnits(strOfNum[0])} hundred ${getDecemals(strOfNum[1])} ${getUnits(strOfNum[2])}`;
            return solution;
        };

    }



    function getUnits(value) {
        switch (value) {
            case '0':
                return null;
            case '1':
                return 'one';
            case '2':
                return 'two';
            case '3':
                return 'three';
            case '4':
                return 'four';
            case '5':
                return 'five';
            case '6':
                return 'six';
            case '7':
                return 'seven';
            case '8':
                return 'eight';
            case '9':
                return 'nine';
        }
    };

    function getElevenToNineteen(value) {
        switch (value) {
            case '10':
                return 'ten';
            case '11':
                return 'eleven';
            case '12':
                return 'twelve';
            case '13':
                return 'thirteen';
            case '14':
                return 'fourteen';
            case '15':
                return 'fifteen';
            case '16':
                return 'sixteen';
            case '17':
                return 'seventeen';
            case '18':
                return 'eighteen';
            case '19':
                return 'nineteen';
        }
    }

    function getDecemals(value) {
        switch (value) {
            case '2':
                return 'twenty';
            case '3':
                return 'thirty';
            case '4':
                return 'forty';
            case '5':
                return 'fifty';
            case '6':
                return 'sixty';
            case '7':
                return 'seventy';
            case '8':
                return 'eighty';
            case '9':
                return 'ninety';
        }
    };
}
