TD-COM-001

Navigation labels are currently hardcoded.

Future Work:
Navigation labels should be localization-aware.

Status:
OPEN

---

TD-COM-002

Orders page contains:

* Order Total
* Stock Available
* Yes
* No

These should move to translation files.

Status:
OPEN

---

TD-COM-003

Commerce modules currently use registry data.

Persistence layer not implemented.

Status:
OPEN

Target Milestone:
M003 Persistence Layer

------------------------
TD-M003-001
Excessive console logging

Files:
- current-user-service.ts
- permission-service.ts
- navigation-registry.ts

Priority:
Medium

Status:
OPEN

----------------------------
TD-M003-002

MultiPersistenceProvider
should use:

Promise.allSettled()

instead of:

Promise.all()

Reason:
Partial provider failure handling.

Status:
OPEN
Priority:
LOW
