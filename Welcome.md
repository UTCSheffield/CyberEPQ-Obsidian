This is your new *vault*.

Make a note of something, [[create a link]], or try [the Importer](https://help.obsidian.md/Plugins/Importer)!

When you're ready, delete this note and make the vault your own.


From [author:: Edgar Allan Poe], written in (published:: 1845)

```dataviewjs

const harvard = (link) => {
dv.span(dv.fileLink(link).title); 
}

harvard("The CyberEPQ")


```


`= harvard("The CyberEPQ") `


`$= dv.current().file.mtime`

`= [[The CyberEPQ]].citation`
`= [[Making the Future - Sheffield UTC Academy Trust]].citation`

```dataviewjs
dv.taskList(dv.pages().file.tasks.where(t => !t.completed));
```




---

```wordcloud
source: query
query: 'What does the project need to allow me to include'
weight: 2
```




