````markdown
# SpendWise - Budget Tracker

## Project Description

SpendWise is a simple personal budget tracker website designed to help users organize and monitor their daily expenses.

The project was developed using HTML and CSS as part of the Week 2 web development assignment.

## Features

The SpendWise Budget Tracker includes:

- An expense table
- Expense name, amount, category, and date
- Add Expense form
- Category dropdown
- Sample expense records
- Budgeting image/logo
- Embedded budgeting video
- Collapsible "How to use this tracker" section
- Table row hover effects
- Form input focus effects
- Responsive layout

## HTML Structure

The `index.html` file contains the structure of the webpage.

It includes:

- `<header>` for the website heading
- `<img>` for the SpendWise logo
- `<form>` for entering expenses
- `<select>` for selecting expense categories
- `<table>` for displaying expenses
- `<thead>` and `<tbody>` for proper table structure
- `<details>` and `<summary>` for instructions
- `<iframe>` for embedded video
- `<footer>` for the page footer

## CSS Styling

The `style.css` file controls the appearance of the website.

It includes:

- Page layout
- Form styling
- Table borders
- Table header styling
- Alternating table rows
- Table hover effects
- Button styling
- Input focus effects
- Responsive iframe sizing

## Advanced CSS Selectors Used

The project uses several advanced CSS selectors:

1. Descendant selector:
   `.expenses-section td`

2. Direct child selector:
   `.add-expense-section > form`

3. Position pseudo-class:
   `tr:nth-child(even)`

4. Negation pseudo-class:
   `input:not([type="submit"])`

5. Focus pseudo-class:
   `input:focus`

6. Hover pseudo-class:
   `tbody tr:hover`

## Technologies Used

- HTML5
- CSS3
- Git
- GitHub
- Visual Studio Code

## Project Files

```text
SpendWise/
│
├── index.html
├── style.css
├── README.md
└── logo.png
````

## Future Improvements

JavaScript can be added in future weeks to make the Add Expense button functional and allow users to dynamically add, calculate, edit, and delete expenses.

## Author

Nicholas Kachinga

## Year

2026

```
```
