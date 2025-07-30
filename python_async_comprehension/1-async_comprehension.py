#!/usr/bin/env python3
"""Async Comprehension"""

from typing import List
Vector = List[float]

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> Vector:
    """collect 10 random numbers using an async comprehensing
    over async_generator, then return the 10 random numbers
    """
    return [y async for y in async_generator()]
