#!/bin/bash
# This Bash script sends a GET request to a URL with a custom header and displays the response
curl -s -H "X-School-User-Id":98 "$1"
