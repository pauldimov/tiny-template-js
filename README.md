# Tiny Template JS - lightweight javascript template library
Tiny Template JS (1.4 KB unminified) helps to generate html or any other formatted texts, based on html templates or simple strings.
That is excellent solution if you need to use templated texts or repeaters in your Javascript, but you don't want to import any massive libraries or frameworks for that tiny task.

## How to use Tiny Template JS
Follow 4 simple steps:
1. *import Tiny Template JS* script to the page
1. *describe template and model*
1. *get resulting html string*
1. *populate html container* with resulting html objects or use resulting string for mailing or reports, whatever...

### 1. Include Tiny Template JS library into your webpage
```html
<script src='tiny-template.js'></script>
```
### 2. Make template 
use `{{` and `}}` to place any model property or inline expression into template.
Your model can include nested objects or functions.

Describe your template one of the ways below.
#### 2.1. Place a HTML template directly on your page. 
You may use HTML from any container. The best way is to wrap html into `script` block like `<script type="text/html" id="my-template">...`. This kind of content is ignored by all browsers.
```html
<script type="text/html" id='list-template-container'>
  <li data-id='{{id}}' class='{{name ? '' : 'empty-name-container'}}'>
    {{name}}
  </li>
</script>
```
#### 2.2. Describe template string directly in Javascript 
Place your HTML-formatted string or any other template string into Javascript variable.
```javascript
var templateText = "<li data-id='{{id}}' class='{{name ? '' : 'empty-name-container'}}'>{{name}}</li>";
var templateText2 = "Hello, {{name}}! You win {{bingo}}$";
```
You may use any string or HTML container as template;
### 3. Render your model using template 
  #### 3.1. Make string from single object  
  You may use simple object as a model.
  ```javascript
  var model = {
    id: 1,
    name: 'Mary'
  };
  var resultHtmlText = tt.Obj('list-template-container', model);
  // result: "<li data-id='1' class=''>Mary</li>"
  // or do the same using text JS template: resultHtmlText = tt.Obj(templateText, model); 
  ```
  #### 3.2. Make string from array of objects
  You also may use an array as a model. Your template will be repeated for each array element.
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
  // or do the same using text JS template: resultHtmlText = tt.Array(templateText2, model); 
  ```
  #### 3.3. Format string using Tiny Template JS
  You may use Tiny Template JS as string formatter. Not so fancy but why not?
  ```javascript
  var resultHtmlText = tt.Obj(
  'Hello, {{name}}! You win {{bingo}}$', {
    bingo: 1000,
    name: 'Mary'
  });
  // result: "Hello, Mary! You win 1000$"
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
#### 4.3. Use resulting string whatever you want
```javascript
var pdfHeader = resultHtmlText;
```
