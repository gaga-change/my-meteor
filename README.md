## meteor包操作日志

### 1. 开始

```
$ meteor create my-meteor
$ cd my-meteor
$ meteor
```
#### meteor包列表

```
meteor-base@1.0.4             # Packages every Meteor app needs to have
mobile-experience@1.0.4       # Packages for a great mobile UX
mongo@1.1.16                   # The database Meteor supports right now
blaze-html-templates@1.0.4 # Compile .html files into Meteor Blaze views
reactive-var@1.0.11            # Reactive variable for tracker
tracker@1.1.2                 # Meteor's client-side reactive programming library

standard-minifier-css@1.3.4   # CSS minifier run for production mode
standard-minifier-js@1.2.3    # JS minifier run for production mode
es5-shim@4.6.15                # ECMAScript 5 compatibility for older browsers.
ecmascript@0.6.3              # Enable ECMAScript2015+ syntax in app code
shell-server@0.2.3            # Server-side component of the `meteor shell` command

autopublish@1.0.7             # Publish all data to the clients (for prototyping)
insecure@1.0.7                # Allow all DB writes from clients (for prototyping)

```

```
  "dependencies": {
    "babel-runtime": "^6.20.0",
    "meteor-node-stubs": "~0.2.4"
  }
```
### 2. 使用Vue
> vue版本控制一下，因为不同版本的Vue塞入`App.vue`会有所不同，还会报错。

 ``` 
 meteor remove blaze-html-templates
 meteor add static-html akryum:vue akryum:vue-component session
 # 版本注意下，对Vue写法会有影响
 meteor npm install --save vue
 ```
 
 
