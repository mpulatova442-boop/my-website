/**
 * Bank - Main class to demonstrate the BankAccount system.
 * This shows how multiple bank accounts interact with each other.
 */

public class Bank {
    public static void main(String[] args) {
        // Create bank accounts
        BankAccount account1 = new BankAccount("Munisa Polatova", "ACC-001", 1000);
        BankAccount account2 = new BankAccount("John Doe", "ACC-002", 500);
        
        // Display initial account info
        account1.displayAccountInfo();
        account2.displayAccountInfo();
        
        // Test deposit
        System.out.println("--- Testing Deposit ---");
        account1.deposit(500);
        
        // Test withdraw
        System.out.println("\n--- Testing Withdraw ---");
        account1.withdraw(200);
        account1.withdraw(2000); // This should fail
        
        // Test transfer
        System.out.println("\n--- Testing Transfer ---");
        account1.transfer(account2, 300);
        
        // Display final account info
        System.out.println("\n--- Final Account Information ---");
        account1.displayAccountInfo();
        account2.displayAccountInfo();
        
        // Test balance check
        System.out.println("Account 1 Balance: $" + account1.checkBalance());
        System.out.println("Account 2 Balance: $" + account2.checkBalance());
    }
}
