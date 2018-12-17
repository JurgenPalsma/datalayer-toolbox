// Get closest parent node from html element (from top to bottom)
function getClosestElemMatchingSelector(target, selector) {
    while (!target.matches(selector) && !target.matches('body')) {
       target = target.parentElement;
    }
    return target.matches(selector) ? target : undefined;
}