# Bank tech test

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

### User Stories

```
As a user
So that I can add more funds into my account
I would like to make a deposit into my account
```

```
As a user
So that I can withdraw funds from my account
I would like to make a witdrawal from my account
```

```
As a user
So that I can view all transactions
I would like to print a copy of my statement displaying my transactions
```

```
As a user
So that I can view my current balance
I would like to print a copy of my statement displaying my current balance
```

### Designing the Class System

The Excalidraw diagram illustrates the relationship between the three classes. The classes have been designed with Seperation of Concern and  Single Responsibility Principle in mind. The classes consists of:

1. Bank Account Class - To maintain record of current balance and allow user to use functions such as deposit/withdrawal and requesting for statement.
2. Transaction History - This class will focus on maintaining a record of all transactions, it will datestamp all transactions.
3. Bank Statement - This class is responsible for outputing the transactions and the output of the application.

## Getting Started

### Installation

The application has been buil on Node.js. To install Node run the command below:

```
npm install -g npm
```

Jest has been used for testing and Eslint to find and detect issues within the Javascript code. These dependencies are listed within the package.json and can therefore be installed using the command below.

```
npm install
```

### Runing the Program

The program can be launched via Node.

```
node
Account = require('./account')
account = new Account()
```

Once we have instantiated an instance of the class, we can begin using the various functions, such as deposit, withdrawal and printing statement.

```
account.deposit(100)
account.withdraw(50)
account.statement
```

Expected Output:
```
date || credit || debit || balance
27/07/2022  || 100  ||  ||  100
27/07/2022  ||  ||  50  ||  50
```
![alt Program Running](http://url/to/img.png)