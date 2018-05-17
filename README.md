# Tiny Template JS - lightweight javascript template library
Tiny Template JS (1.4 KB unminified) helps to generate html texts, based on html templates.
That is excellent solution if you need to use templates in your Javascript, but you don't need to import any massive libraries or frameworks.

## How to use
Simple steps to use template engine:
* import tiny template script to the page
* make template: html markup or JS text
* render a model to html string using template
* populate any html container with resulting html objects

### 1. Include tiny template JS library into your webpage
```html
<script src='tiny-template.js'></script>
```
### 2. Make template 
#### 2.1. Place a template in your page. You may use any container. 
The best way is to use block `script type="text/html"`
```html
<script type="text/html" id='list-template-container'>
  <li data-id='{{id}}' class='{{name ? '' : 'empty-name-container'}}'>
    {{name}}
  </li>
</script>
```
#### 2.2. Store template as Javascript text 
```javascript
var templateText = "<li data-id='{{id}}' class='{{name ? '' : 'empty-name-container'}}'>{{name}}</li>";
```
use `{{` and `}}` to place any model property or expression into template
### 3. Render your model using template 
  #### 3.1. Render single object  
  ```javascript
  var model = {
    id: 1,
    name: 'Mary'
  };
  var resultHtmlText = tt.Obj('list-template-container', model);
  // result: "<li data-id='1' class=''>Mary</li>"
  // or do the same using text JS template: resultHtmlText = tt.Obj(templateText, model); 
  ```
  #### 3.2. Render array of objects
  ```javascript
  var model = [{
    id: 1,
    name: 'Mary'
  },{
    id: 2,
    name: null
  }];
  var resultHtmlText = tt.Array('list-template-container', model);
  // result: "<li data-id='1' class=''>Mary</li><li data-id='2' class='empty-name-container'></li>"
  // or do the same using text JS template: resultHtmlText = tt.Array(templateText, model); 
  ```
### 4. Populate any html container with resulting html objects
There is some target html element on your page
```html
...
<ul id='data-list'></ul>
...
```
#### 4.1. Populate target element using pure Javascript
```javascript
var container = document.getElementById("data-list") ;
container.innerHTML = resultHtmlText
```
#### 4.2. Populate target element using jQuery
```javascript
$('#data-list').html(resultHtmlText)
```
