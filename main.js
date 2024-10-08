let check_value = 1;
let inputs = document.querySelectorAll("input[type=radio], input[type=checkbox]");
let tmpCheckbox = Array.from(inputs);

let filteredRadios = tmpCheckbox.filter(box => box.type === "radio" && box.value == check_value);
filteredRadios.forEach(box => box.checked = true);

let filteredCheckboxes = tmpCheckbox.filter(box => box.type === "checkbox").slice(0, 4);
filteredCheckboxes.forEach(box => box.checked = true);

let submitButton = document.querySelector("input[type=submit][name=btSubmit]");
if (submitButton) {
    submitButton.click();
} else {
    console.log("Submit button not found");
}
