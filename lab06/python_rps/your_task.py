def hello_world():
    return "Hello world!"


def rps(hand1, hand2):
    # finish this code:

    # inital filter
    if hand1 == "rock" and hand2 == "paper" or hand1 == "paper" and hand2 == "rock":
        return "Paper wins!"
    if (
        hand1 == "paper" and hand2 == "scissors" or hand1 == "scissors" and hand2 == "paper"
    ):
        return "Scissors wins!"
    if (
        hand1 == "scissors" and hand2 == "rock" or hand1 == "rock" and hand2 == "scissors"
    ):
        return "Rock wins!"

    # tie case
    if hand1 == "paper" and hand2 == "paper":
        return "Tie!"
    if hand1 == "scissors" and hand2 == "scissors":
        return "Tie!"
    if hand1 == "rock" and hand2 == "rock":
        return "Tie!"

    else:
        return "Invalid"
