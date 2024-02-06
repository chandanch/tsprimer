/**
 * Totality: Totality is a feature in which TS checks the function implementation to check
 * if the function returns or covers all of the possible types
 *  "totality" typically refers to a function being "total" or "fully defined"
 * for all possible inputs. A total function is one that is defined for all possible values of
 * its input type and produces a result for each input
 */

type weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';

type Day = weekdays | 'Sat' | 'Sun';

function getNextDay(weekday: weekdays): Day {
    switch (weekday) {
        case 'Mon':
            return 'Tue';
        case 'Tue':
            return 'Wed';
        case 'Wed':
            return 'Thu';
        case 'Thu':
            return 'Fri';
        case 'Fri':
            return 'Sat';
    }
}

getNextDay('Fri');
