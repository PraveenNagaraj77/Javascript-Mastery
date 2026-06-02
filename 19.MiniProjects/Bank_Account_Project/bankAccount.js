
function BankAccount(accountHolder,balance){
    this.accountHolder = accountHolder;
    this.balance=balance;
}

//Creating a Premium account

function PremiumAccount(accountHolder,balance,rewardPoints){
    BankAccount.call(this,accountHolder,balance);
    this.rewardPoints = rewardPoints;
}

PremiumAccount.prototype = Object.create(
    BankAccount.prototype
);

PremiumAccount.prototype.constructor = PremiumAccount;

PremiumAccount.prototype.showRewards = function(){
    console.log(`Reward Points : ${this.rewardPoints}`)
}



//closures for  transaction count

function createTransactionHistory(){
    let count = 0;
    return function(){
        count++
        return count;
    }
}

const transactionCounter = createTransactionHistory();

BankAccount.prototype.deposit = function(amount){
    this.balance+=amount;
    console.log(`Transaction #${transactionCounter()} :  ${amount} depositted Successfully`);
}

BankAccount.prototype.withdraw = function(amount){
    if(amount<this.balance){
        console.log("Insufficient Balance");
        return;
    }

    this.balance -= amount;
    console.log(`Transaction #${transactionCounter()} : ${amount} withdrawn successfully`);
}

BankAccount.prototype.getBalance = function(){
    console.log(`Current Balance : $ ${this.balance}`);
}

const praveenAccount = new BankAccount("Praveen",50000);



praveenAccount.getBalance();
praveenAccount.deposit(10000);
praveenAccount.withdraw(1000);
praveenAccount.getBalance();


praveenAccount.deposit(20000)


const premiumUser = new PremiumAccount(
    "Dhanush",
    100000,
    500
)

premiumUser.deposit(5000);
premiumUser.showRewards();
premiumUser.getBalance();