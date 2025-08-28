

```dataview 
TABLE WITHOUT ID default(type, "Web Page") as "Source Type", title + " " + source as Source, author as Author, published as "Date Published", publisher as "Publisher (Books Only)", created as "Date Accessed", default(was_it_useful, description) as "Was it useful?"
FROM #clippings 
```

## References

TODO : Order correctly and make work for books and things that are actually used in the page.

```dataview 
LIST WITHOUT ID author + " (" + published.year + ") " + title +  " " + publisher + " Retrieved " + created + ", from " + source
FROM #clippings 
```

