class Person:
    def __init__(self, name, age):
        self.name = name
        self._age = age

    def get_age(self):
        return self._age


p1 = Person("Emil", 25)

print(p1.name)

# print(p1._age)   # possible, but should be avoided by convention

print(p1.get_age())