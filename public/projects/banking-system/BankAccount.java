/**
 * BankAccount - A simple class to represent a bank account with basic operations.
 * This project demonstrates OOP principles including encapsulation, abstraction,
 * and proper error handling in Java.
 */

public class BankAccount {
    private String accountHolder;
    private double balance;
    private String accountNumber;
    
    // Constructor
    public BankAccount(String accountHolder, String accountNumber, double initialBalance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = initialBalance >= 0 ? initialBalance : 0;
    }
    
    // Deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("✓ Deposited: $" + amount + " | New balance: $" + balance);
        } else {
            System.out.println("✗ Deposit amount must be positive.");
        }
    }
    
    // Withdraw money
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("✓ Withdrawn: $" + amount + " | New balance: $" + balance);
            return true;
        } else if (amount > balance) {
            System.out.println("✗ Insufficient funds. Available: $" + balance);
            return false;
        } else {
            System.out.println("✗ Withdrawal amount must be positive.");
            return false;
        }
    }
    
    // Check balance
    public double checkBalance() {
        return balance;
    }
    
    // Display account info
    public void displayAccountInfo() {
        System.out.println("\n--- Account Information ---");
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Current Balance: $" + balance);
        System.out.println("---------------------------\n");
    }
    
    // Transfer money to another account
    public boolean transfer(BankAccount recipient, double amount) {
        if (this.withdraw(amount)) {
            recipient.deposit(amount);
            System.out.println("✓ Transfer successful to " + recipient.accountHolder);
            return true;
        }
        return false;
    }
}
