#!/usr/bin/env python3
"""Runtime for four parallel comprehension"""

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """return total execution time of four parallel comperhensions"""
    begin = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end = time.time()
    return end - begin
