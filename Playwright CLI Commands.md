npx playwright test
npx playwright test tests/browser.spec.ts
npx playwright test -g title test
npx playwright test tests/browser.spec.ts:3
npx playwright test tests/
npx playwright test tests/browser.spec.ts tests/example.spec.ts
npx playwright test --last-failed
npx playwright test --headed
npx playwright test --ui   //Playwright UI Window
npx playwright test --debug  //Playwright Inspector Window
npx playwright codegen  //Code Gen Tool
npx playwright codegen <website_url>  //Code Gen Tool with website loaded
npx playwright codegen --viewport-size=1280,720  //Code Gen Tool with viewport size
npx playwright codegen --device="iPhone 13"  //Code Gen Tool with iphone 13 viewport size

npx playwright test --reporter=html  //Generate report with html type
npx playwright test --reporter=list,html  //Generate report with html type and test report list on console
npx playwright test --reporter=list  //Generate test report list on console
npx playwright test --reporter=dot  //Generate dot report on console
npx playwright test --reporter=json  //Generate json report on console
npx playwright test --reporter=junit  //Generate junit xml report on console
npx playwright test --output=tc_results/  //Generate reports in defined folder

npx playwright test --trace="on"  //Generate traces for all test cases
npx playwright test --show-trace "trace.zip" //Opens trace file




Browser config in playwright config ts:
1. projects array is present with some values : run npx playwright test --browser=webkit -> Error: Cannot use --browser option when configuration file defines projects. Specify browserName in the projects instead.
2. projects array is removed : run npx playwright test --browser=webkit -> works fine in webkit
3. projects array length = 0 :
run npx playwright test -> Error: No tests found
run npx playwright test -browser=webkit -> Error: Cannot use --browser option when configuration file defines projects. Specify browserName in the projects instead.