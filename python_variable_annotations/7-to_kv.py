#!/usr/bin/env python3
"""
Basic annotations - string and int/float to tuple
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Takes a string k and an int or float v and returns a tuple.
    The first element is the string k.
    The second element is the square of v, annotated as a float.
    """
    return (k, float(v**2))
