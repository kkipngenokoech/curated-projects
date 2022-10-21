# class methods

class methods are called on a class and not instance of a method.
they are functionally the same as javascript static methods(A static method, on the other hand, is called on the class itself).

## examples

1. `all()` - returns all elements(albums).
2. `find()` - finds an album its name
3. `find_by_ranking()` - find an album by it's ranking.
4. `top_rated()` - finds the top rated album.

each of this methods have access to all elements(albums)

## difference between instance method and class method?

instance method - `def methodName()`
| class method - `def self.methodName()`

## class variables

`@@name_of_your_variable`,
these are scoped to class, it can be accessed anywhere in the class including in all instances of the class.
