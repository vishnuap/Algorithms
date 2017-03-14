# Chapter-1: Fundamentals
# Farenheit-to-Celsius
# Kelvin wants to convert between temperature scales. Create farenheitToCelsius(fDegrees) that accepts a number of degrees in Farenheit and returns the equivalent temperature as expressed in Celsius degrees.
# Fahrenheit = (9/5 * Celsius) + 32
# Celsius = (Fahrenheit - 32) * 5/9

# Assuming fDegrees is a number
def farenheitToCelsius(fDegrees):
    return (fDegrees - 32) * 5/9.0

if __name__ == "__main__":
    fD = 105
    print("{} degrees fahrenheit = {} degrees celsius").format(fD, farenheitToCelsius(fD))
