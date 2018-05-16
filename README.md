# Tiny Template lightweight javascript template library
Light weight JavaScript template engine. Tiny template helps generate html text based on templates.

## How to use
Simple steps to use template engine:
* add tiny template script to the page
* add html template markup to the page
* render a model to html string using template
* add resulting html into any htmp container

### 1. Include tiny template library into your webpage
```html
<script src='tiny-template.js'></script>
```
### 2. Place a template in your page. You may use any container. 
The best way is to use block `script type="text/html"`
```html
<ul id='data-list'></ul>
...
<script type="text/html" id='list-template-container'>
  <li data-id='{{id}}' class='{{name ? '' : 'empty-name-container'}}'>
    {{name}}
  </li>
</script>
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
  // resultHtmlText = "<li data-id='1' class=''>Mary</li>"
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
  // resultHtmlText = "<li data-id='1' class=''>Mary</li><li data-id='2' class='empty-name-container'></li>"
  ```
### 4. Insert resulting html text into any html container on your page using any JS tools, jQuery for example
```javascript
$('#data-list').html(resultHtmlText)
```
