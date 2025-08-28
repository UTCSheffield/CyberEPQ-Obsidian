const getMermaid = require('./gantt');

test('Nothing happens', () => {
    expect(getMermaid()).toBe("");
  });

test('Completed', () => {
    expect(getMermaid({
      "symbol": "-",
      "link": {
          "path": "Modules.md",
          "embed": false,
          "type": "file"
      },
      "section": {
          "path": "Modules.md",
          "embed": false,
          "type": "file"
      },
      "text": "Overall Journal Reflection 🛫 2025-03-31 📅 2025-04-02 ✅ 2025-04-01",
      "tags": [],
      "line": 16,
      "lineCount": 1,
      "list": 6,
      "outlinks": [],
      "path": "Modules.md",
      "children": [],
      "task": true,
      "annotated": true,
      "position": {
          "start": {
              "line": 16,
              "col": 0,
              "offset": 365
          },
          "end": {
              "line": 16,
              "col": 73,
              "offset": 438
          }
      },
      "subtasks": [],
      "real": true,
      "header": {
          "path": "Modules.md",
          "embed": false,
          "type": "file"
      },
      "start": "2025-03-31T00:00:00.000+01:00",
      "due": "2025-04-02T00:00:00.000+01:00",
      "completion": "2025-04-01T00:00:00.000+01:00",
      "status": " ",
      "checked": false,
      "completed": true,
      "fullyCompleted": false
  })).toBe("Overall Journal Reflection :done, 2025-03-31, 2025-04-01");
  });


test('Module 0', () => {
  expect(getMermaid({
    "symbol": "-",
    "link": {
        "path": "Modules.md",
        "embed": false,
        "type": "file"
    },
    "section": {
        "path": "Modules.md",
        "embed": false,
        "type": "file"
    },
    "text": "Module 0 ⏳ 2025-03-10 📅 2025-03-14",
    "tags": [],
    "line": 6,
    "lineCount": 1,
    "list": 6,
    "outlinks": [],
    "path": "Modules.md",
    "children": [],
    "task": true,
    "annotated": true,
    "position": {
        "start": {
            "line": 6,
            "col": 0,
            "offset": 26
        },
        "end": {
            "line": 6,
            "col": 41,
            "offset": 67
        }
    },
    "subtasks": [],
    "real": true,
    "header": {
        "path": "Modules.md",
        "embed": false,
        "type": "file"
    },
    "scheduled": "2025-03-10T00:00:00.000+00:00",
    "due": "2025-03-14T00:00:00.000+00:00",
    "status": " ",
    "checked": false,
    "completed": false,
    "fullyCompleted": false
})).toBe("Module 0 :active, 2025-03-10, 2025-03-14");
});



test('Module 1', () => {
  expect(getMermaid({
    "symbol": "-",
    "link": {
        "path": "Modules.md",
        "embed": false,
        "type": "file"
    },
    "section": {
        "path": "Modules.md",
        "embed": false,
        "type": "file"
    },
    "text": "Module 1 📅 2025-03-21 #gantt",
    "tags": [
        "#gantt"
    ],
    "line": 7,
    "lineCount": 1,
    "list": 6,
    "outlinks": [],
    "path": "Modules.md",
    "children": [],
    "task": true,
    "annotated": true,
    "position": {
        "start": {
            "line": 7,
            "col": 0,
            "offset": 68
        },
        "end": {
            "line": 7,
            "col": 35,
            "offset": 103
        }
    },
    "subtasks": [],
    "real": true,
    "header": {
        "path": "Modules.md",
        "embed": false,
        "type": "file"
    },
    "due": "2025-03-21T00:00:00.000+00:00",
    "status": " ",
    "checked": false,
    "completed": false,
    "fullyCompleted": false
})).toBe("Module 1 :active, 2025-03-21");
});


test('Milestone', () => {
  expect(getMermaid({
    "symbol": "*",
    "link": {
        "path": "Planning/Tasks.md",
        "embed": false,
        "type": "file"
    },
    "section": {
        "path": "Planning/Tasks.md",
        "embed": false,
        "type": "file"
    },
    "text": "Presentation Upload 📅 2025-03-10 #ganttchart",
    "tags": [
        "#ganttchart"
    ],
    "line": 11,
    "lineCount": 1,
    "list": 8,
    "outlinks": [],
    "path": "Planning/Tasks.md",
    "children": [],
    "task": true,
    "annotated": true,
    "position": {
        "start": {
            "line": 11,
            "col": 0,
            "offset": 204
        },
        "end": {
            "line": 11,
            "col": 52,
            "offset": 256
        }
    },
    "subtasks": [],
    "real": true,
    "header": {
        "path": "Planning/Tasks.md",
        "embed": false,
        "type": "file"
    },
    "due": "2025-03-10T00:00:00.000+00:00",
    "status": " ",
    "checked": false,
    "completed": false,
    "fullyCompleted": false
})).toBe("Presentation Upload :milestone, active, 2025-03-10");
});

test('Module 2', () => {
  expect(getMermaid({
    "symbol": "-",
    "link": {
        "path": "Modules.md",
        "embed": false,
        "type": "file"
    },
    "section": {
        "path": "Modules.md",
        "embed": false,
        "type": "file"
    },
    "text": "Module 2 🛫 2025-04-03 ✅ 2025-04-08",
    "tags": [],
    "line": 8,
    "lineCount": 1,
    "list": 6,
    "outlinks": [],
    "path": "Modules.md",
    "children": [],
    "task": true,
    "annotated": true,
    "position": {
        "start": {
            "line": 8,
            "col": 0,
            "offset": 104
        },
        "end": {
            "line": 8,
            "col": 41,
            "offset": 145
        }
    },
    "subtasks": [],
    "real": true,
    "header": {
        "path": "Modules.md",
        "embed": false,
        "type": "file"
    },
    "start": "2025-04-03T00:00:00.000+01:00",
    "completion": "2025-04-08T00:00:00.000+01:00",
    "status": "x",
    "checked": true,
    "completed": true,
    "fullyCompleted": true
})).toBe("Module 2 :done, 2025-04-03, 2025-04-08");
});

test('End of Project Review', () => {
  expect(getMermaid({
    "symbol": "*",
    "link": {
        "path": "Planning/Tasks.md",
        "embed": false,
        "type": "file"
    },
    "section": {
        "path": "Planning/Tasks.md",
        "embed": false,
        "type": "file"
    },
    "text": "End of Project Review",
    "tags": [],
    "line": 13,
    "lineCount": 1,
    "list": 8,
    "outlinks": [],
    "path": "Planning/Tasks.md",
    "children": [],
    "task": true,
    "annotated": false,
    "position": {
        "start": {
            "line": 13,
            "col": 1,
            "offset": 330
        },
        "end": {
            "line": 13,
            "col": 28,
            "offset": 357
        }
    },
    "subtasks": [],
    "real": true,
    "header": {
        "path": "Planning/Tasks.md",
        "embed": false,
        "type": "file"
    },
    "parent": 12,
    "status": " ",
    "checked": false,
    "completed": false,
    "fullyCompleted": false
})).toBe("End of Project Review :active, 1d");
});


test('Overall Journal Reflection', () => {
  expect(getMermaid({
    "symbol": "-",
    "link": {
        "path": "Modules.md",
        "embed": false,
        "type": "file"
    },
    "section": {
        "path": "Modules.md",
        "embed": false,
        "type": "file"
    },
    "text": "Overall Journal Reflection 🛫 2025-03-31 📅 2025-04-02 ✅2025-04-09/10:58",
    "tags": [],
    "line": 16,
    "lineCount": 1,
    "list": 6,
    "outlinks": [],
    "path": "Modules.md",
    "children": [],
    "task": true,
    "annotated": true,
    "position": {
        "start": {
            "line": 16,
            "col": 0,
            "offset": 365
        },
        "end": {
            "line": 16,
            "col": 73,
            "offset": 438
        }
    },
    "subtasks": [],
    "real": true,
    "header": {
        "path": "Modules.md",
        "embed": false,
        "type": "file"
    },
    "start": "2025-03-31T00:00:00.000+01:00",
    "due": "2025-04-02T00:00:00.000+01:00",
    "completion": "2025-04-01T00:00:00.000+01:00",
    "status": " ",
    "checked": false,
    "completed": true,
    "fullyCompleted": false
})).toBe("Overall Journal Reflection :done, 2025-03-31, 2025-04-01");
});

/*
test('Module 0', () => {
  expect(getMermaid()).toBe("");
});
*/