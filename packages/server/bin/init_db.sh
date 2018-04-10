#!/bin/bash

HOSTPARAMS="--host $DB_HOST --insecure"
SQL="/cockroach/cockroach.sh sql $HOSTPARAMS"

# down
$SQL -e 'REVOKE ALL ON TABLE ss_dev.*, ss_test.*, ss.* FROM cockroach'
$SQL -e 'REVOKE ALL ON DATABASE ss_dev, ss_test, ss FROM cockroach'
$SQL -e 'DROP USER IF EXISTS cockroach'
$SQL -e 'DROP DATABASE IF EXISTS ss_dev'
$SQL -e 'DROP DATABASE IF EXISTS ss_test'
$SQL -e 'DROP DATABASE IF EXISTS ss'

# up
$SQL -e 'CREATE USER cockroach'
$SQL -e 'CREATE DATABASE ss_dev'
$SQL -e 'CREATE DATABASE ss_test'
$SQL -e 'CREATE DATABASE ss'
$SQL -e 'GRANT ALL ON DATABASE ss_dev, ss_test, ss TO cockroach'
