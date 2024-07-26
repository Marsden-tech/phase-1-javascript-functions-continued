// code your solution here
function saturdayFun(activity = 'roller-skate') {
    console.log(`This Saturday, I want to ${activity}`);
}

const mondayWork = function (activity = 'go to the office') {
    console.log(`This Monday, I will ${activity}`);
}

function wrapAdjective(highlight = "*") {
    return function (adjective = "special") {
        return `You are ${highlight}${adjective}${highlight}!`;
    };
}