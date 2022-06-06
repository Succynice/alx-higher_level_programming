#!/usr/bin/env python3

def no_c(my_string):
    """removes all characters c and C from a string."""

    new_string = my_string.translate({ord(not_allowed): None for not_allowed in 'cC'})
    return new_string
