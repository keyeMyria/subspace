#!/bin/bash

HOSTPARAMS="--host $DB_HOST --insecure"
# Docker
# SQL="/cockroach/cockroach.sh sql $HOSTPARAMS"
# Local
SQL="cockroach sql --insecure"

# down
$SQL -e "REVOKE ALL ON TABLE ss_dev.*, ss_test.*, ss.* FROM $DB_USERNAME"
$SQL -e "REVOKE ALL ON DATABASE ss_dev, ss_test, ss FROM $DB_USERNAME"
$SQL -e "DROP USER IF EXISTS $DB_USERNAME"
$SQL -e "DROP DATABASE IF EXISTS ss_dev"
$SQL -e "DROP DATABASE IF EXISTS ss_test"
$SQL -e "DROP DATABASE IF EXISTS ss"

# up
$SQL -e "CREATE USER IF NOT EXISTS $DB_USERNAME"
$SQL -e "CREATE DATABASE IF NOT EXISTS ss_dev"
$SQL -e "CREATE DATABASE IF NOT EXISTS ss_test"
$SQL -e "CREATE DATABASE IF NOT EXISTS ss"
$SQL -e "GRANT ALL ON DATABASE ss_dev, ss_test, ss TO $DB_USERNAME"
