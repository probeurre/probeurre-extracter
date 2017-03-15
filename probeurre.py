#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This file is part of Probeurre.
"""
from argparse import ArgumentParser
from git import Repo
from tqdm import tqdm
import server
import os

# Argument parsing
parser = ArgumentParser(
    description="shows statistics about comments on git repositories.")
parser.add_argument("-v", "--verbose", help="be verbose", action="store_true")
parser.add_argument("-r", "--repo", help="treat these repositories", nargs="+")
parser.add_argument("-o", "--org", help="treat repositories of these GitHub organizations", nargs="+")
parser.add_argument("-l", "--limit", help="treat at most that number of repositories per organization")
parser.add_argument("-k", "--keep", help="keep all downloaded repos on disk after completion", action="store_true")
parser.add_argument("-d", "--directory", help="directory to download files into")
args = parser.parse_args()

relativeWorkingDir = args.directory if args.directory else 'repos'
workingDir = os.path.join(os.getcwd(), relativeWorkingDir)
repos = args.repo

if not repos:
    parser.print_help()
    exit(1)

for repoUrl in repos:
    print('Cloning repo %s' % repoUrl)
    Repo.clone_from(repoUrl, os.path.join(workingDir, os.path.basename(repoUrl)))

server.run("127.0.0.1", 5555, downloaded=repos)