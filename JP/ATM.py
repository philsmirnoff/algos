class BankAccount:
    def __init__(self, initial_balance=0):
        self.balance = initial_balance
        self.transaction_history = []  # Stores transaction logs

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.transaction_history.append(f"Deposited: ${amount}")
            return f"✅ Deposit Successful! New Balance: ${self.balance}"
        return "❌ Invalid deposit amount."

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            self.transaction_history.append(f"Withdrew: ${amount}")
            return f"✅ Withdrawal Successful! New Balance: ${self.balance}"
        return "❌ Insufficient funds or invalid amount."

    def check_balance(self):
        return f"💰 Current Balance: ${self.balance}"

    def get_transaction_history(self):
        return self.transaction_history if self.transaction_history else ["No transactions yet."]


def run_atm():
    account = BankAccount(initial_balance=100)  # Default balance $100

    print("\n🔹 Welcome to the Python ATM! 🔹")

    while True:
        print("\n1️⃣ Deposit\n2️⃣ Withdraw\n3️⃣ Check Balance\n4️⃣ Transaction History\n5️⃣ Exit")
        choice = input("Select an option: ")

        if choice == "1":
            amount = float(input("Enter deposit amount: "))
            print(account.deposit(amount))

        elif choice == "2":
            amount = float(input("Enter withdrawal amount: "))
            print(account.withdraw(amount))

        elif choice == "3":
            print(account.check_balance())

        elif choice == "4":
            print("\n📜 Transaction History:")
            for transaction in account.get_transaction_history():
                print(transaction)

        elif choice == "5":
            print("Thank you for using Python ATM! Goodbye 👋")
            break

        else:
            print("❌ Invalid selection. Try again.")

# Run the ATM application
if __name__ == "__main__":
    run_atm()
