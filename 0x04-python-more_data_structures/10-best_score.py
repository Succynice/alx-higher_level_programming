#!/usr/bin/python3

def best_score(a_dictionary):
    if not isinstance(a_dictionary, dict) or len(a_dictionary) == 0:
        return None

    best_key = list(a_dictionary.keys())[0]
    big = a_dictionary[ret]
    for the_key, the_val in a_dictionary.items():
        if the_val > big:
            big = the_val
            ret = the_key
    return (best_key)
