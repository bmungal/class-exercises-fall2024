import { helloWorld, rps } from "./your-task.js";
import { assertPrint, runAllTests } from "./helpers.js";

function testHelloWorld() {
    return assertPrint(
        helloWorld() === "Hello world!",
        'it returns "Hello world!"',
    );
}

function testPaperBeatsRock() {
    return assertPrint(
        rps("rock", "paper") === "Paper wins!",
        "paper beats rock",
    );
}

function testPaperBeatsRockCommutes() {
    return assertPrint(
        rps("paper", "rock") === "Paper wins!",
        "paper beats rock (flipped)",
    );
}

// add more test functions here to exhaustively test your rps function...
//Scissors wins case
function testScissorsBeatsPaper() {
    return assertPrint(
        rps("paper", "scissors") === "Scissors wins!",
        "scissors beats paper",
    );
}

function testScissorsBeatsPaperCommutes() {
    return assertPrint(
        rps("scissors", "paper") === "Scissors wins!",
        "scissors beats paper (flipped)",
    );
}

//rock wins case
function testRocksBeatsScissors() {
    return assertPrint(
        rps("scissors", "rock") === "Rock wins!",
        "rock beats scissors",
    );
}

function testRockBeatsScissorsCommutes() {
    return assertPrint(
        rps("rock", "scissors") === "Rock wins!",
        "rock beats scissors (flipped)",
    );
}

//tie case?

function testTiePaper() {
    return assertPrint(
        rps("paper", "paper") === "Tie!",
        "paper ties with paper",
    );
}

function testTieScissors() {
    return assertPrint(
        rps("scissors", "scissors") === "Tie!",
        "scissors ties with scissors",
    );
}

function testTieRock() {
    return assertPrint(rps("rock", "rock") === "Tie!", "rock ties with rock");
}

//invalid case
function testInvalid() {
    return assertPrint(
        rps("things", "stuff") === "Invalid",
        "input is invalid",
    );
}

// Once you have defined each test function, don't forget to
// add the function definition to the test harness:
runAllTests([
    testHelloWorld,
    testPaperBeatsRock,
    testPaperBeatsRockCommutes,
    testScissorsBeatsPaper,
    testScissorsBeatsPaperCommutes,
    testRocksBeatsScissors,
    testRockBeatsScissorsCommutes,
    testTiePaper,
    testTieScissors,
    testTieRock,
    testInvalid,
]);
