# nyanRepeat
DOM Repeat like ng-repeat, work with jQuery

## CDN

### Rawgit
```html
<script src="https://cdn.rawgit.com/nyancodeid/nyanRepeat/5ed27cb1/dist/nyanrepeat.min.js" ></script>
<script src="https://cdn.rawgit.com/nyancodeid/nyanRepeat/5ed27cb1/js/nyanrepeat.js" ></script>
```

### GitCDN
```html
<script src="https://gitcdn.xyz/repo/nyancodeid/nyanRepeat/master/dist/nyanrepeat.min.js" ></script>
<script src="https://gitcdn.xyz/repo/nyancodeid/nyanRepeat/master/js/nyanrepeat.js" ></script>
```


## Example

### HTML
```html
<div data-repeat="posts">
  <h2 data-repeat-item="title"></h2>
  <span data-repeat-item="subtitle"></span>
  <a data-repeat-attr="link in href" data-repeat-item="download"></a>
</div>
```

### Javascript
```javascript
var posts = [
  {
    title: 'Foo Bar 1',
    subtitle: 'foo bar subtitle',
    link: 'foo.html',
    download: 'boom.zip'
  },
  {
    title: 'Foo Bar 2',
    subtitle: 'foo bar subtitle',
    link: 'bar.html',
    download: 'anotherBoom.zip'
  }
];
nyan.repeat.init(); /* Call nyanRepeat */
```

### Description
| Attribut        | Value | Syntax | Example |
| ------------- |:-------------|:-----|:-----|
| `data-repeat`     | variabel array yang akan di Repeat | "`arrayname`" | `data-repeat="posts"` |
| `data-repeat-item` | array key yang akan di tampilkan element | "`arraykey`" | `data-repeat-item="title"` |
| `data-repeat-attr` | array key yang akan di tampilkan di attribut  | "`arraykey in attributname`" or "`arraykey in attributkey,anotherArrayKey in anotherAttributName`" | `data-repeat-attr="link in href"` |

