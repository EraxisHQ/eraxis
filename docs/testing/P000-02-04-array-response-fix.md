# P000-02-04 Array Response Fix

## Issue

Tenant query changed from single object to array response.

## Cause

select("*") returns an array.

## Fix

Use first record:

const tenant = data[0];

## Status

Resolved

