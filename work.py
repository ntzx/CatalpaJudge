#!/usr/bin/env python3
# -*- coding:utf-8 -*-

'介绍'

__author__ = '周子皓'

import os,time


def run(filename,timeout=60):
    order = 'python '+filename
    file = os.popen(order,'r',1)
    result = file.read()
    return result
