# Introduction
This branch contains modified examples following tutorial: [Testing AngularJS Apps Using Karma](https://www.airpair.com/angularjs/posts/testing-angular-with-karma). 

The tutorial employs [`karma`](http://karma-runner.github.io/0.13/index.html), [`karma-mocha`](https://github.com/karma-runner/karma-mocha), [`karma-chai`](https://github.com/xdissent/karma-chai), [`ngMock`](https://docs.angularjs.org/api/ngMock) to perform unit testing for [`AngularJS`](http://www.angularjs.org):

 - factory
 - controller
 - directive
 - async `$http` call

Multiple browsers are supported and [`karma-coverage`](https://github.com/karma-runner/karma-coverage) is used to generate coverage report.

# How to run

1. Download/clone this branch, extract to a folder, say `joy-karma`.
2. Navigate to the `joy-karma` and `npm install --save-dev`
3. Run `karma`: `karma start`
4. Coverage report is at `./coverage`