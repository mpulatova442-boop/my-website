# Banking System - Java Backend Project

A simple yet practical banking system implementation in Java that demonstrates core object-oriented programming principles.

## Project Overview

This project implements a basic banking system with account management, deposit/withdrawal operations, and inter-account transfers. It's designed as a learning tool to practice OOP concepts, proper error handling, and clean code structure.

## Features

- **BankAccount Class**: Represents a single bank account with:
  - Account holder information
  - Account number tracking
  - Balance management
  - Deposit operations
  - Withdrawal with validation
  - Transfer capability
  
- **Bank Main Class**: Demonstrates:
  - Creating multiple accounts
  - Performing various banking operations
  - Testing edge cases (insufficient funds, invalid amounts)
  - Inter-account transfers

## Key OOP Concepts Demonstrated

1. **Encapsulation**: Private fields with controlled access
2. **Method Design**: Clear, single-responsibility methods
3. **Error Handling**: Validation of transactions before execution
4. **State Management**: Proper balance tracking and updates
5. **Code Reusability**: Methods that can be used in various scenarios

## Usage

```bash
javac BankAccount.java Bank.java
java Bank
```

## Expected Output

```
--- Account Information ---
Account Holder: Munisa Polatova
Account Number: ACC-001
Current Balance: $1000
---------------------------

--- Testing Deposit ---
✓ Deposited: $500 | New balance: $1500

--- Testing Withdraw ---
✓ Withdrawn: $200 | New balance: $1300
✗ Insufficient funds. Available: $1300

--- Testing Transfer ---
✓ Withdrawn: $300 | New balance: $1000
✓ Deposited: $300 | New balance: $800
✓ Transfer successful to John Doe
```

## Learning Outcomes

- Understanding of class design and object relationships
- Practice with validation and error handling
- Experience with method interaction and state changes
- Introduction to practical business logic in code

## Future Enhancements

- Add transaction history
- Implement interest calculations
- Add account types (Savings, Checking, Business)
- Persistent storage with file I/O
- Database integration
