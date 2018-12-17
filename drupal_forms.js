// Gets inner texts from drupal "autocomplete-deluxe-item" spans items
function innerTextElemsToList(elemId) {
    elem = document.getElementById(elemId)
    let texts = []
    for (e in elem) {
        if (elem[e].innerText)
            texts.push(elem[e].innerText);
    }
    return texts
}

// Gets value from dom element
function getValueFromElem(elemId) {
    elem = document.getElementById(elemId)
    if (typeof elem != "undefined" && elem != null && ('value' in elem && elem.value != "")) 
        return elem.value
    else
        return 'NaN'
}

// Gets checkbox status from dom element
function isCheckedFromElem(elemId) {
    elem = document.getElementById(elemId)
    if (typeof elem != "undefined" && elem != null && 'checked' in elem) 
        return elem.checked ? true : false
    else
        return 'NaN'
}