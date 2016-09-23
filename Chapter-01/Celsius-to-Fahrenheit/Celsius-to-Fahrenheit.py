# Capter-1: Fundamentals
# Celsius-to-Fahrenheit
# Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius and returns the equivalent temperature in Fahrenheit degrees
# Fahrenheit = (9/5 * Celsius) + 32

def celsiusToFahrenheit(cDegrees):
    return (9.0/5 * cDegrees) + 32

if __name__ == "__main__":
    cD = -40
    print("{} degrees celsius = {} degrees fahrenheit").format(cD, celsiusToFahrenheit(cD))
