#!/usr/bin/env python3
"""
Basic annotations - Complex types - functions
"""

from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Annotates a function that returns a list of tuples. Each tuple contains an
    element from the input list and its length.
    """
    return [(i, len(i)) for i in lst]
