#!/usr/bin/env python3
"""
Basic of async
"""


import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """spawn wait_random n times"""
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    sorted_delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        sorted_delays.append(delay)
    return sorted_delays
