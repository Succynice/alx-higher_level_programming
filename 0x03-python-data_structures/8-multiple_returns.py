#!/usr/bin/python3

def multiple_returns(sentence):
	"""returns a tuple with the length of a string and its first character"""
    returned_tuple = ()
    length = len(sentence)
    first = ""

    if not sentence:
        length = 0
        first = None
        returned_tuple += (length, first)

    else:
        first = sentence[0]
        returned_tuple += (length, first)

    return tup
