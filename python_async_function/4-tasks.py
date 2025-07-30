#!/usr/bin/env python3
"""
Spawn task_wait_random n times with max_delay
"""


import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn task_wait_random n times with max_delay."""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    sorted_delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        sorted_delays.append(delay)
    return sorted_delays
