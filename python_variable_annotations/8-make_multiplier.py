#!/usr/bin/env python3
"""
Basic annotations - Complex types - functions
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Creates and returns a function that multiplies a float by
    a given multiplier.
    """
    def multiplier_function(x: float) -> float:
        """
        Multiplies a float by the captured multiplier.
        """
        return x * multiplier

    return multiplier_function
