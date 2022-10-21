# CONSTRAIN VALIDATION API

the purpose of this project is to help me and you(because you are here, atleast teach you something) learn about constrain validation API.

it checks the values the user has entered into the form controls before submitting these values to the server.

validation of constrains through the constrains validation API is done either on a single form element or at the form level or the form element itself.

## CLIENT VALIDATION

there are two different types of form validation:

1. Built-in form validation `required` and a couple of more.
   - `required` - Specifies whether a form field needs to be filled in before the form can be submitted.
   - `minlength` or `maxlength` - Specifies the minimum and maximum length of textual data (strings).
   - `min` or `max` - specifies the maximum and minimum numerical input types to be entered
   - `type` - it specifies wether the data entered needs to be a number, email address or some other specific present type.
   - `pattern` - this define a pattern that entered data needs to follow

If the data entered in a form field follows all of the rules specified by the above attributes, it is considered valid. If not, it is considered invalid.
2. Javascript - this is coded using javascript, and you can customize it.

## ValidityState

this interface represents the validity state that the form control elements have, with respect to its defined constraints. this helps explain whether and why an element's value fails to validate.

## InvalidState

this is an event that is sent to the form element when an element fails to validate.

## HTML elements it affects

1. HtmlButtonElement - `<button>`
2. htmlFieldsetElement - `<fieldset`
3. htmlInputElement - `<input>`
4. HTMLObjectElement - ``
5. HTMLOutputElement - `<output>`
6. HTMLSelectElement - `<select></select>`
7. HTMLTextareaElement - `<textarea>`

## PROPERTIES OF CONSTRAIN VALIDATION API

`.validity` - .this is a read only property. it returns a `validityState` object. whose properties represent validation errors for the value of that element.
    - `validitySate` - its an object that contains several properties describing the validity of the state of the elements.
      1. `.patternMismatch` - returns true if the pattern does not match the specified pattern and which inturn matches the :invalid css pseudoclass
      2. `tooLong`  - Returns true if the value is longer than the maximum length specified by the maxlength attribute, or false if it is shorter than or equal to the maximum. If true, the element matches the :invalid CSS pseudo-class.
      3. `tooShort` - this is opposite of `tooLong` attribute.(this is for string type)
      4. `rangeOverflow` - Returns true if the value is greater than the maximum specified by the max attribute, or false if it is less than or equal to the maximum. If true, the element matches the :invalid and :out-of-range CSS pseudo-classes.
      5. `rangeUnderFlow` - this is the opposite of the `rangeOverflow` attribute (this is for numeric type)
      6. `typeMismatch` - returns true if the value is not of the required syntax i.e email or url.
      7. `valid` - returns true if the element meets all its validation constraints
      8. `valueMissing` - Returns true if the element has a required attribute, but no value, or false otherwise
      9. `willValidate` - Returns true if the element will be validated when the form is submitted; false otherwise.

`validationMessage` - Returns a localized message describing the validation constraints that the control doesn't satisfy (if any)

on the form element, the constain API makes the following methods available:

1. `checkValidity()` - Returns true if the element's value has no validity problems
2. `reportValidity()` - Reports invalid field(s) using events. Useful in combination with preventDefault() in an onSubmit event handler
3. `setCustomValidity(message)` - Adds a custom error message to the element; if you set a custom error message, the element is considered to be invalid, and the specified error is displayed. This lets you use JavaScript code to establish a validation failure other than those offered by the standard HTML validation constraints. The message is shown to the user when reporting the problem.
