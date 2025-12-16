function processConfirm(quetion) {
    let ansew = confirm(quetion);
    let result = "";
    if (ansew) {
        result += "Excellent. We'll play a nice game of chess.";
    } else {
        result += "Maybe later then.";
    }
    return result
}
processConfirm("Are you sure about that?")