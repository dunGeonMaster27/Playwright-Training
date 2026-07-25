Locators/ selectors ----

1. visible on the page to the user: Accessibility / any tool - screen reader tools

Accessibility/semantic based / Role based locators

text field → Role: textbox + visibility name
login button → Role: button + visible name: login 
forgot password link → Role: link + visible name: forgot password

page.getBy methods:
page.getByRole()
page.getByLabel
page.getByTitle
page.getByAlt
page.getByPlaceholder
page.getByTestId
page.getByText

2. technical way: xpath/css using DOM -- all the browsers
1/html/body/div[2]/div/ul/li/input
//input [@id='username' ]
//input [@name='username' ]
// input [@class=' username' ]

page.locator(xpath/css).click();