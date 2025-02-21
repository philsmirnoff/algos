# To solve the Cool String problem, you need to check two conditions:

# All characters must have the same frequency.
# If there's one character with a frequency that differs by 1 from the rest, we can remove one character of that type to make the frequencies equal.
# Plan:
# Count the frequency of each character in the string.
# Count how many times each frequency occurs.
# If there is only one frequency, or if there's only one frequency that occurs exactly once and its count is one greater than the rest, return True.
# Otherwise, return False.
# Solution in Python:
# python
# Copy
from collections import Counter

def is_cool_string(s: str) -> bool:
    # Count frequency of each character
    char_freq = Counter(s)

    # Count frequency of frequencies
    freq_count = Counter(char_freq.values())

    # If there's only one frequency, it's already a cool string
    if len(freq_count) == 1:
        return True

    # If there are exactly two different frequencies
    if len(freq_count) == 2:
        # Get the two frequencies and their counts
        (freq1, count1), (freq2, count2) = freq_count.items()

        # Case 1: One frequency is 1 and it occurs once (e.g. removing one character makes all others the same)
        if (freq1 == 1 and count1 == 1) or (freq2 == 1 and count2 == 1):
            return True

        # Case 2: One frequency is exactly 1 greater than the other, and it occurs once (remove one character of the larger frequency)
        if (abs(freq1 - freq2) == 1) and (freq1 > freq2 and count1 == 1) or (freq2 > freq1 and count2 == 1):
            return True

    return False

# Example usage:
print(is_cool_string("aaabbb"))  # True
print(is_cool_string("aaabbbcccc"))  # True
print(is_cool_string("aaabbbccccdddd"))  # False
print(is_cool_string("aabbcccdddeeee"))  # False
