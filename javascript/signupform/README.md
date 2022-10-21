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

`.validationMessage` - .
