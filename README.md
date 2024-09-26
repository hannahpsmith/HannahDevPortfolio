x GIVEN a single-page application portfolio for a web developer
x WHEN I load the portfolio
x THEN I am presented with a page containing a header, a section for content, and a footer
x WHEN I view the header
x THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
x WHEN I view the navigation titles
x THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
x WHEN I click on a navigation title
x THEN the browser URL changes and I am presented with the corresponding section below the navigation and that title is highlighted
x WHEN I load the portfolio the first time
x THEN the About Me title and section are selected by default
x WHEN I am presented with the About Me section
x THEN I see a recent photo or avatar of the developer and a short bio about them

WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

x WHEN I am presented with the Contact section
x THEN I see a contact form with fields for a name, an email address, and a message
x WHEN I move my cursor out of one of the form fields without entering text
x THEN I receive a notification that this field is required
x WHEN I enter text into the email address field
x THEN I receive a notification if I have entered an invalid email address
x WHEN I am presented with the Resume section
x THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
x WHEN I view the footer
x THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```