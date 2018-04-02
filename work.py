#!/usr/bin/env python3
# -*- coding:utf-8 -*-

'介绍'

__author__ = '周子皓'

import subprocess


def run(filename,inp,timeout=3):
    p = subprocess.Popen(['python',filename],stdin=subprocess.PIPE,stdout=subprocess.PIPE
                         ,stderr=subprocess.PIPE,)
    try:
        p.communicate(inp.encode('utf-8'),timeout=timeout)
    except subprocess.TimeoutExpired:
        p.kill()
        a,b = p.communicate()
        return a.decode('utf-8'),b.decode('utf-8')
    a,b = p.communicate()
    return a.decode('utf-8'), b.decode('utf-8')
